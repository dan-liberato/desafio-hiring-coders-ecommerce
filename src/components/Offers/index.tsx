import React, { ReactNode } from 'react'
import Container from '../Container'
import OffersBanner from './OffersBanner'

import {
	OffersArea,
	OffersContent,
	OffersBox
} from './style'

type OffersChildren = {
	children: ReactNode
}

const Offers = ({ children }: OffersChildren) => {
	return (
		<Container background="#000" margin={true}>

			<OffersArea>
				{children}

				<OffersContent>
					<OffersBox>
						<OffersBanner
							title=""
							img="/assets/media/pc.webp"
						/>

						<OffersBanner
							title=""
							img="/assets/media/ps5.jpg"
						/>

					</OffersBox>

					<OffersBox>
						<OffersBanner
							title=""
							img="/assets/media/smartphones.png"
						/>

						<OffersBanner
							title=""
							img="/assets/media/pc-2.webp"
						/>
					</OffersBox>

				</OffersContent>
			</OffersArea>

		</Container>
	)
}

export default Offers
