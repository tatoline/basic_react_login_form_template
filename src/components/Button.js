import React from "react"
import PropTypes from "prop-types"
import './style/Button.css'

const Button = ({text, onClick, disabled}) => {
    return(
        <button disabled={disabled} className={`react-button ${disabled ? "react-button-disabled" : ""}`} onClick={onClick}>{text}</button>
    )
}

Button.protoTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    text: "Execute",
}

export default Button