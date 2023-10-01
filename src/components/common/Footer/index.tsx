import React from 'react';
import mockData from './mockData';
import List from './Links';
import '../common.css';

const Footer = () => {
    const { 
        usefulLink,
        services,
        about,
        customerFirst}= mockData;

    return (
        <section className="row footer">
            <div className="useful col-xs-12 col-sm-6 col-md-3 mb-10">
                <h5 className="widget-title">USEFUL LINKS</h5>
                <section className="pl">
                    {usefulLink.map((d: any,i: any) => (<List data={d} key={i} />))}
                </section>
            </div>
            <div className="services col-xs-12 col-sm-6 col-md-3 mb-10">
                <h5 className="widget-title">OUR SERVICES</h5>
                <section className="pl">
                    {services.map((d: any,i: any) => (<List data={d} key={i} />))}
                </section>
            </div>

            <div className="koops col-xs-12 col-sm-6 col-md-3 mb-10">
                <h5 className="widget-title">JK SEMITECH</h5>
                <div className="pl">
                    <p className="company-name">{about.name}</p>
                    <p>Address:</p>
                    <p>{about.address}</p>
                    <p>Phone:<a href="tel:+914448565222"> {about.phone}</a></p>
                    <a href="mailto:info@koops.co.in">{about.email}</a>
                </div>
                
            </div>
            <div className="customer col-xs-12 col-sm-6 col-md-3 mb-10">
                <h5 className="widget-title">CUSTOMERS FIRST</h5>
                <div className="pl">
                {customerFirst.map((val , i) => (<p key={i}>{val}</p>))}
                </div>
            </div>

        </section>
    )
}

export default Footer
