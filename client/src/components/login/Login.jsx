import useForm from "../../hooks/useForm"
import styles from "./Login.module.css"
import { Link } from 'react-router-dom'

export default function Login({ onLoginSubmit }) {
    const formKeys = {
        email: "email",
        password: "password",
    }

    const { values, changeHandler, submitHandler } = useForm(
        { [formKeys.email]: "", [formKeys.password]: "" },
        onLoginSubmit)



    return (
        <>
            <form id="add" className={styles.form} onSubmit={submitHandler}>
                <h1>Login </h1>
                <label htmlFor="email">Email address</label>
                <input type="text" id="email" name={formKeys.email} placeholder="Your email" value={values.email} onChange={changeHandler} />

                <label htmlFor="password">Password</label>
                <input type="text" id="password" name={formKeys.password} placeholder="Your password" value={values.password} onChange={changeHandler} />

                <input className={styles.button} type="submit" value="Login" />
                <Link className={styles.link} to='/login'>Don't have an account?</Link>
            </form>
        </>
    )
}