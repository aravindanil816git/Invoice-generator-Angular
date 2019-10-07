import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDraftsComponent } from './view-drafts.component';

describe('ViewDraftsComponent', () => {
  let component: ViewDraftsComponent;
  let fixture: ComponentFixture<ViewDraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
