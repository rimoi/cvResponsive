// document ici correpond au notre fichier index.html si elle est prete(ready) exécute moi alors ce code
$(function(){
    /* Animation au moment de défilage d'un block vers en autre */
    $('.navbar a, footer a').click(function(event){
      event.preventDefault();
      var hash = this.hash;
      $('body').animate({
          scrollTop: $(hash).offset().top
      }, 900, function(){
          window.location.hash = hash;
      })
    });
       
});
    
    
