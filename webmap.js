var basetopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS/tile/1.0.0/USGSTopo/default/default028mm/{z}/{y}/{x}.png', {});
var baserelief = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {});

var baselayers = {
    'Shaded Relief': baserelief,
    'National Map topo': basetopo
};

var overlays = {
    'The Trail': thetrail
};
L.control.layers(baselayers, overlays).addTo(map);