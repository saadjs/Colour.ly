import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function UploadImage(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			animation={false}
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Modal heading
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form
					action="/api/users/{{id}}/upload"
					method="post"
					encType="multipart/form-data"
				>
					<p>Choose a file to upload it to AWS S3</p>
					<input type="file" name="file" />
					<hr />
					<input type="submit" name="upload" />
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default UploadImage;
