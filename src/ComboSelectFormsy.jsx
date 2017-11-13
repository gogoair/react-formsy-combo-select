import React from 'react';
import ComboSelect from 'react-combo-select';
import { withFormsy } from 'formsy-react';

import { cleanProps } from './prop-utilities';

class ReactFormsyComboSelect extends React.Component {
    constructor(props) {
        super(props);

        this.changeValue = this.changeValue.bind(this);
    }

    //change handler to copy the wrapped component's value into Formsy wrapper's state
    changeValue(value) {
        if (typeof this.props.onChange == 'function') {
            this.props.onChange(value); //we have to call user-supplied change handler first
        }

        this.props.setValue(value);
    }

    render() {
        const { onChange, getValue, setValue, getErrorMessage, showRequired, showError,  ...other } = this.props; //we want to pass on all the props except onChange

        return (
            <div>
                <ComboSelect
                    onChange={this.changeValue}
                    {...cleanProps(other)}
                />
                <span>{getErrorMessage()}</span>
            </div>
        );
    }
}

export default withFormsy(ReactFormsyComboSelect);
