let mode = "1";

let canvasRgba = "rgb(0, 0, 0, 1)";

let brushSize = 10;

const alpha = 1;

let click = false;

let startX = 0;
let startY = 0;

// canvas-area
// canvasオブジェクト定義
let imageCvs = document.getElementById("imageCanvas");
let imageCtx = imageCvs.getContext("2d");

let drawCvs = document.getElementById("drawCanvas");
let drawCtx = drawCvs.getContext("2d");

let drawTempCvs = document.getElementById("drawTempCanvas");
let drawTempCtx = drawTempCvs.getContext("2d");

let pointerCvs = document.getElementById("pointerCanvas");
let pointerCtx = pointerCvs.getContext("2d");

// 挙動
window.addEventListener("load", function (e) {
    pointerCvs.addEventListener("mousedown", mouseDown);
    pointerCvs.addEventListener("mousemove", mouseMove);
    pointerCvs.addEventListener("mouseup", mouseUp);
    pointerCvs.addEventListener("mouseout", function (e) {
        pointerCtx.clearRect(0, 0, imageCvs.width, imageCvs.height)
        if (click) {
            mouseUp(e);
        }
    });
});

// 以下　挙動定義
function mouseDown(e) {
    click = true;
    startX = e.offsetX;
    startY = e.offsetY;
}

function mouseMove(e) {
    if (mode == "1") {
        pointer(e);
        if (click) {
            drawPen(e);
        }
    } else if (mode == "2") {
        pointer(e);
        if (click) {
            drawErase(e);
        }
    }
}

function mouseUp(e) {
    click = false;
    if (mode == "1") {
        drawPen(e);
    } else if (mode == "2") {
        drawErase(e);
    }
}

function drawPen(e) {

    drawCtx.lineWidth = brushSize;
    drawCtx.strokeStyle = canvasRgba;
    drawCtx.lineCap = "round";
    drawCtx.globalCompositeOperation = 'source-over';
    drawCtx.beginPath();
    drawCtx.moveTo(startX, startY);
    drawCtx.lineTo(e.offsetX, e.offsetY);
    drawCtx.stroke();
    drawCtx.closePath();

    startX = e.offsetX;
    startY = e.offsetY;
}

function drawErase(e) {

    drawCtx.lineWidth = brushSize;
    drawCtx.lineCap = "round";
    drawCtx.strokeStyle = "rgba(255, 255, 255, 1)";
    drawCtx.globalCompositeOperation = 'destination-out'
    drawCtx.beginPath();
    drawCtx.moveTo(startX, startY);
    drawCtx.lineTo(e.offsetX, e.offsetY);
    drawCtx.stroke();
    drawCtx.closePath();

    startX = e.offsetX;
    startY = e.offsetY;
}

function pointer(e) {

    // 事前のポインタを除去
    pointerCtx.clearRect(0, 0, imageCvs.width, imageCvs.height)

    if (mode == "2") {
        pointerCtx.strokeStyle = "rgba(255, 255, 255, 1)";
    } else {
        pointerCtx.strokeStyle = canvasRgba;
    }

    pointerCtx.lineWidth = brushSize;
    pointerCtx.lineCap = "round";
    pointerCtx.beginPath();
    pointerCtx.moveTo(e.offsetX, e.offsetY);
    pointerCtx.lineTo(e.offsetX, e.offsetY);
    pointerCtx.stroke();
    pointerCtx.closePath();
}

// tools
// media-area
$(function () {
    $('[name="mode"]').on('change', function (e) {
        mode = $('input[name="mode"]:checked').val();

        if (mode == "1") {
            $("#size-area").show();
            $("#range-area").show();
            $("#color-picker-area").show();
        } else if (mode == "2") {
            $("#size-area").show();
            $("#range-area").show();
            $("#color-picker-area").hide();
        }
    });
});

function drawChecked() {
    document.getElementById('choice').src ='img/drawBox.png';
    document.getElementById('draw').src = 'img/drawChecked.png';
    document.getElementById('eraser').src = 'img/eraser.png';
    document.getElementById('sizeImg').src = 'img/drawSize.png';
    $("#slider").toggleClass("Erase");
}

function eraserChecked() {
    document.getElementById('choice').src = 'img/eraseBox.png';
    document.getElementById('eraser').src = 'img/eraserChecked.png';
    document.getElementById('draw').src = 'img/draw.png';
    document.getElementById('sizeImg').src = 'img/eraseSize.png';
    $("#slider").toggleClass("Erase");
}

// size-area
function sizeChange(num) {
    document.getElementById("size").innerHTML = num;
    brushSize = num;
}

// color-area
$(function () {
    $('#colorPicker').on('change', function (e) {

        // 色コード所得→設定
        $(this).val(e.detail[0]);

        // canvas用にcanvasRgba形式へ変換
        canvasRgba = "rgb(" +
            parseInt(e.detail[0].substring(1, 3), 16) + ", " +
            parseInt(e.detail[0].substring(3, 5), 16) + ", " +
            parseInt(e.detail[0].substring(5, 7), 16) + ", " +
            alpha + ")";
    });
});

// file-area
$(function () {
    $('#uploadFile').on('change', function (e) {

        let file = e.target.files[0];

        const reader = new FileReader();
        reader.onload = (function (file) {
            return function (e) {
                image(e.target.result);
                zoomRario = 1;
                zoom();
            };
        })(file);
        reader.readAsDataURL(file);
    });
});

function image(src) {

    let img = new Image();
    img.src = src;
    img.onload = () => {
        // canvasと画像のスケール値比較→低い方を採用
        let scale =
            Math.min(
                $('#canvas-area').width() / img.naturalWidth,
                $('#canvas-area').height() / img.naturalHeight);

        imageCvs.width = img.width * scale;
        imageCvs.height = img.height * scale;

        drawCvs.width = imageCvs.width;
        drawCvs.height = imageCvs.height;

        drawTempCvs.width = imageCvs.width;
        drawTempCvs.height = imageCvs.height;

        pointerCvs.width = imageCvs.width;
        pointerCvs.height = imageCvs.height;

        imageCtx.drawImage(img, 0, 0, imageCvs.width, imageCvs.height);
    };
}
