import { CardGroup } from "react-bootstrap";
import SkillsGrid from "./SkillsGrid";
import SkillCard from "./SkillCard";
import Skills from '../../util/Skills.json'

type Skill = {
    title: string;
    description: string;
    img: string;
    alt: string;
    category: string;
};
type BodyProps = {
    selectedCategory: string;
    typedText: string;
}
const AllSkills: React.FC<BodyProps> = ({ selectedCategory, typedText }) => {
    const filteredSkills: Skill[] = Skills.skills.filter((skill: Skill) => {
        if (typedText) {
            return skill.title.toLowerCase().includes(typedText.toLowerCase()) ||
                skill.category.toLowerCase().includes(typedText.toLowerCase());
        }
        else {
            if (selectedCategory === "All") {
                return Skills.skills
            }
            return selectedCategory ? (skill.category === selectedCategory) : Skills.skills;
        }

    });
    return (
        <div style={{ backgroundColor: '#262E3B' }}>
            <CardGroup>
                <SkillsGrid>
                    {filteredSkills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            description={skill.description}
                            img={skill.img}
                            alt={skill.alt}
                        />
                    ))}
                </SkillsGrid>
            </CardGroup>
        </div>
    );
}

export default AllSkills