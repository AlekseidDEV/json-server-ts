/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst render_1 = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.ts\");\nconst userService_1 = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.ts\");\nconst addUser_1 = __webpack_require__(/*! ./modules/addUser */ \"./src/modules/addUser.ts\");\nconst removeUsers_1 = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.ts\");\nconst changePermission_1 = __webpack_require__(/*! ./modules/changePermission */ \"./src/modules/changePermission.ts\");\nconst editUsers_1 = __webpack_require__(/*! ./modules/editUsers */ \"./src/modules/editUsers.ts\");\nconst filterUser_1 = __webpack_require__(/*! ./modules/filterUser */ \"./src/modules/filterUser.ts\");\nwindow.userService = new userService_1.UserService;\nwindow.userService.getUsers().then((data) => {\n    (0, render_1.renderUser)(data);\n});\n(0, addUser_1.addUser)();\n(0, removeUsers_1.removeUsers)();\n(0, changePermission_1.changePermisson)();\n(0, editUsers_1.editUsers)();\n(0, filterUser_1.filterUser)();\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.ts?");

/***/ }),

/***/ "./src/modules/addUser.ts":
/*!********************************!*\
  !*** ./src/modules/addUser.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addUser = void 0;\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/modules/render.ts\");\nconst addUser = () => {\n    const form = document.querySelector('form');\n    const nameInput = form === null || form === void 0 ? void 0 : form.querySelector('#form-name');\n    const emailInput = form === null || form === void 0 ? void 0 : form.querySelector('#form-email');\n    const childrenInput = form === null || form === void 0 ? void 0 : form.querySelector('#form-children');\n    form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        if (!form.dataset.method) {\n            const user = {\n                name: nameInput === null || nameInput === void 0 ? void 0 : nameInput.value,\n                email: emailInput === null || emailInput === void 0 ? void 0 : emailInput.value,\n                children: childrenInput === null || childrenInput === void 0 ? void 0 : childrenInput.checked,\n                permission: false\n            };\n            window.userService.addUser(user).then(() => {\n                window.userService.getUsers().then((users) => {\n                    (0, render_1.renderUser)(users);\n                    form.reset();\n                });\n            });\n        }\n    });\n};\nexports.addUser = addUser;\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUser.ts?");

/***/ }),

/***/ "./src/modules/changePermission.ts":
/*!*****************************************!*\
  !*** ./src/modules/changePermission.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.changePermisson = void 0;\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/modules/render.ts\");\nconst changePermisson = () => {\n    const tBody = document.querySelector('#table-body');\n    tBody === null || tBody === void 0 ? void 0 : tBody.addEventListener('click', (e) => {\n        if (e.target.closest('input[type=checkbox]')) {\n            const tr = e.target.closest('tr');\n            const id = tr.dataset.key;\n            const input = tr === null || tr === void 0 ? void 0 : tr.querySelector(\"input[type=checkbox]\");\n            window.userService.changUser(id, { permission: input.checked }).then(() => {\n                window.userService.getUsers().then((users) => {\n                    (0, render_1.renderUser)(users);\n                });\n            });\n        }\n    });\n};\nexports.changePermisson = changePermisson;\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changePermission.ts?");

/***/ }),

/***/ "./src/modules/editUsers.ts":
/*!**********************************!*\
  !*** ./src/modules/editUsers.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.editUsers = void 0;\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/modules/render.ts\");\nconst editUsers = () => {\n    const tBody = document.querySelector('#table-body');\n    const form = document.querySelector('form');\n    const nameInput = form === null || form === void 0 ? void 0 : form.querySelector('#form-name');\n    const emailInput = form === null || form === void 0 ? void 0 : form.querySelector('#form-email');\n    const childrenInput = form === null || form === void 0 ? void 0 : form.querySelector('#form-children');\n    tBody === null || tBody === void 0 ? void 0 : tBody.addEventListener('click', (e) => {\n        if (e.target.closest('.btn-warning')) {\n            const tr = e.target.closest('tr');\n            const id = tr.dataset.key;\n            window.userService.getUser(id).then((user) => {\n                nameInput.value = user.name;\n                emailInput.value = user.email;\n                childrenInput.checked = user.children;\n                form.dataset.method = id;\n            });\n        }\n    });\n    form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        if (form.dataset.method) {\n            const id = form.dataset.method;\n            const user = {\n                name: nameInput === null || nameInput === void 0 ? void 0 : nameInput.value,\n                email: emailInput === null || emailInput === void 0 ? void 0 : emailInput.value,\n                children: childrenInput === null || childrenInput === void 0 ? void 0 : childrenInput.checked,\n                permission: false\n            };\n            window.userService.editUser(id, user).then(() => {\n                window.userService.getUsers().then((users) => {\n                    (0, render_1.renderUser)(users);\n                    form.reset();\n                    form.removeAttribute('data-method');\n                });\n            });\n        }\n    });\n};\nexports.editUsers = editUsers;\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/editUsers.ts?");

/***/ }),

