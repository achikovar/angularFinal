import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  NgModule,
  OnInit,
} from '@angular/core';
import { FormsModule, NgControl, NgForm } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { CountService } from '../../services/count.service';
@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  pricePerNight: number = 0;
  constructor(
    private clientService: ClientService,
    private el: ElementRef<HTMLInputElement>,
    private countService: CountService
  ) {}

  accomodation = ['single', 'double', 'A frame', 'standart'];
  rooms: any;
  reservedDates: string[] = [];
  selectedDate: string = '';
  days: any;

  getRooms() {
    this.clientService.getRooms().subscribe((data: any) => {
      this.rooms = data[19];
      // console.log(data);

      if (this.rooms && this.rooms.bookedDates) {
        this.rooms.bookedDates.forEach((room: any) => {
          if (room.date) {
            const datePart = room.date.substring(0, 10);
            this.reservedDates.push(datePart);
          }
        });
      }
      this.updateCheckOutMinDate();
      this.updatePricePerNight();
    });
  }
  //
  updatePricePerNight() {
    if (this.rooms && this.rooms.pricePerNight) {
      this.pricePerNight = this.rooms.pricePerNight;
    }
  }
  //

  ngOnInit(): void {
    this.getRooms();
    // this.pricePerNight = this.rooms.pricePerNight;
    // console.log(this.reservedDates);
    // console.log(this.rooms.pricePerNight);
  }

  heroData = {
    roomID: 20,
    checkInDate: '',
    checkOutDate: '',
    totalPrice: null,
    isConfirmed: true,
    customerName: '',
    customerId: 'string',
    customerPhone: '',
  };

  onSubmit(): void {
    if (this.heroData.checkInDate) {
      this.heroData.checkInDate = this.formatDate(
        new Date(this.heroData.checkInDate)
      );
    }
    if (this.heroData.checkOutDate) {
      this.heroData.checkOutDate = this.formatDate(
        new Date(this.heroData.checkOutDate)
      );
    }
    this.heroData.totalPrice = this.totalPrice;
    this.clientService.bookingPost(this.heroData).subscribe(() => {});
  }

  minCheckOutDate: string | undefined;

  updateCheckOutMinDate() {
    if (this.heroData.checkInDate) {
      const checkIn = new Date(this.heroData.checkInDate);
      checkIn.setDate(checkIn.getDate() + 1);
      const minCheckOutDate = checkIn.toISOString().split('T')[0];
      this.minCheckOutDate = this.reservedDates.includes(minCheckOutDate)
        ? ''
        : minCheckOutDate;
    }
  }

  private formatDate(date: Date): string {
    const year = date.getUTCFullYear();
    const month = this.padZero(date.getUTCMonth() + 1);
    const day = this.padZero(date.getUTCDate());
    const hours = this.padZero(date.getUTCHours() + 6);
    const minutes = this.padZero(date.getUTCMinutes());
    const seconds = this.padZero(date.getUTCSeconds());
    const milliseconds = this.padZero(date.getUTCMilliseconds());
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  isDateDisabled(date: string): boolean {
    const disabled = this.reservedDates.includes(date);
    return disabled;
  }
  totalPrice: any;
  onDateChange(event: any): void {
    this.days = this.countService.countDaysBetweenDates(
      this.heroData.checkInDate,
      this.heroData.checkOutDate
    );
    this.totalPrice = this.days * this.pricePerNight;

    const selectedDate = event.target.value;
    if (selectedDate && this.isDateDisabled(selectedDate)) {
      alert('This date is disabled.');
      this.heroData.checkInDate = '';
      this.heroData.checkOutDate = '';
    }
  }

  //
}
