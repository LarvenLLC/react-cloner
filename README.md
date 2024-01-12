# react-cloner

> Add/Remove Form Fields or other Components Dynamically

[![NPM](https://img.shields.io/npm/v/react-cloner.svg)](https://www.npmjs.com/package/react-cloner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

![React Cloner Demo](/example/public/react-cloner.gif)

## Install

```bash
npm install --save react-cloner
```

OR

```bash
yarn add react-cloner
```

## Usage

```jsx
import Cloner from 'react-cloner'

export default function ContactPeopleForm() {
  function handleSubmit(event) {
    event.preventDefault()
    let form = {},
      formData = new FormData(event.target)
    for (let pair of formData.entries()) {
      let key = pair[0],
        value = pair[1]
      form[key] = value
    }
    alert(JSON.stringify(form, 0, 2))
  }
  return (
    <div className='col py-3'>
      <form onSubmit={handleSubmit}>
        <Cloner
          title='Contact Person'
          addButtonClassName='btn btn-outline-primary'
          deleteButtonClassName='btn btn-outline-danger'
          deleteButtonWrapperClassName='form-group'
          component={<ContactPerson />}
          componentWrapperClassName='d-flex w-100 align-items-end justify-content-between mb-3'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

// increment prop is passed onto the Cloner component by default
// it counts the number of the cloned component from 1 onwards
function ContactPerson({ increment }) {
  return (
    <div className='row w-100 mx-auto'>
      <div className='pl-0 col col-12 col-md-4 form-group'>
        <label>Name</label>
        <input
          name={`contact-person-name-${increment}`}
          className='form-control'
        />
      </div>
      <div className='px-0 col col-12 col-md-5 form-group'>
        <label>Email</label>
        <input
          name={`contact-person-email-${increment}`}
          className='form-control'
        />
      </div>
      <div
        className={`${
          increment === 1 ? 'pr-0' : ''
        } col col-12 col-md-3 form-group`}
      >
        <label>Phone</label>
        <input
          name={`contact-person-phone-${increment}`}
          className='form-control'
        />
      </div>
    </div>
  )
}
```

## Props

| Prop                         |                         Explanation                          | Data Type |                                                          (Sample) Values                                                           | Default |
| ---------------------------- | :----------------------------------------------------------: | :-------: | :--------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| title                        |           semantic name of component to be cloned            |  String   |                                                `Contact Person`<br/>`Referral`<br/>                                                | `null`  |
| initialItems                 |   number of times component specified to appear initially    |  Number   |                                                            `5`<br/>`2`                                                             |   `1`   |
| component                    |                 react component to be cloned                 |   React   | `const Example = () => { return <div/> }`<br/>`class Example extends Component { render(){ return(<div/>) }} => { return <div/> }` | `null`  |
| onDelete                     |           callback on each cloned component delete           |   Func    |                                                   `(index) => console.log("deleted %s", index)`                                                   | `null`  |
| shouldHideLabel              |                 hide cloned component label?                 |   Bool    |                                                         `true`<br/>`false`                                                         | `true`  |
| addButtonPosition            |              horizontal alignment of add button              |  String   |                                                         `left`<br/>`right`                                                         | `right` |
| componentWrapperStyle        |                 Cloner parent wrapper style                  |  Object   |                                                   `{}`<br/>`{background: "red"}`                                                   | `null`  |
| componentWrapperClassName    |                 Cloner parent wrapper class                  |  String   |                                                      `margin-auto`<br/>`py-3`                                                      | `null`  |
| labelClassName               |                 cloned component label class                 |  String   |                                                            `text-muted`                                                            | `null`  |
| addButtonClassName           |                 add (component) button class                 |  String   |                                                     `btn`<br/>`button-primary`                                                     |  `""`   |
| deleteButtonClassName        |             cloned component delete button class             |  String   |                                                      `btn-danger`<br/>`b-red`                                                      | `null`  |
| deleteButtonWrapperClassName |     cloned component delete button parent wrapper class      |  String   |                                                       `d-inline`<br/>`py-3`                                                        | `null`  |
| shouldRemoveDeleteWrapper    | whether to remove the wrapper component around delete button |   Bool    |                                                         `true`<br/>`false`                                                         | `false` |

## License

MIT © [BossBele](https://github.com/BossBele)
