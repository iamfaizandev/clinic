import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";
import "./contact.css";

export function Contact() {
  return (
    <>
      <Nav />
      <section className="contact">
        <main className="contact-container">
          <h3 className="text-center">
            Contact information: Your phone number, email address, and business
            hours
            <br />
            Contact form: A form that allows visitors to send a query or
            schedule an appointment Button <br />
            Map and directions: A map and directions to your dental
            <br />
            FAQs: Frequently asked questions to answer common questions
          </h3>
        </main>
      </section>
      <Footer />
    </>
  );
}
