var tblStyle = {
	color: '#666666',
	fontSize: '28px',
	backgroundColor: '#1a1a1a',
	width: '98.5%',
	textAlign: 'center',
	margin: '0px 10px 10px 10px',
}

var tblHeaderStyle = {
	fontSize: '32px',
}

var tblHeaderCellStyle = {
	borderBottom: '1px solid #292929',
}

function parseTitle(field) {
	return <th style={tblHeaderCellStyle}>
			{field}
		   </th>
}

function parseLineElement(parseLineElement) {
	return <td>
			{parseLineElement}
		   </td>
}

function parseTblLine(field) {
	return <tr>
			{field.map(parseLineElement)}
		   </tr>
}

var TableSection = React.createClass({
	getInitialState: function () {
		return {}
	},
	render: function () {
		var tbl_title = this.props.title;
		var tbl_data = this.props.data;
		return (
				<table style={tblStyle}>
					<tbody>
						<tr style={tblHeaderStyle}>
						{
							tbl_title.map(parseTitle)
						}
						</tr>
						{
							tbl_data.map(parseTblLine)
						}
					</tbody>
				</table>
			)
	}
});