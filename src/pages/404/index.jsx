import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaginaNaoEncontrada() {

  const navegador = useNavigate();

  const callbackMemoizadaParaRedirecionarAoHome = useCallback(
    () => navegador('/'),
    [navegador]
  );

  return (
    <main className="container">
      <h1 className="text-danger display-1">Ops! Essa página não existe X.X</h1>
      <h2 className='h2 text-danger-emphasis'>Parece que você tentou acessar uma página que não existe nesse aplicativo</h2>
      <button
        className='btn btn-outline-primary p-3 mt-5 text-light rounded-3'
        onClick={callbackMemoizadaParaRedirecionarAoHome}
      >
        Voltar para a página inicial
      </button>
    </main>
  )
}