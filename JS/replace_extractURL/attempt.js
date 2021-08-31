//better solution
function domainName_v2(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };

//test examples

  console.log(domainName_v2("http://google.com")) // "google"
  console.log(domainName_v2("http://google.co.jp")) // "google"
  console.log(domainName_v2("https://123.net")) //"123"
  console.log(domainName_v2("https://hyphen-site.org")) // "hyphen-site"
  console.log(domainName_v2("http://codewars.com")) // "codewars"
  console.log(domainName_v2("www.xakep.ru")) // "xakep"
  console.log(domainName_v2("https://youtube.com")) //"youtube"
  console.log(domainName_v2("http://www.codewars.com/kata/")) // "codewars"
  console.log(domainName_v2("icann.org")) // "icann"
  

//work in progress

function domainName(url){
    var slashwww = /(\/www.)/
    var slash = /(\/)/;
    var dot = /\./;
    
    if (slashwww.test(url)){
      return url.slice(url.indexOf('//www.')+6,url.indexOf(dot))
    }
    if (slash.test(url)){
      return url.slice(url.search(slash)+2,url.search(/\./))
    }
      else {
        return url.slice(url.indexOf('.')+1,url.indexOf(dot)-2)
      }

  }