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
			<div style={{}}>
			</div>
		);
	}
});