// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(word="special") {
        return `You are ${string}${word}${string}!`
    }
}

const Calculator = {
    add(){
        return 1 + 3
    },
    subtract(){
        return 1 - 3
    },
    multiply(){
        return 1 * 3
    },
    divide(){
        return 10 / 5
    }
}

function actionApplyer(int, arr) {
    let newInt = int
    if(arr.length === 0){
        return int 
    } else {
        arr.forEach(func => {
            newInt = func(newInt) 
        })
        return newInt 
    }
}

