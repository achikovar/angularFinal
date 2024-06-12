import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  constructor() {}
  countDaysBetweenDates(checkInDate: string, checkOutDate: string): number {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const startDate: any = new Date(checkInDate);
    const endDate: any = new Date(checkOutDate);

    const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay));
    return diffDays;
  }
}
