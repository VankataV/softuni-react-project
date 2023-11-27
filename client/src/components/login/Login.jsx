import styles from "./Login.module.css"
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <form id="add" className={styles.form}>
                    <h1>Login </h1>
                    <label htmlFor="email">Email address</label>
                    <input type="text" id="email" name="email" placeholder="Your email" />

                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" placeholder="Your password" />

                    <input className={styles.button} type="submit" value="Login" />
                    <Link className={styles.link} to='/login'>Don't have an account?</Link>
            </form>
        </>
    )
}