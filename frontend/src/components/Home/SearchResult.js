import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function SearchResult({ showModal, setShowModal, searchResults }) {
	return (
		<>
			<Modal
				size="lg"
				show={showModal}
				animation={false}
				onHide={() => setShowModal(false)}
				aria-labelledby="example-modal-sizes-title-lg"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-lg">
						<h3
							style={{
								fontFamily: "monospace",
								color: "gray",
								padding: "1rem",
							}}
						>
							Search Results...
						</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div style={{ padding: "1rem" }}>
						<div
							style={{
								fontFamily: "monospace",
								color: "#156C40",
								borderBottom: "2px solid black",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<h3 style={{ color: "#156C40" }}>Palettes</h3>
							<h3 style={{ color: "#156C40" }}>
								{searchResults.palettes.length}
							</h3>
						</div>
						{searchResults.palettes.length > 0 ? (
							searchResults.palettes.map((palette) => (
								<Link
									to={`/palettes/${palette.paletteId}`}
									key={palette.paletteId}
								>
									<h2>{palette.paletteTitle}</h2>
								</Link>
							))
						) : (
							<p>No Palettes Found</p>
						)}
					</div>
					<div style={{ padding: "1rem" }}>
						<div
							style={{
								fontFamily: "monospace",
								color: "#156C40",
								borderBottom: "2px solid black",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<h3 style={{ color: "#156C40" }}>Users</h3>
							<h3 style={{ color: "#156C40" }}>
								{searchResults.users.length}
							</h3>
						</div>
						{searchResults.users.length > 0 ? (
							searchResults.users.map((user) => (
								<Link to={`/users/${user.id}`} key={user.id}>
									<h2>{user.username}</h2>
								</Link>
							))
						) : (
							<p>No users found</p>
						)}
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default SearchResult;
