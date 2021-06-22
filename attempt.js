module.exports.attempts = (avail, allowed = [], pref) => {

    // get data from avail that is in allowed into result
    // get data from result that is in pref
    let firstSeive = []
    let preffered = []

    for (let data of avail) {
        if (allowed.includes(data)) {
            firstSeive.push(data)
        }
    }

    // console.log(firstSeive);
    // console.log([Math.min(...firstSeive)]);

    // check for pref
    if (firstSeive.length > 0) {
        for (let data of pref) {
            if (firstSeive.includes(data)) {
                preffered.push(data)
            }
        }

        console.log(firstSeive)
        if (preffered.length > 0) {
            return preffered
        }
        if (preffered.length == 0 && Math.max(...firstSeive) < Math.max(...pref)) {
            preffered.push(Math.min(...firstSeive));
            // console.log(preffered)
        } else {
            preffered.push(Math.max(...firstSeive))
        }

    }


    return preffered;





}

let available = [240, 720];
let allowed = [240, 360, 1080];
let preferred = [240, 360];

// console.log(attempts(available, allowed, preferred))
