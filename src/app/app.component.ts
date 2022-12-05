import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
  // styles:[`
  //   h3{
  //     color: dodgerblue;
  //   }
  // `]
})
export class AppComponent {
  username = '';

  showSecret = false;

  log=[];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
    if(this.log.length >=5){
      this.log.length = this.log.length -1;
      this.log.push(this.log.length + 1 +' '+ new Date());
    }

    // this.log.push(new Date());
  }
}
