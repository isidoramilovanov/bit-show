import React  from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, InputGroup, Input} from 'reactstrap';
import {dataService}  from '../../Service/dataService';
import Search from '../../Entities/Search';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            inputValue: '',
            searchShows: [],
            searchName: ""
        };
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }


      handleChange = (event) => {
        let inputValueFromInput = event.target.value;
        dataService.showSearchFunction(inputValueFromInput)
        .then((myShowSearch) => {
          this.setState({
              searchShows: myShowSearch,
              inputValue: inputValueFromInput
          })
        })
      }

    displaySearchShows = () => {

        this.state.searchShows.filter(search => search.searchName)
        return this.state.searchName
        
    }

    render() {
        
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                    tag="span"
                    onClick={this.toggle}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                        >
                    <input 
                        type='search' 
                        placeholder='Search for show...' 
                        className='search-shows' 
                        onChange={this.handleChange} 
                        value={this.state.inputValue} />
                </DropdownToggle>
            <DropdownMenu>
                {console.log(this.state.searchShows)}
                <div onClick={this.toggle}>{this.props.search}</div>
            </DropdownMenu>
        </Dropdown>
    
        )
    }

}

export default SearchBar;