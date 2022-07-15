import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPrivateComponent } from './import-private.component';

describe('ImportPrivateComponent', () => {
  let component: ImportPrivateComponent;
  let fixture: ComponentFixture<ImportPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportPrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
