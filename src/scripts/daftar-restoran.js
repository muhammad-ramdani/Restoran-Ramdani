fetch(`https://restaurant-api.dicoding.dev/list`)
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        if (responseJson.error) {
            showResponseMessage(responseJson.message);
        } else {
            renderAllRestaurants(responseJson.restaurants);
        }
    })
    .catch(error => {
        showResponseMessage(error);
    });

const renderAllRestaurants = (restaurants) => {
    const DaftarRestaurantsElement = document.querySelector('#daftarRestoran');
    DaftarRestaurantsElement.innerHTML = '';

    restaurants.forEach(restaurant => {
        DaftarRestaurantsElement.innerHTML += `
            <div>
                <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="Gambar ${restaurant.name}">
                <h2>${restaurant.name}</h2>
                <p>⭐ ${restaurant.rating} | ${restaurant.city}</p>
                <a href="#">Detail</a>
            </div>
        `;
    });
};