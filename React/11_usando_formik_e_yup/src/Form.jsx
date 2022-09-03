import React, { useState } from "react";
import styles from './Form.css';
import { useFormik } from "formik";
import * as yup from 'yup';

const mySchema = yup.object().shape({
    product: yup.string().required('Insira o nome do produto!'),
    price: yup.number().required('Insira o preço').positive('Insira um número positivo!')
})


export default function Form() {
    const [showErrors, setShowErros] = useState(false)

    const {values, handleSubmit, handleChange, handleInput, errors} = useFormik({
        validationSchema: mySchema,
        initialValues:{
            product:'',
            price:0
        },
        onSubmit: (values)=>{
            alert(`${values.product}, ${values.price}`)
        },
    })

    const onSubmit = (e)=>{
        setShowErros(true)
        handleSubmit(e)
    }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="product">Nome do produto:</label>
            <input id="product" type="text" name="product" placeholder="Insira o nome do produto" onChange={handleChange}/>
            {errors.product && showErrors === true ?(<span>{errors.product}</span>):""}
            <label htmlFor="price">Preço:</label>
            <input name="price" type="number" id="price" onChange={handleChange} placeholder="Insira o preço" />
            {errors.price && showErrors === true ? (<span>{errors.price}</span>):""}
            <button type="submit">Enviar</button>
        </form>
    )
}