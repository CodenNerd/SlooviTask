export const getDateInYYYY_MM_DD = () => {

    const date = new Date();
    const aaaa = date.getUTCFullYear();
    let gg: any = date.getUTCDate();
    let mm: any = (date.getUTCMonth() + 1);

    if (gg < 10)
        gg = "0" + gg;

    if (mm < 10)
        mm = "0" + mm;

    const cur_day = aaaa + "-" + mm + "-" + gg;

    return cur_day;

}