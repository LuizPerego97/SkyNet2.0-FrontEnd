import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAvaliacaoComponent } from './form-add-avaliacao.component';

describe('FormAddAvaliacaoComponent', () => {
  let component: FormAddAvaliacaoComponent;
  let fixture: ComponentFixture<FormAddAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddAvaliacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
