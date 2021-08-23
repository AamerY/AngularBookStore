import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-popup-show',
  templateUrl: './modal-popup-show.component.html',
  styleUrls: ['./modal-popup-show.component.css'],
})
export class ModalPopupShowComponent implements OnInit {
  @Input() my_modal_title: any;
  @Input() my_modal_content: any;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {}
}
