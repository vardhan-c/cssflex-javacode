let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let profileContainerEl = document.getElementById("profileContainer");
profileContainerEl.classList.add("profile-container")

let imageEl = document.createElement("img");
imageEl.setAttribute("src", profileDetails.imgSrc);
imageEl.classList.add("image");
profileContainerEl.appendChild(imageEl);

let nameEl = document.createElement("h1");
nameEl.textContent = profileDetails.name;
nameEl.classList.add("name");
profileContainerEl.appendChild(nameEl);

let ageEl = document.createElement("p");
ageEl.textContent = "Age:" + profileDetails.age;
ageEl.classList.add("age");
profileContainerEl.appendChild(ageEl);
