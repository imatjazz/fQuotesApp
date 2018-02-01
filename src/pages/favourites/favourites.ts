import { QuotePage } from './../quote/quote';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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
    private quotesService: QuotesService,
    private modalCtrl: ModalController) {}

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavouritesQuotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  onViewQuote(quote:Quote){
    const modal = this.modalCtrl.create(QuotePage);
    modal.present();
  }

}
