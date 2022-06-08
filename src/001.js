async function fetchMethod() {
    let response = await fetch(
        "http://sampleapi.de/v1/find");
    let data = await response.json();
    console.log(data);
}
fetchMethod();