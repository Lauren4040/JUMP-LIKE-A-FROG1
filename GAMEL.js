(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"GAMEL_atlas_1", frames: [[0,0,1924,1259]]},
		{name:"GAMEL_atlas_2", frames: [[0,0,1926,1070]]},
		{name:"GAMEL_atlas_3", frames: [[0,0,1923,1068]]},
		{name:"GAMEL_atlas_4", frames: [[0,1083,862,531],[864,1083,862,531],[0,0,1282,1081]]},
		{name:"GAMEL_atlas_5", frames: [[0,0,862,531],[0,533,862,527],[864,0,862,531],[1556,698,301,94],[1556,794,301,94],[1556,890,301,94],[1769,1187,249,82],[1594,1240,155,83],[1859,893,147,145],[1556,583,310,113],[2000,312,32,32],[1556,986,259,105],[663,1257,176,80],[864,533,690,570],[1751,1271,108,107],[1918,394,105,112],[1868,583,153,172],[1817,1040,147,145],[1859,757,186,134],[1728,236,270,156],[1728,0,230,234],[1728,394,188,187],[1960,0,68,75],[1960,77,73,67],[1918,508,72,67],[931,1210,661,103],[931,1105,687,103],[1620,1093,147,145],[0,1105,929,150],[1960,146,73,67],[0,1257,661,103],[2000,215,48,48],[0,1380,1924,1],[2000,265,45,45]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["GAMEL_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["GAMEL_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Asset1 = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bankofariver = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BlueFrogi = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.brownborad = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.continue_btn = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.EndAnimitonBackground = function() {
	this.initialize(img.EndAnimitonBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2050,1139);


(lib.endbuttuns = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.finalborad = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.frogiHappy = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.FrogiSideLook = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Game_Name_Subject = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.GameBackground = function() {
	this.initialize(ss["GAMEL_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.GreenFrogi = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Homescreenbackground = function() {
	this.initialize(ss["GAMEL_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Howtoplayborad = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.img_temp_1 = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.img_temp_2 = function() {
	this.initialize(img.img_temp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,5000);


(lib.img_temp_3 = function() {
	this.initialize(img.img_temp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6016,4016);


(lib.img_temp_4 = function() {
	this.initialize(img.img_temp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5905,4970);


(lib.jump = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.jumpingfrogi = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Keyborad = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.music = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.mute = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.namegameH1 = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.OpenanimitonBackground = function() {
	this.initialize(ss["GAMEL_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PauseH1 = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.PinkFrogi = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.plant = function() {
	this.initialize(ss["GAMEL_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Qtamplate = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.stopbutton = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.TimeoverH1png = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Viconpng = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.whiteline = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Xicon = function() {
	this.initialize(ss["GAMEL_atlas_5"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.raft_alone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,431,265.5);


(lib.raft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.plant();
	this.instance.setTransform(142.1,40.1,0.1108,0.1489,0,0,180);

	this.instance_1 = new lib.plant();
	this.instance_1.setTransform(386,107,0.1316,0.1489);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(56.4,124.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40.1,554.7,348.09999999999997);


(lib.GEZA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("קפצו על הרפסודה באמצעות החצים ובחרו עם מקש רווח את התשובה הנכונה", "normal 700 14px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 465;
	this.text.parent = this;
	this.text.setTransform(826.05,18.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7D3F16").ss(3,0,1).p("EAmFgCmIAAFNMhMJAAAIAAlNg");
	this.shape.setTransform(587.75,25.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7D3F16").ss(5,1,1).p("EhCsgFIMCFZAAAIAAKSMiFZAAAg");
	this.shape_1.setTransform(426.875,91.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7D3F16").ss(5,0,1).p("EBAVAEeIAAo7EhAUAEeIAAo7");
	this.shape_2.setTransform(427.85,28.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhCsAJCIAAqSMCFZAAAIAAKSgAs7jyIAAlPMBMJAAAIAAFPg");
	this.shape_3.setTransform(426.875,66.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,858.8,129.8);


(lib.btn_continue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.continue_btn();
	this.instance.setTransform(0,0,0.7027,0.7142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_continue, new cjs.Rectangle(0,0,182,75), null);


(lib.jumperfrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpingfrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperfrogi, new cjs.Rectangle(0,0,188,187), null);


(lib.FrogiSideLook_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrogiSideLook_1, new cjs.Rectangle(0,0,105,112), null);


(lib.Xicon_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Xicon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Xicon_1, new cjs.Rectangle(0,0,45,45), null);


(lib.Vicon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Viconpng();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Vicon, new cjs.Rectangle(0,0,48,48), null);


(lib.stopbutton_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stopbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stopbutton_1, new cjs.Rectangle(0,0,73,67), null);


(lib.questionField = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Q_tamplate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Qtamplate();
	this.instance.setTransform(0,32,0.8448,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Q_tamplate, new cjs.Rectangle(0,32,784.8,150), null);


(lib.mute_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mute();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mute_btn, new cjs.Rectangle(0,0,72,67), null);


(lib.music_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.music();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.music_btn, new cjs.Rectangle(0,0,73,67), null);


(lib.raft_alone_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.raft_alone_1, new cjs.Rectangle(-0.5,-0.5,431,265.5), null);


(lib.Game_boradkey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("בחירה/המשך/סגור", "bold 14px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 140;
	this.text.parent = this;
	this.text.setTransform(157.85,73.1);

	this.text_1 = new cjs.Text("מקשי תזוזה", "bold 14px 'Heebo'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 75;
	this.text_1.parent = this;
	this.text_1.setTransform(134.4,13.7);

	this.instance = new lib.Keyborad();
	this.instance.setTransform(63,32);

	this.instance_1 = new lib.Howtoplayborad();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Game_boradkey, new cjs.Rectangle(0,0,186,134), null);


(lib.green_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("EgiugG8MBFdAAAQBbAABOAbQAQAGAPAGQBLAhA+A6QCMCCAAC4QAAC4iMCCQhGBDhVAgQgHADgGACQhOAbhbAAMhFdAAAQhiAAhUggQhVgghHhDQiLiCAAi4QAAi4CLiCQA/g6BLghQBbgnBtAAg");
	this.shape.setTransform(97.35,-150.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5E06A").s().p("EgiuAG9QhiAAhUggQhVgghGhCQiMiCAAi5QAAi3CMiDQA+g6BLggQBbgoBtAAMBFdAAAQBbAABOAbIAfANQBLAgA/A6QCLCDAAC3QAAC5iLCCQhHBChVAgIgNAFQhOAbhbAAg");
	this.shape_1.setTransform(97.35,-150.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green_btn, new cjs.Rectangle(-174.6,-196.6,544,93), null);


(lib.brown_borad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Game_Name_Subject();
	this.instance.setTransform(0,0,0.9752,0.9802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brown_borad, new cjs.Rectangle(0,0,149.2,168.6), null);


(lib.HappyFrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frogiHappy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HappyFrogi, new cjs.Rectangle(0,0,108,107), null);


(lib.img_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_4();
	this.instance.setTransform(0,0,0.0586,0.0366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_4, new cjs.Rectangle(0,0,346,181.8), null);


(lib.img_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_3();
	this.instance.setTransform(0,0,0.0424,0.0339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_3, new cjs.Rectangle(0,0,255.1,136.1), null);


(lib.img_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_2();
	this.instance.setTransform(0,0,0.0638,0.0272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_2, new cjs.Rectangle(0,0,255.1,136.1), null);


(lib.img_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_1();
	this.instance.setTransform(0,0,0.9448,0.8721);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_1, new cjs.Rectangle(0,0,255.1,136.1), null);


(lib.startButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("התחל", "bold 40px 'Heebo ExtraBold'");
	this.text.lineHeight = 61;
	this.text.lineWidth = 105;
	this.text.alpha = 0.61568627;
	this.text.parent = this;
	this.text.setTransform(87.6,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("Aw8o0MAh5AAAQDqAACmCmQClClAADpQAADqilCmQimCljqAAMgh5AAAQjqAAimilQilimAAjqQAAjpClilQCmimDqAAg");
	this.shape.setTransform(136.5911,45.5954,0.828,0.8067);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(217,219,199,0.616)").s().p("Aw8I1QjqAAimilQilimAAjqQAAjpClimQCmilDqAAMAh5AAAQDqAAClClQCmCmAADpQAADqimCmQilCljqAAg");
	this.shape_1.setTransform(136.5911,45.5954,0.828,0.8067);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(194,248,1,0.616)").s().p("Aw8I1QjqAAimilQilimAAjqQAAjpClimQCmilDqAAMAh5AAAQDqAAClClQCmCmAADpQAADqimCmQilCljqAAg");
	this.shape_2.setTransform(136.5911,45.5954,0.828,0.8067);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,279.2,97.2);


(lib.mc_raft_MAIN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_raft_MAIN, new cjs.Rectangle(-0.5,-0.5,431,265.5), null);


(lib.waves = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset1();
	this.instance.setTransform(0,245.8,1.6614,1.0098,0,180,0);

	this.instance_1 = new lib.Asset1();
	this.instance_1.setTransform(15,0,1.5353,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.waves, new cjs.Rectangle(0,0,413.7,245.8), null);


(lib.jumper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jump();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumper, new cjs.Rectangle(0,0,230,234), null);


(lib.frgiraft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frgiraft, new cjs.Rectangle(0,0,105,112), null);


(lib.finalborad_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.finalborad();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.finalborad_1, new cjs.Rectangle(0,0,690,570), null);


(lib.end_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.endbuttuns();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end_btn, new cjs.Rectangle(0,0,176,80), null);


(lib.brownborad_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.brownborad();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brownborad_1, new cjs.Rectangle(0,0,310,113), null);


(lib.waves_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.Asset1();
	this.instance_2.setTransform(0,245.8,1.6614,1.0098,0,180,0);

	this.instance_3 = new lib.Asset1();
	this.instance_3.setTransform(15,0,1.5353,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.waves_1, new cjs.Rectangle(0,0,413.7,245.8), null);


(lib.raft_alone_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.raft_alone_2, new cjs.Rectangle(-0.5,-0.5,431,265.5), null);


(lib.frgiraft_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frgiraft_1, new cjs.Rectangle(0,0,105,112), null);


(lib.forCombo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.myCSS = new lib.an_CSS({'id': 'myCSS', 'href':'assets/cssCombo.css'});

	this.myCSS.name = "myCSS";
	this.myCSS.setTransform(208,-11,1,1,0,0,0,50,11);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, גיאוגרפיה, 1, חשבון, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(50.1,11.1,1.5,1.5,0,0,0,33.4,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.myCSS}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forCombo, new cjs.Rectangle(-0.7,-22.5,259.2,56.3), null);


(lib.questionBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this; //הגדרת הבמה וכל הרכיבים הנמצאים בה
		self.stop;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AT7qnIAAVPMgn2AAAIAA1Pg");
	this.shape.setTransform(127.55,68.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Az7KoIAA1PMAn2AAAIAAVPg");
	this.shape_1.setTransform(127.55,68.025);

	this.instance = new lib.Vicon();
	this.instance.setTransform(132,-23,1,1,0,0,0,24,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(3,1,1).p("Az7qnMAn2AAAIAAVPMgn2AAAg");
	this.shape_2.setTransform(127.55,68.025);

	this.instance_1 = new lib.Xicon_1();
	this.instance_1.setTransform(133,-24,1,1,0,0,0,22.5,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(3,1,1).p("Az7qnMAn2AAAIAAVPMgn2AAAg");
	this.shape_3.setTransform(127.55,68.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-47,258.1,184.6);


(lib.FrogiQanimiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frgiraft_1();
	this.instance.setTransform(588.5,12,1,1,0,0,0,52.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:577.35},0).wait(1).to({x:566.25},0).wait(1).to({x:555.1},0).wait(1).to({x:544},0).wait(1).to({x:532.9},0).wait(1).to({x:521.75},0).wait(1).to({x:510.65},0).wait(1).to({x:499.55},0).wait(1).to({x:488.4},0).wait(1).to({x:477.3},0).wait(1).to({x:466.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(413.7,-44,227.3,112);


(lib.mc_raft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.raft("synched",0);
	this.instance.setTransform(277.4,193.5,1,1,0,0,0,277.4,193.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_raft, new cjs.Rectangle(0,40.1,554.7,348.09999999999997), null);


(lib.frogiprogressstatic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();
	this.instance.setTransform(-66,80,0.3067,0.3732);

	this.instance_1 = new lib.raft_alone("synched",0);
	this.instance_1.setTransform(-47.6,121,0.1698,0.2012,0,0,0,215,132.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiprogressstatic, new cjs.Rectangle(-84.1,80,73.19999999999999,67.6), null);


(lib.FrogiAQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frgiraft();
	this.instance.setTransform(572.2,-5.9,0.6886,0.6808,0,0,0,52.5,55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:56,x:625.7,y:28.35},0).wait(1).to({x:679.25,y:62.5},0).wait(1).to({x:732.8,y:96.65},0).wait(1).to({x:786.35,y:130.85},0).wait(1).to({x:839.9,y:165},0).wait(1).to({x:893.45,y:199.2},0).wait(1).to({x:947,y:233.35},0).wait(1).to({x:1000.55,y:267.55},0).wait(1).to({x:1054.1,y:301.7},0).wait(1).to({x:1107.65,y:335.9},0).wait(1).to({x:1161.2,y:370.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(536.1,-43.9,661.3000000000001,452.09999999999997);


(lib.frogiraft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiAQ();
	this.instance.setTransform(78.45,65.85,1,1.101,0,0,0,588.5,12);

	this.instance_1 = new lib.raft_alone_1();
	this.instance_1.setTransform(132.65,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiraft, new cjs.Rectangle(-0.3,-0.3,265.90000000000003,164.10000000000002), null);


(lib.endingA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bubbles
	this.instance = new lib.waves();
	this.instance.setTransform(176,58.95,1,1.0732,0,0,0,206.8,122.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({regY:122.9,scaleY:1.0632,skewX:-1.5062,x:155,y:58.05},0).wait(1).to({scaleY:1.0532,skewX:-3.0123,x:133.9,y:56.75},0).wait(1).to({scaleY:1.0431,skewX:-4.5185,x:112.85,y:55.4},0).wait(1).to({scaleY:1.0331,skewX:-6.0247,x:91.8,y:54.05},0).wait(1).to({scaleY:1.023,skewX:-7.5308,x:75.65},0).wait(1).to({scaleY:1.013,skewX:-9.037,x:59.4},0).wait(1).to({scaleY:1.0029,skewX:-10.5432,x:43.2},0).wait(1).to({scaleY:0.9929,skewX:-12.0493,x:26.95},0).wait(1).to({scaleY:0.9829,skewX:-13.5555,x:10.75},0).wait(1).to({scaleY:0.9702,skewX:-8.774,x:-8.65,y:54.55},0).wait(1).to({scaleY:0.9576,skewX:-3.9925,x:-28.05,y:55.05},0).wait(1).to({scaleY:0.9449,skewX:0.789,x:-47.5,y:55.5},0).wait(1).to({scaleY:0.9323,skewX:5.5704,x:-66.9,y:56.05},0).wait(1).to({scaleY:0.9196,skewX:10.3519,x:-86.3,y:56.55},0).wait(1).to({scaleY:0.907,skewX:15.1334,x:-105.75,y:57.05},0).to({_off:true},1).wait(53));

	// frogi
	this.instance_1 = new lib.frogiraft();
	this.instance_1.setTransform(132.6,68.8,1,1,0,0,0,132.6,81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:343.5,regY:250.9,x:343.5,y:238},0).wait(2).to({x:329},0).wait(1).to({x:314.55},0).wait(1).to({x:300.05},0).wait(1).to({x:285.6},0).wait(1).to({x:271.1},0).wait(1).to({x:256.65},0).wait(1).to({x:242.15},0).wait(1).to({x:227.65},0).wait(1).to({x:213.2},0).wait(1).to({x:198.7},0).wait(1).to({x:184.25},0).wait(1).to({x:169.75},0).wait(1).to({x:155.3},0).wait(1).to({x:140.8},0).wait(1).to({x:126.3},0).wait(1).to({_off:true},1).wait(52));

	// jumper
	this.instance_2 = new lib.jumperfrogi();
	this.instance_2.setTransform(-205,22.2,0.4643,0.533,0,0,180,93.9,77.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({regX:94,regY:93.5,scaleX:0.4579,scaleY:0.5287,skewX:-2.3537,skewY:179.9732,x:-217.05,y:28.2},0).wait(1).to({scaleX:0.4515,scaleY:0.5245,skewX:-4.7075,skewY:179.9464,x:-229.15,y:25.7},0).wait(1).to({scaleX:0.4451,scaleY:0.5202,skewX:-7.0612,skewY:179.9197,x:-241.15,y:23.1},0).wait(1).to({scaleX:0.4387,scaleY:0.516,skewX:-9.4149,skewY:179.8929,x:-253.25,y:20.6},0).wait(1).to({scaleX:0.4323,scaleY:0.5117,skewX:-16.7691,skewY:174.8656,x:-272.4,y:16.9},0).wait(1).to({scaleX:0.4259,scaleY:0.5075,skewX:-24.1233,skewY:169.8384,x:-291.6,y:13.1},0).wait(1).to({scaleX:0.4195,scaleY:0.5033,skewX:-31.4775,skewY:164.8112,x:-310.9,y:9.25},0).wait(1).to({scaleX:0.413,scaleY:0.4717,skewX:-28.9678,skewY:167.321,x:-316.7,y:8.95},0).wait(1).to({scaleX:0.4066,scaleY:0.4402,skewX:-26.4581,skewY:169.8308,x:-322.4,y:8.65},0).wait(1).to({scaleX:0.4002,scaleY:0.4087,skewX:-23.9484,skewY:172.3407,x:-328.15,y:8.3},0).wait(1).to({scaleX:0.4058,scaleY:0.3982,skewX:-19.1932,skewY:170.4723,x:-333.9,y:8.35},0).wait(1).to({scaleX:0.4113,scaleY:0.3877,skewX:-14.4381,skewY:168.604,x:-339.65},0).wait(1).to({scaleX:0.4168,scaleY:0.3771,skewX:-9.6829,skewY:166.7356,x:-345.45,y:8.3},0).wait(1).to({scaleX:0.4224,scaleY:0.3666,skewX:-4.9278,skewY:164.8673,x:-351.2,y:8.15},0).wait(1).to({scaleX:0.4279,scaleY:0.366,skewX:-1.1873,skewY:168.6155,x:-357.35,y:13.55},0).wait(1).to({scaleX:0.4335,scaleY:0.3655,skewX:2.5532,skewY:172.3638,x:-363.4,y:18.85},0).wait(1).to({scaleX:0.439,scaleY:0.365,skewX:6.2937,skewY:176.112,x:-369.55,y:24.15},0).wait(1).to({scaleX:0.4446,scaleY:0.3644,skewX:10.0342,skewY:179.8603,x:-375.7,y:29.45},0).wait(1).to({scaleX:0.4986,scaleY:0.3591,skewX:7.8729,skewY:179.8609,x:-379.05,y:32},0).wait(1).to({scaleX:0.5527,scaleY:0.3538,skewX:5.7117,skewY:179.8614,x:-382.45,y:34.45},0).wait(1).to({scaleX:0.6067,scaleY:0.3484,skewX:3.5504,skewY:179.862,x:-385.85,y:37},0).wait(1).to({scaleX:0.5991,scaleY:0.372,skewX:15.275,skewY:179.8638,x:-401,y:51.15},0).to({_off:true},1).wait(29));

	// raft_finalborad
	this.instance_3 = new lib.raft_alone_1();
	this.instance_3.setTransform(-84.45,68.7,0.6168,0.6181,0,0,0,214.9,132);
	this.instance_3._off = true;

	this.text = new cjs.Text("כל הכבוד פרוגי!", "35px 'Heebo'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.lineWidth = 255;
	this.text.parent = this;
	this.text.setTransform(-17.05,-132.7);

	this.instance_4 = new lib.brownborad_1();
	this.instance_4.setTransform(-17.05,-108.45,0.878,0.7168,0,0,0,154.8,56.5);

	this.text_1 = new cjs.Text("שחקו שוב", "bold 20px 'Heebo'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 31;
	this.text_1.lineWidth = 94;
	this.text_1.parent = this;
	this.text_1.setTransform(-156.35,139.1);

	this.instance_5 = new lib.end_btn();
	this.instance_5.setTransform(-193.8,163.85,1.0005,0.994,0,0,0,87.8,40.1);

	this.text_2 = new cjs.Text("תפריט ראשי", "bold 20px 'Heebo'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 31;
	this.text_2.lineWidth = 125;
	this.text_2.parent = this;
	this.text_2.setTransform(21.45,139.1);

	this.instance_6 = new lib.end_btn();
	this.instance_6.setTransform(-24.95,163.85,1.0005,0.994,0,0,0,87.8,40.1);

	this.text_3 = new cjs.Text("ציון סופי:", "bold 20px 'Heebo'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 31;
	this.text_3.lineWidth = 373;
	this.text_3.parent = this;
	this.text_3.setTransform(70.45,82);

	this.text_4 = new cjs.Text("שגיאות:", "bold 20px 'Heebo'");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 31;
	this.text_4.lineWidth = 373;
	this.text_4.parent = this;
	this.text_4.setTransform(70.45,22);

	this.text_5 = new cjs.Text("זמן: ", "bold 20px 'Heebo'");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 31;
	this.text_5.lineWidth = 373;
	this.text_5.parent = this;
	this.text_5.setTransform(70.45,-38);

	this.instance_7 = new lib.finalborad_1();
	this.instance_7.setTransform(-119.3,143.3,0.7757,0.8121,0,0,0,344.9,284.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},23).to({state:[{t:this.instance_7},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.instance_6},{t:this.text_2},{t:this.instance_5},{t:this.text_1},{t:this.instance_4},{t:this.text}]},16).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(33).to({_off:true},16).wait(3));

	// walking_frogi
	this.instance_8 = new lib.jumper();
	this.instance_8.setTransform(-434.8,41.75,0.3878,0.4391,0,-2.8466,-12.8298,101.9,64);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({_off:false},0).wait(1).to({regX:115,regY:117,scaleX:0.382,scaleY:0.4444,skewX:-1.4047,skewY:-10.3252,x:-433.35,y:86.25},0).wait(1).to({scaleX:0.3763,scaleY:0.4497,skewX:0.0379,skewY:-7.8176,x:-438,y:108.55},0).wait(1).to({scaleX:0.3705,scaleY:0.455,skewX:1.4806,skewY:-5.3099,x:-442.65,y:130.9},0).wait(1).to({scaleX:0.3647,scaleY:0.4603,skewX:2.9232,skewY:-2.8022,x:-447.35,y:153.25},0).wait(1).to({scaleX:0.359,scaleY:0.4656,skewX:4.3659,skewY:-0.2946,x:-452.05,y:175.5},0).wait(1).to({scaleX:0.3532,scaleY:0.4709,skewX:5.8085,skewY:2.2131,x:-456.75,y:197.75},0).wait(1).to({scaleX:0.3474,scaleY:0.4761,skewX:6.251,skewY:3.7206,x:-459.4,y:200.45},0).wait(1).to({scaleX:0.3417,scaleY:0.4814,skewX:6.6935,skewY:5.2281,x:-462,y:203.1},0).wait(1).to({scaleX:0.3359,scaleY:0.4867,skewX:7.136,skewY:6.7357,x:-464.65,y:205.75},0).wait(1).to({scaleX:0.3301,scaleY:0.492,skewX:7.5784,skewY:8.2432,x:-467.3,y:208.4},0).wait(1).to({scaleX:0.3362,scaleY:0.4828,skewX:8.0209,skewY:9.7507,x:-469.8,y:213.75},0).wait(1).to({scaleX:0.3422,scaleY:0.4736,skewX:8.4634,skewY:11.2582,x:-472.25,y:219.1},0).wait(1).to({scaleX:0.3483,scaleY:0.4643,skewX:8.9059,skewY:12.7657,x:-474.75,y:224.4},0).wait(1).to({scaleX:0.3543,scaleY:0.4551,skewX:9.3484,skewY:14.2732,x:-477.25,y:229.8},0).wait(1).to({scaleX:0.3603,scaleY:0.4458,skewX:9.7909,skewY:15.7807,x:-479.7,y:235.1},0).wait(1).to({scaleX:0.3664,scaleY:0.4366,skewX:10.2334,skewY:17.2883,x:-482.15,y:240.45},0).wait(1).to({scaleX:0.3724,scaleY:0.4273,skewX:6.176,skewY:14.296,x:-484.2,y:244.3},0).wait(1).to({scaleX:0.3785,scaleY:0.4181,skewX:2.1187,skewY:11.3037,x:-486.2,y:248.05},0).wait(1).to({scaleX:0.3845,scaleY:0.4089,skewX:-1.9386,skewY:8.3114,x:-488.4,y:251.55},0).wait(1).to({scaleX:0.3905,scaleY:0.3996,skewX:-5.9959,skewY:5.3191,x:-490.6,y:255},0).wait(1).to({scaleX:0.3966,scaleY:0.3904,skewX:-10.0532,skewY:2.3268,x:-492.95,y:258.35},0).wait(1).to({scaleX:0.401,scaleY:0.3896,skewX:1.7913,skewY:2.3448,x:-497.1,y:258.65},0).wait(1).to({scaleX:0.4054,scaleY:0.3888,skewX:13.6357,skewY:2.3628,x:-501.2,y:258},0).wait(1).to({scaleX:0.4098,scaleY:0.4328,skewX:13.6463,skewY:2.3741,x:-501.75,y:260.3},0).wait(1).to({scaleX:0.4142,scaleY:0.4767,skewX:13.657,skewY:2.3855,x:-502.2,y:262.55},0).wait(1).to({scaleX:0.4187,scaleY:0.5207,skewX:13.6676,skewY:2.3969,x:-502.75,y:264.8},0).wait(1).to({_off:true},1).wait(1));

	// happyfrogs
	this.instance_9 = new lib.HappyFrogi();
	this.instance_9.setTransform(-490.6,279.85,0.9222,0.9215,0,0,0,54,79.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-565.3,-148.9,948.1999999999999,523.7);


(lib.progressFrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// frogi
	this.instance = new lib.frogiprogressstatic();
	this.instance.setTransform(36.5,34,1,1,0,0,0,36.5,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-47.6,regY:113.8,x:-55.45,y:113.8},0).wait(1).to({x:-63.3},0).wait(1).to({x:-71.2},0).wait(1).to({x:-79.05},0).wait(1).to({x:-86.9},0).wait(1).to({x:-94.8},0).wait(1).to({x:-102.65},0).wait(1).to({x:-110.5},0).wait(1).to({x:-118.4},0).wait(1).to({x:-126.25},0).wait(1).to({x:-134.1},0).wait(1).to({x:-142},0).wait(1).to({x:-149.85},0).wait(1).to({x:-157.75},0).wait(3));

	// waves
	this.instance_1 = new lib.waves_1();
	this.instance_1.setTransform(-55.45,118.85,0.3165,0.3786,0,0,0,204.9,122.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:206.8,regY:122.9,x:-62.75,y:118.9},0).wait(1).to({x:-70.65},0).wait(1).to({x:-78.6},0).wait(1).to({x:-86.5},0).wait(1).to({x:-94.45},0).wait(1).to({x:-102.35},0).wait(1).to({x:-110.25},0).wait(1).to({x:-118.2},0).wait(1).to({x:-126.1},0).wait(1).to({x:-134.05},0).wait(1).to({x:-141.95},0).wait(1).to({x:-149.9},0).wait(1).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.3,72.4,226,93.1);


(lib.FrogiAQ_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.frgiraft_1();
	this.instance_1.setTransform(572.2,-5.9,0.6886,0.6808,0,0,0,52.5,55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:56,x:625.7,y:28.35},0).wait(1).to({x:679.25,y:62.5},0).wait(1).to({x:732.8,y:96.65},0).wait(1).to({x:786.35,y:130.85},0).wait(1).to({x:839.9,y:165},0).wait(1).to({x:893.45,y:199.2},0).wait(1).to({x:947,y:233.35},0).wait(1).to({x:1000.55,y:267.55},0).wait(1).to({x:1054.1,y:301.7},0).wait(1).to({x:1107.65,y:335.9},0).wait(1).to({x:1161.2,y:370.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(536.1,-43.9,661.3000000000001,452.09999999999997);


(lib.frogiraft_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.FrogiAQ_1();
	this.instance_2.setTransform(78.45,65.85,1,1.101,0,0,0,588.5,12);

	this.instance_3 = new lib.raft_alone_2();
	this.instance_3.setTransform(132.65,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiraft_1, new cjs.Rectangle(-0.3,-0.3,265.90000000000003,164.10000000000002), null);


(lib.FrogiSideLook_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// jumpingFrogi
	this.instance = new lib.jumperfrogi();
	this.instance.setTransform(78,78.8,0.6539,0.3383,0,0,180,9.2,91.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:94,regY:93.5,skewX:14.9997,skewY:194.9997,x:-20.45,y:6.4},0).wait(1).to({skewX:10.7141,skewY:190.7141,x:-33.75,y:6.8},0).wait(1).to({skewX:6.4284,skewY:186.4284,x:-46.7,y:7.4},0).wait(1).to({skewX:2.1428,skewY:182.1428,x:-59.25,y:7.95},0).wait(1).to({skewX:-2.1428,skewY:177.8572,x:-89.95,y:22.9},0).wait(1).to({skewX:-6.4284,skewY:173.5716,x:-120.5,y:37.9},0).wait(1).to({skewX:-10.7141,skewY:169.2859,x:-132.2,y:52},0).wait(1).to({skewX:-14.9997,skewY:165.0003,x:-143.65,y:66.1},0).to({_off:true},1).wait(1));

	// frogi
	this.instance_1 = new lib.FrogiSideLook_1();
	this.instance_1.setTransform(46,64.6,0.8768,0.8768,0,0,0,52.3,56);

	this.instance_2 = new lib.FrogiQanimiton();
	this.instance_2.setTransform(-239.7,123.8,1,1,0,0,0,553.6,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},1).to({state:[{t:this.instance_2}]},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.3,-39.9,349.5,219.70000000000002);


(lib.BetweenQA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bubbles
	this.instance = new lib.waves_1();
	this.instance.setTransform(-21.2,81.9,1,1,0,0,0,206.8,122.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({x:-70.2},0).wait(1).to({x:-119.25},0).wait(1).to({x:-168.25},0).wait(1).to({x:-217.3},0).wait(1).to({x:-233.45},0).wait(1).to({x:-249.65},0).wait(1).to({x:-265.8},0).wait(1).to({x:-282},0).wait(1).to({x:-335.8,y:82.25},0).wait(1).to({x:-389.65,y:82.55},0).wait(1).to({x:-433.75},0).wait(1).to({x:-477.9},0).wait(1).to({x:-552.4},0).wait(1).to({x:-626.9},0).wait(1).to({x:-651.7,y:78.95},0).wait(1).to({x:-676.5,y:75.35},0).wait(1).to({x:-721.6},0).wait(1).to({x:-766.7},0).wait(1).to({x:-807.85},0).wait(1).to({x:-862.75},0).wait(1).to({x:-917.65},0).wait(1).to({x:-972.6},0).wait(1));

	// frogiwithraft
	this.instance_1 = new lib.frogiraft_1();
	this.instance_1.setTransform(132.6,81.7,1,1,0,0,0,132.6,81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:343.5,regY:250.9,x:266.5,y:250.9},0).wait(1).to({x:189.45},0).wait(1).to({x:139.25},0).wait(1).to({x:89},0).wait(1).to({x:38.75},0).wait(1).to({x:-11.5},0).wait(1).to({x:-26.15},0).wait(1).to({x:-40.8},0).wait(1).to({x:-55.45},0).wait(1).to({x:-70.15},0).wait(1).to({x:-120.3},0).wait(1).to({x:-170.5},0).wait(1).to({x:-219.4},0).wait(1).to({x:-268.35},0).wait(1).to({x:-346.6},0).wait(1).to({x:-424.85},0).wait(1).to({x:-443.15},0).wait(1).to({x:-461.5},0).wait(1).to({x:-507.55},0).wait(1).to({x:-553.6},0).wait(1).to({x:-580.5},0).wait(1).to({x:-636.2},0).wait(1).to({x:-691.9},0).wait(1).to({x:-747.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1179.4,-47.5,1445,253);


// stage content:
(lib.GAMEL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var self = this; //הגדרת הבמה וכל הרכיבים הנמצאים בה
		
		self.stop();//עצירת כל הפריימים
		self.gotoAndStop(3);//פתיחת משחק בפריים בחירת משחק
		self.startbtn.gotoAndStop(0);//שנה צבע כפתור התחל כי לא נבחר עדיין נושא משחק
		
		//הגדרת המשתנים במשחק
		var myChoice = 0; //משתנה המכיל את הבחירה של נושא המשחק
		var myGame; //משתנה המכיל את המערכים הדו-ממדיים של המשחק
		var positionX; //X-משתנה שמכיל מערך של ציר ה
		var positionY; //Yמשתנה שמכיל מערך של ציר ה
		var randomPositionX; //באופן רנדומלי Xמשתנה שמסדר את המערך של ציר ה 
		var randomPositionY; //באופן רנדומלי Yמשתנה שמסדר את המערך של ציר ה
		var question; //משתנה המכיל הפניה לשאלה באופן רנדומלי
		var counter = 10; //משתנה המכיל את מספר השאלות שיופיעו בסך הכל במשחק
		sumScore = []; //מערך ביניים מכיל ניקוד יחסי של שאלות
		var grade = 0; //ציון סופי
		var totalQuestions = 10; //סך השאלות במשחק
		var setTime; //משתנה שיכיל את הגדרת הזמן עבור כל שאלה
		var timeCounter = 30; //משתנה המכיל את השניות לכל שאלה
		var sumErrors = 0; //משתנה המכיל את סך כל השגיאות
		var setGlobalTime; //משתנה שיכיל את הגדרת הזמן עבור כל המשחק
		var globalTimeCounter = 0; //משתנה המכיל את ספירת הזמן בשניות לכל המשחק
		
		//פונקציה שיוצרת מיקום מסיחים
		function createPositionXY() {
			positionX = [46, 503, 770, 253];
			positionY = [177, 195, 382, 375];
		}
		
		//הגדרת תפריט בחירת נושא המשחק
		var forCombo = new lib.forCombo(); //יצירת תפריט בחירת נושא על הבמה
		forCombo.x = 705.8; //הגדרת מיקום התפריט
		forCombo.y = 380.45; //הגדרת מיקום התפריט
		stage.addChild(forCombo); //הוספת התפריט לבמה
		$("#dom_overlay_container").on("change", "#mycb", mycb_change); //הגדרת התנהגות תפריט בחירת נושא המשחק
		
		function mycb_change(evt) { //פונקציה המגדירה את התנהגות תפריט המשחק
			myChoice = evt.currentTarget.value; //ציון הנושא שהשחקן בחר למשחק
			if (myChoice == 0) { //אם לא נבחר נושא
				self.startbtn.removeEventListener("click", fl_ClickToPosition); //הסרת מאזין לכפתור התחלת משחק
				self.startbtn.gotoAndStop(0);//אם השחקן לא בחר נושא משחק כפתור התחל לא פעיל
			} else { //אם נבחר נושא
				self.startbtn.gotoAndStop(1);//אם השחקן בחר נושא משחק כפתור התחל פעיל
				self.startbtn.addEventListener("click", fl_ClickToPosition); //הוספת מאזין לכפתור התחלת משחק
			}
		}
		
		function fl_ClickToPosition() { //פונקציה המגדירה את ההפניה לסוג נושא המשק
			stage.removeChild(forCombo); //לאחר בחירה בנושא המשחק הסרת תפריט הבחירה מהבמה
			if (myChoice == 1) { //אם נושא המשחק הוא גיאוגרפיה
				firstGameFunc(); //גש למשחק גיאוגרפיה
			} else if (myChoice == 2) { //אם נושא המשחק הוא חשבון
				secondGameFunc(); //גש למשחק חשבון
			}
		}
		
		//פונקציה שיוצרת את מערך המסיחים למשחק הראשון
		function firstGameFunc() {
			myGame = [
				[
					["?מי הוא האוקיינוס הגדול ביותר המחבר את יבשות אמריקה עם אסיה ואוסטרליה", 1, "SHOW"],
					["האוקיינוס האטלנטי", "true"],
					["האוקיינוס השקט", "false"],
					["האוקיינוס ההודי", "false"],
					[lib.img_1, "false"]
				],
				[
					["בגבול הצפוני של ישראל נמצאת המדינה", 1, "SHOW"],
					["לבנון", "true"],
					["ירדן", "false"],
					["מצרים", "false"],
					["איטליה", "false"]
				],
				[
					["מדינת ישראל נמצאת ביבשת", 1, "SHOW"],
					["אסיה", "true"],
					["אוסטרליה", "false"],
					["ארצות הברית", "false"],
					["אירופה", "false"]
				],
				[
					["?מיהו ההר הגבוה ביותר בישראל", 1, "SHOW"],
					["הר החרמון", "true"],
					[lib.img_2, "false"],
					["הר גרזים", "false"],
					["הר ההימלאיה", "false"]
				],
				[
					["?מהו שמו של נחל קטן הנשפך אל נחל גדול יותר או לתוך נהר", 1, "SHOW"],
					["יובל", "true"],
					["נהר", "false"],
					["נחל", "false"],
					["פלג", "false"]
				],
				[
					["?מהו שטח מים, לרוב טבעי, המוקף יבשה ואינו מחובר לים או לאוקיינוס", 1, "SHOW"],
					["ימה", "true"],
					["גבעה", "false"],
					[lib.img_3, "false"],
					["מדבר", "false"]
				],
				[
					["לנוף הטבעי של מישור החוף התיכון והדרומי  מספר מאפיינים בולטים. בחרו מבין  המאפיינים הבאים את המאפיין שאינו מתאים למישור החוף התיכון והדרומי", 1, "SHOW"],
					["שטחי המישור ושטחי הגבעות מסודרים לאורכו של מישור החוף במעין ארבע רצועות של נוף:  שטחי החולות, גבעות הכורכר, גבעות החול האדום ורצועת המרזבה", "true"],
					["זהו אזור ארוך וצר שהולך ומתרחב מעט כלפי דרום", "false"],
					["קו החוף אינו ישר ויש בו מפרצים גדולים", "false"],
					["צורות הנוף העיקריות הן שטחי מישור וגבעות נמוכות שגובהם אינו עולה בדרך כלל על  מאה מטרים", "false"]
				],
				[
					["?איזה אזור לא נמצא בכלל בצפון הארץ", 1, "SHOW"],
					["השרון", "true"],
					["הגליל העליון", "false"],
					["הגליל התחתון", "false"],
					["עמק יזרעאל", "false"]
				],
				[
					["?מים טריטוריאליים הם", 1, "SHOW"],
					["נחשב כשטח תחת ריבונות של אותה המדינה, אך אפשרי המעבר בו לספינות זרות", "true"],
					["ים פתוח הוא שטח מים שאינו שייך לאף מדינה", "false"],
					["המים שבין קו הגבול הימי של המדינה לבין קו החוף שלה", "false"],
					["אף תשובה אינה נכונה", "false"]
				],
				[
					["?מי מבין המקומות בישראל נחשב פלא עולמי", 1, "SHOW"],
					["ים המלח", "true"],
					["הכותל המערבי", "false"],
					["הסחנה", "false"],
					["כל התשובות נכונות", "false"]
				]
			];
		
			startGame(); //הפעלת משחק ומעבר לקוד ראשי
		}
		
		//פונקציה שיוצרת את מערך המסיחים למשחק השני 
		function secondGameFunc() {
			myGame = [
				[],
				[]
			];
		
			startGame(); //הפעלת משחק ומעבר לקוד ראשי
		}
		
		//פונקציה פותחת
		function startGame() {
			self.gotoAndStop(0.1);//יש באג ידוע באנימייט שלא מאפשר לחזור לפריים 0 בצורה תקינה ולכן 0.1
			setGlobalTime = setInterval(globalTimer, 1000); //הפעלת ספירת זמן כל שניה עבור כל המשחק
			nextQuestion(); //קריאה לשאלה הבאה 
		}
		
		//פונקציה שיוצרת את השאלה והמסיחים על הבמה
		function nextQuestion() {
			self.gotoAndStop(4);
			createPositionXY(); //צור את מערך המיקומים מחדש
			randomQuestion(); //צור מספר שאלה רנדומלי
			while (myGame[question][0][2] == "NOSHOW") { //בדוק האם המספר הרנדומלי מחזיר שאלה שלא אמורה להופיע יותר
				randomQuestion(); //צור מספר שאלה רנדומלי
			}
			
			var questionTitel = new createjs.Text(); //צור כותרת לשאלה
			questionTitel.text = myGame[question][0][0]; //צור כותרת לשאלה עם תוכן
			questionTitel.name = "questionTitel"; //שם לכותרת
			//עיצוב גזע שאלה
			questionTitel.font = "14px Heebo";
			questionTitel.textAlign = "right";
			questionTitel.x=1230;
			questionTitel.y=70;
			questionTitel.lineWidth = 720;
			questionTitel.lineHeight = 30;
		
			stage.addChild(questionTitel);//הוספת גזע שאלה לבמה
			
			//לולאה שיוצרת את כל המסיחים על הבמה כולל ההתנהגות שלהם
			for (i = 1; i < myGame[question].length; i++) {
				randomPosition(); //צור מיקומים רנדומליים
				var box = new lib.questionBox(); //צור מלבנים לקראת טעינה
				box.x = randomPositionX; //מקם מלבן במיקום רנדומלי X
				box.y = randomPositionY; //מקם מלבן במיקום רנדומלי Y
				box.name = "question" + i; //שם המלבן
				stage.addChild(box); //הוסף מלבן לבמה
				box.addEventListener("click", checkAnswer); //הוסף מאזין למלבן
				box.gotoAndStop(0); //הפסק אנימציות מלבן
				//בדוק האם מדובר במחרוזת או תמונה
				var temp = myGame[question][i][0].toString();
				var let = temp.charAt(0);
		
				if (let == "f") { //אם מדובר בתמונה
					var img = new(myGame[question][i][0])(); //הגדר משתנה תמונה
					box.addChild(img); //מקם תמונה על מלבן
		
				} else { //אם מדובר במחרוזת
					var string = new createjs.Text(); //הגדר משתנה טקסט
					string.text = myGame[question][i][0]; //הגדר תוכן במשתנה טקסט
					box.addChild(string); //מקם טקסט על מלבן
					//הגדרות עיצוב
					string.font = "15px Arial";
					string.textAlign = "right";
					string.x = 247;
					string.y = 15;
					string.lineWidth = 247;
					string.lineHeight = 25;
				}
			}
			timeCounter = 30; //אפס את הזמן המוגדר לכל שאלה
			setTime = setInterval(timer, 1000); //הפעלת זמן פר שאלה
		}
		
		//פונקציה שמבצעת בדיקה האם הבחירה במסיח נכונה
		function checkAnswer(event) {
			clearInterval(setTime); //אפס את הגדרת הזמן לכל שאלה
			removeEventListener(); //בטל את כל המאזינים
			var boxNum = event.currentTarget.name.slice(-1); //שלוף את המספר של שם המלבן
			var boxAnswer = myGame[question][boxNum][1]; //בדוק האם התשובה היא נכונה
		
			if (boxAnswer == "true") { //אם התשובה נכונה
		
				var countRespone = myGame[question][0][1]; //שלוף את מספר ניסיונות המענה לשאלה
				var countGrade = 100 / (totalQuestions * countRespone); //בצע חישוב של נוסחת ציון ביניים
				sumScore.push(countGrade); //דחוף ציון למערך ציון ביניים
		
				myGame[question][0][2] = "NOSHOW"; //הגדר שאלה שלא תופיע יותר במשחק
		
				counter = counter - 1; //צמצם ב-1 את כמות השאלות שנותרו לשחקן
				if (counter == 0) { //אם כמות השאלות הגיעה ל-0
					clearInterval(globalTimeCounter); //עצור את ספירת הזמן לכל המשחק
					for (i = 0; i <= sumScore.length - 1; i++) { //בצע חישוב של ציון המשחק
						grade = grade + sumScore[i]; //סכום את מערך ביניים של ציון המשחק
					}
					event.currentTarget.gotoAndStop(1); //הצג אנימציה מלבן ירוק
					console.log(grade); //הדפס ציון סופי
					console.log(sumErrors); //הדפס מספר שגיאות כולל
					console.log(globalTimeCounter / 60); //הדפס זמן כולל בדקות
				} else { //אם כמות השאלות לא הגיעה ל-0
					event.currentTarget.gotoAndStop(1); //הצג אנימציה מלבן ירוק
					btnNext(); //הפעל כפתור המשך****לא יהיה בהמשך
				}
			} else { //אם התשובה לא נכונה
				sumErrors = sumErrors + 1;
				var countRespone = myGame[question][0][1]; //ציין בשאלה במערך מסיחים מספר ניסיון נוסף
				myGame[question][0][1] = countRespone + 1; //הוסף למספר הניסיון הקיים עוד 1
				event.currentTarget.gotoAndStop(2); //הצג אנימציה מלבן אדום
				btnNext(); //הפעל כפתור המשך***לא יהיה בהמשך
			}
		}
		
		//פונקציה שיוצרת מספר רנדומלי איתו אנחנו בוחרים תת-מערך מסיחים רנדומלי
		function randomQuestion() {
			question = parseInt(Math.random() * (9 + 1)) - (1) + 1;
		}
		
		//פונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית
		function randomPosition() {
			var randomPosition = parseInt(Math.random() * (3 + 1)) - (1) + 1;
			while (positionX[randomPosition] == null) {
				var randomPosition = parseInt(Math.random() * (3 + 1)) - (1) + 1;
			}
			randomPositionX = positionX[randomPosition];
			randomPositionY = positionY[randomPosition];
			positionX.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
			positionY.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
		}
		
		//פונקציה שמבצעת ביטול מאזינים
		function removeEventListener() {
			for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ביטול מאזינים לכל המאזינים על הבמה
				stage.getChildByName("question" + i).removeEventListener("click", checkAnswer);
			}
		}
		
		//פונקציה שמבצעת הפעלת מאזין לכפתור המשך
		function btnNext() {
			var btnNext = new lib.btn_continue(); //צור כפתור המשך
			stage.addChild(btnNext); //מקם כפתור המשך על הבמה
			btnNext.name = "next"; //שם לכפתור המשך
			btnNext.addEventListener("click", clearQuestionScreen); //הוספת מאזין לכפתור המשך עם הפניה לפונקציה שמנקה את הבמה
		}
		
		//פונקציה שמבצעת ניקוי הבמה
		function clearQuestionScreen() {
			clearScreen();
			nextQuestion(); //קריאה לפונקציה שיוצרת שאלה חדשה
		}
		
		//פונקציה שבמצעת ניקוי מסך - קוראים לפונקציה הזו מכל מני פונקציות אחרות
		function clearScreen(){
				for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ניקוי לכל האלמנטים שמופיעים על-גבי הבמה
				stage.removeChild(stage.getChildByName("question" + i));
			}
			stage.removeChild(stage.getChildByName("next")); //ניקוי כפתור המשך
			stage.removeChild(stage.getChildByName("questionTitel")); //ניקוי שאלה
		}
		
		//פונקציה שמבצעת ספירה לאחור מ-זמן מוגדר עבור כל שאלה
		function timer() {
			if (timeCounter == 0) { //אם הזמן המוגדר הגיע לאפס
				clearInterval(setTime); //אפס את הגדרת הזמן לכל שאלה
				removeEventListener(); //בטל את כל המאזינים
				timeUp();//גש לפונקציה שמבצעת פעולות מסוימות אם הזמן נגמר
			} else { //אם לא
				timeCounter--; //הורד בספרה אחת את הזמן המוגדר לכל שאלה
				console.log(timeCounter);
			}
		}
		
		//פונקציה שמבצעת פעולות מסוימות כאשר הזמן נגמר
		function timeUp() {
			clearScreen();//גש ונקה מסך
			self.gotoAndStop(1);//עבור לפריים בו מוצג הזמן נגמר
			self.btn_continue.addEventListener("click", clickContinueFromTimeUp);//הפעל מאזין לכפתור שנמצא על הבמה בפריים הזמן נגמר
		}
		
		//פונקציה שמבצעת איפוס אחרי לחיצה לחיצה על כפתור המשך מפריים הזמן נגמר
		function clickContinueFromTimeUp() {
			self.gotoAndStop(0.1);//יש באג ידוע באנימייט שלא מאפשר לחזור לפריים 0 בצורה תקינה ולכן 0.1
			nextQuestion();//הפעל פונקציה של השאלה הבאה
		}
		
		//פונקציה שמבצעת ספיקה קדימה מזמן אפס עבור כל המשחק
		function globalTimer() {
			globalTimeCounter = globalTimeCounter + 1; //הוסף שניה אחת לזמן אפס
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// MAIN
	this.instance = new lib.HappyFrogi();
	this.instance.setTransform(625,532.2,1.5463,1.5421,0,0,0,54,53.6);

	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(625.05,620,0.6792,0.6807,0,0,0,215,132.2);

	this.btn_continue = new lib.btn_continue();
	this.btn_continue.name = "btn_continue";
	this.btn_continue.setTransform(158,635.5,1,1,0,0,0,91,37.5);

	this.instance_2 = new lib.TimeoverH1png();
	this.instance_2.setTransform(292,140);

	this.timeovet_txt = new cjs.Text("לא נורא תהיה עוד הזדמנות לענות על השאלה", "normal 400 35px 'Heebo'");
	this.timeovet_txt.name = "timeovet_txt";
	this.timeovet_txt.textAlign = "center";
	this.timeovet_txt.lineHeight = 47;
	this.timeovet_txt.lineWidth = 648;
	this.timeovet_txt.parent = this;
	this.timeovet_txt.setTransform(627.15,337.65);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.timeovet_txt);
	}

	this.instance_3 = new lib.GameBackground();
	this.instance_3.setTransform(0,0,0.6691,0.5812);

	this.instance_4 = new lib.endingA();
	this.instance_4.setTransform(1173.4,428.35,1,1,0,0,0,132.6,81.6);

	this.instance_5 = new lib.PinkFrogi();
	this.instance_5.setTransform(397,556,0.6775,0.6799);

	this.instance_6 = new lib.GreenFrogi();
	this.instance_6.setTransform(296,556,0.6775,0.6799);

	this.instance_7 = new lib.BlueFrogi();
	this.instance_7.setTransform(196,556,0.6775,0.6799);

	this.instance_8 = new lib.CachedBmp_1();
	this.instance_8.setTransform(1.1,25.3,0.5,0.5);

	this.instance_9 = new lib.brown_borad();
	this.instance_9.setTransform(81.6,80.2,1,1,0,0,0,74.6,84.3);

	this.instance_10 = new lib.music_btn();
	this.instance_10.setTransform(252.45,72.55,1,1,0,0,0,36.5,33.5);

	this.instance_11 = new lib.mute_btn();
	this.instance_11.setTransform(203.95,72.55,1,1,0,0,0,36,33.5);

	this.instance_12 = new lib.EndAnimitonBackground();
	this.instance_12.setTransform(0,0,0.628,0.6424);

	this.instance_13 = new lib.Game_boradkey();
	this.instance_13.setTransform(1133.55,566.75,1,1,0,0,0,93,67);

	this.instance_14 = new lib.namegameH1();
	this.instance_14.setTransform(359,107);

	this.instance_15 = new lib.green_btn();
	this.instance_15.setTransform(859.55,494.5,1,1,0,0,0,270,44.5);

	this.startbtn = new lib.startButton();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(564.25,550.2,0.7321,0.7131,0,0,0,136.6,45.6);

	this.instance_16 = new lib.Homescreenbackground();
	this.instance_16.setTransform(0,0,0.6691,0.6929);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AG6FIQgogogMg0QhgAkiBAAQiSAAhnguQhKghgVgrQiKBcjEAAQjDAAiLhcQiKhcAAiBQAAiCCKhcQCLhcDDAAQDEAACKBcQCLBcAACCQAAAhgJAeQBcggB6AAQBWAABHAQIA2gBQD9AACyAiQCzAiAAAxQAAAwizAjIgdAFIAAAJQAABSg6A5Qg5A6hSAAQhRAAg6g6g");
	this.shape.setTransform(478.675,400.825);

	this.instance_17 = new lib.frogiprogressstatic();
	this.instance_17.setTransform(1113.5,671.8,1,1,0,0,0,-47.6,113.8);

	this.instance_18 = new lib.FrogiSideLook();
	this.instance_18.setTransform(1125,332,0.6886,0.6808);

	this.instance_19 = new lib.GEZA("synched",0);
	this.instance_19.setTransform(823.95,62.65,1,1,0,0,0,433.7,62.4);

	this.instance_20 = new lib.whiteline();
	this.instance_20.setTransform(-550,637,0.9511,1);

	this.instance_21 = new lib.bankofariver();
	this.instance_21.setTransform(136,637,1,1,0,0,180);

	this.instance_22 = new lib.bankofariver();
	this.instance_22.setTransform(1150,637);

	this.SubjectGame_txt = new cjs.Text("גיאוגרפיה", "14px 'Heebo'", "#FFFFFF");
	this.SubjectGame_txt.name = "SubjectGame_txt";
	this.SubjectGame_txt.textAlign = "center";
	this.SubjectGame_txt.lineHeight = 23;
	this.SubjectGame_txt.lineWidth = 129;
	this.SubjectGame_txt.parent = this;
	this.SubjectGame_txt.setTransform(76.6,113.15);

	this.instance_23 = new lib.CachedBmp_2();
	this.instance_23.setTransform(1.15,25.3,0.5,0.5);

	this.instance_24 = new lib.mc_raft();
	this.instance_24.setTransform(386.45,506.6,0.7067,0.5182,0,0,0,277.3,193.5);

	this.instance_25 = new lib.mc_raft();
	this.instance_25.setTransform(202.65,316.6,0.7067,0.5182,0,0,0,309.2,215.8);

	this.instance_26 = new lib.mc_raft();
	this.instance_26.setTransform(904.1,483.65,0.7067,0.5182,0,0,0,277.5,193.7);

	this.instance_27 = new lib.mc_raft();
	this.instance_27.setTransform(636.8,305.95,0.7067,0.5182,0,0,0,277.4,193.5);

	this.instance_28 = new lib.stopbutton_1();
	this.instance_28.setTransform(295.1,72.6,1,1,0,0,0,36.5,33.5);

	this.instance_29 = new lib.FrogiSideLook_2();
	this.instance_29.setTransform(1004.25,410.25,0.8571,0.8929);

	this.instance_30 = new lib.OpenanimitonBackground();
	this.instance_30.setTransform(0,0,0.6695,0.6851);

	this.instance_31 = new lib.btn_continue();
	this.instance_31.setTransform(158,635.5,1,1,0,0,0,91,37.5);

	this.instance_32 = new lib.PauseH1();
	this.instance_32.setTransform(292,140);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#55851D").s().p("AgMDfIgBhqQAAgNgEgHQgGgIgNgBIgYAAQgbAAgXgTQgWgTgIgcQgHgZAHgdQAGgaARgYQAcgnA5ggIAAhEIAVgFIALAzQALgKAPABQgCAnAWAgIAOAUQAIAMACAKQABAIgCANIgDAVQAAAMAGAJQAGAJAKABQAGAAAKgEQALgFAFAAQAMAAAHAMQAFALAAAPQABAwgbA3QgMAagQAKQgKAHgSAEIgfAGIgEAlQgKADgJAAQgKAAgKgEgAA/CBIgFAIIgGADIgVAFIAugEIgBgRQgBgKgHgFQAAAFgFAPgAgrhtIgKAJQgDADgQAIQgaANgLAfQgJAYAEAgQAEAeARAGQAFACAKAAIAuAAQAEgMgNgXQgOgUAHgNIAIgLQALgOgCgZIgCgVQAAgMABgJIgDAAQgEAAgEACg");
	this.shape_1.setTransform(257.2755,176.4315);

	this.instance_33 = new lib.progressFrogi();
	this.instance_33.setTransform(1161.1,558);

	this.instance_34 = new lib.BetweenQA();
	this.instance_34.setTransform(1225.35,404.45,0.9455,0.8871,0,0,0,132.6,81.8);

	this.instance_35 = new lib.CachedBmp_3();
	this.instance_35.setTransform(1.15,25.3,0.5,0.5);

	this.instance_36 = new lib.questionField();
	this.instance_36.setTransform(577.15,126.75,1,1,0,0,0,444.1,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{scaleX:0.6691,scaleY:0.5812,x:0}},{t:this.timeovet_txt,p:{x:627.15,y:337.65,text:"לא נורא תהיה עוד הזדמנות לענות על השאלה",font:"normal 400 35px 'Heebo'",color:"#000000",lineHeight:46.85,lineWidth:648,textAlign:"center"}},{t:this.instance_2},{t:this.btn_continue},{t:this.instance_1,p:{regX:215,regY:132.2,scaleX:0.6792,scaleY:0.6807,x:625.05,y:620}},{t:this.instance,p:{scaleX:1.5463,scaleY:1.5421,x:625,y:532.2,regX:54,regY:53.6}}]},1).to({state:[{t:this.instance_12},{t:this.instance_11,p:{y:72.55}},{t:this.instance_10,p:{y:72.55,x:252.45}},{t:this.instance_9},{t:this.instance_8},{t:this.timeovet_txt,p:{x:76.6,y:113.15,text:"גיאוגרפיה",font:"normal 400 14px 'Heebo'",color:"#FFFFFF",lineHeight:22.55,lineWidth:129,textAlign:"center"}},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.shape},{t:this.instance_16},{t:this.startbtn},{t:this.instance_11,p:{y:72.5}},{t:this.instance_10,p:{y:72.5,x:252.45}},{t:this.instance_15},{t:this.timeovet_txt,p:{x:916.7,y:269.95,text:"עזרו לי להצטרף אל החברים שלי\nפרוגי לא יודע לשחות והוא צריך לעבור בהצלחה את הנהר כדי להצטרף לחבריו",font:"normal 400 14px 'Heebo'",color:"#000000",lineHeight:22.55,lineWidth:385,textAlign:"right"}},{t:this.instance_14},{t:this.instance,p:{scaleX:1.0259,scaleY:1.028,x:548.1,y:469.75,regX:54,regY:53.6}},{t:this.instance_13,p:{x:1133.55,y:566.75}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.6653,scaleY:0.5719,x:-1}},{t:this.instance_1,p:{regX:215.2,regY:132.4,scaleX:0.5831,scaleY:0.5483,x:1225.5,y:404.5}},{t:this.instance_11,p:{y:72.5}},{t:this.instance_10,p:{y:72.55,x:249.05}},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_9},{t:this.instance_23},{t:this.SubjectGame_txt},{t:this.instance_22},{t:this.instance_21},{t:this.timeovet_txt,p:{x:19.7,y:594.45,text:"1\\10",font:"normal 400 14px 'Heebo'",color:"#000000",lineHeight:22.55,lineWidth:35,textAlign:""}},{t:this.instance_13,p:{x:1151,y:189.65}},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]},1).to({state:[{t:this.instance_30},{t:this.instance_11,p:{y:72.5}},{t:this.instance_10,p:{y:72.5,x:252.45}},{t:this.instance_29},{t:this.instance_1,p:{regX:215.1,regY:132.2,scaleX:0.4745,scaleY:0.4461,x:866.75,y:555.95}}]},1).to({state:[{t:this.shape_1},{t:this.instance_3,p:{scaleX:0.6691,scaleY:0.5812,x:0}},{t:this.timeovet_txt,p:{x:314.85,y:363.05,text:"פרוגי לא אוהב לחכות יותר מידי אז חזרו מהר",font:"normal 400 35px 'Heebo'",color:"#000000",lineHeight:53.4,lineWidth:637,textAlign:""}},{t:this.instance_32},{t:this.instance_1,p:{regX:215,regY:132.2,scaleX:0.6792,scaleY:0.6807,x:625.05,y:620}},{t:this.instance,p:{scaleX:1.5463,scaleY:1.5421,x:625.15,y:532.05,regX:54.1,regY:53.5}},{t:this.instance_31}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.6653,scaleY:0.5719,x:-1}},{t:this.instance_11,p:{y:72.5}},{t:this.instance_10,p:{y:72.55,x:249.05}},{t:this.instance_28},{t:this.instance_36},{t:this.instance_9},{t:this.instance_35},{t:this.SubjectGame_txt},{t:this.instance_13,p:{x:1151,y:189.65}},{t:this.instance_34},{t:this.instance_19},{t:this.instance_22},{t:this.instance_21},{t:this.timeovet_txt,p:{x:19.35,y:594.45,text:"1\\10",font:"normal 400 14px 'Heebo'",color:"#000000",lineHeight:22.55,lineWidth:35,textAlign:""}},{t:this.instance_20},{t:this.instance_33}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1351.1,741.4);
// library properties:
lib.properties = {
	id: '6BF547886BE25247839B6B22E36D372B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/EndAnimitonBackground.png?1643207469051", id:"EndAnimitonBackground"},
		{src:"images/img_temp_2.jpg?1643207469051", id:"img_temp_2"},
		{src:"images/img_temp_3.jpg?1643207469051", id:"img_temp_3"},
		{src:"images/img_temp_4.jpg?1643207469051", id:"img_temp_4"},
		{src:"images/GAMEL_atlas_1.png?1643207468936", id:"GAMEL_atlas_1"},
		{src:"images/GAMEL_atlas_2.png?1643207468936", id:"GAMEL_atlas_2"},
		{src:"images/GAMEL_atlas_3.png?1643207468936", id:"GAMEL_atlas_3"},
		{src:"images/GAMEL_atlas_4.png?1643207468936", id:"GAMEL_atlas_4"},
		{src:"images/GAMEL_atlas_5.png?1643207468937", id:"GAMEL_atlas_5"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1643207469051", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1643207469051", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1643207469051", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1643207469051", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6BF547886BE25247839B6B22E36D372B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;