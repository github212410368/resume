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
  