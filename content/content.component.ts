import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent
 {
  value1:number=123;
  value2:number=234;
  result:number=this.value1+this.value2;
  
 //title = 'sampleapp';

 onClick=()=>
 {
  alert("This is a funcion in Type Script");
 }

 onAddFunc()
 {
  this.value1=Number(prompt("Enter the First value"));
  this.value2=Number(prompt("Enter the Second Value"));
  this.result=this.value1+this.value2;
 }
}
