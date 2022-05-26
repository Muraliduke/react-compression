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
			title: '13',
			content: 'TRUSTED YEARS'
		},
		{
			title: '24',
			content: 'DISTRICTS IN TAMILNADU'
		},
		{
			title: '1800+',
			content: 'CLIENTS SERVED'
		},
		{
			title: '12',
			content: 'DISTRICTS AMC SERVING'
		}
	]
    return (
    <>
		<Helmet>
			<meta
			name="description"
			content="Koops is a commercial cleaning franchise offering office cleaning services and franchise opportunities all over the TamilNadu. Learn more here!"
			></meta>
			<meta property="og:site_name" content="KOOPS"></meta>
			<meta property="og:description" content="Koops is a commercial cleaning franchise offering office cleaning services and franchise opportunities all over the TamilNadu. Learn more here!"></meta>
			<meta property="og:type" content="website"></meta>
            <meta name="author" content="koops.co.in"></meta>
			<meta name="keywords" 
                content="Best Cleaning services in Chennai,Covid 19 Disinfection – House, office and factory,
		            Facility Management,
		            Premium Deep Cleaning for Residential and Commercial,
		            Hitech Bathroom and Toilet cleaning,
		            Sofa and Chair Cleaning,
		            Indian Italian Marble Polishing and Repolishing with AMC,
		            Mosaic Scrubbing and polishing,
		            Granite wall and floor Polishing,
		            Wood Polishing,
		            Carpet cleaning - Commercial with AMC,
		            Pest Control For Residential and Commercial ,
		            Plumbing & Electrician service">
            </meta>
		</Helmet>
		<section>
			<div className="toplevel">
				<div className="overlay"></div>
				<div className="gradient">
					<video loop id="myVideo" autoPlay muted >
						<source src={require('../../assets/images/clean.mp4')} type="video/mp4"/>
					</video>
				</div>
				<h1>
					OUR AIM IS TO KEEP YOUR FAMILY AND BUSINESS SAFE.WE'LL BE HERE WHEN YOU NEED US.
				</h1>

			</div>

			
			<div className="mid-section">
				<h3>The Most Reliable Name in House Cleaning</h3>
				<h6>Here's how it works -- just go to our website and tell us your zipcode 
					and how big your house, apartment, or flat is. 
					Koops will then connect you with a top-rated home cleaning services professional to help take the stress out of your life.</h6>
				
			</div>
			
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

			<h3>How Koops Works?</h3>
			<div className="koops-card row">
				{data.map((val,i) => (<Card key={i} data={val}/>))}
			</div>

			<div className="koops-operation">
				<h3>Where Does Koops Operate?</h3>
				<p>Koops operates in different cities and districts around Tamilnadu. No matter where you live, Koops has you covered.</p>
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