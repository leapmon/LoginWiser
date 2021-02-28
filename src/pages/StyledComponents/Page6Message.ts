import styled from 'styled-components';

    const Message = styled.h2`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        position: relative;
        width: 222px;
        height: 40px;
        top: 13%;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        /* or 125% */
        color: #989FDB;

        @media (max-width:500px)
        {
            position:relative;
            left:50%;
            top: -5%;
            transform: translate(-50%,0%);
            width: 255px;
            font-size: 12px;
            line-height: 20px;
            text-align:center;
        }

    `;     

export default Message