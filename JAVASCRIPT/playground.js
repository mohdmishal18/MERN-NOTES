function mishal() {
    try {
        foranerror();
    } catch (error) {
        throw new Error('something went wrong', {cause: error})
    }
}

try{
    mishal()
} catch(err) {
    console.log(err)
    console.log(`error caused by ${err.cause}`); // original error 
}