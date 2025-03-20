
document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("image-hover");

    img.addEventListener("mouseover", function () {
        img.src = "https://i.pinimg.com/736x/8a/e9/ff/8ae9ff0795b2563efc7ce3eff3c7bbb7.jpg";
    });

    img.addEventListener("mouseout", function () {
        img.src = "https://i.imgur.com/IoV4q2j.jpeg";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("hover-image");

    img.addEventListener("mouseover", function () {
        img.src = "https://i.pinimg.com/736x/0b/6f/b9/0b6fb94ba35304648ca63ef086e58e61.jpg";
    });

    img.addEventListener("mouseout", function () {
        img.src = "https://i.imgur.com/s6ATtmv.jpeg";
    });
});
