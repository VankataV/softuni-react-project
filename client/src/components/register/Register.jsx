import styles from "./Register.module.css"
import { Link } from 'react-router-dom'


export default function Register() {
    return (
        <>
            <form id="add" className={styles.form}>
                <div className="container">
                    <h1>Register </h1>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Last Name" />

                    <label htmlFor="email">Email address</label>
                    <input type="text" id="email" name="email" placeholder="Your email" />

                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" placeholder="Your password" />
                    
                    <label htmlFor="rePassword">Repeat Password</label>
                    <input type="text" id="rePassword" name="rePassword" placeholder="Repeat password" />

                    <input className={styles.button} type="submit" value="Register" />
                    <Link className={styles.link} to='/login'>Already have an account?</Link>
                </div>
            </form>
        </>
    )
}