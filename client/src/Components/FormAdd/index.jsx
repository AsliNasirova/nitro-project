import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios'

const Formadd = () => {

    async function addData(values) {
        const res = await axios.post("http://localhost:3000/trees", values)
    }

    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            information: '',
        },
        onSubmit: values => {
            addData(values)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="image">Image</label>
            <input
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.image}
            />

            <label htmlFor="title">Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />

            <label htmlFor="information">information </label>
            <input
                id="information"
                name="information"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.information}
            />

            <button type="submit">Add</button>
        </form>
    );
};
export default Formadd