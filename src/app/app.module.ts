import { NgModule } from '@angular/core';
import { DwvModule } from './dwv/dwv.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy } from '@angular/common';
import {ServiceService} from './services/service.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ AppComponent, LoginComponent ],
  imports: [ DwvModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), CommonModule,
  FormsModule,HttpClientModule, AppRoutingModule      ],
  providers: [ServiceService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
