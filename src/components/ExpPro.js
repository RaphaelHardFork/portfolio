import "bootstrap/dist/css/bootstrap.css"
import Skills from './Skills'

const ExpPro = () => {
  return <section className="shadow rounded-top mb-5">
    <div className="titre">
      <h2>Expériences professionnelles</h2>
    </div>
    <article className="content container">
      <h3 className="py-2">IFSTTAR <i>(Aujourd'hui Université Gustave Eiffel)</i></h3>
      <div className="article-info">
        <p>Ingénieur d'étude</p>
        <p>2018-2020</p>
      </div>
      <p className="description">Etude sur le béton de chanvre : Identification des molécules
      impliqué dans la prise du ciment, conduite de projet, réalisation
      d’une bibliographie et d’un plan d’expérimentation, gestion des
            données, présentation des travaux lors de colloque.</p>
      <p className="details">Poste dans le cadre d'une thèse à l'Université Paris-Est</p>
      <Skills skillsTab={["Chimie analytique", "Conduite de projet", "Bibliographie", "Rédaction", "Présentation", "Autonomie"]} />
    </article>
    <article className="content container">
      <h3 className="py-2">Neilan Laboratory of Microbial and Molecular Diversity<i>(Australie)</i></h3>
      <div className="article-info">
        <p>Stage de recherche</p>
        <p>2018</p>
      </div>
      <p className="description">Caractérisation et identification de molécule, identification et
      modélisation de voies métaboliques, transferts de gènes sur
            bactéries.</p>
      <Skills skillsTab={["Chimie analytique", "Biologie moléculaire", "Modélisation de voies métaboliques", "Bibliographie", "Rédaction", "Présentation", "Autonomie"]} />
    </article>
    <article className="content container">
      <h3 className="py-2">Laboratoire d'Ecologie Microbienne Lyon</h3>
      <div className="article-info">
        <p>Stage de recherche</p>
        <p>2017</p>
      </div>
      <p className="description">Caractérisation et identification de molécule, identification et
      modélisation de voies métaboliques, transferts de gènes sur
            bactéries.</p>
      <Skills skillsTab={["Biologie moléculaire", "Bio-informatique", "Extraction ADN", "Amplification PCR", "Bibliographie",]} />
    </article>
  </section>
}


export default ExpPro