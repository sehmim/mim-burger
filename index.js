"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MimBurger = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactAnchorLinkSmoothScroll = _interopRequireDefault(require("react-anchor-link-smooth-scroll"));

var _styleIt = _interopRequireDefault(require("style-it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MimBurger =
/*#__PURE__*/
function (_Component) {
  _inherits(MimBurger, _Component);

  function MimBurger(props) {
    var _this;

    _classCallCheck(this, MimBurger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MimBurger).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleLinkChange", function () {
      document.getElementById("nav_toggle").checked = false;
    });

    _this.state = {
      hamburgerDataState: []
    };
    return _this;
  }

  _createClass(MimBurger, [{
    key: "validateHamburgerData",
    value: function validateHamburgerData(data) {
      if (data !== undefined) {
        if (data !== null) {
          if (data.length !== 0) {
            return data;
          }
        }
      }
    }
  }, {
    key: "validateImageData",
    value: function validateImageData(imgUrl) {
      if (imgUrl !== null || imgUrl !== undefined) {
        return imgUrl;
      }
    }
  }, {
    key: "whenValidated",
    value: function whenValidated(data, imgUrl) {
      return this.validateHamburgerData(data) || this.validateImageData(imgUrl);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          hamburgerData = _this$props.hamburgerData,
          circleImg = _this$props.circleImg;

      if (this.whenValidated(hamburgerData, circleImg)) {
        this.setState({
          circleImgState: circleImg
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var hamburgerData = this.props.hamburgerData;

      if (hamburgerData) {
        return _styleIt["default"].it("              \n                .navigation {\n                    top: 90vh;\n                    position: fixed;\n                    left: 1.5vw;\n                    z-index: 3000;\n                  }\n                  .navigation_checkbox {\n                    display: none;\n                    z-index: 2500;\n                  }\n                  .navigation_button {\n                    display: flex;\n                    height: 3.5rem;\n                    width: 3.5rem;\n                    border-radius: 50%;\n                    background: -webkit-radial-gradient(\n                      circle,\n                      #42acff 0,\n                      rgba(66, 172, 255, 0.2) 90%\n                    );\n                    background: radial-gradient(circle, #42acff 0, rgba(66, 172, 255, 0.2) 90%);\n                    position: fixed;\n                    z-index: 2500;\n                    box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.1);\n                    cursor: pointer;\n                    justify-content: center;\n                  }\n                  .navigation_button span {\n                    display: flex;\n                    align-items: center;\n                    cursor: pointer;\n                  }\n                  .navigation_background {\n                    height: 3.5rem;\n                    width: 3.5rem;\n                    border-radius: 50%;\n                    background: -webkit-radial-gradient(\n                      circle,\n                      #fff 0,\n                      #f1f1ff 15%,\n                      rgba(241, 241, 255, 0.8) 18%\n                    );\n                    background: radial-gradient(\n                      circle,\n                      #fff 0,\n                      #f1f1ff 15%,\n                      rgba(241, 241, 255, 0.8) 18%\n                    );\n                    z-index: 2000;\n                    -webkit-transition: -webkit-transform 0.5s;\n                    transition: -webkit-transform 0.5s;\n                    transition: transform 0.5s;\n                    transition: transform 0.5s, -webkit-transform 0.5s;\n                  }\n                  .navigation_nav {\n                    height: 100vh;\n                    z-index: 150;\n                    opacity: 0;\n                    width: 0;\n                    -webkit-transition: all 0.15s;\n                    transition: all 0.15s;\n                  }\n                  .navigation_list {\n                    -webkit-perspective: 150rem;\n                    perspective: 150rem;\n                    position: relative;\n                    bottom: 25vh;\n                    left: 22vw;\n                    -webkit-transform: translate(-50%, -50%);\n                    transform: translate(-50%, -50%);\n                    z-index: 200;\n                  }\n                  .navigation_item {\n                    display: inline-block;\n                    padding: 25px;\n                    margin: 5%;\n                    text-transform: uppercase;\n                    font-size: 18px;\n                    background-size: 240%;\n                    background-image: -webkit-linear-gradient(330deg, #fff, #fff 50%, #f0f0ff 0);\n                    background-image: linear-gradient(120deg, #fff, #fff 50%, #f0f0ff 0);\n                    -webkit-transition: all 0.3s ease;\n                    transition: all 0.3s ease;\n                    border-radius: 4%;\n                    font-weight: 900;\n                  }\n                  .navigation_item:hover {\n                    background-position: 100%;\n                    color: #fe6b8b;\n                    background-color: #000;\n                    box-shadow: 10px 10px 5px 3px rgba(0, 0, 0, 0.4);\n                  }\n                  .navigation_link {\n                    font-weight: 100;\n                    text-transform: uppercase;\n                    font-size: 25px;\n                    color: rgba(0, 0, 0, 0.72);\n                  }\n                  .navigation_checkbox:checked ~ .navigation_background {\n                    -webkit-transform: scale(20);\n                    transform: scale(20);\n                  }\n                  .navigation_checkbox:checked ~ .navigation_nav {\n                    opacity: 1;\n                    width: 100%;\n                  }\n                  .flex-navbar-hamburger-container {\n                    cursor: pointer;\n                  }\n                  .navigation_list {\n                    display: flex;\n                    flex-direction: column;\n                    top: -45%;\n                  }\n                  @media (min-width: 1281px) {\n                    .navigation_list {\n                      left: 10vw;\n                      bottom: 16vh;\n                    }\n                  }\n                  @media (min-width: 768px) and (max-width: 1440px) {\n                    .background-img {\n                      width: 40%;\n                    }\n                    .navigation_list {\n                      left: 10vw;\n                      bottom: 20vh;\n                    }\n                  }\n                  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n                    .background-img {\n                      width: 30%;\n                    }\n                  }\n                  @media (min-width: 481px) and (max-width: 767px) {\n                    .background-img {\n                      width: 45%;\n                    }\n                    .header-main {\n                      font-size: 75px;\n                    }\n                    .third-page {\n                      -webkit-clip-path: ellipse(60% 100% at 51% 100%);\n                      clip-path: ellipse(60% 100% at 51% 100%);\n                    }\n                  }\n                  @media (min-width: 320px) and (max-width: 480px) {\n                    .background-img {\n                      width: 65%;\n                    }\n                    .header-main {\n                      font-size: 75px;\n                    }\n                    .navigation_list {\n                      left: 40vw;\n                    }\n                  }\n            ", _react["default"].createElement("div", {
          className: "flex-navbar-hamburger-container"
        }, _react["default"].createElement("div", {
          className: "navigation"
        }, _react["default"].createElement("input", {
          type: "checkbox",
          className: "navigation_checkbox",
          id: "nav_toggle"
        }), _react["default"].createElement("label", {
          htmlFor: "nav_toggle",
          className: "navigation_button"
        }, _react["default"].createElement("span", null, this.skipCircleImgState ? _react["default"].createElement("img", {
          className: "navigation_img",
          src: this.state.circleImgState
        }) : null)), _react["default"].createElement("div", {
          className: "navigation_background"
        }, "\xA0"), _react["default"].createElement("nav", {
          className: "navigation_nav"
        }, _react["default"].createElement("ul", {
          className: "navigation_list"
        }, hamburgerData.map(function (item, index) {
          return _react["default"].createElement(_reactAnchorLinkSmoothScroll["default"], {
            offset: "0",
            onClick: _this2.handleLinkChange,
            href: item.href,
            className: "navigation_link",
            key: index
          }, _react["default"].createElement("li", {
            className: "navigation_item"
          }, item.title));
        }))))));
      }

      if (this.state.hamburgerDataState.length === 0) {
        return _react["default"].createElement("div", null, _react["default"].createElement("h3", null, " !! Hamburger Alert !! Your Not Passing Right Parameters"));
      }
    }
  }]);

  return MimBurger;
}(_react.Component);

exports.MimBurger = MimBurger;
