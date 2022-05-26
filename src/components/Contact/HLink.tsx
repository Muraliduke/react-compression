import React from 'react'

const HLink = (props) => {
    return (
        <>
           {props.type === 'phone' ? (<a href="tel:+917338854123">{props.val}</a>): null} 
           {props.type === 'mail' ? (<a href="mailto:info@koops.co.in">{props.val}</a>): null} 
        </>
    )
}

export default HLink
