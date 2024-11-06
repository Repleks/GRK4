var imgA, imgB;
var isImgADisplayed = true;

function setup() {
    createCanvas(512, 512);
    background(255);
    imgA = createImage(512, 512);
    imgB = createImage(512, 512);
    imgA.loadPixels();
    imgB.loadPixels();

    var d = pixelDensity();
    for (var i = 0; i < 512 * 512 * 4 * d; i += 4) {
        imgA.pixels[i] = 240;
        imgA.pixels[i + 1] = 250;
        imgA.pixels[i + 2] = 240;
        imgA.pixels[i + 3] = 255;

        imgB.pixels[i] = 240;
        imgB.pixels[i + 1] = 240;
        imgB.pixels[i + 2] = 250;
        imgB.pixels[i + 3] = 255;
    }
    imgA.updatePixels();
    imgB.updatePixels();
}

function makeVector(x, y) {
    return [x, y, 1];
}

function drawVector(img, vec) {
    img.set(vec[0], vec[1], color(0, 0, 0));  // rysuje punkt w kolorze czarnym
    img.updatePixels();
}

function multiplyMatrixVector(matrix, vector) {
    let x = matrix[0][0] * vector[0] + matrix[0][1] * vector[1] + matrix[0][2] * vector[2];
    let y = matrix[1][0] * vector[0] + matrix[1][1] * vector[1] + matrix[1][2] * vector[2];
    return [x, y, 1];
}

function makeRotation(angle) {
    let rad = angle * Math.PI / 180;
    //obrot o macierz obrotu o kat
    return [
        [Math.cos(rad), -Math.sin(rad), 0],
        [Math.sin(rad), Math.cos(rad), 0],
        [0, 0, 1]
    ];
}

function mouseDragged() {
    let vec = makeVector(mouseX, mouseY);
    drawVector(imgA, vec);

    let rotationMatrix = makeRotation(45);  // przykład obrotu o 45 stopni
    let transformedVec = multiplyMatrixVector(rotationMatrix, vec);
    drawVector(imgB, transformedVec);
}

function draw() {
    if (isImgADisplayed) {
        image(imgA, 0, 0);
    } else {
        image(imgB, 0, 0);
    }
}

function keyPressed() {
    if (key === ' ') {
        isImgADisplayed = !isImgADisplayed;
    }
}
