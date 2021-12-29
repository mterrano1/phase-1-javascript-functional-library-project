function myEach(collection, callback){
    Object.values(collection).forEach(element => callback(element));
    return collection
}

function myMap(collection, callback){
    let newArray = Object.values(collection).map(element => callback(element));
    return newArray
}

function myReduce(collection, callback, acc){
    let newArray = Object.values(collection);
    acc = acc || newArray.shift();
    let reducedValue = newArray.reduce(callback, acc);
    return reducedValue
}

function myFind(collection, predicate){
    return Object.values(collection).find(element => predicate(element))
}

function myFilter(collection, predicate){
    return Object.values(collection).filter(element => predicate(element))
}

function mySize(collection){
    return Object.values(collection).length
}

function myFirst(array, n){
    let newArray = [];
    if (n){
        for (let i = 0; i < n; i++){
            newArray.push(array[i])
        }
        return newArray
    }
    else 
    {
        return (array[0])
    }
}

function myLast(array, n){
    let newArray = [];
    if (n){
        for (let i = 0; i < n; i++){
            newArray.push(array.pop())
        }
        return newArray
    }
    else 
    {
        return (array.pop())
    }
}

