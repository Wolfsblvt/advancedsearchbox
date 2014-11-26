<?php
/**
 * 
 * Advanced SearchBox [English]
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
	
	'ASB_CHOOSE'				=> 'Choose...',
	'ASB_SPECIFIC'				=> 'Local Searches',
	'ASB_GLOBAL'				=> 'Global Searches',
	
	'ASB_SEARCH_NONE'			=> 'None available',
	'ASB_SEARCH_WHOLE'			=> 'Whole forum',
	'ASB_SEARCH_TITLE'			=> 'Thread title ',
	'ASB_SEARCH_FIRSTPOST'		=> 'First post',
	'ASB_SEARCH_AUTHOR'			=> 'Author',
	'ASB_SEARCH_TOPICS'			=> 'Author’s topics',
	'ASB_SEARCH_POSTS'			=> 'Author’s posts',
	'ASB_SEARCH_WORDS'			=> 'Author’s words',
	'ASB_SEARCH_MEMBERS'		=> 'Members',
	'ASB_SEARCH_THIS_TOPIC'		=> 'This topic',
	'ASB_SEARCH_THIS_FORUM'		=> 'This forum',
	
	'ASB_TOOLTIP_WORDS'			=> 'Search with => Searchwords',
	'ASB_TOOLTIP_NAME'			=> 'Search with => Username',
	'ASB_TOOLTIP_COMBINED'		=> 'Search with => Username: Searchwords',
	'ASB_TOOLTIP_PIN'			=> 'Pin your favorite search. It is selected by default as search option as long as it is pinned.',
	'ASB_TOOLTIP_CHOOSE'		=> 'Choose what you want to search.',
));
