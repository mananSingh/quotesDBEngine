var tags = ["Action", "Behavior", "Character", "Contemplation", "Desire",
	"Destiny", "Devotion", "Divinity", "Duty", "Ego", "Faith", "Fate",
	"Gayatri", "God", "Happiness", "Health", "Human", "Ideal", "Karma",
	"Knowledge", "Life", "Love", "Mind", "Personality", "Relations", 
	"Religion", "Self", "Service", "Soul", "Spirituality",
	"Success", "Thoughts", "Time", "Truth", "Willpower", "Wisdom", "World",
	"Worship"];

function allThoughtsGen(){
	var output="";
	$.each(tags, function(index, value){
		$.getJSON('json/'+value+'.json', function(data){
			$.each(data,function(key, val){
				output+='<p class="allThoughts4Search">';
				output+=val.content+'<br><em>('+val.header+')</em>';
				output+='</p>';
			});
		$('#allThoughts').html(output);
		});	
	});	
}

function browseThoughtsGen(){
	var output="";
	$.each(tags, function(index, value){
		output+='<a href="#thoughts" class="ui-btn ui-shadow ui-btn-inline ui-corner-all" onclick="showThoughts(';
		output+= "'"+value+"'";
		output+= ')">';
		output+=value;
		output+='</a>';		
	});	
	$('#cloud').html(output);
}

function showThoughts(tag){
	var output="";
	//the following request might seem redundant, and it is.
	//it's the result of careless design. take care, next time.
	$.getJSON('json/'+tag+'.json', function(data){
		var output="<h2>";
		output+=tag;
		output+="</h2>";
		$.each(data, function(key, val){
			output+='<p class="allThoughts4Search">';
			output+=val.content;
			output+='</p>';
			if(key!=data.length-1)
				output+='<hr>';
		});
		$('#thought-list').html(output);
	});
}
function randThoughtGen(){
	var output="";
	//// Returns a random integer between min (included)
	// and max (included)
	// Using Math.round() will give you a non-uniform distribution!
	//Math.floor(Math.random() * (max - min + 1)) + min;
	var randomTagNo = Math.floor(Math.random()*(tags.length-1-0+1)+0);
	$.getJSON('json/'+tags[randomTagNo]+'.json', function(data){			
		var randomThoughtNo = Math.floor(Math.random()*(data.length-1-0+1)+0);
		output=data[randomThoughtNo].content;
		$('#randomQuote').html(output);
	});
}

//$(document).ready(function(){
//
//});
