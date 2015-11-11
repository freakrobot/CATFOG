var sectionTitleStyle = {
	padding: '10px 0 10px 10px',
}
var SectionTitle = React.createClass({
	getInitialState: function() {
		return {}
	},
	render: function () {
		return (
			<div style={sectionTitleStyle}>
				<img src={this.props.uri} />
			</div>
		);
	}
})