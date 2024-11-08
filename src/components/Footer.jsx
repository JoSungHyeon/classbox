/* eslint-disable */

import './css/Footer.css'

const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer_inner">
					<div className="logo">
						<img src="/footer_logo.png" alt="footer_logo" />
					</div>
					<div className="desc">
						<div className="desc_top">
							<p>(주)웅진컴퍼스</p>
							<p>대표 : 김홍석</p>
							<p>사업자 등록번호 : 214-87-35792</p>
							<p>통신판매신고 : 제 2005-서울서초-05631호</p>
						</div>
						<div className="desc_middle">
							<p>주소 : 서울시 서초구 강남대로 39길 15-10 한라비발디스튜디오 193, 3층</p>
							<p>전화번호 : 02-3471-0013</p>
						</div>
						<div className="desc_bottom">
							<p>© woongjin compass. All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;