import styled from 'styled-components'

export const OffersArea = styled.div`
	width: 90%;
	margin: auto;
	padding: 50px 0;

	div h2 {
		color: #ffffff;
	}
`

export const OffersContent = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;

	@media (min-width: 548px) {
		grid-template-columns: 1fr 1fr;
	}
`

export const OffersBox = styled.div``
