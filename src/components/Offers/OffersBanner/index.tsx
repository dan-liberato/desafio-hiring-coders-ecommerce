import React from 'react'

import {
	BannerBox,
	BannerImage,
	BannerTitle,
	BannerPrice
} from './style'

type OffersBannerProps = {
	img: string
	title: string
	price?: string | number
}

const OffersBanner = ({ img, title, price}: OffersBannerProps) => {
	return (
		<BannerBox marginBottom={'30'}>

			<BannerImage src={img} />
			<BannerTitle>{title}</BannerTitle>
			<BannerPrice>{price}</BannerPrice>

		</BannerBox>

	)
}

export default OffersBanner
