function nameChange() {
    if (this.value === "") {
        document.getElementById('card-design-name').innerText = "Frederick Aberdeen";

    } else {
        document.getElementById('card-design-name').innerText = this.value;
    }
}

function titleChange() {
    if (this.value === "") {
        document.getElementById('card-design-title').innerText = "Software Engineer";

    } else {
        document.getElementById('card-design-title').innerText = this.value;
    }
}

function mobileChange() {
    if (this.value === "") {
        document.getElementById('card-design-mobile').innerText = "+65 9876 5432";

    } else {
        document.getElementById('card-design-mobile').innerText = this.value;
    }
}


function emailChange() {
    if (this.value === "") {
        document.getElementById('card-design-email').innerText = "frederick.aberdeen@example.com";

    } else {
        document.getElementById('card-design-email').innerText = this.value;
    }
}

function companyChange() {
    if (this.value === "") {
        document.getElementById('card-design-company').innerText = "General Assembly";

    } else {
        document.getElementById('card-design-company').innerText = this.value;
    }
}

function websiteChange() {
    if (this.value === "") {
        document.getElementById('card-design-website').innerText = "frederick.aberdeen@example.com";

    } else {
        document.getElementById('card-design-website').innerText = this.value;
    }
}

document.getElementById('card-name').onkeyup = nameChange;
document.getElementById('card-title').onkeyup = titleChange;
document.getElementById('card-mobile').onkeyup = mobileChange;
document.getElementById('card-email').onkeyup = emailChange;
document.getElementById('card-company').onkeyup = companyChange;
document.getElementById('card-website').onkeyup = websiteChange;

