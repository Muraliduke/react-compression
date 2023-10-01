import React from 'react';
import './Home.css';
import Card from './WorkingCard';
import ExpCard from './ExperienceCard';
import data from './data/bannerMockData';
import expr from './data/exprMockData'
import Carousel from './Carousel';
import { Helmet } from "react-helmet";


const Home = () => {
	const infoStats = [
		{
			title: '8',
			content: 'TRUSTED YEARS IN BUSINESS'
		},
		{
			title: '1800+',
			content: 'CLIENTS SERVED'
		},
		{
			title: '100+',
			content: 'INTERNSHIP'
		},		
		{
			title: '50+',
			content: 'SEMINARS'
		}
	]
    return (
    <>
		<Helmet>
			<meta
			name="description"
			content="JK SEMITECH is dedicated to providing valuable resources and a thriving community for VLSI (Very Large Scale Integration) physical design enthusiasts, professionals, and learners. Our mission is to promote knowledge sharing, innovation, and collaboration in the field of VLSI physical design"></meta>
			<meta property="og:site_name" content="JK SEMITECH"></meta>
			<meta property="og:description" content="JK SEMITECH is dedicated to providing valuable resources and a thriving community for VLSI (Very Large Scale Integration) physical design enthusiasts, professionals, and learners. Our mission is to promote knowledge sharing, innovation, and collaboration in the field of VLSI physical design"></meta>
			<meta property="og:type" content="website"></meta>
            <meta name="author" content="jksemitech.co.in"></meta> 
			<meta name="keywords" 
                content='"Synthesis ",
                "UPF",
                "NDM Libraries",
                "Initial Design Setup",
                "Floor Planning",
                "Placement",
                "Power Planning",
                "Scan Chain RE-Ordering and RE-Partitioning",
                "Timing Constraints",
                "Clock Tree Synthesis",
                "Global Routing",
                "Power Analysis (Static and Dynamic) ",
                "Engineering Change Order Flow (ECO)",
                "Multiple Industry standard Projects",
                "Design For Manufacturability"'>
                </meta>
		</Helmet>
		<section>
			<div className="toplevel">
				<div className="overlay"></div>
				<div className="gradient">
					<video loop id="myVideo" autoPlay muted >
						<source src={require('../../assets/images/electronics.mp4')} type="video/mp4"/>
					</video>
				</div>
				<h1>
				JK SEMITECH is dedicated to providing valuable resources and a thriving community for VLSI (Very Large Scale Integration) physical design enthusiasts, professionals, and learners. Our mission is to promote knowledge sharing, innovation, and collaboration in the field of VLSI physical design
				</h1>

			</div>

			
			<div className="mid-section">
				<h3>The Most Reliable Name in Project Delivery</h3>
				<h6>Here's how it works -- just go to our website and tell us your zipcode 
					and your requirement fitment . 
					JK SEMITECH will then connect you with a top-rated services professional.</h6>
				
			</div>
			
			{/* add slider here */}
			<div className="house-cleaning">
				<section>
					<h2>HONESTY IS THE BEST POLICY.</h2>
					<p>We communicate honestly. No hidden fees, no surprises, no upsells!
					Only honest work and trustworthy staff.</p>
				</section>
			</div>

			<section className="row">
				{infoStats.map((d,i)=> (<div  key={i} className="col-xs-12 col-sm-6 col-md-3">
					<section className="stats">
						<h2>{d.title}</h2>
						<p>{d.content}</p>
					</section>
				</div>))}
			</section>
			
			<div className="row experienced-wrapper">
				{expr.map((val,i) => (<ExpCard key={i} data={val}/>))}
			</div>

			{/* <h3>How Koops Works?</h3>
			<div className="koops-card row">
				{data.map((val,i) => (<Card key={i} data={val}/>))}
			</div> */}

			<div className="koops-operation">
				<h3>Where Does JK SEMITECH Operate?</h3>
				<p>JK SEMITECH operates in and around chennai location. No matter where you live, JK SEMITECH has you covered.</p>
			</div>

			<div className="testimonials">
				<h3>Customer Testimonials</h3>
				<Carousel/>
			</div>
		</section>
    </>
    )
}

export default Home;