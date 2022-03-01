import styled from "styled-components";

export const FooterBox = styled.span`

    position: fixed;
    left: 0;
    bottom: 0;
    min-width: 100%;
    text-align: center;
    padding: 20px;
    background-color: ${(props) => props.theme.backGroundContainer};
    font-weight: 300;
    font-size: 14px;
    color: ${(props) => props.theme.color};

`


