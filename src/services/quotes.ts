import { Quote } from './../data/quote.interface';

export class QuotesService{
    private favouriteQuote:Quote[] = [];

    addQuoteToFavourites(quote:Quote){
        this.favouriteQuote.push(quote);
        console.log(this.favouriteQuote);
    }

    removeQuotefromFavourites(quote:Quote){
        const position = this.favouriteQuote.findIndex((quoteEl:Quote)=>{
            return quoteEl.id== quote.id;
        });
        this.favouriteQuote.splice(position,1);
    }

    getFavouritesQuotes(){
        return this.favouriteQuote.slice();
    }
}        