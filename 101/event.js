// ee is some eventEmitter


function callback(param) {
    console.log(param); // will print 123 after emit
}


ee.on('mouseClick', callback);

ee.emit('myEvent', 123);
