import React, { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

function UploadImage({ showUpload, userId, setShowUpload, setPageReload }) {
	const fileRef = useRef(null);
	const [err, setErr] = useState([]);

	const uploadImg = async (e) => {
		e.preventDefault();
		try {
			const file = new FormData();
			file.append("file", fileRef.current.files[0]);
			await axios.post(`/api/users/${userId}/upload`, file, {
				headers: {
					"content-type": "multipart/form-data",
				},
			});
			setPageReload(false);
			setShowUpload(false);
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
		<div>
			<Modal
				size="lg"
				show={showUpload}
				animation={false}
				onHide={() => setShowUpload(false)}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Upload Profile Picture
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form method="post" onSubmit={uploadImg}>
						<span>Supported Formats: png, jpg, jpeg, gif </span>
						<hr />
						<input type="file" name="file" ref={fileRef} />
						<hr />
						<input type="submit" name="upload" />
					</form>
					{err && err.map((e) => <h1 key={e}>{e}</h1>)}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setShowUpload(false)}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default UploadImage;
