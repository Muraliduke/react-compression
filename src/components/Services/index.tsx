import React from 'react';
import './service.css';
import ServiceCard from './card';
import mock from './mockData';
import { Helmet } from "react-helmet";

const Service = () => {
    return (
        <>
            <Helmet>
                <title>Services - JK SEMITECH - Elite VLSI Projects | Best Project Centre in Chennai</title> 
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
            <div className="service-page">
            <div className="top-container">
                <p>JK provides wide range of training,workshops and project assists with variety of domain expertise</p> 

            </div>

            <div className="card-area row">
                {mock.map((val, i) => <ServiceCard {...val}/>)}
            </div>
        </div>

        </>
    )
}

export default Service
