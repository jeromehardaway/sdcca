function Hamming() {

    // compute the hamming distance
    this.compute = function ( stringA, stringB ) {
        var count = 0;

        // ensure that related strands are equal in length
        if( stringA.length !== stringB.length ) {
            throw new Error('DNA strands must be of equal length.');
        }

        for( var i = 0; i < stringA.length; i++ ) {
            if( stringA.charAt(i) !== stringB.charAt(i) ) {
                count++;
            }
        }

        return count;
    };
}

module.exports = Hamming;
