
export const asset = (folder: string, name: string) => {
    return `/assets/${folder}/${name}`;
}

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

export const convertTimeToSeconds = (time: string) => {
    if(!time) return 0
    const splitTime = time.split(':');
    const hr = Number(splitTime[0]);
    const min = Number(splitTime[1]);

    const cummSec = (hr * 60 * 60) + (min * 60)
    return cummSec
}

export const convertSecondsToTime = (seconds: number) => {
    if (!seconds) return ''
    const hr = (Math.floor(Number(seconds) / (60 * 60))).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const min = ((Math.floor(seconds / 60) % 60 )).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    return hr + ':' + min
}

export const getCurrentTimeZoneInSeconds = () => {
    const date = new Date();
    return (-1 * date.getTimezoneOffset() * 60)
}