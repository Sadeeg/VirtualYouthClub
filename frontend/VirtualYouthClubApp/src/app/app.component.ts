import { Component, AfterViewInit } from '@angular/core';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { StateService } from './service/state.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  trylogin = false;
  open = false;

  constructor(private oauthService: OAuthService,private stateService:StateService) {
    this.oauthService.configure(this.getConfig());

    this.oauthService.tryLogin().then(x =>{
      this.trylogin = true;
    });
    this.oauthService.setupAutomaticSilentRefresh();


    // Load Discovery Document and then try to login the user
  }

  getConfig():AuthConfig{
    const config = new AuthConfig();
    config.loginUrl = 'https://auth.youthclubstage.de/auth/realms/ycspublic/protocol/openid-connect/auth';
    config.postLogoutRedirectUri = window.location.origin;
    config.redirectUri = window.location.origin+'/loginsuccess';
    config.clientId = 'virtualrooms';
    config.scope = 'profile';
    config.tokenEndpoint = 'https://auth.youthclubstage.de/auth/realms/ycspublic/protocol/openid-connect/token';
    config.useHttpBasicAuth = true;
    config.userinfoEndpoint = 'https://auth.youthclubstage.de/auth/realms/ycspublic/protocol/openid-connect/userinfo';
    config.responseType = 'code';
    config.showDebugInformation = true;
    config.logoutUrl = 'https://auth.youthclubstage.de/auth/realms/ycspublic/protocol/openid-connect/logout';
    config.skipIssuerCheck = true;
    return config;
  }


  ngOnInit(): void {
  }


}

   
