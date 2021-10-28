import React, { useState } from "react";
import {Link} from "react-router-dom"
import {
    Navbar,
    Container,
    Form,
    FormControl,
    Button,
    Nav,
} from 'react-bootstrap';

const SearchBox = ({ setQuery, setCategory }) => {
    const [searchInput, setSearchInput] = useState("Your input here");
    const handleInput = (input) => {
        input.preventDefault();
        setSearchInput(input.target.value);
    };

    const handleSubmit = () => {
        setQuery(searchInput);
    };

    const handleCategory = (e) => {
        setCategory(e.target.id);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">CoderNews</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link><Link style={{textDecoration:"none"}} to="/">News</Link></Nav.Link>
                    <Nav.Link><Link to="/categories/business" id="business" onMouseDown={handleCategory}>Business</Link></Nav.Link>
                    <Nav.Link><Link to="/categories/technology" id="technology" onMouseDown={handleCategory}>Technology</Link></Nav.Link>
                    <Nav.Link><Link to="/categories/science" id="science" onMouseDown={handleCategory}>Science</Link></Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchInput}
                    onChange={handleInput}
                    />
                    <Button onClick={handleSubmit} variant="outline-success" >Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SearchBox
