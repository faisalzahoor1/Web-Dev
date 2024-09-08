const url = "https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts";
const para = document.querySelector("#class");
const bt = document.querySelector("#btn")

const getdata = async () => {
    try {
        console.log("Fetching data...");
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        let data = await response.json();
        console.log(data[0].text);
        para.innerText = data[0].text; // Updating the paragraph with the fact text
    } catch (error) {
        console.error("Failed to fetch data:", error);
        para.innerText = "Failed to load cat facts.";
    }
};


bt.addEventListener("click", getdata);