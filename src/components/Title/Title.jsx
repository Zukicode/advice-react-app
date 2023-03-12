import React from 'react';

//Styles
import styles from './Title.module.scss';

export const Title = ({ id }) => {
	return <p className={styles.title}>ADVICE #{id}</p>;
};
