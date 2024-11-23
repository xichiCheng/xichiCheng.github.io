// 图片数组
const images = ['/img/default.png','/img/img1.jpg','/img/img8.jpeg','/img/img10.jpeg','/img/img2.jpg','/img/img6.jpeg'];


// 预加载图片
function preloadImages(imagePaths) {
    let preloadedImages = [];
    imagePaths.forEach(path => {
        let img = new Image();
        img.src = path;
        preloadedImages.push(img);
    });
    return preloadedImages;
}

// 获取本地存储中的当前图片索引，默认从第0张图片开始
let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;
const banner = document.getElementById('banner');

// 预加载图片
preloadImages(images);

// 切换背景图
function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    banner.style.backgroundImage = `url(${images[currentIndex]})`;

    // 更新本地存储中的当前图片索引
    localStorage.setItem('currentIndex', currentIndex);
}

// 页面加载时应用本地存储中的图片索引
banner.style.backgroundImage = `url(${images[currentIndex]})`;

// 每3秒切换一次背景
setInterval(changeBackgroundImage, 4000);
