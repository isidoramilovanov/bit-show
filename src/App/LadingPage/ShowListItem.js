import React from 'react';
import { Link } from "react-router-dom";
import {Card, CardImg, CardBody, CardTitle} from 'reactstrap';

const ShowListItem = (props) => {



    return (
        <div className='show-item'>
             <Card className='show-item'>
                <CardImg top width="100%" src={props.photo} alt="Card image cap" />
                 <CardBody>
                     <CardTitle><Link to={`showinfo/${props.showId}`}><h5>{props.title}</h5></Link></CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default ShowListItem;