<?php
/**
 * Dispatcher
 */

@include_once ('Connector.php');

$error = true;

//controller vars vars
$tag = '';
$maxresults = 5;

// botanical name: required
if (!isset($_GET["bname"])) {
	die('Invalid parameters: `bname` required.');
}
$tag = htmlspecialchars($_GET["bname"]);

// template: required
if (!isset($_GET["template"])) {
	die('Invalid parameters: `template` required.');
}
$template = htmlspecialchars($_GET["template"]);

//maxresults: optional 
$maxresults = (!empty($_GET["maxresults"]) && (int) $_GET["maxresults"] > 0) ? $_GET["maxresults"] : $maxresults;

/**
 * Set CORS headers
 */
Config::setRequestHeaders();

/**
 * Call templates
 */
$templatesSplit = explode(',', $template);
foreach($templatesSplit as $templateSingle){
	$templateFile = 'template.'.$templateSingle.'.php';
	if(!file_exists($templateFile)){
		die('Error: template not found.');
	}
	require($templateFile);
}//foreach
