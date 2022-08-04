$('#addList').on("click",function(){
$('ol').append(`<ul>${$('#title').val()} - ${$('#rating').val()}  <button type=button>X</button></ul>`)
})

$("ol").on("click","button",function(){
    $(this).parent().remove()
}
)

// $("ol").on("click","ul",function(){
// const itemList=$('ol').children('ul').get();
// itemList.sort(function(a,b){   //This sort function was found online
//     const compA = $(a).text().toUpperCase();  //cycles through and compares all values
//     const compB = $(b).text().toUpperCase();
//     return (compA<compB) ? -1:(compA > compB) ? 1 : 0
// })
//  $.each(itemList,function(idx, idm) {itemList.append(this);});
// }) 
