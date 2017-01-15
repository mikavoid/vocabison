import React from 'react'

/**
 * Props allowed
 *      value
 *      id
 */

class SubmitButton extends React.Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className={'input-submit'}>
                <button id={'input-' + this.props.id} type="submit">
                    {this.props.value ? this.props.value : 'Submit'}
                </button>
            </div>

        )
    }
}
export default SubmitButton;