import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getOne } from '../../lib/requests'

import './PlayDetails.css'

const baseUrl='http://localhost:3030/data'

export default function PlayDetails({userId}) {
    const [play, setPlay] = useState([])

    const navigate=useNavigate()

    const { playId } = useParams()

    const  token=localStorage.getItem('accessToken')

    useEffect(() => {
        getOne(playId).then(result => setPlay(result))
    }, [])
    
    const ownerId=play._ownerId
    const isAuthor=ownerId===userId

    const onDeleteSubmit=async ()=>{
        await fetch(`${baseUrl}/theatres/${playId}`, {headers:{
            'X-Authorization':token}, 
            method: "DELETE",
        })

        navigate('/plays')
    }

    return (
        <>
            <div className="container play-details-container">
                <div className="row">
                    <div className="col-4">
                        <div className="play-cover-container">
                            <img src={play.imageUrl} className="play-cover" alt="" />
                            {isAuthor &&(
                            <input className="delete-button btn btn-danger" type="submit" value="Delete" onClick={onDeleteSubmit} />
                            )}
                        </div>
                    </div>
                    <div className="col-8">
                        <ul className="play-details">
                            <li className="play-title">{play.title}</li>
                            <li><i className="fa-solid fa-masks-theater"></i><b>Producer:</b> {play.producer}</li>
                            <li><i className="fa-solid fa-masks-theater"></i><b>Theatre:</b> {play.theater}</li>
                            <li><i className="fa-solid fa-masks-theater"></i><b>Description:</b> {play.description}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}