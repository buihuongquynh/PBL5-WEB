/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './style.css';
import MainUser from '../../components/layout/MainUser';
import Item from '../../components/item';
import { data } from '../../db';

function Home() {
	return (
		<MainUser>
			{data.man ? (
				<div className="allWrap">
					<h1>Tất cả sản phẩm</h1>
					<div className="allSp">
						{data.man &&
							data.man.map(item => (
								<div className="col-md-3">
									<Item record={item} />
								</div>
							))}
					</div>
				</div>
			) : (
				<div>No data</div>
			)}
		</MainUser>
	);
}
export default Home;
