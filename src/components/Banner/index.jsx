import Tarja from '../Tarja'
import './styles.scss';
import PropTypes from 'prop-types';

export default function Banner({ video }) {
  return (
    <section className="d-flex justify-content-center align-items-center banner">
      <img src={video.imagem} alt={video.titulo} />
      <div className='container-fluid d-flex justify-content-between mt-auto px-5'>
        <div className='banner-esquerda w-50'>
          <Tarja categoria={video.categoria} cor={video.categoria === 'Front end' ? 'primary' : video.categoria === 'Back end' ? 'success' : 'warning'} />
          <h1 className='display-5 fw-normal mt-5'>{video.titulo}</h1>
          <p className='fw-lighter'>{video.descricao}</p>
        </div>
        <div className='banner-direita w-50'>
        <iframe
          src={video.video.replace('/watch?v=', '/embed/')}
          title="Conhecendo a linguagem Go | Hipsters.Talks"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
      </div>
    </section>
  )
}

Banner.propTypes = {
  video: PropTypes.object.isRequired
};