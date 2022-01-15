import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa'

class Task extends PureComponent {
    render() {
        return (
            <div className={`task ${this.props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => this.props.onToggle(this.props.task.id)}>
                <h3>{this.props.task.text}</h3>
                <FaTimes
                style={{ color: 'red', cursor: 'pointer'}}
                onClick={() => this.props.onDelete(this.props.task.id)}
                />
            </div>
        );
    }
}

Task.propTypes = {};

export default Task;