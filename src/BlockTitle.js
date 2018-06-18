import React from 'react';

export default class BlockTitle extends React.Component {
	render() {
		return (
			<div className="BlockTitle">
				<h4><i className={`fa fa-${ this.props.icon }`} aria-hidden="true"></i> { this.props.title }</h4>
				<hr />
			</div>
		)
	}
}
