import React from 'react'
import styles from '../../styles/header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
        <a href='#'>Auctions</a>
        <a href='#'>Sell Everything</a>
        <a href='#'>Partners</a>
        <a href='#'>About</a>
        <a href='#'>Resources</a>
        <a href='#'>Support</a>
        <a href='#'>COVID-19</a>

    </div>
  )
}
