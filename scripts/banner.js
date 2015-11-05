

require(['react', 'barium'], function(React, Barium) {

require.config({
	paths: {
		"react" : "react.min",
		"barium" : "barium.min" 
	}
});

var styles = Barium.create({
	banner:{
		border:'1px solid #000', 
		height:'100px', 
		width:'100px'
	}
});

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
			<div style={styles.banner}>
			</div>
		);
	}
});

ReactDOM.render(<Banner />, document.getElementById('bg'));

});