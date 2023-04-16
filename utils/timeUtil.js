const timeUtil = {
  convertToVietNamTime: (time) => {
    // create a new Date object from the UTC date/time string
    const utcDateTime = new Date(time);
    utcDateTime.setHours(0,0,0,0);

    // // format the Vietnam time
    const vietNamTime = utcDateTime.toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).replace(',', ' -');

    // output: "15/04/2023 - 01:00PM"
    return vietNamTime;
  },
};

export default timeUtil;
