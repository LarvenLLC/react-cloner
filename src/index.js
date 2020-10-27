import React, { cloneElement, Fragment, useEffect, useState } from 'react'

export default function Cloner({
  title,
  initialItems,
  addButtonClassName,
  component,
  componentWrapperStyle,
  componentWrapperClassName,
  deleteButtonClassName,
  deleteButtonWrapperClassName,
  addButtonPosition,
  labelClassName,
  onDelete,
  showLabel
}) {
  const [items, setItems] = useState([])

  useEffect(() => {
    let tempArr = []
    for (let i = 0; i < initialItems; i++) {
      tempArr.push(i)
    }
    setItems(tempArr)
  }, [initialItems])

  function addItem(e) {
    e.preventDefault()
    let tempArr = [],
      len = items.length + 1
    for (let i = 2; i <= len; i++) {
      tempArr.push(i)
    }
    setItems([...items, tempArr])
  }

  function removeItems(number) {
    let tempArr = items
    tempArr = tempArr.filter((el) => el != number)
    setItems(tempArr)
  }

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
            labelClassName={labelClassName}
            onDelete={() => {
              removeItems(el)
              onDelete && onDelete()
            }}
            showLabel={showLabel}
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
  showLabel: true
}

function ComponentWrapper({
  title,
  component,
  increment,
  componentWrapperStyle,
  componentWrapperClassName,
  deleteButtonClassName,
  deleteButtonWrapperClassName,
  labelClassName,
  showLabel,
  onDelete
}) {
  return (
    <>
      {increment > 1 && showLabel ? (
        <div className={labelClassName}>{`${title} ${increment}`}</div>
      ) : null}
      <div className={componentWrapperClassName} style={componentWrapperStyle}>
        <>{cloneElement(component, { increment })}</>
        <div className={deleteButtonWrapperClassName}>
          {increment != 1 ? (
            <button
              type='button'
              onClick={onDelete}
              className={deleteButtonClassName}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </>
  )
}
