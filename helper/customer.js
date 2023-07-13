function generateCustomerId(){
    return Math.random().toString(10).substr(2,6);
}

export {generateCustomerId};