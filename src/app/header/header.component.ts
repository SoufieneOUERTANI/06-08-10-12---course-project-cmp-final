import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() elementSignal = new EventEmitter<string>(); 

  onSelected(element : string) {
      this.elementSignal.emit(element);
  }
}
