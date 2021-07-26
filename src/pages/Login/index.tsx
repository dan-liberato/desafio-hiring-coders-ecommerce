import React, { useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Form, FormInput, Text } from '../../components/Form'
import { Button } from '../../components/Button'

import { Container, FormArea, About } from './style'

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const history = useHistory()

    const handleClickBack = () => {
        history.push('/')
    }

    const handleLogin = (event: FormEvent) => {
        event.preventDefault()
        const user = JSON.parse(localStorage.getItem('@user'))

        console.log(user)

        if (email === user.email && password === user.password) {
            setEmail('')
            setPassword('')
            handleClickBack()
        }
    }

    return (
        <Container>
            <Button className="back-button" title="Voltar" onClick={handleClickBack}/>

            <FormArea>
                <Form>
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

                    <Text>
                        Não possui conta? {' '}
                        <Link
                            to="/cadastro"
                            className="register"
                        >
                            Crie a sua agora
                        </Link>!
                    </Text>
                </Form>
            </FormArea>

            <About>
                <img src="/Ogma.png" alt="Ogma Store"/>
                <Text>As melhores ofertas você só encontra aqui!!!</Text>
            </About>
        </Container>
    )
}
export default Login

