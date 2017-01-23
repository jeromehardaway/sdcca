function Hamming() {

    // compute the hamming distance
    this.compute = function ( stringOne, stringTwo ) {
        var count = 0;

        // ensure that related strands are equal in length
        if( stringOne.length !== stringTwo.length ) {
            throw new Error('DNA strands must be of equal length.');
        }

        for( var i = 0; i < stringOne.length; i++ ) {
            if( stringOne.charAt(i) !== stringTwo.charAt(i) ) {
                count++;
            }
        }

        return count;
    };
}

module.exports = Hamming;
