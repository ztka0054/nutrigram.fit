module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1LAX":
/***/ (function(module) {

module.exports = JSON.parse("{\"cont_f_1\":\"Legal\",\"cont_f_2\":\"Terms and contitions\",\"politics_1\":\"Privacy policies\"}");

/***/ }),

/***/ "1M/m":
/***/ (function(module) {

module.exports = JSON.parse("{\"cont_f_1\":\"Legal\",\"cont_f_2\":\"Términos y condiciones\",\"politics_1\":\"Políticas de privacidad\"}");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AppAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kaMA");
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5u/R");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("gRZq");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_contexts_AppAuth__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps)), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
        position: "bottom-right",
        hideProgressBar: true,
        newestOnTop: false,
        closeOnClick: true,
        rtl: true,
        pauseOnFocusLoss: false,
        draggable: true,
        pauseOnHover: false,
        autoClose: 4000
      })]
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "3/y/":
/***/ (function(module) {

module.exports = JSON.parse("{\"select_es\":\"Español\",\"select_en\":\"Inglés\",\"button_login\":\"Iniciar Sesión\",\"button_signin\":\"Registrarse\",\"tag_aboutus\":\"Sobre nosotros\",\"tag_app\":\"App\",\"tag_blog\":\"Blog\"}");

/***/ }),

/***/ "3TIc":
/***/ (function(module) {

module.exports = JSON.parse("{\"title_1\":\"¡Que bueno verte de nuevo!\",\"sub_1\":\"Olvidaste tu contraseña\"}");

/***/ }),

/***/ "3wEx":
/***/ (function(module) {

module.exports = JSON.parse("{\"menu_1\":\"Patients\",\"menu_2\":\"Equivalents\",\"menu_3\":\"Recipes\",\"menu_4\":\"Menus\",\"menu_5\":\"Appointments\",\"menu_6\":\"Blog\",\"tit_profile\":\"My profile\",\"tit_blog_1_1\":\"Blog posts\",\"tit_blog_1_2\":\"New blog post\",\"tit_blog_1_3\":\"Edit blog post\",\"tit_recipe_1_1\":\"Recipe category\",\"tit_recipe_1_2\":\"Recipes\",\"tit_recipe_1_3\":\"New recipe\",\"tit_recipe_1_4\":\"Select a food\",\"tit_recipe_1_4_1\":\"Food\",\"tit_recipe_1_5\":\"Edit recipe\",\"tit_recipe_1_6\":\"Equivalents\",\"tit_quote_1_1\":\"Select a patient\",\"tit_quote_1_2\":\"Appointment change\",\"tit_menu_1_1\":\"Menus\",\"tit_menu_1_2\":\"Select a recipe\",\"tit_euivalent_1_1\":\"Equivalent category\",\"tit_euivalent_2_1\":\"Equivalents\",\"tit_euivalent_3_1\":\"Ingredients\",\"tit_pacient_1_1\":\"Patients\",\"tit_pacient_1_2\":\"New patient\",\"tit_pacient_1_3\":\"Edit patient\",\"tit_pacient_1_tag_1\":\"Clinic history\",\"tit_pacient_1_tag_2\":\"Gynecological\",\"tit_pacient_1_tag_3\":\"Diet\",\"tit_pacient_1_tag_4\":\"Questionnaire\",\"tit_pacient_1_tag_5\":\"Lifestyle\",\"tit_pacient_2_1\":\"Patient detail\",\"tit_pacient_2_tag_1\":\"Inquiries\",\"tit_pacient_2_tag_2\":\"Eating plan\",\"tit_pacient_2_tag_2_1\":\"Dietary history\",\"tit_pacient_2_tag_2_2\":\"Physical activity\",\"tit_pacient_2_tag_3\":\"Biochemical\",\"tit_pacient_2_2\":\"Consultation\",\"tit_pacient_2_3\":\"New consultation\",\"tit_pacient_2_4\":\"Patient configuration\",\"tit_pacient_2_5\":\"Consultation configuration\",\"tit_pacient_2_6\":\"New study\",\"tit_pacient_2_7\":\"Food plan\",\"tit_pacient_2_8\":\"Hydration\",\"tit_pacient_2_9\":\"Hydration plan\",\"tit_select_plan_1\":\"Select a plan\",\"tit_select_plan_2\":\"Terminate current subscription\",\"tit_pay_1\":\"Payment gateway\",\"tit_food_2\":\"New equivalent\",\"tab_1_ti_1\":\"Food\",\"tab_1_col_1\":\"Suggested quantity\",\"tab_1_col_2\":\"Unint\",\"tab_1_col_3\":\"Gross weight (g)\",\"tab_1_col_4\":\"Net weight (g)\",\"tab_1_col_5\":\"Energy (kcal)\",\"tab_1_col_6\":\"Protein (g)\",\"tab_1_col_8\":\"Carbohidratos\",\"tab_1_col_9\":\"Fiber\",\"tab_1_col_10\":\"Vitamin A (ug)\",\"tab_1_col_11_1\":\"Ascorbic acid\",\"tab_1_col_11_2\":\"(mg)\",\"tab_1_col_12\":\"Folic acid (ug)\",\"tab_1_col_13_1\":\"Iron NO HEM\",\"tab_1_col_13_2\":\"(mg)\",\"tab_1_col_14\":\"Potassium (mg)\",\"tab_1_col_15\":\"Glycemic index\",\"tab_1_col_16\":\"Glycemic load\",\"tit_pacient_config_1\":\"Clinical history questions\",\"tit_pacient_config_2\":\"Medical history questions\",\"tit_pacient_config_3\":\"Consultation fields\",\"tit_pacient_config_4\":\"Configuration consultation\",\"tit_pacient_config_5\":\"Custom Questions\",\"tit_pacient_config_6\":\"Activate Questions\",\"tit_pacient_config_7\":\"Activate Anthropometries\",\"tit_pacient_config_8\":\"Activate Folds\",\"tit_pacient_config_9\":\"Activate circumference\",\"tit_pacient_config_10\":\"Activate consultation fields\",\"tit_pacient_config_11\":\"Enable medical history questions\",\"tit_menu_day\":\"Select the recipe for the day: \",\"studies\":\"Studies\"}");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4x+6":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Terms and Conditions\"}");

/***/ }),

/***/ "5End":
/***/ (function(module) {

module.exports = JSON.parse("{\"title_1\":\"How good to see you again!\",\"sub_1\":\"Did you forget your password\"}");

/***/ }),

/***/ "5u/R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContext; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_i18n_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kK77");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hI02");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8WVE");





 // import enviroment from "../helper/enviroment/config";
// const tagManagerArgs = {
//     gtmId: enviroment.idGoogleTagManagger,
// };
//Context

const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null); //Provider

const AppContextProvider = ({
  children
}) => {
  const {
    locale,
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: useLocale,
    1: setUseLocale
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: queryLang,
    1: setQueryLang
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: basePath,
    1: setBasePath
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: objectsSignUp,
    1: setObjectsSignUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: flagChangeElement,
    1: setFlagChangeElement
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    (async () => {
      setUseLocale(null);
      await _helper_i18n_config__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].changeLanguage(locale);
      setUseLocale(locale);
    })();
  }, [locale]); // const [loadTagManager, setLoadTagManager] = useState(false);
  // useEffect(() => {
  //     TagManager.initialize(tagManagerArgs);
  //     setLoadTagManager(true);
  // }, []);

  const putQueryLang = data => {
    setQueryLang(data);
  };

  const putBasePath = data => {
    setBasePath(data);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setQueryLang({});
    setBasePath(null);
  }, [pathname]);

  const putObjectSignUp = data => {
    setObjectsSignUp(data);
  };

  const putFlagChangeElement = () => {
    setFlagChangeElement(!flagChangeElement);
  };

  const values = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    locale: useLocale,
    queryLang,
    putQueryLang,
    basePath,
    putBasePath,
    // loadTagManager,
    objectsSignUp,
    putObjectSignUp,
    flagChangeElement,
    putFlagChangeElement
  }), [useLocale, queryLang, flagChangeElement]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AppContext.Provider, {
    value: values,
    children: children
  });
};

/* harmony default export */ __webpack_exports__["b"] = (AppContextProvider);

/***/ }),

/***/ "8WVE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeToken; });
/* unused harmony export setLocale */
/* unused harmony export getLocale */
/* unused harmony export removeLocale */
/* unused harmony export setCurrency */
/* unused harmony export getCurrency */
/* unused harmony export removeCurrency */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setIdNutritionist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIdNutritionist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeIdNutritionist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setPic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removePic; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wyBh");

