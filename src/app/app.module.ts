import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HotkeyModule, IHotkeyOptions } from 'angular2-hotkeys';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormWithHotKeysComponent } from './components/my-form-with-hot-keys/my-form-with-hot-keys.component';

const options: IHotkeyOptions = {
  disableCheatSheet: false,
  cheatSheetHotkey: '!',
  cheatSheetCloseEsc: true,
  cheatSheetCloseEscDescription: 'hide hotkeys map',
  cheatSheetDescription: 'show all hotkeys',
};

@NgModule({
  declarations: [AppComponent, MyFormWithHotKeysComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HotkeyModule.forRoot(options),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
