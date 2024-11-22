// 图片数组
const images = ['/img/default.png', '/img/img2.jpg'];

let currentIndex = 0; // 当前图片的索引

// 获取banner元素
const banner = document.getElementById('banner');

// 定义切换图片的函数
function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;  // 循环切换图片
    banner.style.backgroundImage = `url(${images[currentIndex]})`;
}

// 每3秒切换一次背景图片
setInterval(changeBackgroundImage, 3000);
