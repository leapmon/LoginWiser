import styled from 'styled-components';

    const Section = styled.section`
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background: #E5E5E5;
        background: #faf5ff;

        @media (max-width:768px)
        {
          margin:0;
          padding:0;
          width:100%;
        }

        @media (max-width:500px)
        {
          margin:0;
          padding:0;
          width:100%;
        }
    `;

    
export default Section