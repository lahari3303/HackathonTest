import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  empId:number=0;
  empName:string="";
  empAddress:string="";
  empImg:string="";
  empSalary:number=0;
  @Output() onAddNew : EventEmitter<Employee> = new EventEmitter<Employee>();

  onInvokeFunc()
  {
    const emp={} as Employee;
    emp.id=this.empId;
    emp.Name=this.empName;
    emp.Address=this.empAddress;
    emp.Pic=this.empImg;
    emp.Salary=this.empSalary;
    this.onAddNew.emit(emp);
    this.clearFields();
  }

  clearFields()
  {
    this.empId=0;
    this.empName="";
    this.empAddress="";
    this.empSalary=0;
    this.empImg="";
  }
}
