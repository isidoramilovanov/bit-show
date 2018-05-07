import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

const ShowCastsItem = (props) => {

    // console.log(props.startDate)

    return (
     
            <li>{props.showCastName}</li>
    )
}

export default ShowCastsItem;