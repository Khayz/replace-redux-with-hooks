import React from 'react';

import './ProductItem.css';

import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';

const ProductItem = React.memo(props => {
	const [, dispatch] = useStore(false);

	const toggleFavHandler = (action, id) => {
		dispatch(action, id);
	};

	return (
		<Card style={{ marginBottom: '1rem' }}>
			<div className='product-item'>
				<h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
				<p>{props.description}</p>
				<button
					className={!props.isFav ? 'button-outline' : ''}
					onClick={() => toggleFavHandler('TOGGLE_FAV', props.id)}>
					{props.isFav ? 'Un-Favorite' : 'Favorite'}
				</button>
			</div>
		</Card>
	);
});

export default ProductItem;
