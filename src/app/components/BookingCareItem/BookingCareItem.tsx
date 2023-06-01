import { BookingCareProps } from '@/app/types/BookingCareInterface';
import styles from './style.module.css';
import React from 'react';
import Image from 'next/image';

function BookingCareItem({ ...props }: BookingCareProps) {
  return <div className={styles.card_wrapper}>123</div>;
}

export default BookingCareItem;
