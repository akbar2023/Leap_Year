import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('Should say : is a leap year', () => {
    expect(AppComponent.leapYear(2020)).toBe('2020 is a leap year');
  });

  it('should say 2021 is not a leap year', () => {
    expect(AppComponent.leapYear(2021)).toBe('2021 is a common year');
  });

  it('should say 2001 is a common year', () => {
    expect(AppComponent.leapYear(2001)).toBe('2001 is a common year');
  });

  it('should say 1996 is a leap year', () => {
    expect(AppComponent.leapYear(1996)).toBe('1996 is a leap year');
  });

  it('should say 2000 is a leap year', () => {
    expect(AppComponent.leapYear(2000)).toBe('2000 is a leap year');
  });

  it('should say 1900 is a common year', () => {
    expect(AppComponent.leapYear(1900)).toBe('1900 is a common year');
  });

  it('should say 1998 is a common year', () => {
    expect(AppComponent.leapYear(1998)).toBe('1998 is a common year');
  });

  it('should say 1999 is a common year', () => {
    expect(AppComponent.leapYear(1999)).toBe('1999 is a common year');
  });

  it('should say 0 is a leap year', () => {
    expect(AppComponent.leapYear(0)).toBe('0 is a leap year');
  });

  it('should say 600 is a common year', () => {
    expect(AppComponent.leapYear(600)).toBe('600 is a common year');
  });
});
