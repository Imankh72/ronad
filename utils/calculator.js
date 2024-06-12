const warehousingCostCalc = (width,height,length) => {
    const warehousingCostConstant = 2000;
    const binVolume = 0.171;
    const dimentionCM = width * height * length;
    const dimentionMeter = dimentionCM / 1000000;
    const numberOfUnit = dimentionMeter / binVolume;
    const total = numberOfUnit * warehousingCostConstant;
  
    return Math.floor(total);
}
  
const boxCostCalc = (w,h,l) => {
    const [height,width,length] = [w,h,l].sort()
    if(width <= 20 && height <= 20 && length <= 30) {
        return 4425;
    }
    if(width <= 30 && height <= 25 && length <= 40) {
        return 16500;
    }
    if(width <= 45 && height <= 35 && length <= 55) {
        return 35000;
    }
    return 0
}
  
const warehouseProcessCalc = (weight) => {
    const weightKg = weight / 1000;
    let processCost = 1700,extraCost = 500;
    if(weightKg > 3) {
        processCost = processCost + (extraCost * (weightKg - 3));
    }
    return processCost.toFixed(); 
}
  
const deliveryCostCalc = (width,height,length,weight,isActive) => {
    const weightKg = weight / 1000;
    let deliveryCost = isActive ? 30000 : 20000,
        extraWeight = 0,
        extraWidth = 0,
        extraHeight = 0,
        extraLength = 0 ;

    if(weightKg > 5) {
        extraWeight = weightKg - 5;
    }
    if(width > 35) {
        extraWidth = width - 35;
    }
    if(height > 35) {
        extraHeight = height - 35;
    }
    if(length > 35) {
        extraLength = length - 35;
    }
    const extraDim = extraWidth + extraHeight + extraLength;
    const extraDimCost = (extraDim / 10) * 1000
    const extraWeightCost = extraWeight * 1000;

    return deliveryCost + extraWeightCost + extraDimCost;
}

export {deliveryCostCalc,warehouseProcessCalc,boxCostCalc,warehousingCostCalc}