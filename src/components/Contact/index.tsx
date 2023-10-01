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
                <title>Contact Us - JK SEMITECH - Elite VLSI Projects | Best Project Centre in Chennai</title>

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
