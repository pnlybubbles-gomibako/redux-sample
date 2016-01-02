import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li>
        <span
          onClick={this.props.onClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
        >
          {this.props.text}
        </span>
        <span
          onClick={this.props.onXClick}
          style={{
            cursor: 'pointer',
          }}
        >{' [REMOVE]'}</span>
      </li>
    );
  }
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onXClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
