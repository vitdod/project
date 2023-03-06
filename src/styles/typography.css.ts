import { FontMetrics } from "@capsizecss/core";
import interFontMetrics from "@capsizecss/metrics/inter";
import { createTextStyle } from "@capsizecss/vanilla-extract";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { simplePost, titlePost } from "../UI/Components/Blocks/BlogPostsBlock/BlogPostsBlock.css";
import { singlePost } from "../UI/Components/Blocks/InfoBlock/InfoBlock.css";

interface Meta {
  fallback: string;
  file: string;
  format: string;
  metrics: FontMetrics;
  name: string;
  wghtRange: string;
  wghts: {
    [key: string]: number;
  };
}

type FontFamilyId = "JERMILOV" | "UBUNTU" | "UBUNTU_BOLD" | "UBUNTU_LIGHT";

type Fonts = Record<FontFamilyId, Meta>;

const FONT_DIR = `/fonts`;

export const fonts: Fonts = {
    JERMILOV: {
    fallback: `sans-serif`,
    file: `${FONT_DIR}/KTFJermilov-Solid.ttf`,
    format: `truetype-variations`,
    metrics: interFontMetrics,
    name: `Inter`,
    wghtRange: `100 900`,
    wghts: {
      "400": 400,
      "700": 700,
    },
  },
  UBUNTU: {
    fallback: `sans-serif`,
    file: `${FONT_DIR}/Ubuntu-Regular.ttf`,
    format: `truetype-variations`,
    metrics: interFontMetrics,
    name: `Ubuntu`,
    wghtRange: `100 900`,
    wghts: {
      "400": 400,
      "700": 700,
    },
  },
  UBUNTU_BOLD: {
    fallback: `sans-serif`,
    file: `${FONT_DIR}/Ubuntu-Bold.ttf`,
    format: `truetype-variations`,
    metrics: interFontMetrics,
    name: `UbuntuBold`,
    wghtRange: `100 900`,
    wghts: {
      "400": 400,
      "700": 700,
    },
  },
  UBUNTU_LIGHT: {
    fallback: `sans-serif`,
    file: `${FONT_DIR}/Ubuntu-Light.ttf`,
    format: `truetype-variations`,
    metrics: interFontMetrics,
    name: `UbuntuLight`,
    wghtRange: `100 900`,
    wghts: {
      "400": 400,
      "700": 700,
    },
  },
};

export const typeScaleJermiloff = {
  m: {
    size: 16,
    lheight: 20
  },
  l: {
    size: 20,
    lheight: 28
  },
  xl: {
    size: 28,
    lheight: 36
  },
  xxl: {
    size: 40,
    lheight: 48
  },
  xxxl: {
    size: 48,
    lheight: 56
  },
  xxxxl: {
    size: 64,
    lheight: 80
  },
};

export const typeScaleUbuntu = {
  xs: {
    size: 10,
    lheight: 16
  },
  s: {
    size: 13,
    lheight: 20
  },
  m: {
    size: 16,
    lheight: 24
  },
  l: {
    size: 20,
    lheight: 28
  },
  xl: {
    size: 28,
    lheight: 36
  },
  xxl: {
    size: 40,
    lheight: 48
  },
};



interface Props {
  id: FontFamilyId;
  leading: number;
  size: number;
}

function calcFontCss({ id, leading, size }: Props) {
  return style([
    createTextStyle({
      fontMetrics: fonts[id].metrics,
      fontSize: size,
      leading,
    }),
    {
      fontFamily: `"${fonts[id].name}", ${fonts[id].fallback}`,
    },
  ]);
}

type StyleId = "JERMILOV_M" | "JERMILOV_L" | "JERMILOV_XL" | "JERMILOV_XL" | "JERMILOV_XXL"| "JERMILOV_XXXL"| "JERMILOV_XXXXL"| "UBUNTU_XS"| "UBUNTU_S"| "UBUNTU_M"| "UBUNTU_L"| "UBUNTU_XL"| "UBUNTU_XXL" | "UBUNTU_BOLD_M" | "UBUNTU_LIGHT_M";

