export function getCurrentTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let time = hours + ": " + minutes + " " + meridiem;
  return time;

}

export function getGreetings() {

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greetingText = "";

  if (currentHour < 12) {
    greetingText = "Good morning...!";
  } else if (currentHour < 18) {
    greetingText = "Good afternoon...!";
  } else {
    greetingText = "Good evening...!";
  }

  return greetingText;
}

export async function getTemp() {
  const apiKey = 'c9fd43801139727fa8cfa688df99a18f';
  const city = 'Chennai';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const currentTemperature = data.main.temp;
    const desc = data.weather[0].main;

    const tempDetails = [currentTemperature, desc];
    console.log(`Current temperature in ${city}: ${currentTemperature}°C +${desc}`);
    return tempDetails;
  } catch (error) {
    throw new Error('There was a problem fetching the weather data:', error);
  }
}
