function initMap() {
    // Replace these coordinates with your actual location
    const location = { lat: 40.7128, lng: -74.0060 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        styles: [
            {
                elementType: 'geometry',
                stylers: [{ color: '#242f3e' }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#242f3e' }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{ color: '#746855' }]
            }
        ]
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'HealthCare Pro'
    });
}

// Initialize the map when the page loads
window.addEventListener('load', initMap);