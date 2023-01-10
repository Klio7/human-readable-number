module.exports = function toReadable(number) {
    let map = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [30, "thirty"],
        [40, "forty"],
        [50, "fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
        [100, "hundred"],
    ]);
    if (number === 0) {
        return "zero";
    }
    let str = String(number);
    function twoDigit(number) {
        if (number === 0) {
            return "";
        }
        if (map.has(number) === true) {
            return map.get(number);
        }
        let str = String(number);
        if (str.length === 2) {
            return [map.get(str[0] * 10), map.get(+str[1])].join(" ");
        }
    }

    if (str.length === 3) {
        return `${map.get(+str[0])} hundred ${twoDigit(+str.slice(1))}`.trim();
    }
    return twoDigit(number);
};
