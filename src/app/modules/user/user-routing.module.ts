import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/user-home/user-home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { BookOrderComponent } from './components/book-order/book-order.component';



const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'books', component: BookListComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'update', component: UpdateUserComponent },
      { path: 'changepassword', component: ChangePasswordComponent },
      { path: 'bookorder', component: BookOrderComponent },
      { path: '', redirectTo: '/user/home', pathMatch: 'full' },
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }