import Image from 'next/image';
import styles from './page.module.css';
import Card from './components/Card/BookingCareItem';
import { Key } from 'react';
import BookingCareContainer from './containers/BookingCareContainer/BookingCareContainer';

export default function Home() {
  return (
    <main className={styles.main}>
      <BookingCareContainer />
    </main>
  );
}
