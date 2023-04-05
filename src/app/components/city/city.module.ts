import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CityComponent } from "./city.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { CardComponent } from "./card/card.component";
import { CityEditDialogComponent } from "./city-edit-dialog/city-edit-dialog.component";
import { CityService } from "../../services/city.service";

@NgModule({
  declarations: [
    CityComponent,
    CardComponent,
    ToolbarComponent,
    CityEditDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    FormsModule
  ],
  exports: [CityComponent],
  providers: [CityService],
  bootstrap: []
})
export class CityModule { }
