const baseUrl='http://localhost:3030/users'

const login=async (email, password)=>{
    const response=await fetch(`${baseUrl}/login`, {
        method:'POST',
        'content-type':'application/json',
        body:JSON.stringify({email, password})
    })

    const result= await response.json()

    return result
}

const register=async(email, password, firstName, lastName)=>{
    const response=await fetch(`${baseUrl}/register`, {
        method:'POST',
        'content-type':'application/json',
        body:JSON.stringify({email, password, firstName, lastName})
    })

    const result=await response.json()

    return result
}

const logout=async ()=>{
    const token=localStorage.getItem('accessToken')

    await fetch(`${baseUrl}/logout`,{headers:{
        'X-Authorization':token
    }})
}

export{
    login,
    register,
    logout
}