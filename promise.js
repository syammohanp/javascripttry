const { resolve } = require("path")

let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve(
            'success'
        )
    } else {
        reject('failed')
    }
})

p.then((val) => {
    console.log('val and message simple promise', val);
}).catch(message => {
    console.log('error message simple promise', message);
})

const userleft = false;
const userNotWatching = true;
function watchTutorialCallback(callback, errorCallback){
    if(userleft) {
        errorCallback({
            name: 'userLeft',
            message: 'Bad'
        })
    }
    else if(userNotWatching) {
        errorCallback({
            name: 'userNotWatching',
            message: 'Again bad'
        })
    } else {
        callback('Subscribed');
    }
}

watchTutorialCallback((message) => {
    console.log('watching callback', message)
},(err) => {
    console.log('error callback', err.name, err.message);
})

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if(userleft) {
            reject({
                name: 'userLeft',
                message: 'Bad'
            })
        }
        else if(userNotWatching) {
            reject({
                name: 'userNotWatching',
                message: 'Again bad'
            })
        } else {
            resolve('Subscribed');
        }
    })
    
}

watchTutorialPromise().then((message) => {
    console.log('watching promise', message)
}).catch((err) => {
    console.log('error promise', err.name, err.message);
})


const download1 = new Promise((resolve,reject) => {
    resolve('1 downloaded');
})

const download2 = new Promise((resolve, reject) => {
    resolve('2 downloaded')
})

const download3 = new Promise((resolve, reject) => {
    resolve('3 downloaded')
})

Promise.all([
    download1, 
    download2, 
    download3
]).then((messages) => {
        console.log('all downloaded', messages);
})
Promise.race([download1,
download2,
download3]).then(message => {
    console.log('one downloaded', message);
})