import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/pages/main/main.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { RouletteComponent } from './layout/components/roulette/roulette.component';
import { ChipComponent } from './layout/components/chip/chip.component';
import { BetItemComponent } from './layout/components/bet-item/bet-item.component';
import { BetCounterComponent } from './layout/components/bet-counter/bet-counter.component';
import { CounterComponent } from './layout/components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NotFoundComponent,
    RouletteComponent,
    ChipComponent,
    BetItemComponent,
    BetCounterComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
