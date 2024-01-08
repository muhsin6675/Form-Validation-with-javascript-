function validation(){
    var gender=document.getElementsByName('gender');
      if(document.getElementById('first').value===''){
    
        document.getElementById('errors').innerHTML='name is required !'
      }
      
      else if(document.getElementById('email').value===''){
        document.getElementById('errors').innerHTML='email is required !'
      }
      else if(document.getElementById('mobile no').value===''){
        document.getElementById('errors').innerHTML='mobile no is required !'
      }
      else if(document.getElementById('website').value===''){
        document.getElementById('errors').innerHTML='valid address required !'
      }
  
      else if((gender[0].checked==false) && (gender[1].checked==false) && (gender[2].checked==false)){
          document.getElementById('errors').innerHTML= 'gender is required !'
        }
  
  
      else if(check()==false){
          document.getElementById('errors').innerHTML='please select !'
        }
        
    
    else{
        document.getElementById('form-validation').submit()
    }
    
    
    }
  
    function check()
    {
      var chk = document.getElementsByName('terms[]');
      var len = chk.length
  
      for(i=0;i<len;i++)
      {
          if(chk[i].checked)
          return true;
      }
      return false;
  
    }
  
  
  
  
  
  
  