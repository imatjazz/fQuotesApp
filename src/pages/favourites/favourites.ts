import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes: Quote[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private quotesService: QuotesService) {}

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavouritesQuotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

}
