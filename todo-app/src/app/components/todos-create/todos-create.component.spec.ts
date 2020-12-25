import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCreateComponent } from './todos-create.component';

describe('TodosCreateComponent', () => {
  let component: TodosCreateComponent;
  let fixture: ComponentFixture<TodosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
