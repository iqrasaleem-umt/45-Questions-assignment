//Q40
function make_album(artistname1:String,title1:String ,tracks:String){
    var Album={artistname:artistname1,
                title:title1,
                track:tracks
            }
            if(tracks!==""){Album.track=tracks};
         return Album;
    }

   var album1=  make_album("Def Leppard","Hysteria","31")
  console.log(album1)
  var album2=  make_album("AC/DC","Flick of the Switch","")
  console.log(album2)
  var album3=  make_album("Michael Jackson","Black & White","")
  console.log(album3)



