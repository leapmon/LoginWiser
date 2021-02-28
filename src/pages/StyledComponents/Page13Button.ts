import styled, { css } from 'styled-components';

    interface ButtonProps {
        sup: boolean;
    };

    const Button = styled.button<ButtonProps>`
        position: relative;
        width: 256px;
        height: 48px;
        top: 24.5vh;

        background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
        border-radius: 8px;

        @media (max-width:500px)
        {
            position:relative;
            width: 168px;
            left:50%;
            top: -6vh;
            top: ${props => props.sup? "10vh" : "-6vh"};

            transform: translate(-50%,0%);
            font-size: 24px;
            line-height: 32px;
            text-align:center;
            box-shadow: 0;

            justify-content:center;
            align-items:center;
            vertical-align: middle;
            display:block;

        }
    `;
    
export default Button