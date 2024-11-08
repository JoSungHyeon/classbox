/* eslint-disable */

import './css/Data.css'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';

const Data = () => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		axios.get('https://josunghyeon.github.io/class-data/dataItem.json')
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
		
		return() => {
			window.addEventListener("load", reSize);
			window.addEventListener("resize", reSize);
		};
		
	}, []);

	if(sizeCheck == null || loading) {
		return (
			<p>로딩중 입니다 ...</p>
		)
	} else {
		return (
			<>
				<section id="data">
					<div className="section_inner">
						<div className="title">
							<div className="title_left">
								<span>수업지원</span>
								<h2>선생님이 당장 필요한 수업자료</h2>
								<p>선생님의 교육, 클래스박스가 도와드립니다. 선생님의 보조교사, 클래스박스와 함께하세요!</p>
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
											return <DataLi key={i+1} propsValue={item} />
										})
									}
								</div> :
								<div className="item_wrap_mo">
									<Swiper
										className="mobile_swiper swiper bannerSwiper"
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
													<SwiperSlide className="swiper-slide">
														<div className="item">
															<a href="">
																<div className="item_img">
																	<img src={`${item.imgSrc}.jpg`} alt={item.imgSrc} />
																</div>
																<div className="item_desc">
																	<strong>{item.title}</strong>
																	<p>{item.desc}</p>
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

function DataLi(props) {

	let {imgSrc, title, desc}=props.propsValue;

	return (
		<>
			<div className="item">
				<a href="">
					<div className="item_img">
						<img src={`${imgSrc}.jpg`} alt={imgSrc} />
					</div>
					<div className="item_desc">
						<strong>{title}</strong>
						<p>{desc}</p>
					</div>
				</a>
			</div>
		</>
	)
}

export default Data;