import React from 'react';
// import {
//   Link
// } from "react-router-dom";

import { HashLink as Link } from 'react-router-hash-link';

const Links = (props:any) => {
    return (
        <ul>
					<li>
            <i className='fas fa-angle-right'></i> 
            <Link
                to={{
                  pathname: props.data.link,
                  hash: `#${props.data.title}`,
                }}>{props.data.title}</Link>
					</li>
        </ul>
    )
}

export default Links
