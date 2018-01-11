import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { storeFreeze } from 'ngrx-store-freeze';

import { CustomSerializer, effects, reducers } from './store';

export const metaReducers: MetaReducer<any>[] = [storeFreeze];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    RouterModule.forRoot([]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class AppModule {}
