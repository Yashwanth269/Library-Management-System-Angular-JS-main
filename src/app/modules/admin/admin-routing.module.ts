import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './components/admin-home/admin-home.component';
import { AdminHomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,

    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'addbook', component: AddBookComponent },
      { path: 'books', component: BookListComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }