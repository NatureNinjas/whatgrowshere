/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 var flikr_key="---";
 var dataJSON='';
 var otitle;
 var searchResult;
 String.prototype.capitalize = function() {
	if(this.length > 0)
		return this.charAt(0).toUpperCase() + this.slice(1);
	else return "";
 }
 /**Process data**/
 
 $( document ).ready(function() {
	$( "#advanceSearch" ).click(function() {
	  $( ".advance-group" ).toggle( "slow", function() {
		// Animation complete.
	  });
	});
	//$( "#two" ).on( "pageload", function( event ) { hide_waiting(); } );
	$.ajax({
		type: "GET",
		url: "data/statefloracatalogdata.txt",
		dataType: "text",
		success: function(data) {
			//alert(data);
			processData(data);
		}
	});
	
});

function filter(){
	
	var name = $('#name').val();
	var state = $('#state').val();
	var height1 = $('#height1').val();
	if(isNaN(height1))
		height1 = "";
	var height2 = $('#height2').val();
	if(isNaN(height2))
		height2 = "";
	var spread1 = $('#spread1').val();
	if(isNaN(spread1))
		spread1 = "";
	var spread2 = $('#spread2').val();
	if(isNaN(spread2))
		spread2 = "";
	var rain = $('#rain').val();
	if(isNaN(rain))
		rain = "";
	var color = $('#color').val();
	var time = $('#time').val();
	var location = $('#location').val();
	var conservation = $('#conservation').val();
	var type = $('#type').val();
	var genus = $('#genus').val();
	var tube = $('#tubeColour').val();
	var texture = $('#soilTexture').val();
	var ph = $('#soilph').val();
	var frost = $('#frost').val();
	
	show_waiting();
	//result
	var result = search(name, state, height1, height2, spread1, spread2, rain, color, time, location, conservation, type, genus, tube, texture, ph, frost);
	searchResult=result;
	//display result
	var str = '';
	$('#searchResultTitle').html('Found ' + result.length + ' result(s)');
	for(var i in result){
		if(result[i].Botanical_name != undefined && result[i].Botanical_name != ""){
			if(searchResult[i]["Genus"] == undefined)
				str += '<li><a href="javascript: display_detail('+i+');">'+result[i].Botanical_name.capitalize()+'</a></li>';
			else str += '<li><a href="javascript: display_detail('+i+');">'+result[i].Genus.capitalize()+" - "+result[i].Botanical_name+'</a></li>';
		}
		/*for (var property in result[i]) {
			if(result[i][property] == "")
				str += "<td>&nbsp;</td>";
			else str += "<td>" + result[i][property] + "</td>";
		}
		str += "</tr>";
		*/
		//str += result[i].Common_name+"<br/>";
	}
	//$("#two").page('destroy').page();
	//$('#listview').html("");
	$('#listview').html(str);
	
	$.mobile.changePage( "#two", { transition: "fadeIn", changeHash: false });
	
	$('#listview').listview('refresh');
	hide_waiting();
	
	//alert(str);
	//$('#view').empty();
	//$('#view').append(str);
}
// show waiting
function show_waiting(){
	$("#loading").show();
}

// hide waiting
function hide_waiting(){
	setTimeout(function() {$("#loading").hide(); }, 3000); 
	
}


function display_detail(i){
	
	var html="";
	//alert(i);
	//alert(JSON.stringify(searchResult[i]));
	var idx = 0;
	
	show_waiting();
	if(searchResult[i]["Genus"] == undefined)
		$("#botanic-detail-title").text(searchResult[i]["Botanical_name"].capitalize());
	else $("#botanic-detail-title").text(searchResult[i]["Genus"].capitalize()+" - "+searchResult[i]["Botanical_name"]);
	var html2 = '';
	for (var property in searchResult[i]) {
		if(searchResult[i][property] != ""){
			if(property == 'Botanical_name')
				html += '<div class="item-title">Species</div>';
			else if(property == 'Tube_colour'){
				html2 += '<div class="item-title">'+otitle[idx]+'</div>';
			} else if(get_region2(property)){
				html += '<div class="item-title cregion">'+get_region(otitle[idx]).toLowerCase().capitalize()+'</div>';
			} else html += '<div class="item-title">'+otitle[idx]+'</div>';
			
			if(property == 'States'){
				html += '<div class="item-detail">'+get_state(searchResult[i][property])+'</div>';
				html += '<div class="item-title">Regions of SA where the plant occurs naturally</div>';
			} else if(property == 'Flower_colour'){
				html += '<div class="item-detail">'+get_flower_colour(searchResult[i][property])+'</div>';
			} else if(property == 'Flower'){
				html += '<div class="item-detail">'+get_flower_time(searchResult[i][property])+'</div>';
			} else if(property == 'Tube_colour'){
				html2 += '<div class="item-detail">'+get_tube_colour(searchResult[i][property])+'</div>';
			} else if(property == 'Soil_texture'){
				html += '<div class="item-detail">'+get_soil_texture(searchResult[i][property])+'</div>';
			} else if(property == 'Soil_pH'){
				html += '<div class="item-detail">'+get_soil_ph(searchResult[i][property])+'</div>';
			} else if(property == 'Frost'){
				html += '<div class="item-detail">'+get_frost(searchResult[i][property])+'</div>';
				//move tube_colour after frost
				html += html2;
			} else html += '<div class="item-detail">'+get_conservation(property, searchResult[i][property])+'</div>';
			
			//if(property == 'region'){
			//	html += '<div class="item-detail">'+searchResult[i][property]+'</div>';
			//}
			//if(property == 'conservation'){
			//	html += '<div class="item-detail">'+searchResult[i][property]+'</div>';
			//}
		}
		idx++;
	}
	
	$("#itemdetail").html(html);
	// get more detail in internet availaibe
	//get_flickr_imgs(searchResult[i].Botanical_name);
	
	// check if internet is available
	/****
	var networkState = navigator.connection.type;
	//alert(networkState);
	if(networkState!=Connection.NONE){
	****/
	var networkState = navigator.connection.type;
	//alert(networkState);
	if(networkState!=Connection.NONE){
		var t = new Date().getTime();
		$("#itemdetail").append('<div id="external-photo">Loading photo...</div><div id="external-bird">Loading more information...</div>');
		var url="http://whatgrowshere.com.au/api/index.php?bname="+searchResult[i].Botanical_name+"&template=images.binomial,wikipedia&t="+t;
		//var url="http://whatgrowshere.com.au/api/index.php?bname="+searchResult[i].Botanical_name+"&maxresults=4&template=images";
		var jqxhr = $.ajax({
                   type : 'GET',
                   contentType : 'text',
                   url : url,
				   crossDomain : true
                   }).done(function( data ) {
						//alert(data);
						var f_html;
						if(data!=""){
							f_html=data;
						}
						
						$("#external-photo").html(f_html);
						// process phonegap link
						$('#external-photo a').each(function(){
							var url = $(this).attr("href");   
							var newHref="javascript: window.open('"+url+"', '_blank', 'location=yes');";
							$(this).attr("href",newHref);
						});
						
					});
		url="http://whatgrowshere.com.au/api/index.php?bname="+searchResult[i].Botanical_name+"&template=ala.birds";
		jqxhr = $.ajax({
                   type : 'GET',
                   contentType : 'text',
                   url : url,
				   crossDomain : true
                   }).done(function( data ) {
						//alert(data);
						var f_html;
						if(data!=""){
							f_html=data;
						}
						
						$("#external-bird").html(f_html);
						// process phonegap link
						$('#external-bird a').each(function(){
							var url = $(this).attr("href");   
							var newHref="javascript: window.open('"+url+"', '_blank', 'location=yes');";
							$(this).attr("href",newHref);
						});
						
					});
	}
	
	
                   
                  
               
	//alert(url); return;
	/*$.get( url, function( data ) {
		
		var f_html;
		if(data!=""){
			f_html="<h3>Photos</h3>"+data;
		}
		alert(data);
		//$("#photo").html(f_html);
		
	}, "text"); */
	$.mobile.changePage( "#three", { transition: "fadeIn", changeHash: false });
	hide_waiting();
	//alert(html);
}
function search(name, state, height1, height2, spread1, spread2, rain, color, time, location, conservation, type, genus, tube, texture, ph, frost){
	var result = [];
	var nameflag = false;
	var stateflag = false;
	var heightflag = false;
	var spreadflag = false;
	var rainflag = false;
	var colorflag = false;
	var timeflag = false;
	var locationflag = false;
	var conservationflag = false;
	var typeflag = false;
	var genusflag = false;
	var tubeflag = false;
	var textureflag = false;
	var phflag = false;
	var frostflag = false;
	//process search data
	$.each(JSON.parse(dataJSON), function(idx, obj) {
		//check name
		if(name == '')
			nameflag = true;
		else if(checkPossibleName(obj.Botanical_name, obj.Common_name, obj.Genus, name))
			nameflag = true;
		else nameflag = false;
		//check state
		if(state == '')
			stateflag = true;
		else if(checkState(obj.States, state))
			stateflag = true;
		else stateflag = false;
		//check height
		if(height1 == '' && height2 == '')
			heightflag = true;
		else if(checkHeight(obj.Height, height1, height2))
			heightflag = true;
		else heightflag = false;
		//check spread
		if(spread2 == '' && spread2 == '')
			spreadflag = true;
		else if(checkSpread(obj.Spread, spread1, spread2))
			spreadflag = true;
		else spreadflag = false;
		//check rain
		if(rain == '')
			rainflag = true;
		else if(checkRain(obj.Rain, rain))
			rainflag = true;
		else rainflag = false;
		//check flower color 
		if(color == '')
			colorflag = true;
		else if(checkColor(obj.Flower_colour, color))
			colorflag = true;
		else colorflag = false;
		//check flower time
		if(time == '')
			timeflag = true;
		else if(checkTime(obj.Flower, time))
			timeflag = true;
		else timeflag = false
		//check location
		if(location == '')
			locationflag = true;
		else {
			if(location == "NW" && obj.NW != "")
				locationflag = true;
			else if(location == "LE" && obj.LE != "")
				locationflag = true;
			else if(location == "NU" && obj.NU != "")
				locationflag = true;
			else if(location == "GT" && obj.GT != "")
				locationflag = true;
			else if(location == "FR" && obj.FR != "")
				locationflag = true;
			else if(location == "EA" && obj.EA != "")
				locationflag = true;
			else if(location == "EP" && obj.EP != "")
				locationflag = true;
			else if(location == "NL" && obj.NL != "")
				locationflag = true;
			else if(location == "MU" && obj.MU != "")
				locationflag = true;
			else if(location == "YP" && obj.YP != "")
				locationflag = true;
			else if(location == "SL" && obj.SL != "")
				locationflag = true;
			else if(location == "KI" && obj.KI != "")
				locationflag = true;
			else if(location == "SE" && obj.SE != "")
				locationflag = true;
			else locationflag = false;	
		}
		//check conservation
		if(conservation == '')
			conservationflag = true;
		else {
			if(location == ''){
				if(obj.NW == conservation || obj.LE == conservation || obj.NU == conservation || obj.GT == conservation || obj.FR == conservation || obj.EA == conservation || obj.EP == conservation || obj.NL == conservation || obj.MU == conservation || obj.YP == conservation || obj.SL == conservation || obj.KI == conservation || obj.SE == conservation)
					conservationflag = true;
				else conservationflag = false;	
			} else {
				if(location == 'LE' && obj.LE == conservation)
					conservationflag = true;
				else if(location == "NU" && obj.NU == conservation)
					conservationflag = true;
				else if(location == "GT" && obj.GT == conservation)
					conservationflag = true;
				else if(location == "FR" && obj.FR == conservation)
					conservationflag = true;
				else if(location == "EA" && obj.EA == conservation)
					conservationflag = true;
				else if(location == "EP" && obj.EP == conservation)
					conservationflag = true;
				else if(location == "NL" && obj.NL == conservation)
					conservationflag = true;
				else if(location == "MU" && obj.MU == conservation)
					conservationflag = true;
				else if(location == "YP" && obj.YP == conservation)
					conservationflag = true;
				else if(location == "SL" && obj.SL == conservation)
					conservationflag = true;
				else if(location == "KI" && obj.KI == conservation)
					conservationflag = true;
				else if(location == "SE" && obj.SE == conservation)
					conservationflag = true;
				else conservationflag = false;	
			}
		}
		//check type
		if(type == '')
			typeflag = true;
		else if(obj.Type != undefined && obj.Type.toUpperCase() == type.toUpperCase())
			typeflag = true;
		else typeflag = false;
		//check genus
		if(genus == '')
			genusflag = true;
		else if(obj.Genus != undefined && obj.Genus.toUpperCase() == genus.toUpperCase())
			genusflag = true;
		else genusflag = false;
		//check tube
		if(tube == '')
			tubeflag = true;
		else if(obj.Tube_colour != undefined && obj.Tube_colour.toUpperCase() == tube.toUpperCase())
			tubeflag = true;
		else tubeflag = false;
		//check texture
		if(texture == '')
			textureflag = true;
		else if(checkTexture(obj.Soil_texture, texture))
			textureflag = true;
		else textureflag = false;
		//check ph
		if(ph == '')
			phflag = true;
		else if(obj.Soil_pH != undefined && obj.Soil_pH.toUpperCase() == ph.toUpperCase())
			phflag = true;
		else phflag = false;
		//check frost
		if(frost == '')
			frostflag = true;
		else if(obj.Frost != undefined && obj.Frost.toUpperCase() == frost.toUpperCase())
			frostflag = true;
		else frostflag = false;
		//check all flag state and push data
		if(nameflag && stateflag && heightflag && spreadflag && rainflag && colorflag && timeflag && typeflag && genusflag && tubeflag && textureflag && phflag && frostflag && 	locationflag && conservationflag)
			result.push(obj);
	});
	return result;
}
///check value
function checkPossibleName(heap1, heap2, heap3, needle){
	if(heap1 == undefined && heap2 == undefined && heap3 == undefined)
		return false;
	//full search
	//partial search
	//break down the pattern into words
	needle = needle.toUpperCase();
	needle = needle.replace("*", "");
	var needles = needle.split(" ");
	//add pattern to array
	needles.push(needle);
	for(var i in needles){
		if(heap1 != undefined){
			if(heap1.toUpperCase().indexOf(needles[i]) != -1)
				return true;
		}
		if(heap2 != undefined){
			if(heap2.toUpperCase().indexOf(needles[i]) != -1)
				return true;
		}
		if(heap3 != undefined){
			if(heap3.toUpperCase().indexOf(needles[i]) != -1)
				return true;
		}
	}
	//search with wildcast *, question-mark ?
	
	return false;
}
function checkState(heap, needle){
	if(heap == undefined)
		return false;
	var arr = heap.split(",");
	for(var i in arr){
		if(arr[i].toUpperCase() == needle.toUpperCase())
			return true;
	}
	return false;
}
function checkHeight(heap, min, max){
	if(heap == undefined)
		return false;
	var arr = heap.split("-");
	var minflag = false;
	var maxflag = false;
	if(arr.length == 2){
		if(min == '')
			minflag = true;
		else if(min >= arr[0])
			minflag = true;
		else minflag = false;
		if(max == '') 
			maxflag = true;
		else if(max <= arr[1])
			maxflag = true;
		else maxflag = false;
		if(minflag && maxflag)
			return true;
	} 
	return false;
}
function checkSpread(heap, min, max){
	if(heap == undefined)
		return false;
	var arr = heap.split("-");
	var minflag = false;
	var maxflag = false;
	if(arr.length == 2){
		if(min == '')
			minflag = true;
		else if(min >= arr[0])
			minflag = true;
		else minflag = false;
		if(max == '')
			maxflag = true;
		else if(max <= arr[1])
			maxflag = true;
		else maxflag = false;
		if(minflag && maxflag)
			return true;
	}
	return false;
}
function checkColor(heap, needle){
	if(heap == undefined)
		return false;
	var arr = heap.split(",");
	for(var i in arr){
		if(arr[i].toUpperCase() == needle.toUpperCase())
			return true;
	}
	var arr2 = heap.split("/");
	for(var j in arr2){
		if(arr2[j].toUpperCase() == needle.toUpperCase())
			return true;
	}
	return false;
}
function checkTime(heap, needle){
	if(heap == undefined)
		return false;
	var arr = heap.split(",");
	for(var i in arr){
		if(arr[i].trim().toUpperCase() == needle.toUpperCase())
			return true;
	}
	return false;
}
function checkTexture(heap, needle){
	if(heap == undefined)
		return false;
	var arr = heap.split(",");
	for(var i in arr){
		if(arr[i].toUpperCase() == needle.toUpperCase())
			return true;
	}
	return false;
}
function checkRain(heap, needle){
	if(heap == undefined)
		return false;
	if(heap >= needle)
		return true;
	return false;
}
function get_state_old(state){
	state = state.toUpperCase();
	var states = state.split(",");
	var r = '';
	for(var i in states){	
		if (states[i].trim() == "Q")
			r += "Queensland, ";
		else if(states[i].trim() == "N")
			r += "New South Wales, ";
		else if(states[i].trim() == "V")
			r += "Victoria, ";
		else if(states[i].trim() == "T")
			r += "Tasmania, ";
		else if(states[i].trim() == "W")
			r += "Western Australia, ";
		else if(states[i].trim() == "NT")
			r += "Northern Territory, ";
		else if(states[i].trim() == "SA")
			r += "South Australia, ";
		else r += states[i] + ", ";
	}
	if(r != ''){
		return r.substr(0, r.length - 2);
	}
	return r;
}
function get_state(state){
	state = state.toUpperCase();
	var states = state.split(",");
	var r = '';
	for(var i in states){	
		if (states[i].trim() == "Q")
			r += "<img src='img/icons/qld.png' alt='Queensland' width='30px' height='30px' />";
		else if(states[i].trim() == "N")
			r += "<img src='img/icons/nsw.png' alt='New South Wales' width='30px' height='30px' />";
		else if(states[i].trim() == "V")
			r += "<img src='img/icons/vic.png' alt='Victoria' width='30px' height='30px' />";
		else if(states[i].trim() == "T")
			r += "<img src='img/icons/tas.png' alt='Tasmania' width='30px' height='30px' />";
		else if(states[i].trim() == "W")
			r += "<img src='img/icons/wa.png' alt='Western Australia' width='30px' height='30px' />";
		else if(states[i].trim() == "NT")
			r += "<img src='img/icons/nt.png' alt='Northern Territory' width='30px' height='30px' />";
		else if(states[i].trim() == "SA")
			r += "<img src='img/icons/sa.png' alt='South Australia' width='30px' height='30px' />";
		else r += states[i];
	}
	return r;
}
function get_region(region){
	if (region == "NW")
		return "North Western";
	else if(region=="LE")
		return "Lake Eyre";
	else if(region == "NU")
		return "Nullarbor";
	else if(region == "GT")
		return "Gardner – Torrens";
	else if(region == "FR")
		return "Flinders Ranges";
	else if(region == "EA")
		return "Eastern";
	else if(region == "EP")
		return "Eyre Peninsula";
	else if(region == "NL")
		return "Northern Lofty";
	else if(region == "MU")
		return "Murray lands";
	else if(region == "YP")
		return "Yorke Peninsula";
	else if(region == "SL")
		return "Southern Lofty";
	else if(region == "KI")
		return "Kangaroo Island";
	else if(region == "SE")
		return "South East";
	return region;
}
function get_region2(property){
	if (property == "NW" || property=="LE" || property == "NU" || property == "GT" || property == "FR" || property == "EA" || property == "EP" || property == "NL" || property == "MU" || property == "YP" || property == "SL" || property == "KI" || property == "SE")
		return true;
	return false;
}
function get_conservation(property, value){
	if (property == "NW" || property=="LE" || property == "NU" || property == "GT" || property == "FR" || property == "EA" || property == "EP" || property == "NL" || property == "MU" || property == "YP" || property == "SL" || property == "KI" || property == "SE")
		return get_conservation2(value);
	else return value;
}
function get_conservation2(conservation){
	if (conservation == "I")
		return "<img src='img/icons/wgh_pp_conservation_indigenous.png' class='item-icon' /> " +"Indigenous";
	else if(conservation == "E")
		return "<img src='img/icons/wgh_pp_conservation_endangered.png' class='item-icon' /> " +"Endangered";
	else if(conservation == "T")
		return "<img src='img/icons/wgh_pp_conservation_threatened.png' class='item-icon' /> " +"Threatened";
	else if(conservation == "R")
		return "<img src='img/icons/wgh_pp_conservation_rare.png' class='item-icon' /> " +"Rare";
	else if(conservation == "V")
		return "<img src='img/icons/wgh_pp_conservation_vulnerable.png' class='item-icon' /> " +"Vulnerable";
	else if(conservation == "X")
		return "<img src='img/icons/wgh_pp_conservation_extinct.png' class='item-icon' /> " +"Extinct";
	return conservation;
}
function get_flower_colour(color){
	color = color.toUpperCase();
	color = color.replace("/",",");
	var colors = color.split(",");
	var r = '';
	for(var i in colors){
		if (colors[i].trim() == "B")
			r += "<img src='img/icons/wgh_pp_colour_blue.png' class='item-icon' /> " +"Blue, ";
		else if(colors[i].trim() == "BL")
			r += "<img src='img/icons/wgh_pp_colour_black.png' class='item-icon' /> " +"Black, ";
		else if(colors[i].trim() == "BR")
			r += "<img src='img/icons/wgh_pp_colour_brown.png' class='item-icon' /> " +"Brown, ";
		else if(colors[i].trim() == "BU")
			r += "<img src='img/icons/wgh_pp_colour_burgundy.png' class='item-icon' /> " +"Burgundy, ";
		else if(colors[i].trim() == "R")
			r += "<img src='img/icons/wgh_pp_colour_red.png' class='item-icon' /> " +"Red, ";
		else if(colors[i].trim() == "CR")
			r += "<img src='img/icons/wgh_pp_colour_cream.png' class='item-icon' /> " +"Cream, ";
		else if(colors[i].trim() == "G")
			r += "<img src='img/icons/wgh_pp_colour_green.png' class='item-icon' /> " +"Green, ";
		else if(colors[i].trim() == "I")
			r += "<img src='img/icons/wgh_pp_colour_insignificant.png' class='item-icon' /> " +"Insignificant, ";
		else if(colors[i].trim() == "O")
			r += "<img src='img/icons/wgh_pp_colour_orange.png' class='item-icon' /> " +"Orange, ";
		else if(colors[i].trim() == "PK")
			r += "<img src='img/icons/wgh_pp_colour_pink.png' class='item-icon' /> " +"Pink, ";
		else if(colors[i].trim() == "PU")
			r += "<img src='img/icons/wgh_pp_colour_purple.png' class='item-icon' /> " +"Purple, ";
		else if(colors[i].trim() == "W")
			r += "<img src='img/icons/wgh_pp_colour_white.png' class='item-icon' /> " +"White, ";
		else if(colors[i].trim() == "Y")
			r += "<img src='img/icons/wgh_pp_colour_lemon.png' class='item-icon' /> " +"Yellow/Gold, ";
		else r += colors[i] + ", "; 
	}
	if(r != ''){
		return r.substr(0, r.length - 2);
	}
	return r;
}
function get_flower_time(time){
	time = time.toUpperCase();
	var times = time.split(",");
	var r = '';
	for(var i in times){
		if (times[i].trim() == "A")
			r += "<img src='img/icons/wgh_pp_season_autumn.png' class='item-icon' />" +" Autumn, ";
		else if(times[i].trim() == "W")
			r += "<img src='img/icons/wgh_pp_season_winter.png' class='item-icon' />" +" Winter, ";
		else if(times[i].trim() == "SP")
			r += "<img src='img/icons/wgh_pp_season_spring.png' class='item-icon' />" +"Spring, ";
		else if(times[i].trim() == "S")
			r += "<img src='img/icons/wgh_pp_season_summer.png' class='item-icon' />" +"Summer, ";
		else if(times[i].trim() == "F")
			r += "<img src='img/icons/wgh_pp_season_frequent.png' class='item-icon' />" +"Frequent, ";
		else r += times[i] + ", ";
	}
	if(r != ''){
		return r.substr(0, r.length - 2);
	}
	return r;
}
function get_tube_colour(tcolour){
	tcolour = tcolour.toUpperCase();
	if (tcolour == "B")
		return "<img src='img/icons/wgh_pp_tube_b.png' class='item-icon' /> " +"Black";
	else if(tcolour == "G")
		return "<img src='img/icons/wgh_pp_tube_g.png' class='item-icon' /> " +"Green";
	return tcolour;
}
function get_soil_texture(texture){
	texture = texture.toUpperCase();
	var textures = texture.split(",");
	var r = '';
	for(var i in textures){
		if (textures[i] == "SA")
			r += "<img src='img/icons/wgh_pp_soil_sa.png' class='item-icon' /> " +"Sand, ";
		else if(textures[i] == "LO")
			r += "<img src='img/icons/wgh_pp_soil_lo.png' class='item-icon' /> "+"Loam, ";
		else if(textures[i] == "CL")
			r += "<img src='img/icons/wgh_pp_soil_cl.png' class='item-icon' /> "+"Clay, ";
		else if(textures[i] == "LI")
			r += "<img src='img/icons/wgh_pp_soil_li.png' class='item-icon' /> "+"Limestone, ";
		else r += texture + ", ";
	}
	if(r != ''){
		return r.substr(0, r.length - 2);
	}
	return r;
}
function get_soil_ph(ph){
	ph = ph.toUpperCase();
	if (ph == "A")
		return  "<img src='img/icons/wgh_pp_ph_minus.png' class='item-icon' /> " +"Acid soils with pH less than 7";
	else if(ph == "N")
		return  "<img src='img/icons/wgh_pp_ph_neutral.png' class='item-icon' /> " +"Neutral soils with pH=7";
	else if(ph == "C")
		return  "<img src='img/icons/wgh_pp_ph_plus.png' class='item-icon' /> " +"Calcareous soils with pH more than 7";
	else if(ph == "AN/C")
		return  "<img src='img/icons/wgh_pp_ph_eight.png' class='item-icon' /> " +"Soils with pH less than 8";
	else if(ph == "ANC")
		return  "<img src='img/icons/wgh_pp_ph_eight.png' class='item-icon' /> " +"Soils with pH less than 8";
	return ph;
}
function get_frost(frost){
	frost = frost.toUpperCase();
	if (frost == "R")
		return  "<img src='img/icons/wgh_pp_frost_resist.png' class='item-icon' />" +" Resistant to most frosts";
	else if(frost == "M")
		return  "<img src='img/icons/wgh_pp_frost_moderate.png' class='item-icon' />" +"Moderately sensitive to frost";
	else if(frost == "S")
		return  "<img src='img/icons/wgh_pp_frost_sensitive.png' class='item-icon' />" +"Sensitive to frost";
	return frost;
}

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var title = allTextLines[0].split('	');
	otitle = allTextLines[0].split('	');
	var data;
	var flag = false;
	var parent = false;
	var child = false;
	//remove unwanted character in title
	for(var t in title){
		title[t] = title[t].replace("(m)", "");
		title[t] = title[t].replace("(mm)", "");
		title[t] = title[t].replace("(time)", "");
		title[t] = title[t].trim();
		title[t] = title[t].replace(" ", "_");
	}
	//create json data
	dataJSON += '[';
	for(var i in allTextLines){
		child = false;
		if(flag){
			data = allTextLines[i].split('	');
			var line = [];
			if(!parent){
				dataJSON += "{";
				parent = true;
			} else dataJSON += ",{";
			for(var j in data){
				data[j]= data[j].trim().replace('"','');
				data[j]= data[j].replace('"','');
				if(!child){
					dataJSON += '"'+title[j]+'":"'+data[j]+'"';
					child = true;
				} else dataJSON += ',"'+title[j]+'":"'+data[j]+'"';
			}
			dataJSON += "}";
		}
		//skip the heading
		if(!flag)
			flag = true;
	}
	dataJSON += "]";
	//$("#view").empty();
	//$("#view").append(dataJSON);
}
 /**End process data**/
 //get_flickr_imgs('anceps');
 
 function get_flickr_imgs(text){
	//http://whatgrowshere.com.au/api/index.php?bname=Acacia&template=images.binomial,,wikipedia
	var url="https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+flikr_key+"&text="+text+"&sort=relevance&privacy_filter=1&per_page=4&format=json&nojsoncallback=1";
	var f_html="";
	
	 //https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9b1a66f45d5241171b91012b6973a603&text=anceps&sort=relevance&privacy_filter=1&per_page=10&format=json&nojsoncallback=1"
	 
	$.get( url, function( data ) {
		
		var total=parseInt(data.photos.total);
		//alert(total);
		if(total>0){
			for(var i=0;i<data.photos.photo.length;i++){
				var photo=data.photos.photo[i];
				//alert( "Data Loaded: " +  JSON.stringify(photo) );
				var photourl="https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_z.jpg";
				//alert(photourl);
				f_html=f_html+'<div class="flickr-item"><img src="'+photourl+'" class="flickr-image"/></div>';
			}
		}
		if(f_html!=""){
			f_html="<h3>Photos</h3>"+f_html;
		}
		
		$("#itemdetail").append(f_html);
		
	}, "json").fail(function() {
									//alert( "error" );
								});
 }
