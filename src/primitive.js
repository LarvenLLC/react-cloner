import React, { cloneElement, forwardRef, isValidElement } from 'react'

export function mergeReactProps(parentProps, childProps) {
  // All child props should override.
  const overrideProps = { ...childProps }

  for (const propName in childProps) {
    const parentPropValue = parentProps[propName]
    const childPropValue = childProps[propName]

    const isHandler = /^on[A-Z]/.test(propName)
    // If it's a handler, modify the override by composing the base handler.
    if (isHandler) {
      // Only compose the handlers if both exist.
      if (childPropValue && parentPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue?.(...args)
          parentPropValue?.(...args)
        }
        // Otherwise, avoid creating an unnecessary callback.
      } else if (parentPropValue) {
        overrideProps[propName] = parentPropValue
      }
    } else if (propName === 'style') {
      overrideProps[propName] = { ...parentPropValue, ...childPropValue }
    } else if (propName === 'className') {
      overrideProps[propName] = [parentPropValue, childPropValue]
        .filter(Boolean)
        .join(' ')
    }
  }

  return { ...parentProps, ...overrideProps }
}

/**
 * Handles setting callback refs and MutableRefObjects.
 * @param ref The ref to use for the instance.
 * @param instance The instance being set.
 */
function setRef(ref, instance) {
  if (ref) {
    ref(instance)
  } else if (ref != null) {
    ref.current = instance
  }
}

export function combinedRef(refs) {
  return (instance) => refs.forEach((ref) => setRef(ref, instance))
}

export const Slot = forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props

  if (!isValidElement(children)) {
    return null
  }
  return cloneElement(children, {
    ...mergeReactProps(slotProps, children.props),
    ref: combinedRef([forwardedRef, children.ref])
  })
})

export const Primitive = forwardRef((props, forwardedRef) => {
  const { children, as = 'div', asChild, ...restProps } = props
  const Wrapper = asChild ? Slot : as
  return (
    <Wrapper {...restProps} ref={forwardedRef}>
      {children}
    </Wrapper>
  )
})

Primitive.displayName = 'Primitive'

export default Primitive
