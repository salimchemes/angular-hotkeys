import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HotkeyModule } from 'angular2-hotkeys';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormWithHotKeysComponent } from './components/my-form-with-hot-keys/my-form-with-hot-keys.component';
@NgModule({
  declarations: [AppComponent, MyFormWithHotKeysComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HotkeyModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
