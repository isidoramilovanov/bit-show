import React, { Component } from 'react';
import {Container, Row, Col, ListGroup} from 'reactstrap';
import Footer from '../Partials/Footer';
import ShowsList from './ShowsList';
import {dataService}  from '../../Service/dataService';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allShows: []
        }
    }

    componentDidMount() {
        dataService.showsFunction() 
            .then((myShows) => {
                this.setState ({
                    allShows: myShows
                })
            })
        }    


    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col md='1'></Col>
                    <Col md='10'>
                        <h3>Popular Shows</h3>
                        <ListGroup>
                            <ShowsList data={this.state.allShows}/>
                        </ListGroup>
                    </Col>
                    <Col md='1'></Col>
                </Row>
            </Container>
            <Footer />
            </div>
        )
    }
}

export default Home;