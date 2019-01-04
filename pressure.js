const pressureInput = document.getElementById('pressure-input');

pressureInput.addEventListener('input', function(e) {
	let pressure = e.target.value;
	document.getElementById('kilopascals-output').innerHTML = 'Kilopascals: ' + (pressure / 1000).toFixed(4) + ' KPa';
	document.getElementById('bars-output').innerHTML = 'Bars: ' + (pressure / 100000).toFixed(4) + ' bar';
	document.getElementById('torr-output').innerHTML = 'Torr: ' + (pressure / 133.33).toFixed(4) + ' torr';
});
