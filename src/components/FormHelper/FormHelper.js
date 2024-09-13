import React, { useState } from 'react'
import styles from './FormHelper.module.scss';

function FormHelper({ config }) {

    const [formData, setFormdata] = useState({})
    const [formErrors, setFormErrors] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        console.log(name, value);
        setFormdata(prevData => ({ ...prevData, [name]: value }))
        setFormErrors(prevData => ({ ...prevData, [name]: '' }))

        // this line on top of the line

        //   setFormdata((prevData) =>{
        //     return(
        //         {...prevData, [name]:value}
        //     )
        //   })

    }
    const renderFields = (data, index) => {
        const { label, name, type, options, required } = data

        const renderSelect = () => {
            return (
                <select name={name} id={name} onChange={handleChange}>
                    {options.map((option, index) =>
                        <option key={index} value={option.value}>
                            {option.label}

                        </option>
                    )}

                </select>
            )
        }

        const renderInput = () => {
            return (
                <input type="text"
                    name={name}
                    id={name}
                    onChange={handleChange}
                ></input>
            )
        }

        const renderFieldType = () => {
            switch (type) {
                case 'select': return renderSelect();
                default: return renderInput();
                // default: return null

            }

        }

        return (
            <div className="field" key={index}>
                <label htmlFor={name}>{label}</label>
                {renderFieldType()}
            </div>
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors ={}

        // Array.map, foreach
        
            for(const field of config){
                const {label, name, required} = field
                if (required && !formData[name]){
                    errors[name] = `${label} is required`
                }
        }

        if(Object.keys(errors).length > 0){
            setFormErrors(errors)
        }

        console.log(formData);
    }

    return (

        <div className="container">
            <form action="" className="form" onSubmit={handleSubmit}>
                <div className="fieldsContainer">
                    {config.map(renderFields)}
                </div>
                <button className="submitBtn">
                    submit
                </button>
            </form>
        </div>
    )
}

export default FormHelper