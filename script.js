var map = L.map('map').setView([51.38, -2.36], 13); // Bath coordinates and zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Name replacement mappings
const nameReplacements = {
    "M4": "E4",
    "Bath": "Bárgh",
    // Add more replacements as needed
};

function replaceNames(name) {
    return nameReplacements[name] || name; // Replace if found, otherwise keep original
}


fetch('roads.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function (feature) {
                // Style based on road type (e.g., motorway, primary, etc.)
                if (feature.properties.highway === 'motorway') {
                    return {color: 'red', weight: 3};
                } else {
                    return {color: 'blue', weight: 1};
                }
            },
            onEachFeature: function (feature, layer) {
                // Add popups with road names, applying the replacement
                const originalName = feature.properties.name;
                const replacedName = replaceNames(originalName);
                layer.bindPopup(replacedName);
            }
        }).addTo(map);
    });
