const {readFile, writeFile, readFileSync} =  require('fs');

readFile('./content/first.txt','utf8',(err, result)=>{
  if(err){
    console.log(err);
    return
  }
  const first =  result;
  readFile('./content/second.txt','utf8',(err, result)=>{
    if(err){
      console.log(err);
      return
    }
    const second =  result;

    writeFile(
      './content/result-async.txt',
      `Here is the results: ${first}, ${second}`,
      (error,result)=>{
        if(error){
          console.log(error);
          return
        } 
       const createfiled =  readFileSync('./content/result-async.txt', 'utf8')
       console.log('createfiled:',createfiled)
      }
    )
  })
})



