import styled from 'styled-components';

    const InputUserEmail = styled.input`
        position: relative;
        width: 256px;
        height: 48px;
        top: 18.5vh;
        padding-left:6%;
        border: 1px solid #989FDB;
        box-sizing: border-box;
        border-radius: 8px;
        background: transparent;
        outline: none;

        ::focus {
            outline: none;
        }

        @media (max-width:500px)
        {
            position:relative;
            left:50%;
            top: -3vh;
            transform: translate(-50%,0%);
            width: 256px;
            font-size: 14px;
            line-height: 48px;
            text-align:left;
            
            ::placeholder,
            ::-webkit-input-placeholder {
                padding: 0;
                margin: 0;
                font-size:10px;
            }
        }
    `;  

export default InputUserEmail