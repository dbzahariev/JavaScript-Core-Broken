function extractLinks(arr) {
    let pattern = /www\.([a-zA-Z\d-]+)(\.[a-z]+)+/g;
    let match, links = [];
    for (let line of arr)
        while (match = pattern.exec(line))
            links.push(match[0]);
    console.log(links.join('\n'));
}

extractLinks(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']);