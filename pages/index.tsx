import type { NextPage } from "next";
import Head from "next/head";

import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { Loader } from "@fremtind/jkl-loader-react";
import { NavLink } from "@fremtind/jkl-core";

import { Wrapper } from "../components/wrapper/Wrapper";

// @ts-ignore
import Typist from "react-typist";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [nextPage, setNextPage] = useState<string>("");

    const history = useHistory();
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                history.push("/" + nextPage);
            }, 4000);

            return () => {
                clearTimeout(timer);
            };
        } else {
            isMounted.current = true;
        }
    }, [isLoading, history, nextPage]);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta
                    property="og:image"
                    content="https://ianevangelista.no/preview.jpg"
                />
                <meta
                    name="description"
                    content="Ian Evangelista | Portfolio. Student at Norwegian University of Science and Technology in Trondheim, Norway and currently studying Computer Science"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="./apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="./favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="./favicon-16x16.png"
                />
                <link rel="manifest" href="./site.webmanifest" />

                <title>Ian Evangelista | Portfolio</title>
            </Head>

            <Wrapper compactAutoHeight>
                <div className={styles["home__title"]}>
                    <Typist
                        cursor={{
                            show: false,
                        }}
                    >
                        <p className="jkl-title">Hi, i am Ian</p>
                        <Typist.Delay ms={500} />
                        <br />
                        <p className="jkl-body">and welcome to my porfolio</p>
                        <div className="jkl-layout-spacing--medium-top">
                            <Typist.Delay ms={500} />
                            <br />
                            <p className="jkl-body">
                                <NavLink
                                    className={styles["home__link"]}
                                    onClick={() => {
                                        setIsLoading(true);
                                        setNextPage("about");
                                    }}
                                >
                                    Get to know me more
                                </NavLink>
                            </p>
                            <Typist.Delay ms={500} />
                            <br />
                            <p className="jkl-body">
                                <NavLink
                                    className={styles["home__link"]}
                                    onClick={() => {
                                        setIsLoading(true);
                                        setNextPage("projects");
                                    }}
                                >
                                    View some of my projects
                                </NavLink>
                            </p>
                        </div>
                    </Typist>
                    {isLoading && (
                        <Loader
                            className="jkl-layout-spacing--small-top"
                            textDescription="Loading"
                            negative
                        />
                    )}
                </div>
            </Wrapper>
        </>
    );
};

export default Home;
