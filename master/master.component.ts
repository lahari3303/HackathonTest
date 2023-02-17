import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit
{
  toShow:number=0;
  btnMessage:string="Add Employee";

  employees:Employee[]=[];
  selectedEmp:Employee={} as Employee;

  ngOnInit():void
  {
  
    this.employees.push({id:123, Name:"Lahari", Address:"Bangalore",Salary:45000,Pic:"./assets/Images/Person1.jfif"});
    this.employees.push({id:124, Name:"Parvathi", Address:"Bangalore",Salary:55000,Pic:"./assets/Images/Person2.jfif "});
    this.employees.push({id:125, Name:"Sarsvathi", Address:"Bangalore",Salary:35000,Pic:"./assets/Images/Person3.jfif "});
    this.employees.push({id:126, Name:"Lakshmi", Address:"Bangalore",Salary:65000,Pic:" "});
    this.employees.push({id:127, Name:"Devi", Address:"Bangalore",Salary:85000,Pic:" "});
    this.employees.push({id:128, Name:"VishuPriya", Address:"Bangalore",Salary:75000,Pic:" "});
    this.employees.push({id:129, Name:"Mohanna", Address:"Bangalore",Salary:85000,Pic:" "});
    this.employees.push({id:122, Name:"Mohannalahari", Address:"Bangalore",Salary:88000,Pic:" "});
  }

  onEdit(emp:Employee)
  {
    this.selectedEmp=emp;
  }
  onDeleteHandler(emp:Employee)
  {
    let index=this.employees.indexOf(emp);
    this.employees.splice(index, 1);
  }
  onAddHandler(emp:Employee)
  {
    debugger;
    this.employees.push(emp);
    this.employees=this.employees.slice();
  }
  onShow()
  {
    this.toShow =  this.toShow === 0 ? 1 : 0;
      if(this.toShow == 1)
        this.btnMessage = "Cancel Adding";
        else this.btnMessage = "Add Employee";

  }

}
