import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengenalanPage } from './pengenalan.page';

describe('PengenalanPage', () => {
  let component: PengenalanPage;
  let fixture: ComponentFixture<PengenalanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengenalanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengenalanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
