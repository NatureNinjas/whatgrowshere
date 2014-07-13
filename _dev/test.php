<?php 
//$query = 'bname=anceps&template=wikipedia,images';
$query = urlencode('bname=taxonomy:binomial="Corylus americana"&template=wikipedia,images');
echo 'http://devel.bo/GovHack%202014/api/index.php?'.$query.'<hr>';
echo file_get_contents(
'http://devel.bo/GovHack%202014/api/index.php?'.$query
);
//
//https://www.flickr.com/services/api/explore/flickr.photos.search
//works:  "machine_tags" => "taxonomy:binomial=\"Acacia\""