import { Wrapper } from "../components/wrapper/Wrapper";
import MyProjects from "../utils/projects/project-text";
import ProjectCard from "../components/projects/ProjectCard";
import styles from "../styles/Projects.module.scss";

const Projects = () => {
    return (
        <Wrapper animation moreContent>
            <div className={styles["projects"]}>
                <div className={styles["projects__timeline--container"]}>
                    <p className={styles["projects__text"]}>Now</p>
                    <div className={styles["projects__timeline--line"]} />
                    <p className={styles["projects__text"]}>Some time ago</p>
                </div>
                <div className={styles["projects__projects--column"]}>
                    {MyProjects.map((p, i) => {
                        return (
                            <ProjectCard
                                inverted={(i + 1) % 2 !== 1}
                                key={p.id}
                                project={p}
                            />
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
};
export default Projects;
