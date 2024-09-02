import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";
import "./about.css";

export function About() {
  return (
    <>
      <Nav />
      <section className="about">
        <main className="about-container">
          <h4 className="text-center">About Section</h4>
        </main>
      </section>
      <Footer />
    </>
  );
}
