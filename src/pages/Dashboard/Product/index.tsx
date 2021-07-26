import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";

import AdminMenu from "../../../components/AdminMenu";
import { Button } from "../../../components/Button";

import { Container, TableContainer } from "./styles";

interface IProduct {
	id: string;
	title: string;
	price: string | number;
	description?: string;
	category?: string;
	image: string;
}

const Products = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		const productList = localStorage.getItem("allProducts");
		setProducts(JSON.parse(productList));
	}, []);

	return (
		<Container>
			<AdminMenu />

			<TableContainer>
				<Link to="/dashboard/create-product">
					<Button className="create-button" title="Adicionar produto">
						<FiPlusSquare size={24} color="#fff" />
						<i>Adicionar Produto</i>
					</Button>
				</Link>

				<table>
					<thead>
						<tr>
							<th>Produto</th>
							<th>Preço</th>
						</tr>
					</thead>

					<tbody>
						{products.map((product) => (
							<tr key={product.title}>
								<td>{product.title}</td>
								<td>{product.price}</td>
							</tr>
						))}
					</tbody>
				</table>
			</TableContainer>
		</Container>
	);
};
export default Products;
