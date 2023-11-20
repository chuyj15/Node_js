async function fetchData() {
    const response = await fetch('https://httpbin.org/get');
    const data = await response.json();
    return data;
}

fetchData()
.then((result) => {
console.log(result);
console.log(result.headers.Host);
console.log(result.headers['Accept-Encoding']);
})
.catch((error) => {
console.log(error);
})