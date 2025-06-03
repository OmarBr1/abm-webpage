import Card from "./Card";

import "./Valeurs.css";
import { LuSettings } from "react-icons/lu";
import { CgBee } from "react-icons/cg";
import { BiCheckSquare } from "react-icons/bi";
import { AiOutlineFlag } from "react-icons/ai";
import { LiaHandshake } from "react-icons/lia";

const Valeurs = () => {
  return (
    <section id="valeurs">
      <div id="valeurs">
        <div className="head-cont">
          <h2>Nos Valeurs</h2>
          <p>
            Nos valeurs fondamentales guident chacune de nos actions et
            décisions pour une apiculture responsable et innovante.
          </p>
          <div className="vals-cont">
            <div className="st-row">
              <Card
                title="Protection des abeilles"
                descr="Bien-être des abeilles au cœur de chaque innovation."
                icon={<CgBee />}
              />
              <Card
                title="Technologie responsable"
                descr="Solutions technologiques durables et respectueuses de l'environnement."
                icon={<LuSettings />}
              />

              <Card
                title="Qualité et sécurité"
                descr="Produits sûrs, testés et certifiés pour une qualité garantie."
                icon={<BiCheckSquare />}
              />
            </div>
            <div className="nd-row">
              <Card
                title="Fierté nationales"
                descr="Fierté d'une production 100 % algérienne."
                icon={<AiOutlineFlag />}
              />

              <Card
                title="Engagement apicole"
                descr="Soutien et accompagnement des apiculteurs et acteurs du secteur."
                icon={<LiaHandshake />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Valeurs;
