import styles from "./Header.module.scss";
import Link from "next/link";

export const Header = () => {
    return (
        <div className={styles["header"]}>
            <Link href="/">
                <a className={styles["header__title"]}>Portfolio</a>
            </Link>
            <div className={styles["header__links"]}>
                <Link href="/About">
                    <a className={styles["header__link"]}> About</a>
                </Link>
                <Link href="/Projects">
                    <a className={styles["header__link"]}> Projects</a>
                </Link>
                <Link href="/cv.pdf">
                    <a target="_blank" className={styles["header__link"]}>
                        Curriculum Vitae
                    </a>
                </Link>
            </div>
        </div>
    );
};
