function gards(input) {
    input = (0.9 * input) % 360;
    if (input < 0) {
        input = 360 - Math.abs(input);
    }
    console.log(input);
}

gards(100);
gards(400);
gards(850);
gards(-50);