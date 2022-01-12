import {ErrorMessage, useField} from "formik"


function TextField({label, ...props}) {
    const [field, meta] = useField(props)
    return (
        <div className="mb-4">
            <label className="d-block" htmlFor={field.name}>{label}</label>
            <input
                className={`form-control shadow-none  ${meta.touched && meta.error && "is-invalid"}`}
                autoComplete="off"
                {...field}
                {...props}
            />
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}

export default TextField;
