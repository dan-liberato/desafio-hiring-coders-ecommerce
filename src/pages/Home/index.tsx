import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import Featured from "../../components/Featured";
import SecureSite from "../../components/SecureInfo";
import Offers from "../../components/Offers";
import Product from "../../components/Product";

import { SectionTitle, CarouselArea, Products } from "../../styles/style";

interface IProduct {
	id: string;
	title: string;
	price: string | number;
	description?: string;
	category?: string;
	image: string;
}

const Home = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 500, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	];
	const [products, setProducts] = useState<IProduct[]>([]);
	const [gridProducts, setGridProducts] = useState<IProduct[]>([]);
	const [cart, setCart] = useState<IProduct[]>([]);
	const productsOnCart: any = localStorage.getItem("product");

	const handleAddToCart = (index: number) => {
		let cartItems: any = [...cart, cart.push(products[index])];
		setCart(cartItems);

		const listProductsCart = [];
		const listProducts = JSON.parse(productsOnCart);

		console.log(productsOnCart);

		productsOnCart === null
			? listProductsCart.push(products[index] || gridProducts[index])
			: listProductsCart.push(
					products[index] || gridProducts[index],
					...listProducts
			  );

		localStorage.setItem(`cart`, JSON.stringify(cartItems));
		localStorage.setItem(`product`, JSON.stringify(listProductsCart));
	};

	// useEffect(() => {
	// 	api.get('products/category/electronics/').then(res => setProducts(res.data))
	// 	api.get('products').then(res => setGridProducts(res.data))
	// }, [])

	useEffect(() => {
		const productList = JSON.parse(localStorage.getItem("allProducts"));
		setProducts(productList);
		setGridProducts(productList);
	}, []);

	return (
		<Layout cartItems={cart.length}>
			<Featured />

			<SecureSite />

			<Container margin={true}>
				<CarouselArea>
					<SectionTitle color="#000000">
						<h2>Destaque</h2>
					</SectionTitle>

					<Carousel
						isRTL={false}
						pagination={false}
						breakPoints={breakPoints}
					>
						{products.map((product, index) => (
							<>
								<Product
									key={String(index + 1)}
									img={product.image}
									title={product.title}
									price={product.price.toLocaleString(
										"pt-br",
										{ style: "currency", currency: "BRL" }
									)}
									addToCart={() => handleAddToCart(index)}
								/>
							</>
						))}
					</Carousel>
				</CarouselArea>
			</Container>

			<Offers>
				<SectionTitle color="#FFFFFF">
					<h2>Ofertas</h2>
				</SectionTitle>
			</Offers>

			<Container margin={true}>
				<Products>
					<SectionTitle color="#000000">
						<h2>Destaque</h2>
					</SectionTitle>

					<Grid>
						{gridProducts.map((product, index) => (
							<Product
								key={String(index + 1)}
								img={product.image}
								title={product.title}
								price={product.price.toLocaleString("pt-br", {
									style: "currency",
									currency: "BRL",
								})}
								addToCart={() => handleAddToCart(index)}
							/>
						))}
						{/* <Product
							title="Camiseta preta"
							img="/assets/media/offers1.png"
							price="39,00"
						/> */}
					</Grid>
				</Products>
			</Container>
		</Layout>
	);
};

export default Home;
