import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import { Form, FormInput, Text } from '../../../components/Form'
import { Button } from '../../../components/Button'

import { Container, FormArea, About } from '../../Login/style'

const Dashboard = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const history = useHistory()

    const handleClickBack = () => {
        history.push('/')
    }

    const handleLogin = (event: FormEvent) => {
        event.preventDefault()

        if (email === 'admin@demo.com' && password === '@12345') {
            setEmail('')
            setPassword('')
            history.push('/dashboard/admin')
        }
    }

    return (
        <Container>
            <Button className="back-button" title="Voltar" onClick={handleClickBack}/>

            <FormArea>
                <Form>
                    <Text>
                        E-mail: admin@demo.com
                        Senha: @12345
                        <br />
                    </Text>
                    <FormInput
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <FormInput
                        name="password"
                        type="password"
                        placeholder="Senha"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button onClick={handleLogin}>Entrar</Button>
                </Form>
            </FormArea>

            <About>
                <img src="/Ogma.png" alt="Ogma Store"/>
                <Text>A melhor plataforma de e-commerce, tem tudo o que você precisa!</Text>
            </About>
        </Container>
    )
}
export default Dashboard

