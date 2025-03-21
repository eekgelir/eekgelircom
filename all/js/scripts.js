var url = window.location.href;
var mobil = 0;
level=0

function sq(x){z=document.querySelector(x);return z}
function siq(x){z=document.querySelectorAll(x);return z}


jQuery(document).ready(function() {
	if(window.innerWidth <= 800){window.scrollTo(0, 56);$("body").css("padding-top","56px");mobil=1}
	else{
		$(window).scroll(function() {
			level=$(window).scrollTop()
		});
	}
	$("*[class*='p_']").each(function( index ) {
		var o=$(this);
		var classList = o.attr('class').split(/\s+/);
		$.each(classList, function(index, item) {
    		if (item.startsWith("p_")) {
				x=item.split("_")[1];if(x=="a"){x="auto"}else if(x!=null){x=x+"px"}else{x=""}
				y=item.split("_")[2];if(y=="a"){y="auto"}else if(y!=null){y=y+"px"}else{y=""}
				y2=item.split("_")[3];if(y2=="a"){y2="auto"}else if(y2!=null){y2=y2+"px"}else{y2=""}
				x2=item.split("_")[4];if(x2=="a"){x2="auto"}else if(x2!=null){x2=x2+"px"}else{x2=""}
				z=x+" "+y+" "+y2+" "+x2;
				console.log(z);
				o.css("padding",z)
    		}
		});
	});
	$("*[class*='m_']").each(function( index ) {
		var o=$(this);
		var classList = o.attr('class').split(/\s+/);
		$.each(classList, function(index, item) {
    		if (item.startsWith("m_")) {
				x=item.split("_")[1];if(x=="a"){x="auto"}else if(x!=null){x=x+"px"}else{x=""}
				y=item.split("_")[2];if(y=="a"){y="auto"}else if(y!=null){y=y+"px"}else{y=""}
				y2=item.split("_")[3];if(y2=="a"){y2="auto"}else if(y2!=null){y2=y2+"px"}else{y2=""}
				x2=item.split("_")[4];if(x2=="a"){x2="auto"}else if(x2!=null){x2=x2+"px"}else{x2=""}
				z=x+" "+y+" "+y2+" "+x2;
				console.log(z);
				o.css("margin",z)
    		}
		});
	});
	$(".copythis").click(function() {
		var keko = this
		var adress = $(this).text()
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(adress).select();
		document.execCommand("copy");
		$temp.remove();
		$(this).addClass("blink")
		setTimeout(function(){ $(keko).removeClass("blink")}, 1000);
	});
	$(".eye").click(function() {
		$(this).parent().toggleClass("eye");
		var type = $(this).parent().find("input").attr("type");
		var newtype = (type === "password")?"text":"password";
		$(this).parent().find("input").attr("type", newtype);
	});
	$(".menu a").click(function(){
		$(this).parent().toggleClass("collapse")
		return false
    });


});

