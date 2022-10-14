var age= 25;
    var maleMarriageEligibility=age >=21 ? `Hey Bill Gates you are eligible for the marriage` : `Sorry, you are eligible for not the marriage`;
   console.log(maleMarriageEligibility);
var age=17;
var maleMarriageEligibility;
if(age>=21){
    maleMarriageEligibility=`Hey Steve Jobs you are allowed for the marriage`
}else{(maleMarriageEligibility=`Sorry Steve Jobs, you are not allowed for the marriage`)}
console.log(maleMarriageEligibility);

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);

function femaleMarriageEligibility(gender,age,gName)
{
if(gender==`female`&& age>=18)
{
    console.log(`Hey ${gName} you are allowed to marry`);
}
else{
    console.log(`Sorry you are not allowed to marry`);
}
}
femaleMarriageEligibility(`female`,14,`Jennifer`);
femaleMarriageEligibility(`female`,25,`Malinda Gates`)