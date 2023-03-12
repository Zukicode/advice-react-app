import React from 'react';

//Style
import styles from './Quote.module.scss';

export const Quote = ({ quote }) => {
	return <p className={styles.quote}>“{quote}”</p>;
};
