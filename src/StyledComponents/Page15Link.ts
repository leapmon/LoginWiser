import styled from 'styled-components';

    const Link = styled.a`
        color: #af59c1;
        text-decoration: underline;
        
        :hover{
            cursor:pointer;
        }

        @media (max-width:500px)
        {
            color: white;

            
        }
    `;

export default Link