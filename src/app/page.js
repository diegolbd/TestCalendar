import styles from './page.module.css';
import React from "react";
import CalendarClient from '../../components/CalendarClient';



export default function Home() {
  return (
    <main className={styles.main}>
      
        <CalendarClient />
      
    </main>
  );
}
