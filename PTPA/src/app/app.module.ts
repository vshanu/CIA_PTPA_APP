import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { TrainingComponentComponent } from './components/training-component/training-component.component';
import { PlayerComponentComponent } from './components/player-component/player-component.component';
import { AnalysisComponentComponent } from './components/analysis-component/analysis-component.component';
import { SearchPipePipe } from './Pipes/PlayerComponent/SearchPipe/search-pipe.pipe';
import { RatingsComponent } from './components/player-component/ratings/ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    TrainingComponentComponent,
    PlayerComponentComponent,
    AnalysisComponentComponent,
    SearchPipePipe,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
