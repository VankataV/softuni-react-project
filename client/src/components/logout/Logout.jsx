import { useEffect } from "react"
import { logout } from "../../services/authService"
import { useNavigate } from "react-router-dom"

export default function Logout({logoutHandler}){
    const navigate=useNavigate()
    
    useEffect(()=>{
        logout()
        .then(()=>logoutHandler())
        .catch(()=>navigate('/'))
    }, [])

    return null
}