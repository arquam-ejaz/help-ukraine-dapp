import { context, u128, PersistentVector, PersistentMap} from "near-sdk-as";


@nearBindgen
export class Donor {
  premium: boolean;
  sender: string;
  donated: u128;
  constructor(public text: string) {
    this.premium = context.attachedDeposit >= u128.from('10000000000000000000000');
    this.sender = context.sender;
    this.donated= context.attachedDeposit;
  }
}


export const messages = new PersistentVector<Donor>("m");

export const raised = new PersistentMap<string, u128>("pmap");