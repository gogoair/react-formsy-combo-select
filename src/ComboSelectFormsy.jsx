import React, {Component} from 'react';
import ComboSelect from 'react-combo-select';
import Formsy from 'formsy-react';
import {cleanProps} from './prop-utilities';

export default React.createClass({
    mixins: [Formsy.Mixin],

    //change handler to copy the wrapped component's value into Formsy wrapper's state
    changeValue(value) {
        if (typeof this.props.onChange == 'function')
            this.props.onChange(value); //we have to call user-supplied change handler first
        this.setValue(value);
    },

    //we trust the copmonent to maintain its own state for everything except validation errors, which
    // react-combo-select doesn't handle on it's own
    shouldComponentUpdate(nextProps, nextState) {
        for (var prop in nextProps)
            if (nextProps[prop] != this.props[prop]) {
                return true;
            }

        if (nextState._validationError && this.state._validationError) {
            if (nextState._validationError.length != this.state._validationError.length)
                return true;

            for (let i = 0, len = nextState._validationError.length; i < len; i++)
                if (nextState._validationError[i] != this.state._validationError[i])
                    return true;
        }

        return false;
    },

    render() {
        const {onChange, ...other} = this.props;	//we want to pass on all the props except onChange

        const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

        return (
            <div className={className}>
                <ComboSelect className={className}
                             onChange={this.changeValue}
                             {...cleanProps(other)}
                             value={this.getValue()}
                />
                <span>{this.getErrorMessage()}</span>
            </div>
        );
    }
});