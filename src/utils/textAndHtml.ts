import xss from 'xss'

const isSafeUrl = (url: string) =>
  ['/', 'http://', 'https://'].find((allowedPrefix) => url.startsWith(allowedPrefix))
/** Strip HTML tags and attributes that can be used for XSS attacks */
export const getSafeHtml = (unsafeHTML: string) =>
  xss(unsafeHTML, {
    onTagAttr: (tag, name, value) => {
      if (tag === 'a' && name === 'href' && isSafeUrl(value)) {
        if (value.startsWith('/')) {
          return `${name}="${value}"`
        }
        if (value.startsWith('http://') || value.startsWith('https://')) {
          return `${name}="${value}" rel="noopener noreferrer" target="_blank"`
        }

        return ''
      }
    },
    whiteList: { a: ['href'], br: [], em: [], i: [], li: [], ol: [], p: [], span: [], strong: [], ul: [] },
  })

/** Convert a HTML string into a string with appropriate newlines. Tags will be kept */
export const htmlNewlinesToNewlines = (unsafeHTML: string) =>
  xss(unsafeHTML, {
    onTag: (tag, html, options) => {
      if (tag === 'br') {
        return '\n'
      }
      if (tag === 'p' && options.sourcePosition !== 0) {
        return '\n'
      }
    },
  })

/** Convert a HTML string into a string with appropriate newlines */
export const getPlainText = (unsafeHTML: string) => stripTags(htmlNewlinesToNewlines(unsafeHTML))

/** Remove all HTML tags and double spaces */
export const stripTags = (unsafeHTML: string) =>
  xss(unsafeHTML, {
    onIgnoreTag: (tag, html, options) => {
      if (tag === 'br') {
        return ' '
      }

      if (tag === 'p' && options.sourcePosition !== 0) {
        return ' '
      }
      return ''
    },
    stripBlankChar: true,
    whiteList: {},
  })
    .replace(/&nbsp;/g, ' ')
    .replace(/ {2}/g, ' ')
    .replace(/&amp;/g, '&')

    export const cleanString = (input: string) => {
      var output = "";
      for (var i=0; i<input.length; i++) {
          if (input.charCodeAt(i) <= 127) {
              output += input.charAt(i);
          }
      }
      return output;
  }