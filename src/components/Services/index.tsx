import React from 'react';
import './service.css';
import ServiceCard from './card';
import mock from './mockData';
import { Helmet } from "react-helmet";


const Service = () => {
    return (
        <>
            <Helmet>
                <title>Services - Koops - Elite Cleaning Services | Best Cleaning Services in Chennai</title>

                <meta
                name="description"
                content="Koops is a commercial cleaning franchise offering office cleaning services and franchise opportunities all over the TamilNadu. Learn more here!"
                ></meta>
                <meta property="og:site_name" content="KOOPS"></meta>
                <meta property="og:description" content="Koops is a commercial cleaning franchise offering office cleaning services and franchise opportunities all over the TamilNadu. Learn more here!"></meta>
                <meta property="og:type" content="website"></meta>
                <meta name="author" content="https://www.koops.co.in"></meta>
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
            <div className="service-page">
            <div className="top-container">
                <p>Koops provides wide range of cleaning services for domestic and 
                    commercial properties of any size and condition.</p> 

            </div>

            <div className="card-area row">
                {mock.map((val, i) => <ServiceCard {...val}/>)}
            </div>
        </div>

        </>
    )
}

export default Service
