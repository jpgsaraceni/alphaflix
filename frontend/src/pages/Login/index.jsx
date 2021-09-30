import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { LoginSchema } from '../../services/validationSchemas';
import api from '../../services/api';

import { Container } from './styles';
import Input from '../../components/Input';
import logo from '../../assets/images/logo.svg';
// import { navigateToHome } from '../../services/navigate';

const login = (values) => {
    api.post('http://localhost:8080/login', { username: values.username, password: values.password })
        .then((response) => {
            if(response.status === 200) {
                localStorage.setItem('token', response.data);

                console.log('logged in');
            } else console.log('not ok');
        })
}

export default function Login() {
    return (
        <Container>
            <figure className="logo-container"><img src={logo} alt="Alpha EdTech logo" /></figure>
            <div className="login-container">
                <h1>Olá!</h1>
                <p>Você está no AlphaFlix, o melhor serviço inexistente de streaming do mundo.</p>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={values => login(values)}
                >
                    <Form>      
                        <Field as={Input} id="username" name="username" placeholder="Usuário" />
                        <ErrorMessage className="error-message" name="username" component="div" />

                        <Field as={Input} id="password" name="password" type="password" placeholder="Senha"  />
                        <ErrorMessage className="error-message" name="password" component="div" />

                        <button type="submit">Entrar</button>
                        <button>Criar conta</button>
                    </Form>
                </Formik>
            </div>
        </Container>
    );
}