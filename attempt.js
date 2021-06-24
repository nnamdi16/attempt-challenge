module.exports.attempts = (avail, allowed = [], pref) => {
  // get data from avail that is in allowed into result
  // get data from result that is in pref
  const result = [];
  let firstSeive = avail.map((data) => ((allowed.includes(data) || allowed.includes('any')) ? data : ''));
  firstSeive = firstSeive.filter((v) => v !== '');
  // check for pref
  if (firstSeive.length > 0) {
    let preffered = firstSeive.map((data) => (pref.includes(data) || pref.includes('any') ? data : ''));
    preffered = preffered.filter((v) => v !== '');
    if (preffered.length > 0) {
      return preffered;
    }
    if (preffered.length === 0 && Math.max(...firstSeive) < Math.max(...pref)) {
      preffered.push(Math.min(...firstSeive));
    } else {
      preffered.push(Math.max(...firstSeive));
    }
    return preffered;
  }
  return result;
};
