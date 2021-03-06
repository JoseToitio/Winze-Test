import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Navegador from "./Navegador";
import { ButtonBack, ContainerDetails, DivSize } from "./styles/Details.styles";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

export default function DetailsProducts(props) {
  const { wine } = useContext(GlobalContext);
  const [sum, setSum] = useState(1);
  const handleClick = (item, quantity) => {
    try {
      item["quantidade"] = quantity;
      let products = JSON.parse(localStorage.getItem("products")) || [];
      products.push(item);
      localStorage.setItem("products", JSON.stringify(products));
    } catch (error) {
      console.log(error);
    }
  };

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
              <picture className="image">
                <img src={wine.image} alt={wine.name} />
              </picture>
              <DivSize></DivSize>
              <div className="div-primary">
                <div className="div-bugada">
                  <p className="spanTag">{`Vinhos >  ${wine.country}  `}</p>
                  <p style={{ color: "gray" }}>{`> ${wine.region}`}</p>
                </div>
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
                  <AiFillStar color="orange" className="avaliations" />
                  <AiFillStar color="orange" className="avaliations" />
                  <AiFillStar color="orange" className="avaliations" />
                  <AiFillStar color="orange" className="avaliations" />
                  <p className="avaliations">{`(${
                    wine.avaliations ? wine.avaliations : wine.rating
                  })`}</p>
                </div>
                <picture className="image-container">
                  <img src={wine.image} alt={wine.name} />
                </picture>
                <div className="priceDiv">
                  <h1>
                    R$ <span>{wine.priceMember.toFixed(2)}</span>
                  </h1>
                  <h5>{`N??O S??CIO R$ ${wine.priceNonMember.toFixed(2)}/UN`}</h5>
                </div>
                <h4>Coment??rio do Sommelier</h4>
                <div className="sommelierComment">
                  <p >{wine.sommelierComment}</p>
                </div>
                <div className="quantityProduto">
                  <span
                    onClick={() => {
                      if (sum > 1) {
                        const a = sum - 1;
                        setSum(a);
                      }
                    }}
                  >
                    -
                  </span>
                  <span style={{ cursor: "default" }}>{sum}</span>
                  <span
                    onClick={() => {
                      const a = sum + 1;
                      setSum(a);
                    }}
                  >
                    +
                  </span>
                  <span
                    className="span-adicionar"
                    onClick={() => handleClick(wine, sum)}
                  >
                    Adicionar
                  </span>
                </div>
              </div>
            </ContainerDetails>
          ))}
      </div>
    </div>
  );
}
