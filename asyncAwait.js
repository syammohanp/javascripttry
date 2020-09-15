function makeRequest(location) {
    return new Promise((resolve, reject) => {
        if(location === 'stuttgart') {
            console.log('in stuttgart');
            resolve('resolve ' + location);
        } else {
            reject('stuttgart reject');
        }
    })
}

function processRequest(makeRequestOutput) {
    return new Promise((resolve,reject) => {
        console.log('in processRequest');
        resolve('processRequest ' + makeRequestOutput);
    })
}

makeRequest('stuttgart').then(res => {
    console.log('makeRequest call', res);
    return processRequest(res);
}).then(processRes => {
    console.log('processRequest call', processRes);
}).catch(err => {
    console.log('makeRequest call err', err);
})

async function doWork(){
    try {
        const res = await makeRequest('bombdy');
        console.log('makeRequest call', res);
        const processRes = await processRequest(res);
        console.log('processRequest call', processRes);
    } catch(err) {
        console.log('makeRequest call err', err);
    }

}

doWork();