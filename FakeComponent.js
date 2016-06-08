import React, {Component} from 'react';
import ComboSelectFormsy from './src/ComboSelectFormsy.jsx';
import ComboSelect from 'react-combo-select';
import Formsy from 'formsy-react';

export default class FakeComponent extends Component {

    constructor(props) {
        super(props);

        this.value1 = null;
        this.value2 = null;

        this.state = {
            text: '-Select me-'
        }
    }

    fakeFunction(value) {
        //console.log('change: '+value);
    }

    fakeFunction1(value) {
        //console.log('change: '+value);
        this.value1 = value;
    }

    fakeFunction2(value) {
        //console.log('change: '+value);
        this.value2 = value;
    }

    fakeToggle(open) {
        //console.log('toggle: '+open);
    }

    testFormsy() {
        //console.log(this.value1, this.value2, this.refs.formsySelect1.getValue(), this.refs.formsySelect2.getValue());
    }

    testSubmit(data) {
        //console.log(data);
    }

    render() {
        var standardArray = ["737-800", "767-300", "777-200", "777-300", "ERJ 170-100"];
        console.log(this.value1);

        return (
            <div>
                <Formsy.Form onValidSubmit={this.testSubmit} onValid={() => {console.log('valid')}} onInvalid={() => {console.log('invalid')}}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {this.state.text}
                    <br/>
                    <div style={{position: 'relative'}}>
                    {this.value1}
                        {<ComboSelectFormsy  type="select" data={standardArray} name="test1f"
                                      icon="fa fa-chevron-circle-down" search="smart" ref="formsySelect1"
                                      disabled={false} onChange={this.fakeFunction1.bind(this)} map={{text: 'text', value: true}} onToggle={this.fakeToggle}/>}
                        {<ComboSelectFormsy text="text2" type="multiselect" data={standardArray} name="test2f" validations="isNumeric"
                                      icon="fa fa-chevron-circle-down" search="smart" ref="formsySelect2" validationError="validation error"
                                      disabled={false} onChange={this.fakeFunction2.bind(this)} map={{text: 'win', value: true}}/>}
                    </div>
                    <br/>
                    <br/>
                    <button onClick={this.testFormsy.bind(this)}>test</button>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </Formsy.Form>
            </div>
        );
    }
}