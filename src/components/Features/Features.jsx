import illustrationPassionate from "../../assets/home/desktop/illustration-passionate.svg";
import illustrationResourceFul from "../../assets/home/desktop/illustration-resourceful.svg";
import illustrationFriendly from "../../assets/home/desktop/illustration-friendly.svg";
import "./Features.css";
import Section from "../UI/Section/Section.jsx";
import Container from "../UI/Container/Container.jsx";

const features = [
  {
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions",
    image: illustrationPassionate,
  },
  {
    title: "Resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer clients’ needs.",
    image: illustrationResourceFul,
  },
  {
    title: "Friendly",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    image: illustrationFriendly,
  },
];

function Features() {
  return (
    <Section>
      <Container className="grid gap grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="feature grid">
            <div className="feature__image-wrapper">
              <img
                src={feature.image}
                className="feature__image"
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="feature__text-content flow text-center">
              <h2 className="feature__heading tertiary-title fs-200 uppercase letter-spacing-2">
                {feature.title}
              </h2>
              <p className="feature__text">{feature.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export default Features;
