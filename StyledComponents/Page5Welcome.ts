import styled from 'styled-components';

    const Welcome = styled.h1`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

        position: relative;
        width: 231px;
        height: 96px;
        top: 13%;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
        /* or 120% */
        color: #383E71;

        @media (max-width:500px)
        {
            position:relative;
            left:50%;
            top: 4%;
            transform: translate(-50%,0%);
            width: 139px;
            font-size: 24px;
            line-height: 32px;
            text-align:center;
        }
    `;
        
export default Welcome