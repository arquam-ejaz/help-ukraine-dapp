import { Donor, messages, raised } from './model';
import { u128 } from "near-sdk-as";

const MESSAGE_LIMIT = 10;

export function addDonor(text: string): void {

  const message = new Donor(text);

  messages.push(message);

  if (raised.contains('raised'))
    raised.set('raised', u128.add(raised.getSome('raised'), message.donated));
  else
    raised.set('raised', u128.add(u128.from('0'), message.donated));

}

export function getDonors(): Donor[] {
  const numMessages = min(MESSAGE_LIMIT, messages.length);
  const startIndex = messages.length - numMessages;
  const result = new Array<Donor>(numMessages);
  for (let i = 0; i < numMessages; i++) {
    result[i] = messages[i + startIndex];
  }
  return result;
}

export function getAmountRaised(): u128 {
  if (raised.contains('raised'))
    return raised.getSome('raised');
  else
    return u128.from('0');

}
