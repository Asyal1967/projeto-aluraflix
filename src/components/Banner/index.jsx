import Tarja from '../Tarja'
import './styles.scss'

export default function Banner() {
  return (
    <section className="d-flex justify-content-center align-items-center banner">
      <img src="/images/soutinho-banner.png" alt='Capa de vídeo do Dev Soutinho' />
      <div className='container-fluid d-flex justify-content-between mt-auto px-5'>
        <div className='banner-esquerda w-50'>
          <Tarja categoria='Front End' cor='primary' />
          <h1 className='display-5 fw-normal mt-5'>SEO com React</h1>
          <p className='fw-lighter'>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma {'"'}Pokedex{'"'}! </p>
        </div>
        <div className='banner-direita w-50'>
        <iframe
          src="https://www.youtube.com/embed/c8mVlakBESE"
          title="Conhecendo a linguagem Go | Hipsters.Talks"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
      </div>
    </section>
  )
}