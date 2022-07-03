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

  @media(max-width: 800px) {
    display: none;
    
  }
`

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: center;

  .div-bugada {
    display: flex;
    padding: 0px;
  }
  .image-container {
    display: none;
  }
  div {
   width: 480px;
   padding-left: 30px ;
    .country {
      max-width:16px;
      max-height:16px;
      width: auto;
      height: auto;
    }
    .quantityProduto {
      display: flex;
      margin-top: 40px;
      width: 80%;
      background-color: #7ebc43;
      border-color: #7ebc43;
      color: #fff;
      font-size: 16px;
      height: 48px;
      line-height: 16px;
      border-radius: 4px;
      border-style: solid;
      border-width: 2px;
      font-weight: 700;
      padding: 0 32px;

      align-items: center;
      justify-content: space-around;
      span {
        cursor: pointer;
      }
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
  .sommelierComment {
    padding-left: 0px;
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

  @media(max-width: 800px) {
    .image{
      display: none;
    }
    .image-container {
      display: flex;
      justify-content: center;
    }
    .name {
      text-align: center;
      width: 100%;
      margin-top: 0px;
    }
    .div-bugada {
      display: flex;
      width: 100%;
      justify-content: center;
      padding-left: 0px;
    }
    .div-primary {
      width: 100%;
      padding-left: 0px;
    }
    .divCountry {
      width: 100%;
      justify-content: center;
    }
    .avaliations {
      display: none;
    }
    .priceDiv {
      width: 100%;
      h1 {
        padding-left: 20px;
      }
      h5 {
        padding-left: 20px;
      }
      margin: 0px;
    }

    h4 {
      padding-left: 20px;
    }
    .sommelierComment{
      width: 100%;
      text-align: left;
      padding-right: 20px;
      padding-left: 20px;
    }
    .quantityProduto {
      display: flex;
      justify-content: center;
      margin: auto;
      width: 100%;
    }
  }
  
`

export const DivSize = styled.div`
  max-width: 100px;

  @media (max-width: 800px) {
    display: none;
  }
`