function setToken(token) {
  localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* TOKEN */ "f"], token);
}
function getToken() {
  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* TOKEN */ "f"]);
}
function removeToken() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* TOKEN */ "f"]);
}
function setLocale(locale) {
  localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE */ "d"], locale);
}
function getLocale() {
  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE */ "d"]);
}
function removeLocale() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE */ "d"]);
}
function setCurrency(currency) {
  localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* CURRENCY */ "a"], currency);
}
function getCurrency() {
  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* CURRENCY */ "a"]);
}
function removeCurrency() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* CURRENCY */ "a"]);
}
function setIdNutritionist(id) {
  localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* ID */ "c"], id);
}
function getIdNutritionist() {
  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* ID */ "c"]);
}
function removeIdNutritionist() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* ID */ "c"]);
}
function setPic(token) {
  localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* PIC */ "e"], token);
}
function getPic() {
  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* PIC */ "e"]);
}
function removePic() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* PIC */ "e"]);
}

/***/ }),

/***/ "BbLC":
/***/ (function(module) {

module.exports = JSON.parse("{\"sub_1\":\"Bienvenid@ a Nutrigram\",\"title_1_1\":\"Lo último en \",\"title_1_2\":\"tecnología y salud\",\"cont_1_1\":\"Obtén el nivel de vida que siempre has deseado al conectar fácilmente con nutriólogos en nuestra app integral, sencilla y gratis.\",\"cont_1_2\":\"Descarga la app\",\"sub_2\":\"Sobre Nutrigram\",\"title_2\":\"El futuro de la nutrición en tus manos\",\"cont_2\":\"Nutrigram es una plataforma integral hecha para facilitar las consultas de nutrición. Les brinda la tecnología necesaria a los nutriólogos para que tengas tu plan de alimentación personalizado, puedan actualizar los planes en tiempo real y estar mejor conectados. Tener una vida sana nunca fue tan fácil.\",\"sub_3\":\"Lo que ofrecemos\",\"title_3\":\"Beneficios de nuestra aplicación\",\"cont_3\":\"\",\"cont_3_p_1\":\"Alimentación a la medida en la palma de tu mano, creada por un nutriólogo profesional\",\"cont_3_p_2\":\"Seguimiento fácil y rápido de tu alimentación, actividad física, y composición corporal\",\"cont_3_p_3\":\"Nos encargamos de recetas, menús y hasta la lista del súper\",\"title_4\":\"Descarga nuestra App\",\"cont_4_1\":\"Disponible en App Store y Google Play\",\"cont_4_2\":\"\",\"sub_5\":\"Testimonios\",\"title_5\":\"Lorem Ipsum is simply\",\"cont_5_t_1\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\",\"cont_5_j_1\":\"Director\",\"cont_5_t_2\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\",\"cont_5_j_2\":\"Director\",\"cont_5_t_3\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\",\"cont_5_j_3\":\"Director\",\"title_6_1\":\"El futuro de la nutrición \",\"title_6_2\":\"en tus manos\",\"cont_6_1\":\"Tener una vida sana nunca fue tan fácil\"}");

/***/ }),

