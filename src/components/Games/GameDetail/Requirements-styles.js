import styled from 'styled-components'

export const Details = styled.div`
    display: flex;
    text-align: left;
    padding: 8px;
    border-radius:10px;
    background-color: ${(props) => props.theme.backGroundContainerSec};
    margin: 16px;
    color: ${(props) => props.theme.color};

`

export const Description = styled.p`
    width:60%;
    text-align:justify;
`
export const Thumbnail = styled.img`
    border-radius:10px;
`

