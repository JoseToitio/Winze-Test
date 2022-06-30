import { HeaderStyle } from './styles/Header.styles';
import React from 'react';
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const imageUrl ='https://img.wine.com.br/logo/wine/black/wine.svg'

export default function Header() {
  return (
    <div>
      <HeaderStyle>
          <nav>
          <picture>
            <img src={imageUrl} alt="wine Icon" />
          </picture>
            <ul>
              <li>
                <a href='a'>Clube</a>
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
            <div>

            </div>
          </nav>
      </HeaderStyle>
    </div>
  )
}