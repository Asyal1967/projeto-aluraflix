import Tarja from "../Tarja";
import PropTypes from 'prop-types';
import Card from "../Card";

function mapearCorDaTarja(categoria) {
  switch (categoria) {
    case 'Front end':
      return 'primary';
    case 'Back end':
      return 'success';
    default:
      return 'warning';
  }
}

export default function ListaDeCards({ videos, categoria }) {
  return (
    <>
      <Tarja categoria={categoria} cor={mapearCorDaTarja(categoria)} tamanho="h4" />
      <br />
      <div className="container-fluid px-0 d-flex gap-5">
      {videos
        .filter((video) => video.categoria === categoria)
        .map((video) => (
          <Card key={video.id} video={video} />
        ))
      }
      </div>
    </>
  )
}

ListaDeCards.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    categoria: PropTypes.oneOf(['Front end', 'Back end', 'Mobile']).isRequired,
    video: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired
  })).isRequired,
  categoria: PropTypes.oneOf(['Front end', 'Back end', 'Mobile']).isRequired
}