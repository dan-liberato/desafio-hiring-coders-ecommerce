import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import useWindowSize from "../../hooks/useWindowSize";

import {
	Logo,
	HeaderContainer,
	SidebarMenu,
	SidebarMenuList,
	SidebarMenuListItem,
	TopBar,
	BurgerButton,
	TopBarWhatsapp,
	TopBarMenu,
	TopBarMenuList,
	TopBarMenuListItem,
	Brand,
	BrandLogo,
	BrandSearchBox,
	BrandRight,
	Input,
	Button,
	Categories,
	CategoriesList,
	CategoriesItem,
	NavMobile,
	NavList,
	NavListItem,
	Account,
} from "./style";

type HeaderProps = {
	cartItems: number;
};

const Header = ({ cartItems }: HeaderProps) => {
	const size = useWindowSize();
	const [openMenu, setOpenMenu] = useState(false);

	const handleOpenMenu = () => {
		setOpenMenu(true);
	};

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	return (
		<>
			<HeaderContainer size={size.width}>
				{size.width <= 1024 ? (
					<SidebarMenu>
						<BurgerButton onClick={handleOpenMenu}>
							<span></span>
							<span></span>
							<span></span>
						</BurgerButton>

						<SidebarMenuList>
							<SidebarMenuListItem>
								<Link
									to="/cesta-de-compras"
									className="basket__itens"
								>
									<img
										src="/assets/icons/basket.svg"
										alt="Cesta"
										className="icon_size basket__icon"
									/>
									<span>0</span>
								</Link>
							</SidebarMenuListItem>
						</SidebarMenuList>

						<NavMobile open={openMenu}>
							<NavList>
								<NavListItem>
									<Account>
										<Button onClick={handleCloseMenu}>
											x
										</Button>

										<Link to="/login">
											<FiUser size="30" />
											Minha Conta
										</Link>
									</Account>
								</NavListItem>

								<NavListItem>
									<BrandSearchBox>
										<Input
											type="text"
											name="search"
											placeholder="O que você procura?"
										/>

										<Button>
											<img
												src="/assets/icons/search-outline.svg"
												alt="Search"
												className="icon_size"
											/>
										</Button>
									</BrandSearchBox>
								</NavListItem>

								<NavListItem>
									<Link to="/acessorios">Acessórios</Link>
								</NavListItem>

								<NavListItem>
									<Link to="/bags">Bags</Link>
								</NavListItem>

								<NavListItem>
									<Link to="/roupas">Roupas</Link>
								</NavListItem>

								<NavListItem>
									<Link to="/bones">Bonés</Link>
								</NavListItem>

								<NavListItem>
									<Link to="/oculos">Óculos</Link>
								</NavListItem>
							</NavList>
						</NavMobile>
					</SidebarMenu>
				) : (
					<>
						<TopBar>
							<TopBarWhatsapp>
								<img
									src="/assets/icons/whatsapp.svg"
									alt="Whatsapp"
									className="icon_size"
								/>
								<span>014 9 9630-7989</span>
							</TopBarWhatsapp>

							<TopBarMenu>
								<TopBarMenuList>
									<TopBarMenuListItem>
										<Link to="#">Atendimento</Link>
									</TopBarMenuListItem>

									<TopBarMenuListItem>
										<Link to="#">Ajuda</Link>
									</TopBarMenuListItem>

									<TopBarMenuListItem>
										<Link to="/cart">Meus Pedidos</Link>
									</TopBarMenuListItem>
								</TopBarMenuList>
							</TopBarMenu>
						</TopBar>

						<Brand>
							<BrandLogo>
								<Logo src="/Ogma.png" alt="Ogma Store" />
							</BrandLogo>

							<BrandSearchBox>
								<Input
									type="text"
									name="search"
									placeholder="O que você procura hoje?"
								/>
								<Button type="submit">
									<img
										src="/assets/icons/search-outline.svg"
										alt="Buscar"
										className="icon_size"
									/>
								</Button>
							</BrandSearchBox>

							<BrandRight>
								<Link to="/entrar">
									Entrar
									<img
										src="/assets/icons/signin.svg"
										alt="Entrar"
										className="icon_size"
									/>
								</Link>

								<Link to="/favoritos">
									<img
										src="/assets/icons/heart.svg"
										alt="Favoritos"
										className="icon_size"
									/>
								</Link>

								<Link to="/cart" className="basket__itens">
									<img
										src="/assets/icons/basket-dark.svg"
										alt="Cesta"
										className="icon_size basket__icon"
									/>
									<span>{cartItems}</span>
								</Link>
							</BrandRight>
						</Brand>

						<Categories>
							<CategoriesList>
								<CategoriesItem>
									<Link to="/">
										<img
											src="/assets/icons/home.svg"
											alt="Home"
										/>
									</Link>
								</CategoriesItem>

								<CategoriesItem>
									<Link to="#">Games</Link>
								</CategoriesItem>

								<CategoriesItem>
									<Link to="#">Computadores</Link>
								</CategoriesItem>

								<CategoriesItem>
									<Link to="#">Smartphones</Link>
								</CategoriesItem>

								<CategoriesItem>
									<Link to="#">Headphones</Link>
								</CategoriesItem>
							</CategoriesList>
						</Categories>
					</>
				)}
			</HeaderContainer>
		</>
	);
};

export default Header;
