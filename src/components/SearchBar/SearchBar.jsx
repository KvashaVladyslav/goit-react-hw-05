import { Formik, Form, Field } from "formik";
import toast, {Toaster} from "react-hot-toast";

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
                <Form>
                    <Field
                        type="text"
                        name="query"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"/>
                    <button type="submit">Search</button>
                    <Toaster toastOptions={{style: {background: "yellow", color: "black"}}}/>
                </Form>
            </Formik>
        </div>
    )
}
