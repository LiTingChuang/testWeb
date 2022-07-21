import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberId } from 'src/app/models/member';

@Component({
  selector: 'app-aa070312-confirm-modal',
  templateUrl: './aa070312-confirm-modal.component.html',
  styleUrls: ['./aa070312-confirm-modal.component.css']
})
export class Aa070312ConfirmModalComponent implements OnInit {
  @Input()
  data!: MemberId;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
