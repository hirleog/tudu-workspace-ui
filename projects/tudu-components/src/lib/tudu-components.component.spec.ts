import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuduComponentsComponent } from './tudu-components.component';

describe('TuduComponentsComponent', () => {
  let component: TuduComponentsComponent;
  let fixture: ComponentFixture<TuduComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuduComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuduComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
