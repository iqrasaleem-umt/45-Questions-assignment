//q42
function make_great(magiciname:any) 
{
     // console.log(City1 + 'is in' +Country1 +'\n')
     
     const GreatMag1: string[] = [];
     for(var i=0;i<magiciname.length-1;i++){
       GreatMag1.push('Great Magician '  +magiciname[i]);
    }
  return GreatMag1
}
function show_magicians(magiciname:any){
    for(var i=0;i<magiciname.length-1;i++){
     // console.log('Magician Name: ' +magiciname[i]+'\n')
     console.log(magiciname[i]+'\n')
    }
  }
 let magicinam1e=['Gryffindor','Harry Potter','Hermione Granger','Fred Weasley','Lord Voldemort']
 let GreatMag=make_great(magiciname)
   show_magicians(magiciname)
   show_magicians(GreatMag)