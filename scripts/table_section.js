var tblStyle = {
	color: '#666666',
	backgroundColor: '#1a1a1a'
}

function parseTitle(field) {
	return <th>
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
				<table>
					<tr>
						tbl.title.map(parseTitle);
					</tr>
					{
						tbl_data.map(parseTblLine)
					}
				</table>
			)
	}
});