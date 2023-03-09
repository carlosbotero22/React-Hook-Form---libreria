import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

function EjemploUno() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [entradas, setEntradas] = useState([]);

  const onSubmit = (values, e) => {
    console.log(values);
    e.target.reset();

    setEntradas([...entradas, values]);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>React-Hook-Form</h1>
        <input
          className="form-control my-2"
          placeholder="ingrese un titulo"
          name="titulo"
          autoComplete="off"
          {...register("titulo", {
            required: "Titulo Obligatorio🚫",
            minLength: { value: 2, message: "minimo 2 letras" },
          })}
        />

        <span className="text-danger text-small d-block mb-2">
          {errors.titulo && errors.titulo.message}
        </span>

        <input
          className="form-control my-2"
          placeholder="ingrese una descripción"
          name="descripcion"
          autoComplete="off"
          {...register("descripcion", {
            required: "Titulo Obligatorio🚫",
            minLength: { value: 2, message: "minimo 2 letras" },
          })}
        />

        <span className="text-danger text-small d-block mb-2">
          {errors.descripcion && errors.descripcion.message}
        </span>

        <button className="btn btn-primary" type="submit">Enviar</button>
        <br></br>
          
        {entradas.map((item) => (
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{item.titulo}</td>
                <td>{item.descripcion}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </form>
    </Fragment>
  );
}
export default EjemploUno;
