import React, { ReactNode } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import { Container, Main } from './style'

interface LayoutProps {
	children: ReactNode,
	cartItems?: number
}

const Layout = ({ children, cartItems }: LayoutProps) => {
	return (
		<Container>
			<Header cartItems={cartItems}/>
				<Main>
					{children}
				</Main>
			<Footer />
		</Container>
	)
}

export default Layout
