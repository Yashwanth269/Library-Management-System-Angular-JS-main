import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/admin-home/admin-home.component';
import { AdminHomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [HomeComponent, ContactComponent, HeaderComponent, FooterComponent, AddBookComponent, BookListComponent,AdminHomeComponent],
  imports: [
    CommonModule, AdminRoutingModule, FormsModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
