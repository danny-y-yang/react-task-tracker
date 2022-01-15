import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
    render() {
        return (
            <button onClick={this.props.onClick} className='btn' style={{backgroundColor: this.props.color}}>{this.props.text}</button>
        );
    }
}

Button.propTypes = {};

export default Button;