import styled from 'styled-components';

    const MessageForgot = styled.span`
        position: relative;
        width: 212px;
        height: 40px;
        top: 28vh;

        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        /* or 143% */

        text-align: center;

        color: #989FDB;
        padding: 0px;
        margin: 0px;


        @media (max-width:500px)
        {
            position:relative;
            left:0;
            top: -4vh;
            width: 212px;
            font-size: 12px;
            line-height: 20px;
            text-align:center;
            color:white;
            padding-top:10%;
        }
    `;

export default MessageForgot