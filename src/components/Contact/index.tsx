import React from 'react'
import './contact.css';
import data from './mockdata';
import Card from './card';
import FormLayout from './Form'
import { Helmet } from 'react-helmet';

const Contact = () => {

    return (
        <>  
            <Helmet>
                <title>Contact Us - Koops - Elite Cleaning Services | Best Cleaning Services in Chennai</title>

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
            <section className="contact-head">
                <h2>We'd love to hear from you!</h2>
            </section>
            

            

            <div className="row form-row">
                <FormLayout/>
                <div className="reachUs">
                {data.map((e, i)=> (<Card {...e}/>))}

                </div>

            </div>

            
        </>
    )
}

export default Contact
