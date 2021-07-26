import React, { ReactNode } from 'react'
import { ContainerFluid } from './style'

interface ContainerProps {
	children?: ReactNode
	background?: string
	margin?: boolean
}

const Container = ({ children, background, margin }: ContainerProps) => {
	return (
		<ContainerFluid background={background} margin={margin}>
			{children}
		</ContainerFluid>
	)
}

export default Container
