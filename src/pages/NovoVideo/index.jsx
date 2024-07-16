import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import "./styles.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const schemaDoFormulario = Yup.object().shape({
  titulo: Yup.string()
    .min(3, "Título deve possuir ao menos 3 caracteres")
    .required("Título é obrigatório"),
  categoria: Yup.string()
    .oneOf(["Front end", "Back end", "Mobile"], 'Precisa ser "Front end", "Back end" ou "Mobile"')
    .required("Categoria é obrigatório"),
  imagem: Yup.string()
    .url("Link da imagem precisa ser uma URL válida")
    .required("Link da imagem é orbigatório"),
  video: Yup.string()
    .url("Link do vídeo precisa ser uma URL válida")
    .required("Link do vídeo é obrigatório"),
  descricao: Yup.string().optional(),
});

export default function NovoVideo() {
  const formulario = useFormik({
    initialValues: {
      titulo: "",
      categoria: 0,
      imagem: "",
      video: "",
      descricao: "",
    },
    onSubmit: (dadosDoFormulario) => {
      console.log(dadosDoFormulario);
    },
    validationSchema: schemaDoFormulario,
  });

  return (
    <>
      <header>
        <BarraDeNavegacao />
      </header>
      <main className="container-fluid h-100 px-0">
        <section className="titulo">
          <h1 className="display-5 text-uppercase fw-bold">Novo Vídeo</h1>
          <p className="text-uppercase h5 fw-light">
            Complete o formulário para criar um novo card de vídeo
          </p>
        </section>
        <section className="container-md">
          <hr />
          <h1 className="h1">Criar Card</h1>
          <hr />
          <br />
          <form noValidate>
            <div className="row mb-5">
              <div className="col-xl-6">
                <label htmlFor="titulo" className="form-label">
                  Título
                </label>
                <input
                  type="text"
                  className={`form-control form-control-lg ${
                    formulario.dirty && formulario.errors.titulo
                      ? "is-invalid"
                      : ""
                  } ${
                    formulario.dirty && !formulario.errors.titulo
                      ? "is-valid"
                      : ""
                  }`}
                  id="titulo"
                  placeholder="Insira o título"
                  onChange={formulario.handleChange}
                  value={formulario.values.titulo}
                />
                <div
                  className={`invalid-feedback ${
                    formulario.touched && formulario.errors.titulo
                      ? ""
                      : "invisible"
                  }`}
                >
                  {formulario.errors.titulo}
                </div>
              </div>
              <div className="col-xl-6">
                <label htmlFor="categoria" className="form-label">
                  Categoria
                </label>
                <select
                  name="categoria"
                  id="categoria"
                  className={`form-select form-select-lg ${
                    formulario.dirty && formulario.errors.categoria
                      ? "is-invalid"
                      : ""
                  } ${
                    formulario.dirty && !formulario.errors.categoria
                      ? "is-valid"
                      : ""
                  }`}
                  aria-label="Select de categoria"
                  onChange={formulario.handleChange}
                  value={formulario.values.categoria}
                >
                  <option disabled value="0">
                    Selecione uma categoria
                  </option>
                  <option value="Front end">Front end</option>
                  <option value="Back end">Back end</option>
                  <option value="Mobile">Mobile</option>
                </select>
                <div
                  className={`invalid-feedback ${
                    formulario.touched && formulario.errors.categoria
                      ? ""
                      : "invisible"
                  }`}
                >
                  {formulario.errors.categoria}
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-xl-6">
                <label htmlFor="imagem" className="form-label">
                  Imagem
                </label>
                <input
                  type="text"
                  className={`form-control form-control-lg ${
                    formulario.dirty && formulario.errors.imagem
                      ? "is-invalid"
                      : ""
                  } ${
                    formulario.dirty && !formulario.errors.imagem
                      ? "is-valid"
                      : ""
                  }`}
                  id="imagem"
                  placeholder="Insira o link da imagem"
                  onChange={formulario.handleChange}
                  value={formulario.values.imagem}
                />
                <div
                  className={`invalid-feedback ${
                    formulario.touched && formulario.errors.imagem
                      ? ""
                      : "invisible"
                  }`}
                >
                  {formulario.errors.imagem}
                </div>
              </div>
              <div className="col-xl-6">
                <label htmlFor="video" className="form-label">
                  Vídeo
                </label>
                <input
                  type="text"
                  className={`form-control form-control-lg ${
                    formulario.dirty && formulario.errors.video
                      ? "is-invalid"
                      : ""
                  } ${
                    formulario.dirty && !formulario.errors.video
                      ? "is-valid"
                      : ""
                  }`}
                  id="video"
                  placeholder="Insira o link do vídeo"
                  onChange={formulario.handleChange}
                  value={formulario.values.video}
                />
                <div
                  className={`invalid-feedback ${
                    formulario.touched && formulario.errors.video
                      ? ""
                      : "invisible"
                  }`}
                >
                  {formulario.errors.video}
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-xl-6">
                <label htmlFor="descricao" className="form-label">
                  Descrição
                </label>
                <textarea
                  name="descricao"
                  id="descricao"
                  className="form-control"
                  rows={5}
                  onChange={formulario.handleChange}
                  value={formulario.values.descricao}
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 d-flex gap-4">
                <button
                  className="btn btn-outline-primary btn-lg px-4 text-uppercase fw-bold text-white"
                  onClick={formulario.handleSubmit}
                  type="button"
                >
                  Guardar
                </button>
                <button
                  className="btn btn-outline-light btn-lg px-4 text-uppercase fw-bold"
                  onClick={formulario.handleReset}
                  type="button"
                >
                  Limpar
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
