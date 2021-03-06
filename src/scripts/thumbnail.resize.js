const gameThumbnail = document.getElementById('gameThumbnail');
const cvThumbnail = document.getElementById('cvThumbnail');
const documentWidth = window.innerWidth;
const documentCenter = parseInt(documentWidth / 2);

function resetThumbnail(resettableThumb) {
    resettableThumb.style.zIndex = '7';
    resettableThumb.style.width = '50%';
}

function resizeThumbnail(resizableThumb, width) {
    resizableThumb.style.zIndex = '10';
    resizableThumb.style.width = width + 'px';
}

async function processMouseMove(event) {
    let xValue = event.clientX;
    let width = xValue > documentCenter ? xValue : documentWidth - xValue;
    let {resizableThumbnail, resettableThumbnail} = xValue > documentCenter ? {resizableThumbnail: cvThumbnail, resettableThumbnail: gameThumbnail} : {resizableThumbnail: gameThumbnail, resettableThumbnail: cvThumbnail};
    resizeThumbnail(resizableThumbnail, width);
    resetThumbnail(resettableThumbnail);
}

document.onmousemove = processMouseMove;