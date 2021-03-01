import styled from 'styled-components';

    const InputUserPassword = styled.input`
        position: relative;
        width: 256px;
        height: 48px;
        top: 22vh;
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
            top: -4vh;
            transform: translate(-50%,0%);
            width: 256px;
            font-size: 24px;
            line-height: 32px;
            text-align:left;

            ::placeholder,
            ::-webkit-input-placeholder {
                padding: 0;
                margin: 0;
                font-size:10px;
            }
        }
    `;  

export default InputUserPassword