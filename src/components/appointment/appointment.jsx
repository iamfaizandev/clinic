import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";
import "./appointment.css";

export function Appointment() {
  return (
    <>
      <Nav />
      <section className="appointment">
        <main className="appointment-container">
          <h4 className="text-center">Appointment Section</h4>
        </main>
      </section>
      <Footer />
    </>
  );
}
