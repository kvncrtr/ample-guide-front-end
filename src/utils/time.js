class Time {
   static CalcTimeLapse = (utc) => {
      let timelapse = ""
      const currentTime = new Date();
      const currentTimeMillis = new Date().getTime(); 
      const currentTimeMinutes = Math.floor(currentTimeMillis / 60000);
      const timezoneOffestMinutes = currentTime.getTimezoneOffset();
      const currentESTMinutes = currentTimeMinutes - timezoneOffestMinutes;
      
      const postTime = new Date(utc);
      const postTimeMillis = postTime.getTime(); 
      const postTimeMinutes = Math.floor(postTimeMillis / 60000);
      const postESTMinutes = postTimeMinutes - timezoneOffestMinutes;
      const timeDifference = currentESTMinutes - postESTMinutes;

      // if mins is 1 or less than then call transform to now
      // if mins is less than 60 then call transform to mins
      // if mins is more than 60 but less than 1440 then transform to hours
      // if mins is 1440 or more but less than 40,320 then call transform to days
      // if mins is or more than 40,320 then parse date only
      // return string value
   }
}

export default Time;