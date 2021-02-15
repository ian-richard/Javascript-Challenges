

function longestWord(sen) { 

   var sen = sen.trim()
   sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');
   let longest = ''

   var arr = sen.split(" ").forEach(word => {
    if(word.length > longest.length) longest = word;
    })

    return sen
}

    const sentence = 'Find the longest word in this String! Sponsored by Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch coding club in Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch!'

    console.log(longestWord(sentence));