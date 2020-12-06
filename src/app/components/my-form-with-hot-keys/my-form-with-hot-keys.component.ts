import { Component, OnInit } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';

@Component({
  selector: 'app-my-form-with-hot-keys',
  templateUrl: './my-form-with-hot-keys.component.html',
  styleUrls: ['./my-form-with-hot-keys.component.scss'],
})
export class MyFormWithHotKeysComponent implements OnInit {
  getDescription(): string | Function {
    return 'desadasdasdasdasdc';
  }
  constructor(private hotkeysService: HotkeysService) {
    const newKey = new Hotkey(
      ['command+s', 'ctrl+s'],
      (): boolean => {
        this.save();
        return false; // Prevent bubbling
      },
      ['INPUT', 'TEXTAREA', 'SELECT'],
      this.getDescription
    );
    this.hotkeysService.add(newKey);
  }

  ngOnInit(): void {}

  save() {
    console.log('save');
  }
}
