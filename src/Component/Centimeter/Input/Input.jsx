import React from 'react'

function Input(props) {
    const { title,...rest } = props;
    return (
        <>
            {title && (<p>{title}</p>)}
            <input className="form-input" {...rest} />
        </>
    )
}

export default Input;