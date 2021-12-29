function myEach(collection, callback){
    Object.values(collection).forEach(element => callback(element));
    return collection
}

function myMap(collection, callback){
    let newArray = Object.values(collection).map(element => callback(element));
    return newArray
}

function myReduce(collection, callback, acc = 0){
    let reducedValue = Object.values(collection).reduce(callback, acc);
    return reducedValue
}