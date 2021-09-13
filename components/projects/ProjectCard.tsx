import { Card } from "@fremtind/jkl-card-react";
import Link from "next/link";
import { Project } from "../../utils/projects/project-text";
import classNames from "classnames";
import styles from "./ProjectCard.module.scss";

interface Props {
    project: Project;
    inverted?: boolean;
}
const ProjectCard = ({ project, inverted }: Props) => {
    return (
        <div
            className={classNames(styles["project-card"], {
                [styles["project-card--spacing"]]: inverted,
            })}
        >
            <Card>
                <div className={styles["project-card__title-container"]}>
                    <p className="jkl-heading-1">{project.title}</p>
                </div>
                <p className="jkl-layout-spacing--xs-top jkl-small">
                    {project.description}
                </p>
                <div className={styles["project-card__actions-container"]}>
                    {project.github && (
                        <div className="jkl-layout-spacing--xs-top">
                            <Link href={project.github}>
                                <a className={styles["project-card__button"]}>
                                    Github
                                </a>
                            </Link>
                        </div>
                    )}
                    <div className="jkl-layout-spacing--xs-top">
                        <Link href={`/Projects/${project.path}`}>
                            <a className={styles["project-card__button"]}>
                                Read more
                            </a>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};
export default ProjectCard;
