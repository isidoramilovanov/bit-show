import React from 'react';
import ShowListItem  from './ShowListItem';
import {ListGroupItem} from 'reactstrap';

const ShowsList = (props) => {

    const results = props.data;
    let tvShows = results.map(tvShow => 
        <ShowListItem title={tvShow.name} photo={tvShow.picture} key={tvShow.id} showId={tvShow.id} />
    );

    return (
        <ListGroupItem>
            {tvShows}
        </ListGroupItem>
    )
}

export default ShowsList;