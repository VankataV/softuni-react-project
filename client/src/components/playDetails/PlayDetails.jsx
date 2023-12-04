import * as styles from './PlayDetails.module.css'
import image from '../../images/logo.png'
export default function PlayDetails() {
    return (
        <>
            <div className={styles.div}>
                {/* <div className={styles.imgDiv}><img src={image}/></div> */}
                <div className={styles.titleDiv}>title</div>
                <div className={styles.producerDiv}>producer</div>
                <div className={styles.theatreDiv}>theatre</div>
                <div className={styles.descriptionDiv}>description</div>
            </div>
        </>
    )
}