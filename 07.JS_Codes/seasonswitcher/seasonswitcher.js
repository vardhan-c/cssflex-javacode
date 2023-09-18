let seasonSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");

function changeSeasonToSpring() {
    seasonSmallImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
    seasonMediumImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
}

function summerBtnCall() {
    let smallImageIs = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    let mediumImageIs = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";

    seasonSmallImageElement.src = smallImageIs;
    seasonMediumImageElement.src = mediumImageIs;
}

function autumnBtnCall() {
    let smallImageIs = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    let mediumImageIs = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";

    seasonSmallImageElement.src = smallImageIs;
    seasonMediumImageElement.src = mediumImageIs;
}



function winterBtnCall() {
    let smallImageIs = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    let mediumImageIs = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

    seasonSmallImageElement.src = smallImageIs;
    seasonMediumImageElement.src = mediumImageIs;
}
