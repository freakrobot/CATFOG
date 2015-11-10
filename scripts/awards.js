/* awards
	- 0: image award
	- 1: button for start
	- 2: text award
*/
var data = [{
	type: 0,
	uri: "data/keyboard.png",
	name: "雷蛇键鼠套装"
},{
	type: 0,
	uri: "data/notebook.png",
	name: "遁甲天书-天遁"
},{
	type: 0,
	uri: "data/personal_letter.png",
	name: "定制手札"
},{
	type: 0,
	uri: "data/personal_letter.png",
	name: "定制手札"
},{
	type: 1,
	uri: "data/button.png",
},{
	type: 0,
	uri: "data/mouse.png",
	name: "雷蛇鼠标"
},{
	type: 0,
	uri: "data/bottle.png",
	name: "定制水杯"
},{
	type: 2,
	text: "再来一次",
	name: "抽奖机会"
},{
	type: 0,
	uri: "data/charge_pal.png",
	name: "定制充电宝"
}];

var Award = React.createClass({
	getInitialState: function () {

	},
	render: function () {
		return (
			<div>
				<div>
					<img src={data[0]} />
				</div>
				<div>
				</div>
			</div>
		);
	}
});

var Awards = React.createClass({
	getInitialState: function () {
		return (
			data: {

			}
		);
	},
	componentDidMount: function () {

	},
	render: function () {
		return (
			<div >
		);
	}
});