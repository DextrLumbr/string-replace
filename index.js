const fs = require('fs');
const request = require('request');
const dictionary = require('./dictionary.js')
const Tabletop = require('tabletop');


// Uncomment the // lines to see the multiple array output
Tabletop.init({
  key: 'https://docs.google.com/spreadsheets/d/1xc0Xa06Q2DVYfmPtnDFwSkTKKfboo-YrBlv8xRNJEwc/edit?usp=sharing',
  callback: (data, tabletop, err) => {
    var item = data[Math.floor(Math.random() * data.length)];
    console.log(item.copy);
    var text = item.copy;
    // var termsFound = [];
    var replacedText = '';
    var commonTermsLength = dictionary.commonTerms.length;
    // console.log(commonTermsLength)
    for(var i=0; i<commonTermsLength; i++) {
      if (text.includes(dictionary.commonTerms[i])) {
         replacedText = text.replace(dictionary.commonTerms[i], dictionary.hashtags[dictionary.commonTerms[i]])
        // termsFound.push(dictionary.hashtags[dictionary.commonTerms[i]])
        // console.log(termsFound)
      }
    }
    console.log(replacedText)
  },
  simpleSheet: true
});
