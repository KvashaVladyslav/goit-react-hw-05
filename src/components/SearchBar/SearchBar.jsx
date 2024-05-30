import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css"

export default function SearchBar({ onSubmit }) {
    
    const notifyEmpty = () => toast("Please, enter something on the searching field")
    
    const initialValues = { query: "" }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={(values, actions) => {
                if (values.query.trim() === "") {
                    notifyEmpty()
                } else {
                    onSubmit(values.query)
                }
                actions.resetForm()
            }}>
                <Form className={css.form}>
                    <Field
                        className={css.input}
                        type="text"
                        name="query"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"/>
                    <button className={css.button} type="submit">Search</button>
                    <Toaster toastOptions={{style: {background: "#e9a8a8", color: "black"}}}/>
                </Form>
            </Formik>
        </div>
    )
}
