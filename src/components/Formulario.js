// ***************************************
// ******* 👨‍💻DEV_CARLOS BOTERO👨‍💻*********
// ***************************************

import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

// con esta libreria React-Hook-Form validamos de forma sencilla

function Formulario(props) {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (values,e) => {
        console.log(values)
        e.target.reset()
    };

    return (
      <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>React-Hook-Form</h1>
          <input
            className="form-control my-2"
            name="message"
            autoComplete="off"
            {...register("message", {
              required: "Titulo Obligatorio🚫",
            })}
          />

          <span className="text-danger">
                {errors.message && errors.message.message}
          </span>

          <input className="btn btn-primary" type="submit" />
        </form>
      </Fragment>
    );
  }
export default Formulario;
