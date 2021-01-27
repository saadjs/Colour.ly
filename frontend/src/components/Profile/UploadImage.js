import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

function UploadImage(props) {
	const fileRef = useRef(null);

	const uploadImg = async (e) => {
		e.preventDefault();
		const file = new FormData();
		file.append("file", fileRef.current.files[0]);
		const res = await axios.post(`/api/users/${1}/upload`, file, {
			headers: {
				"content-type": "multipart/form-data",
			},
		});
	};

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
				<form method="post" onSubmit={uploadImg}>
					<p>Choose a file to upload it to AWS S3</p>
					<input type="file" name="file" ref={fileRef} />
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
