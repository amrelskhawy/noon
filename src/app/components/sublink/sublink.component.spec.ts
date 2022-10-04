/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SublinkComponent } from './sublink.component';

describe('SublinkComponent', () => {
  let component: SublinkComponent;
  let fixture: ComponentFixture<SublinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
