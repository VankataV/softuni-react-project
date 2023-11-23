const baseUrl='http://localhost:3030/jsonstore'

async function get(){
    const response=await fetch(`${baseUrl}/theaters`)
    const result=await response.json()

    return result
}

async function post(data){
    await fetch(`${baseUrl}/theaters`,{
        method:'POST',
        'content-type':'application/json',
        body:JSON.stringify(data)
    })
}

async function put(data){
    await fetch(`${baseUrl}/theaters`,{
        method:"PUT",
        'content-type':'application/json',
        body:JSON.stringify(data)
    })
}

async function del(){
    await fetch(`${baseUrl}/theaters`,{
        method:"DELETE"
    })
}

async function getAll(){
    const result =await get()

    return Object.values(result)
}

export{
    get,
    post,
    put,
    del,
    getAll
}