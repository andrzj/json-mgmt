 	let updateTips = (t) => {
 	    $(".validateTips")
 	        .text(t)
 	        .addClass("ui-state-highlight");
 	    setTimeout(function() {
 	        $(".validateTips").removeClass("ui-state-highlight", 1500);
 	    }, 500);
 	};

 	let valid = () => {
 	    let valid = true;
 	    allFields.removeClass("ui-state-error");
 	    valid = valid && checkRegexp($("#name"), /^[a-z]([0-9a-z_\s])+$/i, "O nome SEO é obrigatório");
 	    valid = valid && checkRegexp($("#label"), /^(.)+$/i, "O label é obrigatório");
 	    valid = valid && checkRegexp($("#link"), /^[a-z]([0-9a-z_:\-\/\.])+$/i, "O link é obrigatório");
 	    return valid;
 	};

 	let checkRegexp = (o, regexp, n) => {
 	    if (!(regexp.test(o.val()))) {
 	        o.addClass("ui-state-error");
 	        setTimeout(function() {
 	            o.removeClass("ui-state-error", 1500);
 	        }, 500);
 	        updateTips(n);
 	        return false;
 	    } else {
 	        return true;
 	    }
 	};