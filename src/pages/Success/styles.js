import styled from "styled-components";

export const SuccessArea = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 1170px;
    margin: 0 auto;
    padding: 100px 20px 120px 20px;
`
export const Title = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #247A6B;
    margin-bottom: 40px;
`
export const Movie = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const Tickets = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

export const Buyer = styled.div`
    display: flex;
    flex-direction: column;
    
    .buyer{
        margin-top: 20px;
    }
`

export const Title2 = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #293845;
`

export const Desc = styled.div`
    font-size: 22px;
    color: #293845;
    margin-top: 5px;
`

export const Button = styled.button`
    border: 0;
    background-color: #E8833A;
    padding: 15px 30px;
    color: #FFFFFF;
    font-size: 18px;
    border-radius: 3px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`
export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
`
