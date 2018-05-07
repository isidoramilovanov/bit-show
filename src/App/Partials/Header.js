import React from 'react';
import SearchBar from '../Elements/SearchBar';
import {dataService}  from '../../Service/dataService';
import { Container, Row, Col, Input, NavLink, InputGroup, InputGroupAddon, Button } from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allSearchShows: [],
            filterShows: [],
            searchShows: false
    
        }
    }
      
  
    componentDidMount() {
        dataService.showSearchFunction() 
            .then((mySearchShows) => {
                this.setState ({
                    allSearchShows: mySearchShows
                })
            })
        } 
    

    handleChange = (event) => {
        let inputValue = event.target.value;
        let newShows = this.state.allSearchShows.filter((show) => `${show.name}`.toLowerCase().includes(inputValue.toLowerCase()))
        this.setState({
            filterShows: newShows,
            searchShows: true
        })
    }


    checkSearchShows = () => {
        if (this.state.searchShows === true) {
            return this.state.filterShows
        } else {
            return this.state.allSearchShows
        }
    }





    render() {
        return (
            <Container>
                <Row>
                   <Col md='1'></Col>
                   <Col md='5'  className='header-app'>
                        <NavLink href="/"><h2>BIT Show</h2></NavLink>
                   </Col>
                   <Col md='5' className='header-app'> 
                    <SearchBar handleChange={this.handleChange} inputValue={this.state.inputValue} />
                   </Col>
                   <Col md='1'></Col>
                   <hr />
                </Row>
           </Container>
        )
    }
 
}

export default Header;