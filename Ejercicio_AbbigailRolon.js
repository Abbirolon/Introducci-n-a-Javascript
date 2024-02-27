function cualEsMayor (a,b,c) {
    if (a > b && a > c){
        return(a)
} else if (b > a && b > c) {
        return(b)
} else if (c > b && c > a) {
    return(c)
}
} console.log(cualEsMayor(10,15,20))