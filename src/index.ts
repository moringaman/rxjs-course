import { Observable } from 'rxjs';
// import  "./styles.css";

const someObservable$ = new Observable<string>(subscriber => {
  console.log('observable executed')
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 1000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
  // subscriber.complete();
});
console.log("subscription 1 starts")
const subscription = someObservable$.subscribe(value => console.log('Subscription 1 ', value));

setTimeout(() => {
console.log("subscription 2 starts")
const subscription = someObservable$.subscribe(value => console.log('Subscription 2 ', value));
}, 1000);