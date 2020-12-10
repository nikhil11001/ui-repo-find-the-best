import React from "react";
import './App.css';
import {
  Button, Navbar, Nav, NavDropdown, Form, FormControl,
  Row, Col, Image,Badge
} from "react-bootstrap";


class App extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      location: "",
      checkInDate: "",
      checkedOutDate: ""
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
            <Col md={11}>
              <Row>
                <Col md={3}>
                  <input type="text" className="form-control" placeholder="Enter Location" value={this.state.location} onChange={(e) => { this.handleChange(e.target.value, "location") }} />
                </Col>
                <Col md={3}>
                  <input type="text" className="form-control" placeholder="Check In" value={this.state.checkInDate} onChange={(e) => { this.handleChange(e.target.value, "checkedInDate") }} />
                </Col>
                <Col md={3}>
                  <input type="text" className="form-control" placeholder="Check Out" value={this.state.checkedOutDate} onChange={(e) => { this.handleChange(e.target.value, "checkedOutDate") }} />
                </Col>
                <Col md={3}>
                  <input type="text" className="form-control" placeholder="No. Of Guests" value={this.state.checkedOutDate} onChange={(e) => { this.handleChange(e.target.value, "checkedOutDate") }} />
                </Col>
              </Row>
            </Col>
            <Col md={1}>
              <Button>Search</Button>
            </Col>
          </Row>
        </div>
        <div style={{marginLeft:"76px",marginRight:"76px",marginTop:"50px"}}>
          <Row>
            <Col md={2}>
              <Image src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/27/36/2736906_v4.jpeg" thumbnail />
            </Col>
            <Col md={3}>
              <h4>Courtyard by Marriott,Pune</h4>
              <p>26.0 km to City centre</p>
              <div>
                <Button variant="primary">
                  Excellent <Badge variant="light">9</Badge>
                  <span className="sr-only">unread messages</span>
                </Button>
               
              </div>
              <div style={{marginTop:"30px"}}>
                <h5>Info</h5>
                <p>
                Situated in Chakan’s industrial area, on the northern outskirts of Pune, the eco-friendly Courtyard by Marriott Pune Chakan takes pride in its modern fitness centre, outdoor lap pool, 24-hour restaurant, and outdoor/indoor game zones. Furnished with featherbed mattresses, the upscale rooms are fully air-conditioned. Standard amenities include satellite TVs, safes, fridges, iPod docks, ergonomic desks, and free signature toiletries. Suites with separate living areas and pet-friendly rooms are also available.
                </p>
              </div>
            </Col>
            <Col md={1}>
              <h4>Rs. 6615</h4>
            </Col>
            <Col md={2}>
            <Button variant="success">
                  View Details
                </Button>
            </Col>
          </Row>

          <Row style={{marginTop:"30px"}}>
            <Col md={2}>
              <Image src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/27/36/2736906_v4.jpeg" thumbnail />
            </Col>
            <Col md={3}>
              <h4>Courtyard by Marriott,Pune</h4>
              <p>26.0 km to City centre</p>
              <div>
                <Button variant="primary">
                  Excellent <Badge variant="light">9</Badge>
                  <span className="sr-only">unread messages</span>
                </Button>
               
              </div>
              <div style={{marginTop:"30px"}}>
                <h5>Info</h5>
                <p>
                Situated in Chakan’s industrial area, on the northern outskirts of Pune, the eco-friendly Courtyard by Marriott Pune Chakan takes pride in its modern fitness centre, outdoor lap pool, 24-hour restaurant, and outdoor/indoor game zones. Furnished with featherbed mattresses, the upscale rooms are fully air-conditioned. Standard amenities include satellite TVs, safes, fridges, iPod docks, ergonomic desks, and free signature toiletries. Suites with separate living areas and pet-friendly rooms are also available.
                </p>
              </div>
            </Col>
            <Col md={1}>
              <h4>Rs. 6615</h4>
            </Col>
            <Col md={2}>
            <Button variant="success">
                  View Details
                </Button>
            </Col>
          </Row>
          
        </div>
      </div>
    );
  }
}

export default App;
