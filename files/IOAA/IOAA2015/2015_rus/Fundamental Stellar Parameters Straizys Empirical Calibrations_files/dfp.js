
var advwp_top='74px';
var adv_pg_top=74;

function adv_wpbefore(){
	jQuery('#ad97090').hide();
	jQuery('.navigazione').css('padding-top','45px');
}

 IOLAdv.Adv.advlib.slotDetails = [];
 IOLAdv.Adv.advlib.isThereASlotForThisDiv = function(divName){
		var ret=false;
		for(var i=0; i<IOLAdv.Adv.advlib.slotDetails.length; i++){
				if (IOLAdv.Adv.advlib.slotDetails[i].ref==divName){
						ret=true;
						break;
				}
		};
		return ret;
 }

 var googletag = googletag || {};
 googletag.cmd = googletag.cmd || [];
 (function() {
		var gads = document.createElement('script');
		gads.async = true;
		gads.type = 'text/javascript';
		var useSSL = 'https:' == document.location.protocol;
		gads.src = (useSSL ? 'https:' : 'http:') +
		'//www.googletagservices.com/tag/js/gpt.js';
		var node = document.getElementsByTagName('script')[0];
		node.parentNode.insertBefore(gads, node);
 })();
		var slots = {};

		
		if(location.search.indexOf('dctestAdv=1')>0){
			IOLAdv.Adv.advlib.slotDetails.push({name:'leader', path:'/5180/testvirgilio/community1/ros', dims:[[728, 90],[970, 90]], ref:'ad97090'});
		}else{
			IOLAdv.Adv.advlib.slotDetails.push({name:'leader', path:'/5180/virgilio/community/ros', dims:[[728, 90],[970, 90]], ref:'ad97090'});
		}

		googletag.cmd.push(function() {

IOLAdv.Adv.advlib.setTarget(googletag, 1);
				for(var i=0; i<IOLAdv.Adv.advlib.slotDetails.length; i++){
						var theSlot = IOLAdv.Adv.advlib.slotDetails[i];
						slots[theSlot.name] = googletag.defineSlot(theSlot.path, theSlot.dims, theSlot.ref).addService(googletag.pubads());
				}

				if(typeof(adv_liberotest)=="undefined"){var adv_liberotest=false;}

				googletag.pubads().collapseEmptyDivs();
				googletag.pubads().enableSingleRequest();
				googletag.enableServices();
		});
