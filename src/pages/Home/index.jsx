import BarraDeNavegacao from '@components/BarraDeNavegacao'
import Banner from '../../components/Banner';
import './styles.scss'

function Home() {

  return (
    <>
    <header>
      <BarraDeNavegacao />
    </header>
    <main className='container-fluid h-100 px-0'>
        <Banner />
    </main>
    </>
  )
}

export default Home;
