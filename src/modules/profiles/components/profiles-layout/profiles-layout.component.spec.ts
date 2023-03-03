import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesLayoutComponent } from './profiles-layout.component';

describe('ProfilesLayoutComponent', () => {
  let component: ProfilesLayoutComponent;
  let fixture: ComponentFixture<ProfilesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
