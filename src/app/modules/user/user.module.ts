import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/user-home/user-home.component';
import { UserHomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { BookOrderComponent } from './components/book-order/book-order.component';




@NgModule({
  declarations: [HomeComponent,ContactComponent,HeaderComponent,FooterComponent,UserHomeComponent,BookListComponent,ProfileComponent,ChangePasswordComponent,
    UpdateUserComponent,BookOrderComponent],
  imports: [
    CommonModule,UserRoutingModule,FormsModule, ReactiveFormsModule,


  ]
})
export class UserModule { }