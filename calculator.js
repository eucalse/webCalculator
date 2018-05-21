var display = document.getElementById("display");
var display_temp = '';		//输入寄存器
var result = 0;
var evalFlag = 0;			//判断是否在按下等于后
var enterFlag = 0;			//判断输入运算符后数字长度
var NaNFlag = 0;			//判断是否输入过运算符
var zeroFlag = 0;			//判断首位为0

function temp(x){			//按键输入函数
	if (display.innerHTML.length>=26){
		alert("超出范围");
	}
	else{
		if (typeof(x) === "number" || x == '.'){
			enterFlag ++;
		}

		else{
			enterFlag = 0;
			NaNFlag = 1;
		}

		if (evalFlag){
			if (isNaN(x)){
				display.innerHTML = result;
				display_temp = result;
			}
			else
				display.innerHTML = '';
			evalFlag = 0;
		}
		if (x!==0)
			zeroFlag = 1;
		display.innerHTML += x;
		if (zeroFlag)
			display_temp += x;
	}
}

function calculator(){	//运算函数
	if (display.innerHTML == 0){
		display_temp = 0;
		result = 0;
	}
	if (display_temp!==''){
		//display_temp = display_temp.split(/[\+\-\*\/]/);
		console.log(display_temp);
		result = eval(display_temp);
	}
	if (isNaN(result)){
		alert("error");
		result = 0;
	}
	display.innerHTML = result;
	display_temp = '';
	evalFlag = 1;
	NaNFlag = 0;
	zeroFlag = 0;
}

function ans(){			//输入answer
	if (isNaN(display.innerHTML[display.innerHTML.length - 1])){
		display.innerHTML += "Ans";
		display_temp += result;
	}
	else {
		evalFlag = 0;
		display.innerHTML = '';
		display.innerHTML += "Ans";
		display_temp = result;
	}
}
function ac(){			//ac键
	display.innerHTML = '';
	display_temp = '';
	result = 0;
}
function ce(){			//ce键
	if(NaNFlag){
		display.innerHTML = display.innerHTML.slice(0,(display.innerHTML.length-enterFlag)-1);
		display_temp = display_temp.slice(0,(display_temp.length-enterFlag)-1);
	}
	else{
		display.innerHTML = '';
		display_temp = '';
	}
	NaNFlag = 0;
	enterFlag = 0;
	result = 0;
}
