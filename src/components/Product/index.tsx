import React from 'react'

import { Button } from '../Button'

import {
	ProductBox,
	ProductImage,
	ProductTitle,
	ProductPrice,
} from './style'

type ProductProps = {
	img: string
	title: string
	price?: string | number
	addToCart?: (evet: React.MouseEvent<HTMLButtonElement>) => void
}

const Product = ({ img, title, price, addToCart }: ProductProps) => {
	return (
		<ProductBox marginBottom={'30'}>
			<img
				src="/assets/icons/heart.svg"
				className="icon_size favorite"
				alt="Adicionar aos favoritos"
			/>

			<ProductImage src={img} />
			<ProductTitle>{title}</ProductTitle>
			<ProductPrice>{price}</ProductPrice>
			<Button className="add__to__cart" onClick={addToCart} title="Adicionar a cesta" />
		</ProductBox>

	)
}

export default Product
