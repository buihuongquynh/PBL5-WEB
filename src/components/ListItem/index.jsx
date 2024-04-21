// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './style.css';
import Item from '../item';
import { data } from '../../db';

const ListItem = ({ category }) => {
	return (
		<div className="listItem">
			<div style={{ width: '70%' }} className="flex items-center man-wrap">
				{data.man &&
					data.man.slice(0, 8).map((item, index) => <Item record={item} />)}
			</div>
		</div>
	);
};
export default ListItem;
