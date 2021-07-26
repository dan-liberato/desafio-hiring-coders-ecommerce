import styled from 'styled-components'

export const ProductBox = styled.div<{ marginBottom: string }>`
	margin-bottom: ${props => props.marginBottom}px;
	position: relative;

	.add__to__cart {
		width: 38px;
		height: 38px;
		padding: 10px;
		position: absolute;
		left: 10px;
		top: 0;

		background: url('/assets/icons/basket-dark.svg') no-repeat;
		background-size: 25px;
		background-position: center;

		&:hover {
			background: #11d652;
			background-image: url('/assets/icons/basket.svg');
			background-repeat: no-repeat;
			background-size: 25px;
   			background-position: center;
		}
	}
`

export const ProductImage = styled.img`
	width: 100%;
	height: 300px;
	object-fit: contain;
	border-radius: 0.3rem;


	/* @media (min-width: 440px) {
		height: 264px;
	}

	@media (min-width: 620px) {
		height: 290px;
	} */

	/* @media (min-width: 768px) {
		height: 230px;
	} */

	/* @media (min-width: 1024px) {
		height: 300px;
	} */
`

export const ProductTitle = styled.h2`
	margin: 10px 0 5px;
	font-size: 1.325rem;
	font-weight: 500;
`

export const ProductPrice = styled.span`
	font-weight: bold;
`