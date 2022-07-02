import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import {EmptyCart, CardItens, DivCard, SuperDiv} from './carrinho.styles';

export default function Carrinho() {
  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  type Produtos = {
    name: string,
    id: number,
    price: number,
    image: string,
    quantidade: number,
  };
  
  const removeProduct = async (id: Number) => {
    try {
      const products = await JSON.parse(localStorage.getItem('products') || '');
      const removeItem = products.filter((p: Produtos) => p.id !== id);
      localStorage.setItem('products', JSON.stringify(removeItem));
      const newProducts = await JSON.parse(localStorage.getItem('products') || '');
      setProduct(newProducts);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  const localStorageItens = async () => {
    try {
      const products = await JSON.parse(localStorage.getItem('products') || '');
      setProduct(products);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  
  useEffect(() => {
    let initialValue = 0;
    let obj = product;
    let sum = obj.reduce((acc, curValue:Produtos) => {
      return acc + curValue.price
    }, initialValue)
    setTotalPrice(sum);
  }, [product]);

  useEffect(() => {
    localStorageItens();
  }, [])
  return (
    <div>
      <Header />
      {product.length === 0 && 
      <EmptyCart className='emptyCart'>
        <h1>Carrinho Vazio!</h1>
      </EmptyCart>
      }
      <div>
        <SuperDiv>
          <DivCard>
          {product.map((p:Produtos) => (
            <div key={p.id}>
              <CardItens>
                <picture><img src={p.image} alt={p.name}/></picture>
                <div>
                  <h4>{p.name}</h4>
                  <p>Quantidade: {p.quantidade}</p>
                  <p>R$ {p.price}</p>
                  <button onClick={() => (removeProduct(p.id))}>Remover</button>
                </div>
              </CardItens>
            </div>
          ))}
          </DivCard>  
          <p className='totalPrice'>Total R${totalPrice.toFixed(2)}</p>
        </SuperDiv>
      </div>
      
    </div>
  )
}