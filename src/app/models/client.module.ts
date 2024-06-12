import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, Injectable],
})
export class Client {
  // id: number;
  roomID: number;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  isConfirmed: boolean;
  customerName: string;
  customerId: string;
  customerPhone: string;

  constructor(data: any = {}) {
    // this.id = data.id || null;
    this.roomID = data.roomID || null;
    this.checkInDate = data.checkInDate || '';
    this.checkOutDate = data.checkOutDate || '';
    this.totalPrice = data.totalPrice || 0;
    this.isConfirmed = data.isConfirmed || false;
    this.customerName = data.customerName || '';
    this.customerId = data.customerId || '';
    this.customerPhone = data.customerPhone || '';
  }
}
