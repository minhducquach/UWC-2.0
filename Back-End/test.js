// import user from './model/user-data.js';
// import User from './model/user-data.js'

  
// //   function isCherries(User) {
// //     return User.username === "admin" & User.password === "123456";
// //   }
// //   const result = User.find(isCherries)
// //   if (result) {
// //     console.log(result)
// //   } else {
// //     console.log('undefine')
// //   }
// const usernameR = "admin"
// const passwordR = "123456"
// const result = User.find(({username, password}) => {
//     return (username === usernameR & 
//         password === passwordR)
// })
// if (result) {
//     console.log(result)
// }
// else {
//     console.log("wrong")
// }
const taskData = {
    startDate: "2023-01-03",
    startTime: "9:00 AM",
    endTime: "10:00 PM"
};


let newStartTime = '';
let newEndTime = '';

const convertToSecond = (str) => {
    const [hours, minutes, seconds] = str.split(':').map(Number);
    return (hours*3600+ minutes*60)
};
const getSecond = (date, time) => {
    let newDate = new Date(date);
    let seconds = newDate.getTime() / 1000;
    let newTimeInSecond = '';
    const suffixesStartTime = time.slice(-2);
    if (suffixesStartTime == "AM") {
        newTimeInSecond = convertToSecond(time.slice(0,-3));
    } else {
        newTimeInSecond = convertToSecond(time.slice(0,-3)) + 12*3600;
    }
    return seconds + newTimeInSecond;
}
const validModifyTime = (date, startTime, endTime) => {
    //get current timestamp in second
    const currentTimestamp = new Date();
    const getCurrentTimestamp = Math.round(currentTimestamp.getTime()/1000);
    //start time in second
    const startTimeInSecond = getSecond(date, startTime);
    //end time in second
    const endTimeInSecond = getSecond(date, endTime);
    if (startTimeInSecond - 3600 > currentTimestamp && endTimeInSecond < currentTimestamp) {
        return 1;
    } else {
        return 0;
    }
}




console.log(newStartTime);
