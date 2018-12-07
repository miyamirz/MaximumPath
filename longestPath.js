var mainArr = [
    [11, 1, 3, 2],
    [7, 14, 13, 6],
    [16, 15, 12, 8],
    [9, 4, 10, 5]
]
var sideLoaded;
var path = "";
var pathArr = [];
sideLoadMainArr = (value) => {
    return mainArr.map(innerArr => {
        let newArr = innerArr.map(val => {
            return value;
        })
        return newArr
    })


}
var result = {
    length: 0,
    path: ""
}
getLengthFromElement = (i, j) => {
    debugger;
    let n = mainArr.length;

    if (sideLoaded[i][j] != -1) {
        path += pathArr[i][j];
        return sideLoaded[i][j];
    }


    if (j < n - 1 && ((mainArr[i][j] + 1) == mainArr[i][j + 1])) {
        path = path + mainArr[i][j] + " ";
        return 1 + getLengthFromElement(i, j + 1);
    }

    if (j > 0 && (mainArr[i][j] + 1 == mainArr[i][j - 1])) {
        path = path + mainArr[i][j] + " ";
        return 1 + getLengthFromElement(i, j - 1);
    }


    if (i > 0 && (mainArr[i][j] + 1 == mainArr[i - 1][j])) {
        path = path + mainArr[i][j] + " ";
        return 1 + getLengthFromElement(i - 1, j);
    }


    if (i < n - 1 && (mainArr[i][j] + 1 == mainArr[i + 1][j])) {
        path = path + mainArr[i][j] + " ";
        return 1 + getLengthFromElement(i + 1, j);

    }
    path = path + mainArr[i][j];
    return 1;
}
LongestPath = () => {

    let finalLength = 1;
    sideLoaded = sideLoadMainArr(-1);
    for (var i = 0; i < mainArr.length; i++) {
        pathArr[i] = [];
        for (var j = 0; j < mainArr.length; j++) {

            if (sideLoaded[i][j] == -1)
                sideLoaded[i][j] = getLengthFromElement(i, j);
            finalLength = Math.max(finalLength, sideLoaded[i][j])
            pathArr[i].push(path);
            path = "";
        }

    }

    return finalLength;
}

var maximumLengthPath = LongestPath();
console.log("Maximum length path contains "+maximumLengthPath+" elements");

console.log("Path is:")
pathArr.map(arr => {
    arr.map(e => {
        result = e.length > result.length ? {
            'length': e.length,
            'path': e.split(' ').join('->')
        } : result;
    });
});

console.log(result.path);