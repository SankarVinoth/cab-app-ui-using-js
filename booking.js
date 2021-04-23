function booking() {       // function calculate Total Amount
    //alert("hello");
    let cabtype = document.getElementById("cabtype").value;     // getting type of cab selected 
    //alert(cabtype);
      let kilometers = document.getElementById("kilometers").value;          //getting kilometers entered
      //alert(kilometers);
      let seniorcitizen =document.querySelector("#Seniorcitizen");         // getting senior citizen status
      //alert( seniorcitizen.checked);
	   let price=0;
	   switch(cabtype) {
      case"Micro": 
          price=10;
         // document.getElementById("rate").innerHTML="The rate is"+price;
		      break;
      
	  case"Mini": 
		     price=15;
		     break;
		  
	  case"Prime": 
          price=20;
          break;
        }
        
     let BasePrice=(price*kilometers);      // calculating base price (km*price)
     document.getElementById("JourneyTime").value;   // getting journey time
      let journeyTime=document.getElementById("JourneyTime").value;     //storing the value in seperate variable
      let  peaktime=journeyTime.substring(0,2);        // getting hour from journey time
      if(peaktime >=16 && peaktime<=18) {       // peak Hour calculation
          alert("Its peak hour");
          BasePrice=(BasePrice+(1.25*BasePrice)/100);
      }
      else {
        BasePrice=price*kilometers;
      }
      
      if(Seniorcitizen.checked) {                                    // checking whether the checkbox is clicked or not
        alert("You are senior citizen and eligible for 50% discount");
        BasePrice= (BasePrice/2);
      }
      let gstAmount=gst(BasePrice);                          // calling gst function to calculate gst
      
	 // document.getElementById("price");
	  //document.getElementById("gst");
      let totalwithGST= (BasePrice+gstAmount);                         // total fare with gst
      let totalAmounttoPaid=Math.round(totalwithGST);
      alert( "Your total fare inclusive of gst"+ " "+totalAmounttoPaid);
      
     
	   }
	      function gst(BasePrice) {
	    	  let gst=Math.round(7/100*BasePrice);
	    	  return gst;
	      }
		
         
    
  
