import BarraDeNavegacao from "@components/BarraDeNavegacao";
import Banner from "../../components/Banner";
import "./styles.scss";
import { useLoaderData } from "react-router-dom";
import ListaDeCards from "../../components/ListaDeCards";

function Home() {
  const videos = useLoaderData();

  return (
    <>
      <header>
        <BarraDeNavegacao />
      </header>
      <main className="container-fluid px-0">
        {videos && <Banner video={videos[0]} />}
        <section className="container-fluid px-xl-5 px-md-5 px-sm-5">
          {videos && (
            <>
            <ListaDeCards videos={videos} categoria='Front end' />
            <ListaDeCards videos={videos} categoria='Back end' />
            <ListaDeCards videos={videos} categoria='Mobile' />
            </>
            )}
        </section>
      </main>
      {/* <footer className="mt-5 d-flex justify-content-center align-items-center">
        <img src="/images/logo.png" alt="Logo Aluraflix" />
      </footer> */}
    </>
  );
}

export default Home;
