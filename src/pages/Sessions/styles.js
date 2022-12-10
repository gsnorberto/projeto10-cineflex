import styled from "styled-components";

export const SessionsArea = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 1170px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 120px;
`

export const Title = styled.div`
    padding: 0 20px;
    text-align: center;
    font-size: 24px;
    color: #293845;
    margin-bottom: 50px;
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
    font-size: 26px;
    color: #293845;
   }
`

export const LoadinButton = styled.img`
    position: fixed;
    width: 100px;
    top: calc(50% - (100px/2));
    left: calc(50% - (100px/2));
`