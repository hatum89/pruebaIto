import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserComponent } from './info-user.component';

describe('CreateComponent', () => {
  let component: InfoUserComponent;
  let fixture: ComponentFixture<InfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should info-user', () => {
    expect(component).toBeTruthy();
  });
});
