import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Navegador from "./Navegador";
import { ButtonBack, ContainerDetails, DivSize } from "./styles/Details.styles";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
export default function DetailsProducts(props) {
  const { wine } = useContext(GlobalContext);

  return (
    <div>
      <ButtonBack>
        <Navegador
          nome={
            <div>
              <IoIosArrowBack size={40} />
              <span>Voltar</span>
            </div>
          }
          destino="/"
        />
      </ButtonBack>
      <div>
        {wine
          .filter((wine) => wine.id == props.id)
          .map((wine) => (
            <ContainerDetails key={wine.id}>
              <picture>
                <img src={wine.image} alt={wine.name} />
              </picture>
              <DivSize></DivSize>
              <div>
                <span className="spanTag">{`Vinhos >  ${wine.country}  `}</span>
                <span style={{ color: "gray" }}>{`> ${wine.region}`}</span>
                <h1 className="name">{wine.name}</h1>
                <div className="divCountry">
                  <div className="picture">
                    <picture>
                      <img className="country" src={wine.flag} alt="" />
                    </picture>
                  </div>
                  <p>{wine.country}</p>
                  <p>{wine.classification}</p>
                  <p>{wine.size || wine.volume}</p>
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <p>{`(${wine.avaliations ? wine.avaliations: wine.rating})`}</p>
                </div>
                <div className="priceDiv">
                  <h1>
                    R$ <span>{wine.priceMember}</span>
                  </h1>
                  <h5>{`NÃO SÓCIO R$ ${wine.priceNonMember}/UN`}</h5>
                </div>
                <h4>Comentário do Sommelier</h4>
                <p>{wine.sommelierComment}</p>
                <div className='quantityProduto'>
                  <span>-</span>
                  <span>{1}</span>
                  <span>+</span>
                  <span >Adicionar</span>
                </div>
              </div>
            </ContainerDetails>
          ))}
      </div>
    </div>
  );
}
