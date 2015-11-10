var divStyle = {
	width: 'auto',
	height: '430px',
};

var Banner = React.createClass({
	getInitialState: function () {
		return {
			data: {
				background: "url(img/banner.png) top center / cover no-repeat",
				background_color: "#000000",
			}
		};
	},
	componentDidMount: function () {
	},
	render: function() {
		var settings = this.state.data;
		var background = settings["background"];
		var background_color = settings["background_color"];

		console.log("render");

		divStyle["background"] = background;
		divStyle["background_color"] = background_color;

		return (
			<div style={divStyle}></div>
		);
	}
});