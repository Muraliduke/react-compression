import React from 'react'

const ExperienceCard = (props: any) => {
    return (
        <section className="expr col-xs-12 col-sm-12 col-md-6">
            <div className="title">
                <img src={props.data.src} alt=""/>
                <p>{props.data.title}</p>
            </div>
            
            <p className="content">{props.data.content}</p>
        </section>
    )
}

export default ExperienceCard
