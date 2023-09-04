"use strict";
var _a;
exports.__esModule = true;
exports.close = exports.open = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    isOpen: false
};
var addFormSlice = (0, toolkit_1.createSlice)({
    name: 'addForm',
    initialState: initialState,
    reducers: {
        open: function (state) {
            state.isOpen = true;
        },
        close: function (state) {
            state.isOpen = false;
        }
    }
});
exports["default"] = addFormSlice.reducer;
exports.open = (_a = addFormSlice.actions, _a.open), exports.close = _a.close;
