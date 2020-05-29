"use strict";
// Include/ Exclude internet
exports.__esModule = true;
exports.includeInternet = function (internetConnection, price, totalPrice) {
    if (!internetConnection) {
        return totalPrice + price;
    }
    else {
        return totalPrice;
    }
};
// Exclude internet connection
exports.excludeInternet = function (internetConnection, price, totalPrice) {
    if (internetConnection) {
        //pass obj
        return totalPrice - price;
    }
    else {
        return totalPrice;
    }
};
exports.incrementPhoneLine = function (numberOfLines, price, totalPrice) {
    return totalPrice + price;
};
exports.decrementPhoneLine = function (numberOfLines, price, totalPrice) {
    numberOfLines--;
    return totalPrice - price;
};
exports.selectPhone = function (listOfPhones, model, price, totalPrice) {
    listOfPhones.push(model);
    return totalPrice + price;
};
exports.unselectPhone = function (listOfPhones, model, price, totalPrice) {
    var toRemove = listOfPhones.indexOf(model);
    if (toRemove > -1) {
        listOfPhones.splice(toRemove, 1);
        return totalPrice - price;
    }
    else {
        return totalPrice;
    }
};
exports["default"] = { includeInternet: exports.includeInternet, excludeInternet: exports.excludeInternet, incrementPhoneLine: exports.incrementPhoneLine, decrementPhoneLine: exports.decrementPhoneLine, selectPhone: exports.selectPhone, unselectPhone: exports.unselectPhone };
