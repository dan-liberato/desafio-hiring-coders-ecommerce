import React from "react";
import { Link } from "react-router-dom";
import {
	FiHome,
	FiBox,
	FiUser,
	FiDollarSign,
	FiChevronRight,
} from "react-icons/fi";

import { Nav, MenuList, MenuItem } from "./style";

const AdminMenu = () => {
	return (
		<Nav>
			<MenuList>
				<MenuItem>
					<Link to="/dashboard/admin/">
						<FiHome size={24} color="#fff" /> {""}
						Início
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to="#">
						<FiDollarSign size={24} color="#fff" /> {""}
						Vendas
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/dashboard/products">
						<FiBox size={24} color="#fff" /> {""}
						Produtos
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/dashboard/clients">
						<FiUser size={24} color="#fff" /> {""}
						Clientes
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/">
						<FiChevronRight size={24} color="#fff" /> {""}
						Loja
					</Link>
				</MenuItem>
			</MenuList>
		</Nav>
	);
};
export default AdminMenu;