/***/ "EsO2":
/***/ (function(module) {

module.exports = JSON.parse("{\"spanish\":\"Español\",\"english\":\"Inglés\",\"yes\":\"Si\",\"no\":\"No\",\"none\":\"Ningún\",\"years\":\"años\",\"email\":\"Email\",\"password\":\"Contraseña\",\"name\":\"Nombre\",\"full_name\":\"Nombre completo\",\"lastName\":\"Apellido\",\"age\":\"Edad\",\"specialization\":\"Especialización\",\"professionalLicense\":\"Cédula profesional\",\"phone\":\"Teléfono\",\"facebook\":\"Facebook\",\"twitter\":\"Twitter\",\"instagram\":\"Instagram\",\"webPage\":\"Página web\",\"search\":\"Buscar\",\"date\":\"Fecha\",\"options\":\"Opciones\",\"title\":\"Título\",\"text\":\"Texto\",\"active\":\"Activo\",\"public\":\"Público\",\"category\":\"Categoría\",\"categories\":\"Categorías\",\"regions\":\"Regiones\",\"region\":\"Región\",\"difficulty\":\"Dificultad\",\"servings\":\"Porciones\",\"ingredients\":\"Ingredientes\",\"preparation\":\"Preparación\",\"ingredient\":\"Ingrediente\",\"portion\":\"Porción\",\"quantity\":\"Cantidad\",\"patient\":\"Paciente\",\"patients\":\"pacientes\",\"schedule\":\"Horario\",\"start\":\"Inicio\",\"end\":\"Final\",\"last_appointment\":\"Última cita\",\"previous_appointment\":\"Cita anterior\",\"new_appointment\":\"Nueva cita\",\"posts\":\"entradas\",\"menus\":\"menús\",\"recipes_u\":\"Recetas\",\"recipes\":\"recetas\",\"equivalents\":\"equivalentes\",\"birth\":\"Nacimiento\",\"gender\":\"Género\",\"dateBirth\":\"Fecha de nacimiento\",\"profession\":\"Profesión\",\"note\":\"Nota\",\"notes\":\"Notas\",\"dietnotes\":\"Notas dieta\",\"reason_consultation\":\"Motivo de consulta\",\"current_conditions\":\"Padecimientos actuales\",\"observations\":\"Observaciones\",\"take\":\"Toma\",\"family_background\":\"Antecedentes familiares\",\"ailments\":\"Padecimientos\",\"ailment\":\"Padecimiento\",\"past_ailments\":\"Padecimientos pasados\",\"other_ailments\":\"Otros padecimientos\",\"operations\":\"Operaciones\",\"operations_1\":\"¿Le han realizado alguna cirugía?\",\"take_medication\":\"Toma algún medicamento\",\"dose\":\"Dosis\",\"take_supplement\":\"Toma algún suplemento\",\"pregnant\":\"Embarazada\",\"gestation_time\":\"Tiempo de gestación\",\"last_menstruation\":\"Fecha de última menstruación (FUM)\",\"hormonal_problems\":\"Problemas hormonales\",\"hormonal_therapy\":\"Terapia hormonal\",\"contraceptives\":\"Anticonceptivos\",\"contraceptives_1\":\"Uso de anticonceptivos\",\"climacteric\":\"Climatérica\",\"alcohol\":\"Alcohol\",\"smoke\":\"Fumar\",\"coffee\":\"Café\",\"foods\":\"Comidas\",\"foods_1\":\"Alimentos\",\"allergies\":\"Alergias\",\"diet_text\":\"¿Has hecho alguna dieta antes?\",\"allergies_text\":\"¿Tienes algún tipo de alergia o intolerancia alimentaria?\",\"dislikes_text\":\"¿Qué alimentos no te gustan?\",\"restrictions_text\":\"¿Tienes algún tipo de restricción dietética (ej. vegano)?\",\"restrictions\":\"Restricciones\",\"water\":\"Agua\",\"not_like\":\"No gusta\",\"preferences\":\"Preferencias\",\"usual_diet\":\"Dieta habitual\",\"hour\":\"Hora\",\"diet\":\"Dieta\",\"diet_1\":\"Plan de alimentación\",\"place\":\"Lugar\",\"consulations\":\"consultas\",\"questionnaire\":\"Cuestionario\",\"questionnaire_consult\":\"Cuestionario de seguimiento\",\"question\":\"Pregunta\",\"goals\":\"Metas\",\"goal\":\"Meta\",\"anthropometry\":\"Antropometría\",\"folds\":\"Pliegues\",\"circumference\":\"Circunferencia\",\"define\":\"Definir\",\"characteristic\":\"Característica\",\"previous\":\"Anterior\",\"current\":\"Actual\",\"aceptTerms\":\"Acepto los\",\"aceptTerms_1\":\"términos y condiciones\",\"unit\":\"Unidad\",\"equivalent\":\"Equivalentes\",\"cal\":\"cal\",\"prot\":\"prot\",\"lip\":\"lip\",\"starting_weight\":\"Peso inicial\",\"last_weight\":\"Último peso\",\"last_weight_1\":\"Peso actual\",\"initial_fat\":\"% grasa incial\",\"last_fat\":\"Último % grasa\",\"day_kcal\":\"Requerimiento energético por día (kcal)\",\"value\":\"Valor\",\"diarrhea\":\"Diarrea\",\"constipation\":\"Estreñimiento\",\"gastritis\":\"Gastritis\",\"ulcer\":\"Úlcera\",\"nausea\":\"Náuseas\",\"queasiness\":\"Náuseas\",\"pyrosis\":\"Pirosis\",\"vomit\":\"Vómito\",\"colitis\":\"Colitis\",\"obesity\":\"Obesidad\",\"laxative\":\"Laxantes\",\"diuretic\":\"Diurético\",\"antacid\":\"Antiácido\",\"analgesic\":\"Analgésico\",\"diabetes\":\"Diabetes\",\"hypertension\":\"Hipertensión\",\"cancer\":\"Cáncer\",\"thyroidProblems\":\"Problema tiroides\",\"dyslipidemia\":\"Dislipidemias\",\"heartDisease\":\"Enfermedades del corazón\",\"gastrointestinalDisease\":\"Enfermedades gastrointestinales\",\"traits\":\"Rasgos\",\"trait\":\"Rasgo\",\"harris\":\"Harris-Benedic\",\"mifflin\":\"Mifflin-St\",\"owen\":\"Owen\",\"fao\":\"FAO/OMS\",\"average\":\"Promedio\",\"activity\":\"Actividad física\",\"energy_cal\":\"Cálculo de energía\",\"physical_act\":\"Actividad física\",\"light\":\"Ligera\",\"moderate\":\"Moderada\",\"heavy\":\"Intensa\",\"select_diff_1\":\"Fácil\",\"select_diff_2\":\"Moderado\",\"select_diff_3\":\"Difícil\",\"cost\":\"Costo\",\"cardNumber\":\"Número de tarjeta\",\"expirationDate\":\"Fecha expiración\",\"cvc\":\"CVC\",\"tag_cv\":\"CV\",\"tag_code\":\"Código Nutrigram\",\"tag_plan\":\"Plan actual\",\"tag_add_img\":\"Agregar imagen\",\"tag_add_video\":\"Agregar vídeo\",\"tag_add_doc\":\"Agregar documento\",\"tag_edit_doc\":\"Editar documento\",\"tag_cal_1\":\"Lun\",\"tag_cal_2\":\"Mar\",\"tag_cal_3\":\"Mie\",\"tag_cal_4\":\"Jue\",\"tag_cal_5\":\"Vie\",\"tag_cal_6\":\"Sab\",\"tag_cal_7\":\"Dom\",\"table_tag_1\":\"Total\",\"table_empty\":\"Sin resultados\",\"kind_food\":\"Tipo de comida\",\"how_many_foods\":\"¿Cuántas comidas haces al día?\",\"dont_like_food\":\"Alimentos que no le gusten\",\"like_food\":\"Alimentos preferidos\",\"menu\":\"Menú\",\"menu_\":\"Menú:\",\"equivalent_recipes\":\"Recetas Equivalentes\",\"delete_modal\":\"¿Está seguro de realizar esta acción?\",\"Male\":\"Masculino\",\"Female\":\"Femenino\",\"studies_\":\"estudios\",\"from_\":\"De:\",\"to_\":\"a:\",\"portion_\":\"Porción:\",\"last_consultation\":\"Última consulta\",\"next_consultation\":\"Próxima consulta\",\"send\":\"Enviar\",\"day_physical\":\"¿Cuántos días de ejercicio hace a la semana?\",\"minutes_physical\":\"Minutos de actividad al día\",\"training_type\":\"Tipo de entrenamiento\",\"schedule_physical\":\"Horario\",\"clasification_pyshical\":\"Clasificación de la actividad\",\"strength\":\"Fuerza\",\"cardio\":\"Cardio\",\"sedentary\":\"Sedentario\",\"intense\":\"Intensa\",\"portions\":\"Porciones\",\"weight\":\"Peso (g)\",\"grossWeight\":\"Peso bruto (g)\",\"calories\":\"Calorías (kcal)\",\"protein\":\"Proteína (g)\",\"lipids\":\"Lipidos (g)\",\"carbohydrates\":\"Carbohidratos (g)\",\"fiber\":\"Fibra (g)\",\"vitaminA\":\"Vitamina A (g)\",\"ascorbicAcid\":\"Ácido ascórbico (mg)\",\"folicAcid\":\"Ácido fólico (µg)\",\"hemIron\":\"Hierro Hemo (mg)\",\"nonHemIron\":\"Hierro No Hemo (mg)\",\"potassium\":\"Potasio (mg)\",\"glycemicIndex\":\"Índice glucémico\",\"glycemicLoad\":\"Carga glicemica\",\"sugarByEquivalent\":\"Azúcar equivalente (g)\",\"calcium\":\"Calcio (mg)\",\"sodium\":\"Sodio (mg)\",\"selenium\":\"Selenio (µg)\",\"phosphorus\":\"Fósforo (mg)\",\"cholesterol\":\"Colesterol (mg)\",\"saturatedFattyAcids\":\"Ácidos grasos saturados (g)\",\"monounsaturatedFattyAcids\":\"Ácidos grasos monoinsaturados (g)\",\"polyunsaturatedFattyAcids\":\"Ácidos grasos poliinsaturados (g)\",\"ethanol\":\"Etanol (g)\",\"suggestedQuantity\":\"Cantidad sugerida\",\"defaultPortion\":\"Porción predeterminada\",\"name_menu\":\"Nombre Menú\",\"Assigned_menu\":\"Menú Asignado\",\"select\":\"Seleccionar\",\"unnamed\":\"Sin nombre\",\"unity\":\"Unidad\",\"title_config_quotes\":\"Configuración de Horarios\",\"title_config_1_quotes\":\"Disponibilidad\",\"title_config_2_quotes\":\"Fechas no disponibles\",\"empty_quotes\":\"Sin horarios definidos\",\"from_quotes\":\"de\",\"to_quotes\":\"a\",\"day_quotes\":\"Día\",\"modal_new_quotes\":\"Nuevo horario disponible\",\"modal_new_1_quotes\":\"Nuevas fechas no disponibles\",\"modal_edit_quotes\":\"Editar horario disponible\",\"modal_edit_1_quotes\":\"Editar fechas no disponibles\",\"modal_delete_quotes\":\"Borrar horario\",\"modal_delete_2_quotes\":\"Borrar fecha no disponible\",\"modal_delete_1_quotes\":\"Estas seguro de realizar esta acción\",\"calendar_button\":\"Configurar Horario\",\"title_new\":\"Nueva Cita\",\"title_change\":\"Cambio de cita\",\"new_none_patient\":\"Seleccione un usuario\",\"none_quotes_list\":\"No cuentas con citas programadas\",\"validation_patient\":\"Debes seleccionar un paciente\",\"title_1_change_quote\":\"Datos de la cita\",\"title_2_change_quote\":\"Propuesta del paciente\",\"start_date\":\"Fecha de inicio\",\"final_date\":\"Fecha final\",\"Monday\":\"Lunes\",\"Tuesday\":\"Martes\",\"Wednesday\":\"Miércoles\",\"Thursday\":\"Jueves\",\"Friday\":\"Viernes\",\"Saturday\":\"Sábado\",\"Sunday\":\"Domingo\",\"DOM.\":\"DOM.\",\"LUN.\":\"LUN.\",\"MAR.\":\"MAR.\",\"MIR.\":\"MIR.\",\"JUE.\":\"JUE.\",\"VIE.\":\"VIE.\",\"SAB.\":\"SÁB.\"}");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FImf":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Términos y condiciones\"}");

/***/ }),

/***/ "JeW5":
/***/ (function(module) {

module.exports = JSON.parse("{\"sub_1\":\"Welcome to Nutrigram\",\"title_1_1\":\"The latest on \",\"title_1_2\":\"health tecnology.\",\"cont_1_1\":\"Get the lifestyle you’ve always wanted by easily connecting with nutritionist inour complete, simple and free app.\",\"cont_1_2\":\"Download the app\",\"sub_2\":\"About Nutrigram\",\"title_2\":\"The future of nutrition in your hands\",\"cont_2\":\"Nutrigram is an integral software made to facilitate nutrition. It provides healthcare professionals with the necessary technology to give nutrition plans right at theit patients‘ fingertips. Living a healthy life has never been easier.\",\"sub_3\":\"What we offer\",\"title_3\":\"Benefits of our app\",\"cont_3\":\"\",\"cont_3_p_1\":\"Custom-made meal plans at your fingertips, curated by professional nutritionists\",\"cont_3_p_2\":\"Quick and easy diet, physical activity, and body composition tracking\",\"cont_3_p_3\":\"We’ll deal with recepies, menus and even the grocery list\",\"title_4\":\"Download our App\",\"cont_4_1\":\"Available on the App Store and Google Play\",\"cont_4_2\":\"\",\"sub_5\":\"Testimonials\",\"title_5\":\"Elorem Ipsum is simply\",\"cont_5_t_1\":\"Elorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\",\"cont_5_j_1\":\"Manager\",\"cont_5_t_2\":\"Elorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\",\"cont_5_j_2\":\"Manager\",\"cont_5_t_3\":\"Elorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\",\"cont_5_j_3\":\"Manager\",\"title_6_1\":\"The future of nutrition \",\"title_6_2\":\"in your hands\",\"cont_6_1\":\"Living a healthy life has never been easier\"}");

/***/ }),

