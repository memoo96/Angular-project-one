import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigService } from './config.service';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';



const appRoutes: Routes= [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path:'Home',component:HeaderComponent},
  {path:'About',component:IntroComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'Services',component:ContentComponent},
  {path:'Testimonial',component:TestimonialComponent},
  {path:'Clients',component:ClientsComponent},
  {path:'Pricing',component:PricingComponent},
  {path:'Blog',component:BlogComponent},
  {path:'Article/:id',component:ArticleComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    ClientsComponent,
    FooterComponent,
    PricingComponent,
    HeaderComponent,
    SocialComponent,
    NavbarComponent,
    BlogComponent,
    PostComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
