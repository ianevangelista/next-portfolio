import getDifferenceDates from "./date-difference";

interface Education {
    study: string;
    school: string;
    duration: string;
}

const vgsStartDate = new Date(2015, 7);
const vgsEndDate = new Date(2018, 5);

const bachelorStartDate = new Date(2018, 7);
const bachelorEndDate = new Date(2021, 5);

const masterStartDate = new Date(2021, 7);
const masterEndDate = new Date();

const Educations: Education[] = [
    {
        study: "M.Sc Computer Science",
        school: "Norwegian University of Science and Technology",
        duration: getDifferenceDates(masterStartDate, masterEndDate),
    },
    {
        study: "B.Sc Computer Engineering",
        school: "Norwegian University of Science and Technology",
        duration: getDifferenceDates(bachelorStartDate, bachelorEndDate),
    },
    {
        study: "General Studies",
        school: "Asker Videregående skole",
        duration: getDifferenceDates(vgsStartDate, vgsEndDate),
    },
];

export default Educations;
