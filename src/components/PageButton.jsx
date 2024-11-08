/* eslint-disable */

import './css/PageButton.css'
import { useState, useEffect } from 'react';

const PageButton = () => {

	const [sizeCheck, setSizeCheck] = useState(null);

	useEffect(() => {
		let x;


		const reSize = () => {
			x = window.innerWidth
			if(x > 760) {
				setSizeCheck("pc");
			} else {
				setSizeCheck("mobile");
			}
		};

		reSize();
		
		return() => {
			window.addEventListener("load", reSize);
			window.addEventListener("resize", reSize);
		};
		
	}, []);

	if(sizeCheck == null) {
		return (
			<p>로딩중 입니다 ...</p>
		)
	} else {
		return (
			<>
				{
					sizeCheck == "pc" ?
					<div className="etc_btn">
						<div className="btn_wrap">
							<button className="quick_menu">Quick Menu</button>
							<button className="quick_top">TOP</button>
						</div>
					</div> :
					null
				}
			</>
		)
	}
}

export default PageButton;