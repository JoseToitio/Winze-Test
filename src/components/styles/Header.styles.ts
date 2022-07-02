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
  }
`
export {
  HeaderStyle,
  DivHeader,
  InputSearch
}