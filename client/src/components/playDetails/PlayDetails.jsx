import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getOne } from '../../lib/requests'

import './PlayDetails.css'

export default function PlayDetails() {
    const [play, setPlay] = useState([])

    const { playId } = useParams()

    useEffect(() => {
        getOne(playId).then(result => setPlay(result))
    }, [])

    return (
        <>
            <div className="container play-details-container">
                <div className="row">
                    <div className="col-4">
                        <div className="play-cover-container">
                            <img src={play.imageUrl} className="play-cover" alt="" />
                            <input className="delete-button btn btn-danger" type="submit" value="Delete" />
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