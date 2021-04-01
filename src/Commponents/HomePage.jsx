import React from 'react';
import './HomePage.css';
import NavBar from './NavBar';
import pic1 from '../asserts/Group41.png';
import pic2 from '../asserts/Group40.png';
import logo from '../asserts/TMX-Logo.png';
import logo1 from '../asserts/iA_Logo.png';
import logo2 from '../asserts/Fairstone-Logo.png';
import logo3 from '../asserts/Koho-Logo.png';
import pic3 from '../asserts/Group29.png';
import pic5 from '../asserts/Group1.png';
import pic4 from '../asserts/Group2.png';
import Mens from '../asserts/men.png';
import Circle from '../asserts/circle.png';
import TestimonialCircle from '../asserts/testimonial-circle.png';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
import { Row, Col, Form } from 'react-bootstrap';
SwiperCore.use([Navigation, Pagination]);
function HomePage() {
	const slides = [];
	for (let i = 0; i < 4; i += 1) {
		slides.push(
			<SwiperSlide>
				<Row className='cr'>
					<Col className='men-se' xd={2} sm={12} xs={12} md={{ span: 4 }}>
						<img className='circle-img' alt='testimonila-circle' src={TestimonialCircle} />
						<img className='mens' alt='men' src={Mens} />
					</Col>
					<Col className='lead' xd={2} sm={12} xs={12} md={{ span: 8 }}>
						<p className='quote-head'>"</p>
						<p className='testimonial-text'>
							Owl is a smart technology that solves <br /> distribution problems for financial institutions.
							<br />
							They are solving a real pain point.
							<br />
						</p>
						<small>Bruce Croxon</small>
						<p className='testimonia-user'>Managing Partner, Round 13 Capital</p>
					</Col>
				</Row>
			</SwiperSlide>,
		);
	}

	return (
		<div>
			<NavBar />
			<div className='pag-wraper'>
				<div className='pg-head'>
					<div className='pg-head-cntnt'>
						<Row className=''>
							<Col xd={2} md={{ offset: 2, span: 6 }}>
								<p className='paying-txt'>Paying the wrong people costs everyone.</p>
							</Col>
						</Row>
						<Row className=''>
							<Col xd={2} md={{ offset: 2, span: 6 }}>
								<p className='pg-para'>Unnecessary claim payments,reserves and adjusting expenses result in higher premiums.</p>
								<p className='pg-para'>
									Automatically detect the most significant losses inflicted by maliingering, exagerated, and non-eligible claims with
									<text className='quote-owl'>
										<b>Owl Claims Mentor</b>
										<sup>SM</sup>.
									</text>
								</p>
							</Col>
						</Row>
						<Row className=''>
							<Col xd={2} md={{ offset: 2, span: 6 }}>
								<div style={{ padding: '20px 0px', width: '' }}>
									<button className='strt-btn'>START TODAY</button>
								</div>
							</Col>
						</Row>
					</div>
				</div>
				<div className='d-flex justify-content-center '>
					<div className='how-work-dv'>
						<p className='how-works-h'>How it works.</p>
						<p className='how-wrk-para'>
							Owl Claims Mentor <b>compliant actionable evidence</b> accross all <br />
							your assests to help close,escalate, de-escalate and review claims.
						</p>
						<p className='how-wrk-para'>
							Owl secure cloud-platform and straightforward workflow tools <br />
							automate and optimize investigation.
						</p>
						<h4 className='how-works-hL'>
							<p>Let us show you</p>
						</h4>
					</div>
				</div>
				<div className='container messag'>
					<div className='row '>
						<div className='col-lg-1 col-md-1 '></div>
						<div className='col-lg-5 col-md-5 col-12 prioritze-dv'>
							<p className='prioritze-h'>Prioritize with facts.</p>
							<p className='priotize-para'>Owl’s Artificial Intelligence results in less work for your teams—unlike predictions, scores, and feelings.</p>
							<p className='priotize-para'>
								Patterns of evidence, <b style={{ fontWeight: 'bold' }}>proven most consequential,</b> automatically flag claims—so your team focuses where it matters most.
							</p>
						</div>
						<div className='col-lg-6 col-md-6 col-12 prioritiz-pc'>
							<img src={pic1} alt='' />
						</div>
					</div>
				</div>
				<div className='container comptr'>
					<div className='row cr'>
						<div className='col-lg-5 col-md-5 col-12 prioritiz-pc'>
							<img src={pic2} alt='' />
						</div>

						<div className='col-lg-6 col-md-6 col-12 prioritze-dv'>
							<p className='prioritze-h'>Protect your reputation.</p>
							<p className='priotize-para'>
								Owl’s evidence is <b>free from bias</b> and always complies with terms, conditions, and privacy rules.
							</p>
							<p className='priotize-para'>With Owl you never jeopardize outcomes, waste time, or expose yourself to the risk of compromised data or dirty processing.</p>
						</div>
					</div>
				</div>
				<div className='carosal-contan'>
					<div className='d-flex justify-content-center'>
						<div className='testimonials-dv '>
							<img className='circleImg' alt='circle' src={Circle} />
							<div className='container'>
								<Row style={{ width: '100%' }}>
									<Col>
										<Row style={{ width: '100%' }}>
											<Col className='fx'>
												<img className='imh-gh' src={logo} alt='' />
											</Col>
											<Col className='fx'>
												<img src={logo1} alt='' />
											</Col>
											<Col className='fx'>
												<img src={logo2} alt='' />
											</Col>
											<Col className='fx'>
												<img src={logo3} alt='' />
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
						</div>
					</div>
					<div className='carousal-dv'>
						{/* <Row>
            <Col xd={2}
            md={{offset: 2, span: 8}}> */}
						<div className='container'>
							<div className='teach'>
								<h6>Why our clients love us.</h6>
								<Swiper
									id='main'
									tag='section'
									wrapperTag='ul'
									navigation
									pagination
									spaceBetween={0}
									slidesPerView={1}
									onInit={(swiper) => console.log('Swiper initialized!', swiper)}
									onSlideChange={(swiper) => {
										console.log('Slide index chnaged to: ', swiper.activeIndex);
									}}
									onReachEnd={() => console.log('Swiper end reached')}>
									{slides}
								</Swiper>
							</div>
						</div>
						{/* </Col>
          </Row> */}
					</div>
				</div>

				<div className='container'>
					<div className='need-dv text-center'>
						<p className='need-h'>You need results, not a project.</p>
						<div className='row offers-flx'>
							<div className='col-lg-4'>
								<img src={pic3} alt='' style={{ paddingBottom: '15px' }} />
								<p className='need-h2'>Get it.</p>
								<p className='need-para'>
									Fly through permanent, privacy,
									<br /> compliance, IT and legal with our <br /> Rapid Starter Pack.
								</p>
							</div>
							<div className='col-lg-4'>
								<img src={pic4} alt='' style={{ paddingBottom: '15px' }} />
								<h3 className='need-h2'>Test it.</h3>
								<p className='need-para'>
									We setup your hassle-free <br /> environment to evalute the <br /> platform and its results.
								</p>
							</div>
							<div className='col-lg-4'>
								<img src={pic5} alt='' style={{ paddingBottom: '15px' }} />
								<h3 className='need-h2'>Run it.</h3>
								<p className='need-para'>
									See the value and benefits that <br /> Owl Claims Monitor delivers.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='d-flex justify-content-center'>
						<div className='join-dv'>
							<img className='circle-Img' alt='circle' src={Circle} />
							<p className='join-h'>Join many of the largest insurers in North America.</p>
							<div style={{}}>
								<button className='strt-btns'>START TODAY</button>
							</div>
						</div>
					</div>
					<div className='footer '>
						<div className='container'>
							<Row className='d-flex justify-content-center'>
								<Col className='lnk-dv' lg={3} xm={6} sm={6} md={6}>
									<h3 className='footer-h'>FEATURES</h3>
									<p className='footer-p'>API</p>
									<p className='footer-p'>Security</p>
									<p className='footer-p'>Whitepapers</p>
								</Col>
								<Col className='lnk-dv' lg={3} xm={6} sm={6} md={6}>
									<h3 className='footer-h'>COMPANY</h3>
									<p className='footer-p'>Responsible disclosure</p>
									<p className='footer-p'>Join the team</p>
									<p className='footer-p'>Legal stuff</p>
								</Col>
								<Col className='lnk-dv nmb-bd' lg={3} xm={6} sm={6} md={6}>
									<h3 className='footer-h'>CONTACT US</h3>
									<p className='footer-p'>Vancouver, Toronto, NY </p>
									<p className='footer-p'>Book a demo</p>
									<p className='footer-p'>Contact us</p>
								</Col>
								<Col className='lnk-dv jhg-lkj' lg={3} xm={6} sm={6} md={6}>
									<h3 className='footer-h'>FOLLOW US</h3>
									<div className='newslettr'>
										<Form>
											<Form.Group controlId='formBasicPassword'>
												<Form.Control type='text' placeholder='Email for our Newsletter*' />
											</Form.Group>
										</Form>
									</div>
									<div className='d-flex itm-cont'>
										<div style={{ width: '40px' }}>
											<div className='newsletter-itm'>
												<FaTwitter style={{ fontSize: '18px' }} />
											</div>
										</div>
										<div style={{ width: '40px' }}>
											<div className='newsletter-itm'>
												<GrLinkedinOption style={{ fontSize: '18px' }} />
											</div>
										</div>
									</div>
								</Col>
							</Row>

							<div className='copywrights'>
								<p className='copywrites-para'>@ 2009 Owl Lite Inc. All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
