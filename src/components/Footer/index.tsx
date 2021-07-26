import React from 'react'

import Container from '../Container'
import Grid from '../Grid'

import {
	FooterArea,
	FooterBox
} from './style'

const Footer = () => {
	return (
		<Container margin={true}>
			<FooterArea>
				<Grid>
					<FooterBox>
						<h2>Institucional</h2>

						<ul>
							<li>Sobre a loja</li>
							<li>Como comprar</li>
							<li>Seguranca</li>
							<li>Frete e Prazo de Entrega</li>
							<li>Atacado e Revenda</li>
							<li>Trocas e Devoluções</li>
							<li>Depoimentos de </li>
							<li>Frete Grátis</li>
							<li>Lista Exclusiva</li>
							<li>Contato</li>
							<li></li>
						</ul>

					</FooterBox>

					<FooterBox>
						<h2>Atendimento</h2>
					</FooterBox>

					<FooterBox>
						<h2>Minha Conta</h2>
					</FooterBox>

					<FooterBox>
						<h2>Forma de Pagamento</h2>
					</FooterBox>
				</Grid>
			</FooterArea>
		</Container>
	)
}

export default Footer
