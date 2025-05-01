function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    
    const options = { timeZoneName: 'short' };
    const localeString = now.toLocaleTimeString('en-US', options);
    const timeZoneName = localeString.split(' ')[2];
    document.getElementById('timezone').textContent = timeZoneName;
}

function fetchLocation() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            const country = data.country_name;
            document.getElementById('location').textContent = `${city}, ${country}`;
        })
        .catch(error => {
            console.error('Error fetching location:', error);
        });
}

setInterval(updateClock, 1000);
updateClock();
fetchLocation();

