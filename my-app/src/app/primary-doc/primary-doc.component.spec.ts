import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDocComponent } from './primary-doc.component';

describe('PrimaryDocComponent', () => {
  let component: PrimaryDocComponent;
  let fixture: ComponentFixture<PrimaryDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
