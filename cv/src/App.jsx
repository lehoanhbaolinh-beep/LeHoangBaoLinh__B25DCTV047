import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import SkillList from "./components/SkillList.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

const skills = ["HTML", "CSS", "JavaScript", "React"];

const projects = [
  { name: "Trang giới thiệu bản thân", description: "Viết bằng HTML và CSS." },
  { name: "To-do List", description: "Thêm và xóa công việc bằng JavaScript." },
  { name: "Virtual Calculator", description: "Máy tính viết bằng React." },
];

function App() {
  return (
    <div className="cv">
      <Header name="Nguyễn Văn A" job="Sinh viên Công nghệ thông tin" />

      <Section title="Giới thiệu">
        <p>Mình là sinh viên năm nhất, đang học lập trình web.</p>
      </Section>

      <Section title="Kỹ năng">
        <SkillList skills={skills} />
      </Section>

      <Section title="Dự án">
        {projects.map((p) => (
          <ProjectCard key={p.name} name={p.name} description={p.description} />
        ))}
      </Section>
    </div>
  );
}

export default App;
