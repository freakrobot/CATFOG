/* awards
	- 0: image award
	- 1: button for start
	- 2: text award
*/
var remote_data = [{
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
	uri: "img/start_button.jpg",
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

var awardStyle = {
	float: 'left',
	width: '33%',
	height: '155px',
	textAlign: 'center',
	border: '1px solid #000',
	backgroundColor: '#19191b',
};

var awardImageStyle = {
	height: '120px',
	lineHeight: '120px',
	fontSize: '30px',
	color: '#666666',
}

var awardImage = {
	verticalAlign: 'middle',

}

var textstyle = {
	backgroundColor: '#000',
	color: '#666666',
	fontSize: '24px',
	height: '35px',
	lineHeight: '35px',
}

var awardsWrapperStyle = {
	width: '99%',
	margin: '0 auto',
}

function returnInt(element) {
	switch (parseInt(element['type'],10)) {
		case 0: 
			var content = <div style={awardStyle}>
							<div style={awardImageStyle}>
								<img style={awardImage} src={element['uri']} />
							</div>
							<div style={textstyle}>
						  		{element['name']}
						  	</div>
						  </div>
			break;
		case 1: 
			var content = <div style={awardStyle}>
							<a href="javascript:void(0);"><img src={element['uri']} /></a>
						  </div>
			break;
		case 2: 
			var content = <div style={awardStyle}>
							<div style={awardImageStyle}>
								{element['text']}
							</div>
							<div style={textstyle}>
								{element['name']}
							</div>
						  </div>
			break;
	}

	return content;
}

var Award = React.createClass({
	getInitialState: function () {
		return {}
	},
	render: function () {
		var award_data = this.props.data;
		//console.log("award data:"+award_data);
		return (
				<div id="awards_wrapper" style={awardsWrapperStyle}>
					{
						award_data.map(returnInt)
					}
					<div style={{clear:'both',}}></div>
				</div>
		);
	}
});

var Awards = React.createClass({
	getInitialState: function () {
		return {}
	},
	componentDidMount: function () {

	},
	render: function () {
		return (
			<Award data={remote_data} />
		);
	}
});