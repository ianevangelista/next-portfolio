import getDifferenceDates from "./date-difference";

interface Experience {
    title: string;
    employer: string;
    duration: string;
}

const fremtindStartDate = new Date(2021, 5);
const fremtindEndDate = new Date(2021, 7);

const infiniwellStartDate = new Date(2020, 8);
const infiniwellEndDate = new Date(2021, 4);

const Experiences: Experience[] = [
    {
        title: "Summer internship",
        employer: "Fremtind",
        duration: getDifferenceDates(fremtindStartDate, fremtindEndDate),
    },
    {
        title: "Bachelor's assignment",
        employer: "Infiniwell",
        duration: getDifferenceDates(infiniwellStartDate, infiniwellEndDate),
    },
];
export default Experiences;
