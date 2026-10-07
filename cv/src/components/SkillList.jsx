function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li className="skill" key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default SkillList;
