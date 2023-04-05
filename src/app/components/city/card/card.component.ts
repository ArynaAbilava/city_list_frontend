import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

import { CityResponse } from "../../../models/CityResponse.model";
import { CityEditDialogComponent } from "../city-edit-dialog/city-edit-dialog.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() city: CityResponse = {
    id: '',
    name: '',
    imageUrl: '',
  };
  @Output() editAction = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  public openEditDialog(city: CityResponse): void {
    const dialogRef = this.dialog.open(CityEditDialogComponent, {
      width: '500px',
      data: city
    });
    dialogRef.afterClosed().subscribe(() => {
      this.editAction.emit();
    });
  }
}


