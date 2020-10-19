function isTouching(Obj){

    if(mrect.x-Obj.x<mrect.width/2+Obj.width/2
        && Obj.x-mrect.x<mrect.width/2+Obj.width/2 && 
        mrect.y-Obj.y<mrect.height/2+Obj.height/2 && 
        Obj.y-mrect.y<mrect.height/2+Obj.height/2){
            return true
      }
      else{
        
        return false;
      }



}