import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { AlertController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})

export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    public navCtrl: NavController, 
    private navParams: NavParams,
    private alertCtrl: AlertController) {};

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }
  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad QuotesPage');
  // this.quoteGroup = this.navParams.data;
  // Add Elvis operator (?) in the template to use this approach
  //}

  onAddToFavourite(selectedQuote: Quote){
    const alert=this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you wnat ot add the quote?',
      buttons:[
        {
          text: 'Yes, go ahead',
          handler:()=>{
            console.log('Ok');
          }
        },
        {
          text: 'No, I changed my mind!',
          handler:()=>{
            console.log('Cancelled!');
          }
        }
      ]
    });

    alert.present();
  }
}
