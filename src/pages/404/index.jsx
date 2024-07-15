import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaginaNaoEncontrada() {

  const navegador = useNavigate();

  const callbackMemoizadaParaRedirecionarAoHome = useCallback(
    () => navegador('/'),
    [navegador]
  );

  return (
    <main className="container d-flex flex-column justify-content-center align-items-center h-100 text-center">
      <h1 className="text-danger display-1">Ops! Essa página não existe X.X</h1>
      <p className='h2 text-danger-emphasis w-75'>Parece que você tentou acessar uma página que não existe nesse aplicativo</p>
      <button
        className='btn btn-outline-primary p-3 mt-5 text-light rounded-3'
        onClick={callbackMemoizadaParaRedirecionarAoHome}
      >
        Voltar para a página inicial
      </button>
    </main>
  )
}