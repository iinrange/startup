webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_testimonial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/testimonial */ "./src/data/testimonial.js");

var _jsxFileName = "C:\\Users\\bejar\\Desktop\\nextjs_landing_page\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */






var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
var carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }),
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1
};
function TestimonialCard() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    id: "testimonial",
    sx: {
      variant: 'section.testimonial'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    css: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: "Testimonail",
    title: "Meet Client Satisfaction",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), _data_testimonial__WEBPACK_IMPORTED_MODULE_7__["testimonials"].map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.reviewCard,
      key: item.sliderClass,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rating: item.review,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h3",
      sx: styles.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, " ", item.description, " "), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.avatar,
      alt: "Client Image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }
    }))));
  }))));
}
_c = TestimonialCard;
var styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s'
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: ['30px 20px 35px', '30px 25px 35px', '30px 20px 35px', '35px 30px 40px 40px', '30px 30px 35px', '35px 30px 40px 40px'],
    bg: 'white',
    textAlign: 'left',
    m: ['28px 5px 30px 5px', '28px 20px 30px 20px', '28px 15px 30px 15px', '28px 15px 30px 15px', '30px 20px 40px'],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)'
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex'
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0
        }
      },
      '.star': {
        color: 'primary',
        mr: '1px'
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px'
      }
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover'
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4
  }
};

var _c;

