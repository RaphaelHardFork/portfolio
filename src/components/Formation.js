import "bootstrap/dist/css/bootstrap.css"
import Skills from './Skills'

const Formation = () => {
  return <section className="shadow rounded-top mb-5">
    <div className="titre">
      <h2>Formation</h2>
    </div>
    <article className="content container mb-4">
      <h3 className="py-2 display-4">Alyra, l'école Blockchain</h3>
      <div className="article-info">
        <p>Formation développeur web décentralisé</p>
        <p>2021</p>
      </div>
      <p className="description">Nous sommes passionné·e·s par la technologie, et nous travaillons avec des passionné·e·s. Nos formations sont données et créées par des expert·e·s du domaine à l’écoute et pédagogues. Nous proposons actuellement le parcours « devenez développeur blockchain et smart contracts en 10 semaines » et le parcours de « chef de projet blockchain ».</p>
      <p className="mb-0 fw-bold">Compétences principales : </p>
      <Skills skillsTab={["JavaScript", "React.js", "HTML", "CSS", "Bootstraps", "Solidity"]} />
    </article>
    <article className="content container mb-4">
      <h3 className="py-2 display-4">Université Claude Bernard Lyon 1</h3>
      <div className="article-info">
        <p>Master en Biologie Végétale</p>
        <p>2016-2018</p>
      </div>
      <p className="description">Etude de la plante au travers un large
      panel de disciplines : taxonomie,
      évolution, physiologie, génétique,
      métabolomique, biologie moléculaire,
    biochimie, écologie, …</p>
      <p className="mb-0 fw-bold">Compétences principales : </p>
      <Skills skillsTab={["Biochimie", "Génie génétique", "Taxonomie", "Chimie analytique"]} />
    </article>
    <article className="content container mb-4">
      <div className="article-info">
        <p>Licence en écologie</p>
        <p>2013-2016</p>
      </div>
      <p className="details">(Licence Biologie des organismes et des populations)</p>
      <p className="description">
        Etude des interactions entre individu et
        espèces, des modèles d’évolution,
        d’écologie et de la biodiversité,
        modélisation des dynamiques des
        gènes et des populations, biologie
    moléculaire, génétique quantitative, …</p>
      <p className="mb-0 fw-bold">Compétences principales : </p>
      <Skills skillsTab={["Biostatistiques", "Bio-informatique", "Evolution", "Modélisation", "Echantillonage", "Evaluation de la biodiversité"]} />
    </article>
  </section>
}

export default Formation
/*
  <section className="">
    <h2 className="text-center py-3">Formations</h2>
    <h3>Alyra, l'école Blockchain</h3>
    <article>
      <div className="">
        <h4>Formation développeur web décentralisé</h4>
        <h4 className="date">2021</h4>
      </div>
      <p className="skills">Compétences principales : JavaScript, CSS, HTML, React.js, ...</p>
    </article>

    <h3>Université Claude Bernard Lyon 1</h3>
    <article>
      <div className="">
        <h4>Master en Biologie Végétale</h4>
        <h4 className="date">2016 - 2018</h4>
      </div>
      <p className="skills">Compétences principales : biochimie & génie génétique</p>
      <p>Etude de la plante au travers un large
      panel de disciplines : taxonomie,
      évolution, physiologie, génétique,
      métabolomique, biologie moléculaire,
    biochimie, écologie, …</p>

      <div className="">
        <h4>Licence en écologie (biologie des organismes et des populations)</h4>
        <h4 className="date">2013 - 2016</h4>
      </div>
      <p className="skills">Compétences principales : utilisation
      d’outils biostatistique (traitement et
      acquisition), modélisation de la
      biodiversité et de l’évolution.
  </p>
      <p>Etude des interactions entre individu et
      espèces, des modèles d’évolution,
      d’écologie et de la biodiversité,
      modélisation des dynamiques des
      gènes et des populations, biologie
    moléculaire, génétique quantitative, …</p>
    </article>
  </section>
      */