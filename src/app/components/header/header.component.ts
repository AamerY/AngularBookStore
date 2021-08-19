import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormService } from '../../services/form.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  title: string = 'Books Store';
  showForm: boolean = true;
  subscription: Subscription;

  constructor(private formService: FormService) {
    this.subscription = this.formService
      .onToggle()
      .subscribe((value:any) => (this.showForm = value));
  }

  
  
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

 toggleForm() {
   this.formService.toggleForm();
 }


 
}