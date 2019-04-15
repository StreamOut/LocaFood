function getByBarrecode(barrecode){
	jQuery.ajax({
		type : 'GET',
		url : 'https://fr.openfoodfacts.org/api/v0/produit/'+barrecode,
		success : function(result) {
			console.log("getByBarrecode", result);
		},
		error : function() {
			console.log('oops !');
		}
	});
}
