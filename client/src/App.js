import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Client from './Client';
import Show from './Show';
import { Grid, Row, Col, Navbar, Jumbotron, Button, Panel, Modal } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  
  //Initial state
  constructor() {
     super();
     this.state = {
       alums: []
     };
   }

 componentDidMount() {
     axios.get('alums')
       .then(response => {
         const alums = response.data.map(obj => obj);
         this.setState({alums});
       });
   }
    

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">SIBlings</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Startup Institute Alumni</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="#"
                target="_blank">
                Add an Alum
              </Button>
            </p>
          </Grid>
        </Jumbotron>
        <Grid>
         <Row>
           {
             this.state.alums.map((alum, idx) => (
               <Col xs={6} md={4} key={alum.id}>
                 <Show key={alum.id} alumInfo={alum}> </Show>
               </Col>
               ))
             }
         </Row>
       </Grid>
       
      </div>
    );
  }
}

export default App;
