function QuestionsMarks(str) { 

    let sen = str.trim()
     sen = sen.replace(/[a-zA-Z ]/g, '');
     console.log(sen)

     const regex = /[0-9]/g;
     const found = sen.match(regex);
     console.log(found);
  
  }
     
  // keep this function call here 
  let readLine = 'acc?7??sss?3rr1??????5'
  console.log(QuestionsMarks(readLine));