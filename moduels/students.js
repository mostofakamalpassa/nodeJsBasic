const getName = ()=>{
    return  "mostofa kamal passa";
}

const getAge = () => {
    return "26";
}
const cgpa = 3.92;

// we can use  but it is a  not recomanded

/* 
exports.getName = getName;
exports.getAge = getAge;
exports.results = cgpa;
*/
// we can use this 
module.exports={
    getName,
    getAge,
    cgpa
}