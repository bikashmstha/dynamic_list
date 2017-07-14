import {Component, Inject, Injector, Input, ReflectiveInjector} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <dynamic-list [data]="data"></dynamic-list>
  `
})
export class AppComponent {
  // can be fetched from the backend
  data = [
    { type: 'text', data: {text: 'some text'} },
    { type: 'image', data: {href: 'assets/logo.png'} },
    { type: 'text', data: {text: 'some other text'} }
  ];
}

@Component({
  selector: 'dynamic-list',
  template: `
    <div *ngFor="let d of data">
      <div *ngComponentOutlet="componentFor(d); injector: injectorFor(d)"></div>
    </div>
  `
})
export class DynamicList {
  @Input() data: any[];

  mapping = { 'text': TextCmp, 'image': ImageCmp };

  constructor(private injector: Injector) {}

  componentFor(d: any) {
    return this.mapping[d.type];
  }

  injectorFor(d: any) {
    return ReflectiveInjector.resolveAndCreate([
      { provide: 'data', useValue: d.data}
    ], this.injector);
  }
}

@Component({
  selector: 'text',
  template: `Text "{{data.text}}"`
})
export class TextCmp {
  constructor(@Inject('data') private data: {text: string}) {}
}

@Component({
  selector: 'image',
  template: `image <img [src]="data.href">`
})
export class ImageCmp {
  constructor(@Inject('data') private data: {href: string}) {}
}
