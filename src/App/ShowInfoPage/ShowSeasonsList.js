import React from 'react';
import ShowSeasonsItem from './ShowSeasonsItem';
import {ListGroup, ListGroupItem} from 'reactstrap';


const ShowSeasonsList = (props) => {

    const resultSeasons = props.showDataSeasons;
    // console.log(resultSeasons);

    let allShowSeasons = resultSeasons.map((allShowSeason) => 
        <ShowSeasonsItem startDate={allShowSeason.showStartDate} endDate={allShowSeason.showEndDate} key={allShowSeason.seasonId} />
    );

    return (
        <React.Fragment>
            <h3>Seasons ({props.showDataSeasons.length})</h3>
            <ul>{allShowSeasons}</ul>
        </React.Fragment>
    )

}

export default ShowSeasonsList;