const navbar = document.querySelector('#nav');
const date = document.querySelector('#date');

const navBtn = document.querySelector('.nav-btn');
const sidebar = document.querySelector('#sidebar');
const closeBtn = document.querySelector('#close-btn');

navBtn.addEventListener('click',function(){
  sidebar.classList.add('show-sidebar');
  navbar.classList.remove('navbar-fixed');
});

closeBtn.addEventListener('click',function(){
  sidebar.classList.remove('show-sidebar');
  if (window.scrollY > 80){
    navbar.classList.add('navbar-fixed');
  }else{
    navbar.classList.remove('navbar-fixed');
    }
});

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.scrollY > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

// set year
date.innerHTML = new Date().getFullYear();


document.addEventListener('DOMContentLoaded', (event) => {
  // 获取按钮和侧边栏元素
  const closeBtn = document.getElementById('close-btn');
  const sidebar = document.querySelector('.sidebar');

  // 为按钮添加点击事件监听器
  closeBtn.addEventListener('click', function() {
    // 切换侧边栏的可见性
    if (sidebar.style.transform === "translateX(0%)") {
      sidebar.style.transform = "translateX(-100%)"; // 将侧边栏隐藏
    } else {
      sidebar.style.transform = "translateX(0%)"; // 将侧边栏显示
    }
  });
});
