import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormControl } from '@angular/forms';

import { CityService } from "../../../services/city.service";
import { CityResponse } from "../../../models/CityResponse.model";
import { CityUpdateRequest } from "../../../models/CityUpdateRequest.model";

@Component({
  selector: 'app-city-edit-dialog',
  templateUrl: './city-edit-dialog.component.html',
  styleUrls: ['./city-edit-dialog.component.scss']
})
export class CityEditDialogComponent {

  editForm = new FormGroup({
    name: new FormControl(),
    imageUrl: new FormControl()
  });

  constructor(
    private cityService: CityService,
    public dialogRef: MatDialogRef<CityEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public citySource: CityResponse
  ) {
    this.editForm.controls.name.setValue(citySource.name);
    this.editForm.controls.imageUrl.setValue(citySource.imageUrl);
  }

  public edit(): void {
    const city: CityUpdateRequest = {
      id: this.citySource.id,
      name: this.editForm.controls.name.value,
      imageUrl: this.editForm.controls.imageUrl.value == '' ? null : this.editForm.controls.imageUrl.value,
    }

    this.cityService.update(city).subscribe((city: CityResponse) => {
      this.dialogRef.close(city);
    });
  }

  public close(): void {
    this.dialogRef.close();
  }
}
