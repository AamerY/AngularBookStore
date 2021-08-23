import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css'],
})
export class ModalPopupComponent implements OnInit {
  @Input() my_modal_title: any;
  @Input() my_modal_content: any;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
