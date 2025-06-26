
export const LocalDateConvart = (item) => {

    const utcDate = new Date(item?.createdAt);
    const datestring = utcDate.toLocaleDateString();
    const localDate = datestring;
    return localDate;

}

export const LocalTimeConvart = (item) => {

    const utcDate = new Date(item?.createdAt);
    const timeString = utcDate.toLocaleTimeString();
    const localDate = timeString;
    return localDate;

}