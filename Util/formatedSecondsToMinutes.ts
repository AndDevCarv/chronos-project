export function formatedSecondsToMinutes(seconds: number) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");
  return `${minutes}:${secondsString}`;
}
