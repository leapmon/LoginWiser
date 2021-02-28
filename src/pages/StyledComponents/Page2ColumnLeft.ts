import styled from 'styled-components';

    const ColumnLeft = styled.div`
        height:100vh;
        width:56%;
        display:flex;
        justify-content:center;
        align-items:center;
        background: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url('img/desktop_banner_login.png') no-repeat;
        background-size: 100% 100%;
        margin:0;
        padding:0;

        @media (max-width:768px)
        {
            left: 0%;
            width:40%;
            transform: translate(-20%,0%);
            background: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url('img/tablet_banner_login.png') no-repeat;
            background-size: 100% 100%;
            z-index: 0;
        }

        @media (max-width:500px)
        {
            min-width:100%;
            transform: translate(0%,0%);
            background: linear-gradient(0deg, #130525 30%, rgba(105, 57, 153, 0) 100%), url('img/desktop_banner_login.png') no-repeat;
            background-size: 100% auto;
            z-index: 0;
        }
    `;
    
export default ColumnLeft