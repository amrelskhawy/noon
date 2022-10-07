import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFavOffersComponent } from './container-fav-offers.component';

describe('ContainerFavOffersComponent', () => {
  let component: ContainerFavOffersComponent;
  let fixture: ComponentFixture<ContainerFavOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerFavOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerFavOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
