import { Component, OnInit, Input } from '@angular/core';
import { CustomerId } from 'src/app/models/customer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})

export class ConfirmModalComponent implements OnInit {
  @Input()
  data!: CustomerId;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
