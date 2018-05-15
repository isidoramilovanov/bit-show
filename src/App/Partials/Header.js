import React from 'react';
import SearchBar from '../Elements/SearchBar';
import { Container, Row, Col, Input, NavLink, InputGroup, InputGroupAddon, Button } from 'reactstrap';

const Header = (props) => {
    
        return (
            <Container>
                <Row>
                   <Col md='1'></Col>
                   <Col md='5'  className='header-app'>
                        <NavLink href="/"><h2>BIT Show</h2></NavLink>
                   </Col>
                   <Col md='5' className='header-app'> 
                    <SearchBar handleChange={props.handleChange} inputValue={props.inputValue} />
                   </Col>
                   <Col md='1'></Col>
                   <hr />
                </Row>
           </Container>
        )
    }
 


export default Header;