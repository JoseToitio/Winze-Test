import { useCallback, useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Header from "./Header";
import Navegador from "./Navegador";
import {
  Container,
  DivContainer,
  DivButton,
  Busca,
  DivPrincipal,
} from "./styles/Body.styles";

export default function Body() {
  const { wine } = useContext(GlobalContext);
  const [inputValue, setInputValue] = useState(0);
  const [wineFilter, setWineFilter] = useState([]);
  const [search, setSearch] = useState("");
  const handleInput = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  const searchText = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };
  useEffect(() => {
    setWineFilter(wine);
    if (inputValue === "0") {
      setWineFilter(wine);
    }
    if (inputValue === "1") {
      const filter = wine.filter((wine) => wine.priceNonMember <= 40);
      setWineFilter(filter);
    }
    if (inputValue === "2") {
      const filter = wine.filter(
        (wine) => wine.priceNonMember >= 40 && wine.price < 60
      );
      setWineFilter(filter);
    }
    if (inputValue === "3") {
      const filter = wine.filter(
        (wine) => wine.priceNonMember >= 100 && wine.price <= 200
      );
      setWineFilter(filter);
      console.log(wineFilter);
    }
    if (inputValue === "4") {
      const filter = wine.filter(
        (wine) => wine.priceNonMember >= 200 && wine.price <= 500
      );
      setWineFilter(filter);
      console.log(wineFilter);
    }
    if (inputValue === "5") {
      const filter = wine.filter((wine) => wine.priceNonMember > 500);
      setWineFilter(filter);
      console.log(wineFilter);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wine, inputValue]);

  const handleClick = (item) => {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products));
    
  };
  return (
    <div>
      <Header onChange={searchText} />
      <DivPrincipal>
        <Busca>
          <p>{wineFilter.length} produtos encontrados</p>
          <p style={{ fontWeight: "bold" }}>Refine sua busca</p>
          <p>Por preço</p>
          <div>
            <input
              type="radio"
              name="preco"
              id="0"
              value={0}
              onChange={handleInput}
            />
            <label htmlFor="0">Todos os produtos</label>
          </div>
          <div>
            <input
              type="radio"
              name="preco"
              id="1"
              value={1}
              onChange={handleInput}
            />
            <label htmlFor="1">Até R$40</label>
          </div>
          <div>
            <input
              type="radio"
              name="preco"
              id="2"
              value={2}
              onChange={handleInput}
            />
            <label htmlFor="2">R$40 A R$60</label>
          </div>
          <div>
            <input
              type="radio"
              name="preco"
              id="3"
              value={3}
              onChange={handleInput}
            />
            <label htmlFor="3">R$100 A R$200</label>
          </div>
          <div>
            <input
              type="radio"
              name="preco"
              id="4"
              value={4}
              onChange={handleInput}
            />
            <label htmlFor="4">R$200 A R$500</label>
          </div>
          <div>
            <input
              type="radio"
              name="preco"
              id="5"
              value={5}
              onChange={handleInput}
            />
            <label htmlFor="5">Acima de R$500</label>
          </div>
        </Busca>
        <DivContainer>
          {wineFilter
            .filter((wine) => wine.name.startsWith(search))
            .map((w) => (
              <div key={w.id}>
                <Container>
                  <Navegador
                    destino={`/produto/${w.id.toString()}`}
                    nome={
                      <div>
                        <picture>
                          <img
                            src={w.image}
                            alt={w.name}
                            style={{ cursor: "pointer" }}
                          />
                        </picture>
                        <p>{w.name}</p>
                      </div>
                    }
                  />
                  <div className="priceDiv">
                    <div className="discountDiv">
                      <span>R${w.price}</span>
                      <div className="divDiscount">
                        <span className="discount">{w.discount}% OFF</span>
                      </div>
                    </div>
                    <h1>
                      SÓCIO WINE{" "}
                      <span>
                        <span className="cifrao">R$</span>
                        {w.priceMember}
                      </span>
                    </h1>
                    <h5>{`NÃO SÓCIO R$ ${w.priceNonMember}/UN`}</h5>
                  </div>
                </Container>
                <DivButton>
                  <button
                    onClick={() => {
                      handleClick(w);
                    }}
                  >
                    Adicionar
                  </button>
                </DivButton>
              </div>
            ))}
        </DivContainer>
      </DivPrincipal>
    </div>
  );
}
