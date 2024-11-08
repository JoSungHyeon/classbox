/* eslint-disable */

import './css/MobileMenu.css'
import { useState, useEffect } from 'react';

const MobileMenu = () => {

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
					sizeCheck == "mobile" ?
					<div className="mobile_quick">
						<ul>
							<li>
								<a href="">홈</a>
							</li>
							<li>
								<a href="">탑클래스</a>
							</li>
							<li>
								<a href="">수업지원</a>
							</li>
							<li>
								<a href="">클래스몰</a>
							</li>
							<li>
								<a href="">MY</a>
							</li>
						</ul>	
					</div> :
					null
				}
			</>
		)
	}
}

export default MobileMenu;