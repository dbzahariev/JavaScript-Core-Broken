function scoreToHTML(str) {
    let arr = JSON.parse(str);
    let html = `<table>\n`;
    html += `      <tr><th>name</th><th>score</th></tr>\n`;
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        html+=`      <tr><td>${escapeChar(obj['name'])}</td><td>${escapeChar(obj['score'])}</td></tr>\n`
    }
    html+=`</table>`;
    console.log(html);


    function escapeChar(str) {
        str = str.toString();
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');