$("button").click(function() {
    var age = $(".age").val();
    var color = $(".color").val();
    
    $(".a").hide();
    
    if (color === "yellow" && age < 18) {
        $(".message").text("Naruto");
        $(".image img").attr("src", "https://static1.comicvine.com/uploads/original/11128/111285622/5188087-5909935278-MHqs9.png");
    } else if(color === "yellow" && age >= 18 ) {
        $(".message").text("Minato");
        $(".image img").attr("src", "https://static.comicvine.com/uploads/original/11117/111173561/5135377-6219456820-minat.png");
    } else if(color === "red" && age < 18 ) {
        $(".message").text("Sasuke");
        $(".image img").attr("src", "https://i.pinimg.com/originals/5b/58/4c/5b584c79548c92b186de28ef2feed62a.jpg");
    } else if(color === "red" && age >= 18 ) {
        $(".message").text("Madara");
        $(".image img").attr("src", "https://vignette.wikia.nocookie.net/its-always-veggie-bone-lebowski-party-knuckles/images/2/24/Madara_SSJ_10.png/revision/latest?cb=20171218123228");


    }

    //}else{
    //    $(".message").text("incorrect");
    //}
});