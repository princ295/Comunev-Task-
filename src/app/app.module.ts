import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { ReactiveFormsModule ,FormsModule} from "@angular/forms";
import { HttpCallService } from './http-call.service';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule ,
    FormsModule   ,
    HttpClientModule
  ],
  providers: [
    HttpCallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
