import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";

import { Container, Product } from "./style";

interface IProduct {
	id: string;
	title: string;
	price: string | number;
	description?: string;
	category?: string;
	image: string;
}

const Cart = () => {
	const [clientCart, setClientCart] = useState<IProduct[]>([]);
	const history = useHistory();

	useEffect(() => {
		const getUserCart = JSON.parse(localStorage.getItem("product"));
		console.log(getUserCart);
		if (getUserCart === null) {
			history.push("/");
		}
		setClientCart(getUserCart);
	}, [history]);

	return (
		<Layout>
			<Container>
				{clientCart.map((product) => (
					<Product key={product.title}>
						<h2>{product.title}</h2>
						<img src={product.image} alt={product.title} />
						<div>{product.price}</div>
					</Product>
				))}
			</Container>
		</Layout>
	);
};
export default Cart;
