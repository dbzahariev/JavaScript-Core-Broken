function distanceOverTime(input) {
    let v1 = input[0];
    let v2 = input[1];
    let t = input[2];

    let dist1 = (v1 / 3.6) * t;
    let dist2 = (v2 / 3.6) * t;
    let delta = Math.abs(dist1 - dist2);
    console.log(delta);
}

distanceOverTime([11, 10, 120]);