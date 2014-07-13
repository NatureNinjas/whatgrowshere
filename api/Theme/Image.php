<?php
Class Image{
	
	 function __construct(){
	 	
	 }
	 
	public static function renderImage($src, $title, $extra = ''){
	 	return '<div class="imageItem"><img src="'.$src.'" alt="'.$title.'">'.$extra.'</div>';
	 	
	 }
	 public static function renderOwner($name, $link){
	 	return '<div class="owner">Flickr user: <a href="'.$link.'" target="blank">'.$name.'</a></div>';
	 }
	
}