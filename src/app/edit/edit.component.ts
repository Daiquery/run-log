import { Component, Input, OnInit } from "@angular/core";
import {
  NgbModal,
  NgbActiveModal,
  ModalDismissReasons
} from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RUNS, Run } from "../mock-logs";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent {
  @Input() id: string;

  runLogs = RUNS;

  currentLog: Run;
  modalInstance;

  editLogForm: FormGroup;

  closeResult = "";

  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    console.log(this.currentLog);
  }

  ngOnInit() {
    this.currentLog = this.runLogs.find(log => log.id === this.id);

    this.editLogForm = this.fb.group({
      id: [this.currentLog.id],
      date: [this.currentLog.date],
      distance: [this.currentLog.distance],
      time: [this.currentLog.time]
    });
  }

  open(content) {
    // debugger;
    // open the modal
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

    // capture form data

    // grab the current logCollection
    // find log by id
    // update the entity
    // return updated log
  }

  createLog() {
    // open the modal
    // capture form data
    // push form data into logCollection
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
