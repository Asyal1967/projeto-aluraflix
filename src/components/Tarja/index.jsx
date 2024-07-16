import PropTypes from 'prop-types';
import './styles.scss'

export default function Tarja({ categoria, cor, tamanho = 6 }) {
  return (
    <div className={`rounded-4 bg-${cor} tarja display-${tamanho} fw-bold text-uppercase p-3`}>
      {categoria}
    </div>
  )
}

Tarja.propTypes = {
  categoria: PropTypes.string.isRequired,
  cor: PropTypes.string.isRequired,
  tamanho: PropTypes.number.isRequired
}