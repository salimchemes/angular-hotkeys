import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HotkeyModule, IHotkeyOptions } from 'angular2-hotkeys';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormWithHotKeysComponent } from './components/my-form-with-hot-keys/my-form-with-hot-keys.component';

const options: IHotkeyOptions = {
  disableCheatSheet: false, // disable the cheat sheet popover dialog? Default: false
  cheatSheetHotkey: '!', // key combination to trigger the cheat sheet. Default: '?'
  cheatSheetCloseEsc: true, // use also ESC for closing the cheat sheet. Default: false
  cheatSheetCloseEscDescription: 'hide hotkeys map', // description for the ESC key for closing the cheat sheet (if enabed). Default: 'Hide this help menu'
  cheatSheetDescription: 'show all hotkeys', // description for the cheat sheet hot key in the cheat sheet. Default: 'Show / hide this help menu'
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
