import Show from '../Entities/Show';
import Season from '../Entities/Season';
import Cast from '../Entities/Cast';
import Search from '../Entities/Search';
import Crew from '../Entities/Crew';
import Aka from '../Entities/Aka';


class ShowsRequest {
    showsFunction = () => {
     return fetch('http://api.tvmaze.com/shows') 
         .then((response) => response.json())
         .then((result) => result.slice(0, 50))
         .then((showList) => {
             return showList.map((show, i) => {
                 return new Show(show)
             })
         })
    }
    
    oneShowFunction = (showId) => {
        return fetch(`http://api.tvmaze.com/shows/${showId}`)
            .then((response) => response.json())
            .then((show) => {
                return new Show (show);
        })
    };

    oneShowSeasonFunction = (showId) => {
        return fetch(`http://api.tvmaze.com/shows/${showId}/seasons`)
            .then((response) => response.json())
            .then((resultArray) => {
                // console.log(resultArray)
                return resultArray.map((season, i) => {
                    return new Season (season);
            })   
        })
    };

    showCastsFunction = (showId) => {
        return fetch(`http://api.tvmaze.com/shows/${showId}/cast`)
            .then((response) => response.json())
            .then((castsArray) => {
                // console.log(castsArray)
                return castsArray.map((cast, i) => {
                    return new Cast (cast);
            })   
        })
    };

    showSearchFunction = (showId) => {
        return fetch(`http://api.tvmaze.com/search/shows?q=${showId}`)
        .then((response) => response.json())
        .then((result) => result)
        .then((searchResult) => {
            return searchResult.map((search, i) => {
                // console.log(search)
                return new Search (search)
            })
        })  

    }

    showCrewFunction = (crewId) => {
        return fetch(`http://api.tvmaze.com/shows/${crewId}/crew`)
        .then((response) => response.json())
        .then((result) => result.slice(0, 5))
        .then((crewResult) => {
            return crewResult.map((crew, i) => {
                return new Crew (crew)
            })
        })  
    }
    
 }
 
 export const dataService = new ShowsRequest();