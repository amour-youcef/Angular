import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverComponent } from './trouver.component';

describe('TrouverComponent', () => {
  let component: TrouverComponent;
  let fixture: ComponentFixture<TrouverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrouverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