/***/ "JqEp":
/***/ (function(module) {

module.exports = JSON.parse("{\"spanish\":\"Spanish\",\"english\":\"English\",\"yes\":\"Yes\",\"no\":\"No\",\"none\":\"No\",\"years\":\"years\",\"email\":\"Email\",\"password\":\"Password\",\"name\":\"Name\",\"full_name\":\"Full name\",\"lastName\":\"Last Name\",\"age\":\"Age\",\"specialization\":\"Specialization\",\"professionalLicense\":\"Professional License\",\"phone\":\"Phone\",\"facebook\":\"Facebook\",\"twitter\":\"Twitter\",\"instagram\":\"Instagram\",\"webPage\":\"Web page\",\"search\":\"Search\",\"date\":\"Date\",\"options\":\"Options\",\"title\":\"Title\",\"text\":\"Text\",\"active\":\"Active\",\"public\":\"Public\",\"category\":\"Category\",\"categories\":\"Categories\",\"regions\":\"Regions\",\"region\":\"Region\",\"difficulty\":\"Difficulty\",\"servings\":\"Servings\",\"ingredients\":\"Ingredients\",\"preparation\":\"Preparation\",\"ingredient\":\"Ingredient\",\"portion\":\"Portion\",\"quantity\":\"Quantity\",\"patient\":\"Patient\",\"patients\":\"patients\",\"schedule\":\"Schedule\",\"start\":\"Start\",\"end\":\"End\",\"last_appointment\":\"Last appointment\",\"previous_appointment\":\"Previous appointment\",\"new_appointment\":\"New appointment\",\"posts\":\"posts \",\"menus\":\"menus\",\"recipes_u\":\"Recipes\",\"recipes\":\"recipes\",\"equivalents\":\"equivalents\",\"birth\":\"Birth\",\"gender\":\"Gender\",\"dateBirth\":\"Date of birth\",\"profession\":\"Profession\",\"note\":\"Note\",\"notes\":\"Notes\",\"dietnotes\":\"Diet notes\",\"reason_consultation\":\"Reason for consultation\",\"current_conditions\":\"Current conditions\",\"observations\":\"Observations\",\"take\":\"Take\",\"family_background\":\"Family background\",\"ailments\":\"Ailments\",\"ailment\":\"Ailments\",\"past_ailments\":\"Past ailments\",\"other_ailments\":\"Other ailments\",\"operations\":\"Operations\",\"operations_1\":\"Have you had any surgery? \",\"take_medication\":\"Take any medication\",\"dose\":\"Dose\",\"take_supplement\":\"Take a supplement\",\"pregnant\":\"Pregnant\",\"gestation_time\":\"Gestation time\",\"last_menstruation\":\"Date of last menstruation (DLM) \",\"hormonal_problems\":\"Hormonal problems\",\"hormonal_therapy\":\"Hormonal therapy\",\"contraceptives\":\"Contraceptives\",\"contraceptives_1\":\"Use of contraceptives\",\"climacteric\":\"Climacteric\",\"alcohol\":\"Alcohol\",\"smoke\":\"Smoke\",\"coffee\":\"Coffee\",\"foods\":\"Foods\",\"foods_1\":\"Foods\",\"allergies\":\"Allergies\",\"diet_text\":\"Have you done a diet before?\",\"allergies_text\":\"Do you have some kind of allergy or food intolerance?\",\"dislikes_text\":\"What food do you not like?\",\"restrictions_text\":\"Do you have some kind of dietary restriction?\",\"restrictions\":\"Restrictions\",\"water\":\"Water\",\"not_like\":\"Does not like\",\"preferences\":\"Preferences\",\"usual_diet\":\"Usual diet\",\"hour\":\"Hour\",\"diet\":\"Diet\",\"diet_1\":\"Eating plan\",\"place\":\"Place\",\"consulations\":\"consulations\",\"questionnaire\":\"Questionnaire\",\"questionnaire_consult\":\"Follow-up questionnaire\",\"question\":\"Question\",\"goals\":\"Goals\",\"goal\":\"Goal\",\"anthropometry\":\"Anthropometry\",\"folds\":\"Folds\",\"circumference\":\"Circumference\",\"characteristic\":\"Characteristic\",\"previous\":\"Previous\",\"current\":\"Current\",\"aceptTerms\":\"I accept the\",\"aceptTerms_1\":\"terms and conditions\",\"unit\":\"Unit\",\"equivalent\":\"Equivalent\",\"cal\":\"cal\",\"prot\":\"prot\",\"lip\":\"lip\",\"starting_weight\":\"Starting weight\",\"last_weight\":\"Last weight\",\"last_weight_1\":\"Actual weight\",\"initial_fat\":\"% initial fat\",\"last_fat\":\"Last % fat\",\"day_kcal\":\"Energy requirement per day (kcal)\",\"value\":\"Value\",\"diarrhea\":\"Diarrhea\",\"constipation\":\"Constipation\",\"gastritis\":\"Gastritis\",\"ulcer\":\"Ulcer\",\"nausea\":\"Sickness\",\"queasiness\":\"Queasiness\",\"pyrosis\":\"Pyrosis\",\"vomit\":\"Vomit\",\"colitis\":\"Colitis\",\"obesity\":\"Obesity\",\"laxative\":\"Laxative\",\"diuretic\":\"Diuretic\",\"antacid\":\"Antacid\",\"analgesic\":\"Analgesic\",\"diabetes\":\"Diabetes\",\"hypertension\":\"Hypertension\",\"cancer\":\"Cancer\",\"thyroidProblems\":\"Thyroid Problems\",\"dyslipidemia\":\"Dyslipidemia\",\"heartDisease\":\"Heart Disease\",\"gastrointestinalDisease\":\"Gastrointestinal Disease\",\"traits\":\"Traits\",\"trait\":\"Trait\",\"harris\":\"Harris-Benedic\",\"mifflin\":\"Mifflin-St\",\"owen\":\"Owen\",\"fao\":\"FAO/OMS\",\"average\":\"Average\",\"activity\":\"Physical activity\",\"energy_cal\":\"Energy calculation\",\"physical_act\":\"Physical activity\",\"light\":\"Light\",\"moderate\":\"Moderate\",\"heavy\":\"Heavy\",\"select_diff_1\":\"Easy\",\"select_diff_2\":\"Moderate\",\"select_diff_3\":\"Hard\",\"cost\":\"Cost\",\"cardNumber\":\"Card number\",\"expirationDate\":\"Expiration date\",\"cvc\":\"CVC\",\"tag_cv\":\"CV\",\"tag_code\":\"Nutrigram code\",\"tag_plan\":\"Current plan\",\"tag_add_img\":\"Add image\",\"tag_add_video\":\"Add video\",\"tag_add_doc\":\"Add document\",\"tag_edit_doc\":\"Edit document\",\"tag_cal_1\":\"Mon\",\"tag_cal_2\":\"Tue\",\"tag_cal_3\":\"Wed\",\"tag_cal_4\":\"Thu\",\"tag_cal_5\":\"Fri\",\"tag_cal_6\":\"Sat\",\"tag_cal_7\":\"Sun\",\"table_tag_1\":\"Total\",\"table_empty\":\"Without results\",\"kind_food\":\"Kind of food\",\"how_many_foods\":\"How many meals do up to date?\",\"dont_like_food\":\"Food that you do not like\",\"like_food\":\"Preferred foods\",\"menu\":\"Menu\",\"menu_\":\"Menu:\",\"equivalent_recipes\":\"Equivalent Recipes\",\"delete_modal\":\"Are you sure to realize this action?\",\"Male\":\"Male\",\"Female\":\"Female\",\"studies_\":\"studies\",\"from_\":\"From:\",\"to_\":\"to:\",\"portion_\":\"Portion:\",\"last_consultation\":\"Last consultation\",\"next_consultation\":\"Next consultation\",\"send\":\"Send\",\"day_physical\":\"How many days of exercise do you do a week?\",\"minutes_physical\":\"Minutes of activity a day\",\"training_type\":\"Training type\",\"schedule_physical\":\"Schedule\",\"clasification_pyshical\":\"Classification of activity\",\"strength\":\"Strength\",\"cardio\":\"Cardio\",\"sedentary\":\"Sedentary\",\"intense\":\"Intense\",\"portions\":\"Portions\",\"weight\":\"Weight (g)\",\"grossWeight\":\"Gross Weight (g)\",\"calories\":\"Calories (kcal)\",\"protein\":\"Protein (g)\",\"lipids\":\"Lipids (g)\",\"carbohydrates\":\"Carbohydrates (g)\",\"fiber\":\"Fiber (g)\",\"vitaminA\":\"Vitamin A (g)\",\"ascorbicAcid\":\"Ascorbic Acid (mg)\",\"folicAcid\":\"Folic Acid (µg)\",\"hemIron\":\"Heme Iron (mg)\",\"nonHemIron\":\"Non-Heme Iron (mg)\",\"potassium\":\"Potassium (mg)\",\"glycemicIndex\":\"Glycemic Index\",\"glycemicLoad\":\"Glycemic Load\",\"sugarByEquivalent\":\"Sugar By Equivalent (g)\",\"calcium\":\"Calcium (mg)\",\"sodium\":\"Sodium (mg)\",\"selenium\":\"Selenium (µg)\",\"phosphorus\":\"Phosphorus (mg)\",\"cholesterol\":\"Cholesterol (mg)\",\"saturatedFattyAcids\":\"Saturated Fatty Acids (g)\",\"monounsaturatedFattyAcids\":\"Monounsaturated Fatty Acids (g)\",\"polyunsaturatedFattyAcids\":\"Polyunsaturated Fatty Acids (g)\",\"ethanol\":\"Etanol (g)\",\"suggestedQuantity\":\"Suggested quantity\",\"defaultPortion\":\"Default portion\",\"name_menu\":\"Menu name\",\"Assigned_menu\":\"Assigned Menu\",\"select\":\"Select\",\"unnamed\":\"Unnamed\",\"unity\":\"Unity\",\"title_config_quotes\":\"Schedule configuration\",\"title_config_1_quotes\":\"Availability\",\"title_config_2_quotes\":\"Dates not available\",\"empty_quotes\":\"No defined schedules\",\"from_quotes\":\"from\",\"to_quotes\":\"to\",\"day_quotes\":\"Day\",\"modal_new_quotes\":\"New available schedule\",\"modal_new_1_quotes\":\"New dates not available\",\"modal_edit_quotes\":\"Edit available schedule\",\"modal_edit_1_quotes\":\"Edit dates not available\",\"modal_delete_quotes\":\"Delete schedule\",\"modal_delete_2_quotes\":\"Delete not available date\",\"modal_delete_1_quotes\":\"You are sure to perform this action\",\"calendar_button\":\"Configure schedule\",\"title_new\":\"New appointment\",\"title_change\":\"Change of appointment\",\"new_none_patient\":\"Select a user\",\"none_quotes_list\":\"Do not have scheduled appointments\",\"validation_patient\":\"You must select a patient\",\"title_1_change_quote\":\"Appointment data\",\"title_2_change_quote\":\"Patient proposal\",\"start_date\":\"Start date\",\"final_date\":\"Final date\",\"Monday\":\"Monday\",\"Tuesday\":\"Tuesday\",\"Wednesday\":\"Wednesday\",\"Thursday\":\"Thursday\",\"Friday\":\"Friday\",\"Saturday\":\"Saturday\",\"Sunday\":\"Sunday\",\"DOM.\":\"SUN.\",\"LUN.\":\"MON.\",\"MAR.\":\"TUE.\",\"MIR.\":\"WED.\",\"JUE.\":\"THU.\",\"VIE.\":\"FRI.\",\"SAB.\":\"SAT.\"}");

/***/ }),

