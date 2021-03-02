import React from 'react'
import Head from 'next/head'
 
import Section from '../StyledComponents/Page1Section';
import ColumnLeft from '../StyledComponents/Page2ColumnLeft';
import ColumnRight from '../StyledComponents/Page3ColumnRight';
import StyledForm from '../StyledComponents/Page4StyledForm';
import Welcome from '../StyledComponents/Page5Welcome';
import Message from '../StyledComponents/Page6Message';
import LabelEmail from '../StyledComponents/Page7LabelEmail';
import InputUserEmail from '../StyledComponents/Page8InputUserEmail';
import ErrorMessageEmail from '../StyledComponents/Page9ErrorMessageEmail';
import LabelPassword from '../StyledComponents/Page10LabelPassword';
import InputUserPassword from '../StyledComponents/Page11InputUserPassword';
import ErrorMessagePassword from '../StyledComponents/Page12ErrorMessagePassword';
import Button from '../StyledComponents/Page13Button';
import LabelButton from '../StyledComponents/Page14LabelButton';
import Link from '../StyledComponents/Page15Link';
import CentralContent from '../StyledComponents/Page16CentralContent';
import MessageForgot from '../StyledComponents/Page17MessageForgot';

import { useForm } from "react-hook-form";

type UserLogin = {
    email: string;
    password: number;
};

interface FormLoginProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const FormLogin = (props:FormLoginProps) => {

    const { register, handleSubmit, errors } = useForm<UserLogin>();

    const onSubmit = (data: UserLogin) => {
        console.log("data", data);
        alert(data.email + ' efetuou o login com sucesso');
    };

    return (
        <Section>
            <Head>
          <title>Login Next React TypeScript Redux Axios</title>
          <link 
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel ="stylesheet"
          />
        </Head>
        <ColumnLeft></ColumnLeft>    
        <ColumnRight>
            <StyledForm onSubmit={handleSubmit(props.ClickHandler)}>
                <Welcome>Olá, seja bem-vindo!</Welcome>
                <Message>Para acessar a plataforma, faça seu login.</Message>
                


                <div>
                    <LabelEmail htmlFor="userpassword" className="form-label">
                        E-MAIL
                    </LabelEmail>
                    
                    <InputUserEmail
                            id="email"
                            type="email" 
                            name="email" 
                            placeholder="user.name@mail.com" 
                            ref={register({required:true})}
                            style = { {borderColor: errors.email? "red":"" } }

                    />
                    <ErrorMessageEmail>{errors.email && (<span>Digite um e-mail válido</span>)}</ErrorMessageEmail>
                </div>

                <div>
                    <LabelPassword htmlFor="userpassword" className="form-label">
                        SENHA
                    </LabelPassword>
                    <InputUserPassword 
                        type="password" 
                        name="password" 
                        placeholder="******" 
                        ref={register({required:true})}
                        style = { {borderColor: errors.email? "red":"" } }
                    />
                    <ErrorMessagePassword> {errors.password &&  (<span>Digite uma senha válida.</span>)}</ErrorMessagePassword>

                </div>


                <div>
                    <Button sup={false} type="submit">
                        <LabelButton>ENTRAR</LabelButton>
                    </Button>
                </div>

                <CentralContent>
                    <MessageForgot>Esqueceu seu login ou senha?{"\n"}Clique <Link>aqui</Link></MessageForgot>
                </CentralContent>
                
            </StyledForm>
        </ColumnRight>            
    </Section>

    )
}

export default FormLogin
