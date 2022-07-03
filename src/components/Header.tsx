import { HeaderStyle, DivHeader, InputSearch } from './styles/Header.styles';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Navegador from '../components/Navegador';

const imageUrl ='https://img.wine.com.br/logo/wine/black/wine.svg'

export default function Header(props: any) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if(click === false) {
      setClick(true);
    } else {
      setClick(false);
    }
  }
  return (
    <div>
      <HeaderStyle>
          <nav>
            <GiHamburgerMenu className='burger-menu'/>
            <Navegador destino='/'  nome={<picture><img className='icon-logo' src={imageUrl} alt="wine Icon" style={{cursor: 'pointer'}}/></picture>}/>
            <ul className='div-nav'>
              <li>
                <Navegador destino="/" nome="Clube"/>
              </li>
              <li>
                <a>Loja</a>
              </li>
              <li>
                <a>Produtores</a>
              </li>
              <li>
                <a>Ofertas</a>
              </li>
              <li>
                <a>Eventos</a>
              </li>
            </ul>
            <DivHeader>
              <div>
                <AiOutlineSearch style={{fontSize: 30, cursor: 'pointer'}} onClick={handleClick} />
              </div>
              <div className='profile'>
                < CgProfile style={{fontSize: 30, cursor: 'pointer'}} />
              </div>
              <div>
                <Navegador destino='/carrinho' nome={<AiOutlineShoppingCart style={{fontSize: 30, cursor: 'pointer'}} />}/>
              </div>
            </DivHeader>
          </nav>
      </HeaderStyle>
      <InputSearch>
        {click && <input onChange={props.onChange} type='text' />}
      </InputSearch>

    </div>
  )
}