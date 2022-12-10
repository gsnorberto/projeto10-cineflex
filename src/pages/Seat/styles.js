import styled from "styled-components";

export const SeatArea = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 1170px;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 120px;
`

export const Title = styled.div`
    text-align: center;
    margin: 40px 20px;
    color: #293845;
    font-size: 24px;
`

export const Seats = styled.div`
    margin: 0 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Status = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    flex-wrap: wrap;

    .status{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        margin: 0 10px;
    }
    .circle{
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-bottom: 10px;
    }
    .green{
        background-color: #1AAE9E;
        border: 1px solid #0E7D71;
    }
    .gray{
        background-color: #C3CFD9;
        border: 1px solid #7B8B99;
    }
    .yellow{
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }
    .title{
        font-size: 13px;
        color: #4E5A65;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #293845;
    margin-bottom: 15px;
    
`
export const Input = styled.input`
    margin-top: 5px;
    border: 1px solid #D4D4D4;
    max-width: 330px;
    height: 30px;
    outline: 0;
    padding: 5px 15px;
    font-size: 18px;
    font-style: italic;
    color: #293845;
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
    margin-top: 30px;
`

export const Footer = styled.div`
   width: 100%;
   height: 115px;
   background-color: #DFE6ED;
   display: flex;
   align-items: center;
   position: fixed;
   left: 0;
   bottom: 0;
   padding: 0 20px;

   img{
    width: 64px;
    border: 5px solid #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-right: 15px;
   }

   .title{
    font-size: 20px;
    color: #293845;
    display: flex;
    flex-direction: column;
   }
`

export const LoadingButton = styled.img`
    position: fixed;
    width: 100px;
    top: calc(50% - (100px/2));
    left: calc(50% - (100px/2));
`