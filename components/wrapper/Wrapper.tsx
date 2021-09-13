import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { Header } from "../header/Header";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Wrapper.module.scss";

interface Props {
    children: ReactNode;
    animation?: boolean;
    moreContent?: boolean;
    compactAutoHeight?: boolean;
    darkMode?: boolean;
}
export const Wrapper = ({
    children,
    animation,
    moreContent,
    compactAutoHeight,
    darkMode,
}: Props) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.screen.width);
    }, []);

    return (
        <div
            className={classNames(styles["wrapper__background"], {
                [styles["wrapper__background--dark-mode"]]: darkMode,
                [styles["wrapper__background--more-content"]]: moreContent,
                [styles["wrapper__background--more-content-compact"]]:
                    width < 900 && !compactAutoHeight,
                [styles["wrapper__background--more-content-compact-auto"]]:
                    width < 900 && compactAutoHeight,
            })}
        >
            <Header />
            {animation && (
                <AnimatePresence>
                    <motion.div
                        className={styles["wrapper__content"]}
                        transition={{ duration: 2.5 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            )}
            {!animation && (
                <div className={styles["wrapper__content"]}>{children}</div>
            )}
        </div>
    );
};
