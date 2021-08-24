import { Component, OnInit, Input, Type } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-delete-modal-popup',
  templateUrl: './delete-modal-popup.component.html',
  styleUrls: ['./delete-modal-popup.component.css'],
})
export class ModalPopupComponent {
  @Input() my_modal_title: any;
  @Input() my_modal_content: any;
  constructor(public modal: NgbActiveModal) {}
}
