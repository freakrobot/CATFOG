var Banner = React.createClass({
	getInitialState: function () {
		return {
			data: {
				background_image: "img/bg.jpg",
				background_color: "#000000",
			}
		};
	},
	componentDidMount: function () {

	},
	render: function() {
		var settings = this.state.data;
		var background_image = settings["background_image"];
		var background_color = settings["background_color"];

		return (
			<div style={{border:1px solid #000; height:100px; width:100px;}}>
			</div>
		);
	}
});

ReactDOM.render(<Banner />, document.getElementByClassName('bg'));