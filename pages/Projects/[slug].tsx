import { TertiaryButton } from "@fremtind/jkl-button-react";
import { Link } from "@fremtind/jkl-core";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Wrapper } from "../../components/wrapper/Wrapper";
import MyProjects from "../../utils/projects/project-text";
import { Project } from "../../utils/projects/project-text";
import ImageSlideshow from "../../components/projects/ImageSlideshow";
import classNames from "classnames";
import styles from "../../styles/Project.module.scss";

const ProjectPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [project, setProject] = useState<Project>();
    const [hideImages, setHideImages] = useState<boolean>(true);
    const [animationRef] = useAnimatedHeight<HTMLDivElement>(hideImages);

    useEffect(() => {
        setProject(
            MyProjects.find((p) => {
                return p.id === slug;
            })
        );
    }, [slug]);

    return (
        <Wrapper darkMode animation compactAutoHeight>
            <div className={styles["project__title-row"]}>
                <p className={styles["project__title"]}>{project?.title}</p>
                <Link
                    className={styles["project__github"]}
                    external
                    href={project?.github}
                    target="_blank"
                >
                    Github
                </Link>
            </div>
            <div
                className={classNames(styles["project__animation-wrapper"], {
                    [styles["project__animation-wrapper--hidden"]]: !hideImages,
                })}
                ref={animationRef}
            >
                <p className={styles["project__description"]}>
                    {project?.moreDescription}
                </p>
            </div>
            {project?.images && (
                <TertiaryButton
                    className={styles["project__button"]}
                    forceCompact
                    onClick={() => setHideImages(!hideImages)}
                >
                    {hideImages ? " View images" : "Hide images"}
                </TertiaryButton>
            )}
            {!hideImages && project?.images && (
                <div className={styles["project__slideshow-container"]}>
                    <ImageSlideshow images={project?.images} />
                </div>
            )}
        </Wrapper>
    );
};
export default ProjectPage;
