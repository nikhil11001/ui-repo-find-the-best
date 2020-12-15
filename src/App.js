import React from "react";
import './App.css';
import {
  Button, Navbar, Nav, NavDropdown, Form, FormControl,
  Row, Col, Image, Badge, ButtonToolbar, ButtonGroup
} from "react-bootstrap";

import image from "./images/shop.png"

class App extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      locationName: "",
      hotelName: "",
      productName: "",
      searchResult: [],
      sellingPartnerList:[],
      hotelData: [
        {
          name: "Hotel 1",
          info: "Situated in Chakan’s industrial area, on the northern outskirts of Pune, the eco-friendly Courtyard by Marriott Pune Chakan takes pride in its modern fitness centre.",
          rating: "Excellent 9",
          price: "Rs.120",
          location: "Pimpari",
          product: "Paneer Tikka",
          image,
          sellingPartner: [
            {
              name: "Uber Eats",
              price: "Rs.100",
            },
            {
              name: "Zomato",
              price: "Rs.80",
            },
            {
              name: "Food Panda",
              price: "Rs.90",
            }
          ]
        },
        {
          name: "Hotel 2",
          info: "Situated in Chakan’s industrial area, on the northern outskirts of Pune, the eco-friendly Courtyard by Marriott Pune Chakan takes pride in its modern fitness centre.",
          rating: "Excellent 9",
          price: "Rs.130",
          location: "Pimpari",
          product: "Paneer Tikka",
          image,
          sellingPartner: [
            {
              name: "Uber Eats",
              price: "Rs.100",
            },
            {
              name: "Zomato",
              price: "Rs.80",
            },
            {
              name: "Food Panda",
              price: "Rs.90",
            }
          ]
        },

        {
          name: "Hotel 3",
          info: "Situated in Chakan’s industrial area, on the northern outskirts of Pune, the eco-friendly Courtyard by Marriott Pune Chakan takes pride in its modern fitness centre.",
          rating: "Excellent 9",
          price: "Rs.220",
          location: "Deccan",
          product: "Veg Pulav",
          image,
          sellingPartner: [
            {
              name: "Uber Eats",
              price: "Rs.100",
            },
            {
              name: "Zomato",
              price: "Rs.80",
            },
            {
              name: "Food Panda",
              price: "Rs.90",
            }
          ]
        },

        {
          name: "Hotel 4",
          info: "Situated in Chakan’s industrial area, on the northern outskirts of Pune, the eco-friendly Courtyard by Marriott Pune Chakan takes pride in its modern fitness centre.",
          rating: "Excellent 9",
          price: "Rs.200",
          location: "Deccan",
          product: "Veg Pulav",
          image,
          sellingPartner: [
            {
              name: "Uber Eats",
              price: "Rs.100",
            },
            {
              name: "Zomato",
              price: "Rs.80",
            },
            {
              name: "Food Panda",
              price: "Rs.90",
            }
          ]
        },

        {
          name: "Hotel 5",
          info: "Situated in Chakan’s industrial area, on the northern outskirts of Pune, the eco-friendly Courtyard by Marriott Pune Chakan takes pride in its modern fitness centre.",
          rating: "Excellent 9",
          price: "Rs.190",
          location: "FC Road",
          product: "Chicken Biryani",
          image,
          sellingPartner: [
            {
              name: "Uber Eats",
              price: "Rs.100",
            },
            {
              name: "Zomato",
              price: "Rs.80",
            },
            {
              name: "Food Panda",
              price: "Rs.90",
            }
          ]
        },

        {
          name: "Hotel 6",
          info: "Situated in Chakan’s industrial area, on the northern outskirts of Pune, the eco-friendly Courtyard by Marriott Pune Chakan takes pride in its modern fitness centre.",
          rating: "Excellent 9",
          price: "Rs.210",
          location: "FC Road",
          product: "Chicken Biryani",
          image,
          sellingPartner: [
            {
              name: "Uber Eats",
              price: "Rs.100",
            },
            {
              name: "Zomato",
              price: "Rs.80",
            },
            {
              name: "Food Panda",
              price: "Rs.90",
            }
          ]
        }

      ]
    }
  }



  handleChange = (value, fieldName) => {
    if (fieldName == "location") {
      this.setState({ location: value })
    } else if (fieldName == "checckedInDate") {
      this.setState({ checkInDate: value })
    } else if (fieldName == "checkedOutDate") {
      this.setState({ checkedOutDate: value })
    }
  }

  resetFilters = () => {
    this.setState({
      locationName: "",
      hotelName: "",
      productName: ""
    }, () => {
      console.log("state--->", this.state)
    })
  }

  handleSearch = () => {
    const { locationName, productName, hotelName, hotelData } = this.state;
    let searchResult = hotelData.filter((item) => {
      return (item.name === hotelName || item.location === locationName || item.product === productName)
    })
    console.log("searchRsult--->", searchResult)
    this.setState({ searchResult })
  }

  getSellingPartner=()=>{
    let sellingPartnerList=[];
   let result=this.state.hotelData.filter((obj)=>{
      return obj.name===this.state.hotelName
   }) 
  
  if(result.length >0){
    sellingPartnerList=result[0].sellingPartner.map((obj)=>{
      return (
      <div>{`${obj.name} :  ${obj.price}`}</div>
      );
  })
  }
  
  this.setState ({sellingPartnerList});
  }

  render() {
    return (
      <div className="App-Container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">FTB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ marginTop: "54px", marginLeft: "124px", marginRight: "70px" }}>
          <Row>
            <Col md={10}>
              <Row>
                <Col md={3}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="select"
                      value={this.state.locationName}
                      onChange={(e) => { this.setState({ locationName: e.target.value }) }}>
                      <option>Select Location</option>
                      <option>Pimpari</option>
                      <option>Deccan</option>
                      <option>FC Road</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Hotel</Form.Label>
                    <Form.Control as="select"
                      value={this.state.hotelName}
                      onChange={(e) => { this.setState({ hotelName: e.target.value }) }}>
                      <option>Select Hotel</option>
                      <option>Hotel 1</option>
                      <option>Hotel 2</option>
                      <option>Hotel 3</option>
                      <option>Hotel 4</option>
                      <option>Hotel 5</option>
                      <option>Hotel 6</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Product</Form.Label>
                    <Form.Control as="select"
                      value={this.state.productName}
                      onChange={(e) => { this.setState({ productName: e.target.value }) }}>
                      <option>Select Product</option>
                      <option>Panner Tikka</option>
                      <option>Veg Pulav</option>
                      <option>Chicken Biryani</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

              </Row>
            </Col>
            <Col md={2} style={{ marginTop: "34px" }}>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                  <Button onClick={() => { this.handleSearch() }}> Search</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2" aria-label="Second group">
                  <Button onClick={() => { this.resetFilters() }}>Reset</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
        </div>
        <div style={{ marginLeft: "76px", marginRight: "76px", marginTop: "50px" }}>
          {
            this.state.searchResult.map((obj) => {
              return (
                <Row>
                  <Col md={2}>
                    <Image src={obj.image} thumbnail />
                  </Col>
                  <Col md={2}>
                    <h4>{obj.name}</h4>
                    <div>
                      <Button variant="primary">
                        <Badge variant="light">{obj.rating}</Badge>
                        <span className="sr-only">unread messages</span>
                      </Button>

                    </div>
                    <div style={{ marginTop: "30px" }}>
                      <h5>Info</h5>
                      <p>
                        {obj.info}
                      </p>
                    </div>
                  </Col>
                  <Col md={2}>
                    <h4>{this.state.hotelName && this.state.sellingPartnerList.length >0 ?this.getSellingPartner() :obj.price}</h4>
                  </Col>
                  <Col md={2}>
                    <Button variant="success">
                      View Details
                    </Button>
                  </Col>
                </Row>

              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
