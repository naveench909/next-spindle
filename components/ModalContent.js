import React from 'react'
import Link from 'next/link'
import styles from './ModalContent.module.css'

function ModalContent() {
    return (
        <div className={styles.container}>
            <div className={styles.first}>
                    <div className={styles.single}>
                        <label>My Feed</label>
                        <Link href="/"><a>
                        <input  className={styles.radio} type="radio" name="channel"  />
                        </a></Link>
                    </div>
                </div>

                <div className={styles.second}>
                    <div className={styles.single}>
                        <label>General</label>
                        <input className={styles.radio} type="radio" name="channel" value="Genral" />
                    </div>
                    <div className={styles.single}>
                        <label>Catheterization</label>
                        <input  className={styles.radio} type="radio" name="channel"  value="Catheterization" />
                    </div>
                    <div className={styles.single}>
                        <label>Acute Care</label>
                        <input className={styles.radio} type="radio" name="channel" value="Acute Care" />
                    </div>
                </div>

                <div className={styles.third}>
                    <div className={styles.single}>
                        <label>Saved posts</label>
                        <Link href="/savedPosts"><a>
                        <input  className={styles.radio} type="radio" name="channel"  />
                        </a></Link>
                    </div>
                </div>
        </div>
    )
}

export default ModalContent
