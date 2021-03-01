import styled from 'styled-components';

    const ColumnRight = styled.div`
        height:100vh;
        display:flex;
        width:44%;
        justify-content:center;

        @media (max-width:768px)
        {

        }

        @media (max-width:500px)
        {
            position:absolute;
            top:0;
            left:0;
            margin:0;
            padding:0;
            min-width:100%;
            z-index:9;
        }
    `;
    
export default ColumnRight