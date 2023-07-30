import React, {
  cloneElement,
  Fragment,
  useCallback,
  useEffect,
  useState
} from 'react'
import Primitive from './primitive'

export default function Cloner({
  title,
  initialItems,
  addButtonClassName,
  component,
  componentWrapperStyle,
  componentWrapperClassName,
  deleteButtonClassName,
  deleteButtonWrapperClassName,
  shouldRemoveDeleteWrapper,
  addButtonPosition,
  labelClassName,
  onDelete,
  shouldHideLabel
}) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const tempArr = []
    for (let i = 0; i < initialItems; i++) {
      tempArr.push(i)
    }
    setItems(tempArr)
  }, [initialItems])

  const addItem = useCallback((e) => {
    e.preventDefault()
    const tempArr = []
    const len = items.length + 1
    for (let i = 2; i <= len; i++) {
      tempArr.push(i)
    }
    setItems([...items, tempArr])
  }, [])

  const removeItems = useCallback((number) => {
    let tempArr = items
    tempArr = tempArr.filter((el) => el !== number)
    setItems(tempArr)
  }, [])

  return (
    <Fragment>
      {items.map((el, i) =>
        cloneElement(
          <ComponentWrapper
            title={title}
            component={component}
            componentWrapperStyle={componentWrapperStyle}
            componentWrapperClassName={componentWrapperClassName}
            deleteButtonClassName={deleteButtonClassName}
            deleteButtonWrapperClassName={deleteButtonWrapperClassName}
            shouldRemoveDeleteWrapper={shouldRemoveDeleteWrapper}
            labelClassName={labelClassName}
            onDelete={() => {
              removeItems(el)
              onDelete && onDelete()
            }}
            shouldHideLabel={shouldHideLabel}
          />,
          { increment: i + 1, key: el },
          null
        )
      )}
      <div style={{ textAlign: `${addButtonPosition}` }}>
        <button type='button' className={addButtonClassName} onClick={addItem}>
          Add {title}
        </button>
      </div>
    </Fragment>
  )
}

Cloner.defaultProps = {
  initialItems: 1,
  addButtonPosition: 'right',
  shouldHideLabel: false,
  shouldRemoveDeleteWrapper: false
}

function ComponentWrapper({
  title,
  component,
  increment,
  componentWrapperStyle,
  componentWrapperClassName,
  deleteButtonClassName,
  deleteButtonWrapperClassName,
  shouldRemoveDeleteWrapper,
  labelClassName,
  shouldHideLabel,
  onDelete
}) {
  return (
    <>
      {increment > 1 && !shouldHideLabel ? (
        <div className={labelClassName}>{`${title} ${increment}`}</div>
      ) : null}
      <div className={componentWrapperClassName} style={componentWrapperStyle}>
        <>{cloneElement(component, { increment })}</>
        <Primitive
          className={deleteButtonWrapperClassName}
          asChild={shouldRemoveDeleteWrapper}
        >
          {increment !== 1 ? (
            <button
              type='button'
              onClick={onDelete}
              className={deleteButtonClassName}
            >
              Delete
            </button>
          ) : null}
        </Primitive>
      </div>
    </>
  )
}
