import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownPaneComponent } from './markdown-pane.component';

describe('MarkdownPaneComponent', () => {
  let component: MarkdownPaneComponent;
  let fixture: ComponentFixture<MarkdownPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
