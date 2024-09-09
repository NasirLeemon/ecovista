export async function getLocationData(lat, lon) {
  try {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getLocationLatLongList() {
  try {
    const response = await fetch(`https://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getLocationLatLong(locationName) {
  try {
    const response = await fetch(
      `https://localhost:3000/api/location/${locationName}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
