import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Jumbotron, Button, Panel, Modal, Form, FormControl, ControlLabel } from 'react-bootstrap';

class AddAlum extends Component {

	constructor() {
     super();
     this.state = {
       firstName: "",
       lasttName: "",
       track: "",
       cohort: "",
       email: "",
       city: "",
       showAddModal: false
     };

     this.handleShowAddModal = this.handleShowAddModal.bind(this);
     this.handleHideAddModal = this.handleHideAddModal.bind(this);

     this.handleFirstChange = this.handleFirstChange.bind(this);
     this.handleLastChange = this.handleLastChange.bind(this);
     this.handleTrackChange = this.handleTrackChange.bind(this);
     this.handleCohortChange = this.handleCohortChange.bind(this);
     this.handleCityChange = this.handleCityChange.bind(this);
     this.handleEmailChange = this.handleEmailChange.bind(this);
   }

   // componentDidMount() {
   //   this.state = {
   //     alum: this.props.alumInfo
   //   };
   // }


	 handleHideAddModal() {
	   this.setState({ showAddModal: false });
	 }

	 handleShowAddModal() {
	   this.setState({ showAddModal: true });
	 }

    handleFirstChange(event) {
     this.setState({firstName: event.target.value});
   }

   handleLastChange(event) {
     this.setState({lastName: event.target.value});
   }

   handleTrackChange(event) {
     this.setState({track: event.target.value});
   }

   handleCohortChange(event) {
     this.setState({cohort: event.target.value});
   }

   handleCityChange(event) {
     this.setState({city: event.target.value});
   }

   handleEmailChange(event) {
     this.setState({email: event.target.value});
   }


render() {
    return (
     <div>	
       <Button
          bsStyle="success"
          bsSize="large"
          onClick={this.handleShowAddModal}
          target="_blank">
          Add an Alum
       </Button>

       
       <Modal show={this.state.showAddModal} onHide={this.handleHideAddModal}>
         <Modal.Header closeButton>
           <Modal.Title>Add an SI Alum</Modal.Title>
         </Modal.Header>
         <Modal.Body>
          <form>
         <ControlLabel>First Name</ControlLabel>
         <FormControl
           id="formControlsText"
           type="text"
           value={this.state.firstName}
           onChange={this.handleFirstChange}
           placeholder="Enter text"
         />
         <ControlLabel>Last Name</ControlLabel>
         <FormControl
           id="formControlsText"
           type="text"
           value={this.state.lastName}
           onChange={this.handleLastChange}
           placeholder="Enter text"
         />
         <ControlLabel>Track</ControlLabel>
         <FormControl
           id="formControlsText"
           type="text"
           value={this.state.track}
           onChange={this.handleTrackChange}
           placeholder="Enter text"
         />
         <ControlLabel>Cohort</ControlLabel>
         <FormControl
           id="formControlsText"
           type="text"
           value={this.state.cohort}
           onChange={this.handleCohortChange}
           placeholder="Enter text"
         />
         <ControlLabel>City</ControlLabel>
         <FormControl
           id="formControlsText"
           type="text"
           value={this.state.city}
           onChange={this.handleCityChange}
           placeholder="Enter text"
         />
         <ControlLabel>Email</ControlLabel>
         <FormControl
           id="formControlsEmail"
           type="email"
           label="Email"
           value={this.state.email}
           onChange={this.handleEmailChange}
           placeholder="Enter email"
         />
       </form>           

         </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.handleHideAddModal}>Close</Button>
           <Button bsStyle="success" onClick={this.handleHideAddModal}>Add</Button>
         </Modal.Footer>
       </Modal>
                 
       
			     


	</div>
      );
  }

}


export default AddAlum;






  

