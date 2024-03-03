function sanitize(string) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
    };
    var reg = /[&<>"'/]/gi;
    return string.replace(reg, function (match) { return map[match]; });
}
function stringTemplateEngine(templateWithData) {
    if (templateWithData === undefined ||
        templateWithData === null ||
        templateWithData === false) {
        return '';
    }
    if (typeof templateWithData === 'string' ||
        typeof templateWithData === 'number' ||
        templateWithData === true) {
        return sanitize(String(templateWithData));
    }
    if (Array.isArray(templateWithData)) {
        var result = '';
        for (var _i = 0, templateWithData_1 = templateWithData; _i < templateWithData_1.length; _i++) {
            var templateItem = templateWithData_1[_i];
            result += stringTemplateEngine(templateItem);
        }
        return result;
    }
    var tag = "<".concat(templateWithData.block);
    if (templateWithData.cls) {
        var classes = templateWithData.cls.join(' ');
        tag += " class=\"".concat(classes, "\"");
    }
    if (templateWithData.attrs) {
        for (var _a = 0, _b = Object.entries(templateWithData.attrs); _a < _b.length; _a++) {
            var _c = _b[_a], key = _c[0], value = _c[1];
            tag += " ".concat(key, "=\"").concat(sanitize(value), "\"");
        }
    }
    tag += '>';
    tag += stringTemplateEngine(templateWithData.content);
    tag += "</".concat(templateWithData.block, ">");
    return tag;
}
console.log(stringTemplateEngine({
    block: 'div',
    cls: ['block'],
    content: 'блок'
}));
