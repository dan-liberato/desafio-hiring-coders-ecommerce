import React from 'react'
import styled from 'styled-components'

export const GridArea = styled.div`
	width: 90%;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (min-width: 440px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

const Grid = ({ children }) => {
	return (
		<GridArea>
			{children}
		</GridArea>
	)
}

export default Grid
