import React, { Component } from 'react';
import ComboSelectFormsy from './src/ComboSelectFormsy.jsx';
import Formsy from 'formsy-react';

export default class Demo extends Component {
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
			],
			selectedGroupVals: ['AAL', 'GNR', 'T-Mobile', 'Startek']
		};
	}

	componentDidMount() {
		const self = this;
		setTimeout(
			function() {
				this.setState(
					{
						selectedValue: 'JA009D3',
						data: [
							{ text: 'air-JA007D', win: 'win-111', value: 'JA007D' },
							{ text: 'air-JA008D', win: 'win-222', value: 'JA008D' },
							{ text: 'air-JA009D', win: 'win-333', value: 'JA009D' },
							{ text: 'air-JA107D', win: 'win-444', value: 'JA010D' },
							{ text: 'air-JA007D1', win: 'win-111', value: 'JA007D1' },
							{ text: 'air-JA008D1', win: 'win-222', value: 'JA008D1' },
							{ text: 'air-JA009D1', win: 'win-333', value: 'JA009D1' },
							{ text: 'air-JA107D1', win: 'win-444', value: 'JA010D1' },
							{ text: 'air-JA007D2', win: 'win-111', value: 'JA007D2' },
							{ text: 'air-JA008D2', win: 'win-222', value: 'JA008D2' },
							{ text: 'air-JA009D2', win: 'win-333', value: 'JA009D2' },
							{ text: 'air-JA107D3', win: 'win-444', value: 'JA010D2' },
							{ text: 'air-JA007D3', win: 'win-111', value: 'JA007D3' },
							{ text: 'air-JA008D3', win: 'win-222', value: 'JA008D3' },
							{ text: 'air-JA009D3', win: 'win-333', value: 'JA009D3' },
							{ text: 'air-JA107D4', win: 'win-444', value: 'JA010D3' },
							{ text: 'air-JA007D4', win: 'win-111', value: 'JA007D4' },
							{ text: 'air-JA008D4', win: 'win-222', value: 'JA008D4' },
							{ text: 'air-JA009D4', win: 'win-333', value: 'JA009D4' },
							{ text: 'air-JA107D5', win: 'win-444', value: 'JA010D4' },
							{ text: 'air-JA007D5', win: 'win-111', value: 'JA007D5' },
							{ text: 'air-JA008D5', win: 'win-222', value: 'JA008D5' },
							{ text: 'air-JA009D5', win: 'win-333', value: 'JA009D5' },
							{ text: 'air-JA107D5', win: 'win-444', value: 'JA010D5' }
						],
						groups: [
							{
								groupName: 'Airlines',
								options: [
									{
										text: 'AAL',
										win: 'AAL',
										value: 'AAL',
										number: 1
									},
									{
										text: 'ACA',
										win: 'ACA',
										value: 'ACA',
										number: 1
									},
									{
										text: 'GNR',
										win: 'GNR',
										value: 'GNR',
										number: 1
									},
									{
										text: 'ZZT',
										win: 'ZZT',
										value: 'ZZT',
										number: 1
									},
									{
										text: 'JAL',
										win: 'JAL',
										value: 'JAL',
										number: 1
									},
									{
										text: 'WOR',
										win: 'WOR',
										value: 'WOR',
										number: 1
									}
								]
							},
							{
								groupName: 'Other',
								options: [
									{
										text: 'T-Mobile',
										win: 'T-Mobile',
										value: 'T-Mobile',
										number: 1
									},
									{
										text: 'Startek',
										win: 'Startek',
										value: 'Startek',
										number: 1
									},
									{
										text: 'Airtech',
										win: 'Airtech',
										value: 'Airtech',
										number: 1
									},
									{
										text: 'SkyPartner',
										win: 'SkyPartner',
										value: 'SkyPartner',
										number: 1
									}
								]
							}
						]
					},
					function() {
						setTimeout(
							function() {
								this.setState({ selectedValue: 'JA007D5' });
							}.bind(self),
							2000
						);
					}
				);
			}.bind(this),
			2000
		);
	}

	fakeFunction(value) {
		//console.log('change: '+value);
	}

	fakeFunction1(value) {
		//console.log('change: '+value);
		this.value1 = value;
	}

	fakeFunction2(value, b) {
		console.log('change: ' + value);
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
		var standardArray = ['737-800', '767-300', '777-200', '777-300', 'ERJ 170-100'];

		return (
			<div>
				<Formsy
					onValidSubmit={this.testSubmit}
					onValid={() => {
						// console.log('valid');
					}}
					onInvalid={() => {
						// console.log('invalid');
					}}
				>
					<br />
					<br />
					<br />
					<br />
					<br />
					{this.state.text}
					<br />
					<div style={{ position: 'relative' }}>
						{this.value1}
						{
							<ComboSelectFormsy
								type="select"
								data={this.state.data}
								name="test1f"
								value={this.state.selectedValue}
								icon="fa fa-chevron-circle-down"
								search="smart"
								ref="formsySelect1"
								required
								disabled={false}
								onChange={this.fakeFunction1.bind(this)}
								map={{ text: item => item.text, value: item => item.value }}
								onToggle={this.fakeToggle}
							/>
						}

						{
							<ComboSelectFormsy
								text="text2"
								type="multiselect"
								data={standardArray}
								name="test2f"
								validations="isNumeric"
								icon="fa fa-chevron-circle-down"
								search="smart"
								ref="formsySelect2"
								validationError="validation error"
								required
								disabled={false}
								onChange={this.fakeFunction2.bind(this)}
								map={{ text: 'win', value: true }}
							/>
						}

						{
							<ComboSelectFormsy
								text="Select Partner"
								type="multiselect"
								groups="enabled"
								data={this.state.groups}
								value={this.state.selectedGroupVals}
								name="test2g"
								search="smart"
								scrollHeight={270}
								preferredDirection="down"
								validations="isExisty"
								icon="fa fa-chevron-down"
								iconSelectInactive="fa fa-circle-thin"
								iconSelectActive="fa fa-check"
								onChange={this.fakeFunction2.bind(this)}
							/>
						}
					</div>
					<br />
					<br />
					<button onClick={this.testFormsy.bind(this)}>test</button>
					<br />
					<br />
					<input type="submit" />
				</Formsy>
			</div>
		);
	}
}
