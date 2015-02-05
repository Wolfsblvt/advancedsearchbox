<?php
/**
 * 
 * Advanced SearchBox [Deutsch]
 * 
 * @copyright (c) 2014 Wolfsblut ( www.pinkes-forum.de )
 * @license http://opensource.org/licenses/gpl-2.0.php GNU General Public License v2
 * @author Clemens Husung (Wolfsblvt)
 */

if (!defined('IN_PHPBB'))
{
	exit;
}

if (empty($lang) || !is_array($lang))
{
	$lang = array();
}

// DEVELOPERS PLEASE NOTE
//
// All language files should use UTF-8 as their encoding and the files must not contain a BOM.
//
// Placeholders can now contain order information, e.g. instead of
// 'Page %s of %s' you can (and should) write 'Page %1$s of %2$s', this allows
// translators to re-order the output of data while ensuring it remains correct
//
// You do not need this where single placeholders are used, e.g. 'Message %d' is fine
// equally where a string contains only two placeholders which are used to wrap text
// in a url you again do not need to specify an order e.g., 'Click %sHERE%s' is fine
//
// Some characters you may want to copy&paste:
// ’ » “ ” …
//

$lang = array_merge($lang, array(
	'ASB_EXT_NAME'				=> 'Avancerad sökruta',
	
	'ASB_CHOOSE'				=> 'Välj ...',
	'ASB_SPECIFIC'				=> 'Lokal sökning',
	'ASB_GLOBAL'				=> 'Global sökning',
	
	'ASB_SEARCH_NONE'			=> 'Existerar ej',
	'ASB_SEARCH_WHOLE'			=> 'Hela forumet',
	'ASB_SEARCH_TITLE'			=> 'Trådrubrik',
	'ASB_SEARCH_FIRSTPOST'		=> 'Första inlägg',
	'ASB_SEARCH_AUTHOR'			=> 'Efter autor',
	'ASB_SEARCH_TOPICS'			=> 'Autorns ämnen',
	'ASB_SEARCH_POSTS'			=> 'Autorns inlägg',
	'ASB_SEARCH_WORDS'			=> 'Autorns ord',
	'ASB_SEARCH_MEMBERS'		=> 'Medlemmar',
	'ASB_SEARCH_THIS_TOPIC'		=> 'Detta ämne',
	'ASB_SEARCH_THIS_FORUM'		=> 'Detta forum',
	
	'ASB_TOOLTIP_WORDS'			=> 'Sök på => sökord',
	'ASB_TOOLTIP_NAME'			=> 'Sök på => användarnamn',
	'ASB_TOOLTIP_COMBINED'		=> 'Sök på  => användarnamn: sökord',
	'ASB_TOOLTIP_PIN'			=> 'Spara dina favoritinställningar. Dessa kommer automatiskt att användas så länge de sparas som favoritinställningar.',
	'ASB_TOOLTIP_CHOOSE'		=> 'Välj det du vill söka.',
));
