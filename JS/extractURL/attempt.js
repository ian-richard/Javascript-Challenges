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