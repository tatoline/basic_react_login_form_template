import React from "react"
import PropTypes from "prop-types"
import './style/Input.css'

const Input = ({type, placeholder, value, onChange}) => {
    return(
        <input className="react-input" type={type} value={value} placeholder={placeholder} onChange={onChange} />
    )
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
}
Input.defaultProps = {
    placeholder: "Please fill...",
    type: "text"
}

export default Input