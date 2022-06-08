function findAllCustomerData() {
	return new Promise(function(resolve, reject) {
		axios.post('http://sampleapi.de/v1/find', { query: 'tobias' })
			.then(function(result) {
				var dataPromises = result.data.customerIds.map(function(customerId) {
					return axios.get('http://sampleapi.de/v1/customer/'+customerId);
				});

				Promise.all(dataPromises)
					.then(function(customerDatas) {
						resolve(customerDats);
					})
					.catch(function(err) {
						reject(err);
					});
			})
			.catch(function(err) {
				reject(err);
			});
	});
}

(() => {
findAllCustomerData(ax)
	.then(function(customers) {
		customers.forEach(function(customer) {
			console.log(customer.id+': '+customer.firstName+' '+customer.lastName);
		});
	})
	.catch(function(err) {
		console.error(err);
	});
})();