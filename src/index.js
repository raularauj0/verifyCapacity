function verifyCapacity(capacity, on, waiters){
    if ( capacity <= on){
        return waiters
    }
    if ( on + waiters > capacity){
        return on + waiters - capacity
    }
 return 0
}

module.exports = verifyCapacity