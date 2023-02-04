import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFillerComponent } from './form-filler/form-filler.component';
import { HtmlRendererComponent } from './html-renderer/html-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFillerComponent,
    HtmlRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
