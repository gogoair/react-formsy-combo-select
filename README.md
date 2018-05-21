# react-formsy-combo-select
A simple Formsy wrapper around react-combo-select.

## Installation
For use in your own project:
```
npm install --save react-formsy-combo-select
```

## Usage
react-formsy-combo-select allows usage of react-combo-select with as a Formsy component, allowing it to work with Formsy validation and have its value included in the data passed as argument to Formsy.Form's onSubmit and onValidSubmit handlers.

```javascript
import ComboSelect from 'react-formsy-combo-select';
```

Make sure you also include css files from the base react-combo-select package located in:

/node_modules/react-combo-select/style.css

/node_modules/font-awesome/css/font-awesome.min.css


## props/options
The wrapper supports all the props expected by Formsy components and react-combo-select.

onChange works the react-combo-select way: new value as parameter rather than the event object.

For all other props, refer to Formsy and react-combo-select documentation:

[https://github.com/markokostovski/react-combo-select](https://github.com/markokostovski/react-combo-select)

[https://github.com/formsy/formsy-react](https://github.com/formsy/formsy-react)
