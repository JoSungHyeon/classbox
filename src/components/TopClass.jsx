/* eslint-disable */

import './css/TopClass.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const TopClass = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		
		axios.get('https://josunghyeon.github.io/class-data/topClass.json')
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
	
	if (loading) return <div>Loading...</div>;

	return (
		<>
			<section id="TopClass">
				<div className="section_inner">
					<div className="title">
						<div className="title_left">
							<span>TOP CLASS</span>
							<h2>업계 전문가들의 노하우를 확인하세요</h2>
							<p>대한민국 상위 1% 탑클래스의 노하우를 공유합니다. 선생님도 상위 1%가 될 수 있습니다.</p>
						</div>
						<div className="title_right">
							<a href="">
								<img src="/btm_more.png" alt="more" />
							</a>
						</div>
					</div>
					<div className="item_wrap">
						<Swiper
						 	className="swiper classSwiper"
						 	slidesPerView={'auto'}
       					 	spaceBetween={30}
							breakpoints={{
								768:{
								  slidesPerView:3             
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
														<img src={`${item.imgSrc}.png`} alt={item.src} />
													</div>
													<div className="item_desc">
														<div className="item_top">
															<div className="user">
																<span>{item.user}</span>
															</div>
															<div className="star">
																<span><i className="fa-solid fa-star"></i></span>
																<span><i className="fa-solid fa-star"></i></span>
																<span><i className="fa-solid fa-star"></i></span>
																<span><i className="fa-solid fa-star"></i></span>
																<span><i className="fa-solid fa-star"></i></span>
															</div>
														</div>
														<div className="item_bottom">
															<p>{item.desc}</p>
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
				</div>
			</section>
		</>
	)
}

export default TopClass;