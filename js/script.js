// banner
const prevBtn = document.querySelector(".main_banner .prev");
const nextBtn = document.querySelector(".main_banner .next");
const banner = document.querySelectorAll(".main_banner .img_box");
const banner_size = document.querySelectorAll(".main_banner .img_box").length;

let currentBanner = 0;

const nextBannerHandle = () => {
    currentBanner += 1;
    if (currentBanner > banner_size - 1) {
        currentBanner = 0;
    }
    banner.forEach((item, index) => {
        if (index == currentBanner) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

const prevBannerHandle = () => {
    currentBanner -= 1;
    if (currentBanner < 0) {
        currentBanner = banner_size - 1;
    }
    banner.forEach((item, index) => {
        if (index == currentBanner) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

nextBtn.addEventListener("click", nextBannerHandle);
prevBtn.addEventListener("click", prevBannerHandle);
