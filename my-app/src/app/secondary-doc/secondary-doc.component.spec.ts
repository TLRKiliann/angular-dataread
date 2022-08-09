import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDocComponent } from './secondary-doc.component';

describe('SecondaryDocComponent', () => {
  let component: SecondaryDocComponent;
  let fixture: ComponentFixture<SecondaryDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
