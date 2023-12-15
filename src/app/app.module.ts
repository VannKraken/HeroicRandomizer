import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { SiteContainerComponent } from './site-container/site-container.component';
import { HomeComponent } from './home/home.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { CharacterimagecontainerComponent } from './characterimagecontainer/characterimagecontainer.component';
import { CharacterImageComponent } from './character-image/character-image.component';
import { CharacterDetailsContainerComponent } from './character-details-container/character-details-container.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    SiteContainerComponent,
    HomeComponent,
    ContentContainerComponent,
    CharacterdetailsComponent,
    CharacterimagecontainerComponent,
    CharacterImageComponent,
    CharacterDetailsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
