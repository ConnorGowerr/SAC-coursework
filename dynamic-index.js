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

class Content {

    constructor(id, classs, src, desc, alt) {
        this.id = id;
        this.classs = classs;
        this.src = src;
        this.desc = desc;
        this.alt = alt;
    }
}

const main = document.querySelector("#main")

const slideShow = new Content(
    id = "slideshow",
    classs = null,
    src = null,
    desc = null,
    alt = null
);

const slideShowImg = new Content(
    id = "turtleImg",
    classs = null,
    src = "turtle.png",
    desc = null,
    alt = "turtle caught in a plastic bag"
);

const leftB = new Content(
    id = "leftb",
    classs = "transitionb",
    src = null,
    desc = null,
    alt = null
);

const rightB = new Content(
    id = "rightb",
    classs = "transitionb",
    src = null,
    desc = null,
    alt = null
);

const chevronL = new Content(
    id = null,
    classs = "fa-solid fa-chevron-left fa-2xl",
    src = null,
    desc = null,
    alt = null
);

const chevronR = new Content(
    id = null,
    classs = "fa-solid fa-chevron-right fa-2xl",
    src = null,
    desc = null,
    alt = null
);

const slideShowOverlay = new Content(
    id = "overlay",
    classs = null,
    src = null,
    desc = null,
    alt = null
);

const slideShowOverlayText = new Content(
    id = "slideshowText",
    classs = null,
    src = null,
    desc = "Pellentesque non nisi eu eros malesuada hendrerit. Vestibulum luctus ex sed laoreet dapibus. Fusce lobortis faucibus metus fermentum ultricies. Sed vestibulum accumsan ultricies. Vestibulum mattis tellus eu semper dignissim. Aliquam erat volutpat. Pellentesque eros est, aliquet a nisi id, convallis elementum neque. Sed a aliquet mi. Fusce eu vulputate felis. Integer eget maximus leo. Suspendisse facilisis metus eget tincidunt fermentum. Praesent hendrerit maximus nunc, et convallis orci lacinia nec. Integer aliquam aliquam tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ut nisi vitae nunc faucibus vehicula.",
    alt = null
);

const slideShowButton = new Content(
    id = "slideshowButton",
    classs = null,
    src = null,
    desc = "Find Out More",
    alt = null
);

const intro = new Content(
    id = "intro",
    classs = null,
    src = null,
    desc = null,
    alt = null
);

const introTitle = new Content(
    id = null,
    classs = null,
    src = null,
    desc = "Insert Title Here!",
    alt = null
);

const introP1 = new Content(
    id = null,
    classs = null,
    src = null,
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem dolor, consectetur a aliquam ut, accumsan ut enim. Curabitur nec rutrum magna. Nunc a ipsum cursus, vestibulum ligula et, laoreet erat. Phasellus iaculis pretium tortor vel mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta, diam vitae lobortis semper, turpis mauris bibendum sapien, eget bibendum diam lorem quis neque. Nullam rutrum pellentesque nibh, eget ornare magna viverra et. Ut pulvinar dui mauris, tempus fringilla diam pretium eu. Mauris in enim vitae metus convallis ultricies. Proin pellentesque bibendum purus porttitor maximus. Fusce dictum, dui sed blandit elementum, elit enim molestie nisl, id egestas lorem quam vitae nulla. Nunc lacinia tincidunt luctus.",
    alt = null
);

const introP2 = new Content(
    id = null,
    classs = null,
    src = null,
    desc = "Pellentesque non nisi eu eros malesuada hendrerit. Vestibulum luctus ex sed laoreet dapibus. Fusce lobortis faucibus metus fermentum ultricies. Sed vestibulum accumsan ultricies. Vestibulum mattis tellus eu semper dignissim. Aliquam erat volutpat. Pellentesque eros est, aliquet a nisi id, convallis elementum neque. Sed a aliquet mi. Fusce eu vulputate felis. Integer eget maximus leo. Suspendisse facilisis metus eget tincidunt fermentum. Praesent hendrerit maximus nunc, et convallis orci lacinia nec. Integer aliquam aliquam tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ut nisi vitae nunc faucibus vehicula.",
    alt = null
);

const introP3 = new Content(
    id = null,
    classs = null,
    src = null,
    desc = "Integer nec urna sodales, consectetur magna sed, vestibulum sapien. In bibendum faucibus dictum. Ut sagittis vel nulla non convallis. Quisque sagittis ac dui ac pulvinar. Maecenas eu tempus sem. Nullam id sem sit amet velit scelerisque blandit ut id tortor. Fusce vitae blandit enim. Etiam rhoncus, erat ac rutrum tristique, lorem tellus pharetra ligula, a faucibus dui nulla ac diam. Etiam ut eros nunc.",
    alt = null
);

const branch = new Content(
    id = null,
    classs = "branch",
    src = null,
    desc = null,
    alt = null
);

const branchTitle1 = new Content(
    id = null,
    classs = "homeTitle",
    src = null,
    desc = "Meet the Team!",
    alt = null
);

const branchfontAwesome1 = new Content(
    id = null,
    classs = "fa-solid fa-users-between-lines fa-xl fontAwesome",
    src = null,
    desc = null,
    alt = null
);

const branchImg1 = new Content(
    id = "meetTeamImg",
    classs = null,
    src = "cooporate.jpeg",
    desc = null,
    alt = "Group of people working together"
);

const branchOverlay1 = new Content(
    id = "homeOverlay1",
    classs = "homeOverlay",
    src = null,
    desc = null,
    alt = null
);

