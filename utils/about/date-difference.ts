const isToday = (someDate: Date) => {
    const today = new Date();
    return (
        someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear()
    );
};
const getDifferenceDates = (dt1: Date, dt2: Date) => {
    let end;
    if (!isToday(dt2)) {
        end =
            dt2.toLocaleString("default", { month: "short" }) +
            " " +
            dt2.getFullYear();
    } else {
        end = "now";
    }

    const duration =
        dt1.toLocaleString("default", { month: "short" }) +
        " " +
        dt1.getFullYear() +
        " -  " +
        end;
    return duration;
};
export default getDifferenceDates;
