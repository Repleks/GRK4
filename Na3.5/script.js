function makeIdentity() {
    return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];
}

function makeTranslation(tx, ty) {
    return [
        [1, 0, tx],
        [0, 1, ty],
        [0, 0, 1]
    ];
}

function makeScale(sx, sy) {
    return [
        [sx, 0, 0],
        [0, sy, 0],
        [0, 0, 1]
    ];
}

function makeRotation(angle) {
    let rad = angle * Math.PI / 180;
    return [
        [Math.cos(rad), -Math.sin(rad), 0],
        [Math.sin(rad), Math.cos(rad), 0],
        [0, 0, 1]
    ];
}

console.log("Identity Matrix:", makeIdentity());
console.log("Translation Matrix:", makeTranslation(10, 20));
console.log("Scale Matrix:", makeScale(2, 2));
console.log("Rotation Matrix:", makeRotation(45));
