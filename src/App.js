import React from "react";
import './App.css';
import {
  Button, Navbar, Nav, NavDropdown, Form, FormControl,
  Row, Col, Image, Badge, ButtonToolbar, ButtonGroup, Jumbotron
} from "react-bootstrap";

import image from "./images/shop.png";
import uberEat from "./images/uber_eat.png";
import zomato from "./images/zomato_icon.png";
import foodPanda from "./images/food_panda_icon.png";
import foodSerachIcon1 from "./images/search.png";
import foodSerachIcon2 from "./images/food.png";

class App extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      locationName: "",
      hotelName: "",
      productName: "",
      quantity: 1,
      searchResult: [],
      sellingPartnerList: [],
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
              price: "",
              originalPrice: 100,
            },
            {
              name: "Zomato",
              price: "",
              originalPrice: 80
            },
            {
              name: "Food Panda",
              price: "",
              originalPrice: 70,
            }
          ],
          quantity: ""
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
              price: "",
              originalPrice: 100,
            },
            {
              name: "Zomato",
              price: "",
              originalPrice: 50,
            },
            {
              name: "Food Panda",
              price: "",
              originalPrice: 40,
            }
          ],
          quantity: ""
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
              price: "",
              originalPrice: 200,
            },
            {
              name: "Zomato",
              price: "",
              originalPrice: 100,
            },
            {
              name: "Food Panda",
              price: "",
              originalPrice: 80,
            }
          ],
          quantity: ""
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
              price: "",
              originalPrice: 150,
            },
            {
              name: "Zomato",
              price: "",
              originalPrice: 90,
            },
            {
              name: "Food Panda",
              price: "",
              originalPrice: 70,
            }
          ],
          quantity: ""
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
              price: "",
              originalPrice: 400,
            },
            {
              name: "Zomato",
              price: "",
              originalPrice: 200,
            },
            {
              name: "Food Panda",
              price: "",
              originalPrice: 150,
            }
          ],
          quantity: ""
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
              price: "",
              originalPrice: 400,
            },
            {
              name: "Zomato",
              price: "",
              originalPrice: 350,
            },
            {
              name: "Food Panda",
              price: "",
              originalPrice: 100,
            }
          ],
          quantity: ""
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
    let { hotelData } = this.state;
    hotelData.map((hotelObj) =>  {
      return (
        hotelObj.quantity = "",
        hotelObj.sellingPartner.map((partnerObj) => {
          return (
            partnerObj.price = ""
          );
        })
      );

    });
    this.setState({
      locationName: "",
      hotelName: "",
      productName: "",
      searchResult: [],
      sellingPartnerList: [],
      hotelData
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
    let result = this.state.hotelData.filter((obj) => {
      return obj.name === this.state.hotelName
    })
    this.setState({ searchResult, sellingPartnerList: result })
  }


  getImage = (name) => {
    let src = "";
    if (name === "Uber Eats") {
      src = uberEat;
    } else if (name === "Food Panda") {
      src = foodPanda;
    } else if (name === "Zomato") {
      src = zomato;
    }

    return <Image src={src} roundedCircle fluid className="max-width-50" />
  }

  getSellingPartner = (obj) => {
    if (obj.sellingPartner.length > 0) {
      return (obj.sellingPartner.map((item) => {
        return (
          <div style={{ marginBottom: "20px" }}>{this.getImage(item.name)}{`${obj.quantity === "" || obj.quantity == 1 || obj.quantity == 0 ? item.originalPrice : parseInt(obj.quantity) * item.originalPrice}`}</div>
        );
      }))
    }
  }

  updateQuantity = (val, selectedIndex) => {

    let arr = [...this.state.searchResult]
    arr.map((item, index) => {
      if (index == selectedIndex) {
        item.quantity = val;
        item.sellingPartner.map(obj => (
          obj.price = obj.originalPrice * item.quantity
        ))
      }
    })
   
    this.setState({ searchResult: arr })
    console.log(this.state.searchResult)
    console.log(this.state.searchResult[0].sellingPartner)
    console.log(this.state.searchResult[1].sellingPartner)
  }


  render() {
    console.log("Render-->", this.props.name)
    return (
      <div className="App-Container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">FTB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
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
                <Col md={2}>
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
                      <option>
                        Panner Tikka
                      </option>
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
          {this.state.searchResult.length > 0 ? <Jumbotron>
            {
              this.state.searchResult.map((obj, index) => {
                return (
                  <>
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col md={2}>
                            <Image src={obj.image} thumbnail />
                          </Col>
                          <Col md={6}>
                            <h4>{obj.name}</h4>
                            <div>
                              <Button variant="primary">
                                <Badge variant="light">{obj.rating}</Badge>
                                <span className="sr-only">unread messages</span>
                              </Button>

                            </div>
                            <div style={{ marginTop: "20px" }}>
                              <div style={{ display: "flex" }}>
                                <div>
                                  <h3>Product:{obj.product}</h3>
                                </div>
                                <div style={{ marginLeft: "26px" }}>
                                  <input type="number" value={obj.quantity} className="form-control" min={0} onChange={(e) => { this.updateQuantity(e.target.value, index) }} />
                                </div>
                              </div>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                              <h5>Info</h5>
                              <p>
                                {obj.info}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row>
                          <Col md={4}>
                            <h4>{this.state.hotelName ? this.getSellingPartner(obj) : obj.price}</h4>
                          </Col>
                          <Col md={8}>
                            <Button variant="success">
                              View Details
                    </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <hr />
                  </>
                );
              })
            }
          </Jumbotron> :
            <Jumbotron>
              <Image src={foodSerachIcon1} rounded width={"20%"} style={{ marginLeft: "40%" }} />
              <h1 className="text-center">Find Out Best Food</h1>
            </Jumbotron>
          }
        </div>:


      </div>
    );
  }
}

export default App;
