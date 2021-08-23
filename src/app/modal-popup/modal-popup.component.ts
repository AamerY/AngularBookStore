import { Component, OnInit, Input,Type } from '@angular/core';
import { NgbActiveModal ,NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css'],
})
export class ModalPopupComponent  {
 
  constructor(
    public modal: NgbActiveModal
  ) {}

 
}
