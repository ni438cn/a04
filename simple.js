let apikey1 = "https://randomfox.ca/floof/";
let apikey2 = "https://random.dog/woof.json";
console.log(apikey2);
let out = document.createElement('div');


let button = document.createElement('button');
let res = await fetch(apikey1, {method: "GET"});
let res2 = await fetch(apikey2, {method: "GET"});
button.textContent = "Generate";
button.addEventListener("click", async () => {
    let fox= document.createElement('img');
    let jq = res.json();
    jq.then((i) => fox.src = i.image);
    fox.alt = "fail";
    let fox2= document.createElement('img');
    let jq2 = res2.json();
    jq2.then((i) => fox2.src = i.url);
    fox2.alt = "fail";

    out.append(fox);
    out.append(fox2);
})
out.append(button);

document.getElementById('main').append(out);