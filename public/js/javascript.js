$(document).ready(function(){
     var elems = $(".vocab");
    if (elems.length) {
      var keep = Math.floor(Math.random() * elems.length);
      for (var i = 0; i < elems.length; ++i) {
        if (i !== keep) {
          $(elems[i]).hide();
        }
      }
    }
    });
    
     $(document).ready(function(){
     var elems = $(".background");
    if (elems.length) {
      var keep = Math.floor(Math.random() * elems.length);
      for (var i = 0; i < elems.length; ++i) {
        if (i !== keep) {
          $(elems[i]).hide();
        }
      }
    }
    });
    
    