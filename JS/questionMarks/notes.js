remove_a_z = remove_a_z.replace(/[a-zA-Z ]/g, '');
// g flag is to search globalling, i.e. not just at the first instance
// add 'i' to 'g' to make 'gi' to it to be case-insensitive 
// https://www.w3schools.com/jsref/jsref_regexp_g.asp 

const toNum = parseInt(found);