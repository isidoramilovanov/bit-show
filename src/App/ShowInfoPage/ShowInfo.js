import React, { Component } from 'react';
import {Container, Row, Col, ListGroup} from 'reactstrap';
import ShowImage from './ShowImage';
import ShowDetails from './ShowDetails';
import Footer from '../Partials/Footer';
import ShowSeasonsList from './ShowSeasonsList';
import ShowCastsList from './ShowCastsList';
import ShowCrewList from './ShowCrewList';
import {dataService}  from '../../Service/dataService';


class ShowInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneShow: {},
            allSeasons: [],
            allCasts: [],
            allCrews: [],
            allAkas: []
        }
    }

    componentDidMount() {
        dataService.oneShowFunction(this.props.match.params.id)
        .then((myShow) => {
            this.setState({
                oneShow: myShow
            })
        })

        dataService.oneShowSeasonFunction(this.props.match.params.id)
        .then((mySeasons) => {
            // console.log(mySeasons)
            this.setState({
                allSeasons: mySeasons
                
            })
            // console.log(this.state.allSeasons)
        })

        dataService.showCastsFunction(this.props.match.params.id)
        .then((myCasts) => {
            this.setState({
                allCasts: myCasts
            })
        })

        dataService.showCrewFunction(this.props.match.params.id)
        .then((myCrews) => {
            this.setState({
                allCrews: myCrews
            })
        })
        
    }

    
    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col md='1'></Col>
                    <Col md='4'><ShowImage showData={this.state.oneShow}/></Col>
                    <Col md='3' className='show-season-casts'>
                        <div>
                             <ShowSeasonsList showDataSeasons={this.state.allSeasons}/>
                        </div>
                        <div>
                             <ShowCastsList showDataCasts={this.state.allCasts}/>
                        </div>
                    </Col>
                    <Col md='3' className='show-crew'>
                        <div>
                            <ShowCrewList showDataCrews={this.state.allCrews} />
                        </div>      
                    </Col>

                    <Col md='1'></Col>
                </Row>
                 <Row>
                    <Col md='1'></Col>
                    <Col md='10'><ShowDetails showData={this.state.oneShow.details}/></Col>
                    <Col md='1'></Col>
                </Row>
            </Container>
            <Footer />
            </div>
        )
    }
}


export default ShowInfo;