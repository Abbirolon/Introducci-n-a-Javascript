let dato = 25

if (dato>30) {
   console.log(superficieCorporal(dato))
}
else {
    console.log(HollidaySegar(dato))
}

function superficieCorporal(peso) {
    let volumen = peso + 1
    return volumen;
}

function HollidaySegar(peso) {
    let volumen = peso *2
    return volumen;
    
}
