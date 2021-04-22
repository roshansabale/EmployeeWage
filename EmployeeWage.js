/*UC 1
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    console.log(empCheck);
    if (empCheck == IS_ABSENT) {
        console.log("UC 1: Employee is Abscent Exiting the program");
        return;
    } else {
        console.log("Employee is Present");
    }
}*/

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;


function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOUR;
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWagesArr = new Array;
let empDailyMap = new Map;

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWagesArr.push(calcDailyWage(empHrs));
    empDailyMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 : Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Employee wage:  " + empWage);


let totEmpWage = 0;

function sum(dailyWage) {
    totEmpWage += dailyWage;
}

empDailyWagesArr.forEach(sum);
console.log("UC7A: Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Employee wage:  " + empWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC7A: -Emp wage with reduce " + empDailyWagesArr.reduce(totalWages, 0));

//UC 7 B -show the day along with wage using array map helper function
let dailycounter = 0;

function mapDayWithWage(dailyWage) {
    dailycounter++;
    return dailycounter + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWagesArr.map(mapDayWithWage);
console.log("UC7B: Daily wage Map");
console.log(mapDayWithWageArr);

//UC 7C Show days when full time wage of 160 was earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C : Daily wage filter when fulltime wage Earned");
console.log(fullDayWageArr);

//UC 7D Find the first occurnce when full time wage was earned suing find function
function findfulltimewage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7C : Daily wage filter when fulltime wage Earned");
console.log(mapDayWithWageArr.find(findfulltimewage));

//UC 7E Check if Every element of full time wage is truley holding full time   
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("UC 7E Check all element have full time");
console.log(fullDayWageArr.every(isAllFulltimeWage));

//UC 7F Check if there is any part time  wage
function isAnyPartTime(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F Check if any part time wage");
console.log(mapDayWithWageArr.some(isAnyPartTime));

//UC 7G Find the  number of days the employee worked
function totalDayWorked(numofdays, dailyWage) {
    if (dailyWage > 0) return numofdays + 1;
    return numofdays;
}
console.log("7G : Number of worked days");
console.log(empDailyWagesArr.reduce(totalDayWorked, 0));

//UC 8 empwagemap
console.log(empDailyMap);
console.log("UC 8 : Empwage map with total hours");
console.log(Array.from(empDailyMap.values()).reduce(totalWages, 0));