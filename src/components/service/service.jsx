import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";
import "./service.css";

export function Service() {
  return (
    <>
      <Nav />
      <section className="service">
        <main className="service-container">
          <h4 className="text-center">Service cards</h4>
        </main>
      </section>
      <Footer />
    </>
  );
}
