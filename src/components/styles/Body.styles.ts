import styled from 'styled-components';

export const Container = styled.div`
  display: flex ;
  background-color: #fff;
  margin: 15px;
  margin-top: 30px;
  padding: 8px 10px;
  clear: both;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 400px;
  max-width: 300px;
  max-height: 350px;
  border-radius: 5px;
  border-width: 2px;
  cursor: pointer;
  picture {
    display: flex;
    justify-content: center;
  }
  img {
    max-width:105px;
    max-height:176px;
    width: auto;
    height: auto;
  }

  p {
    flex-wrap: wrap;
    font-weight: bold;
    text-align: center;
  }

  .priceDiv {
    h1 {
      color: #c81a79;
      font-size: 13px;
      span {
        font-size: 20px;
        font-weight: 700;
        color: #c81a79;
        text-decoration: none;
      }
    }

    .discountDiv {
      display: flex;
      text-align: center;
      justify-content: center;
      .divDiscount {
        display: flex;
        border-radius: 5px;
        border-width: 2px;
        display: flex;
        text-align: center;
      }
      .discount{
        margin-left: 20px;
        width: 70px;
        height: 20px;
        text-decoration: none;
        color: whitesmoke;
        background-color: orange;
        border-color: orange;
        border-radius: 4px
      }
    }

    span {
      color: gray;
      text-decoration: line-through;
    }
    h5 {
      margin-top: -5px;
      color: gray
    }

    h1 {
      color: black
    }

    .cifrao {
      font-size: 13px;
    }
  }
`

export const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* padding: 20px; */
  justify-content: right;
  
  div {
    justify-content: center;
  }
`

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-top: 8px;
    width: 94%;
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
    padding: 0 32px;
    text-align: center;
  }
`

export const Busca = styled.div`
  display: block;
  width: 400px;
  padding-left: 50px;
  padding-top: 10px;

  div {
    padding: 4px;
    label {
    padding-left: 10px;
  }
  }
`

export const DivPrincipal = styled.div`
  display: flex;
`