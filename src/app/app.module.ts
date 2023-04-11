import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KmPipePipe } from './km-pipe.pipe';

@NgModule({
  declarations: [ 
    AppComponent, KmPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
