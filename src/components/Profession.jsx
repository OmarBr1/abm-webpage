import React from "react";
import "./Professions.css";
import Card from "./Card";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsBuilding } from "react-icons/bs";
import { MdOutlinePeople } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { FiBriefcase } from "react-icons/fi";

const Profession = () => {
  return (
    <section id="professions" className="profession-section">
      <div className="container">
        <div className="profession-content">
          <div className="profile-info">
            <h2 className="section-title">Profil Recherché</h2>
            <p className="section-subtitle">
              Pour accompagner notre développement, ABM BeeVenom recherche des
              partenaires et talents engagés qui partagent nos valeurs et notre
              vision d'une apiculture innovante et durable.
            </p>

            <div className="join-box">
              <h3>Participez à l'aventure</h3>
              <p>
                N'hésitez pas à rejoindre l'aventure ABM BeeVenom et à
                contribuer avec nous à l'avenir de l'apiculture innovante et
                responsable.
              </p>
              <a href="#contact" className="btn">
                Contactez-nous
              </a>
            </div>
          </div>

          <div className="profile-list">
            <div className="cards-grid">
              <Card
                title="Apiculteurs"
                descr="Souhaitant diversifier leur activité par l'extraction de venin d'abeille."
                icon={<MdOutlinePeople />}
              />
              <Card
                title="Distributeurs et commerciaux"
                descr="Passionnés par les produits de la ruche et leurs applications."
                icon={<FiBriefcase />}
              />
              <Card
                title="Automaticiens, ingénieurs et développeurs"
                descr="Pour améliorer nos solutions technologiques innovantes."
                icon={<RiGraduationCapLine />}
              />
              <Card
                title="Partenaires académiques et scientifiques"
                descr="Pour renforcer notre expertise et nos innovations."
                icon={<BsBuilding />}
              />
              <Card
                title="Investisseurs"
                descr="Souhaitant contribuer à structurer la filière du venin d'abeille en Algérie et à l'international."
                icon={<SlBadge />}
              />
            </div>

            <div className="policies">
              <h3>Nos politiques internes</h3>
              <div className="policy-grid">
                <div className="policy-card">
                  <h4>Politique Qualité</h4>
                  <p>
                    Garantir des produits conformes aux normes internationales.
                  </p>
                </div>
                <div className="policy-card">
                  <h4>Politique Environnementale</h4>
                  <p>
                    Réduire notre impact écologique par des pratiques
                    responsables et respectueuses des abeilles, de
                    l'environnement et des consommateurs.
                  </p>
                </div>
                <div className="policy-card">
                  <h4>Politique Sociale</h4>
                  <p>Valoriser le capital humain et la formation continue.</p>
                </div>
                <div className="policy-card">
                  <h4>Politique Économique</h4>
                  <p>
                    Promouvoir un modèle rentable, local et durable au service
                    des apiculteurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profession;
