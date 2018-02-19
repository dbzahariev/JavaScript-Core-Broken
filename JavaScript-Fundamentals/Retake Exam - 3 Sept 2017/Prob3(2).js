function slove(separeter, text) {
    extraktAll()
    function extraktAll() {
        let regex = /(north|east)\D*(\d{2})[^,]*(?:,)\D*(\d{6})/gi

        let kk = regex.exec(text)
        console.log(kk);
    }


    console.log(extractNort());
    function extractNort() {
        let regex = /(?:north+(?:[A-z ])*([0-9]{2}))+[A-z0-9]*,[A-z ]*(\d{6})+/igm;
        let matches = regex.exec(text);

        return `${matches[1]}.${matches[2]} N`
    }
    console.log(extractEast());
    function extractEast() {
        let regex = /(north|east)\D*(\d{2})[^,]*,\D*(\d{6})/im
        let matches = regex.exec(text);

        return `${matches[1]}.${matches[2]} E`
    }
    console.log(extractMSG());
    function extractMSG() {
        let mm = separeter + '(.+)' + separeter
        let regex = new RegExp(mm,"igm");
        let matches = regex.exec(text);

        return `Message: ${matches[1]}`;
    }
}

slove('4ds',
    'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532')