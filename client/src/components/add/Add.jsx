import styles from './Add.module.css'
import {get, post} from '../../lib/requests.js'

const addSubmitHandler=async (e)=>{
    e.preventDefault()

    const data=Object.fromEntries(new FormData(e.currentTarget))
    await post(data)

}

export default function Add() {
    return (
        <>
            <form id="add" className={styles.form} onSubmit={addSubmitHandler}>
                <div className="container">
                    <h1>Add a play </h1>
                    <label htmlFor="title">Play title</label>
                    <input type="text" id="title" name="title" placeholder="Enter play title..." />

                    <label htmlFor="producer">Producer</label>
                    <input type="text" id="producer" name="producer" placeholder="Enter producer name..." />

                    <label htmlFor="imageUrl">Image</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Add play" />
                </div>
            </form>
        </>
    )
}