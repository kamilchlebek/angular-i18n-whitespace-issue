import { async, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { By } from '@angular/platform-browser'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));


  it('should show days suffix if label type is days', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.type = 'days';
    component.value = 10;
    fixture.detectChanges();

    const span = fixture.debugElement.query(By.css('span.test'));

    console.log('span.nativeElement', span.nativeElement, '|')
    console.log('span.nativeElement.textContent.trim()', span.nativeElement.textContent.trim(), '|')

    expect(span.nativeElement.textContent.trim()).toEqual('10 days');
  })
});
