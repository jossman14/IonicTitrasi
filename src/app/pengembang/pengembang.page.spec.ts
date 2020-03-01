import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengembangPage } from './pengembang.page';

describe('PengembangPage', () => {
  let component: PengembangPage;
  let fixture: ComponentFixture<PengembangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengembangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengembangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
