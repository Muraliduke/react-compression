import React from 'react'

const card = (props) => {
    return (
        <>
					<section >
						<div className="wrap-1">
							<img src={props.path} alt=""/>
						</div>
						<p>{props.title}</p>
						{props.content}
					</section>
            
        </>
    )
}

export default card
