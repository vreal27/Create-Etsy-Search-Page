 const container = document.querySelector("#whiskey")
 var whiskeyTemplate = ""

 items.results.forEach(function(item){
 	console.log(item)

// 	whiskeyTemplate += `
	
// 		<div class="whiskeybox">
// 					<img src="${unescape(item.Images[0].url_fullxfull)}" class="wimage">
// 					<img src="assets/heart.png" class="heart">
// 					<a href="${item.url}" class="title">${item.title}</a>
// 					<a href="${item.url}" class="shopname">${item.shop.shop_name}</a>
// 					<a href="${item.url}" class="price">${item.price}</a>

// 		</div>

// `


})

 container.innerHTML = whiskeyTemplate


