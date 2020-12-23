import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/pages/main/main.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { RouletteComponent } from './layout/components/roulette/roulette.component';
import { ChipComponent } from './layout/components/bet-item/chip/chip.component';
import { BetItemComponent } from './layout/components/bet-item/bet-item.component';
import { BetCounterComponent } from './layout/components/bet-counter/bet-counter.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { BetTableComponent } from './layout/components/bet-table/bet-table.component';
import { BetTableItemComponent } from './layout/components/bet-table/bet-table-item/bet-table-item.component';


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
    HeaderComponent,
    FooterComponent,
    BetTableComponent,
    BetTableItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
