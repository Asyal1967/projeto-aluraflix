import BarraDeNavegacao from '@components/BarraDeNavegacao'
import Banner from '../../components/Banner';
import './styles.scss'
import { useLoaderData } from 'react-router-dom';

function Home() {

  const videos = useLoaderData();

  return (
    <>
    <header>
      <BarraDeNavegacao />
    </header>
    <main className='container-fluid h-100 px-0'>
        <Banner video={videos[0]} />
    </main>
    </>
  )
}

export default Home;