/***/ "KmwE":
/***/ (function(module) {

module.exports = JSON.parse("{\"sub_1\":\"Meal plans\",\"title_1\":\"Personalized meal plan\",\"cont_1\":\"Menus and different food options at hand. Forget about carrying your menu around or sticking it in the fridge. With nutrigram you have your nutritionist in your pocket.\",\"sub_2\":\"Exercise\",\"title_2\":\"Track your physical activity\",\"cont_2\":\"We help you motivate yourself and exercise more, meet the recommended physical activity goals to improve your health.\",\"sub_3\":\"News\",\"title_3\":\"Blog and events\",\"cont_3\":\"Don't miss out on what's new in your city. All articles shared are supported by science. Don’t believe everything your read on social media, listen to the experts.\",\"sub_4\":\"Grocery list\",\"title_4\":\"Get your grocery list specific to your meal plan\",\"cont_4\":\"Grocery lists are annoying to make, let us handle it. We’ll get your ingredients ready for shopping son you can accomplish your goals!\",\"title_5\":\"Download our App\",\"title_5_1\":\"Available on the App Store and Google Play\",\"title_5_2\":\"\",\"com_title_1\":\"Coming soon\",\"com_title_2\":\"Our apps\",\"com_title_3\":\"In the most important app stores\",\"monday\":\"Monday\",\"tuesday\":\"Tuesday\",\"wednesday\":\"Wednesday\",\"thursday\":\"Thursday\",\"friday\":\"Friday\",\"saturday\":\"Saturday\",\"sunday\":\"Sunday\"}");

/***/ }),

/***/ "MQhX":
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "TSaV":
/***/ (function(module) {

module.exports = JSON.parse("{\"save\":\"Guardar\",\"add\":\"Agregar\",\"choose\":\"Seleccionar\",\"delete\":\"Borrar\",\"accept\":\"Aceptar\",\"cancel\":\"Cancelar\",\"accept_appoiment\":\"Aceptar cambio\",\"cancel_appoiment\":\"Rechazar cambio\",\"refuse\":\"Rechazar\",\"edit\":\"Editar\",\"define\":\"Definir\",\"finish\":\"Terminar\",\"pay\":\"Pagar\",\"notes\":\"Notas\",\"send\":\"Enviar\",\"see\":\"Ver\",\"tag_t_1_1\":\"Saber más\",\"tag_t_1_2\":\"App\",\"tag_t_1_3\":\"Empezar\",\"tag_t_1_4\":\"Iniciar sesión\",\"tag_t_1_5\":\"Registrarse\",\"tag_t_1_6\":\"Contáctanos\",\"close_sesion\":\"Cerrar sesión\",\"edit_profile\":\"Edit profile\",\"tag_d_1\":\"Actualizar plan\",\"tag_d_add_text\":\"Agregar texto\",\"tag_d_add_image\":\"Agregar imagen\",\"tag_d_new_quote\":\"Nueva cita\",\"tag_d_select_patient\":\"Seleccionar paciente\",\"tag_d_add_menu\":\"Agregar menú\",\"tag_d_add_patient\":\"Nuevo paciente\",\"tag_d_add_consulation\":\"Nueva consulta\",\"tag_d_add_study\":\"Nuevo estudio\",\"assign\":\"Asignar\",\"tag_new_equivalent\":\"Nuevo equivalente\",\"assign_menu\":\"Asignar Menu\",\"change_menu\":\"Cambiar Menu\",\"see_menu\":\"Ver Menu\",\"back\":\"Regresar\",\"close\":\"Cerrar\"}");

/***/ }),

/***/ "U5C5":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Blog\",\"sub_1\":\"Post recientes\"}");

/***/ }),

