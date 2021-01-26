import { Component } from "@angular/core";
// import { EditComponent } from "../edit/edit.component";
import {
  NgbModal,
  NgbActiveModal,
  ModalDismissReasons
} from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RUNS, Run } from "../mock-logs";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent {
  name = "Table";
  runLogs = RUNS;
  editLogForm: FormGroup;
  currentLog: Run;

  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  trackByFn(index, item) {
    return index;
  }

  openEditModal(content, logId) {
    this.currentLog = this.runLogs.find(log => log.id === logId);

    this.editLogForm = this.fb.group({
      id: [this.currentLog.id],
      date: [this.currentLog.date],
      distance: [this.currentLog.distance],
      time: [this.currentLog.time]
    });

    // open the modal
    this.modalService.open(content);

    // capture form data

    // grab the current logCollection
    // find log by id
    // update the entity
    // return updated log
  }

  updateEntry() {
    const updatedEntryObj = this.editLogForm.value;

    this.runLogs = [...this.runLogs, { ...updatedEntryObj }];

    // close modalService
    this.activeModal.close(this.runLogs);
  }
}
