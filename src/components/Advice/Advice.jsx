import React, { useEffect, useState } from 'react';

//Style
import styles from './Advice.module.scss';

//Components
import { Button } from 'components/Button/Button';
import { Line } from 'components/Line/Line';
import { Quote } from 'components/Quote/Quote';
import { Title } from 'components/Title/Title';
import axios from 'axios';
import { BASE_URL } from 'utils/utils';
import { Loader } from 'components/Loader/Loader';

export const Advice = () => {
	const [quote, setQuote] = useState({});
	const [isLoading, setLoading] = useState(true);

	const getAdvice = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(BASE_URL);
			setQuote(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAdvice();
	}, []);

	return (
		<div className={styles.advice}>
			{isLoading ? (
				<>
					<Loader />
					<Line />
				</>
			) : (
				<>
					<Title id={quote.slip.id} />
					<Quote quote={quote.slip.advice} />
					<Line />
					<Button handleClick={getAdvice} />
				</>
			)}
		</div>
	);
};
