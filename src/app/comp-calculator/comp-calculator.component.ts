import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MathService } from '../service/math.service';

@Component({
  selector: 'app-comp-calculator',
  templateUrl: './comp-calculator.component.html',
  styleUrls: ['./comp-calculator.component.css']
})
export class CompCalculatorComponent implements OnInit {

  curComps: string[];
  curNums: string[];
  curIndex: number;
  curNum: string;
  curResult: string;
  numStr:string;
  @Output() calResult = new EventEmitter<number>();

  constructor(private mathService : MathService) { }

  ngOnInit() {
    this.initData();
    //精度问题
    // mathService.log(1208.36*100);
    // console.log(this.mathService.accMul(1208.36,100));
  }

  //数据初始化
  initData(){
    this.curIndex = 0;
    this.curNum = "";
    this.curNums = [];
    this.curComps = [];
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
    }else if(num == "00" && (len == 0 || this.curNum == "0")){
      this.curNum = "0";
    }else if("00" != num && "0" != num && "." != num && this.curNum == "0"){
      this.curNum = num;
    }else{
      this.curNum = this.curNum + num;
    }
    this.showNumstr();
  }

  //点击计算符
  addComp(comp){
    //添加数据
    this.addNumstr();

    //添加字符
    let numlen = this.curNums.length;
    let complen = this.curComps.length;
    if(numlen>0){
      if(numlen > complen){
        this.curComps.push(comp);
      }else{
        this.curComps[complen - 1] =comp;
      }
    }
    this.showNumstr();
  }

  //点击等号，计算
  eq(){
    //添加数据
    this.addNumstr();

    //先计算乘法及除法
    let numlen = this.curNums.length;
    let complen = this.curComps.length;
    if(numlen>0){
      this.curComps = this.curComps.slice(0, numlen - 1);
      //展示计算字符串
      this.showNumstr();

      let tempnums = [];
      let tempcomps = [];
      let tempnum = "";
      for(let i = 0; i < complen; i ++){
        if(this.curComps[i] == "+" || this.curComps[i] == "-"){
          if(tempnum != ""){
            tempnums.push(tempnum);
          }else{
            tempnums.push(this.curNums[i]);
          }
          tempcomps.push(this.curComps[i]);
          tempnum = "";
        }else if(this.curComps[i] == "*"){//乘法计算
          if(tempnum == ""){
            tempnum = this.curNums[i];
          }
          tempnum = this.mathService.accMul(tempnum, this.curNums[i+1]).toString();
        }else if(this.curComps[i] == "/"){//除法计算
          if(tempnum == ""){
            tempnum = this.curNums[i];
          }
          tempnum = this.mathService.accDiv(tempnum, this.curNums[i+1]).toString();
        }
      }
      
      if(tempnum != ""){
        tempnums.push(tempnum);
      }else if(numlen > 0){
        tempnums.push(this.curNums[numlen - 1]);
      }
      console.log(tempnums);
      console.log(tempcomps);
      //后计算加法及减法
      let result = tempnums[0];
      let len = tempnums.length;
      if(len > 1){
        for(let i = 0; i < len; i ++){
          if(tempcomps[i] == "+"){
            result = this.mathService.accAdd(result, tempnums[i + 1]);
          }else if(tempcomps[i] == "-"){
            result = this.mathService.accSubtr(result, tempnums[i + 1]);
          }
        }
      }
      this.curResult = result;
      this.calResult.emit(result);
      this.initData();
    }
  }
  //添加当前字符
  addNumstr(){
    if(this.curNum != ''){
      let len = this.curNum.length;
      if(this.curNum.indexOf(".") == len - 1){
        this.curNum = this.curNum.substring(0,len- 1);
      }
      this.curIndex ++;
      this.curNums.push(this.curNum);
      this.curNum = '';
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
      this.curComps.splice(this.curIndex);
    }
    this.showNumstr();
  }

  //展示计算过程
  showNumstr(){
    this.numStr = "";
    this.curResult = "";
    let numlen = this.curNums.length;
    if(numlen > 0){
      for(let i = 0; i < numlen; i ++){
        this.numStr += this.curNums[i] + (this.curComps[i]?this.curComps[i]:"");
      }
    }
  }

  //清空
  clear(){
    this.initData();
    this.numStr = "";
    this.curResult = "";
    this.calResult.emit();
  }
}
