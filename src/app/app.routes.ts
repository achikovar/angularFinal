import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { ContacUsComponent } from './pages/contac-us/contac-us.component';
import { homedir } from 'os';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { BookComponent } from './pages/book/book.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactUs', component: ContacUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'book', component: BookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
