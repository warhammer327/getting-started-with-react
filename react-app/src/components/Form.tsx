import React, { useRef, FormEvent } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:FieldValues) => console.log(data)

    const nameref = useRef<HTMLInputElement>(null);
    const ageref = useRef<HTMLInputElement>(null);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        {...register("name")}
                        ref={nameref}
                        name="name"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                        Age
                    </label>
                    <input
                        {...register("age")}
                        ref={ageref}
                        name="age"
                        type="number"
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Form;
