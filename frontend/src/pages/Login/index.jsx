import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Container } from './styles';

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Informe seu usuário!'),
    password: Yup.string()
        .required('Informe sua senha!'),
});

export default function Login() {
    return (
        <Container>
            <h1>Olá!</h1>
            <p>Você está no AlphaFlix, o melhor serviço inexistente de streaming do mundo.</p>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={values => console.log(values)}
            >
                <Form>      
                    {/* <label htmlFor="username">Usuário:</label> */}
                    <Field id="username" name="username" placeholder="Usuário" />
                    <ErrorMessage name="username" component="div" />

                    {/* <label htmlFor="password">Senha:</label> */}
                    <Field id="password" name="password" type="password" placeholder="Senha" />
                    <ErrorMessage name="password" component="div" />

                    <button type="submit">Entrar</button>
                    <button>Criar conta</button>
                </Form>
            </Formik>
        </Container>
    );
}