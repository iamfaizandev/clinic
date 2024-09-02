import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Nav } from "../nav/nav";
import "./home.css";

export function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <section className="home">
        <main className="home-container">
          <h4 className="text-center">
            this home section, some slogan or enaging words and some about ,
            animtion scrollable all
          </h4>
        </main>
      </section>
      <Footer />
    </div>
  );
}
