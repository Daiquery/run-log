import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";
import { EditComponent } from "./edit/edit.component";
import { TableRowComponent } from "./table-row/table-row.component";

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    TableComponent,
    EditComponent,
    TableRowComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
