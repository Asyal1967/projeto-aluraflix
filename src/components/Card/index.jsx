import './styles.scss'
import PropTypes from 'prop-types';
import Lixeira from "../IconeLixeira";

export default function Card({ video }) {
  return (
    <div className="card rounded-3 cartao-video" {...{ categoria: video.categoria }}>
      <div className="container-imagem" {...{ categoria: video.categoria }}>
        <img
          src={video.imagem}
          alt={video.titulo}
          className="card-img-top img-fluid"
        />
      </div>
      <div className="card-body">
        <button className="btn btn-dark">
          <Lixeira className="icone-lixeira" />
          Deletar
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