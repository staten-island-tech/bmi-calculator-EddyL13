console.log("connected")


const user = {
    name :"Dan",
    height : "170",
    weight : "65",};

function bmi(object) {
    weight =object.weight;
    height= object.height/100
    BMI=weight/height **2;
    return BMI;}
    console.log(bmi(user));
    

function compare (bmi, object) {
    if (bmi>=25){
    return `${object.name} is in the Overweight range.`; }
    else if (bmi>=18.5) {
     return `${object.name} is in the Healthy Weight Range.`;}
    else if (bmi<18) {}
        return `${object.name} is in the Underweight Range.`;}

    

console.log(compare(BMI,user));