/***/ "Ug1k":
/***/ (function(module) {

module.exports = JSON.parse("{\"menu_1\":\"Pacientes\",\"menu_2\":\"Equivalentes\",\"menu_3\":\"Recetas\",\"menu_4\":\"Menús\",\"menu_5\":\"Citas\",\"menu_6\":\"Blog\",\"tit_profile\":\"Mi perfil\",\"tit_blog_1_1\":\"Entradas del blog\",\"tit_blog_1_2\":\"Nueva entrada de Blog\",\"tit_blog_1_3\":\"Editar entrada de Blog\",\"tit_recipe_1_1\":\"Categoría de recetas\",\"tit_recipe_1_2\":\"Recetas\",\"tit_recipe_1_3\":\"Nueva receta\",\"tit_recipe_1_4\":\"Seleccione un alimento\",\"tit_recipe_1_4_1\":\"Alimento\",\"tit_recipe_1_5\":\"Editar receta\",\"tit_recipe_1_6\":\"Equivalentes\",\"tit_quote_1_1\":\"Seleccionar un paciente\",\"tit_quote_1_2\":\"Cambio de cita\",\"tit_menu_1_1\":\"Menús\",\"tit_menu_1_2\":\"Seleccionar una receta\",\"tit_euivalent_1_1\":\"Categoría de equivalentes\",\"tit_euivalent_2_1\":\"Equivalentes\",\"tit_euivalent_3_1\":\"Ingredientes\",\"tit_pacient_1_1\":\"Pacientes\",\"tit_pacient_1_2\":\"Nuevo paciente\",\"tit_pacient_1_3\":\"Editar paciente\",\"tit_pacient_1_tag_1\":\"Historial clínico\",\"tit_pacient_1_tag_2\":\"Ginecológica\",\"tit_pacient_1_tag_3\":\"Dieta\",\"tit_pacient_1_tag_4\":\"Cuestionario\",\"tit_pacient_1_tag_5\":\"Estilo de vida\",\"tit_pacient_2_1\":\"Detalle del paciente\",\"tit_pacient_2_tag_1\":\"Consultas\",\"tit_pacient_2_tag_2\":\"Plan de alimentación\",\"tit_pacient_2_tag_2_1\":\"Historial dietético\",\"tit_pacient_2_tag_2_2\":\"Actividad física\",\"tit_pacient_2_tag_3\":\"Bioquímicos\",\"tit_pacient_2_2\":\"Consulta\",\"tit_pacient_2_3\":\"Nueva consulta\",\"tit_pacient_2_4\":\"Configuración pacientes\",\"tit_pacient_2_5\":\"Configuración consultas\",\"tit_pacient_2_6\":\"Nuevo estudio\",\"tit_pacient_2_7\":\"Plan de alimentación\",\"tit_pacient_2_8\":\"Hidratación\",\"tit_pacient_2_9\":\"Plan de hidratación\",\"tit_select_plan_1\":\"Seleccione un plan\",\"tit_select_plan_2\":\"Terminar suscripción actual\",\"tit_pay_1\":\"Pasarela de pago\",\"tit_food_2\":\"Nuevo equivalente\",\"tab_1_ti_1\":\"Alimento\",\"tab_1_col_1\":\"Cantidad sugerida\",\"tab_1_col_2\":\"Unidad\",\"tab_1_col_3\":\"Peso bruto (g)\",\"tab_1_col_4\":\"Peso neto (g)\",\"tab_1_col_5\":\"Energía (kcal)\",\"tab_1_col_6\":\"Proteína (g)\",\"tab_1_col_7\":\"Lípidos (g)\",\"tab_1_col_8\":\"Carbohydrates\",\"tab_1_col_9\":\"Fibra\",\"tab_1_col_10\":\"Vitamina A (ug)\",\"tab_1_col_11_1\":\"Ácido ascórbico\",\"tab_1_col_11_2\":\"(mg)\",\"tab_1_col_12\":\"Ácido fólico (ug)\",\"tab_1_col_13_1\":\"Hierro NO HEM\",\"tab_1_col_13_2\":\"(mg)\",\"tab_1_col_14\":\"Potasio (mg)\",\"tab_1_col_15\":\"Índice glucémico\",\"tab_1_col_16\":\"Cárga glucémica\",\"tit_pacient_config_1\":\"Preguntas historial clínico\",\"tit_pacient_config_2\":\"Campos registro médico\",\"tit_pacient_config_3\":\"Campos consulta\",\"tit_pacient_config_4\":\"Configuración consulta\",\"tit_pacient_config_5\":\"Preguntas personalizadas\",\"tit_pacient_config_6\":\"Activar preguntas\",\"tit_pacient_config_7\":\"Activar antropometrías\",\"tit_pacient_config_8\":\"Activar pliegues\",\"tit_pacient_config_9\":\"Activar circunferencia\",\"tit_pacient_config_10\":\"Activar campos consulta\",\"tit_pacient_config_11\":\"Activar campos registro médico\",\"tit_menu_day\":\"Seleccione la receta para el día: \",\"studies\":\"Estudios\"}");

/***/ }),

/***/ "V3BI":
/***/ (function(module) {

module.exports = JSON.parse("{\"select_es\":\"Spanish\",\"select_en\":\"English\",\"button_login\":\"Login\",\"button_signin\":\"Sign in\",\"tag_aboutus\":\"About us\",\"tag_app\":\"App\",\"tag_blog\":\"Blog\"}");

/***/ }),

/***/ "Wb5x":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Privacy policies\"}");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "duLq":
/***/ (function(module) {

module.exports = JSON.parse("{\"title_1_1\":\"Bienvenid@ a la familia nutrigram\",\"title_1_2\":\"\",\"sub_1\":\"Estás a pocos pasos de mejorar tu consulta a un nivel tecnológico de primera\",\"title_2\":\"Se parte del equipo\",\"sub_2_1\":\"Al registrarse, acepta los\",\"sub_2_2\":\"Términos de servicio\",\"title_3\":\"Registro de nutriólog@s\",\"sub_3_1\":\"Los nutriólog@s pueden dar sus consultas a través de una plataforma web, mientras los pacientes verán sus resultados en su celular, por una app.\",\"sub_3_2\":\"\",\"title_step_1\":\"Continuar con el registro\",\"title_step_2\":\"Seleccione un plan\"}");

/***/ }),

/***/ "fZcW":
/***/ (function(module) {

module.exports = JSON.parse("{\"required\":\"Required field\",\"email must be a valid email\":\"Invalid email format\",\"format_password\":\"It must contain minimum 8 characters, with at least one number and one special character\",\"incomplete_number\":\"Incomplete number\",\"invalid_number\":\"Wrong number\",\"incorrect_cvc\":\"Wrong cvc\",\"invalid_expiry_month\":\"Invalid expiration month\",\"invalid_expiry_year\":\"Invalid expiration year\",\"pay_message_1\":\"Subscription successful\",\"message_1\":\"Saved successfully!\",\"message_email_1\":\"Message sent to the email provided\",\"must_accept_terms\":\"Must Accept Terms and Conditions\",\"array_ingredients\":\"You must add at least one ingredient\",\"array_portions\":\"You must add at least one type of portion\",\"not_assigned\":\"Not assigned\",\"without_assigned_plan\":\"Without any assigned plan\",\"without_assigned_menu\":\"Without any assigned menu\",\"no_plan\":\"No plan\",\"available_patients\":\"You have # patients available in your current plan\",\"unavailable_patients\":\"Do not count with more patients available with your current plan\",\"success_request\":\"Successful request, an administrator will review the request and give an answer\",\"menu_sent\":\"Menu sent\",\"fields_language\":\"You must complete the fields of a language\",\"unexpected_error\":\"Oops! Something unexpected happened\",\"without_image\":\"Without image\"}");

/***/ }),

