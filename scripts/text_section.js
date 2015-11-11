var textSectionStyle = {
	fontSize: '22px',
	color: '#999999',
	paddingLeft: '10px',
	lineHeight: '30px',
}

var TextSection = React.createClass({
	getInitialState: function () {
		return {}
	},
	render: function () {
		return (
				<div style={textSectionStyle}>
					{this.props.text}
				</div>
			)
	}
});