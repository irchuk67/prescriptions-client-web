const addZeroToMontOrDay = (str) => {
    if(str.length < 2){
        return `0${str}`
    }
    return str
}

const addZeroToYear = (str) => {
    while(str.length < 4){
        str = `0${str}`
    }
    return str
}
const formatDate = (date) => {
    const startDate = new Date(date);
    const year = startDate.getFullYear().toString();
    const month = startDate.getMonth().toString();
    const day = startDate.getDate().toString();

    const formattedDate =
        `${addZeroToYear(year)}-${addZeroToMontOrDay(month)}-${addZeroToMontOrDay(day)}`;
    return formattedDate
}

export {formatDate}