import React from 'react'

export default class BlockTitle extends React.Component {
  render () {
    return (
      <div id={this.props.title} className='BlockTitle'>
        <h4><i className={`fa fa-${this.props.icon}`} aria-hidden='true' /> { this.props.title }</h4>
        <hr />
      </div>
    )
  }
}
