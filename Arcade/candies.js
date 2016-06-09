function candies(n, m) {

    var result = m;
    while(m%n!==0){
        m--;
        result = m;
    }
    
    return result;
}

