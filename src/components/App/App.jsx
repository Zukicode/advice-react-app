import React from 'react';

//Style
import styles from './App.module.scss';

//Components
import { Advice } from 'components/Advice/Advice';

export const App = () => {
	return (
		<div className={styles.App}>
			<Advice />
		</div>
	);
};
