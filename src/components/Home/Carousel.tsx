import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import mockData from './data/carouselMockData'

const Card = (props: any) => {

    return(
        <div>
            <section className="slider-content col-md-6">
                <p>
                   {props.data.title }
                </p>
                <span className="name">- {props.data.content }</span>
            </section>
        </div>
    )
}

const CarouselLayout = () => {
    return (
        <>
            <Carousel>
                {
                    mockData.map((data, i) => (
                        <Carousel.Item key={i}>
                    
                            <Card data = {data} key={`_${i}`}/>
                        </Carousel.Item>
                    ))
                }
                
                
            </Carousel>
        </>
    )
}

export default CarouselLayout
