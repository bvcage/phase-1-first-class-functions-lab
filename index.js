const returnFirstTwoDrivers = (driverAry) => [driverAry[0], driverAry[1]];

const returnLastTwoDrivers = (driverAry) => {
    let last = driverAry.length - 1;
    return [driverAry[last-1], driverAry[last]];
}