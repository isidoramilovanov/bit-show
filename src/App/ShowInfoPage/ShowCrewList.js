import React from 'react';
import ShowCrewItem from './ShowCrewItem';
import {ListGroup, ListGroupItem} from 'reactstrap';


const ShowCrewList = (props) => {

    const resultCrews = props.showDataCrews;

    let allShowCrews = resultCrews.map((allShowCrew) => 
        <ShowCrewItem showCrewName={allShowCrew.crewName} key={Math.random()} />
    );

    // console.log(allShowCrews);
    
    return  (
        <React.Fragment>
            <h3 className='item-headline'>Crews ({props.showDataCrews.length})</h3>
            <ul>{allShowCrews}</ul>
        </React.Fragment>
    )

}

export default ShowCrewList;