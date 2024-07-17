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
      <main className="container-fluid h-100 px-0">
        {videos && <Banner video={videos[0]} />}
        <section className="container-fluid px-5">
          {videos && (
            <>
            <ListaDeCards videos={videos} categoria='Front end' />
            <ListaDeCards videos={videos} categoria='Back end' />
            <ListaDeCards videos={videos} categoria='Mobile' />
            </>
            )}
        </section>
      </main>
    </>
  );
}

export default Home;
