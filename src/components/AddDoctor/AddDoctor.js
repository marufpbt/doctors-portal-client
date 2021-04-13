import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { Row, Col, Form } from 'react-bootstrap';
const axios = require('axios');

const AddDoctor = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const [imageUrl, setImage] = useState(null)
	const onSubmit = data => {
		const eventData = {
			email: data.email,
			phone: data.phone,
			name: data.name,
			imageUrl: imageUrl
		}
		fetch('https://fierce-savannah-93006.herokuapp.com/addDoctor', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(eventData)
		})
	};
	const handleImageChange = (e) => {
		const imageData = new FormData();
		imageData.set('key', '867e70f288682920eb5ea080ee834a72')
		imageData.append('image', e.target.files[0])

		axios.post('https://api.imgbb.com/1/upload', imageData)
			.then(function (response) {
				setImage(response.data.data.display_url)
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	return (
		<section className="container-fluid row">
			<Sidebar></Sidebar>
			<div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
				<h5 className="text-brand">Add a Doctor</h5>
				<form onSubmit={handleSubmit(onSubmit)} className="formStyle">
					<Row>
						<Col>
							<Form.Label>Email Address</Form.Label>
							<input name="email" placeholder="Enter Email" className="form-control" ref={register} />
						</Col>
						<Col>
							<Form.Label>Name</Form.Label>
							<input name="name" placeholder="Enter Name" className="form-control" ref={register} />
						</Col>
					</Row>
					<Row className="mt-3">
						<Col>
							<Form.Label>Phone</Form.Label>
							<input name="phone" placeholder="Enter Phone No." className="form-control" ref={register} />
						</Col>
						<Col>
							<Form.Label>Add Photo</Form.Label>
							<input name="image" type="file" onChange={handleImageChange} className="form-control" ref={register} />
						</Col>

					</Row>
					<input type="submit" className="btn btn-primary mt-4 mr-5 float-right" />
				</form>
			</div>
		</section>
	);
};

export default AddDoctor;
