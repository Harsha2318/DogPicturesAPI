let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let link = await getimage();
    let img = document.createElement("img");
    img.setAttribute("src", link);
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").appendChild(img);
    console.log(link);
});

async function getimage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error-", e);
        return "/";
    }
}
