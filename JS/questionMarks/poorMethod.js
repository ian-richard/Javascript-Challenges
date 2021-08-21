function QuestionsMarks(str) { 
    console.log('str: '+ str);

    let remove_a_z = str.trim()
     remove_a_z = remove_a_z.replace(/[a-z]/gi, '');
     console.log('remove_a_z: '+ remove_a_z)

     const regex = /[0-9]/g;
     let found = remove_a_z.match(regex);
     console.log('found: ' + found);

    

  }
     
  // keep this function call here 
  let readLine = 'acc?7??sSs?3rr1??????5'
  let readLine__false = 'acc?8??sss?3rr1??????5'
  console.log(QuestionsMarks(readLine));

  //Hard 19.08.21