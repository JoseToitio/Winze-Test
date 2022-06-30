import { useEffect, useState } from 'react';
import {wineApi} from '../services/Api';

export default function HomePage() {
  
  interface wine {
    name: string;
    image: string;
    id: string;
    price: string;
  }

  const [wine, setWine] = useState([]);
  const requestApi = async () => {
    await wineApi().then((w) => setWine(w.items));
  }

  useEffect(() => {
    requestApi();
  }, [])
  return (
    <div>
      {wine.map((w: wine, index) => (
        <div key={w.id}>
          <p>
            {w.name}
          </p>
          <picture>
            <img src={w.image} alt={w.name} />
          </picture>
          <p>{w.price}</p>
        </div>
      ))}
    </div>
  )
}