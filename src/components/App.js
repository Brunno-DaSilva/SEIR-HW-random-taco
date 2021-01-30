import React, { useState, useEffect } from 'react';
import Header from './Header/Header';

export default function App() {
	const [taco, setTaco] = useState('');

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'http://taco-randomizer.herokuapp.com/random/?full-tack=true'
				);
				const data = await response.json();
				setTaco(data);
				console.table('Line 14', data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<>
			<Header />
			<div className="main_taco-app">
				<h1>Random Taco🌮</h1>
				<div className="taco__container">
					{Object.keys(taco).length ? (
						<div>
							<h1>
								Condiment Name: <span>{taco.condiment.name}</span>
							</h1>
							<p>{taco.condiment.recipe}</p>
						</div>
					) : (
						''
					)}
				</div>
				<div className="taco__container">
					{Object.keys(taco).length ? (
						<div>
							<h1>
								Base Layer Name: <span>{taco.base_layer.name}</span>
							</h1>
							<p>{taco.base_layer.recipe}</p>
						</div>
					) : (
						''
					)}
				</div>
				<div className="taco__container">
					{Object.keys(taco).length ? (
						<div>
							<h1>
								Mixin Name:<span>{taco.mixin.name}</span>
							</h1>
							<p>{taco.mixin.recipe}</p>
						</div>
					) : (
						''
					)}
				</div>
				<div className="taco__container">
					{Object.keys(taco).length ? (
						<div>
							<h1>
								Seasoning Name: <span>{taco.seasoning.name}</span>
							</h1>
							<p>{taco.seasoning.recipe}</p>
						</div>
					) : (
						''
					)}
				</div>
				<div className="taco__container">
					{Object.keys(taco).length ? (
						<div>
							<h1>
								Shell Name: <span>{taco.shell.name}</span>
							</h1>
							<p>{taco.shell.recipe}</p>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
}
