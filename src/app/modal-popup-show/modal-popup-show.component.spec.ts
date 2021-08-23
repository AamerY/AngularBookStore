import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopupShowComponent } from './modal-popup-show.component';

describe('ModalPopupShowComponent', () => {
  let component: ModalPopupShowComponent;
  let fixture: ComponentFixture<ModalPopupShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPopupShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPopupShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
