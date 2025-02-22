import './styles.scss'
import PropTypes from 'prop-types';
import Lixeira from "../IconeLixeira";
import Editar from '../IconeEditar';
import { useNavigate } from 'react-router-dom';

export default function Card({ video }) {

  const navegarPara = useNavigate();

  function removerVideo() {
    fetch(`http://localhost:3000/videos/${video.id}`, { method: 'delete' })
      .then(() => navegarPara('/'))
  }
  return (
    <div className="card cartao-video" {...{ categoria: video.categoria }}>
      <div className="container-imagem" {...{ categoria: video.categoria }}>
        <img
          src={video.imagem}
          alt={video.titulo}
          className="card-img-top img-fluid"
        />
      </div>
      <div className="card-body d-flex justify-content-evenly">
        <button className="btn" onClick={removerVideo}>
          <Lixeira className="icone-lixeira me-3" />
          <span className='text-uppercase fw-bold'>Deletar</span>
        </button>
        <button className='btn'>
          <Editar className="icone-lixeira me-3" />
          <span className='text-uppercase fw-bold'>Editar</span>
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    categoria: PropTypes.oneOf(['Front end', 'Back end', 'Mobile']).isRequired,
    video: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired
  }).isRequired,
}