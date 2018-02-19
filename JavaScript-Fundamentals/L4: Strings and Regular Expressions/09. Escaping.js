function htmlEscaping(items) {
    return '<ul>\n'
        + items.map(htmlEscape)
            .map(item => `\t<li>${item}</li>`)
            .join('\n')
        + '\n</ul>\n';

    function htmlEscape(input) {
        return input.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

console.log(htmlEscaping(['<b>unescaped text</b>', 'normal text']));