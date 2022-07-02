import styled from "styled-components";

export const EmptyCart = styled.div`
  display: flex;
  text-align: center;
  padding-left: 100px;
  padding-top: 100px;
`

export const CardItens = styled.div`
  display: flex;
  margin: 40px;
  max-width: 400px;
  img {
    max-width: 100px;
  }

`

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  button {
    margin-top: 8px;
    width: 150px;
    background-color: #7ebc43;
    border-color: #7ebc43;
    color: #fff;
    font-size: 16px;
    height: 48px;
    line-height: 16px;
    border-radius: 4px;
    border-style: solid;
    border-width: 2px;
    cursor: pointer;
    font-weight: 700;
  }
`

export const SuperDiv = styled.div`
  display: flex;
  .totalPrice {
    margin-top: 100px;
    color: #c81a79;
    font-size: 23px;
    font-weight: 700;
  }
`