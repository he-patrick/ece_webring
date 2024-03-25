"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ui/test.jsx":
/*!************************************!*\
  !*** ./src/components/ui/test.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AsciiArtConverter = (param)=>{\n    let { imagePath } = param;\n    _s();\n    const MAXIMUM_WIDTH = 120;\n    const MAXIMUM_HEIGHT = 120;\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [asciiArt, setAsciiArt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const toGrayScale = (r, g, b)=>0.21 * r + 0.72 * g + 0.07 * b;\n    const getFontRatio = ()=>{\n        const pre = document.createElement(\"pre\");\n        pre.style.display = \"inline\";\n        pre.textContent = \" \";\n        document.body.appendChild(pre);\n        const { width, height } = pre.getBoundingClientRect();\n        document.body.removeChild(pre);\n        return height / width;\n    };\n    const convertToGrayScales = (context, width, height)=>{\n        const imageData = context.getImageData(0, 0, width, height);\n        const grayScales = [];\n        for(let i = 0; i < imageData.data.length; i += 4){\n            const r = imageData.data[i];\n            const g = imageData.data[i + 1];\n            const b = imageData.data[i + 2];\n            const grayScale = toGrayScale(r, g, b);\n            imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;\n            grayScales.push(grayScale);\n        }\n        context.putImageData(imageData, 0, 0);\n        return grayScales;\n    };\n    const clampDimensions = (width, height)=>{\n        const ratio = getFontRatio();\n        const rectifiedWidth = Math.floor(ratio * width);\n        if (height > MAXIMUM_HEIGHT) {\n            const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);\n            return [\n                reducedWidth,\n                MAXIMUM_HEIGHT\n            ];\n        }\n        if (width > MAXIMUM_WIDTH) {\n            const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);\n            return [\n                MAXIMUM_WIDTH,\n                reducedHeight\n            ];\n        }\n        return [\n            rectifiedWidth,\n            height\n        ];\n    };\n    const getCharacterForGrayScale = (grayScale)=>{\n        const grayRamp = \"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\\\"^`'. \";\n        const rampLength = grayRamp.length;\n        return grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];\n    };\n    const drawAscii = (grayScales, width)=>{\n        const asciiImage = grayScales.reduce((asciiImage, grayScale, index)=>{\n            let nextChars = getCharacterForGrayScale(grayScale);\n            if ((index + 1) % width === 0) {\n                nextChars += \"\\n\";\n            }\n            return asciiImage + nextChars;\n        }, \"\");\n        setAsciiArt(asciiImage);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!imagePath) return;\n        const loadImage = (src)=>{\n            return new Promise((resolve, reject)=>{\n                const image = new Image();\n                image.onload = ()=>resolve(image);\n                image.onerror = (e)=>reject(e);\n                image.src = src;\n            });\n        };\n        const processImage = async ()=>{\n            const canvas = canvasRef.current;\n            const context = canvas.getContext(\"2d\");\n            try {\n                const image = await loadImage(imagePath);\n                const [width, height] = clampDimensions(image.width, image.height);\n                canvas.width = width;\n                canvas.height = height;\n                context.drawImage(image, 0, 0, width, height);\n                const grayScales = convertToGrayScales(context, width, height);\n                drawAscii(grayScales, width);\n            } catch (e) {\n                console.error(\"Failed to load image:\", e);\n            }\n        };\n        processImage();\n    }, [\n        imagePath\n    ]); // Effect runs whenever imagePath changes\n    const letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n    const changeText = (event)=>{\n        let iterations = 0;\n        const originalLines = event.target.dataset.value.split(\"\\n\"); // Split the original ASCII art into lines\n        const interval = setInterval(()=>{\n            const scrambledText = originalLines.map((line, lineIndex)=>{\n                // Scramble each line individually\n                return line.split(\"\").map((char, charIndex)=>{\n                    const position = lineIndex * originalLines[0].length + charIndex; // Calculate the position in the original \"flat\" structure\n                    if (position < iterations) return event.target.dataset.value[position];\n                    return char === \"\\n\" ? \"\\n\" : letters[Math.floor(Math.random() * 26)];\n                }).join(\"\");\n            }).join(\"\\n\"); // Rejoin the lines with newline characters to preserve formatting\n            event.target.innerText = scrambledText;\n            if (iterations >= event.target.dataset.value.length) clearInterval(interval);\n            iterations += originalLines[0].length / 4; // Adjust iteration step based on line length\n        }, 35);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-[3px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                style: {\n                    display: \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\test.jsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                onMouseOver: changeText,\n                className: \"text-right\",\n                \"data-value\": asciiArt,\n                children: asciiArt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\test.jsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\test.jsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AsciiArtConverter, \"aRxMYzI5BSjQhwGNcj4DJkpyZtA=\");\n_c = AsciiArtConverter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsciiArtConverter);\nvar _c;\n$RefreshReg$(_c, \"AsciiArtConverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQ25CUSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0JBQ1Ysa0NBQWtDO2dCQUNsQyxPQUFPRCxLQUNKTCxLQUFLLENBQUMsSUFDTkksR0FBRyxDQUFDLENBQUNHLE1BQU1DO29CQUNWLE1BQU1DLFdBQVdILFlBQVlWLGFBQWEsQ0FBQyxFQUFFLENBQUN6QyxNQUFNLEdBQUdxRCxXQUFXLDBEQUEwRDtvQkFDNUgsSUFBSUMsV0FBV2QsWUFBWSxPQUFPRCxNQUFNRyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDVSxTQUFTO29CQUN0RSxPQUFPRixTQUFTLE9BQU8sT0FBT2YsT0FBTyxDQUFDOUIsS0FBS0MsS0FBSyxDQUFDRCxLQUFLZ0QsTUFBTSxLQUFLLElBQUk7Z0JBQ3ZFLEdBQ0NDLElBQUksQ0FBQztZQUNWLEdBQ0NBLElBQUksQ0FBQyxPQUFPLGtFQUFrRTtZQUVqRmpCLE1BQU1HLE1BQU0sQ0FBQ2UsU0FBUyxHQUFHVDtZQUN6QixJQUFJUixjQUFjRCxNQUFNRyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDNUMsTUFBTSxFQUFFMEQsY0FBY1o7WUFDbkVOLGNBQWNDLGFBQWEsQ0FBQyxFQUFFLENBQUN6QyxNQUFNLEdBQUcsR0FBRyw2Q0FBNkM7UUFDMUYsR0FBRztJQUNMO0lBRUEscUJBQ0UsOERBQUMyRDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQzdCO2dCQUFPOEIsS0FBS3hGO2dCQUFXVyxPQUFPO29CQUFFQyxTQUFTO2dCQUFPOzs7Ozs7MEJBQ2pELDhEQUFDSjtnQkFDQ2lGLGFBQWF4QjtnQkFDYnNCLFdBQVU7Z0JBQ1ZHLGNBQVl6RjswQkFFWEE7Ozs7Ozs7Ozs7OztBQUlUO0dBbEpNTDtLQUFBQTtBQW9KTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpL3Rlc3QuanN4PzI3ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFzY2lpQXJ0Q29udmVydGVyID0gKHsgaW1hZ2VQYXRoIH0pID0+IHtcclxuICBjb25zdCBNQVhJTVVNX1dJRFRIID0gMTIwO1xyXG4gIGNvbnN0IE1BWElNVU1fSEVJR0hUID0gMTIwO1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbYXNjaWlBcnQsIHNldEFzY2lpQXJ0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgdG9HcmF5U2NhbGUgPSAociwgZywgYikgPT4gMC4yMSAqIHIgKyAwLjcyICogZyArIDAuMDcgKiBiO1xyXG5cclxuICBjb25zdCBnZXRGb250UmF0aW8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuICAgIHByZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICBwcmUudGV4dENvbnRlbnQgPSAnICc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByZSk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHByZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocHJlKTtcclxuICAgIHJldHVybiBoZWlnaHQgLyB3aWR0aDtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb252ZXJ0VG9HcmF5U2NhbGVzID0gKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpID0+IHtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29uc3QgZ3JheVNjYWxlcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgY29uc3QgciA9IGltYWdlRGF0YS5kYXRhW2ldO1xyXG4gICAgICBjb25zdCBnID0gaW1hZ2VEYXRhLmRhdGFbaSArIDFdO1xyXG4gICAgICBjb25zdCBiID0gaW1hZ2VEYXRhLmRhdGFbaSArIDJdO1xyXG4gICAgICBjb25zdCBncmF5U2NhbGUgPSB0b0dyYXlTY2FsZShyLCBnLCBiKTtcclxuICAgICAgaW1hZ2VEYXRhLmRhdGFbaV0gPVxyXG4gICAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAxXSA9XHJcbiAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaSArIDJdID1cclxuICAgICAgICAgIGdyYXlTY2FsZTtcclxuICAgICAgZ3JheVNjYWxlcy5wdXNoKGdyYXlTY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICAgIHJldHVybiBncmF5U2NhbGVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsYW1wRGltZW5zaW9ucyA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICBjb25zdCByYXRpbyA9IGdldEZvbnRSYXRpbygpO1xyXG4gICAgY29uc3QgcmVjdGlmaWVkV2lkdGggPSBNYXRoLmZsb29yKHJhdGlvICogd2lkdGgpO1xyXG4gICAgaWYgKGhlaWdodCA+IE1BWElNVU1fSEVJR0hUKSB7XHJcbiAgICAgIGNvbnN0IHJlZHVjZWRXaWR0aCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKHJlY3RpZmllZFdpZHRoICogTUFYSU1VTV9IRUlHSFQpIC8gaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBbcmVkdWNlZFdpZHRoLCBNQVhJTVVNX0hFSUdIVF07XHJcbiAgICB9XHJcbiAgICBpZiAod2lkdGggPiBNQVhJTVVNX1dJRFRIKSB7XHJcbiAgICAgIGNvbnN0IHJlZHVjZWRIZWlnaHQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChoZWlnaHQgKiBNQVhJTVVNX1dJRFRIKSAvIHJlY3RpZmllZFdpZHRoXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBbTUFYSU1VTV9XSURUSCwgcmVkdWNlZEhlaWdodF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3JlY3RpZmllZFdpZHRoLCBoZWlnaHRdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENoYXJhY3RlckZvckdyYXlTY2FsZSA9IChncmF5U2NhbGUpID0+IHtcclxuICAgIGNvbnN0IGdyYXlSYW1wID1cclxuICAgICAgJyRAQiU4JldNIypvYWhrYmRwcXdtWk8wUUxDSlVZWHpjdnVueHJqZnQvfCgpMXt9W10/LV8rfjw+aSFsSTs6LFwiXmBcXCcuICc7XHJcbiAgICBjb25zdCByYW1wTGVuZ3RoID0gZ3JheVJhbXAubGVuZ3RoO1xyXG4gICAgcmV0dXJuIGdyYXlSYW1wW01hdGguY2VpbCgoKHJhbXBMZW5ndGggLSAxKSAqIGdyYXlTY2FsZSkgLyAyNTUpXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkcmF3QXNjaWkgPSAoZ3JheVNjYWxlcywgd2lkdGgpID0+IHtcclxuICAgIGNvbnN0IGFzY2lpSW1hZ2UgPSBncmF5U2NhbGVzLnJlZHVjZSgoYXNjaWlJbWFnZSwgZ3JheVNjYWxlLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgbmV4dENoYXJzID0gZ2V0Q2hhcmFjdGVyRm9yR3JheVNjYWxlKGdyYXlTY2FsZSk7XHJcbiAgICAgIGlmICgoaW5kZXggKyAxKSAlIHdpZHRoID09PSAwKSB7XHJcbiAgICAgICAgbmV4dENoYXJzICs9ICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhc2NpaUltYWdlICsgbmV4dENoYXJzO1xyXG4gICAgfSwgJycpO1xyXG5cclxuICAgIHNldEFzY2lpQXJ0KGFzY2lpSW1hZ2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWltYWdlUGF0aCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGxvYWRJbWFnZSA9IChzcmMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4gcmVqZWN0KGUpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHByb2Nlc3NJbWFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UoaW1hZ2VQYXRoKTtcclxuICAgICAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBjbGFtcERpbWVuc2lvbnMoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGdyYXlTY2FsZXMgPSBjb252ZXJ0VG9HcmF5U2NhbGVzKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBkcmF3QXNjaWkoZ3JheVNjYWxlcywgd2lkdGgpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgaW1hZ2U6JywgZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJvY2Vzc0ltYWdlKCk7XHJcbiAgfSwgW2ltYWdlUGF0aF0pOyAvLyBFZmZlY3QgcnVucyB3aGVuZXZlciBpbWFnZVBhdGggY2hhbmdlc1xyXG5cclxuICBjb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcclxuICBjb25zdCBjaGFuZ2VUZXh0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgaXRlcmF0aW9ucyA9IDA7XHJcbiAgICBjb25zdCBvcmlnaW5hbExpbmVzID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudmFsdWUuc3BsaXQoJ1xcbicpOyAvLyBTcGxpdCB0aGUgb3JpZ2luYWwgQVNDSUkgYXJ0IGludG8gbGluZXNcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzY3JhbWJsZWRUZXh0ID0gb3JpZ2luYWxMaW5lc1xyXG4gICAgICAgIC5tYXAoKGxpbmUsIGxpbmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgLy8gU2NyYW1ibGUgZWFjaCBsaW5lIGluZGl2aWR1YWxseVxyXG4gICAgICAgICAgcmV0dXJuIGxpbmVcclxuICAgICAgICAgICAgLnNwbGl0KCcnKVxyXG4gICAgICAgICAgICAubWFwKChjaGFyLCBjaGFySW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGxpbmVJbmRleCAqIG9yaWdpbmFsTGluZXNbMF0ubGVuZ3RoICsgY2hhckluZGV4OyAvLyBDYWxjdWxhdGUgdGhlIHBvc2l0aW9uIGluIHRoZSBvcmlnaW5hbCBcImZsYXRcIiBzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPCBpdGVyYXRpb25zKSByZXR1cm4gZXZlbnQudGFyZ2V0LmRhdGFzZXQudmFsdWVbcG9zaXRpb25dO1xyXG4gICAgICAgICAgICAgIHJldHVybiBjaGFyID09PSAnXFxuJyA/ICdcXG4nIDogbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNildO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbignJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbignXFxuJyk7IC8vIFJlam9pbiB0aGUgbGluZXMgd2l0aCBuZXdsaW5lIGNoYXJhY3RlcnMgdG8gcHJlc2VydmUgZm9ybWF0dGluZ1xyXG4gIFxyXG4gICAgICBldmVudC50YXJnZXQuaW5uZXJUZXh0ID0gc2NyYW1ibGVkVGV4dDtcclxuICAgICAgaWYgKGl0ZXJhdGlvbnMgPj0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudmFsdWUubGVuZ3RoKSBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgaXRlcmF0aW9ucyArPSBvcmlnaW5hbExpbmVzWzBdLmxlbmd0aCAvIDQ7IC8vIEFkanVzdCBpdGVyYXRpb24gc3RlcCBiYXNlZCBvbiBsaW5lIGxlbmd0aFxyXG4gICAgfSwgMzUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzNweF1cIj5cclxuICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PjwvY2FudmFzPlxyXG4gICAgICA8cHJlXHJcbiAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZVRleHR9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiXHJcbiAgICAgICAgZGF0YS12YWx1ZT17YXNjaWlBcnR9XHJcbiAgICAgID5cclxuICAgICAgICB7YXNjaWlBcnR9XHJcbiAgICAgIDwvcHJlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFzY2lpQXJ0Q29udmVydGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkFzY2lpQXJ0Q29udmVydGVyIiwiaW1hZ2VQYXRoIiwiTUFYSU1VTV9XSURUSCIsIk1BWElNVU1fSEVJR0hUIiwiY2FudmFzUmVmIiwiYXNjaWlBcnQiLCJzZXRBc2NpaUFydCIsInRvR3JheVNjYWxlIiwiciIsImciLCJiIiwiZ2V0Rm9udFJhdGlvIiwicHJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aCIsImhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlbW92ZUNoaWxkIiwiY29udmVydFRvR3JheVNjYWxlcyIsImNvbnRleHQiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJncmF5U2NhbGVzIiwiaSIsImRhdGEiLCJsZW5ndGgiLCJncmF5U2NhbGUiLCJwdXNoIiwicHV0SW1hZ2VEYXRhIiwiY2xhbXBEaW1lbnNpb25zIiwicmF0aW8iLCJyZWN0aWZpZWRXaWR0aCIsIk1hdGgiLCJmbG9vciIsInJlZHVjZWRXaWR0aCIsInJlZHVjZWRIZWlnaHQiLCJnZXRDaGFyYWN0ZXJGb3JHcmF5U2NhbGUiLCJncmF5UmFtcCIsInJhbXBMZW5ndGgiLCJjZWlsIiwiZHJhd0FzY2lpIiwiYXNjaWlJbWFnZSIsInJlZHVjZSIsImluZGV4IiwibmV4dENoYXJzIiwibG9hZEltYWdlIiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsImUiLCJwcm9jZXNzSW1hZ2UiLCJjYW52YXMiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImNvbnNvbGUiLCJlcnJvciIsImxldHRlcnMiLCJjaGFuZ2VUZXh0IiwiZXZlbnQiLCJpdGVyYXRpb25zIiwib3JpZ2luYWxMaW5lcyIsInRhcmdldCIsImRhdGFzZXQiLCJ2YWx1ZSIsInNwbGl0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNjcmFtYmxlZFRleHQiLCJtYXAiLCJsaW5lIiwibGluZUluZGV4IiwiY2hhciIsImNoYXJJbmRleCIsInBvc2l0aW9uIiwicmFuZG9tIiwiam9pbiIsImlubmVyVGV4dCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJvbk1vdXNlT3ZlciIsImRhdGEtdmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ui/test.jsx\n"));

/***/ })

});