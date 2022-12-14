import styled from "styled-components";

export const SeatArea = styled.button`
    width: 26px;
    height: 26px;
    background-color: ${props => props.bgColor};
    font-size: 11px;
    border-radius: 50%;
    border: 1px solid ${props => props.borderColor};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    cursor: ${props => props.disabled ?  'default' :  'pointer' };

    &:hover{
        opacity: ${props => props.disabled ?  1 : 0.8 };
    }
`