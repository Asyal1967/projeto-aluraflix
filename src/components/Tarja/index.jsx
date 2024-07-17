import PropTypes from 'prop-types';
import './styles.scss'

export default function Tarja({ categoria, cor, tamanho = 'display-6' }) {
  return (
    <div className={`${tamanho.includes('display') ? 'rounded-4' : 'rounded-3'} bg-${cor} tarja ${tamanho} fw-bold text-uppercase ${tamanho.includes('display') ? 'p-3' : 'px-5 py-2 mt-4'}`}>
      {categoria}
    </div>
  )
}

Tarja.propTypes = {
  categoria: PropTypes.string.isRequired,
  cor: PropTypes.string.isRequired,
  tamanho: PropTypes.number.isRequired
}