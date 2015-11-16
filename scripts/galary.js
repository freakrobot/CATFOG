var galaryStyle = {
	listStyle: 'none',
	width: '800px',
	height: '127px',
	overflow: 'hidden',
	color: '#666666',
	display:'inline-block',
}

var galaryItemStyle = {
	display: 'inline-block',
}

function retGala(element) {
	return (
		<li style={galaryItemStyle}>
			<div>
				<a href="javascript:void(0);"><img src={element.uri} /></a>
			</div>
			<div>
				{element.name}
			</div>
		</li>
	);
}

var Galary = React.createClass({
	getInitialState: function () {
		return {};
	},
	componentDidMount: function () {
	},
	render: function() {
		console.log("render");

		return (
			<div style={{width:'100%',height:'127px'}}>
				<div style={{display: 'inline-block',height:'127px',lineHeight:'127px'}}><a style={{textDecoration:'none',color:'#fff'}} href="javascript:void(0);">&lt;</a></div>

				<ul style={galaryStyle}>
					{
						this.props.data.map(retGala)
					}
				</ul>

				<div style={{display: 'inline-block',height:'127px',lineHeight:'127px'}}><a style={{textDecoration:'none',color:'#fff'}} href="javascript:void(0);">&gt;</a></div>
			</div>
		);
	}
});