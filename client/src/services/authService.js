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

export{
    login,
    register
}