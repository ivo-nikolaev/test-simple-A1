// Include/ Exclude internet

export const includeInternet = (internetConnection: boolean, price: number, totalPrice: number) => {
    if (!internetConnection) {
        return totalPrice + price;
    }
    else {
        return totalPrice;
    }
};

// Exclude internet connection

export const excludeInternet = (internetConnection: boolean, price: number, totalPrice: number) => {
    if (internetConnection) {
        //pass obj
        return totalPrice - price;
    } else {
        return totalPrice;
    }
}

export const incrementPhoneLine = (numberOfLines: number, price: number, totalPrice: number) => {
    return totalPrice + price;
}

export const decrementPhoneLine = (numberOfLines: number, price: number, totalPrice: number) => {
        numberOfLines--;
        return totalPrice - price;
}

export const selectPhone = (listOfPhones: string[], model: string, price: number, totalPrice: number) => {
    listOfPhones.push(model);

    return totalPrice + price;
}

export const unselectPhone = (listOfPhones: string[], model: string, price: number, totalPrice: number) => {
    const toRemove = listOfPhones.indexOf(model);
    if (toRemove > -1) {
        listOfPhones.splice(toRemove, 1);
        return totalPrice - price;
    } else {
        return totalPrice;
    }
}

export default { includeInternet, excludeInternet, incrementPhoneLine, decrementPhoneLine, selectPhone, unselectPhone };