import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

const ShowSeasonsItem = (props) => {

    // console.log(props.startDate)

    return (
        <li>{props.startDate} - {props.endDate}</li>
    )
}

export default ShowSeasonsItem;