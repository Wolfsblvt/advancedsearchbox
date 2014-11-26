/**
 * wolfsblvt/advancedsearchbox
 *
 * functions.js
 * http://www.pinkes-forum.de/
 * Author: Clemens Husung (Wolfsblvt)
 * 
 */

// namespacing
$.wolfsblvt = $.extend({}, $.wolfsblvt, {

	/// <field name="cookie_advancedsearchbox_name" type="string">The Cookie Name for advanced searchbox pin setting.</field>
	cookie_advancedsearchbox_name: 'wolfsblvt_asb_pin',

	select_search_dropdown_value: function (listitem) {
		/// <summary>
		///     Selects the current value and sets the name of it in the dropdown box.
		/// </summary>
		/// <param name="listitem" type="object">(object) the html element, wich is chosen</param>

		// Don't go on if there is no link inside the list item
		if ($(listitem).children("a").length == 0)
			return false;

		var item = $(listitem).children("a").first();
		var name = item.text();

		// If Subdirectories or doesn't contain a link, please stop this.
		if (item.parent().find("ul").length > 0) {
			return false;
		}

		$("#search_dropdown_link span").html(name + " &darr;");
		$("#search_dropdown_menu").slideUp();

		// method call for hidden fields
		var id = item.parent().attr("id");
		var target = $("#search-box").find("form").first();
		var fields = null;

		// default search on search.php. Prevents wrong search while first clicking a topic that replaces the search link and then another
		target.attr("action", target.attr("action").replace("./memberlist.php", "./search.php"));

		switch (id) {
			case "Li11":     // This Topic
				fields = { t: $.wolfsblvt.get_url_param("t"), ch: "-1", };
				break;
			case "Li12":     // This Forum fid%5B%5D
				fields = { "fid[]": $.wolfsblvt.get_url_param("f"), ch: "-1", };
				break;
			case "Li21":     // Whole Forum
				fields = { ch: "-1", };
				break;
			case "Li22":     // Thread title
				fields = { sf: "titleonly", sr: "topics", };
				break;
			case "Li23":     // First post
				fields = { sf: "firstpost", ch: "-1", };
				break;
			case "Li24x1":  // Topics of author
				fields = { sf: "firstpost", sr: "topics", author: "true", KeywordsAsUsername: 1, };
				break;
			case "Li24x2":  // Posts of authour
				fields = { author: "true", ch: "-1", KeywordsAsUsername: 1, };
				break;
			case "Li24x3":  // Words of author
				fields = { author: "true", ch: "-1", KeywordsAsUsername: 1, };
				break;
			case "Li25":    // Members
				fields = { username: "true", };
				// replace the seachsite, we need to search memberlist
				target.attr("action", target.attr("action").replace("./search.php", "./memberlist.php"));
				break;
			default:
				fields = { ch: "-1" };
				break;
		}
		if (target && fields)
			$.wolfsblvt.add_hidden_fields(target, fields);

		// save option to cookie
		if (id && (!$.cookie($.wolfsblvt.cookie_advancedsearchbox_name) || $.cookie($.wolfsblvt.cookie_advancedsearchbox_name)['pinned'] == false)) {
			$.cookie($.wolfsblvt.cookie_advancedsearchbox_name, { id: id, pinned: false });
		}

		// Hidden field for username. Workaround to get it to search for the username
		$("#keywords").off('change.wolfsblvt');

		if (typeof (fields.username) !== 'undefined') {
			$("#keywords").on('change.wolfsblvt', function () {
				var username = $("#keywords").val();

				var target = $("#search-box").find("form").first();
				target.find("input[type='hidden'][name='username']").val(username);
			}).trigger("change");
		}

		// Workaround for missing php event in search.php, let's see if we can change the requestvars here
		if (typeof (fields.KeywordsAsUsername) !== 'undefined') {
			$("#search-box").find("form").first().submit(function (e) {
				//e.preventDefault();
				var keywords = $("#keywords").val();
				if (/^.+?:.+?$/i.test(keywords)) {
					var author_key_split = keywords.split(":", 2);
					$(this).find("input[type='hidden'][name='author']").val(author_key_split[0].trim());
					$(this).find("input[name='keywords']").val(author_key_split[1].trim());
				}
				else {
					$(this).find("input[type='hidden'][name='author']").val(keywords);
					$(this).find("input[name='keywords']").val("");
				}
			});
		}
		
	},
	add_hidden_fields: function (target, fields) {
		/// <summary>
		///     Adds the hidden fields to the selected html element
		/// </summary>
		/// <param name="target" type="object">(object) The target where the hidden fields are added as children</param>
		/// <param name="fields" type="Array">(Array[String:String]) the hidden fields that should be set</param>
		target = $(target).first();

		//remove
		var sid_field = target.find("input[name='sid']").first();

		target.find("input[type='hidden']").each(function () {
			$(this).remove();
		});

		// add
		var html = "";
		for (var key in fields) {
			html += '<input type="hidden" name="'+key+'" value="'+fields[key]+'" />';
		}
		target.append(html);
		if (sid_field)
			target.append(sid_field);
	}
});