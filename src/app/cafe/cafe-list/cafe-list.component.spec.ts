/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import {HttpClientModule} from "@angular/common/http";
import {Cafe} from "../cafe";

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    for(let i = 0; i < 3; i++) {
      const cafes = new Cafe(
        faker.datatype.number(),
        faker.name.fullName(),
        faker.lorem.words(1),
        faker.address.country(),
        faker.lorem.words(1),
        faker.datatype.number(),
        faker.image.imageUrl()
      );
      component.cafes.push(cafes);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should have 1 thead > tr elements', () => {
    console.log(debug);
    expect(debug.queryAll(By.css('thead > tr'))).toHaveSize(1)
  });

  it('should have 10 tbody > tr elements', () => {
    console.log(debug);
    expect(debug.queryAll(By.css('tbody > tr'))).toHaveSize(3)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
