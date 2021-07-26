import styled from 'styled-components'

export const CarouselArea = styled.div`
	margin: 0 auto;
    padding: 0 11px;
	width: 100%;

	.rec.rec-slider-container {
		margin: 0;
	}

	.rec.rec-arrow {
		background-color: transparent;
		border: none;
		box-shadow: none;
		color: #3a3a3a;
		width: 20px;
    	min-width: 0;
	}

	.rec.rec-arrow:hover {
		color: #000;
	}

	.rec.rec-carousel-item div {
		padding: 0 10px;
	}

	.rec.rec-carousel-item img {
			margin-right: 10px;
	}

	.rec.rec-carousel-item img + img {
		max-width: 100%;
	}
`

export const SectionTitle = styled.div<{ color: string }>`
	text-align: center;
	margin: 0 2.5rem;
	margin-bottom: 50px;
	position: relative;

	h2 {
		font-family: 'Barlow Condensed', sans-serif;
		font-weight: bold;
		font-size: 2.375rem;
		text-transform: uppercase;
		color: ${props => props.color}
	}

	::before,
	::after {
		content: '';
		height: 2px;
		width: 20%;
		background: #C4C4C4;
		position: absolute;
		bottom: 5px;
	}

	::before {
		left: 0;
	}
	::after {
		right: 0;
	}

	@media (min-width: 548px) {
		::before,
		::after {
			width: 26%;
		}
	}

	@media (min-width: 768px) {
		::before,
		::after {
			width: 30%;
		}
	}

	@media (min-width: 1024px) {
		::before,
		::after {
			width: 35%;
		}
	}

	@media (min-width: 1280px) {
		::before,
		::after {
			width: 40%;
		}
	}
`


// export const CarouselProducts: ReactNode = styled(Carousel)`

// 	/* .rec.rec-swipable {
// 		display: flex;
// 		flex-flow: row;
// 		justify-content: space-between;
// 		align-items: center;
// 	}*/

// 	.rec.rec-carousel-item div {
// 		padding: 0 10px;
// 	}

// 	.rec.rec-carousel-item img {
// 		margin-right: 10px;
// 	}

// 	.rec.rec-carousel-item img + img {
// 		max-width: 100%;
// 	}
// `

export const CarouselItem = styled.div`
	padding: 0 10px;
	position: relative;

	img {
		height: 300px;
		object-fit: contain;
		border-radius: 0.3rem;
	}

	h2 {
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 1rem;
		font-weight: normal;
	}

	strong {
		font-weight: bold;
	}
`

export const Products = styled.div``
