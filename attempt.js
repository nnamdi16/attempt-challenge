module.exports.attempts = (avail, allowed = [], pref) => {

    // get data from avail that is in allowed into result
    // get data from result that is in pref
    let firstSeive = []
    let preffered = []

    for (let data of avail) {
        if (allowed.includes(data) || allowed.includes('any')) {
            firstSeive.push(data)
        }
    }


    // check for pref
    if (firstSeive.length > 0) {
        for (let data of firstSeive) {
            if (pref.includes(data) || pref.includes('any') ) {
                preffered.push(data);
            }
        }

       
        if (preffered.length > 0) {
            return preffered
        }
        if (preffered.length == 0 && Math.max(...firstSeive) < Math.max(...pref)) {
            preffered.push(Math.min(...firstSeive));
        } else {
            preffered.push(Math.max(...firstSeive))
        }

    }


    return preffered;





}


