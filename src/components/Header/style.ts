import styled from 'styled-components'

export const Logo = styled.img`
	width: 100%;
`

export const HeaderContainer = styled.div<{ size: string | number }>`
	background: ${props => (props.size <= 1024 ? '#292929' : 'none')};
	width: 100%;
`

export const SidebarMenu = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
	align-content: center;

	font-size: 1rem;
	margin: 0 auto;
	padding: 10px 40px;
`

export const SidebarMenuList = styled.ul`
	display: flex;
	flex-flow: row;

	list-style-type: none;
`

export const SidebarMenuListItem = styled.li`
	color: #ffffff;
	margin: 0 20px;

	:last-child {
		margin: 0;
	}
`

export const NavMobile = styled.div<{ open: boolean }>`
    background-color: #fff;
	position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 305px;
	max-width: 90%;

    z-index: 16;
	-webkit-transition: ease-in-out .3s;
    -o-transition: ease-in-out .3s;
	transition: ease-in-out .3s;

	opacity: ${props => props.open ? '9' : '0'};

	-webkit-transform: ${props => props.open === true ? 'translateX(0)' : 'translateX(-100%)'};
    -ms-transform: ${props => props.open === true ? 'translateX(0)' : 'translateX(-100%)'};
    transform: ${props => props.open === true ? 'translateX(0)' : 'translateX(-100%)'};
`

export const NavList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-flow: column;

	padding: 20px;

	li:first-child {
		border: none;
		padding: 30px;
		margin-bottom: 11px;
		background: #292929;
		color: #FFF;
		border-radius: 0.3rem;
	}

	li:nth-child(2) {
		border: none;
	}

	li:nth-child(3) {
		border-top: none;

		a {
			display: flex;
			align-items: center;

			img {
				width: 20px;
				margin-right: 5px;
			}
		}
	}
`

export const NavListItem = styled.li`
	padding: 10px 0;

	border-top: 0.1rem solid #DEDEDE;
	border-bottom: 0.1rem solid #DEDEDE;
`

export const Account = styled.div`
	position: relative;

	button {
		position: absolute;
		top: -18px;
		right: -45px;
		background: transparent;
	}

	a {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
	}

	svg {
		margin-right: 5px;
	}

	span {
		display: block;
	}
`

export const BurgerButton = styled.button`
	background-color: transparent;
	margin-top: 3px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	span {
		display: block;
		width: 20px;
		height: 2px;
		margin-bottom: 4px;
		background-color: #ffffff;
	}
`

export const TopBar = styled.div`
	/* width: 1280px;
	max-width: 1679px; */
	background-color: #292929;

	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
	align-content: center;

	font-size: 1rem;
	margin: 0 auto;
	padding: 10px 40px;

	/* background: #000; */
`

export const TopBarWhatsapp = styled.div`
	display: flex;
	align-items: center;

	span {
		margin-left: 30px;
		color: #FFFFFF;
	}
`

export const TopBarMenu = styled.nav``

export const TopBarMenuList = styled.ul`
	display: flex;
	flex-flow: row;

	list-style-type: none;
	text-transform: uppercase;
`

export const TopBarMenuListItem = styled.li`
	color: #ffffff;
	margin: 0 20px;

	/* :last-child {
		margin: 0;
	} */

	a {
		&:hover {
			color: #31F674;
			text-decoration: none;
		}
	}
`

export const Brand = styled.div`
	background-color: #ffffff;

	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
/*
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px; */

	padding: 50px 40px;
`

export const BrandLogo = styled.div``

export const BrandSearchBox = styled.div`
	background-color: #F2F2F2;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;

	width: 100%;
	max-width: 480px;
	display: flex;
	height: 40px;
	margin: 0 10px;
`

export const Input = styled.input`
	border: none;
	background: transparent;
	padding: 10px;
	max-width: 700px;
	width: 100%;
`

export const Button = styled.button`
	border: none;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background: #292929;

	width: 65px;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: #11d652;
	}
`

export const BrandRight = styled.div`
	display: flex;
	align-items: center;

	a {
		margin: 0 20px;
	}

	a:first-child {
		display: flex;
		align-items: center;
		img {
			margin-left: 20px;
		}
	}

	a:last-child {
		display: flex;
		align-items: center;

		span {
			position: relative;
			top: 0;
			color: red;
		}
	}
`

export const Categories = styled.div`
	padding: 0 40px;

	height: 60px;
	display: flex;
	flex-flow: row;
	justify-content: flex-start;

	border-top: 1px solid #DEDEDE;
	border-bottom: 1px solid #DEDEDE;
`

export const CategoriesList = styled.ul`
	padding: 0;
	list-style-type: none;
	display: flex;
	align-items: center;
`

export const CategoriesItem = styled.li`
	margin: 0 20px;

	/* a {
		img {
			margin-top: 1px;
		}
	} */

	a:hover {
		text-decoration: underline;
	}
`


