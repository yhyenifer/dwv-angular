import { NgModule } from '@angular/core';
import { DwvModule } from './dwv/dwv.module';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ AppComponent, LoginComponent ],
  imports: [ DwvModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), CommonModule       ],
  bootstrap: [AppComponent]
})

export class AppModule {}
