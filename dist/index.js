Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var RenderIfVisible = function (_a) {
    var _b = _a.initialVisible, initialVisible = _b === void 0 ? false : _b, _c = _a.defaultHeight, defaultHeight = _c === void 0 ? 300 : _c, _d = _a.visibleOffset, visibleOffset = _d === void 0 ? 1000 : _d, _e = _a.stayRendered, stayRendered = _e === void 0 ? false : _e, _f = _a.root, root = _f === void 0 ? null : _f, _g = _a.rootElement, rootElement = _g === void 0 ? 'div' : _g, _h = _a.rootElementClass, rootElementClass = _h === void 0 ? '' : _h, _j = _a.rootElementId, rootElementId = _j === void 0 ? '' : _j, _k = _a.placeholderElement, placeholderElement = _k === void 0 ? 'div' : _k, _l = _a.placeholderElementClass, placeholderElementClass = _l === void 0 ? '' : _l, children = _a.children;
    var _m = React.useState(initialVisible), isVisible = _m[0], setIsVisible = _m[1];
    var wasVisible = React.useRef(initialVisible);
    var placeholderHeight = React.useRef(defaultHeight);
    var intersectionRef = React.useRef(null);
    // Set visibility with intersection observer
    React.useEffect(function () {
        if (intersectionRef.current) {
            var localRef_1 = intersectionRef.current;
            var observer_1 = new IntersectionObserver(function (entries) {
                // Before switching off `isVisible`, set the height of the placeholder
                if (!entries[0].isIntersecting) {
                    placeholderHeight.current = localRef_1.offsetHeight;
                }
                if (typeof window !== undefined && window.requestIdleCallback) {
                    window.requestIdleCallback(function () { return setIsVisible(entries[0].isIntersecting); }, {
                        timeout: 600,
                    });
                }
                else {
                    setIsVisible(entries[0].isIntersecting);
                }
            }, { root: root, rootMargin: visibleOffset + "px 0px " + visibleOffset + "px 0px" });
            observer_1.observe(localRef_1);
            return function () {
                if (localRef_1) {
                    observer_1.unobserve(localRef_1);
                }
            };
        }
        return function () { };
    }, []);
    React.useEffect(function () {
        if (isVisible) {
            wasVisible.current = true;
        }
    }, [isVisible]);
    var placeholderStyle = { height: placeholderHeight.current };
    var rootClasses = React.useMemo(function () { return "renderIfVisible " + rootElementClass; }, [rootElementClass]);
    var placeholderClasses = React.useMemo(function () { return "renderIfVisible-placeholder " + placeholderElementClass; }, [placeholderElementClass]);
    return React__default.createElement(rootElement, {
        children: isVisible || (stayRendered && wasVisible.current) ? (React__default.createElement(React__default.Fragment, null, children)) : (React__default.createElement(placeholderElement, {
            className: placeholderClasses,
            style: placeholderStyle,
        })),
        ref: intersectionRef,
        className: rootClasses,
        id: rootElementId,
    });
};

exports.default = RenderIfVisible;
//# sourceMappingURL=index.js.map
