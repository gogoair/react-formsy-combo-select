import React, {Component} from 'react';
import ComboSelectFormsy from './src/ComboSelectFormsy.jsx';
import ComboSelect from 'react-combo-select';
import Formsy from 'formsy-react';

export default class FakeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '-Select me-',
            selectedValue: 3,
            data: [
                {
                    text: 111,
                    win: {
                        here: 'win'
                    },
                    value: 111
                },
                {
                    text: 3,
                    win: {
                        here: 'win-win'
                    },
                    value: 3
                }
            ]
        }
    }

    componentDidMount() {
        const self = this;
        setTimeout(function () {
            this.setState({
                selectedValue: 'JA009D3',
                data: [
                    {text: "air-JA007D", win: "win-111", value: "JA007D"},
                    {text: "air-JA008D", win: "win-222", value: "JA008D"},
                    {text: "air-JA009D", win: "win-333", value: "JA009D"},
                    {text: "air-JA107D", win: "win-444", value: "JA010D"},
                    {text: "air-JA007D1", win: "win-111", value: "JA007D1"},
                    {text: "air-JA008D1", win: "win-222", value: "JA008D1"},
                    {text: "air-JA009D1", win: "win-333", value: "JA009D1"},
                    {text: "air-JA107D1", win: "win-444", value: "JA010D1"},
                    {text: "air-JA007D2", win: "win-111", value: "JA007D2"},
                    {text: "air-JA008D2", win: "win-222", value: "JA008D2"},
                    {text: "air-JA009D2", win: "win-333", value: "JA009D2"},
                    {text: "air-JA107D3", win: "win-444", value: "JA010D2"},
                    {text: "air-JA007D3", win: "win-111", value: "JA007D3"},
                    {text: "air-JA008D3", win: "win-222", value: "JA008D3"},
                    {text: "air-JA009D3", win: "win-333", value: "JA009D3"},
                    {text: "air-JA107D4", win: "win-444", value: "JA010D3"},
                    {text: "air-JA007D4", win: "win-111", value: "JA007D4"},
                    {text: "air-JA008D4", win: "win-222", value: "JA008D4"},
                    {text: "air-JA009D4", win: "win-333", value: "JA009D4"},
                    {text: "air-JA107D5", win: "win-444", value: "JA010D4"},
                    {text: "air-JA007D5", win: "win-111", value: "JA007D5"},
                    {text: "air-JA008D5", win: "win-222", value: "JA008D5"},
                    {text: "air-JA009D5", win: "win-333", value: "JA009D5"},
                    {text: "air-JA107D5", win: "win-444", value: "JA010D5"},
                ]
            }, function() {
                setTimeout(function() {
                    this.setState({selectedValue: 'JA007D5'});
                }.bind(self), 2000);
            });
        }.bind(this), 2000);

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
                        {<ComboSelectFormsy  type="select" data={this.state.data} name="test1f" value={this.state.selectedValue}
                                      icon="fa fa-chevron-circle-down" search="smart" ref="formsySelect1" required
                                      disabled={false} onChange={this.fakeFunction1.bind(this)} map={{text: item => item.text, value: item => item.value}} onToggle={this.fakeToggle}/>}
                        {<ComboSelectFormsy text="text2" type="multiselect" data={standardArray} name="test2f" validations="isNumeric"
                                      icon="fa fa-chevron-circle-down" search="smart" ref="formsySelect2" validationError="validation error" required
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