import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    aapiKey: "AIzaSyAKrwlSypc9uSqH5fVZhqfmc2t-jQGKVoA",
    authDomain: "catchoftheday-b6194.firebaseapp.com",
    databaseURL: "https://catchoftheday-b6194.firebaseio.com",
}
 
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());


export default base;

