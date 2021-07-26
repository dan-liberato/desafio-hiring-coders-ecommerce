import React, { useEffect, useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import { data } from "../../../services/data";

import AdminMenu from "../../../components/AdminMenu";
import { Form, FormInput } from "../../../components/Form";
import { Button } from "../../../components/Button";

import { Container, FormContainer } from "./style";

interface IProduct {
	id: number;
	title: string;
	price: string | number;
	description?: string;
	category?: string;
	image: string;
}

const CreateProduct = () => {
	const [title, setTitle] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [image, setImage] = useState<string>("");
	const [products, setProducts] = useState<IProduct[]>([]);
	// const [message, setMessage] = useState<string>("");

	const history = useHistory();

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		const allProducts = [];
		const newProduct = {
			title,
			price,
			image,
		};
		allProducts.push(...products, newProduct);
		localStorage.setItem("allProducts", JSON.stringify(allProducts));
		setTitle("");
		setPrice("");
		setImage("");
		history.push("/dashboard/products");
	};

	useEffect(() => {
		const allProducts = JSON.parse(localStorage.getItem("allProducts"));
		allProducts === null ? setProducts(data) : setProducts(allProducts);
	}, []);

	return (
		<Container>
			<AdminMenu />

			<FormContainer>
				<Form>
					<FormInput
						name="product"
						type="text"
						placeholder="Produto"
						required
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>

					<FormInput
						name="price"
						type="text"
						placeholder="Valor, exemplo R$ 99,90"
						required
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>

					<FormInput
						name="image"
						type="text"
						placeholder="Url da imagem"
						required
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>

					<Button onClick={handleSubmit}>Salvar</Button>
				</Form>
			</FormContainer>
		</Container>
	);
};
export default CreateProduct;
