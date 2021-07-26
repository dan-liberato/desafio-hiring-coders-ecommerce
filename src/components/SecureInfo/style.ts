import styled from 'styled-components'

export const SecureContainer = styled.div`
	margin: auto;
	/* padding: 12px 5px; */
	background: #F1F1F1;
	border-radius: 0.3rem;
	/* width: 78%; */

	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;

	/* @media (min-width: 35rem) {
		grid-template-columns: repeat(2, 1fr);
	} */

	@media (min-width: 33.625rem) {
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		width: 94.6%;
	}

	@media (min-width: 60rem) {
		max-width: 1269px;
		padding: 40px;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
	}
`

export const SecureBox = styled.div`
	max-width: 275px;
	display: flex;
	flex-flow: row;
	justify-content: flex-start;
	align-items: center;
	/* margin: 0.875rem 1.25rem; */
	padding: 10px;
`

export const SecureBoxContent = styled.div``

export const SecureBoxTitle = styled.h4`
	font-size: 1rem;
	font-weight: 600;
	margin-bottom: 10px;
`

export const SecureBoxText = styled.p`
	color: #767676;
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 0.875rem;
	font-weight: 400;
`

export const SecureBoxIcon = styled.img`
	height: 39px;
	margin-right: 0.625rem;


	/* @media (min-width: 60rem) {
		height: 39px;
	} */

	@media (min-width: 80rem) {
		height: 44px;
		/* height: 69px; */
	}
`
