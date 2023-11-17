const baseUrl='http://localhost:3030/jsonstore'

async function get(){
    await fetch(`${baseUrl}/theaters`)
}

async function post(data){
    await fetch(`${baseUrl}/theaters`,{
        method:'POST',
        'content-type':'application/json',
        body:JSON.stringify(data)
    }
    )
}

export{
    get,
    post
}