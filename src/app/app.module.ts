import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent,  DetailsComponent],
  imports: [BrowserModule, AppRoutingModule,HomeComponent,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
