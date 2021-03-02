import styled from 'styled-components';

        const ErrorMessagePassword = styled.p`
            position: relative;
            width: 223px;
            height: 14px;
            top: 21.5vh;
            left:6%;

            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 10px;
            line-height: 48px;
            /* or 480% */

            display: flex;
            align-items: center;

            color: #FF377F;


            @media (max-width:500px)
            {
                position:relative;
                left:50%;
                top: -6vh;
                transform: translate(-50%,0%);
                width: 255px;
                line-height: 20px;
                text-align:center;
                padding-top:10px;
                padding-left:18px;
            }
        `;

export default ErrorMessagePassword