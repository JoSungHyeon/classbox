/* eslint-disable */

import './css/Mall.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';

const Mall = () => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		axios.get('https://josunghyeon.github.io/class-data/mallItem.json')
		.then(response => {
		  setData(response.data);
		})
		.catch(err => {
			console.log(err);
		})
		.finally(() => {
		  setLoading(false);
		});
		
	}, []);

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
		window.addEventListener("load", reSize);
		window.addEventListener("resize", reSize);
		
	}, []);

	if(sizeCheck == null || loading) {
		return (
			<p>로딩중 입니다 ...</p>
		)
	} else {
		return (
			<>
				<section id="mall">
					<div className="section_inner">
						<div className="title">
							<div className="title_left">
								<span>클래스몰</span>
								<h2>선생님이 필요한 모든 것, 특별기획 공구</h2>
								<p>선생님이 당장 필요한 모든 것, 맞춤 제작합니다! 수요를 확인하고 제작하는 학원업계 유일 크라우드 펀딩!</p>
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
								<div className="item_wrap_pc">
									{
										data.map((item, i) => {
											return <MallLI key={i+1} propsValue={item} />
										})
									}
								</div> :
								<div className="item_wrap_mo">
									<Swiper
										className="swiper mallSwiper"
										slidesPerView={'auto'}
										spaceBetween={30}
										breakpoints={{
											768:{
											  slidesPerView:6          
											}
										}}
									>
										{
											data.map((item, i) => {
												return (
													<SwiperSlide className="swiper-slide" key={i+1}>
														<div className="item">
															<a href="">
																<div className="item_img">
																	<img src={`${item.imgSrc}.png`} alt={item.imgSrc} />
																</div>
																<div className="item_desc">
																	<div className="item_left">
																		<p>{item.title}</p>
																	</div>
																	<div className="item_right">
																		<span>{item.date}일 남음</span>
																	</div>
																</div>
															</a>
														</div>
													</SwiperSlide>
												)
											})
										}
									</Swiper>
								</div>
							}
	
						</div>
					</div>
				</section>
			</>
		)
	}
}

function MallLI(props) {

	let { imgSrc, title, date } = props.propsValue;

	return(
		<>
			<div className="item">
				<a href="">
					<div className="item_img">
						<img src={`${imgSrc}.png`} alt={imgSrc} />
					</div>
					<div className="item_desc">
						<div className="item_left">
							<p>{title}</p>
						</div>
						<div className="item_right">
							<span>{date}일 남음</span>
						</div>
					</div>
				</a>
			</div>
		</>
	)
}

export default Mall;