//can be rapped in $(document).ready( function()) or without 
/*$(document).ready( function()
{
	$( ".table" ).load( "academictorrent.html" );
});*/

// var j = $.getJSON( 'test.json', function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<td id='" + key + "'>" + val + "</td>" );
//   });

//   $( "<td/>", {
//     "class": "table",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });


// $(document).ready(function(){
// 	$.getJSON('/Users/manijalilian/Desktop/AcademicTorrent/external.json', function(data){
// 		console.log(data.name)
// 	});
// });


$.getJSON('http://at01.cs.umb.edu:6801/collections', function(data){
	console.log(data);
}).done(function( data ) {
	var table_obj = $('table');
	$.each( data.Collections, function( name, size ) {
		var table_row = $('<tr>' );
		var table_cell1 = $('<td>', {html: this.name,});
		var table_cell2 = $('<td>', {html: this.size});
		var checkbox = $('<input type="checkbox" value="remember-me"></input>');

		table_row.append(checkbox);
		table_row.append(table_cell1);
		table_row.append(table_cell2);
		table_obj.append(table_row);
		console.log(this.name+ ' '+this.size);
	});
});

// $.getJSON('collections.json', function(data){
// 	console.log(data);
// }).done(function( data ) {
// 	var table_obj = $('table');
// 	$.each( data.Collections, function( name, size ) {
// 		var table_row = $('<tr>' );
// 		var table_row_close = $('</tr>' );
// 		var table_cell1 = $('<td>', {html: this.name,});
// 		var table_cell2 = $('<td>', {html: this.size});
// 		table_obj.append(table_row);
// 		table_row.append(table_cell1);
// 		table_row.append(table_cell2);
// 		table_obj.append(table_row_close);
// 		console.log(this.name+ ' '+this.size);
// 	});
// });
