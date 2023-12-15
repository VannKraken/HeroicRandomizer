import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterimagecontainerComponent } from './characterimagecontainer.component';

describe('CharacterimagecontainerComponent', () => {
  let component: CharacterimagecontainerComponent;
  let fixture: ComponentFixture<CharacterimagecontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterimagecontainerComponent]
    });
    fixture = TestBed.createComponent(CharacterimagecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
