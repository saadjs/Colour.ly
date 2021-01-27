import React, { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

function UploadImage(props) {
	const fileRef = useRef(null);
	const [err, setErr] = useState([]);

	const uploadImg = async (e) => {
		e.preventDefault();
		try {
			const file = new FormData();
			file.append("file", fileRef.current.files[0]);
			const res = await axios.post(
				`/api/users/${props.userid}/upload`,
				file,
				{
					headers: {
						"content-type": "multipart/form-data",
					},
				}
			);
			const data = res.data;
		} catch (err) {
			if (err.response) {
				setErr(err.response.data.errors);
				if (err.response.status === 413) {
					setErr(["Image too large! Must be smaller than 1MB"]);
				}
			}
		}
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
				{err && err.map((e) => <h1 key={e}>{e}</h1>)}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default UploadImage;
