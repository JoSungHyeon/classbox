/* eslint-disable */

import './css/Main.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { mainImg } from '../constans/data';

import { Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';

const Main = () => {

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

	if(sizeCheck == null) {
		return (
			<p>로딩중 입니다 ...</p>
		)
	} else {
		return (
			<>
				<main>
					{
						sizeCheck === "pc" ?
						<Swiper
							className="swiper mainSwiper"
							pagination={{clickable: true}}
							modules={[Pagination]}
						>
							{
								mainImg.map((item, i) => {
									return (
									<SwiperSlide className="swiper-slide" key={i+1}>
										<a href=""><img src={`${item.src}_desktop.png`} alt={item.alt} /></a>
									</SwiperSlide>
									)
								})
							}
						</Swiper>
						:
						<Swiper
							className="swiper mobileSwiper"
							pagination={true}
							modules={[Pagination]}
						>
							{
								mainImg.map((item, i) => {
									return (
									<SwiperSlide className="swiper-slide" key={i+1}>
										<a href=""><img src={`${item.src}_mobile.png`} alt={item.alt} /></a>
									</SwiperSlide>
									)
								})
							}
						</Swiper>
					}
				</main>
			</>
		)
	}
}


function ImgLi(props) {

	console.log(props.propsValue)

	let {src, alt} = props.propsValue;

	return (
		<>
			<SwiperSlide className="swiper-slide">
				<a href=""><img src="/main1_desktop.jpg" alt="main img1" /></a>
			</SwiperSlide>
		</>
	)
}

export default Main;