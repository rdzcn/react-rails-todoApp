import React from "react"
import PropTypes from "prop-types"

class Todo extends React.Component {
  render () {
    const { todos } = this.props;
    return (
      <React.Fragment>
        <h1>Tasks</h1>
        <ul className="tasks">
          {
            Object.keys(todos).map(key =>
              <li key={key}>
                {todos[key].task}
              </li>
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}

Todo.propTypes = {
  task: PropTypes.string,
  completed: PropTypes.bool
};
export default Todo
