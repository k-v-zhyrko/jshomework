console.log('Task 1');

const citiesAndCountries = {
'Киев': 'Украина',
'Нью-Йорк': 'США',
'Амстердам': 'Нидерланды',
'Берлин': 'Германия',
'Париж': 'Франция',
'Лиссабон': 'Португалия',
'Вена': 'Австрия',
};

const result = []; 
for (let city in citiesAndCountries) { 
	result.push(city+" - это "+citiesAndCountries[city]); 
}
console.log(result); 