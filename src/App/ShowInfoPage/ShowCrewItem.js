import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

const ShowCrewItem = (props) => {

    // console.log(props.showCrewName)
    
    return (
        <li>{props.showCrewName}</li>
    )

}

export default ShowCrewItem;