import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Jumbotron, Button, Panel, Modal } from 'react-bootstrap';

class Show extends Component {

	constructor() {
     super();
     this.state = {
       alum: {},
       showModal: false
     };

     this.handleShowModal = this.handleShowModal.bind(this);
     this.handleHideModal = this.handleHideModal.bind(this);
   }

   componentDidMount() {
     this.state = {
       alum: this.props.alumInfo
     };
   }


	 handleHideModal() {
	   this.setState({ showModal: false });
	 }

	 handleShowModal() {
	   this.setState({ showModal: true });
	 }



render() {
    return (
     <div>	
       <Panel key = {this.state.alum.id} onClick={this.handleShowModal}>
	       <h2>{this.props.alumInfo.firstName} {this.props.alumInfo.lastName}</h2>
	       <p>{this.props.alumInfo.track}</p>
	       <p>{this.props.alumInfo.cohort}</p>

       </Panel>
                 
       <Modal show={this.state.showModal} onHide={this.handleHideModal}>
         <Modal.Header closeButton>
           <Modal.Title>{this.state.alum.firstName} {this.state.alum.lastName}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <h4></h4>
           <p>Email: {this.state.alum.email}</p>
           <p>Track: {this.state.alum.track}</p>
           <p>Cohort: {this.state.alum.cohort}</p>
           <p>City: {this.state.alum.city}</p>

         </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.handleHideModal}>Close</Button>
         </Modal.Footer>
       </Modal>
			     


	</div>
      );
  }

}


export default Show;






  

