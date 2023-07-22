import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("signupForm") signupForm: NgForm;
  subscriptions: string[] = ["Basic", "Advanced", "Pro"];
  defaultSubscription: string = "Advanced";
  user: { email: string, subscription: string, password: string } = { email: "", subscription: "", password: "" };
  submitted: boolean = false;

  onSubmit(): void {
    const { email, subscription, password } = this.signupForm.value;
    this.user = { email, subscription, password };
    this.submitted = true;
    this.signupForm.reset();
  }
}
