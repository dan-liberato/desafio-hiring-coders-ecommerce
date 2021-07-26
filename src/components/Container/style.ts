import styled from 'styled-components'


type Container = {
	background?: string
	margin?: boolean
}

export const ContainerFluid = styled.div<Container>`
	background: ${props => props.background ? props.background : 'transparent'};
	display: flex;
	margin-top: ${props => props.margin ? '100px' : '0'};
`