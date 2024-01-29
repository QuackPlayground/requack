/* eslint-disable react/display-name */
import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const Input = forwardRef((props, ref) => {
    const {type, placeholder, name} = props;

    return(
        <input 
            type={type} 
            className="w-full px-3 py-2 text-sm border rounded text-slate-700 placeholder:opacity-50" 
            placeholder={placeholder}
            name={name}
            id={name}
            ref={ref}
        />
    )
})


export default Input;