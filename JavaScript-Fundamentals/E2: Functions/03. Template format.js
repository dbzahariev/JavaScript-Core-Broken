function templateFormat(input) {
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for (let i = 0; i < input.length; i += 2) {
        html += `  <question>\n`;
        html += `    ${input[i]}\n`;
        html += `  </question>\n`;
        html += `  <answer>\n`;
        html += `    ${input[i + 1]}\n`;
        html += `  </answer>\n`;
    }
    html += '</quiz>\n';

    console.log(html);
}

templateFormat(["Dry ice is a frozen form of which gas?", "Carbon Dioxide",
    "What is the brightest star in the night sky?", "Sirius"]);