/***/ "fbsP":
/***/ (function(module) {

module.exports = JSON.parse("{\"sub_1\":\"Bienvenid@ a Nutrigram\",\"title_1\":\"Nutrigram te ayuda a llevar tus consultas a donde siempre soñaste llegar.\",\"cont_1\":\"Nutrigram fue creada por un equipo de nutriólogas, expertos en tecnología, y años de retroalimentación de pacientes. Queremos que logres la consulta perfecta; donde no existan desperdicios y se den conexiones reales con tus pacientes. Entendemos la importancia de ofrecer lo mejor para ayudarle a nuestros pacientes a mejorar su estilo de vida. Queremos escucharte\",\"sec_2_t_1\":\"App de todos los días\",\"sec_2_c_1\":\"Intuitiva y útil. Ayuda al paciente a apegarse al plan de alimentación y por lo tanto, a tener mejores resultados\",\"sec_2_t_2\":\"Consulta personalizada\",\"sec_2_c_2\":\"Diseña y comparte fácilmente planes de alimentación personalizados. Cuenta con la información a la mano para tomar decisiones correctas\",\"sec_2_t_3\":\"Cercanía con pacientes\",\"sec_2_c_3\":\"Mantén un seguimiento cercano con tus pacientes. Dales seguimiento y realiza ajustes al momento de acuerdo con sus hábitos\",\"sec_2_t_4\":\"Nutrimentos, alimentos, menús y recetas.\",\"sec_2_c_4\":\"Encuentra base de datos ordenadas para poder mandar resultados y crear planes de alimentación más rápido\",\"sec_2_t_5\":\"El mundo a tu alcance\",\"sec_2_c_5\":\"¡Acceso a los archivos de tus pacientes en cualquier parte del mundo! Puedes dar consulta donde estés, siempre\",\"sec_2_t_6\":\"Mejora resultados\",\"sec_2_c_6\":\"Tus pacientes mejoran su apego al plan y logran sus objetivos. Tu te vuelves más eficiente y aumentas tus consultas\",\"cont_3_1\":\"Mejorando la salud un click a al vez. Se parte de la experiencia Nutrigram \",\"cont_3_2\":\"y mejora tu consulta para ti y para tus pacientes.\",\"title_3\":\"ÚNETE A NUTRIGRAM\",\"sub_4\":\"Que ofrecemos\",\"title_4\":\"Planes según tu tamaño\",\"cont_4\":\"Paga sólo por los pacientes activos\",\"cost_title_1\":\"0-5 Pacientes\",\"cost_title_2\":\"6-50 Pacientes\",\"cost_title_3\":\"51-100 Pacientes\",\"cost_title_4\":\">100 Pacientes\",\"cost_title_5\":\"Clínica\",\"cost_type_1\":\"mensual\",\"cost_type_2\":\"anual\",\"cost_p_1\":\"Gratis\",\"cost_tag_1\":\"nutriólogo\",\"cost_tag_2\":\"consultorio\",\"cost_tag_3\":\"Acceso al directorio Nutrigram\",\"cost_tag_4\":\"Reporte mensual de consultas\"}");

/***/ }),

/***/ "fnYr":
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "gRZq":
/***/ (function(module, exports) {



/***/ }),

/***/ "hI02":
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

/***/ }),

/***/ "kK77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__("fnYr");
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__("MQhX");

// EXTERNAL MODULE: ./locale/navbar/es.json
var es = __webpack_require__("3/y/");

// EXTERNAL MODULE: ./locale/footer/es.json
var footer_es = __webpack_require__("1M/m");

// EXTERNAL MODULE: ./locale/button/es.json
var button_es = __webpack_require__("TSaV");

// EXTERNAL MODULE: ./locale/input/es.json
var input_es = __webpack_require__("EsO2");

// EXTERNAL MODULE: ./locale/validation/es.json
var validation_es = __webpack_require__("wVcH");

// EXTERNAL MODULE: ./locale/home/es.json
var home_es = __webpack_require__("BbLC");

// EXTERNAL MODULE: ./locale/about_us/es.json
var about_us_es = __webpack_require__("fbsP");

// EXTERNAL MODULE: ./locale/app/es.json
var app_es = __webpack_require__("zfM1");

// EXTERNAL MODULE: ./locale/blog/es.json
var blog_es = __webpack_require__("U5C5");

// EXTERNAL MODULE: ./locale/policy/es.json
var policy_es = __webpack_require__("ol95");

// EXTERNAL MODULE: ./locale/terms/es.json
var terms_es = __webpack_require__("FImf");

// EXTERNAL MODULE: ./locale/login/es.json
var login_es = __webpack_require__("3TIc");

// EXTERNAL MODULE: ./locale/signin/es.json
var signin_es = __webpack_require__("duLq");

// EXTERNAL MODULE: ./locale/dashboard/es.json
var dashboard_es = __webpack_require__("Ug1k");

// CONCATENATED MODULE: ./locale/es.js














/* harmony default export */ var locale_es = ({
  navbar: es,
  footer: footer_es,
  button: button_es,
  input: input_es,
  validation: validation_es,
  home: home_es,
  about_us: about_us_es,
  app: app_es,
  blog: blog_es,
  policy: policy_es,
  terms: terms_es,
  login: login_es,
  signin: signin_es,
  dashboard: dashboard_es
});
// EXTERNAL MODULE: ./locale/navbar/en.json
var en = __webpack_require__("V3BI");

// EXTERNAL MODULE: ./locale/footer/en.json
var footer_en = __webpack_require__("1LAX");

// EXTERNAL MODULE: ./locale/button/en.json
var button_en = __webpack_require__("pNK3");

// EXTERNAL MODULE: ./locale/input/en.json
var input_en = __webpack_require__("JqEp");

// EXTERNAL MODULE: ./locale/validation/en.json
var validation_en = __webpack_require__("fZcW");

// EXTERNAL MODULE: ./locale/home/en.json
var home_en = __webpack_require__("JeW5");

// EXTERNAL MODULE: ./locale/about_us/en.json
var about_us_en = __webpack_require__("xFWD");

// EXTERNAL MODULE: ./locale/app/en.json
var app_en = __webpack_require__("KmwE");

// EXTERNAL MODULE: ./locale/blog/en.json
var blog_en = __webpack_require__("shrM");

// EXTERNAL MODULE: ./locale/policy/en.json
var policy_en = __webpack_require__("Wb5x");

// EXTERNAL MODULE: ./locale/terms/en.json
var terms_en = __webpack_require__("4x+6");

// EXTERNAL MODULE: ./locale/login/en.json
var login_en = __webpack_require__("5End");

// EXTERNAL MODULE: ./locale/signin/en.json
var signin_en = __webpack_require__("rKei");

// EXTERNAL MODULE: ./locale/dashboard/en.json
var dashboard_en = __webpack_require__("3wEx");

// CONCATENATED MODULE: ./locale/en.js














/* harmony default export */ var locale_en = ({
  navbar: en,
  footer: footer_en,
  button: button_en,
  input: input_en,
  validation: validation_en,
  home: home_en,
  about_us: about_us_en,
  app: app_en,
  blog: blog_en,
  policy: policy_en,
  terms: terms_en,
  login: login_en,
  signin: signin_en,
  dashboard: dashboard_en
});
// CONCATENATED MODULE: ./locale/fr.js
/* harmony default export */ var fr = ({});
// CONCATENATED MODULE: ./helper/i18n/config.js





external_i18next_default.a.use(external_react_i18next_["initReactI18next"]).init({
  lng: 'en',
  resources: {
    es: locale_es,
    en: locale_en,
    fr: fr
  },
  fallbackLng: 'en',
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ','
  },
  react: {
    wait: true
  }
});
/* harmony default export */ var config = __webpack_exports__["a"] = (external_i18next_default.a);

/***/ }),

/***/ "kaMA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContext; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8WVE");




 //Context

const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null); //Provider

const AppContextProvider = ({
  children
}) => {
  const {
    0: auth,
    1: setAuth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined);
  const {
    0: flagLogin,
    1: setFlagLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: reloadUser,
    1: setReloadUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isReady,
    1: setIsReady
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const token = Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* getToken */ "c"])();
    const picture = Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* getPic */ "b"])();
    const idNutritionist = Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* getIdNutritionist */ "a"])();

    if (token) {
      setAuth({
        token,
        picture,
        idNutritionist
      });
      setFlagLogin(true);
    } else {
      setAuth(null);
      setFlagLogin(false);
    }

    setReloadUser(false);
    setIsReady(true);
  }, [reloadUser, isReady]);

  const login = user => {
    setFlagLogin(true);
    Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* setToken */ "i"])(user.token);
    Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* setPic */ "h"])(user.picture);
    Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* setIdNutritionist */ "g"])(user.id);
    setAuth({
      token: user.token,
      picture: user.picture,
      idNutritionist: user.id
    });
  };

  const logout = () => {
    if (auth) {
      Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* removeToken */ "f"])();
      Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* removePic */ "e"])();
      Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* removeIdNutritionist */ "d"])();
      setAuth(null);
      setFlagLogin(false);
    }
  };

  const authData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    auth,
    flagLogin,
    login,
    logout,
    setReloadUser,
    isReady
  }), [auth, isReady]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AppContext.Provider, {
    value: authData,
    children: children
  });
};

/* harmony default export */ __webpack_exports__["b"] = (AppContextProvider);

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "ol95":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Políticas de privacidad\"}");

/***/ }),

