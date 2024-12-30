class Time {
   static CalcTimeLapse = (utc) => {
      let timelapse = ""
      const currentTime = new Date();
      const currentTimeMillis = new Date().getTime(); 
      const currentTimeMinutes = Math.floor(currentTimeMillis / 60000);
      const timezoneOffestMinutes = currentTime.getTimezoneOffset();
      const currentZoneMinutes = currentTimeMinutes - timezoneOffestMinutes;
      
      const postTime = new Date(utc);
      const postTimeMillis = postTime.getTime(); 
      const postTimeMinutes = Math.floor(postTimeMillis / 60000);
      const postZoneMinutes = postTimeMinutes - timezoneOffestMinutes;
      let timeDifference = currentZoneMinutes - postZoneMinutes;

      // if mins is 1 or less than then call transform to now
      if (timeDifference <= 1) timelapse = "now";

      // if mins is less than 60 then call transform to mins
      if (timeDifference < 60) timelapse = `${timeDifference} Minutes Ago.`;

      // if mins is more than 60 but less than 1440 then transform to hours
      if (timeDifference > 60 && timeDifference < 1440) timelapse = this.transformToHours(timeDifference);
      
      // if mins is 1440 or more but less than 40,320 then call transform to days
      if (timeDifference >= 1140 && timeDifference < 40320) timelapse = this.transformToDays(timeDifference);
      
      // if mins is or more than 40,320 then parse date only
      if (timeDifference > 40320) timelapse = this.transformToDateTimestamp(postZoneMinutes)

      return timelapse;
   }
   
   static transformToHours = (mins) => {
      let timelapseString = "";
      const hours = mins / 60;
      const floored = Math.floor(hours);

      if (floored === 1) {
         timelapseString = "1 Hour Ago."
      } else {
         timelapseString = `${floored} Hours Ago.`
      }

      return timelapseString;
   };

   static transformToDays = (mins) => {
      let timelapseString = "";
      const days = mins / 1440;
      const floored = Math.floor(days);

      if (floored === 1) {
         timelapseString = "1 Day Ago."
      } else {
         timelapseString = `${floored} Days Ago.`
      }

      return timelapseString;
   };

   static transformToDateTimestamp = (mins) => {
      let timelapseString = "";
      const milliseconds = mins * 60 * 1000;
      timelapseString = new Date(milliseconds).toLocaleDateString();
      
      return timelapseString;
   };
}

export default Time;