$RefreshReg$(_c, "TestimonialCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsImxhcHRvcCIsInRhYmxldCIsIm1vYmlsZSIsImNhcm91c2VsUGFyYW1zIiwiYWRkaXRpb25hbFRyYW5zZnJvbSIsImFycm93cyIsImF1dG9QbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImRyYWdnYWJsZSIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsIml0ZW1DbGFzcyIsImtleUJvYXJkQ29udHJvbCIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJUZXN0aW1vbmlhbENhcmQiLCJ2YXJpYW50IiwidGV4dEFsaWduIiwic3R5bGVzIiwiY2Fyb3VzZWxXcmFwcGVyIiwidGVzdGltb25pYWxzIiwibWFwIiwiaXRlbSIsInJldmlld0NhcmQiLCJyZXZpZXciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXZhdGFyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtdCIsInB4Iiwid2lkdGgiLCJtYXhXaWR0aCIsIm1yIiwibWwiLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInAiLCJiZyIsIm0iLCJtYiIsInVsIiwicGwiLCJsaXN0U3R5bGUiLCJzdmciLCJtYXJnaW5SaWdodCIsImNvbG9yIiwibWFyZ2luVG9wIiwiZmxleFNocmluayIsImltZyIsImhlaWdodCIsIm9iamVjdEZpdCIsImZvbnRT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RDtBQUdYUCxTQUFLLEVBQUUsTUFISTtBQUlYUSxjQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLENBQWI7QUFKRCxHQXhHQTtBQThHYkMsU0FBTyxFQUFFO0FBQ1BILFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQURIO0FBRVBDLGNBQVUsRUFBRSxHQUZMO0FBR1BiLE1BQUUsRUFBRSxLQUhHO0FBSVBNLFNBQUssRUFBRSxNQUpBO0FBS1BRLGNBQVUsRUFBRTtBQUxMLEdBOUdJO0FBcUhiRSxhQUFXLEVBQUU7QUFDWFYsU0FBSyxFQUFFLFNBREk7QUFFWE8sY0FBVSxFQUFFLEtBRkQ7QUFHWEQsWUFBUSxFQUFFLENBSEM7QUFJWEUsY0FBVSxFQUFFO0FBSkQ7QUFySEEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYzRiNTJlMGE0YTRlNTg1MjhkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuaW1wb3J0IFJhdGluZyBmcm9tICdjb21wb25lbnRzL3JhdGluZyc7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcblxuXG5pbXBvcnQge3Rlc3RpbW9uaWFsc30gZnJvbSAnLi4vZGF0YS90ZXN0aW1vbmlhbCdcblxuXG5cblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgZGVza3RvcDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDE2MTkgfSxcbiAgICBpdGVtczogNCxcbiAgICBzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICB9LFxuICBsYXB0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXG4gICAgaXRlbXM6IDMsXG4gICAgc2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgdGFibGV0OiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjQwIH0sXG4gICAgaXRlbXM6IDIsXG4gICAgc2xpZGVzVG9TbGlkZTogMiwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgbW9iaWxlOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXG4gICAgaXRlbXM6IDEsXG4gICAgc2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbn07XG5cbmNvbnN0IGNhcm91c2VsUGFyYW1zID0ge1xuICBhZGRpdGlvbmFsVHJhbnNmcm9tOjAsXG4gIGFycm93czpmYWxzZSxcbiAgYXV0b1BsYXlTcGVlZDozMDAwLFxuICBjZW50ZXJNb2RlOmZhbHNlLFxuICBjbGFzc05hbWU6XCJcIixcbiAgY29udGFpbmVyQ2xhc3M6XCJjYXJvdXNlbC1jb250YWluZXJcIixcbiAgY3VzdG9tQnV0dG9uR3JvdXA6PEJ1dHRvbkdyb3VwIC8+LFxuICBkb3RMaXN0Q2xhc3M6XCJcIixcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBmb2N1c09uU2VsZWN0OmZhbHNlLFxuICBpbmZpbml0ZTp0cnVlLFxuICBpdGVtQ2xhc3M6XCJcIixcbiAga2V5Qm9hcmRDb250cm9sOiB0cnVlLFxuICBtaW5pbXVtVG91Y2hEcmFnOjgwLFxuICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG4gIHJlbmRlckRvdHNPdXRzaWRlOmZhbHNlLFxuICByZXNwb25zaXZlOnJlc3BvbnNpdmUsXG4gIHNob3dEb3RzOmZhbHNlLFxuICBzbGlkZXJDbGFzczpcIlwiLFxuICBzbGlkZXNUb1NsaWRlOjEsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD0ndGVzdGltb25pYWwnIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24udGVzdGltb25pYWwnfX0+XG4gICAgICA8Q29udGFpbmVyIGNzcz17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICA8U2VjdGlvbkhlYWRlciBcbiAgICAgICAgICBzbG9nYW49XCJUZXN0aW1vbmFpbFwiXG4gICAgICAgICAgdGl0bGU9J01lZXQgQ2xpZW50IFNhdGlzZmFjdGlvbidcbiAgICAgICAgLz5cblxuXG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJvdXNlbFdyYXBwZXJ9PlxuICAgICAgICA8Q2Fyb3VzZWwgey4uLmNhcm91c2VsUGFyYW1zfT5cbiAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgoaXRlbSk9PihcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5yZXZpZXdDYXJkfSBrZXk9e2l0ZW0uc2xpZGVyQ2xhc3N9PlxuICAgICAgICAgICAgICA8UmF0aW5nIHJhdGluZz17aXRlbS5yZXZpZXd9IC8+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzID0naDMnIHN4PXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PiB7aXRlbS5kZXNjcmlwdGlvbn0gPC9UZXh0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1mb290ZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZSc+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmF2YXRhcn0gYWx0PSdDbGllbnQgSW1hZ2UnLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cblxuICAgICAgICA8L0Nhcm91c2VsPlxuXG4gICAgICA8L0JveD5cbiAgICA8L3NlY3Rpb24+XG4gICBcbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJvdXNlbFdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcbiAgICBtdDogJy0zMHB4JyxcbiAgICBweDogJzE1cHgnLFxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1heFdpZHRoOiBbXG4gICAgICAgICcxMDAlJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJzc1MHB4JyxcbiAgICAgICAgJzEwMDBweCcsXG4gICAgICAgICcxMTgwcHgnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnY2FsYyg1MCUgKyA4NjVweCknLFxuICAgICAgXSxcbiAgICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTIyMHB4J10sXG4gICAgICBtbDogJ2F1dG8nLFxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtJzoge1xuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIH0sXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0biknOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KSc6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXZpZXdDYXJkOiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDBweCAxcHggcmdiYSgzOCwgNzgsIDExOCwgMC4zNSknLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcbiAgICBwOiBbXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxuICAgICAgJzMwcHggMjVweCAzNXB4JyxcbiAgICAgICczMHB4IDIwcHggMzVweCcsXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXG4gICAgICAnMzBweCAzMHB4IDM1cHgnLFxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxuICAgIF0sXG4gICAgYmc6ICd3aGl0ZScsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbTogW1xuICAgICAgJzI4cHggNXB4IDMwcHggNXB4JyxcbiAgICAgICcyOHB4IDIwcHggMzBweCAyMHB4JyxcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcbiAgICAgICczMHB4IDIwcHggNDBweCcsXG4gICAgXSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzBweCA2cHggMzBweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpJyxcbiAgICB9LFxuICAgICcucmF0aW5nJzoge1xuICAgICAgbWI6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIHVsOiB7XG4gICAgICAgIHBsOiAwLFxuICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgICAgbWI6IDAsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIH0sXG4gICAgICBzdmc6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJy5zdGFyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICBtcjogJzFweCcsXG4gICAgICB9LFxuICAgICAgJy5zdGFyLW8nOiB7XG4gICAgICAgIGNvbG9yOiAnI2RkZCcsXG4gICAgICAgIG1yOiAnMXB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnLmNhcmQtZm9vdGVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6IFs1LCBudWxsLCBudWxsLCAnMzNweCddLFxuICAgICAgJy5pbWFnZSc6IHtcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgbXI6IFszLCBudWxsLCBudWxsLCA0XSxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICB3aWR0aDogJzU1cHgnLFxuICAgICAgICAgIGhlaWdodDogJzU1cHgnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgJzIycHgnXSxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbWI6ICczcHgnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgbGluZUhlaWdodDogMS4zLFxuICB9LFxuICBkZXNpZ25hdGlvbjoge1xuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgZm9udFNpemU6IDEsXG4gICAgbGluZUhlaWdodDogMS40LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=