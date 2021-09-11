function longest_og(s1, s2) {
    //take the two strings and create a set of unique characters using new Set, then sort them (a-z) 
    //join them back into a string
    return [...new Set(s1 + s2)].sort().join("")
  }

  //fractionally shorter 
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

  console.log(longest("aretheyhere", "yestheyarehere") === "aehrsty")
  console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding") === "abcdefghilnoprstu")
  console.log(longest("inmanylanguages", "theresapairoffunctions") === "acefghilmnoprstuy")