/***/ "pNK3":
/***/ (function(module) {

module.exports = JSON.parse("{\"save\":\"Save\",\"add\":\"Add\",\"choose\":\"Choose\",\"delete\":\"Delete\",\"accept\":\"Accept\",\"cancel\":\"Cancel\",\"accept_appoiment\":\"Accept change\",\"cancel_appoiment\":\"Reject change\",\"refuse\":\"Refuse\",\"edit\":\"Edit\",\"define\":\"Define\",\"finish\":\"Terminar\",\"pay\":\"Pay\",\"notes\":\"Notes\",\"send\":\"Send\",\"see\":\"See\",\"tag_t_1_1\":\"Read more\",\"tag_t_1_2\":\"App\",\"tag_t_1_3\":\"Start\",\"tag_t_1_4\":\"Log in\",\"tag_t_1_5\":\"Sign in\",\"tag_t_1_6\":\"Contact us\",\"close_sesion\":\"Sign off\",\"edit_profile\":\"Editar perfil\",\"tag_d_1\":\"Update plan\",\"tag_d_add_text\":\"Add text\",\"tag_d_add_image\":\"Add Image\",\"tag_d_new_quote\":\"New appointment\",\"tag_d_select_patient\":\"Select patient\",\"tag_d_add_menu\":\"Add menu\",\"tag_d_add_patient\":\"Add patient\",\"tag_d_add_consulation\":\"New consultation\",\"tag_d_add_study\":\"New study\",\"assign\":\"Assign\",\"tag_new_equivalent\":\"New equivalent\",\"assign_menu\":\"Assign Menu\",\"change_menu\":\"Change menu\",\"see_menu\":\"See menu\",\"back\":\"Go back\",\"close\":\"Close\"}");

/***/ }),

/***/ "rKei":
/***/ (function(module) {

module.exports = JSON.parse("{\"title_1_1\":\"Welcome to the Nutrigram family\",\"title_1_2\":\"\",\"sub_1\":\"You are a few steps away from improving your inquiry to a technological level of first\",\"title_2\":\"Be part of the team\",\"sub_2_1\":\"By registering you accept the\",\"sub_2_2\":\"Terms of Service\",\"title_3\":\"Registration of Nutriologists\",\"sub_3_1\":\"Nutritionists can give their consultations through a web platform, while patients will see their results on their cell phone, by an app.\",\"sub_3_2\":\"\",\"title_step_1\":\"Continue with registration\",\"title_step_2\":\"Select a plan\"}");

/***/ }),

/***/ "shrM":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Blog\",\"sub_1\":\"Recent post\"}");

/***/ }),

/***/ "wVcH":
/***/ (function(module) {

module.exports = JSON.parse("{\"required\":\"Campo requerido\",\"email must be a valid email\":\"Formato del email inválido\",\"format_password\":\"Debe contener mínimo 8 caracteres, por lo menos con un número y un carácter especial\",\"incomplete_number\":\"Número incompleto\",\"invalid_number\":\"Número incorrecto\",\"incorrect_cvc\":\"CVC incorrecto\",\"invalid_expiry_month\":\"Mes de expiración invalido\",\"invalid_expiry_year\":\"Año de expiración invalido\",\"pay_message_1\":\"Suscripción realizada con éxito\",\"message_1\":\"¡Guardado con éxito!\",\"message_email_1\":\"Mensaje enviado al email proporcionado\",\"must_accept_terms\":\"Debe aceptar términos y condiciones\",\"array_ingredients\":\"Debes agregar al menos un ingrediente\",\"array_portions\":\"Debes agregar al menos un tipo de porción\",\"not_assigned\":\"Sin asignar\",\"without_assigned_plan\":\"Sin ningún plan asignado\",\"without_assigned_menu\":\"Sin ningún menú asignado\",\"no_plan\":\"Sin plan\",\"available_patients\":\"Cuentas con # pacientes disponibles con tu plan actual\",\"unavailable_patients\":\"No cuentas con más pacientes disponibles con tu plan actual\",\"success_request\":\"Solicitud enviada con éxito, un administrador revisará la solicitud y dará una respuesta\",\"menu_sent\":\"Menú enviado\",\"fields_language\":\"Debes completar los campos de un lenguaje\",\"unexpected_error\":\"Oops!, Ocurrió algo inesperado\",\"without_image\":\"Sin imagen\"}");

/***/ }),

/***/ "wyBh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULTLANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ID; });
// export const BASE_PATH = "http://localhost:1337";
const DEFAULTLANG = "es";
const TOKEN = "nutri_token";
const LOCALE = "locale";
const CURRENCY = "currency";
const PIC = "picture";
const ID = "id";

/***/ }),

/***/ "xFWD":
/***/ (function(module) {

module.exports = JSON.parse("{\"sub_1\":\"Welcome to nutrigram\",\"title_1\":\"Nutrigram enables you to achieve everything you always dreamed your practice could be.\",\"cont_1\":\"Nutrigram was created by a team of nutritionists, technology experts, and years of feddback from patients. We want you to achieve perfection in your practice; one without waste, where true connections with your patients are built. We understand the importance of offering the best to our patients to help them improve their lifestyle.\",\"sec_2_t_1\":\"Everyday App\",\"sec_2_c_1\":\"Intuitive and useful, it allows the patient to stick with the meal plans and therefore, to get better results.\",\"sec_2_t_2\":\"Personalized Nutrition\",\"sec_2_c_2\":\"Designing personalized meal plans for your patients, sharing their results and doing a follow up has never been easier.\",\"sec_2_t_3\":\"Closeness with patients\",\"sec_2_c_3\":\"Mantain follow-up with your patients. Keep track of their progress and make adjustments on-the-go.\",\"sec_2_t_4\":\"Nutrients, foods, menus and recipes\",\"sec_2_c_4\":\"Find orderly databeses so you can share results and craft meal plans easier\",\"sec_2_t_5\":\"The world at your fingertips\",\"sec_2_c_5\":\"Access to your patients files anywhere in the world! You can consult wherever you are, always.\",\"sec_2_t_6\":\"Improve results\",\"sec_2_c_6\":\"Your patients stick to the plan and reach their goals. You become more efficient and are able to service more clients\",\"cont_3_1\":\"Improving health one click at a time. Experience Nutrigram \",\"cont_3_2\":\"and improve your practice for you and your patients.\",\"title_3\":\"JOIN NUTRIGRAM\",\"sub_4\":\"What we offer\",\"title_4\":\"Pricing according to size\",\"cont_4\":\"Pay only for active clients\",\"cost_title_1\":\"0-5 Patients\",\"cost_title_2\":\"6-50 Patients\",\"cost_title_3\":\"51-100 Patients\",\"cost_title_4\":\">100 Patients\",\"cost_title_5\":\"Clinic\",\"cost_type_1\":\"monthly\",\"cost_type_2\":\"yearly\",\"cost_p_1\":\"Free\",\"cost_tag_1\":\"nutritionist\",\"cost_tag_2\":\"consulting room\",\"cost_tag_3\":\"Access to the Nutrigram directory\",\"cost_tag_4\":\"Monthly consultation report\"}");

/***/ }),

/***/ "zfM1":
/***/ (function(module) {

module.exports = JSON.parse("{\"sub_1\":\"Alimentación\",\"title_1\":\"Plan de alimentación personalizado\",\"cont_1\":\"Menú y diferentes opciones de comida a la mano. Olvídate de cargar tu menú a todos lados o pegarlo en el refrigerador. Con nutrigram cuentas con tu nutriólogo en el bolsillo.\",\"sub_2\":\"Ejercicio\",\"title_2\":\"Seguimiento de tu actividad física\",\"cont_2\":\"Ayudamos a motivarte y hacer más ejercicio, cumple los objetivos de actividad física recomendados para mejorar tu salud.\",\"sub_3\":\"Novedades\",\"title_3\":\"Blog y eventos\",\"cont_3\":\"No te pierdas de las novedades que hay en tu ciudad. Todos los artículos compartidos están respaldados por bases cienlficas. No creas todo lo que lees en las redes sociales, escucha a los expertos.\",\"sub_4\":\"Lista de super\",\"title_4\":\"La lista del super específica a tu plan de alimentación\",\"cont_4\":\"Te ayudamos a crear esa lista que tanta flojera da, todos los ingredientes básicos para poder cumplir con tu plan de alimentación.\",\"title_5\":\"Descarga nuestra App\",\"title_5_1\":\"Disponible en App Store y Google Play\",\"title_5_2\":\"\",\"com_title_1\":\"Próximamente\",\"com_title_2\":\"Nuestras apps\",\"com_title_3\":\"En las tiendas de aplicaciones más importantes\",\"monday\":\"Lunes\",\"tuesday\":\"Martes\",\"wednesday\":\"Miércoles\",\"thursday\":\"Jueves\",\"friday\":\"Viernes\",\"saturday\":\"Sabado\",\"sunday\":\"Domingo\"}");

/***/ })

/******/ });