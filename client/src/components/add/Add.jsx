import styles from './Add.module.css'

export default function Add() {
    return (
        <>
            <form id="add" className={styles.form}>
                <div className="container">
                    <h1>Add a play </h1>
                    <label htmlFor="play-title">Play title</label>
                    <input type="text" id="title" name="title" placeholder="Enter play title..." />

                    <label htmlFor="producer">Producer</label>
                    <input type="text" id="producer" name="producer" placeholder="Enter producer name..." />

                    <label htmlFor="play-img">Image</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Add play" />
                </div>
            </form>
        </>
    )
}