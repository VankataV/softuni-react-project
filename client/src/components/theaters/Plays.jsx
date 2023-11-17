import Play from "./Play"
import {getAll} from '../../lib/requests.js'
import {useState, useEffect} from 'react'


export default function Plays(){
    const [plays, setPlays]=useState([])

    useEffect(()=>{
        getAll().then(result=>setPlays(result))
    }, [])



    return (
        <>
            <h2 style={{color:'#c1cbca', marginBottom:'50px'}}>All plays</h2>
            {plays.map(play=>(
                <Play key={play._id} {...play}/>
            ))}
        </>
    )
}