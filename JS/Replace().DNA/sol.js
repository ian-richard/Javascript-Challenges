function DNAStrand__og(dna){
    return dna.replace(/A/g, 't')
              .replace(/T/g, 'a')
              .replace(/C/g, 'g')
              .replace(/G/g, 'c')
              .toUpperCase();
    }

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

    console.log(DNAStrand("ATTGC")) //"TAACG","String ATTGC is"
    console.log(DNAStrand("GTAT")) //"CATA","String GTAT is"