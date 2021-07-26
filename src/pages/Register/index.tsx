import React, { useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Form, FormInput, Text } from '../../components/Form'
import { Button } from '../../components/Button'

import { Container, FormArea, About } from '../Login/style'

const Register = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [birthday, setBirthday] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [whatsapp, setWhatsapp] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const history = useHistory();

    const handleClickBack = () => {
        history.push('/entrar')
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        const data = {
            email,
            password,
            name,
            birthday,
            gender,
            whatsapp
        }
        localStorage.setItem('@user', JSON.stringify(data))
        setEmail('')
        setPassword('')
        setName('')
        setBirthday('')
        setGender('')
        setWhatsapp('')
        setMessage('Cadastro efetuado com sucesso')
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
                        onChange={ e => setEmail(e.target.value) }
                    />

                    <FormInput
                        name="password"
                        type="password"
                        placeholder="Senha"
                        required
                        value={password}
                        onChange={ e => setPassword(e.target.value) }
                    />

                    <FormInput
                        name="name"
                        type="text"
                        placeholder="Nome Completo"
                        required
                        value={name}
                        onChange={ e => setName(e.target.value) }
                    />

                    <FormInput
                        name="birthday"
                        type="text"
                        placeholder="Data de Aniversário"
                        required
                        value={birthday}
                        onChange={ e => setBirthday(e.target.value) }
                    />

                    <FormInput
                        name="gender"
                        type="text"
                        placeholder="Qual o seu gênero?"
                        required
                        value={gender}
                        onChange={ e => setGender(e.target.value) }
                    />

                    <FormInput
                        name="whatsapp"
                        type="phone"
                        placeholder="Qual o seu gênero?"
                        required
                        value={whatsapp}
                        onChange={ e => setWhatsapp(e.target.value) }
                    />

                    <Text>
                        {message !== '' && (
                            <>
                                {message} {''}
                                <Link to="/entrar" className="register">
                                    Entrar
                                </Link>
                            </>
                        )}
                    </Text>

                    <Button
                        onClick={handleSubmit}
                    >
                        Criar seu cadastro
                    </Button>

                    <Text>
                        Já possui conta ? { ' '}
                        <Link to="/entrar" className="register">
                            Entrar
                        </Link>!
                    </Text>

                    <br/>

                    <Text>
                        Ao continuar com o acesso, você concorda com a nossa Política de Privacidade
                    </Text>
                </Form>
            </FormArea>

             <About>
                <img src="/Ogma.png" alt = "Ogma Store" />
                <Text>As melhores ofertas você só encontra aqui!!! </Text>
            </About>
        </Container>
    )
}
export default Register
