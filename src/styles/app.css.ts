import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { fonts } from "./typography.css";

Object.values(fonts).forEach(({ name, wghtRange, file, format }) => {
  globalFontFace(`"${name}"`, {
    fontDisplay: `optional`,
    fontStyle: `normal`,
    fontWeight: wghtRange,
    src: `url("${file}") format("${format}")`,
  });
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontFamily: fonts.UBUNTU.name,
  color: '#ffffff',
});

globalStyle("a", {
 textDecoration: 'none'
});

globalStyle("html", {
    margin: '0 auto',
    maxWidth: '1280px',
    backgroundColor: 'black'
})

globalStyle("button", {
  margin: '0 auto',
  maxWidth: '1280px',
  backgroundColor: 'black',
  cursor: "pointer"
})

globalStyle("body", {
    backgroundColor: '#111A22',
})

globalStyle("br", {
  display:' block'
})

// globalStyle("p, strong, h1, h2, h3, h4, h5, h6", {
//   fontVariationSettings: `"wght" ${fonts.UBUNTU.wghts[400]}`,
// });