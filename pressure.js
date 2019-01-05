const pressureInput = document.getElementById('pressure-input');

pressureInput.addEventListener('input', function(e) {
	let pressure = e.target.value;
	document.getElementById('kilopascals-output').innerHTML = 'Kilopascals: ' + (pressure / 1000).toFixed(4) + ' KPa';
	document.getElementById('bars-output').innerHTML = 'Bars: ' + (pressure / 100000).toFixed(4) + ' bar';
	document.getElementById('torr-output').innerHTML = 'Torr: ' + (pressure * 0.007501).toFixed(4) + ' torr';
	document.getElementById('atm-output').innerHTML = 'Atm: ' + (pressure / 101325).toFixed(4) + ' atm';
	document.getElementById('mercury-output').innerHTML = 'mercury: ' + (pressure * 0.00750062).toFixed(4) + ' mmHg';
});