export const fontStyles: Record<StyleId, string> = {
  JERMILOV_M: calcFontCss({
    id: "JERMILOV",
    leading: typeScaleJermiloff.m.lheight,
    size: typeScaleJermiloff.m.size,
  }),
  JERMILOV_L: calcFontCss({
    id: "JERMILOV",
    leading: typeScaleJermiloff.l.lheight,
    size: typeScaleJermiloff.l.size,
  }),
  JERMILOV_XL: calcFontCss({
    id: "JERMILOV",
    leading: typeScaleJermiloff.xl.lheight,
    size: typeScaleJermiloff.xl.size,
  }),
  JERMILOV_XXL: calcFontCss({
    id: "JERMILOV",
    leading: typeScaleJermiloff.xxl.lheight,
    size: typeScaleJermiloff.xxl.size,
  }),
  JERMILOV_XXXL: calcFontCss({
    id: "JERMILOV",
    leading: typeScaleJermiloff.xxxl.lheight,
    size: typeScaleJermiloff.xxxl.size,
  }),
  JERMILOV_XXXXL: calcFontCss({
    id: "JERMILOV",
    leading: typeScaleJermiloff.xxxxl.lheight,
    size: typeScaleJermiloff.xxxxl.size,
  }),
  UBUNTU_XS: calcFontCss({
    id: "UBUNTU",
    leading: typeScaleUbuntu.xs.lheight,
    size: typeScaleUbuntu.xs.size,
  }),
  UBUNTU_S: calcFontCss({
    id: "UBUNTU",
    leading: typeScaleUbuntu.s.lheight,
    size: typeScaleUbuntu.s.size,
  }),
  UBUNTU_M: calcFontCss({
    id: "UBUNTU",
    leading: typeScaleUbuntu.m.lheight,
    size: typeScaleUbuntu.m.size,
  }),
  UBUNTU_L: calcFontCss({
    id: "UBUNTU",
    leading: typeScaleUbuntu.l.lheight,
    size: typeScaleUbuntu.l.size,
  }),
  UBUNTU_XL: calcFontCss({
    id: "UBUNTU",
    leading: typeScaleUbuntu.xl.lheight,
    size: typeScaleUbuntu.xl.size,
  }),
  UBUNTU_XXL: calcFontCss({
    id: "UBUNTU",
    leading: typeScaleUbuntu.xxl.lheight,
    size: typeScaleUbuntu.xxl.size,
  }),
  UBUNTU_BOLD_M : calcFontCss({
    id: "UBUNTU_BOLD",
    leading: typeScaleUbuntu.m.lheight,
    size: typeScaleUbuntu.m.size,
  }),
  
  UBUNTU_LIGHT_M : calcFontCss({
    id: "UBUNTU_LIGHT",
    leading: typeScaleUbuntu.m.lheight,
    size: typeScaleUbuntu.m.size,
  }),
};

export const label = fontStyles.UBUNTU_M;

export const medium = fontStyles.UBUNTU_M;

export const large = fontStyles.UBUNTU_L;

export const heading = fontStyles.UBUNTU_XL;

export const mainTitle = style({
  fontFamily: 'Inter',
  '@media': {
    'screen and (min-width: 960px)': {
        fontSize: typeScaleJermiloff.xxxxl.size,
        lineHeight: `${typeScaleJermiloff.xxxxl.lheight}px`,
    },
    'screen and (max-width: 959px)': {
      fontSize: typeScaleJermiloff.xxxl.size,
      lineHeight: `${typeScaleJermiloff.xxxl.lheight}px`,
    },
    'screen and (max-width: 639px)': {
      fontSize: typeScaleJermiloff.xl.size,
      lineHeight: `${typeScaleJermiloff.xl.lheight}px`,
    },
    'screen and (max-width: 519px)': {
      textAlign: 'center',
      width: '90%'
    }
}
})

export const mainTitleErrorPage = style({
  fontFamily: 'Inter',
  padding: '20px 0 0',
  width: '20%',
  '@media': {
    'screen and (min-width: 960px)': {
        fontSize: typeScaleJermiloff.xxxxl.size,
        lineHeight: `${typeScaleJermiloff.xxxxl.lheight}px`,
    },
    'screen and (max-width: 959px)': {
      fontSize: typeScaleJermiloff.xxxl.size,
      lineHeight: `${typeScaleJermiloff.xxxl.lheight}px`,
    },
    'screen and (max-width: 639px)': {
      fontSize: typeScaleJermiloff.xl.size,
      lineHeight: `${typeScaleJermiloff.xl.lheight}px`,
    },
    'screen and (max-width: 519px)': {
      textAlign: 'center',
      width: '90%'
    }
}
})

