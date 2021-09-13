export interface Project {
    id: string;
    title?: string;
    year?: string;
    description?: string;
    images?: string[];
    github?: string;
    path?: string;
    moreDescription?: string;
}

const MyProjects: Project[] = [
    {
        id: "portfolio",
        title: "Portfolio",
        year: "2021",
        description:
            "First of all this website to display some of my recent projects.",
        github: "https://github.com/ianevangelista/portfolio-remade",
        path: "portfolio",
        moreDescription:
            "A website to show you a litte about myself and what I have been up to. I wanted this website to be simple and clean so that it wouldn´t overwhelm the reader. Deployed with Next.js",
    },
    {
        id: "bachelor",
        title: "Bachelor",
        year: "2021",
        path: "bachelor",
        description:
            "An app for healthcare professionals to remote monitor patients.",
        moreDescription:
            "Infiniwell is an AI company that three other students and I worked with during our bachelor´s assignment. Their plan is to contribute to digitalization of health care by automating patient diagnostics with the help of artificial intelligence and patient monitors that streams data directly to healthcare profressionals. In our thesis we described our development of a mobile application for Infiniwell. The mobile application recieves data from patient monitors through a cloud-based service. Infiniwell's goal is to streamline healthcare professionals workday by decreasing time spent on administrative tasks, and assist in clinical desicion making. To reach this goal, healthcare professionals need a useful and user friendly mobile application.",
        // images: [
        //     `/Infiniwell/IMG_4010.jpg`,
        //     `/Infiniwell/IMG_4011.jpg`,
        //     `/Infiniwell/IMG_4012.jpg`,
        //     `/Infiniwell/IMG_4013.jpg`,
        //     `/Infiniwell/IMG_4014.jpg`,
        //     `/Infiniwell/IMG_4015.jpg`,
        //     `/Infiniwell/IMG_4016.jpg`,
        //     `/Infiniwell/IMG_4017.jpg`,
        //     `/Infiniwell/IMG_4018.jpg`,
        //     `/Infiniwell/IMG_4019.jpg`,
        //     `/Infiniwell/IMG_4020.jpg`,
        //     `/Infiniwell/IMG_4021.jpg`,
        //     `/Infiniwell/IMG_4022.jpg`,
        //     `/Infiniwell/IMG_4023.jpg`,
        //     `/Infiniwell/IMG_4024.jpg`,
        //     `/Infiniwell/IMG_4025.jpg`,
        //     `/Infiniwell/IMG_4026.jpg`,
        //     `/Infiniwell/IMG_4027.jpg`,
        //     `/Infiniwell/IMG_4028.jpg`,
        //     `/Infiniwell/IMG_4029.jpg`,
        //     `/Infiniwell/IMG_4030.jpg`,
        //     `/Infiniwell/IMG_4031.jpg`,
        //     `/Infiniwell/IMG_4032.jpg`,
        //     `/Infiniwell/IMG_4033.jpg`,
        //     `/Infiniwell/IMG_4034.jpg`,
        //     `/Infiniwell/IMG_4035.jpg`,
        //     `/Infiniwell/IMG_4036.jpg`,
        //     `/Infiniwell/IMG_4037.jpg`,
        //     `/Infiniwell/IMG_4038.jpg`,
        //     `/Infiniwell/IMG_4039.jpg`,
        //     `/Infiniwell/IMG_4040.jpg`,
        // ],
    },
    {
        id: "gk",
        title: "GK",
        year: "2021",
        path: "gk",
        description:
            "A website for my friends and I to display what movies we want to watch for the next movie night.",
        github: "https://github.com/gkonsulting/gk-client",
        moreDescription:
            "A fun little side-project I developed during the pandemic. As I lived with three other classmates and the only company we had was each other, we tended to watch a lot of movies together. As we never could agree to a movie, I decided to create this website to display all our movie wishes. It uses open APIs to show a trailer of the movie typed in and to get a score of the movie somewhat close to IMDB. Each logged-in user can vote up or down for a movie. I also experimented with this website by using GraphQL with React, TypeScript and Next.js for server-side-rendering.",
        images: [`/GK/movies.png`, `/GK/addmovie.png`, `/GK/movie.png`],
    },
    {
        id: "harmoni",
        title: "Harmoni",
        year: "2020",
        path: "harmoni",
        description:
            "A system for event planning. A user can create an event and organise what everything from artist to artists´ riders.",
        github: "https://github.com/ianevangelista/Harmoni",
        images: [
            `/Harmoni/harmoni.png`,
            `/Harmoni/profile.png`,
            `/Harmoni/event.png`,
            `/Harmoni/events.png`,
            `/Harmoni/calendar.png`,
        ],
        moreDescription:
            "Team scrum-project in Software Engineering 2 with web applications. The team consisted of 10 students and we worked with a Scrum-master and a product owner. The main task was to develope a system for event planning. A demo is available by the use of Firebase and Heroku.",
    },
    {
        id: "community-news",
        title: "Community News",
        year: "2019",
        description:
            "My first ever full-stack web-project. Not the greatest visuals, however this project shows how much I have evolved and learned throughout the years.",
        github: "https://github.com/ianevangelista/Harmoni",
        path: "community-news",
        moreDescription:
            "Even though this was not my finest work, it certainly was my first work! I really enjoyed creating this fictional news page as it taught me how to build a full-stack project from scratch.",
        images: [
            `/News/news.jpg`,
            `/News/article.jpg`,
            `/News/article2.jpg`,
            `/News/comments.jpg`,
            `/News/category.jpg`,
            `/News/register.jpg`,
        ],
    },
];

export default MyProjects;
