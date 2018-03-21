import { Component } from '@angular/core';
import { Cat, AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';
  cats: Cat[];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.appService.getAllCats().subscribe(data => {
      this.cats = data['cats'];
    })
  }
}
