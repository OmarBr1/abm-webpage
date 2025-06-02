import Card from "./Card";
import "./Services.css";
import { LucideLeaf } from "lucide-react";
import { PiGraduationCap } from "react-icons/pi";
import { LuBeaker } from "react-icons/lu";
import { GoGoal } from "react-icons/go";

const Services = () => {
  return (
    <section id="services">
      <div className="main">
        <h2>Secteur d'Activité</h2>
        <div className="descrpt-p">
          <p>
            Découvrez nos services d'excellence dans le domaine de l'apiculture
            et de la valorisation du venin d'abeille
          </p>
        </div>
        <div className="cards-cont">
          <Card
            title="Extraction et valorisation du venin d'abeille"
            descr="Solutions technologiques avancées pour l'extraction et la valorisation du venin d'abeille, garantissant un produit pur et de haute qualité."
            icon={<LuBeaker />}
          />

          <Card
            title="Développement de solutions technologiques"
            descr="Création de technologies innovantes pour une apiculture durable, respectueuse des abeilles et de l'environnement."
            icon={<LucideLeaf />}
          />

          <Card
            title="Savoir-faire et innovation"
            descr="Accompagnement et formation des apiculteurs aux techniques modernes d'extraction et de valorisation du venin d'abeille"
            icon={<PiGraduationCap />}
          />

          <Card
            title="Service après-vente "
            descr="Assistance, maintenance, mises à jour, suivi client et amélioration continue"
            icon={<GoGoal />}
          />
        </div>
        <button className="rdrct-btn">
          <a href="#contact">Des attentes précises ? Parlons-en</a>
        </button>
      </div>
    </section>
  );
};

export default Services;
