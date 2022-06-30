import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function Body() {
  const { wine } = useContext(GlobalContext);
  return (
    <div>
      {wine.map((w) => (
        <div key={w.id}>
          <p>
            {w.name}
          </p>
          <picture>
            <img src={w.image} alt={w.name} />
          </picture>
          <p>{w.price}</p>
          <p>{w.sommelierComment}</p>
        </div>
      ))}
    </div>
  )
}