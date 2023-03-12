import React from 'react';

//Style
import styles from './Loader.module.scss';

export const Loader = () => {
	return (
		<div className={styles['lds-facebook']}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
