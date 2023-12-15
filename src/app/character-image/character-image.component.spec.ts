import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterImageComponent } from './character-image.component';

describe('CharacterImageComponent', () => {
  let component: CharacterImageComponent;
  let fixture: ComponentFixture<CharacterImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterImageComponent]
    });
    fixture = TestBed.createComponent(CharacterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
