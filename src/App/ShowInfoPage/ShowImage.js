import React from 'react';


const ShowImage = (props) => {

   

    return (
        <React.Fragment>
            <h3 className='show-title'>{props.showData.name}</h3>
            <img src={props.showData.picture} alt='show-image' className='show-image'/>
        </React.Fragment>
    )
}

export default ShowImage;