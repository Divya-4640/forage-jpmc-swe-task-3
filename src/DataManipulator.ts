import { ServerRespond } from './DataStreamer';
// import { v4 as uuidv4 } from 'uuid';

export interface Row {
  price_abc: number,
  price_def: number,
  ratio: number,
  timestamp: Date,
  upper_bound: number,
  lower_bound: number,
  trigger_alert: number | undefined
  // price_abc : number,
  // price_def : number,
  // // stock: string,
  // // top_ask_price: number,
  // ratio: number,
  // timestamp: Date,
  // // top_bid_price: number,
  // upper_bound: number,
  // lower_bound: number,
  // trigger_alert: number | undefined
}


export class DataManipulator {
  static generateRow(serverRespond: ServerRespond[]) {
    const priceABC : number = (serverRespond[0].top_ask.price + serverRespond[0].top_bid.price) / 2;
    const priceDEF : number = (serverRespond[1].top_ask.price + serverRespond[1].top_bid.price) / 2;
    const ratio: number = priceABC / priceDEF;
    const upperBound: number = 1 + 0.05;
    const lowerBound: number = 1 - 0.05;
    // const temp = (serverRespond[0].timestamp > serverRespond[1].timestamp ? serverRespond[0].timestamp: serverRespond[1].timestamp);
    // const timestamp = temp instanceof Date ? temp.toISOString() : '';

return {
  price_abc: priceABC.toString(),
  price_def: priceDEF.toString(), 
  ratio:ratio.toString(),
  timestamp : '',
  upper_bound: upperBound.toString(), 
  lower_bound: lowerBound.toString(),
  trigger_alert: (ratio > upperBound || ratio < lowerBound) ? ratio.toString() : '', 
}
   // return serverResponds.map((el: any) => {
    //   return {
    //     stock: el.stock,
    //     top_ask_price: el.top_ask && el.top_ask.price || 0,
    //     timestamp: el.timestamp,
    //     price_abc : el.price_abc,
    //     top_bid_price:  el.top_bid_price,
    //     upper_bound:  el.upper_bound,
    //     lower_bound:  el.lower_bound,
    //     trigger_alert:  el.trigger_alert,
    //   };
    // })
  }
}
