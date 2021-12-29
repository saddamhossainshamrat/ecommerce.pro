function validateAmount(amount, pid){
 $.ajaxSetup({
     headers: {
         "X-CSRF-TOKEN": $('meta[name= "csrf_token"]').attr('content')
     }
 });
}
