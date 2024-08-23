function getShippingPrice(weight) {

    if (weight >= 1 && weight <= 100) {
        return [399, 319, 735];
    }

    if (weight > 100 && weight <= 500) {
        return [399, 319, 835];
    }

    if (weight > 500 && weight <= 1000) {
        return [399, 319, 935];
    }

    if (weight > 1000 && weight <= 2000) {
        return [399, 319, 1215];
    }

    if (weight > 2000 && weight <= 10000) {
        return [719, 619, 1655];
    }

    if (weight > 10000 && weight <= 200000) {
        return [1129, 980, 2055];
    }

}

module.exports = getShippingPrice;
