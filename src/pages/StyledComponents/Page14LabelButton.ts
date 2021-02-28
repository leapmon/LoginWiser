import styled from 'styled-components';

    const LabelButton = styled.span`
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height, or 125% */
        color: #FFFFFF;

        @media (max-width:500px)
        {
            position:relative;
            font-size: 14px;
        }
    `;       

export default LabelButton