const baseUrl = 'http://localhost:3030/data'

const token = localStorage.getItem('accessToken')

async function get() {
    const response = await fetch(`${baseUrl}/theaters`)

    if (response.status === 204) {
        return {}
    }

    const result = await response.json()

    return result
}

async function post(data) {
    await fetch(`${baseUrl}/theaters`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    })
}

async function put(data) {
    await fetch(`${baseUrl}/theaters`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    })
}

async function del() {
    await fetch(`${baseUrl}/theaters`, {
        method: "DELETE"
    })
}

async function getAll() {
    const result = await get()

    return Object.values(result)
}

async function getOne(id){
    const response = await fetch(`${baseUrl}/theaters/${id}`)

    if (response.status === 204) {
        return {}
    }

    const result = await response.json()

    return result
}

export {
    get,
    post,
    put,
    del,
    getAll,
    getOne
}