interface mapType {
  [key: string]: string;
}

function sanitize(string: string): string {
  const map: mapType = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  const reg = /[&<>"'/]/gi;

  return string.replace(reg, (match) => map[match]);
}

type templateObject = {
  block?: string;
  cls?: string[];
  attrs?: string[];
  content?: string;
};

type templateType =
  | undefined
  | null
  | false
  | string
  | number
  | boolean
  | string[]
  | templateObject;

function stringTemplateEngine(templateWithData: templateType): string {
  if (
    templateWithData === undefined ||
    templateWithData === null ||
    templateWithData === false
  ) {
    return '';
  }

  if (
    typeof templateWithData === 'string' ||
    typeof templateWithData === 'number' ||
    templateWithData === true
  ) {
    return sanitize(String(templateWithData));
  }

  if (Array.isArray(templateWithData)) {
    let result = '';

    for (const templateItem of templateWithData) {
      result += stringTemplateEngine(templateItem);
    }

    return result;
  }

  let tag = `<${templateWithData.block}`;

  if (templateWithData.cls) {
    const classes = ([] as string[]).concat(templateWithData.cls).join(' ');

    tag += ` class="${classes}"`;
  }

  if (templateWithData.attrs) {
    for (const [key, value] of Object.entries<string>(templateWithData.attrs)) {
      tag += ` ${key}="${sanitize(value)}"`;
    }
  }

  tag += '>';

  tag += stringTemplateEngine(templateWithData.content);

  tag += `</${templateWithData.block}>`;

  return tag;
}

console.log(
  stringTemplateEngine({
    block: 'div',
    cls: ['block'],
    content: 'блoк',
  })
);
