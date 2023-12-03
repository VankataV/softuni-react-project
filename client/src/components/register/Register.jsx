import useForm from "../../hooks/useForm"
import styles from "./Register.module.css"
import { Link } from 'react-router-dom'

const formKeys={
    firstName:'firstName',
    lastName:'lastName',
    email:'email',
    password:'password',
    rePassword:'rePassword'
}

export default function Register({onRegisterSubmit}) {

    const {values, changeHandler, submitHandler}=useForm({
        [formKeys.firstName]:'',
        [formKeys.lastName]:'',
        [formKeys.email]:'',
        [formKeys.password]:'',
        [formKeys.rePassword]:'',
    }, onRegisterSubmit)

    return (
        <>
            <form id="add" className={styles.form} onSubmit={(submitHandler)}>
                <h1>Register </h1>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" onChange={changeHandler} value={values.firstName}/>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={changeHandler} value={values.lastName}/>

                <label htmlFor="email">Email address</label>
                <input type="text" id="email" name="email" placeholder="Your email" onChange={changeHandler} value={values.email}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your password" onChange={changeHandler} value={values.password}/>

                <label htmlFor="rePassword">Repeat Password</label>
                <input type="password" id="rePassword" name="rePassword" placeholder="Repeat password" onChange={changeHandler} value={values.rePassword}/>

                <input className={styles.button} type="submit" value="Register" />
                <Link className={styles.link} to='/login'>Already have an account?</Link>
            </form>
        </>
    )
}