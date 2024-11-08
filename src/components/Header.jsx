/* eslint-disable */

import './css/Header.css';
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { navList } from '../constans/data';
import { utilList } from '../constans/data';

const Header = () => {
	const [sizeCheck, setSizeCheck] = useState(null);

	useEffect(() => {
		let header = document.querySelector("header");
		let menuList = document.querySelectorAll(".menu_wrap > ul > li");

		let x;

		const reSize = () => {
			x = window.innerWidth
			if(x > 760) {
				setSizeCheck("pc");
				gsap.set(header, {
					height: 100
				});
				menuList.forEach(function(item1, i) {
					item1.addEventListener("mouseenter", function() {
			
						menuList.forEach(function(item2, j) {
							if(j == i) {
								item2.classList.add("enter");
								gsap.fromTo(header, {
									height: 100
								}, {
									height: "auto",
									duration: 0.3
								});
							} else {
								item2.classList.remove("enter");
							}
						});
					});
			
					header.addEventListener("mouseleave", function() {
						menuList.forEach(function(item1) {
							item1.classList.remove("enter");
							gsap.to(header, {
								height: 100,
								duration: 0.3
							});
						});
					});
				});
			} else {
				setSizeCheck("mobile");
				gsap.set(header, {
					height: 60
				});
			}
		};

		reSize();

		window.addEventListener("load", reSize);
		window.addEventListener("resize", reSize);
		
	}, []);
	

	return (
		<>
			<header>
				<div className="header_inner">
				<div className="logo">
					<a href=""><h1><img src="/logo.png" alt="logo" /></h1></a>
				</div>
				<div className="menu_wrap">
					<ul>
						{
							navList.map((item, i) => {
								return <MenuLi key={i+1} propsValue={item} />
							})
						}
					</ul>
					</div>
					<div className="util_wrap">
						<ul>
							{
								utilList.map((item, i) => {
									return <UtilLi key={i+1} propsValue={item} />
								})
							}
						</ul>
					</div>
				</div>
			</header>
		</>
	)
}

function MenuLi(props) {
	// console.log(props.propsValue);

	let {depth1, depth2}=props.propsValue;

	return (
		<>
			<li>
				<a href="">{depth1}</a>
				<ul>
					{
						depth2.map((item, i) => <li key={i+1}><a href="">{item}</a></li>)
					}
				</ul>
			</li>
		</>
	)
}

function UtilLi(props) {

	let list =props.propsValue;

	return (
		<>
			<li>
				<a href="">{list}</a>
			</li>
		</>
	)
}

export default Header;