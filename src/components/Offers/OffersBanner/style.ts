import styled from 'styled-components'

export const BannerBox = styled.div<{ marginBottom: string }>`
	margin-bottom: ${props => props.marginBottom}px;

	img:last-of-type {
		object-position: right;
	}
`

export const BannerImage = styled.img`
	width: 100%;
	height: 190px;
	object-fit: cover;

	@media (min-width: 548px) {
		height: 200px;
	}

	@media (min-width: 768px) {
		height: 230px;
	}

	@media (min-width: 1024px) {
		height: 300px;
	}
`

export const BannerTitle = styled.h2`
	margin-top: 10px;
	font-size: 1.325rem;
	font-weight: 500;
`

export const BannerPrice = styled.span``
