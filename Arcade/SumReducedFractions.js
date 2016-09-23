
function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}
function fractionSum(A, B) {

  
    var commonDivivisior = A[1] * B[1];
    
    A[0] *=B[1];
    B[0] *=A[1];

    A[1] = commonDivivisior;
    B[1] = commonDivivisior;
    
    
    
    var result = [];
    
    
    result[1] = commonDivivisior;
    result[0] = A[0]+B[0];
    
    var divider = gcd(result[0], result[1]);
    
    
    return([result[0]/divider, result[1]/divider]);
    
}

