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
  newLogForm: FormGroup;
  currentLog: Run;
  newLog: Run;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {}

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
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          const filteredArray = this.runLogs.filter(
            log => log.id !== this.currentLog.id
          );

          this.runLogs = [...filteredArray, this.editLogForm.value]
            .sort(function(a, b) {
              return -(a.id - b.id || a.name.localeCompare(b.name));
            })
            .reverse();

          // debugger;
        },
        reason => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

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
  }

  removeEntry(id) {
    this.runLogs = [...this.runLogs.filter(item => item.id !== id)];
  }

  createEntry(createForm, newLog) {
    const lastItem = this.runLogs[this.runLogs.length - 1];

    let newId = new String(parseInt(lastItem.id) + 1);

    this.newLogForm = this.fb.group({
      id: newId,
      date: "",
      distance: "",
      time: ""
    });

    // open the modal
    this.modalService
      .open(createForm, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => 
        {
          this.runLogs = [...this.runLogs, this.newLogForm.value]
            .sort(function(a, b) {
              return -(a.id - b.id || a.name.localeCompare(b.name));
            })
            .reverse();
        });      

}
}
