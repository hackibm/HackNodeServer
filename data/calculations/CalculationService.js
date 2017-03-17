export function guessTime(timeInUnknownFormat) {
  if(timeInUnknownFormat.includes(":")){
    var arr = timeInUnknownFormat.split(":");
    return parseInt(arr[0])*60+parseInt(arr[1]);
}else{
  return parseInt(timeInUnknownFormat);
}
}
