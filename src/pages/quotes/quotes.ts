import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

//@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    public navCtrl: NavController, 
    private navParams: NavParams) {};

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }
  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad QuotesPage');
  // this.quoteGroup = this.navParams.data;
  // Add Elvis operator (?) in the template to use this approach
  //}

}
