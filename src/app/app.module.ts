import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SquaredWidgetComponent } from './squared-widget/squared-widget.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, SquaredWidgetComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
