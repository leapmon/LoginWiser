import styled from 'styled-components';

// Teste de commit
    

const LabelPassword = styled.label`
        position: relative;
        width: 72px;
        height: 14px;
        top: 22vh;
        left:4%;
        
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 48px;
        /* or 480% */
        
        display: flex;
        align-items: center;
        color: #383E71;

        @media (max-width:500px)
        {
            position:relative;
            left:50%;
            top: -4vh;
            padding-left:30px;
            transform: translate(-50%,0%);
            width: 255px;
            font-size: 10px;
            line-height: 20px;
            text-align:center;
        }
    `;    

export default LabelPassword