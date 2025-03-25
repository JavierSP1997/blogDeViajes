import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCategoriaComponent } from './selector-categoria.component';

describe('SelectorCategoriaComponent', () => {
  let component: SelectorCategoriaComponent;
  let fixture: ComponentFixture<SelectorCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
