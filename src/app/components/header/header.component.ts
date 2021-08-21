import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  title: string = 'Books Store';
  showForm: boolean = true;
  subscription: Subscription;

  constructor(private formService: FormService, private router: Router) {
    this.subscription = this.formService
      .onToggle()
      .subscribe((value: any) => (this.showForm = value));
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  toggleForm() {
    this.formService.toggleForm();
  }
  hasRoute(route: string) {
    console.log(this.router.url)
    return this.router.url===route;
  }
}
