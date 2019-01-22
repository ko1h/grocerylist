//Front end

$(document).ready(function() {
  var groceries = [];
  $("#add").click(function(event) {
    event.preventDefault();

    var inputs = ["input1"];

    inputs.forEach(function(input){
      var grocery = $("input#" + input).val();
      console.log("this is working")
      groceries.push(grocery);
      console.log(groceries);
    });
  });

  $("#list").click(function(event) {
    event.preventDefault();
    var sortedGroceries = groceries.sort();
    console.log(sortedGroceries);


    var upperCaseGroceries = sortedGroceries.map(function(grocery) {
      return grocery.toUpperCase();
      console.log(upperCaseGroceries);
    })
    upperCaseGroceries.forEach(function(grocery) {
      $("ul").append("<li>" + grocery + "</li>");
    });
  });

  $("#clear").click(function(event){
    $("li").remove();
    groceries = [];
  })
    //   for(var i = 0; i < upperCaseGroceries.length; i++) {
    //     $("li").remove();
    //     for(var n = 0; n < upperCaseGroceries.length; n++) {
    //       $("ul").append("<li>" + upperCaseGroceries[i] + "</li>");
    //     }
    //   }
    // });
});
