/**
 * Expose endswith().
 */

module.exports = endswith;

/**
 * returns boolean for matching given suffix.
 *
 * @param {String} original string (haystack)
 * @param {String} suffix to test for (needle)
 * @return {Boolean}
 */

function endswith(str, sfx) {

    // Check not already implemented (ECMAScript 6)
    if (typeof String.prototype.endsWith !== 'function') {

        // Quick, broad cross-browser implementation (not using .lastIndexOf) 
        //   http://jsperf.com/endswith-stackoverflow/3
        return str.indexOf(sfx, str.length - ((sfx && sfx.length) || 0)) !== -1;
    }

    return str.endsWith(sfx);
}