export const mainLogoTitle = recipe({
  base: {
  fontFamily: 'Inter',
  fontSize: typeScaleJermiloff.m.size,
  lineHeight: `${typeScaleJermiloff.m.lheight}px`,
  width: '190px',
  margin: "10px 0px 0px 10px",
  },
  variants: {
    type: {
      header: {
        '@media': {
          'screen and (max-width: 959px)': {
            color: "rgba(255, 255, 255, 0.7)",
            margin: '0 0 0 10px',
            fontSize: typeScaleJermiloff.xl.size,
            lineHeight: `${typeScaleJermiloff.xl.lheight}px`,
          },
      },
      },
      sidebar: {
        color: "rgba(255, 255, 255, 0.7)",
      },
    }
  }
})


export const headerBlockIntro = recipe({
  base: {
  fontFamily: 'UbuntuLight',
  paddingTop: '30px',
      '@media': {
        'screen and (min-width: 640px)': {
          fontSize: typeScaleUbuntu.l.size,
          lineHeight: `${typeScaleUbuntu.l.lheight}px`,
          width: '85%',
        },
        'screen and (max-width: 639px)': {
          fontSize: typeScaleUbuntu.m.size,
          lineHeight: `${typeScaleUbuntu.m.lheight}px`,
          width: '90%',
        },
        'screen and (max-width: 519px)': {
          textAlign: 'center',
          width: '100%',
          
        }
    }
  },
  variants: {
    type: {
      headerBlockIntroErrorPage: {
           width: "70%",
           '@media': {
             'screen and (min-width: 640px)': {
               fontSize: typeScaleUbuntu.l.size,
               lineHeight: `${typeScaleUbuntu.l.lheight}px`,
               width: "70%",
             },
          },
      }
    }
  }
})

// export const headerBlockIntroErrorPage = style({
//   fontFamily: 'UbuntuLight',
//   paddingTop: '30px',
//   '@media': {
//     'screen and (min-width: 640px)': {
//       fontSize: typeScaleUbuntu.l.size,
//       lineHeight: `${typeScaleUbuntu.l.lheight}px`,
//     },
//     'screen and (max-width: 639px)': {
//       fontSize: typeScaleUbuntu.m.size,
//       lineHeight: `${typeScaleUbuntu.m.lheight}px`,
//       width: '90%',
//     },
//     'screen and (max-width: 519px)': {
//       textAlign: 'center',
//       width: '100%',
      
//     }
// }
// })

export const footerMenuOption = style({
  fontFamily: 'UbuntuLight',
  paddingTop: '15px',
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: typeScaleUbuntu.l.size,
  '@media': {
    'screen and (max-width: 959px)': {
      fontSize: typeScaleUbuntu.m.size,
    },
}
})


export const titlePostHeading = style({
  fontFamily: "UbuntuBold",
  color: '#223444',
  fontSize: typeScaleUbuntu.xl.size,
  lineHeight: `${typeScaleUbuntu.xl.lheight}px`,
  paddingTop: "10px",
  selectors: {
    [`${titlePost}:hover &`] : {
      color: '#8E2424',transition: 'ease-out 0.3s',
    }
  },
  '@media': {
    'screen and (max-width: 959px)': {
      fontSize: typeScaleUbuntu.l.size,
      lineHeight: `${typeScaleUbuntu.l.lheight}px`,
    },
}
})
export const titlePostText = style({

  fontFamily: "UbuntuLight",
  color: '#111A22',
  fontSize: typeScaleUbuntu.l.size,
  lineHeight: `${typeScaleUbuntu.l.lheight}px`,
  selectors: {
    [`${titlePost}:hover &`] : {
      color: '#8E2424',transition: 'ease-out 0.3s',
    }
  },
  '@media': {
    'screen and (max-width: 959px)': {
      fontSize: typeScaleUbuntu.m.size,
      lineHeight: `${typeScaleUbuntu.m.lheight}px`,
    },
}
})

export const languageOption = style({
  color: '#223444',
  fontSize: typeScaleUbuntu.m.size,
  lineHeight: `${typeScaleUbuntu.m.lheight}px`,
})

