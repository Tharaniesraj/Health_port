function initMap() {
    // Ensure the map container exists
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Map container not found');
        return;
    }

    // Replace these coordinates with your actual location
    const location = { lat: 40.7128, lng: -74.0060 };
    
    // Initialize the map
    const map = new google.maps.Map(mapElement, {
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

    // Add a marker
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'HealthCare Pro',
        icon: {
            url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            scaledSize: new google.maps.Size(32, 32)
        }
    });

    // Add click event to marker
    marker.addListener('click', function() {
        const infoWindow = new google.maps.InfoWindow({
            content: '<h3>HealthCare Pro</h3>'
        });
        infoWindow.open(map, marker);
    });
}

// Initialize the map when the page loads
window.addEventListener('load', function() {
    // Ensure the map container has a defined height
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.style.height = '400px';
    }
    initMap();
});