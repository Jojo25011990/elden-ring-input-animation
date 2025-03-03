import React from "react";
import { useState, useEffect } from "react";
import maleniaImg from "./assets/img/malenia.jpg";

const App = () => {
	const [name, setName] = useState("");
	const [isActive, setIstActive] = useState(false);

	const handleWrite = (e) => {
		setName(e.target.value);
	};

	useEffect(() => {
		const delay = 2050;

		const timeout = setTimeout(() => {
			setIstActive(true);
		}, delay);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="wrapper">
			<input
				type="text"
				placeholder="Write Name... "
				className={`wrapper__input ${isActive ? "active" : ""}`}
				onChange={handleWrite}
			/>
			<div className="container">
				<h1 className="container__heading">{name}</h1>
				<img
					className="container__img"
					src={maleniaImg}
					alt="Elden Ring Boss"
				/>
			</div>
		</div>
	);
};

export default App;
