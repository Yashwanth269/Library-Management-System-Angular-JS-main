import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

declare var razorPay: any;
@Component({
  selector: 'app-update-user',
  templateUrl: './book-order.component.html',
  styleUrls: ['./book-order.component.scss']
})

export class BookOrderComponent {
  msg: any = "Not Yet Started";

  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "rzp_test_xaKAiszSfHigUk",
    "amount": "200",
    "name": "test",
    "description": "Web Development",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success", {
        detail: response,
        bubbles: true,
        cancelable: true
      }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  // constructor(private _service: UserService, private _router: Router) { }
  // ngOnInit(): void {
  // }
  pay() {
    this.paymentId = '';
    this.error = '';
    this.options.amount = "200";
    this.options.prefill.name = "test";
    this.options.prefill.email = "test@gmail.com";
    this.options.prefill.contact = "9089898099";
    console.log(this.options);
    var rzp1 = new razorPay(this.options);
    rzp1.open();

    rzp1.on('payment.failed', function (response: any) {
      // this.msg = "Payment";
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    }
    );
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.msg = "Success";
  }
}