const branchOverlayText1 = new Content(
    id = null,
    classs = "homeText",
    src = null,
    desc = "Our dedicated team of employees strive for excellence in our planet, our society, our future.",
    alt = null
);

const branchOverlayButton1 = new Content(
    id = "homeButton1",
    classs = "homeButton",
    src = null,
    desc = "Meet Us",
    alt = null
);

const branchTitle2 = new Content(
    id = null,
    classs = "homeTitle",
    src = null,
    desc = "Sign up Today",
    alt = null
);

const branchfontAwesome2 = new Content(
    id = null,
    classs = "fa-solid fa-user-plus fa-xl  fontAwesome",
    src = null,
    desc = null,
    alt = null
);

const branchImg2 = new Content(
    id = "signatureImg",
    classs = null,
    src = "signature.jpeg",
    desc = null,
    alt = "Person signing a contract"
);

const branchOverlay2 = new Content(
    id = "homeOverlay2",
    classs = "homeOverlay",
    src = null,
    desc = null,
    alt = null
);

const branchOverlayText2 = new Content(
    id = null,
    classs = "homeText",
    src = null,
    desc = "Sign up for our weekly newsleters to stay up to date with our latest findings.",
    alt = null
);

const branchOverlayButton2 = new Content(
    id = "homeButton2",
    classs = "homeButton",
    src = null,
    desc = "Join Us",
    alt = null
);

const branchTitle3 = new Content(
    id = null,
    classs = "homeTitle",
    src = null,
    desc = "Donate",
    alt = null
);

const branchfontAwesome3 = new Content(
    id = null,
    classs = "fa-solid fa-hand-holding-dollar fa-xl fontAwesome",
    src = null,
    desc = null,
    alt = null
);

const branchImg3 = new Content(
    id = "donationImg",
    classs = null,
    src = "donation.jpeg",
    desc = null,
    alt = "Person donating money"
);

const branchOverlay3 = new Content(
    id = "homeOverlay3",
    classs = "homeOverlay",
    src = null,
    desc = null,
    alt = null
);

const branchOverlayText3 = new Content(
    id = null,
    classs = "homeText",
    src = null,
    desc = "Your support allows us to continue our life changing advancements. Be the change you want to see!",
    alt = null
);

const branchOverlayButton3 = new Content(
    id = "homeButton3",
    classs = "homeButton",
    src = null,
    desc = "Help Us",
    alt = null
);

function loadContent() {
    
    console.log("ok");
    let slideShowE = `<article id=${slideShow.id}
    <img src=${slideShowImg.src} alt=${slideShowImg.alt} id=${slideShowImg.id}></img>
        <button id=${leftB.id} class=${leftB.classs}><i class=${chevronL.classs}></i></button>
        <button id=${rightB.id} class=${rightB.classs}><i class=${chevronR.classs}></i></button>
        <section id=${slideShowOverlay.id}>
            <p id=${slideShowOverlayText.id}>${slideShowOverlayText.desc}</p>
            <button id=${slideShowButton.id}>${slideShowButton.desc}</button>
        </section>
    </article>
    <section id="intro">
        <h2>${introTitle.desc}</h2>
        <br>
        <br> 
        <p>
            ${introP1.desc}
        </p>
        <br>
        <br>     
        <p> 
            ${introP2.desc}
        </p> 
        <br>
        <br> 
        <p>
            ${introP3.desc}
        </p>
    </section>
    <article class=${branch.classs}>
        <h3 class=${branchTitle1.classs}>${branchTitle1.desc}</h3>
        <i class=${branchfontAwesome1.classs}></i>
        <img src=${branchImg1.src} alt=${branchImg1.alt} id=${branchImg1.id}></img>
        <section id=${branchOverlay1.id} class=${branchOverlay1.classs}>
            <p class=${branchOverlayText1.classs}>${branchOverlayText1.desc}</p>
            <b><button class=${branchOverlayButton1.classs} id=${branchOverlayButton1.id}>${branchOverlayButton1.desc}</button></b>
        </section>
    </article>
    <article class=${branch.classs}>
        <h3 class=${branchTitle2.classs}>${branchTitle2.desc}</h3>
        <i class=${branchfontAwesome2.classs}></i>
        <img src=${branchImg2.src} alt=${branchImg2.alt} id=${branchImg2.id}></img>
        <section id=${branchOverlay2.id} class=${branchOverlay2.classs}>
            <p class=${branchOverlayText2.classs}>${branchOverlayText2.desc}</p>
            <b><button class=${branchOverlayButton2.classs} id=${branchOverlayButton2.id}>${branchOverlayButton2.desc}</button></b>
        </section>
    </article>
    <article class=${branch.classs}>
        <h3 class=${branchTitle3.classs}>${branchTitle3.desc}</h3>
        <i class=${branchfontAwesome3.classs}></i>
        <img src=${branchImg3.src} alt=${branchImg3.alt} id=${branchImg3.id}></img>
        <section id=${branchOverlay3.id} class=${branchOverlay3.classs}>
            <p class=${branchOverlayText3.classs}>${branchOverlayText3.desc}</p>
            <b><button class=${branchOverlayButton3.classs} id=${branchOverlayButton3.id}>${branchOverlayButton3.desc}</button></b>
        </section>
    </article>
    `;
    console.log(slideShowE);
    main.innerHTML = slideShowE;

    let rightBT = document.querySelector("#rightb");
    let leftBT = document.querySelector("#leftb");
    rightBT.addEventListener(type = "click", rightSlide);
    leftBT.addEventListener(type = "click", leftSlide);
};


window.addEventListener("DOMContentLoaded", loadContent, false);
