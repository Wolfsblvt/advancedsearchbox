/**
 * wolfsblvt/advancedsearchbox
 *
 * onload.js
 * http://www.pinkes-forum.de/
 * Author: Clemens Husung (Wolfsblvt)
 * 
 */

$(document).ready(function () {
	// Place the button and menu at the correct position    
	var positioning_button = function () {
		var dropdown = $("#search_dropdown");
		var searchfield = $("#search-box");

		if (searchfield.css("display") == "none") {
			dropdown.css("display", "none");
			return;
		}

		dropdown.css({
			left: searchfield.offset().left - 1,
			top: searchfield.offset().top + searchfield.height() + 1,
			display: "inline",
		});
	};
	$(window).resize(positioning_button);
	positioning_button();


	// delete the not possible options
	if (!$.wolfsblvt.get_url_param("t"))
		$("#Li11").remove();
	if (!$.wolfsblvt.get_url_param("f"))
		$("#Li12").remove();
	if ($.wolfsblvt.get_url_param("t") || $.wolfsblvt.get_url_param("f"))
		$("#LiN1").remove();


	var menu = $("#search_dropdown_menu");
	$("#search_dropdown_link").button().click(function () {
		menu.slideToggle();
	}).hover(function () {
		$(this).removeClass("ui-state-default");
	}, function () {
		$(this).addClass("ui-state-default");
	});
	menu.menu({
		position: { my: "left top", at: "right top" },
		items: "> :not(.ui-widget-header, .ui-widget-notclickable)",
	});

	// close menu if clicked outside
	$("#search_dropdown").click(function (event) { event.stopPropagation(); });
	$(document).click(function () { menu.slideUp(); });

	// adding the needed method for each element
	$("#search_dropdown li").click(function () { $.wolfsblvt.select_search_dropdown_value(this) });

	// methods for the pins
	$("#search_dropdown img").hover(function () {
		$(this).attr("src", $(this).attr("src").toString().replace("pin.png", "pinh.png"));
	}, function () {
		$(this).attr("src", $(this).attr("src").toString().replace("pinh.png", "pin.png"));
	}).click(function (event) {
		event.stopPropagation();
		
		var id = $(this).parent().parent().attr("id");

		var is_pinned = ($.cookie($.wolfsblvt.cookie_advancedsearchbox_name) && $.cookie($.wolfsblvt.cookie_advancedsearchbox_name)['id'] == $(this).parent().parent().attr("id"));

		if (!is_pinned) {
			$("#search_dropdown img").each(function () {
				$(this).attr("src", $(this).attr("src").toString().replace("/unpin", "/pin"));
			});
			$(this).attr("src", $(this).attr("src").toString().replace("/pin", "/unpin"));
			$.cookie($.wolfsblvt.cookie_advancedsearchbox_name, { id: id, pinned: true });
		}
		else {
			console.log("unpin");
			$(this).attr("src", $(this).attr("src").toString().replace("/unpin", "/pin"));
			$.removeCookie($.wolfsblvt.cookie_advancedsearchbox_name);
		}
	});

	// If cookie is saved, we'll preselected this value
	if ($.cookie($.wolfsblvt.cookie_advancedsearchbox_name)) {
		var id = $.cookie($.wolfsblvt.cookie_advancedsearchbox_name)['id'];
		var item_a = $("#search_dropdown").find("#" + id + " a").first();
		var item_img = item_a.find("img").first();

		if (item_a.length > 0) {
			item_img.attr("src", item_img.attr("src").toString().replace("/pin", "/unpin"));
			item_a.trigger("click");
		}
		else {
			// If element from cookie does not exist, we will do nothing. Delete cookie would be an option, but we don't want to lose user data
		}
	}
});