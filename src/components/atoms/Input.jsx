import React from "react";
import '../../styles/atoms/Input.css';

function Input({className = "", type = "text", ...props}) {
    const componentProps = {
        className: `form-control ${type === 'textarea' ? 'textarea' : ''} ${className}`,
        ...(type === "textarea" ? { as: "textarea" } : { type }),
        ...props,
    };
    return <input {...componentProps} />;
}

export { Input };