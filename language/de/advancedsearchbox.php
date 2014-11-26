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
	'ASB_EXT_NAME'				=> 'Advanced SearchBox',
	
	'ASB_CHOOSE'				=> 'Wähle...',
	'ASB_SPECIFIC'				=> 'Lokale Suchen',
	'ASB_GLOBAL'				=> 'Globale Suchen',
	
	'ASB_SEARCH_NONE'			=> 'Keine vorhanden',
	'ASB_SEARCH_WHOLE'			=> 'Gesamtes Forum',
	'ASB_SEARCH_TITLE'			=> 'Threadtitel',
	'ASB_SEARCH_FIRSTPOST'		=> 'Startpost',
	'ASB_SEARCH_AUTHOR'			=> 'Nach Autor',
	'ASB_SEARCH_TOPICS'			=> 'Themen des Autors',
	'ASB_SEARCH_POSTS'			=> 'Beiträge des Autors',
	'ASB_SEARCH_WORDS'			=> 'Wörter des Autors',
	'ASB_SEARCH_MEMBERS'		=> 'Mitglieder',
	'ASB_SEARCH_THIS_TOPIC'		=> 'Dieses Thema',
	'ASB_SEARCH_THIS_FORUM'		=> 'Dieses Forum',
	
	'ASB_TOOLTIP_WORDS'			=> 'Suche mit => Suchbegriffe',
	'ASB_TOOLTIP_NAME'			=> 'Suche mit => Username',
	'ASB_TOOLTIP_COMBINED'		=> 'Suche mit => Username: Suchbegriffe',
	'ASB_TOOLTIP_PIN'			=> 'Pinne deine favorisierte Suche. Sie wird automatisch als Standardsuchoption ausgewählt solange sie angepinnt ist.',
	'ASB_TOOLTIP_CHOOSE'		=> 'Wähle was du suchen möchtest.',
));
