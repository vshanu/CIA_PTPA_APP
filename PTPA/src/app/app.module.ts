import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { TrainingComponentComponent } from './components/training-component/training-component.component';
import { PlayerComponentComponent } from './components/player-component/player-component.component';
import { AnalysisComponentComponent } from './components/analysis-component/analysis-component.component';
import { SearchPipePipe } from './Pipes/PlayerComponent/SearchPipe/search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    TrainingComponentComponent,
    PlayerComponentComponent,
    AnalysisComponentComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
