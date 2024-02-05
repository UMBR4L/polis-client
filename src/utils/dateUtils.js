// dateUtils.js

export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    const day = date.getDate();
    const formattedDate = date
      .toLocaleDateString(undefined, options)
      .replace(day, day + getDaySuffix(day));
    return formattedDate;
  };
  
  export function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  