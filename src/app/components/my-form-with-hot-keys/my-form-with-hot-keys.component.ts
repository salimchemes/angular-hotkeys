import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'app-my-form-with-hot-keys',
  templateUrl: './my-form-with-hot-keys.component.html',
  styleUrls: ['./my-form-with-hot-keys.component.scss'],
})
export class MyFormWithHotKeysComponent implements OnInit {
  mac = 'command+s';
  win = 'ctrl+s';
  isMac = navigator.platform.includes('Mac');
  saveCommand = this.isMac ? this.mac : this.win;
  saveCommandTitle = this.isMac ? '⌘+s' : this.win;
  form: FormGroup;
  constructor(private hotkeysService: HotkeysService, private fb: FormBuilder) {
    this.hotkeysService.add(
      new Hotkey(
        this.saveCommand, //  key combination
        (): boolean => {
          // callback function to execute after key combination
          this.save();
          return false; // prevent bubbling
        },
        ['INPUT', 'TEXTAREA', 'SELECT'], // allow shortcut execution in these html elements
        'save' // shortcut name
      )
    );
  }

  ngOnInit(): void {
    this.configForm();
  }

  save() {
    alert(this.form.controls?.textValue?.value || 'no text');
  }

  private configForm() {
    this.form = this.fb.group({
      textValue: '',
    });
  }
}
