let imageArray = ["turtle.png", "donation.jpeg", "signature.jpeg"]
let x = 0;
function nextImg() {
    let image = document.querySelector("#turtleImg");
    image.classList.toggle("slideR");
    
    image.src = imageArray[x];
    if (x >= 2) {
        x = 0;
    } else {
        x = x + 1
    }
    image.src = imageArray[x];
    
    
    nextText();
}

let textArray = ["Nunc non viverra urna, vel malesuada neque. Sed dictum massa et aliquet dignissim. Aliquam a turpis consectetur, aliquam elit ut, molestie mi. Sed neque dui, malesuada in luctus nec, egestas ac elit. Morbi porta rhoncus justo nec vulputate. In fringilla velit id ipsum blandit, sed gravida mauris molestie. Nulla at felis vel orci aliquet vestibulum. Curabitur orci orci, porta vel vehicula in, lacinia vel dolor. Integer condimentum erat lorem. Fusce vel convallis est.", "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac turpis varius, vestibulum augue vel, cursus sem. Cras tincidunt nulla vestibulum enim hendrerit commodo. Suspendisse vulputate scelerisque libero vel imperdiet. Cras porttitor sapien a lacus iaculis, ut auctor ante luctus. Maecenas tincidunt pellentesque augue, non tristique eros dignissim non. Nam aliquam sapien laoreet, tristique libero id, bibendum sem. Praesent iaculis nisl eget est scelerisque sodales. Mauris eget suscipit erat.", "Nulla facilisi. Nullam blandit eros enim, et cursus elit accumsan vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean consequat tristique ex, at pulvinar turpis feugiat et. Ut maximus vestibulum enim vel maximus. In eu cursus ligula. Donec pretium sapien condimentum eros convallis, sit amet tempus enim egestas. Suspendisse posuere, turpis eget viverra consequat, libero augue fermentum est, vel placerat lacus turpis vitae nibh. Proin sit amet nisl a metus dictum aliquam."]
let y = 0;
function nextText() {
    let text = document.querySelector("#slideshowText");
    text.innerHTML = textArray[y];
    if (y >= 2) {
        y = 0;
    } else {
        y = y + 1
    }
    text.innerHTML = textArray[y];
}

function pastImg() {
    let image = document.querySelector("#turtleImg");
    image.classList.toggle("slideL");
    if (x <= 0) {
        x = 2;
    } else {
        x = x - 1
    }
    image.src = imageArray[x];
    pastText();
}

function pastText() {
    let text = document.querySelector("#slideshowText");
    text.innerHTML = textArray[y];
    if (y <= 0) {
        y = 2;
    } else {
        y = y - 1
    }
    text.innerHTML = textArray[y];
}

function rightSlide() {
    let image = document.querySelector("#turtleImg");
    image.classList.toggle("slideR");
    setTimeout(nextImg, 350);
}

function leftSlide() {
    let image = document.querySelector("#turtleImg");
    image.classList.toggle("slideL");
    setTimeout(pastImg, 350);
}

let rightB = document.querySelector("#rightb");
rightB.addEventListener(type = "click", rightSlide);
let leftB = document.querySelector("#leftb");
leftB.addEventListener(type = "click", leftSlide);
