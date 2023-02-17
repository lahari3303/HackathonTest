import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContentComponent } from './Components/content/content.component';
import { CalcComponent } from './Components/calc/calc.component';
import { FormsModule } from '@angular/forms';
import { MasterComponent } from './Components/master/master.component';
import { EmpDetailsComponent } from './Components/emp-details/emp-details.component';
import { AddemployeeComponent } from './Components/addemployee/addemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CalcComponent,
    MasterComponent,
    EmpDetailsComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
