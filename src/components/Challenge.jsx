/* eslint-disable */

import './css/Challenge.css';
import { useState, useEffect } from 'react';

const Challenge = () => {

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
				<section id="challenge">
					<div className="section_inner">
						<div className="title">
							<div className="title_left">
								<h2>챌린지를 같이 진행해 보세요!</h2>
								<p>다양한 이벤트에 참여해 보세요.</p>
							</div>
							<div className="title_right">
								<a href="">
									<img src="/btm_more.png" alt="more" />
								</a>
							</div>
						</div>
						<div className="item_wrap">
							{
								sizeCheck == "pc" ?
								<a href="" className="pc">
									<img src="/challenge_banner.png" alt="challenge_banner" />
								</a> :
								<a href="" className="mo">
									<img src="/mobile_challenge.png" alt="challenge_banner" />
								</a>
							}
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default Challenge;