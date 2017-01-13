import React from 'react'

import Heading from '../Heading/Heading'

/**
 * Props allowed
 *      placeholder
 *      hasError
 *      type : text - password - hidden ...
 *      value
 *      name (will generate id like #input-{name} & ref)
 */

class TextField extends React.Component {

    constructor(props){
        super(props)
    }

    hasError(error) {
        if (error) {
            return 'field-error';
        }
        return '';
    }

    render () {
        return (
            <input
                type={this.props.type ? this.props.type : 'text'}
                placeholder={this.props.placeholder ? this.props.placeholder : ''}
            />
            /*
            <div className={'input input-' + this.props.type + ' ' + this.hasError(this.props.hasError)}>
                <Heading level="6">{this.props.title ? this.props.title : 'Text Field'}</Heading>
                <input
                    type={this.props.type ? this.props.type : 'text'}
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                    value={this.props.value ? this.props.value : ''}
                    id={'input-' + this.props.name}
                    ref={this.props.name}
                />
            </div>*/

        )
    }
}
export default TextField;