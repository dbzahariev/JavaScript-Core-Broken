function distanceIn3D(input) {
    let point1 = {x: input[0], y: input[1], z: input[2]};
    let point2 = {x: input[3], y: input[4], z: input[5]};

    let x = Math.pow((point2.x - point1.x), 2);
    let y = Math.pow((point2.y - point1.y), 2);
    let z = Math.pow((point2.z - point1.z), 2);
    let result = Math.sqrt(x + y + z);

    console.log(result);
}

distanceIn3D([3.5, 0, 1, 0, 2, -1]);