import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Navegador from "./Navegador";
import {
  Container,
  DivContainer,
  DivButton,
  Busca,
} from "./styles/Body.styles";

export default function Body() {
  const { wine, setWine } = useContext(GlobalContext);
  return (
    <DivContainer>
      <Busca>
        <p>{wine.length} produtos encontrados</p>
        <p style={{ fontWeight: "bold" }}>Refine sua busca</p>
        <p>Por preço</p>
        <div>
          <input type="radio" name="preco" id="40" value={1} />
          <label htmlFor="40">Até R$40</label>
        </div>
        <div>
          <input type="radio" name="preco" id="40" value={2} />
          <label htmlFor="40">R$40 A R$60</label>
        </div>
        <div>
          <input type="radio" name="preco" id="40" value={2} />
          <label htmlFor="40">R$40 A R$60</label>
        </div>
        <div>
          <input type="radio" name="preco" id="40" value={3} />
          <label htmlFor="40">R$100 A R$200</label>
        </div>
        <div>
          <input type="radio" name="preco" id="40" value={4} />
          <label htmlFor="40">R$200 A R$500</label>
        </div>
        <div>
          <input type="radio" name="preco" id="40" value={5} />
          <label htmlFor="40">Acima de R$500</label>
        </div>
      </Busca>

      {wine.map((w) => (
        <div key={w.id}>
          <Container>
            <Navegador
              destino={w.id.toString()}
              nome={
                <div>
                  <picture>
                    <img src={w.image} alt={w.name} />
                  </picture>
                  <p>{w.name}</p>
                </div>
              }
            />
            <p>R${w.price}</p>
          </Container>
          <DivButton>
            <button>Adicionar</button>
          </DivButton>
        </div>
      ))}
    </DivContainer>
  );
}
