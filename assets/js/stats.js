(function() {
	const endpoint = 'https://api.dev.dollar-metrics.distributedlife.com/counter';
	const opts = {
		method: 'POST',
		body: JSON.stringify({
			name: 'rybogolfgame.com/signup/visits'
		}),
		headers: {
			'content-type': 'application/json'
		}
	};

	const doPost = () => fetch(endpoint, opts).catch(console.error);

	setTimeout(doPost, 0);
})();
