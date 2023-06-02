import React from "react"
import './style/Form.css'
import PropTypes from 'prop-types'

const Form = ({children}) => {
    return(
        <div className="react-form">
            {children}
        </div>
    )
}

Form.propTypes = {
    children: PropTypes.node
}

Form.defaultProps = {
    children: null
}

export default Form