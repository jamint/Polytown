export const get3DObject = (arr, query) => {
    var result = arr.filter(obj => {
        return obj.name === query;
    });
    return result[0];
}