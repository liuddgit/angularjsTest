import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MathService } from '../service/math.service';

@Component({
  selector: 'app-comp-calculator-add',
  templateUrl: './comp-calculator-add.component.html',
  styleUrls: ['./comp-calculator-add.component.css']
})
export class CompCalculatorAddComponent implements OnInit {

  curNums: string[];
  curIndex: number;
  curNum: string;
  @Output() calResult = new EventEmitter<number>();
  curResult : number;
  numStr:string;

  constructor(private mathService : MathService) { }

  ngOnInit() {
    this.initData();
  }

  //数据初始化
  initData(){
    this.curIndex = 0;
    this.curNum = "";
    this.curNums = [];
    this.numStr = "";
    this.calResult.emit(0);
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
      this.curNum = this.curNums[this.curIndex];
      this.curNums.splice(this.curIndex);
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
        result = this.mathService.accAdd(result, num);
      }
      this.calResult.emit(result);
      this.curResult = result;
    }else{
      this.calResult.emit(0);
      this.curResult = 0;
    }
  }

}
