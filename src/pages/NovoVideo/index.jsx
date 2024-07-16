import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import './styles.scss'

export default function NovoVideo() {
  return (
    <>
      <header>
        <BarraDeNavegacao />
      </header>
      <main className='container-fluid h-100 px-0'>
        <section className="titulo">
          <h1 className="display-5 text-uppercase fw-bold" >Novo Vídeo</h1>
          <p className="text-uppercase h5 fw-light">Complete o formulário para criar um novo card de vídeo</p>
        </section>
        <section className="container-md">
          <hr />
          <h1 className="h1">Criar Card</h1>
          <hr />
          <br />
          <form>
            <div className="row mb-5">
              <div className="col-xl-6">
                <label htmlFor="titulo" className="form-label">Título</label>
                <input type="text" className="form-control form-control-lg" id="titulo" placeholder="Insira o título" />
              </div>
              <div className="col-xl-6">
              <label htmlFor="categoria" className="form-label">Categoria</label>
              <select name="categoria" id="categoria" defaultValue={"0"} className="form-select form-select-lg" aria-label="Select de categoria">
                <option disabled value="0">Selecione uma categoria</option>
                <option value="frontend">Front end</option>
                <option value="backend">Back end</option>
                <option value="mobile">Mobile</option>
              </select>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-xl-6">
                <label htmlFor="imagem" className="form-label">Imagem</label>
                <input type="text" className="form-control form-control-lg" id="imagem" placeholder="Insira o link da imagem" />
              </div>
              <div className="col-xl-6">
                <label htmlFor="video" className="form-label">Védeo</label>
                <input type="text" className="form-control form-control-lg" id="video" placeholder="Insira o link do vídeo" />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-xl-6">
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <textarea name="descricao" id="descricao" className="form-control" rows={5}></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 d-flex gap-4">
                <button className="btn btn-outline-primary btn-lg px-4 text-uppercase fw-bold text-white" type="submit">Guardar</button>
                <button className="btn btn-outline-light btn-lg px-4 text-uppercase fw-bold" type="reset">Limpar</button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}