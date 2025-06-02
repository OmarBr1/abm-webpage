import "./About.css";
import aboutImage from "../assets/bee-img.jpg";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="img-cont">
        <img src={aboutImage} alt="just-img" />
      </div>

      <div className="about-cont">
        <h2>A propos de nous</h2>
        <p>
          ABM BeeVenom, c'est bien plus qu'une entreprise d'apiculture. C'est la
          nouvelle signature de l'innovation apicole en Algérie.
        </p>

        <div className="nt-mission">
          <h4>Notre Mission</h4>
          <p>
            Nous révélons la richesse cachée de la ruche en proposant des
            solutions haute technologie pour l'extraction et la valorisation du
            venin d'abeille, un produit rare et précieux aux applications
            médicales et cosmétiques exceptionnelles.
          </p>
        </div>

        <div className="nt-expertise">
          <h4>Notre Expertise</h4>
          <p>
            Nous mettons notre savoir-faire au service des apiculteurs et des
            professionnels de la santé et du bien-être, en alliant performance,
            respect des abeilles et qualité 100% algérienne.
          </p>
        </div>
        <div className="nt-expertise">
          <h4>Notre objectif</h4>
          <p>
            Notre objectif Garantir une expérience client sans souci, renforcer
            la confiance, et maximiser la satisfaction des apiculteurs.
          </p>
        </div>

        <div className="side-span">
          <span>ABM BeeVenom, la ruche a trouvé son expert.</span>
        </div>
      </div>
    </section>
  );
};

export default About;
