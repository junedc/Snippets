$(function () {

  Parsley.on('form:submit', function() {
   
  });

  
  var validIfAnySel = '[data-validate-if-any]';
    $(validIfAnySel).blur(function(e) {
    var any=false;
    $(validIfAnySel).each(function(i) {
      var v = $(this).val();
          if (v!='') {
            any=true;
            return false;
          }  
    });
    if (any) {
      $(validIfAnySel).attr('data-parsley-validate-if-empty', '');            
    }
    else {
      $(validIfAnySel).removeAttr('data-parsley-validate-if-empty');
    }
    
    
    
  });
  
  
  $('.demo-form').parsley({
    inputs: Parsley.options.inputs + ",.validate"
  });
});