import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [
    StopWatchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [StopWatchComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(StopWatchComponent, { injector: this.injector});
    customElements.define('app-stop-watch', element);
  }
}
