const Skills = ({ skillsTab }) => {
  return <ul className="skills pb-2">
    {skillsTab.map((elem) => (
      <li key={elem}>
        <button className="text-white">{elem}</button>
      </li>
    ))}
  </ul>
}

export default Skills