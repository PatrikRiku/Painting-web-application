var XClickArr = [],
    YClickArr = [],
    paintArray = [],
    crayonSize = [],
    colorArray = [],
    smallSize = 2,
    middleSize = 7,
    largeSize = 25,
    redColor = "#ff0000",
    greenColor = "#009900",
    blueColor = "#0000ff",
    blackColor = "#000000",
    eraser = "#ffffff",
    theSize = middleSize,
    theColor = redColor,
    paintingNow = false;


function canvasPaintFunction() {
    context = document.getElementById("paintSurface").getContext("2d"), context.fillStyle = "#ffffff", context.fillRect(0, 0, 450, 450);

    $("#paintSurface").mousedown(function (t) {
        paintingNow = !0,
            paintData(t.pageX - this.offsetLeft, t.pageY - this.offsetTop),
            showOnPaintSurface()
    });

    $("#paintSurface").mousemove(function (t) {
        paintingNow && (paintData(t.pageX - this.offsetLeft, t.pageY - this.offsetTop, !0),
            showOnPaintSurface())
    });

    $('#paintSurface').mouseup(function () {
        paintingNow = false;
    });

    $('#paintSurface').mouseleave(function () {
        paintingNow = false;
    });

    $('#redColorId').mousedown(function () {
        theColor = redColor;
        document.getElementById("redColorId").style.marginTop = "0px";
        document.getElementById("greenColorId").style.marginTop = "20px";
        document.getElementById("blueColorId").style.marginTop = "20px";
        document.getElementById("blackColorId").style.marginTop = "20px";
        document.getElementById("eraserId").style.marginTop = "20px";
    });


    $('#greenColorId').mousedown(function () {
        theColor = greenColor;
        document.getElementById("redColorId").style.marginTop = "20px";
        document.getElementById("greenColorId").style.marginTop = "0px";
        document.getElementById("blueColorId").style.marginTop = "20px";
        document.getElementById("blackColorId").style.marginTop = "20px";
        document.getElementById("eraserId").style.marginTop = "20px";
    });


    $('#blueColorId').mousedown(function () {
        theColor = blueColor;
        document.getElementById("redColorId").style.marginTop = "20px";
        document.getElementById("greenColorId").style.marginTop = "20px";
        document.getElementById("blueColorId").style.marginTop = "0px";
        document.getElementById("blackColorId").style.marginTop = "20px";
        document.getElementById("eraserId").style.marginTop = "20px";
    });


    $('#blackColorId').mousedown(function () {
        theColor = blackColor;
        document.getElementById("redColorId").style.marginTop = "20px";
        document.getElementById("greenColorId").style.marginTop = "20px";
        document.getElementById("blueColorId").style.marginTop = "20px";
        document.getElementById("blackColorId").style.marginTop = "0px";
        document.getElementById("eraserId").style.marginTop = "20px";
    });


    $('#eraserId').mousedown(function () {
        theColor = eraser;
        document.getElementById("redColorId").style.marginTop = "20px";
        document.getElementById("greenColorId").style.marginTop = "20px";
        document.getElementById("blueColorId").style.marginTop = "20px";
        document.getElementById("blackColorId").style.marginTop = "20px";
        document.getElementById("eraserId").style.marginTop = "0px";
    });


    $('#smallSizeId').mousedown(function () {
        theSize = smallSize;
        document.getElementById("smallSizeId").style.backgroundColor = "#ffcc00";
        document.getElementById("middleSizeId").style.backgroundColor = "#AE4200";
        document.getElementById("bigSizeId").style.backgroundColor = "#AE4200";
    });

    $('#middleSizeId').mousedown(function () {
        theSize = middleSize;
        document.getElementById("smallSizeId").style.backgroundColor = "#AE4200";
        document.getElementById("middleSizeId").style.backgroundColor = "#ffcc00";
        document.getElementById("bigSizeId").style.backgroundColor = "#AE4200";
    });

    $('#bigSizeId').mousedown(function () {
        theSize = largeSize;
        document.getElementById("smallSizeId").style.backgroundColor = "#AE4200";
        document.getElementById("middleSizeId").style.backgroundColor = "#AE4200";
        document.getElementById("bigSizeId").style.backgroundColor = "#ffcc00";
    });

}

function paintData(x, y, paintInPaintArr) {
    XClickArr.push(x);
    YClickArr.push(y);
    paintArray.push(paintInPaintArr);
    colorArray.push(theColor);
    crayonSize.push(theSize);
}

function showOnPaintSurface() {
    context.lineJoin = "round";
    for (var t = 0; t < XClickArr.length; t++) context.beginPath(), paintArray[t] ? context.moveTo(XClickArr[t - 1], YClickArr[t - 1]) : context.moveTo(XClickArr[t] - 1, YClickArr[t]), context.lineTo(XClickArr[t], YClickArr[t]), context.closePath(), context.strokeStyle = colorArray[t], context.lineWidth = crayonSize[t], context.stroke()
}


function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}
document.getElementById('download').addEventListener('click', function () {
    downloadCanvas(this, 'paintSurface', 'mypainting.png');
}, false);