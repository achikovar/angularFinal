import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisableDates]',
  standalone: true,
})
export class DisableDatesDirective implements OnChanges {
  @Input() reservedDates: string[] = [];

  constructor(private ngControl: NgControl) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('reservedDates' in changes) {
      this.setInactiveDates();
    }
  }

  private setInactiveDates(): void {
    const { control } = this.ngControl;
    if (control) {
      const originalValidator = control.validator;
      control.setValidators((control: any) => {
        const date = control.value;
        if (this.reservedDates.includes(date)) {
          return { inactiveDate: true };
        }
        if (originalValidator) {
          return originalValidator(control);
        }
        return null;
      });
    }
  }
}
