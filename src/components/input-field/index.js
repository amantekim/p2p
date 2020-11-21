import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const FormInput = ({
  name,
  value,
  onChange,
  placeholder
}) => {
  return (
    <div className="form-input">
      <input 
        name={name}
        value={value}
        placeholder={placeholder} 
        onChange={onChange}
      />
    </div>
  )
}

FormInput.defaultProps = {
  name: "",
  value: "",
  onChange: {},
  placeholder: "",
}

FormInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default FormInput
