import React from 'react'
import {
	SecureContainer,
	SecureBox,
	SecureBoxContent,
	SecureBoxTitle,
	SecureBoxText,
	SecureBoxIcon
} from './style'

import Container from '../Container'

const SecureInfo = () => {
	return (
		<Container margin={true}>
			<SecureContainer>
				<SecureBox>
					<SecureBoxIcon src="/assets/icons/secure.svg" alt="Site Seguro"/>
					<SecureBoxContent>
						<SecureBoxTitle>Site seguro</SecureBoxTitle>
						<SecureBoxText>compre tranquilo, seus dados estão seguros</SecureBoxText>
					</SecureBoxContent>
				</SecureBox>

				<SecureBox>
					<SecureBoxIcon src="/assets/icons/shipping.svg" alt="Frete" />
					<SecureBoxContent>
						<SecureBoxTitle>Frete grátis</SecureBoxTitle>
						<SecureBoxText>em compras acima de R$ 199 no estado de SP</SecureBoxText>
					</SecureBoxContent>
				</SecureBox>

				<SecureBox>
					<SecureBoxIcon src="/assets/icons/payment.svg" alt="Parcele suas compras" />
					<SecureBoxContent>
						<SecureBoxTitle>Parcele em até 12px</SecureBoxTitle>
						<SecureBoxText>no cartão de crédito</SecureBoxText>
					</SecureBoxContent>
				</SecureBox>

				<SecureBox>
					<SecureBoxIcon src="/assets/icons/exchange.svg" alt="Primeira trocar é gratuita" />
					<SecureBoxContent>
						<SecureBoxTitle>1ª troca gratuita</SecureBoxTitle>
						<SecureBoxText>Não serviu? A primeira troca é por nossa conta</SecureBoxText>
					</SecureBoxContent>
				</SecureBox>

			</SecureContainer>
		</Container>
	)
}

export default SecureInfo
