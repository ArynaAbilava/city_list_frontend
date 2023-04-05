import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() searchEvent = new EventEmitter<string>();

  searchValue = '';

  public search(): void {
    this.searchEvent.emit(this.searchValue)
  }
}