/***/ "./src/modules/filterUser.ts":
/*!***********************************!*\
  !*** ./src/modules/filterUser.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.filterUser = void 0;\nconst filterUser = () => {\n    const btnIsChildren = document.querySelector('#btn-isChildren');\n    const btnIsPermisson = document.querySelector('#btn-isPermissions');\n    const btnIsAll = document.querySelector('#btn-isAll');\n};\nexports.filterUser = filterUser;\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filterUser.ts?");

/***/ }),

/***/ "./src/modules/removeUsers.ts":
/*!************************************!*\
  !*** ./src/modules/removeUsers.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.removeUsers = void 0;\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/modules/render.ts\");\nconst removeUsers = () => {\n    const tBody = document.querySelector('#table-body');\n    tBody === null || tBody === void 0 ? void 0 : tBody.addEventListener('click', (e) => {\n        if (e.target.closest('.btn-danger')) {\n            const tr = e.target.closest('tr');\n            const id = tr.dataset.key;\n            window.userService.removeUser(id).then(() => {\n                window.userService.getUsers().then((users) => {\n                    (0, render_1.renderUser)(users);\n                });\n            });\n        }\n    });\n};\nexports.removeUsers = removeUsers;\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.ts?");

/***/ }),

/***/ "./src/modules/render.ts":
/*!*******************************!*\
  !*** ./src/modules/render.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderUser = void 0;\nconst renderUser = (users) => {\n    const tBody = document.querySelector('#table-body');\n    tBody.innerHTML = '';\n    users.forEach((user) => {\n        tBody === null || tBody === void 0 ? void 0 : tBody.insertAdjacentHTML('beforeend', `\r\n        <tr data-key=\"${user.id}\">\r\n        <th scope=\"row\">${user.id}</th>\r\n        <td>${user.name}</td>\r\n        <td>${user.email}</td>\r\n        <td>${user.children ? 'Есть' : 'Нет'}</td>\r\n        <td>\r\n            <div class=\"form-check form-switch\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\r\n                    id=\"form-children\" ${user.permission ? 'checked' : ''}>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-warning\">\r\n                    <i class=\"bi-pencil-square\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger\">\r\n                    <i class=\"bi-person-x\"></i>\r\n                </button>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n        `);\n    });\n};\nexports.renderUser = renderUser;\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.ts?");

/***/ }),

/***/ "./src/modules/userService.ts":
/*!************************************!*\
  !*** ./src/modules/userService.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserService = void 0;\nclass UserService {\n    getUsers() {\n        return fetch('http://localhost:1808/users').then(res => res.json());\n    }\n    addUser(user) {\n        return fetch('http://localhost:1808/users', {\n            method: \"POST\",\n            headers: {\n                'Content-type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        }).then(res => res.json());\n    }\n    removeUser(id) {\n        return fetch(`http://localhost:1808/users/${id}`, {\n            method: 'DELETE'\n        }).then(res => res.json());\n    }\n    changUser(id, data) {\n        return fetch(`http://localhost:1808/users/${id}`, {\n            method: 'PATCH',\n            headers: {\n                'Content-type': 'application/json'\n            },\n            body: JSON.stringify(data)\n        }).then(res => res.json());\n    }\n    getUser(id) {\n        return fetch(`http://localhost:1808/users/${id}`).then(res => res.json());\n    }\n    editUser(id, user) {\n        return fetch(`http://localhost:1808/users/${id}`, {\n            method: 'PUT',\n            headers: {\n                'Content-type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        }).then(res => res.json());\n    }\n}\nexports.UserService = UserService;\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;