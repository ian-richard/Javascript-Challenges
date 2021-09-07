function DNAStrand(dna){
    return dna.replace(/A/g, 't')
              .replace(/T/g, 'a')
              .replace(/C/g, 'g')
              .replace(/G/g, 'c')
              .toUpperCase();
    }

    console.log(DNAStrand("ATTGC")) //"TAACG","String ATTGC is"
    console.log(DNAStrand("GTAT")) //"CATA","String GTAT is"