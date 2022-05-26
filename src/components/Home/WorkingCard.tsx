import React from 'react'

const WorkingCard = (props: any) => {
    return (
        <div className="cardstyle col-xs-12 col-sm-12 col-md-3">
            <img src={props.data.src} alt=""/>
            <h5 className="cent">{props.data.title}</h5>
            <p className="cent">{props.data.content}</p>
        </div>
    )
}

export default WorkingCard
