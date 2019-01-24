import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-calculator',
  templateUrl: './com-calculator.component.html',
  styleUrls: ['./com-calculator.component.css']
})
export class ComCalculatorComponent implements OnInit {

  curNums: string[];
  curIndex: number;
  curNum: string;
  curResult: number;
  numStr:string;

  constructor() { }

  ngOnInit() {
    this.initData();
    //精度问题
    // console.log(1208.36*100);
  }

  //数据初始化
  initData(){
    this.curIndex = 0;
    this.curNum = "";
    this.curNums = [];
    this.numStr = "";
    this.curResult = 0;
  }
  //点击数字按键
  addNum(num){
    let len = this.curNum.length;
    let dotindex = this.curNum.indexOf(".");
    if(len == 0 && "."==num){
      this.curNum = "0.";
    }else if(dotindex >= 0){
      if(!("." == num) && (len - dotindex) <= 2){ //只能输入两位小数
        this.curNum = this.curNum + num;
      }
    }else{
      this.curNum = this.curNum + num;
    }
  }

  //点击加号
  add(){
    if(this.curNum != ''){
      let len = this.curNum.length;
      if(this.curNum.indexOf(".") == len - 1){
        this.curNum = this.curNum.substring(0,len- 1);
      }
      this.curIndex ++;
      this.curNums.push(this.curNum);
      this.curNum = '';
      this.calAdd(this.curNums);
    }
  }

  //点击退格
  del(){
    if(this.curNum && this.curNum != ''){
      let len = this.curNum.length;
      if(len == 1){
        this.curNum = "";
      }else{
        this.curNum = this.curNum.substring(0,len-1);
      }
    }else if(this.curNums && this.curNums.length>0){
      this.curIndex --;
      this.curNum = this.curNums[this.curIndex-1];
      this.curNums.splice(this.curIndex-1);
      this.calAdd(this.curNums);
    }
  }

  //清空
  clear(){
    this.initData();
  }

  //数组相加
  calAdd(numbers){
    this.numStr = this.curNums.join("+");
    if(numbers.length >= 1){//数组长度大于1时才进行计算
      let result = 0;
      for(let num of numbers){
        result = this.accAdd(result, num);
      }
      this.curResult = result;
    }else{
      this.curResult = 0;
    }
  }

  //数据相加
  accAdd(arg1, arg2) {
    let r1, r2, m;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (parseInt((arg1 * m).toFixed(0)) + parseInt((arg2 * m).toFixed(0))) / m;
  }
}
