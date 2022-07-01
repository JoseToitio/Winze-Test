import { useRouter } from 'next/router'
import Header from '../../components/Header';
import DetailsProducts from '../../components/Details';

export default function Produto() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <Header />
      <DetailsProducts id={id}/>
    </div>
  )
}