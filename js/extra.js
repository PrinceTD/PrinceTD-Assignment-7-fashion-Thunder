const loadProducts = () => {
    const error = document.getElementById('error');
    const searchFild = document.getElementById('input-field');
    const searchText = searchFild.value;
    // clear data
    searchFild.value = "";
    /* error handing */
    if (searchText === "") {
        error.innerHTML = `
            <h3 class="text-danger mt-5"> Search filed cannot be empty!</h3>
        `
    }
    else {
        error.innerHTML = "";
        const url = `https://fakestoreapi.com/products`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => showProducts(data));
    }

}
