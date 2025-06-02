import Card from "./Card";
import "./Missions.css";

import { LuChartPie } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLeaf } from "react-icons/lu";
import { GoGlobe } from "react-icons/go";

const Missions = () => {
  return (
    <section id="missions">
      <div className="miss-cont">
        <div className="miss-head">
          <h2>Nos Missions</h2>
          <p>
            Notre engagement pour une apiculture innovante, durable, rentable et
            responsable se traduit par des missions claires.
          </p>
        </div>
        <div className="cards-cont">
          <Card
            title="Moderniser l'apiculture algérienne"
            descr="Intégrer la technologie et l'innovation pour améliorer les pratiques apicoles."
            icon={<IoSettingsOutline />}
          />
          <Card
            title="Valoriser les produits de la ruche"
            descr="Notamment le venin d'abeille, sur les marchés nationaux et internationaux."
            icon={<LuChartPie />}
          />
          <Card
            title="Contribuer à la préservation des abeilles"
            descr="Participer activement à la protection des populations d'abeilles et de la biodiversité."
            icon={<LuLeaf />}
          />
          <Card
            title="Offrir des solutions éthiques et rentables"
            descr="Proposer aux apiculteurs des méthodes respectueuses et économiquement viables."
            icon={<GoGlobe />}
          />
        </div>
        <div className="extra-card">
          <p>
            <span>N'hésitez pas à rejoindre l'aventure ABM BeeVenom</span> et à
            contribuer avec nous à l'avenir de l'apiculture innovante et
            responsable.
          </p>
          <div
            className="heighlighted"
            style={{ color: "orange", margin: "20px auto" }}
          >
            Ensemble, donnons de la valeur à chaque battement d'aile.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missions;
