import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AddTask extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            reminder: false
        }
    }

    onSubmit(e) {
        e.preventDefault()
        if (!this.state.text) {
            alert('Please add text to the task!')
            return
        }

        this.props.onAdd({text: this.state.text, reminder: this.state.reminder})

        this.setState({
            text: '',
            reminder: false
        })
    }


    render() {
        return (
            <form className={'add-form'} onSubmit={this.onSubmit.bind(this)}>
                <div className={'form-control'}>
                    <label>Task</label>
                    <input type={'text'} placeholder={'Add Task'} value={this.state.text} onChange={(e) => this.setState({...this.state, text: e.target.value})} />
                </div>
                <div className={'form-control-check'}>
                    <label>Set Reminder</label>
                    <input type={'checkbox'} checked={this.state.reminder} onChange={(e) => this.setState({...this.state, reminder: e.currentTarget.checked})}/>
                </div>

                <input type={'submit'} value={'Save Task'} className={'btn btn-block'} />
            </form>
        );
    }
}

AddTask.propTypes = {};

export default AddTask;