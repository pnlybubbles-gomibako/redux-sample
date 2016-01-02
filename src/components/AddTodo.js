import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  handleClick() {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  render() {
    return (
      <div>
        <input
          ref='input'
          type='text'
        />
        <button onClick={e => this.handleClick(e)}>
          {'Add'}
        </button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};
