/* eslint-disable no-undef */
import { includeInternet, excludeInternet, incrementPhoneLine, decrementPhoneLine, selectPhone, unselectPhone } from '../methods/methods.js';


// internetConnection() Include internet connection
test('Include internet connection, if there is none!', () =>{
    const internetConnection = false;
    const price = 200;
    const totalPrice = 1000;
    const result = includeInternet(internetConnection, price, totalPrice)

    expect(result).toBe(1200);
});

test('Try to include internet connection, if there already one', () =>{
    const internetConnection = true;
    const price = 200;
    const totalPrice = 1000;
    const result = includeInternet(internetConnection, price, totalPrice)

    expect(result).toBe(1000);
});


// internetConnection() Exclude internet connection
test('Exclude internet connection, if there is one!', () =>{
    const internetConnection = true;
    const price = 200;
    const totalPrice = 1000;
    const result = excludeInternet(internetConnection, price, totalPrice)

    expect(result).toBe(800);
});

test("Try to exclude internet connection, if there isn't one", () => {
    const internetConnection = false;
    const price = 200;
    const totalPrice = 1000;
    const result = excludeInternet(internetConnection, price, totalPrice)

    expect(result).toBe(1000);
});

// incrementPhoneLine() 

test("Adding extra phone lines", () =>{
    const numberOfLines = 5
    const price = 150;
    const totalPrice = 1000;
    const result = incrementPhoneLine(numberOfLines, price, totalPrice);

    expect(result).toBe(1150);
})

test("Adding move than 8 phone lines - it shouldn't change the price", () =>{
    const numberOfLines = 9
    const price = 150;
    const totalPrice = 1000;
    const result = incrementPhoneLine(numberOfLines, price, totalPrice);

    expect(result).toBe(1150);
})



// decrementPhoneLine()

test("Removing extra phone lines, if they can be removed", () =>{
    const numberOfLines = 5
    const price = 150;
    const totalPrice = 1150;
    const result = decrementPhoneLine(numberOfLines, price, totalPrice);

    expect(result).toBe(1000)
})


// selectPhone()

test('Select a phone and add it to the list of selected phones', () => {
    const listOfphones = [ "Motolora G99",  "Iphone 99" ];
    const model = "Iphone 99";
    const price = 6000;
    const totalPrice = 6800;
    const result = selectPhone(listOfphones, model, price, totalPrice);

    expect(result).toBe(12800);
    expect(listOfphones).toStrictEqual([ "Motolora G99",  "Iphone 99", "Iphone 99" ])
})


// deselectPhone()

test('Deselectiong a phone and remove it to the list of selected phones', () => {
    const listOfphones = [ "Motolora G99",  "Iphone 99" ];
    const model = "Iphone 99";
    const price = 6000;
    const totalPrice = 6800;
    const result = unselectPhone(listOfphones, model, price, totalPrice);

    expect(result).toBe(800);
    expect(listOfphones).toStrictEqual([ "Motolora G99" ])
})

test('Unselecting a phone, that is not in the list of phones', () => {
    const listOfphones = [ "Motolora G99",  "Iphone 99" ];
    const model = "Samsung Galaxy 99";
    const price = 6000;
    const totalPrice = 6800;
    const result = unselectPhone(listOfphones, model, price, totalPrice);

    expect(result).toBe(6800);
    expect(listOfphones).toStrictEqual([ "Motolora G99",  "Iphone 99" ])
})