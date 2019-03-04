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
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthService } from './Services/LoginAuth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './Services/LoginAuth/auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    TrainingComponentComponent,
    PlayerComponentComponent,
    AnalysisComponentComponent,
    SearchPipePipe,
    RatingsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"player", component:PlayerComponentComponent, canActivate: [AuthGuard]},
      {path:"home", component:HomeComponentComponent, canActivate: [AuthGuard]},
      {path:"training", component:TrainingComponentComponent, canActivate: [AuthGuard]},
      {path:"analysis", component:AnalysisComponentComponent, canActivate: [AuthGuard]},
      {path:"login", component:LoginComponentComponent},
      {path:"", redirectTo:"home", pathMatch:"full"},
      {path:"**", redirectTo:"home"},
    ]),
    HttpClientModule
  ],
  providers: [AuthService, CookieService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
