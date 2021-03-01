import React from 'react';
import Section from './StyledComponents/Page1Section';
import ColumnLeft from './StyledComponents/Page2ColumnLeft';
import ColumnRight from './StyledComponents/Page3ColumnRight';
import StyledForm from './StyledComponents/Page4StyledForm';
import Welcome from './StyledComponents/Page5Welcome';
import Button from './StyledComponents/Page13Button';
import LabelButton from './StyledComponents/Page14LabelButton';

import Link from 'next/link'

import { useForm } from "react-hook-form";

interface FormSuccessProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const FormSuccess = (props:FormSuccessProps) => {
  
    const { handleSubmit} = useForm();

    return (
      <Section>
        <ColumnLeft></ColumnLeft>
        <ColumnRight>
        <StyledForm  onSubmit={handleSubmit(props.ClickHandler)}>
            <Welcome>Login feito com sucesso!</Welcome>
            <div>
              
              <Button sup={false}>  
                <LabelButton>SAIR</LabelButton>
              </Button>
              
            </div>
            </StyledForm>
        </ColumnRight>
    </Section>
    );
}

export default FormSuccess