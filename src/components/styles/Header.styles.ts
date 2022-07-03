import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center ;
  width: 100%;
  height: 88px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);

  .burger-menu {
    display: none;
  }
  nav {
    display: flex;
    align-items: center;
    
  }
  ul {
    display: flex;
    list-style: none;
    font-size: 20px;
  }
  li {
    &:hover {
      color: #b6116e;
      border-bottom: 3px solid #b6116e;
    }
    color: #666;
    padding: 28px;
    display: inline-block;

  }

  picture {
    padding-right: 30px;
  }
  div {
    padding-left: 30px;
    a {
      padding-right: 20px;
    }
  }
  @media(max-width: 800px) {
    width: 100%;
    .profile {
      display: none;
    }
    .div-nav {
      display: none;
    }
    .burger-menu{
      display: flex;
      font-size: 25px;
      margin-right: 40px;
    }
    .icon-logo {
      width: 100px;
      max-width: 120px;
    }
  }
`
const DivHeader = styled.div`
  display: flex;
  
`

const InputSearch = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  
  input {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    @media(max-width: 800px) {
      width: 80%;
    }
  }
`
export {
  HeaderStyle,
  DivHeader,
  InputSearch
}