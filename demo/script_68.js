function showdemo(week) {
    const p = document.querySelector('.show-classdemo');
    console.log('p', p);
    switch(week){
        case 2:
            p.innerHTML = `<iframe src="./w02_68_into/index.html" width="100%" height="100%" />`;
            break;
        case 3:
            p.innerHTML = `<iframe src="./w03_68_card/index.html" width="100%" height="100%" />`;
            break;
        case 4:
            p.innerHTML = `<iframe src="./w04_68_blogs/index.html" width="100%" height="100%" />`;
            break;
        case 5:
            p.innerHTML = `<iframe src="./w05_68_blogs/index.html" width="100%" height="100%" />`;
            break;
        case 6:
            p.innerHTML = `<iframe src="./w06_68_navbar/index.html" width="100%" height="100%" />`;
            break;
        case 7:
            p.innerHTML = `<iframe src="./w07_68_tile/index.html" width="100%" height="100%" />`;
            break;
   


    }
}
