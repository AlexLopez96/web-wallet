import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportKeystoreComponent } from './import-keystore.component';

describe('ImportKeystoreComponent', () => {
  let component: ImportKeystoreComponent;
  let fixture: ComponentFixture<ImportKeystoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportKeystoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportKeystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
