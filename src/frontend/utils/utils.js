export function timeSince(timeStamp) {
  const videoTimeStamp = new Date(timeStamp);
  var now = new Date(),
    secondsPast = (now.getTime() - videoTimeStamp.getTime()) / 1000;
  if (secondsPast < 10) {
    return "few secs ago";
  }
  if (secondsPast < 60) {
    return Math.round(secondsPast) + "s ago";
  }
  if (secondsPast < 3600) {
    return Math.round(parseInt(secondsPast / 60)) + "mins ago";
  }
  if (secondsPast <= 86400) {
    return Math.round(parseInt(secondsPast / 3600)) + "hours ago";
  }
  if (secondsPast <= 2628000) {
    return Math.round(parseInt(secondsPast / 86400)) + "days ago";
  }
  if (secondsPast <= 31536000) {
    return Math.round(parseInt(secondsPast / 2628000)) + "months ago";
  }
  if (secondsPast > 31536000) {
    return parseInt(secondsPast / 31536000) + "years ago";
  }
}
