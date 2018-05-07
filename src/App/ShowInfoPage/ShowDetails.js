import React from 'react';


const ShowDetails = (props) => {
    let text = props.showData;

    return (
        <div>
            <h3 className='show-summary'>Show Details</h3>
            <div dangerouslySetInnerHTML={ { __html: text } }></div>
        </div>
    )

}

export default ShowDetails;