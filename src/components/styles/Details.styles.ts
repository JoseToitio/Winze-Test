import styled from "styled-components";

export const ButtonBack = styled.div`
  font-size: 25px;
  padding: 30px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  cursor: pointer;
  padding-left: 200px;
  span {
    padding-left: 10px;
    font-size: 28px;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: center;
  
  div {
   width: 480px;
   padding-left: 30px ;
    .country {
      max-width:16px;
      max-height:16px;
      width: auto;
      height: auto;
    }

    .spanTag {
      color: #c81a79;
      font-weight: bold;
    }
  }
  .name {
    font-weight: bold;
    text-align: start;
    font-size: 20px;

  }
  .divCountry {
    display: flex;
    align-items: baseline;
    padding: 0;
    p {
      margin: 0 8px 0 0;
    }
    .picture {
      padding: 0;
      width: 16px;
      height: 16px;
      margin: 0 8px 0 0;
    }
  }

  .priceDiv {
    padding: 0;
    margin-top: 50px;
    margin-bottom: 50px;
    h1 {
      color: #c81a79;
      font-size: 23px;
      span {
        font-size: 40px;
        font-weight: 700;
      }
    }
    h5 {
      margin-top: -20px;
      color: gray
    }
  }
`

export const DivSize = styled.div`
  max-width: 100px;
`