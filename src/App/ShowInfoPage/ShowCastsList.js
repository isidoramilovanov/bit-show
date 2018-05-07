import React from 'react';
import ShowCastsItem from './ShowCastsItem';
import {ListGroup, ListGroupItem} from 'reactstrap';


const ShowCastsList = (props) => {

    const resultCasts = props.showDataCasts;
    // console.log(resultCasts);

    let allShowCasts = resultCasts.map((allShowCast) => 
        <ShowCastsItem showCastName={allShowCast.castName} key={allShowCast.castId} />
    );

    return (
        <React.Fragment>
            <h3>Casts ({props.showDataCasts.length})</h3>
            <ul>{allShowCasts}</ul>
        </React.Fragment>
    )

}

export default ShowCastsList;