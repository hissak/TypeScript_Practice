"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    return val.toFixed(2);
}
function isAdmin(account) {
    if ('role' in account) {
        return true;
    }
    return false;
}
