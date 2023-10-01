import React, {useState, useRef} from 'react';
import {Form, Col, Button}  from 'react-bootstrap';
import ModalLayout from './Modal';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

const FormLayout = () => {
		const data = [
			"Synthesis ",
			"UPF",
			"NDM Libraries",
			"Initial Design Setup",
			"Floor Planning",
			"Placement",
			"Power Planning",
			"Scan Chain RE-Ordering and RE-Partitioning",
			"Timing Constraints",
			"Clock Tree Synthesis",
			"Global Routing",
			"Power Analysis (Static and Dynamic) ",
			"Engineering Change Order Flow (ECO)",
			"Multiple Industry standard Projects",
			"Design For Manufacturability"
		]
		const [service, setService] = useState('Synthesis');
		const [name, setName] = useState('');
		const [number, setNumber] = useState('');
		const [city, setCity] = useState('');
		const [zip, setZip] = useState('');
		const [email, setEmail] = useState('');
		const [isLoader, setLoader]= useState(false);
		const [show, setShow] = useState(false);
		const handleClose = () => {
			setShow(false);
			window.location.reload();
		}
  	const handleShow = () => setShow(true);

		async function postData(url = '', data = {}) {
				const response = await fetch(url, {
				method: 'POST', 
				headers: {
					'Content-Type': 'application/json'

				},
				body: JSON.stringify(data) 
			});
			return response.json(); 
		}

		const [validated, setValidated] = useState(false);
		const formRef = useRef(null);

		const handleReset = () => {
			// @ts-ignore: Object is possibly 'null'.
			formRef.current.reset();
			setValidated(false);
			setService('');
			setName('');
			setNumber('');
			setCity('');
			setZip('');
			setEmail('');
		};

		const handleSubmit = (event) => {
			event.preventDefault();
			event.stopPropagation();
			// console.log(form.checkValidity())

			if (service &&
				name &&
				number &&
				city &&
				zip &&
				email) {
					setLoader(true)
				const postInfo = {
					service,
					name,
					number,
					city,
					zip,
					email
				}
				postData('https://koops-system.herokuapp.com/koops-mail',postInfo)
				.then(data => {
					handleReset();
					setLoader(false)
					setShow(true);
				});
			}else {
				setValidated(true);

			} 
			
		};

    return (
			
        <div>
						<ModalLayout
							show = {show}
							handleClose = {handleClose}
							handleShow = {handleShow}
						/>
						<h2>CONTACT US</h2>

            <Form ref={formRef} noValidate validated={validated} >

                <Form.Group controlId="formName">
                    <Form.Label>Name*</Form.Label>
                    <Form.Control autoFocus  onChange={(e)=> setName(e.target.value)} required placeholder="" />
										<Form.Control.Feedback type="invalid">
											Please Input Your Name
										</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    	<Form.Label>Email*</Form.Label>
                    	<Form.Control onChange={(e)=> setEmail(e.target.value)} required type="email" placeholder="" />
											<Form.Control.Feedback type="invalid">
												Please Input Valid Email
											</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

								<Form.Group controlId="formNumber">
                    <Form.Label>Contact Number*</Form.Label>
                    <Form.Control onChange={(e)=> setNumber(e.target.value)} required placeholder="" />
										<Form.Control.Feedback type="invalid">
												Please Input Contact Number
										</Form.Control.Feedback>
                </Form.Group>

								<Form.Group  controlId="formGridState">
									<Form.Label>Requested Service*</Form.Label>
									<Form.Control onChange={(e)=> setService(e.target.value)} required as="select" defaultValue="Choose...">
											
											
											{data.map((e, i) => (<option>{e}</option>))}
									</Form.Control>
									
								</Form.Group>

                

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    	<Form.Label>City*</Form.Label>
                    	<Form.Control onChange={(e)=> setCity(e.target.value)} required/>
											<Form.Control.Feedback type="invalid">
												Please Input Your city
											</Form.Control.Feedback>
                    </Form.Group>

                    

                    <Form.Group as={Col} controlId="formGridZip">
                    	<Form.Label>Zip*</Form.Label>
                    	<Form.Control onChange={(e)=> setZip(e.target.value)} required/>
											<Form.Control.Feedback type="invalid">
												Please Input Valid ZipCode
											</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                {/* <Form.Group id="formGridCheckbox">
									<Form.Label>Reason for contact</Form.Label>
									
                  <Form.Check type="checkbox" onSelect={()=> console.log('selected')} label="Request a service" />
                  <Form.Check type="checkbox" label="Discuss an existing booking" />
                  <Form.Check type="checkbox" label="Want to join the team" />

                </Form.Group> */}

                {
									isLoader ? (<Loader
										type="ThreeDots" 
										color="#eeb72f"
										height={100}
										width={100}
					
									/>): (
										<Button variant="dark" type="button" size="lg" block onClick={handleSubmit}>
                    	Submit
                	</Button>
									)								
								}
            </Form>
        </div>
    )
}

export default FormLayout
