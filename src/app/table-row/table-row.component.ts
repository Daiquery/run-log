import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RUNS, Run } from "../mock-logs";

@Component({
  selector: "app-table-row",
  templateUrl: "./table-row.component.html",
  styleUrls: ["./table-row.component.css"]
})
export class TableRowComponent implements OnInit {
  @Input() logs;

  // currentLog: Run;
  modalInstance;

  editLogForm: FormGroup;

  closeResult = "";

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.currentLog = this.runLogs.find(log => log.id === this.id);
    // this.editLogForm = this.fb.group({
    //   id: [this.currentLog.id],
    //   date: [this.currentLog.date],
    //   distance: [this.currentLog.distance],
    //   time: [this.currentLog.time]
    // });
  }

  removeEntry(id) {
    // console.log("Before: " + this.runLogs);

    // this.runLogs = [...this.runLogs.filter(item => item.id !== id)];

    // console.log("After: " + this.runLogs);
  }

  updateEntry() {
    // this.runLogs = [...this.runLogs, { ...this.editLogForm.value }];
    // this.activeModal.close();
  }
}