export const blockHeading = recipe({
  base: {
  fontFamily: 'Inter',
  fontSize: '40px',
  lineHeight: '48px',
  letterSpacing:' 0.04em',
  },
  variants: {
    color: {
      red: {
        color: '#8E2424',
      },
      white: {
        color: '#ffffff',
      }
    }
  }
})


export const blogParagraph = recipe({
  base: {
  fontSize: typeScaleUbuntu.s.size,
  lineHeight: `${typeScaleUbuntu.s.lheight}px`,
  color: '#223444',
  },
  variants: {
      type: {
          paragraph: {
            fontFamily: "UbuntuLight",
              WebkitLineClamp: '8',
              WebkitBoxOrient: 'vertical',
              display: '-webkit-box',
              overflow: 'hidden',
              selectors: {
                [`${simplePost}:hover &`] : {
                  color: '#8E2424',transition: 'ease-out 0.3s',
                }
              }
          },
          paragraphInfoBlock: {  
            zIndex: '1',
            fontSize: typeScaleUbuntu.m.size,
            lineHeight: `${typeScaleUbuntu.m.lheight}px`,
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            overflow: 'hidden',
            paddingTop: '10px',
            selectors: {
              [`${singlePost}:hover &`] : {
                color: '#8E2424',transition: 'ease-out 0.3s',
              }
            }
          },
          link: {
              paddingTop: "7px",
              color: '#cacaca'
          },
          heading : {
            fontFamily: "UbuntuBold",
            selectors: {
              [`${simplePost}:hover &`] : {
                color: '#8E2424',transition: 'ease-out 0.3s',
              }
            }

          }
      }
  },

})


export const boldText = style([
  
  fontStyles.UBUNTU_M,
  { 
    color: "red",
    fontVariationSettings: `"wght" ${fonts.UBUNTU.wghts[700]}`,
  },
]);

export const helpPageMoneyTransferReasonBold = recipe({
  base: {
    fontFamily: "Inter",
    color: '#ffffff',
    fontSize: typeScaleJermiloff.xl.size,
    lineHeight: `${typeScaleJermiloff.xl.lheight}px`,
    '@media': {
        'screen and (max-width: 959px)': {
          fontSize: typeScaleJermiloff.l.size,
          lineHeight: `${typeScaleJermiloff.l.lheight}px`,
        },
    },
  },
  variants: {
    type: {
      moreHelpPageTitle: {
        color: '#111A22',
      },
      helpPageTitle: {
        color: '#ffffff',
      }
    }
  }
})

export const helpPageMoneyTransferReason = style({
  color: '#ffffff',
  fontSize: typeScaleUbuntu.s.size,
  lineHeight: `${typeScaleUbuntu.s.lheight}px`,
})

export const helpPageMoneyRequisiteBank = style({
  width: '190px',
  fontFamily: "UbuntuBold",
  color: '#ffffff',
  fontSize: typeScaleUbuntu.l.size,
  lineHeight: `${typeScaleUbuntu.l.lheight}px`,
})

export const helpPageMoneyRequisiteNumber = style({
  width: '190px',
  color: '#ffffff',
  fontSize: typeScaleUbuntu.m.size,
  lineHeight: `${typeScaleUbuntu.m.lheight}px`,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})

export const otherHelpPageText = style({
  width: '70%',
  minHeight: '200px',
  color: '#ffffff',
  fontSize: typeScaleUbuntu.s.size,
  lineHeight: `${typeScaleUbuntu.s.lheight}px`,
  '@media': {
      'screen and (max-width: 639px)': {
        width: '100%',
      },
  },
})

export const startPageHelpTitleText = style ({
  fontFamily: "UbuntuLight",
  fontSize: typeScaleUbuntu.l.size,
  lineHeight: `${typeScaleUbuntu.l.lheight}px`,
  color:'#111A22',
})

export const startPageHelpText = style ({
  fontSize: typeScaleUbuntu.l.size,
  lineHeight: `${typeScaleUbuntu.l.lheight}px`,
  color:'#111A22',
  '@media': {
      'screen and (max-width: 959px)': {
        color:'#111A22',
        fontSize: typeScaleUbuntu.m.size,
        lineHeight: `${typeScaleUbuntu.m.lheight}px`,
      },
  },
})

export const startPageHelpTextTitle = style ({
  fontFamily: "Inter",
  fontSize: typeScaleJermiloff.xl.size,
  lineHeight: `${typeScaleJermiloff.xl.lheight}px`,
  color:'#223444',
})

