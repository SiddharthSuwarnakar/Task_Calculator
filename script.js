let num1 = 0
let num2 = 0
let symbol = ""

let i = 0
let flag = 0

let displayText = ""
let displayText2 = ""

let insertNum = (num) =>
{
    displayText = displayText + num
    document.getElementById("input").innerHTML = displayText;
}

let operation = (sign) =>
{
    if(flag === 1)
    {
        calculate()
    }
    if(sign === '+' || sign === '-' || sign === '*' || sign === '/')
    {
        flag = 1
        num1 = + displayText       //plus sign for converting string to integer
        symbol = sign
        i = displayText.length;
        i++;
        displayText = displayText + sign
        document.getElementById("input").innerHTML = displayText;
    }
}

let calculate = () =>
{
    console.log("calculating")
    displayText2 = displayText.slice(i)
    num2 = + displayText2

    if(symbol === "+")
    {
        num1 = num1 + num2
        document.getElementById("output").innerHTML = num1
    }
    else if(symbol === "-")
    {
        num1 = num1 - num2
        document.getElementById("output").innerHTML = num1
    }    
    else if(symbol === "*")
    {
        num1 = num1 * num2
        document.getElementById("output").innerHTML = num1
    }
    else if(symbol === "/")
    {
        num1 = num1 / num2
        document.getElementById("output").innerHTML = num1
    }
}

let clearAll = () =>
{
    console.log("in function clear")
    displayText = ""
    displayText2 = ""
    document.getElementById("input").innerHTML = displayText;
    document.getElementById("output").innerHTML = displayText2;
    flag = 0
}