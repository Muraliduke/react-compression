import React from 'react'

const card = (props: any) => {
    return (
        <section className="col-xs-12 col-sm-6 col-md-4" id={props.title}>
           <div className="" >
                <div className="img-loader imgcard">
                    <figure>
                    <img src={props.link} alt=""/>
                    </figure> 
                    {/* <div className="overlay">
                            <div className="text">Hello World</div>
                        </div> */}
                </div>
                <h3>{props.title}</h3> 
                <p>{props.content}</p>
           </div>
        </section>
    )
}

export default card
