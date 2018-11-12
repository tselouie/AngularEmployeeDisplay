import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { EmployeesComponent } from './employees.component';
import { PositionsComponent } from './positions.component';
import { ContentComponent } from './content.component';
import { NavComponent } from './nav.component';
import { FooterComponent } from './footer.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PositionService } from './data/position.service';
import { EmployeeService } from './data/employee.service';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    PositionsComponent,
    ContentComponent,
    NavComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PositionService, EmployeeService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
