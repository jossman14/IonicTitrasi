import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UjiPage } from './uji.page';

describe('UjiPage', () => {
  let component: UjiPage;
  let fixture: ComponentFixture<UjiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UjiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UjiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
