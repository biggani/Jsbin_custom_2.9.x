(function(R, S) {
	function cb(a) {
		var b = Cd[a] = {},
			d, f;
		a = a.split(/\s+/);
		d = 0;
		for (f = a.length; d < f; d++) b[a[d]] = true;
		return b
	}
	function Ab(a, b, d) {
		if (d === S && a.nodeType === 1) {
			d = "data-" + b.replace(Wd, "-$1").toLowerCase();
			d = a.getAttribute(d);
			if (typeof d === "string") {
				try {
					d = d === "true" ? true : d === "false" ? false : d === "null" ? null : c.isNumeric(d) ? parseFloat(d) : Xd.test(d) ? c.parseJSON(d) : d
				} catch (f) {}
				c.data(a, b, d)
			} else d = S
		}
		return d
	}
	function jb(a) {
		for (var b in a) if (!(b === "data" && c.isEmptyObject(a[b]))) if (b !== "toJSON") return false;
		return true
	}
	function Ia(a, b, d) {
		var f = b + "defer",
			l = b + "queue",
			p = b + "mark",
			i = c._data(a, f);
		if (i && (d === "queue" || !c._data(a, l)) && (d === "mark" || !c._data(a, p))) setTimeout(function() {
			if (!c._data(a, l) && !c._data(a, p)) {
				c.removeData(a, f, true);
				i.fire()
			}
		}, 0)
	}
	function J() {
		return false
	}
	function la() {
		return true
	}
	function Za(a) {
		return !a || !a.parentNode || a.parentNode.nodeType === 11
	}
	function ub(a, b, d) {
		b = b || 0;
		if (c.isFunction(b)) return c.grep(a, function(l, p) {
			return !!b.call(l, p, l) === d
		});
		else if (b.nodeType) return c.grep(a, function(l) {
			return l === b === d
		});
		else if (typeof b === "string") {
			var f = c.grep(a, function(l) {
				return l.nodeType === 1
			});
			if (o.test(b)) return c.filter(b, f, !d);
			else b = c.filter(b, f)
		}
		return c.grep(a, function(l) {
			return c.inArray(l, b) >= 0 === d
		})
	}
	function Bb(a) {
		var b = ra.split("|");
		a = a.createDocumentFragment();
		if (a.createElement) for (; b.length;) a.createElement(b.pop());
		return a
	}
	function xc(a) {
		return c.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function pc(a, b) {
		if (!(b.nodeType !== 1 || !c.hasData(a))) {
			var d, f, l;
			f = c._data(a);
			a = c._data(b, f);
			var p = f.events;
			if (p) {
				delete a.handle;
				a.events = {};
				for (d in p) {
					f = 0;
					for (l = p[d].length; f < l; f++) c.event.add(b, d + (p[d][f].namespace ? "." : "") + p[d][f].namespace, p[d][f], p[d][f].data)
				}
			}
			if (a.data) a.data = c.extend({}, a.data)
		}
	}
	function Qb(a, b) {
		var d;
		if (b.nodeType === 1) {
			b.clearAttributes && b.clearAttributes();
			b.mergeAttributes && b.mergeAttributes(a);
			d = b.nodeName.toLowerCase();
			if (d === "object") b.outerHTML = a.outerHTML;
			else if (d === "input" && (a.type === "checkbox" || a.type === "radio")) {
				if (a.checked) b.defaultChecked = b.checked = a.checked;
				if (b.value !== a.value) b.value = a.value
			} else if (d === "option") b.selected = a.defaultSelected;
			else if (d === "input" || d === "textarea") b.defaultValue = a.defaultValue;
			b.removeAttribute(c.expando)
		}
	}
	function lc(a) {
		return typeof a.getElementsByTagName !== "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll !== "undefined" ? a.querySelectorAll("*") : []
	}
	function cc(a) {
		if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
	}
	function Vc(a) {
		var b = (a.nodeName || "").toLowerCase();
		if (b === "input") cc(a);
		else b !== "script" && typeof a.getElementsByTagName !== "undefined" && c.grep(a.getElementsByTagName("input"), cc)
	}
	function Fc(a) {
		var b = Aa.createElement("div");
		aa.appendChild(b);
		b.innerHTML = a.outerHTML;
		return b.firstChild
	}
	function Gc(a, b) {
		b.src ? c.ajax({
			url: b.src,
			async: false,
			dataType: "script"
		}) : c.globalEval((b.text || b.textContent || b.innerHTML || "").replace(L, "/*$0*/"));
		b.parentNode && b.parentNode.removeChild(b)
	}
	function Hc(a, b, d) {
		var f = b === "width" ? a.offsetWidth : a.offsetHeight,
			l = b === "width" ? Ca : Ma,
			p = 0,
			i = l.length;
		if (f > 0) {
			if (d !== "border") for (; p < i; p++) {
				d || (f -= parseFloat(c.css(a, "padding" + l[p])) || 0);
				if (d === "margin") f += parseFloat(c.css(a, d + l[p])) || 0;
				else f -= parseFloat(c.css(a, "border" + l[p] + "Width")) || 0
			}
			return f + "px"
		}
		f = rb(a, b, b);
		if (f < 0 || f == null) f = a.style[b] || 0;
		f = parseFloat(f) || 0;
		if (d) for (; p < i; p++) {
			f += parseFloat(c.css(a, "padding" + l[p])) || 0;
			if (d !== "padding") f += parseFloat(c.css(a, "border" + l[p] + "Width")) || 0;
			if (d === "margin") f += parseFloat(c.css(a, d + l[p])) || 0
		}
		return f + "px"
	}
	function Ic(a) {
		return function(b, d) {
			if (typeof b !== "string") {
				d = b;
				b = "*"
			}
			if (c.isFunction(d)) {
				b = b.toLowerCase().split(dc);
				for (var f = 0, l = b.length, p, i; f < l; f++) {
					p = b[f];
					if (i = /^\+/.test(p)) p = p.substr(1) || "*";
					p = a[p] = a[p] || [];
					p[i ? "unshift" : "push"](d)
				}
			}
		}
	}
	function yc(a, b, d, f, l, p) {
		l = l || b.dataTypes[0];
		p = p || {};
		p[l] = true;
		l = a[l];
		for (var i = 0, B = l ? l.length : 0, C = a === Fa, t; i < B && (C || !t); i++) {
			t = l[i](b, d, f);
			if (typeof t === "string") if (!C || p[t]) t = S;
			else {
				b.dataTypes.unshift(t);
				t = yc(a, b, d, f, t, p)
			}
		}
		if ((C || !t) && !p["*"]) t = yc(a, b, d, f, "*", p);
		return t
	}
	function ad(a, b) {
		var d, f, l = c.ajaxSettings.flatOptions || {};
		for (d in b) if (b[d] !== S)(l[d] ? a : f || (f = {}))[d] = b[d];
		f && c.extend(true, a, f)
	}
	function bd(a, b, d, f) {
		if (c.isArray(b)) c.each(b, function(p, i) {
			d || Nb.test(a) ? f(a, i) : bd(a + "[" + (typeof i === "object" || c.isArray(i) ? p : "") + "]", i, d, f)
		});
		else if (!d && b != null && typeof b === "object") for (var l in b) bd(a + "[" + l + "]", b[l], d, f);
		else f(a, b)
	}
	function Jc(a, b, d) {
		var f = a.contents,
			l = a.dataTypes,
			p = a.responseFields,
			i, B, C, t;
		for (B in p) if (B in d) b[p[B]] = d[B];
		for (; l[0] === "*";) {
			l.shift();
			if (i === S) i = a.mimeType || b.getResponseHeader("content-type")
		}
		if (i) for (B in f) if (f[B] && f[B].test(i)) {
			l.unshift(B);
			break
		}
		if (l[0] in d) C = l[0];
		else {
			for (B in d) {
				if (!l[0] || a.converters[B + " " + l[0]]) {
					C = B;
					break
				}
				t || (t = B)
			}
			C = C || t
		}
		if (C) {
			C !== l[0] && l.unshift(C);
			return d[C]
		}
	}
	function cd(a, b) {
		if (a.dataFilter) b = a.dataFilter(b, a.dataType);
		var d = a.dataTypes,
			f = {},
			l, p, i = d.length,
			B, C = d[0],
			t, da, W, ga, ca;
		for (l = 1; l < i; l++) {
			if (l === 1) for (p in a.converters) if (typeof p === "string") f[p.toLowerCase()] = a.converters[p];
			t = C;
			C = d[l];
			if (C === "*") C = t;
			else if (t !== "*" && t !== C) {
				da = t + " " + C;
				W = f[da] || f["* " + C];
				if (!W) {
					ca = S;
					for (ga in f) {
						B = ga.split(" ");
						if (B[0] === t || B[0] === "*") if (ca = f[B[1] + " " + C]) {
							ga = f[ga];
							if (ga === true) W = ca;
							else if (ca === true) W = ga;
							break
						}
					}
				}
				W || ca || c.error("No conversion from " + da.replace(" ", " to "));
				if (W !== true) b = W ? W(b) : ca(ga(b))
			}
		}
		return b
	}
	function dd() {
		try {
			return new R.XMLHttpRequest
		} catch (a) {}
	}
	function mb() {
		try {
			return new R.ActiveXObject("Microsoft.XMLHTTP")
		} catch (a) {}
	}
	function ib() {
		setTimeout(vb, 0);
		return fa = c.now()
	}
	function vb() {
		fa = S
	}
	function sb(a, b) {
		var d = {};
		c.each(Y.concat.apply([], Y.slice(0, b)), function() {
			d[this] = a
		});
		return d
	}
	function ed(a) {
		if (!Wc[a]) {
			var b = Aa.body,
				d = c("<" + a + ">").appendTo(b),
				f = d.css("display");
			d.remove();
			if (f === "none" || f === "") {
				if (!Gb) {
					Gb = Aa.createElement("iframe");
					Gb.frameBorder = Gb.width = Gb.height = 0
				}
				b.appendChild(Gb);
				if (!e || !Gb.createElement) {
					e = (Gb.contentWindow || Gb.contentDocument).document;
					e.write((Aa.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>");
					e.close()
				}
				d = e.createElement(a);
				e.body.appendChild(d);
				f = c.css(d, "display");
				b.removeChild(Gb)
			}
			Wc[a] = f
		}
		return Wc[a]
	}
	function zc(a) {
		return c.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false
	}
	var Aa = R.document,
		Xc = R.navigator,
		Dd = R.location,
		c = function() {
			function a() {
				if (!b.isReady) {
					try {
						Aa.documentElement.doScroll("left")
					} catch (D) {
						setTimeout(a, 1);
						return
					}
					b.ready()
				}
			}
			var b = function(D, ha) {
					return new b.fn.init(D, ha, l)
				},
				d = R.jQuery,
				f = R.$,
				l, p = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				i = /\S/,
				B = /^\s+/,
				C = /\s+$/,
				t = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				da = /^[\],:{}\s]*$/,
				W = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				ga = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				ca = /(?:^|:|,)(?:\s*\[)+/g,
				Pa = /(webkit)[ \/]([\w.]+)/,
				Qa = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				bb = /(msie) ([\w.]+)/,
				fb = /(mozilla)(?:.*? rv:([\w.]+))?/,
				Rb = /-([a-z]|[0-9])/ig,
				Ta = /^-ms-/,
				nb = function(D, ha) {
					return (ha + "").toUpperCase()
				},
				Hb = Xc.userAgent,
				h, x, O = Object.prototype.toString,
				V = Object.prototype.hasOwnProperty,
				ea = Array.prototype.push,
				ia = Array.prototype.slice,
				xa = String.prototype.trim,
				Da = Array.prototype.indexOf,
				Xa = {};
			b.fn = b.prototype = {
				constructor: b,
				init: function(D, ha, wa) {
					var ja;
					if (!D) return this;
					if (D.nodeType) {
						this.context = this[0] = D;
						this.length = 1;
						return this
					}
					if (D === "body" && !ha && Aa.body) {
						this.context = Aa;
						this[0] = Aa.body;
						this.selector = D;
						this.length = 1;
						return this
					}
					if (typeof D === "string") if ((ja = D.charAt(0) === "<" && D.charAt(D.length - 1) === ">" && D.length >= 3 ? [null, D, null] : p.exec(D)) && (ja[1] || !ha)) if (ja[1]) {
						wa = (ha = ha instanceof b ? ha[0] : ha) ? ha.ownerDocument || ha : Aa;
						if (D = t.exec(D)) if (b.isPlainObject(ha)) {
							D = [Aa.createElement(D[1])];
							b.fn.attr.call(D, ha, true)
						} else D = [wa.createElement(D[1])];
						else {
							D = b.buildFragment([ja[1]], [wa]);
							D = (D.cacheable ? b.clone(D.fragment) : D.fragment).childNodes
						}
						return b.merge(this, D)
					} else {
						if ((ha = Aa.getElementById(ja[2])) && ha.parentNode) {
							if (ha.id !== ja[2]) return wa.find(D);
							this.length = 1;
							this[0] = ha
						}
						this.context = Aa;
						this.selector = D;
						return this
					} else return !ha || ha.jquery ? (ha || wa).find(D) : this.constructor(ha).find(D);
					else if (b.isFunction(D)) return wa.ready(D);
					if (D.selector !== S) {
						this.selector = D.selector;
						this.context = D.context
					}
					return b.makeArray(D, this)
				},
				selector: "",
				jquery: "1.7.1",
				length: 0,
				size: function() {
					return this.length
				},
				toArray: function() {
					return ia.call(this, 0)
				},
				get: function(D) {
					return D == null ? this.toArray() : D < 0 ? this[this.length + D] : this[D]
				},
				pushStack: function(D, ha, wa) {
					var ja = this.constructor();
					b.isArray(D) ? ea.apply(ja, D) : b.merge(ja, D);
					ja.prevObject = this;
					ja.context = this.context;
					if (ha === "find") ja.selector = this.selector + (this.selector ? " " : "") + wa;
					else if (ha) ja.selector = this.selector + "." + ha + "(" + wa + ")";
					return ja
				},
				each: function(D, ha) {
					return b.each(this, D, ha)
				},
				ready: function(D) {
					b.bindReady();
					h.add(D);
					return this
				},
				eq: function(D) {
					D = +D;
					return D === -1 ? this.slice(D) : this.slice(D, D + 1)
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				slice: function() {
					return this.pushStack(ia.apply(this, arguments), "slice", ia.call(arguments).join(","))
				},
				map: function(D) {
					return this.pushStack(b.map(this, function(ha, wa) {
						return D.call(ha, wa, ha)
					}))
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: ea,
				sort: [].sort,
				splice: [].splice
			};
			b.fn.init.prototype = b.fn;
			b.extend = b.fn.extend = function() {
				var D, ha, wa, ja, db, Oa = arguments[0] || {},
					k = 1,
					r = arguments.length,
					z = false;
				if (typeof Oa === "boolean") {
					z = Oa;
					Oa = arguments[1] || {};
					k = 2
				}
				if (typeof Oa !== "object" && !b.isFunction(Oa)) Oa = {};
				if (r === k) {
					Oa = this;
					--k
				}
				for (; k < r; k++) if ((D = arguments[k]) != null) for (ha in D) {
					wa = Oa[ha];
					ja = D[ha];
					if (Oa !== ja) if (z && ja && (b.isPlainObject(ja) || (db = b.isArray(ja)))) {
						if (db) {
							db = false;
							wa = wa && b.isArray(wa) ? wa : []
						} else wa = wa && b.isPlainObject(wa) ? wa : {};
						Oa[ha] = b.extend(z, wa, ja)
					} else if (ja !== S) Oa[ha] = ja
				}
				return Oa
			};
			b.extend({
				noConflict: function(D) {
					if (R.$ === b) R.$ = f;
					if (D && R.jQuery === b) R.jQuery = d;
					return b
				},
				isReady: false,
				readyWait: 1,
				holdReady: function(D) {
					if (D) b.readyWait++;
					else b.ready(true)
				},
				ready: function(D) {
					if (D === true && !--b.readyWait || D !== true && !b.isReady) {
						if (!Aa.body) return setTimeout(b.ready, 1);
						b.isReady = true;
						if (!(D !== true && --b.readyWait > 0)) {
							h.fireWith(Aa, [b]);
							b.fn.trigger && b(Aa).trigger("ready").off("ready")
						}
					}
				},
				bindReady: function() {
					if (!h) {
						h = b.Callbacks("once memory");
						if (Aa.readyState === "complete") return setTimeout(b.ready, 1);
						if (Aa.addEventListener) {
							Aa.addEventListener("DOMContentLoaded", x, false);
							R.addEventListener("load", b.ready, false)
						} else if (Aa.attachEvent) {
							Aa.attachEvent("onreadystatechange", x);
							R.attachEvent("onload", b.ready);
							var D = false;
							try {
								D = R.frameElement == null
							} catch (ha) {}
							Aa.documentElement.doScroll && D && a()
						}
					}
				},
				isFunction: function(D) {
					return b.type(D) === "function"
				},
				isArray: Array.isArray ||
				function(D) {
					return b.type(D) === "array"
				},
				isWindow: function(D) {
					return D && typeof D === "object" && "setInterval" in D
				},
				isNumeric: function(D) {
					return !isNaN(parseFloat(D)) && isFinite(D)
				},
				type: function(D) {
					return D == null ? String(D) : Xa[O.call(D)] || "object"
				},
				isPlainObject: function(D) {
					if (!D || b.type(D) !== "object" || D.nodeType || b.isWindow(D)) return false;
					try {
						if (D.constructor && !V.call(D, "constructor") && !V.call(D.constructor.prototype, "isPrototypeOf")) return false
					} catch (ha) {
						return false
					}
					var wa;
					for (wa in D);
					return wa === S || V.call(D, wa)
				},
				isEmptyObject: function(D) {
					for (var ha in D) return false;
					return true
				},
				error: function(D) {
					throw new Error(D);
				},
				parseJSON: function(D) {
					if (typeof D !== "string" || !D) return null;
					D = b.trim(D);
					if (R.JSON && R.JSON.parse) return R.JSON.parse(D);
					if (da.test(D.replace(W, "@").replace(ga, "]").replace(ca, ""))) return (new Function("return " + D))();
					b.error("Invalid JSON: " + D)
				},
				parseXML: function(D) {
					var ha, wa;
					try {
						if (R.DOMParser) {
							wa = new DOMParser;
							ha = wa.parseFromString(D, "text/xml")
						} else {
							ha = new ActiveXObject("Microsoft.XMLDOM");
							ha.async = "false";
							ha.loadXML(D)
						}
					} catch (ja) {
						ha = S
					}
					if (!ha || !ha.documentElement || ha.getElementsByTagName("parsererror").length) b.error("Invalid XML: " + D);
					return ha
				},
				noop: function() {},
				globalEval: function(D) {
					if (D && i.test(D))(R.execScript ||
					function(ha) {
						R.eval.call(R, ha)
					})(D)
				},
				camelCase: function(D) {
					return D.replace(Ta, "ms-").replace(Rb, nb)
				},
				nodeName: function(D, ha) {
					return D.nodeName && D.nodeName.toUpperCase() === ha.toUpperCase()
				},
				each: function(D, ha, wa) {
					var ja, db = 0,
						Oa = D.length,
						k = Oa === S || b.isFunction(D);
					if (wa) if (k) for (ja in D) {
						if (ha.apply(D[ja], wa) === false) break
					} else for (; db < Oa;) {
						if (ha.apply(D[db++], wa) === false) break
					} else if (k) for (ja in D) {
						if (ha.call(D[ja], ja, D[ja]) === false) break
					} else for (; db < Oa;) if (ha.call(D[db], db, D[db++]) === false) break;
					return D
				},
				trim: xa ?
				function(D) {
					return D == null ? "" : xa.call(D)
				} : function(D) {
					return D == null ? "" : D.toString().replace(B, "").replace(C, "")
				},
				makeArray: function(D, ha) {
					ha = ha || [];
					if (D != null) {
						var wa = b.type(D);
						D.length == null || wa === "string" || wa === "function" || wa === "regexp" || b.isWindow(D) ? ea.call(ha, D) : b.merge(ha, D)
					}
					return ha
				},
				inArray: function(D, ha, wa) {
					var ja;
					if (ha) {
						if (Da) return Da.call(ha, D, wa);
						ja = ha.length;
						for (wa = wa ? wa < 0 ? Math.max(0, ja + wa) : wa : 0; wa < ja; wa++) if (wa in ha && ha[wa] === D) return wa
					}
					return -1
				},
				merge: function(D, ha) {
					var wa = D.length,
						ja = 0;
					if (typeof ha.length === "number") for (var db = ha.length; ja < db; ja++) D[wa++] = ha[ja];
					else for (; ha[ja] !== S;) D[wa++] = ha[ja++];
					D.length = wa;
					return D
				},
				grep: function(D, ha, wa) {
					var ja = [],
						db;
					wa = !! wa;
					for (var Oa = 0, k = D.length; Oa < k; Oa++) {
						db = !! ha(D[Oa], Oa);
						wa !== db && ja.push(D[Oa])
					}
					return ja
				},
				map: function(D, ha, wa) {
					var ja, db, Oa = [],
						k = 0,
						r = D.length;
					if (D instanceof b || r !== S && typeof r === "number" && (r > 0 && D[0] && D[r - 1] || r === 0 || b.isArray(D))) for (; k < r; k++) {
						ja = ha(D[k], k, wa);
						if (ja != null) Oa[Oa.length] = ja
					} else for (db in D) {
						ja = ha(D[db], db, wa);
						if (ja != null) Oa[Oa.length] = ja
					}
					return Oa.concat.apply([], Oa)
				},
				guid: 1,
				proxy: function(D, ha) {
					if (typeof ha === "string") {
						var wa = D[ha];
						ha = D;
						D = wa
					}
					if (!b.isFunction(D)) return S;
					var ja = ia.call(arguments, 2);
					wa = function() {
						return D.apply(ha, ja.concat(ia.call(arguments)))
					};
					wa.guid = D.guid = D.guid || wa.guid || b.guid++;
					return wa
				},
				access: function(D, ha, wa, ja, db, Oa) {
					var k = D.length;
					if (typeof ha === "object") {
						for (var r in ha) b.access(D, r, ha[r], ja, db, wa);
						return D
					}
					if (wa !== S) {
						ja = !Oa && ja && b.isFunction(wa);
						for (r = 0; r < k; r++) db(D[r], ha, ja ? wa.call(D[r], r, db(D[r], ha)) : wa, Oa);
						return D
					}
					return k ? db(D[0], ha) : S
				},
				now: function() {
					return (new Date).getTime()
				},
				uaMatch: function(D) {
					D = D.toLowerCase();
					D = Pa.exec(D) || Qa.exec(D) || bb.exec(D) || D.indexOf("compatible") < 0 && fb.exec(D) || [];
					return {
						browser: D[1] || "",
						version: D[2] || "0"
					}
				},
				sub: function() {
					function D(wa, ja) {
						return new D.fn.init(wa, ja)
					}
					b.extend(true, D, this);
					D.superclass = this;
					D.fn = D.prototype = this();
					D.fn.constructor = D;
					D.sub = this.sub;
					D.fn.init = function(wa, ja) {
						if (ja && ja instanceof b && !(ja instanceof D)) ja = D(ja);
						return b.fn.init.call(this, wa, ja, ha)
					};
					D.fn.init.prototype = D.fn;
					var ha = D(Aa);
					return D
				},
				browser: {}
			});
			b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(D, ha) {
				Xa["[object " + ha + "]"] = ha.toLowerCase()
			});
			Hb = b.uaMatch(Hb);
			if (Hb.browser) {
				b.browser[Hb.browser] = true;
				b.browser.version = Hb.version
			}
			if (b.browser.webkit) b.browser.safari = true;
			if (i.test("\u00a0")) {
				B = /^[\s\xA0]+/;
				C = /[\s\xA0]+$/
			}
			l = b(Aa);
			if (Aa.addEventListener) x = function() {
				Aa.removeEventListener("DOMContentLoaded", x, false);
				b.ready()
			};
			else if (Aa.attachEvent) x = function() {
				if (Aa.readyState === "complete") {
					Aa.detachEvent("onreadystatechange", x);
					b.ready()
				}
			};
			return b
		}(),
		Cd = {};
	c.Callbacks = function(a) {
		a = a ? Cd[a] || cb(a) : {};
		var b = [],
			d = [],
			f, l, p, i, B, C = function(W) {
				var ga, ca, Pa, Qa;
				ga = 0;
				for (ca = W.length; ga < ca; ga++) {
					Pa = W[ga];
					Qa = c.type(Pa);
					if (Qa === "array") C(Pa);
					else if (Qa === "function") if (!a.unique || !da.has(Pa)) b.push(Pa)
				}
			},
			t = function(W, ga) {
				ga = ga || [];
				f = !a.memory || [W, ga];
				l = true;
				B = p || 0;
				p = 0;
				for (i = b.length; b && B < i; B++) if (b[B].apply(W, ga) === false && a.stopOnFalse) {
					f = true;
					break
				}
				l = false;
				if (b) if (a.once) if (f === true) da.disable();
				else b = [];
				else if (d && d.length) {
					f = d.shift();
					da.fireWith(f[0], f[1])
				}
			},
			da = {
				add: function() {
					if (b) {
						var W = b.length;
						C(arguments);
						if (l) i = b.length;
						else if (f && f !== true) {
							p = W;
							t(f[0], f[1])
						}
					}
					return this
				},
				remove: function() {
					if (b) for (var W = arguments, ga = 0, ca = W.length; ga < ca; ga++) for (var Pa = 0; Pa < b.length; Pa++) if (W[ga] === b[Pa]) {
						if (l) if (Pa <= i) {
							i--;
							Pa <= B && B--
						}
						b.splice(Pa--, 1);
						if (a.unique) break
					}
					return this
				},
				has: function(W) {
					if (b) for (var ga = 0, ca = b.length; ga < ca; ga++) if (W === b[ga]) return true;
					return false
				},
				empty: function() {
					b = [];
					return this
				},
				disable: function() {
					b = d = f = S;
					return this
				},
				disabled: function() {
					return !b
				},
				lock: function() {
					d = S;
					if (!f || f === true) da.disable();
					return this
				},
				locked: function() {
					return !d
				},
				fireWith: function(W, ga) {
					if (d) if (l) a.once || d.push([W, ga]);
					else a.once && f || t(W, ga);
					return this
				},
				fire: function() {
					da.fireWith(this, arguments);
					return this
				},
				fired: function() {
					return !!f
				}
			};
		return da
	};
	var ld = [].slice;
	c.extend({
		Deferred: function(a) {
			var b = c.Callbacks("once memory"),
				d = c.Callbacks("once memory"),
				f = c.Callbacks("memory"),
				l = "pending",
				p = {
					resolve: b,
					reject: d,
					notify: f
				},
				i = {
					done: b.add,
					fail: d.add,
					progress: f.add,
					state: function() {
						return l
					},
					isResolved: b.fired,
					isRejected: d.fired,
					then: function(t, da, W) {
						B.done(t).fail(da).progress(W);
						return this
					},
					always: function() {
						B.done.apply(B, arguments).fail.apply(B, arguments);
						return this
					},
					pipe: function(t, da, W) {
						return c.Deferred(function(ga) {
							c.each({
								done: [t, "resolve"],
								fail: [da, "reject"],
								progress: [W, "notify"]
							}, function(ca, Pa) {
								var Qa = Pa[0],
									bb = Pa[1],
									fb;
								c.isFunction(Qa) ? B[ca](function() {
									(fb = Qa.apply(this, arguments)) && c.isFunction(fb.promise) ? fb.promise().then(ga.resolve, ga.reject, ga.notify) : ga[bb + "With"](this === B ? ga : this, [fb])
								}) : B[ca](ga[bb])
							})
						}).promise()
					},
					promise: function(t) {
						if (t == null) t = i;
						else for (var da in i) t[da] = i[da];
						return t
					}
				},
				B = i.promise({}),
				C;
			for (C in p) {
				B[C] = p[C].fire;
				B[C + "With"] = p[C].fireWith
			}
			B.done(function() {
				l = "resolved"
			}, d.disable, f.lock).fail(function() {
				l = "rejected"
			}, b.disable, f.lock);
			a && a.call(B, B);
			return B
		},
		when: function(a) {
			function b(da) {
				return function(W) {
					f[da] = arguments.length > 1 ? ld.call(arguments, 0) : W;
					--B || C.resolveWith(C, f)
				}
			}
			function d(da) {
				return function(W) {
					i[da] = arguments.length > 1 ? ld.call(arguments, 0) : W;
					C.notifyWith(t, i)
				}
			}
			var f = ld.call(arguments, 0),
				l = 0,
				p = f.length,
				i = new Array(p),
				B = p,
				C = p <= 1 && a && c.isFunction(a.promise) ? a : c.Deferred(),
				t = C.promise();
			if (p > 1) {
				for (; l < p; l++) if (f[l] && f[l].promise && c.isFunction(f[l].promise)) f[l].promise().then(b(l), C.reject, d(l));
				else --B;
				B || C.resolveWith(C, f)
			} else if (C !== a) C.resolveWith(C, p ? [a] : []);
			return t
		}
	});
	c.support = function() {
		var a, b, d, f, l, p, i, B, C = Aa.createElement("div");
		C.setAttribute("className", "t");
		C.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		b = C.getElementsByTagName("*");
		d = C.getElementsByTagName("a")[0];
		if (!b || !b.length || !d) return {};
		f = Aa.createElement("select");
		l = f.appendChild(Aa.createElement("option"));
		b = C.getElementsByTagName("input")[0];
		a = {
			leadingWhitespace: C.firstChild.nodeType === 3,
			tbody: !C.getElementsByTagName("tbody").length,
			htmlSerialize: !! C.getElementsByTagName("link").length,
			style: /top/.test(d.getAttribute("style")),
			hrefNormalized: d.getAttribute("href") === "/a",
			opacity: /^0.55/.test(d.style.opacity),
			cssFloat: !! d.style.cssFloat,
			checkOn: b.value === "on",
			optSelected: l.selected,
			getSetAttribute: C.className !== "t",
			enctype: !! Aa.createElement("form").enctype,
			html5Clone: Aa.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
			submitBubbles: true,
			changeBubbles: true,
			focusinBubbles: false,
			deleteExpando: true,
			noCloneEvent: true,
			inlineBlockNeedsLayout: false,
			shrinkWrapBlocks: false,
			reliableMarginRight: true
		};
		b.checked = true;
		a.noCloneChecked = b.cloneNode(true).checked;
		f.disabled = true;
		a.optDisabled = !l.disabled;
		try {
			delete C.test
		} catch (t) {
			a.deleteExpando = false
		}
		if (!C.addEventListener && C.attachEvent && C.fireEvent) {
			C.attachEvent("onclick", function() {
				a.noCloneEvent = false
			});
			C.cloneNode(true).fireEvent("onclick")
		}
		b = Aa.createElement("input");
		b.value = "t";
		b.setAttribute("type", "radio");
		a.radioValue = b.value === "t";
		b.setAttribute("checked", "checked");
		C.appendChild(b);
		d = Aa.createDocumentFragment();
		d.appendChild(C.lastChild);
		a.checkClone = d.cloneNode(true).cloneNode(true).lastChild.checked;
		a.appendChecked = b.checked;
		d.removeChild(b);
		d.appendChild(C);
		C.innerHTML = "";
		if (R.getComputedStyle) {
			b = Aa.createElement("div");
			b.style.width = "0";
			b.style.marginRight = "0";
			C.style.width = "2px";
			C.appendChild(b);
			a.reliableMarginRight = (parseInt((R.getComputedStyle(b, null) || {
				marginRight: 0
			}).marginRight, 10) || 0) === 0
		}
		if (C.attachEvent) for (i in {
			submit: 1,
			change: 1,
			focusin: 1
		}) {
			b = "on" + i;
			B = b in C;
			if (!B) {
				C.setAttribute(b, "return;");
				B = typeof C[b] === "function"
			}
			a[i + "Bubbles"] = B
		}
		d.removeChild(C);
		d = f = l = b = C = b = null;
		c(function() {
			var da, W, ga, ca, Pa = Aa.getElementsByTagName("body")[0];
			if (Pa) {
				da = Aa.createElement("div");
				da.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
				Pa.insertBefore(da, Pa.firstChild);
				C = Aa.createElement("div");
				da.appendChild(C);
				C.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
				p = C.getElementsByTagName("td");
				B = p[0].offsetHeight === 0;
				p[0].style.display = "";
				p[1].style.display = "none";
				a.reliableHiddenOffsets = B && p[0].offsetHeight === 0;
				C.innerHTML = "";
				C.style.width = C.style.paddingLeft = "1px";
				c.boxModel = a.boxModel = C.offsetWidth === 2;
				if (typeof C.style.zoom !== "undefined") {
					C.style.display = "inline";
					C.style.zoom = 1;
					a.inlineBlockNeedsLayout = C.offsetWidth === 2;
					C.style.display = "";
					C.innerHTML = "<div style='width:4px;'></div>";
					a.shrinkWrapBlocks = C.offsetWidth !== 2
				}
				C.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;";
				C.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
				W = C.firstChild;
				ga = W.firstChild;
				ca = {
					doesNotAddBorder: ga.offsetTop !== 5,
					doesAddBorderForTableAndCells: W.nextSibling.firstChild.firstChild.offsetTop === 5
				};
				ga.style.position = "fixed";
				ga.style.top = "20px";
				ca.fixedPosition = ga.offsetTop === 20 || ga.offsetTop === 15;
				ga.style.position = ga.style.top = "";
				W.style.overflow = "hidden";
				W.style.position = "relative";
				ca.subtractsBorderForOverflowNotVisible = ga.offsetTop === -5;
				ca.doesNotIncludeMarginInBodyOffset = Pa.offsetTop !== 1;
				Pa.removeChild(da);
				C = null;
				c.extend(a, ca)
			}
		});
		return a
	}();
	var Xd = /^(?:\{.*\}|\[.*\])$/,
		Wd = /([A-Z])/g;
	c.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: true,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: true
		},
		hasData: function(a) {
			a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
			return !!a && !jb(a)
		},
		data: function(a, b, d, f) {
			if (c.acceptData(a)) {
				var l;
				l = c.expando;
				var p = typeof b === "string",
					i = a.nodeType,
					B = i ? c.cache : a,
					C = i ? a[l] : a[l] && l,
					t = b === "events";
				if (!((!C || !B[C] || !t && !f && !B[C].data) && p && d === S)) {
					if (!C) if (i) a[l] = C = ++c.uuid;
					else C = l;
					if (!B[C]) {
						B[C] = {};
						if (!i) B[C].toJSON = c.noop
					}
					if (typeof b === "object" || typeof b === "function") if (f) B[C] = c.extend(B[C], b);
					else B[C].data = c.extend(B[C].data, b);
					l = a = B[C];
					if (!f) {
						if (!a.data) a.data = {};
						a = a.data
					}
					if (d !== S) a[c.camelCase(b)] = d;
					if (t && !a[b]) return l.events;
					if (p) {
						d = a[b];
						if (d == null) d = a[c.camelCase(b)]
					} else d = a;
					return d
				}
			}
		},
		removeData: function(a, b, d) {
			if (c.acceptData(a)) {
				var f, l, p, i = c.expando,
					B = a.nodeType,
					C = B ? c.cache : a,
					t = B ? a[i] : i;
				if (C[t]) {
					if (b) if (f = d ? C[t] : C[t].data) {
						if (!c.isArray(b)) if (b in f) b = [b];
						else {
							b = c.camelCase(b);
							b = b in f ? [b] : b.split(" ")
						}
						l = 0;
						for (p = b.length; l < p; l++) delete f[b[l]];
						if (!(d ? jb : c.isEmptyObject)(f)) return
					}
					if (!d) {
						delete C[t].data;
						if (!jb(C[t])) return
					}
					if (c.support.deleteExpando || !C.setInterval) delete C[t];
					else C[t] = null;
					if (B) if (c.support.deleteExpando) delete a[i];
					else if (a.removeAttribute) a.removeAttribute(i);
					else a[i] = null
				}
			}
		},
		_data: function(a, b, d) {
			return c.data(a, b, d, true)
		},
		acceptData: function(a) {
			if (a.nodeName) {
				var b = c.noData[a.nodeName.toLowerCase()];
				if (b) return !(b === true || a.getAttribute("classid") !== b)
			}
			return true
		}
	});
	c.fn.extend({
		data: function(a, b) {
			var d, f, l, p = null;
			if (typeof a === "undefined") {
				if (this.length) {
					p = c.data(this[0]);
					if (this[0].nodeType === 1 && !c._data(this[0], "parsedAttrs")) {
						f = this[0].attributes;
						for (var i = 0, B = f.length; i < B; i++) {
							l = f[i].name;
							if (l.indexOf("data-") === 0) {
								l = c.camelCase(l.substring(5));
								Ab(this[0], l, p[l])
							}
						}
						c._data(this[0], "parsedAttrs", true)
					}
				}
				return p
			} else if (typeof a === "object") return this.each(function() {
				c.data(this, a)
			});
			d = a.split(".");
			d[1] = d[1] ? "." + d[1] : "";
			if (b === S) {
				p = this.triggerHandler("getData" + d[1] + "!", [d[0]]);
				if (p === S && this.length) {
					p = c.data(this[0], a);
					p = Ab(this[0], a, p)
				}
				return p === S && d[1] ? this.data(d[0]) : p
			} else return this.each(function() {
				var C = c(this),
					t = [d[0], b];
				C.triggerHandler("setData" + d[1] + "!", t);
				c.data(this, a, b);
				C.triggerHandler("changeData" + d[1] + "!", t)
			})
		},
		removeData: function(a) {
			return this.each(function() {
				c.removeData(this, a)
			})
		}
	});
	c.extend({
		_mark: function(a, b) {
			if (a) {
				b = (b || "fx") + "mark";
				c._data(a, b, (c._data(a, b) || 0) + 1)
			}
		},
		_unmark: function(a, b, d) {
			if (a !== true) {
				d = b;
				b = a;
				a = false
			}
			if (b) {
				d = d || "fx";
				var f = d + "mark";
				if (a = a ? 0 : (c._data(b, f) || 1) - 1) c._data(b, f, a);
				else {
					c.removeData(b, f, true);
					Ia(b, d, "mark")
				}
			}
		},
		queue: function(a, b, d) {
			var f;
			if (a) {
				b = (b || "fx") + "queue";
				f = c._data(a, b);
				if (d) if (!f || c.isArray(d)) f = c._data(a, b, c.makeArray(d));
				else f.push(d);
				return f || []
			}
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var d = c.queue(a, b),
				f = d.shift(),
				l = {};
			if (f === "inprogress") f = d.shift();
			if (f) {
				b === "fx" && d.unshift("inprogress");
				c._data(a, b + ".run", l);
				f.call(a, function() {
					c.dequeue(a, b)
				}, l)
			}
			if (!d.length) {
				c.removeData(a, b + "queue " + b + ".run", true);
				Ia(a, b, "queue")
			}
		}
	});
	c.fn.extend({
		queue: function(a, b) {
			if (typeof a !== "string") {
				b = a;
				a = "fx"
			}
			if (b === S) return c.queue(this[0], a);
			return this.each(function() {
				var d = c.queue(this, a, b);
				a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				c.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			a = c.fx ? c.fx.speeds[a] || a : a;
			b = b || "fx";
			return this.queue(b, function(d, f) {
				var l = setTimeout(d, a);
				f.stop = function() {
					clearTimeout(l)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, b) {
			function d() {
				--p || f.resolveWith(l, [l])
			}
			if (typeof a !== "string") {
				b = a;
				a = S
			}
			a = a || "fx";
			var f = c.Deferred(),
				l = this;
			b = l.length;
			var p = 1,
				i = a + "defer",
				B = a + "queue";
			a = a + "mark";
			for (var C; b--;) if (C = c.data(l[b], i, S, true) || (c.data(l[b], B, S, true) || c.data(l[b], a, S, true)) && c.data(l[b], i, c.Callbacks("once memory"), true)) {
				p++;
				C.add(d)
			}
			d();
			return f.promise()
		}
	});
	var Ed = /[\n\t\r]/g,
		qc = /\s+/,
		Yd = /\r/g,
		Fd = /^(?:button|input)$/i,
		md = /^(?:button|input|object|select|textarea)$/i,
		Dc = /^a(?:rea)?$/i,
		Sb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		Gd = c.support.getSetAttribute,
		ec, Tb, rc;
	c.fn.extend({
		attr: function(a, b) {
			return c.access(this, a, b, true, c.attr)
		},
		removeAttr: function(a) {
			return this.each(function() {
				c.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return c.access(this, a, b, true, c.prop)
		},
		removeProp: function(a) {
			a = c.propFix[a] || a;
			return this.each(function() {
				try {
					this[a] = S;
					delete this[a]
				} catch (b) {}
			})
		},
		addClass: function(a) {
			var b, d, f, l, p, i, B;
			if (c.isFunction(a)) return this.each(function(C) {
				c(this).addClass(a.call(this, C, this.className))
			});
			if (a && typeof a === "string") {
				b = a.split(qc);
				d = 0;
				for (f = this.length; d < f; d++) {
					l = this[d];
					if (l.nodeType === 1) if (!l.className && b.length === 1) l.className = a;
					else {
						p = " " + l.className + " ";
						i = 0;
						for (B = b.length; i < B; i++)~p.indexOf(" " + b[i] + " ") || (p += b[i] + " ");
						l.className = c.trim(p)
					}
				}
			}
			return this
		},
		removeClass: function(a) {
			var b, d, f, l, p, i, B;
			if (c.isFunction(a)) return this.each(function(C) {
				c(this).removeClass(a.call(this, C, this.className))
			});
			if (a && typeof a === "string" || a === S) {
				b = (a || "").split(qc);
				d = 0;
				for (f = this.length; d < f; d++) {
					l = this[d];
					if (l.nodeType === 1 && l.className) if (a) {
						p = (" " + l.className + " ").replace(Ed, " ");
						i = 0;
						for (B = b.length; i < B; i++) p = p.replace(" " + b[i] + " ", " ");
						l.className = c.trim(p)
					} else l.className = ""
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var d = typeof a,
				f = typeof b === "boolean";
			if (c.isFunction(a)) return this.each(function(l) {
				c(this).toggleClass(a.call(this, l, this.className, b), b)
			});
			return this.each(function() {
				if (d === "string") for (var l, p = 0, i = c(this), B = b, C = a.split(qc); l = C[p++];) {
					B = f ? B : !i.hasClass(l);
					i[B ? "addClass" : "removeClass"](l)
				} else if (d === "undefined" || d === "boolean") {
					this.className && c._data(this, "__className__", this.className);
					this.className = this.className || a === false ? "" : c._data(this, "__className__") || ""
				}
			})
		},
		hasClass: function(a) {
			a = " " + a + " ";
			for (var b = 0, d = this.length; b < d; b++) if (this[b].nodeType === 1 && (" " + this[b].className + " ").replace(Ed, " ").indexOf(a) > -1) return true;
			return false
		},
		val: function(a) {
			var b, d, f, l = this[0];
			if (arguments.length) {
				f = c.isFunction(a);
				return this.each(function(p) {
					var i = c(this);
					if (this.nodeType === 1) {
						p = f ? a.call(this, p, i.val()) : a;
						if (p == null) p = "";
						else if (typeof p === "number") p += "";
						else if (c.isArray(p)) p = c.map(p, function(B) {
							return B == null ? "" : B + ""
						});
						b = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type];
						if (!b || !("set" in b) || b.set(this, p, "value") === S) this.value = p
					}
				})
			} else if (l) {
				if ((b = c.valHooks[l.nodeName.toLowerCase()] || c.valHooks[l.type]) && "get" in b && (d = b.get(l, "value")) !== S) return d;
				d = l.value;
				return typeof d === "string" ? d.replace(Yd, "") : d == null ? "" : d
			}
		}
	});
	c.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select: {
				get: function(a) {
					var b, d, f = a.selectedIndex,
						l = [],
						p = a.options,
						i = a.type === "select-one";
					if (f < 0) return null;
					a = i ? f : 0;
					for (d = i ? f + 1 : p.length; a < d; a++) {
						b = p[a];
						if (b.selected && (c.support.optDisabled ? !b.disabled : b.getAttribute("disabled") === null) && (!b.parentNode.disabled || !c.nodeName(b.parentNode, "optgroup"))) {
							b = c(b).val();
							if (i) return b;
							l.push(b)
						}
					}
					if (i && !l.length && p.length) return c(p[f]).val();
					return l
				},
				set: function(a, b) {
					var d = c.makeArray(b);
					c(a).find("option").each(function() {
						this.selected = c.inArray(c(this).val(), d) >= 0
					});
					if (!d.length) a.selectedIndex = -1;
					return d
				}
			}
		},
		attrFn: {
			val: true,
			css: true,
			html: true,
			text: true,
			data: true,
			width: true,
			height: true,
			offset: true
		},
		attr: function(a, b, d, f) {
			var l, p, i = a.nodeType;
			if (!(!a || i === 3 || i === 8 || i === 2)) {
				if (f && b in c.attrFn) return c(a)[b](d);
				if (typeof a.getAttribute === "undefined") return c.prop(a, b, d);
				if (f = i !== 1 || !c.isXMLDoc(a)) {
					b = b.toLowerCase();
					p = c.attrHooks[b] || (Sb.test(b) ? Tb : ec)
				}
				if (d !== S) if (d === null) c.removeAttr(a, b);
				else if (p && "set" in p && f && (l = p.set(a, d, b)) !== S) return l;
				else {
					a.setAttribute(b, "" + d);
					return d
				} else if (p && "get" in p && f && (l = p.get(a, b)) !== null) return l;
				else {
					l = a.getAttribute(b);
					return l === null ? S : l
				}
			}
		},
		removeAttr: function(a, b) {
			var d, f, l, p = 0;
			if (b && a.nodeType === 1) {
				d = b.toLowerCase().split(qc);
				for (l = d.length; p < l; p++) if (f = d[p]) {
					b = c.propFix[f] || f;
					c.attr(a, f, "");
					a.removeAttribute(Gd ? f : b);
					if (Sb.test(f) && b in a) a[b] = false
				}
			}
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (Fd.test(a.nodeName) && a.parentNode) c.error("type property can't be changed");
					else if (!c.support.radioValue && b === "radio" && c.nodeName(a, "input")) {
						var d = a.value;
						a.setAttribute("type", b);
						if (d) a.value = d;
						return b
					}
				}
			},
			value: {
				get: function(a, b) {
					if (ec && c.nodeName(a, "button")) return ec.get(a, b);
					return b in a ? a.value : null
				},
				set: function(a, b, d) {
					if (ec && c.nodeName(a, "button")) return ec.set(a, b, d);
					a.value = b
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(a, b, d) {
			var f, l, p = a.nodeType;
			if (!(!a || p === 3 || p === 8 || p === 2)) {
				if (p !== 1 || !c.isXMLDoc(a)) {
					b = c.propFix[b] || b;
					l = c.propHooks[b]
				}
				return d !== S ? l && "set" in l && (f = l.set(a, d, b)) !== S ? f : (a[b] = d) : l && "get" in l && (f = l.get(a, b)) !== null ? f : a[b]
			}
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = a.getAttributeNode("tabindex");
					return b && b.specified ? parseInt(b.value, 10) : md.test(a.nodeName) || Dc.test(a.nodeName) && a.href ? 0 : S
				}
			}
		}
	});
	c.attrHooks.tabindex = c.propHooks.tabIndex;
	Tb = {
		get: function(a, b) {
			var d, f = c.prop(a, b);
			return f === true || typeof f !== "boolean" && (d = a.getAttributeNode(b)) && d.nodeValue !== false ? b.toLowerCase() : S
		},
		set: function(a, b, d) {
			if (b === false) c.removeAttr(a, d);
			else {
				b = c.propFix[d] || d;
				if (b in a) a[b] = true;
				a.setAttribute(d, d.toLowerCase())
			}
			return d
		}
	};
	if (!Gd) {
		rc = {
			name: true,
			id: true
		};
		ec = c.valHooks.button = {
			get: function(a, b) {
				return (a = a.getAttributeNode(b)) && (rc[b] ? a.nodeValue !== "" : a.specified) ? a.nodeValue : S
			},
			set: function(a, b, d) {
				var f = a.getAttributeNode(d);
				if (!f) {
					f = Aa.createAttribute(d);
					a.setAttributeNode(f)
				}
				return f.nodeValue = b + ""
			}
		};
		c.attrHooks.tabindex.set = ec.set;
		c.each(["width", "height"], function(a, b) {
			c.attrHooks[b] = c.extend(c.attrHooks[b], {
				set: function(d, f) {
					if (f === "") {
						d.setAttribute(b, "auto");
						return f
					}
				}
			})
		});
		c.attrHooks.contenteditable = {
			get: ec.get,
			set: function(a, b, d) {
				if (b === "") b = "false";
				ec.set(a, b, d)
			}
		}
	}
	c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function(a, b) {
		c.attrHooks[b] = c.extend(c.attrHooks[b], {
			get: function(d) {
				d = d.getAttribute(b, 2);
				return d === null ? S : d
			}
		})
	});
	if (!c.support.style) c.attrHooks.style = {
		get: function(a) {
			return a.style.cssText.toLowerCase() || S
		},
		set: function(a, b) {
			return a.style.cssText = "" + b
		}
	};
	if (!c.support.optSelected) c.propHooks.selected = c.extend(c.propHooks.selected, {
		get: function() {
			return null
		}
	});
	if (!c.support.enctype) c.propFix.enctype = "encoding";
	c.support.checkOn || c.each(["radio", "checkbox"], function() {
		c.valHooks[this] = {
			get: function(a) {
				return a.getAttribute("value") === null ? "on" : a.value
			}
		}
	});
	c.each(["radio", "checkbox"], function() {
		c.valHooks[this] = c.extend(c.valHooks[this], {
			set: function(a, b) {
				if (c.isArray(b)) return a.checked = c.inArray(c(a).val(), b) >= 0
			}
		})
	});
	var fc = /^(?:textarea|input|select)$/i,
		nd = /^([^\.]*)?(?:\.(.+))?$/,
		Zd = /\bhover(\.\S+)?\b/,
		od = /^key/,
		Hd = /^(?:mouse|contextmenu)|click/,
		Yc = /^(?:focusinfocus|focusoutblur)$/,
		fd = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
		gc = function(a) {
			if (a = fd.exec(a)) {
				a[1] = (a[1] || "").toLowerCase();
				a[3] = a[3] && new RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)")
			}
			return a
		},
		Id = function(a, b) {
			var d = a.attributes || {};
			return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (d.id || {}).value === b[2]) && (!b[3] || b[3].test((d["class"] || {}).value))
		},
		Jd = function(a) {
			return c.event.special.hover ? a : a.replace(Zd, "mouseenter$1 mouseleave$1")
		};
	c.event = {
		add: function(a, b, d, f, l) {
			var p, i, B, C, t, da, W, ga, ca;
			if (!(a.nodeType === 3 || a.nodeType === 8 || !b || !d || !(p = c._data(a)))) {
				if (d.handler) {
					W = d;
					d = W.handler
				}
				if (!d.guid) d.guid = c.guid++;
				B = p.events;
				if (!B) p.events = B = {};
				i = p.handle;
				if (!i) {
					p.handle = i = function(Pa) {
						return typeof c !== "undefined" && (!Pa || c.event.triggered !== Pa.type) ? c.event.dispatch.apply(i.elem, arguments) : S
					};
					i.elem = a
				}
				b = c.trim(Jd(b)).split(" ");
				for (p = 0; p < b.length; p++) {
					C = nd.exec(b[p]) || [];
					t = C[1];
					da = (C[2] || "").split(".").sort();
					ca = c.event.special[t] || {};
					t = (l ? ca.delegateType : ca.bindType) || t;
					ca = c.event.special[t] || {};
					C = c.extend({
						type: t,
						origType: C[1],
						data: f,
						handler: d,
						guid: d.guid,
						selector: l,
						quick: gc(l),
						namespace: da.join(".")
					}, W);
					ga = B[t];
					if (!ga) {
						ga = B[t] = [];
						ga.delegateCount = 0;
						if (!ca.setup || ca.setup.call(a, f, da, i) === false) if (a.addEventListener) a.addEventListener(t, i, false);
						else a.attachEvent && a.attachEvent("on" + t, i)
					}
					if (ca.add) {
						ca.add.call(a, C);
						if (!C.handler.guid) C.handler.guid = d.guid
					}
					l ? ga.splice(ga.delegateCount++, 0, C) : ga.push(C);
					c.event.global[t] = true
				}
				a = null
			}
		},
		global: {},
		remove: function(a, b, d, f, l) {
			var p = c.hasData(a) && c._data(a),
				i, B, C, t, da, W, ga, ca, Pa, Qa;
			if (p && (ga = p.events)) {
				b = c.trim(Jd(b || "")).split(" ");
				for (i = 0; i < b.length; i++) {
					B = nd.exec(b[i]) || [];
					C = t = B[1];
					B = B[2];
					if (C) {
						ca = c.event.special[C] || {};
						C = (f ? ca.delegateType : ca.bindType) || C;
						Pa = ga[C] || [];
						da = Pa.length;
						B = B ? new RegExp("(^|\\.)" + B.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
						for (W = 0; W < Pa.length; W++) {
							Qa = Pa[W];
							if ((l || t === Qa.origType) && (!d || d.guid === Qa.guid) && (!B || B.test(Qa.namespace)) && (!f || f === Qa.selector || f === "**" && Qa.selector)) {
								Pa.splice(W--, 1);
								Qa.selector && Pa.delegateCount--;
								ca.remove && ca.remove.call(a, Qa)
							}
						}
						if (Pa.length === 0 && da !== Pa.length) {
							if (!ca.teardown || ca.teardown.call(a, B) === false) c.removeEvent(a, C, p.handle);
							delete ga[C]
						}
					} else for (C in ga) c.event.remove(a, C + b[i], d, f, true)
				}
				if (c.isEmptyObject(ga)) {
					if (b = p.handle) b.elem = null;
					c.removeData(a, ["events", "handle"], true)
				}
			}
		},
		customEvent: {
			getData: true,
			setData: true,
			changeData: true
		},
		trigger: function(a, b, d, f) {
			if (!(d && (d.nodeType === 3 || d.nodeType === 8))) {
				var l = a.type || a,
					p = [],
					i, B, C, t, da;
				if (!Yc.test(l + c.event.triggered)) {
					if (l.indexOf("!") >= 0) {
						l = l.slice(0, -1);
						i = true
					}
					if (l.indexOf(".") >= 0) {
						p = l.split(".");
						l = p.shift();
						p.sort()
					}
					if (!((!d || c.event.customEvent[l]) && !c.event.global[l])) {
						a = typeof a === "object" ? a[c.expando] ? a : new c.Event(l, a) : new c.Event(l);
						a.type = l;
						a.isTrigger = true;
						a.exclusive = i;
						a.namespace = p.join(".");
						a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
						i = l.indexOf(":") < 0 ? "on" + l : "";
						if (d) {
							a.result = S;
							if (!a.target) a.target = d;
							b = b != null ? c.makeArray(b) : [];
							b.unshift(a);
							C = c.event.special[l] || {};
							if (!(C.trigger && C.trigger.apply(d, b) === false)) {
								da = [
									[d, C.bindType || l]
								];
								if (!f && !C.noBubble && !c.isWindow(d)) {
									t = C.delegateType || l;
									p = Yc.test(t + l) ? d : d.parentNode;
									for (B = null; p; p = p.parentNode) {
										da.push([p, t]);
										B = p
									}
									if (B && B === d.ownerDocument) da.push([B.defaultView || B.parentWindow || R, t])
								}
								for (B = 0; B < da.length && !a.isPropagationStopped(); B++) {
									p = da[B][0];
									a.type = da[B][1];
									(t = (c._data(p, "events") || {})[a.type] && c._data(p, "handle")) && t.apply(p, b);
									(t = i && p[i]) && c.acceptData(p) && t.apply(p, b) === false && a.preventDefault()
								}
								a.type = l;
								if (!f && !a.isDefaultPrevented()) if ((!C._default || C._default.apply(d.ownerDocument, b) === false) && !(l === "click" && c.nodeName(d, "a")) && c.acceptData(d)) if (i && d[l] && (l !== "focus" && l !== "blur" || a.target.offsetWidth !== 0) && !c.isWindow(d)) {
									if (B = d[i]) d[i] = null;
									c.event.triggered = l;
									d[l]();
									c.event.triggered = S;
									if (B) d[i] = B
								}
								return a.result
							}
						} else {
							d = c.cache;
							for (B in d) d[B].events && d[B].events[l] && c.event.trigger(a, b, d[B].handle.elem, true)
						}
					}
				}
			}
		},
		dispatch: function(a) {
			a = c.event.fix(a || R.event);
			var b = (c._data(this, "events") || {})[a.type] || [],
				d = b.delegateCount,
				f = [].slice.call(arguments, 0),
				l = !a.exclusive && !a.namespace,
				p = [],
				i, B, C, t, da, W, ga;
			f[0] = a;
			a.delegateTarget = this;
			if (d && !a.target.disabled && !(a.button && a.type === "click")) {
				C = c(this);
				C.context = this.ownerDocument || this;
				for (B = a.target; B != this; B = B.parentNode || this) {
					da = {};
					W = [];
					C[0] = B;
					for (i = 0; i < d; i++) {
						t = b[i];
						ga = t.selector;
						if (da[ga] === S) da[ga] = t.quick ? Id(B, t.quick) : C.is(ga);
						da[ga] && W.push(t)
					}
					W.length && p.push({
						elem: B,
						matches: W
					})
				}
			}
			b.length > d && p.push({
				elem: this,
				matches: b.slice(d)
			});
			for (i = 0; i < p.length && !a.isPropagationStopped(); i++) {
				d = p[i];
				a.currentTarget = d.elem;
				for (b = 0; b < d.matches.length && !a.isImmediatePropagationStopped(); b++) {
					t = d.matches[b];
					if (l || !a.namespace && !t.namespace || a.namespace_re && a.namespace_re.test(t.namespace)) {
						a.data = t.data;
						a.handleObj = t;
						t = ((c.event.special[t.origType] || {}).handle || t.handler).apply(d.elem, f);
						if (t !== S) {
							a.result = t;
							if (t === false) {
								a.preventDefault();
								a.stopPropagation()
							}
						}
					}
				}
			}
			return a.result
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				if (a.which == null) a.which = b.charCode != null ? b.charCode : b.keyCode;
				return a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, b) {
				var d, f, l = b.button,
					p = b.fromElement;
				if (a.pageX == null && b.clientX != null) {
					d = a.target.ownerDocument || Aa;
					f = d.documentElement;
					d = d.body;
					a.pageX = b.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0);
					a.pageY = b.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)
				}
				if (!a.relatedTarget && p) a.relatedTarget = p === a.target ? b.toElement : p;
				if (!a.which && l !== S) a.which = l & 1 ? 1 : l & 2 ? 3 : l & 4 ? 2 : 0;
				return a
			}
		},
		fix: function(a) {
			if (a[c.expando]) return a;
			var b, d, f = a,
				l = c.event.fixHooks[a.type] || {},
				p = l.props ? this.props.concat(l.props) : this.props;
			a = c.Event(f);
			for (b = p.length; b;) {
				d = p[--b];
				a[d] = f[d]
			}
			if (!a.target) a.target = f.srcElement || Aa;
			if (a.target.nodeType === 3) a.target = a.target.parentNode;
			if (a.metaKey === S) a.metaKey = a.ctrlKey;
			return l.filter ? l.filter(a, f) : a
		},
		special: {
			ready: {
				setup: c.bindReady
			},
			load: {
				noBubble: true
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function(a, b, d) {
					if (c.isWindow(this)) this.onbeforeunload = d
				},
				teardown: function(a, b) {
					if (this.onbeforeunload === b) this.onbeforeunload = null
				}
			}
		},
		simulate: function(a, b, d, f) {
			a = c.extend(new c.Event, d, {
				type: a,
				isSimulated: true,
				originalEvent: {}
			});
			f ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
			a.isDefaultPrevented() && d.preventDefault()
		}
	};
	c.event.handle = c.event.dispatch;
	c.removeEvent = Aa.removeEventListener ?
	function(a, b, d) {
		a.removeEventListener && a.removeEventListener(b, d, false)
	} : function(a, b, d) {
		a.detachEvent && a.detachEvent("on" + b, d)
	};
	c.Event = function(a, b) {
		if (!(this instanceof c.Event)) return new c.Event(a, b);
		if (a && a.type) {
			this.originalEvent = a;
			this.type = a.type;
			this.isDefaultPrevented = a.defaultPrevented || a.returnValue === false || a.getPreventDefault && a.getPreventDefault() ? la : J
		} else this.type = a;
		b && c.extend(this, b);
		this.timeStamp = a && a.timeStamp || c.now();
		this[c.expando] = true
	};
	c.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = la;
			var a = this.originalEvent;
			if (a) if (a.preventDefault) a.preventDefault();
			else a.returnValue = false
		},
		stopPropagation: function() {
			this.isPropagationStopped = la;
			var a = this.originalEvent;
			if (a) {
				a.stopPropagation && a.stopPropagation();
				a.cancelBubble = true
			}
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = la;
			this.stopPropagation()
		},
		isDefaultPrevented: J,
		isPropagationStopped: J,
		isImmediatePropagationStopped: J
	};
	c.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		c.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(d) {
				var f = this,
					l = d.relatedTarget,
					p = d.handleObj,
					i;
				if (!l || l !== f && !c.contains(f, l)) {
					d.type = p.origType;
					i = p.handler.apply(this, arguments);
					d.type = b
				}
				return i
			}
		}
	});
	if (!c.support.submitBubbles) c.event.special.submit = {
		setup: function() {
			if (c.nodeName(this, "form")) return false;
			c.event.add(this, "click._submit keypress._submit", function(a) {
				a = a.target;
				if ((a = c.nodeName(a, "input") || c.nodeName(a, "button") ? a.form : S) && !a._submit_attached) {
					c.event.add(a, "submit._submit", function(b) {
						this.parentNode && !b.isTrigger && c.event.simulate("submit", this.parentNode, b, true)
					});
					a._submit_attached = true
				}
			})
		},
		teardown: function() {
			if (c.nodeName(this, "form")) return false;
			c.event.remove(this, "._submit")
		}
	};
	if (!c.support.changeBubbles) c.event.special.change = {
		setup: function() {
			if (fc.test(this.nodeName)) {
				if (this.type === "checkbox" || this.type === "radio") {
					c.event.add(this, "propertychange._change", function(a) {
						if (a.originalEvent.propertyName === "checked") this._just_changed = true
					});
					c.event.add(this, "click._change", function(a) {
						if (this._just_changed && !a.isTrigger) {
							this._just_changed = false;
							c.event.simulate("change", this, a, true)
						}
					})
				}
				return false
			}
			c.event.add(this, "beforeactivate._change", function(a) {
				a = a.target;
				if (fc.test(a.nodeName) && !a._change_attached) {
					c.event.add(a, "change._change", function(b) {
						this.parentNode && !b.isSimulated && !b.isTrigger && c.event.simulate("change", this.parentNode, b, true)
					});
					a._change_attached = true
				}
			})
		},
		handle: function(a) {
			var b = a.target;
			if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			c.event.remove(this, "._change");
			return fc.test(this.nodeName)
		}
	};
	c.support.focusinBubbles || c.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var d = 0,
			f = function(l) {
				c.event.simulate(b, l.target, c.event.fix(l), true)
			};
		c.event.special[b] = {
			setup: function() {
				d++ === 0 && Aa.addEventListener(a, f, true)
			},
			teardown: function() {
				--d === 0 && Aa.removeEventListener(a, f, true)
			}
		}
	});
	c.fn.extend({
		on: function(a, b, d, f, l) {
			var p, i;
			if (typeof a === "object") {
				if (typeof b !== "string") {
					d = b;
					b = S
				}
				for (i in a) this.on(i, b, d, a[i], l);
				return this
			}
			if (d == null && f == null) {
				f = b;
				d = b = S
			} else if (f == null) if (typeof b === "string") {
				f = d;
				d = S
			} else {
				f = d;
				d = b;
				b = S
			}
			if (f === false) f = J;
			else if (!f) return this;
			if (l === 1) {
				p = f;
				f = function(B) {
					c().off(B);
					return p.apply(this, arguments)
				};
				f.guid = p.guid || (p.guid = c.guid++)
			}
			return this.each(function() {
				c.event.add(this, a, f, d, b)
			})
		},
		one: function(a, b, d, f) {
			return this.on.call(this, a, b, d, f, 1)
		},
		off: function(a, b, d) {
			if (a && a.preventDefault && a.handleObj) {
				var f = a.handleObj;
				c(a.delegateTarget).off(f.namespace ? f.type + "." + f.namespace : f.type, f.selector, f.handler);
				return this
			}
			if (typeof a === "object") {
				for (f in a) this.off(f, b, a[f]);
				return this
			}
			if (b === false || typeof b === "function") {
				d = b;
				b = S
			}
			if (d === false) d = J;
			return this.each(function() {
				c.event.remove(this, a, d, b)
			})
		},
		bind: function(a, b, d) {
			return this.on(a, null, b, d)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		live: function(a, b, d) {
			c(this.context).on(a, this.selector, b, d);
			return this
		},
		die: function(a, b) {
			c(this.context).off(a, this.selector || "**", b);
			return this
		},
		delegate: function(a, b, d, f) {
			return this.on(b, a, d, f)
		},
		undelegate: function(a, b, d) {
			return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, d)
		},
		trigger: function(a, b) {
			return this.each(function() {
				c.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) return c.event.trigger(a, b, this[0], true)
		},
		toggle: function(a) {
			var b = arguments,
				d = a.guid || c.guid++,
				f = 0,
				l = function(p) {
					var i = (c._data(this, "lastToggle" + a.guid) || 0) % f;
					c._data(this, "lastToggle" + a.guid, i + 1);
					p.preventDefault();
					return b[i].apply(this, arguments) || false
				};
			for (l.guid = d; f < b.length;) b[f++].guid = d;
			return this.click(l)
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		c.fn[b] = function(d, f) {
			if (f == null) {
				f = d;
				d = null
			}
			return arguments.length > 0 ? this.on(b, null, d, f) : this.trigger(b)
		};
		if (c.attrFn) c.attrFn[b] = true;
		if (od.test(b)) c.event.fixHooks[b] = c.event.keyHooks;
		if (Hd.test(b)) c.event.fixHooks[b] = c.event.mouseHooks
	});
	(function() {
		function a(h, x, O, V, ea, ia) {
			ea = 0;
			for (var xa = V.length; ea < xa; ea++) {
				var Da = V[ea];
				if (Da) {
					var Xa = false;
					for (Da = Da[h]; Da;) {
						if (Da[f] === O) {
							Xa = V[Da.sizset];
							break
						}
						if (Da.nodeType === 1 && !ia) {
							Da[f] = O;
							Da.sizset = ea
						}
						if (Da.nodeName.toLowerCase() === x) {
							Xa = Da;
							break
						}
						Da = Da[h]
					}
					V[ea] = Xa
				}
			}
		}
		function b(h, x, O, V, ea, ia) {
			ea = 0;
			for (var xa = V.length; ea < xa; ea++) {
				var Da = V[ea];
				if (Da) {
					var Xa = false;
					for (Da = Da[h]; Da;) {
						if (Da[f] === O) {
							Xa = V[Da.sizset];
							break
						}
						if (Da.nodeType === 1) {
							if (!ia) {
								Da[f] = O;
								Da.sizset = ea
							}
							if (typeof x !== "string") {
								if (Da === x) {
									Xa = true;
									break
								}
							} else if (W.filter(x, [Da]).length > 0) {
								Xa = Da;
								break
							}
						}
						Da = Da[h]
					}
					V[ea] = Xa
				}
			}
		}
		var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			f = "sizcache" + (Math.random() + "").replace(".", ""),
			l = 0,
			p = Object.prototype.toString,
			i = false,
			B = true,
			C = /\\/g,
			t = /\r\n/g,
			da = /\W/;
		[0, 0].sort(function() {
			B = false;
			return 0
		});
		var W = function(h, x, O, V) {
				O = O || [];
				var ea = x = x || Aa;
				if (x.nodeType !== 1 && x.nodeType !== 9) return [];
				if (!h || typeof h !== "string") return O;
				var ia, xa, Da, Xa, D, ha = true,
					wa = W.isXML(x),
					ja = [],
					db = h;
				do {
					d.exec("");
					if (ia = d.exec(db)) {
						db = ia[3];
						ja.push(ia[1]);
						if (ia[2]) {
							Xa = ia[3];
							break
						}
					}
				} while (ia);
				if (ja.length > 1 && Pa.exec(h)) if (ja.length === 2 && ca.relative[ja[0]]) xa = Hb(ja[0] + ja[1], x, V);
				else for (xa = ca.relative[ja[0]] ? [x] : W(ja.shift(), x); ja.length;) {
					h = ja.shift();
					if (ca.relative[h]) h += ja.shift();
					xa = Hb(h, xa, V)
				} else {
					if (!V && ja.length > 1 && x.nodeType === 9 && !wa && ca.match.ID.test(ja[0]) && !ca.match.ID.test(ja[ja.length - 1])) {
						ia = W.find(ja.shift(), x, wa);
						x = ia.expr ? W.filter(ia.expr, ia.set)[0] : ia.set[0]
					}
					if (x) {
						ia = V ? {
							expr: ja.pop(),
							set: fb(V)
						} : W.find(ja.pop(), ja.length === 1 && (ja[0] === "~" || ja[0] === "+") && x.parentNode ? x.parentNode : x, wa);
						xa = ia.expr ? W.filter(ia.expr, ia.set) : ia.set;
						if (ja.length > 0) Da = fb(xa);
						else ha = false;
						for (; ja.length;) {
							ia = D = ja.pop();
							if (ca.relative[D]) ia = ja.pop();
							else D = "";
							if (ia == null) ia = x;
							ca.relative[D](Da, ia, wa)
						}
					} else Da = []
				}
				Da || (Da = xa);
				Da || W.error(D || h);
				if (p.call(Da) === "[object Array]") if (ha) if (x && x.nodeType === 1) for (h = 0; Da[h] != null; h++) {
					if (Da[h] && (Da[h] === true || Da[h].nodeType === 1 && W.contains(x, Da[h]))) O.push(xa[h])
				} else for (h = 0; Da[h] != null; h++) Da[h] && Da[h].nodeType === 1 && O.push(xa[h]);
				else O.push.apply(O, Da);
				else fb(Da, O);
				if (Xa) {
					W(Xa, ea, O, V);
					W.uniqueSort(O)
				}
				return O
			};
		W.uniqueSort = function(h) {
			if (Ta) {
				i = B;
				h.sort(Ta);
				if (i) for (var x = 1; x < h.length; x++) h[x] === h[x - 1] && h.splice(x--, 1)
			}
			return h
		};
		W.matches = function(h, x) {
			return W(h, null, null, x)
		};
		W.matchesSelector = function(h, x) {
			return W(x, null, null, [h]).length > 0
		};
		W.find = function(h, x, O) {
			var V, ea, ia, xa, Da, Xa;
			if (!h) return [];
			ea = 0;
			for (ia = ca.order.length; ea < ia; ea++) {
				Da = ca.order[ea];
				if (xa = ca.leftMatch[Da].exec(h)) {
					Xa = xa[1];
					xa.splice(1, 1);
					if (Xa.substr(Xa.length - 1) !== "\\") {
						xa[1] = (xa[1] || "").replace(C, "");
						V = ca.find[Da](xa, x, O);
						if (V != null) {
							h = h.replace(ca.match[Da], "");
							break
						}
					}
				}
			}
			V || (V = typeof x.getElementsByTagName !== "undefined" ? x.getElementsByTagName("*") : []);
			return {
				set: V,
				expr: h
			}
		};
		W.filter = function(h, x, O, V) {
			for (var ea, ia, xa, Da, Xa, D, ha, wa, ja = h, db = [], Oa = x, k = x && x[0] && W.isXML(x[0]); h && x.length;) {
				for (xa in ca.filter) if ((ea = ca.leftMatch[xa].exec(h)) != null && ea[2]) {
					D = ca.filter[xa];
					Xa = ea[1];
					ia = false;
					ea.splice(1, 1);
					if (Xa.substr(Xa.length - 1) !== "\\") {
						if (Oa === db) db = [];
						if (ca.preFilter[xa]) if (ea = ca.preFilter[xa](ea, Oa, O, db, V, k)) {
							if (ea === true) continue
						} else ia = Da = true;
						if (ea) for (ha = 0;
						(Xa = Oa[ha]) != null; ha++) if (Xa) {
							Da = D(Xa, ea, ha, Oa);
							wa = V ^ Da;
							if (O && Da != null) if (wa) ia = true;
							else Oa[ha] = false;
							else if (wa) {
								db.push(Xa);
								ia = true
							}
						}
						if (Da !== S) {
							O || (Oa = db);
							h = h.replace(ca.match[xa], "");
							if (!ia) return [];
							break
						}
					}
				}
				if (h === ja) if (ia == null) W.error(h);
				else break;
				ja = h
			}
			return Oa
		};
		W.error = function(h) {
			throw new Error("Syntax error, unrecognized expression: " + h);
		};
		var ga = W.getText = function(h) {
				var x, O;
				x = h.nodeType;
				var V = "";
				if (x) if (x === 1 || x === 9) if (typeof h.textContent === "string") return h.textContent;
				else if (typeof h.innerText === "string") return h.innerText.replace(t, "");
				else for (h = h.firstChild; h; h = h.nextSibling) V += ga(h);
				else {
					if (x === 3 || x === 4) return h.nodeValue
				} else for (x = 0; O = h[x]; x++) if (O.nodeType !== 8) V += ga(O);
				return V
			},
			ca = W.selectors = {
				order: ["ID", "NAME", "TAG"],
				match: {
					ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
					ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
					TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
					CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
					POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
					PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
				},
				leftMatch: {},
				attrMap: {
					"class": "className",
					"for": "htmlFor"
				},
				attrHandle: {
					href: function(h) {
						return h.getAttribute("href")
					},
					type: function(h) {
						return h.getAttribute("type")
					}
				},
				relative: {
					"+": function(h, x) {
						var O = typeof x === "string",
							V = O && !da.test(x);
						O = O && !V;
						if (V) x = x.toLowerCase();
						V = 0;
						for (var ea = h.length, ia; V < ea; V++) if (ia = h[V]) {
							for (;
							(ia = ia.previousSibling) && ia.nodeType !== 1;);
							h[V] = O || ia && ia.nodeName.toLowerCase() === x ? ia || false : ia === x
						}
						O && W.filter(x, h, true)
					},
					">": function(h, x) {
						var O, V = typeof x === "string",
							ea = 0,
							ia = h.length;
						if (V && !da.test(x)) for (x = x.toLowerCase(); ea < ia; ea++) {
							if (O = h[ea]) {
								O = O.parentNode;
								h[ea] = O.nodeName.toLowerCase() === x ? O : false
							}
						} else {
							for (; ea < ia; ea++) if (O = h[ea]) h[ea] = V ? O.parentNode : O.parentNode === x;
							V && W.filter(x, h, true)
						}
					},
					"": function(h, x, O) {
						var V, ea = l++,
							ia = b;
						if (typeof x === "string" && !da.test(x)) {
							V = x = x.toLowerCase();
							ia = a
						}
						ia("parentNode", x, ea, h, V, O)
					},
					"~": function(h, x, O) {
						var V, ea = l++,
							ia = b;
						if (typeof x === "string" && !da.test(x)) {
							V = x = x.toLowerCase();
							ia = a
						}
						ia("previousSibling", x, ea, h, V, O)
					}
				},
				find: {
					ID: function(h, x, O) {
						if (typeof x.getElementById !== "undefined" && !O) return (h = x.getElementById(h[1])) && h.parentNode ? [h] : []
					},
					NAME: function(h, x) {
						if (typeof x.getElementsByName !== "undefined") {
							var O = [];
							x = x.getElementsByName(h[1]);
							for (var V = 0, ea = x.length; V < ea; V++) x[V].getAttribute("name") === h[1] && O.push(x[V]);
							return O.length === 0 ? null : O
						}
					},
					TAG: function(h, x) {
						if (typeof x.getElementsByTagName !== "undefined") return x.getElementsByTagName(h[1])
					}
				},
				preFilter: {
					CLASS: function(h, x, O, V, ea, ia) {
						h = " " + h[1].replace(C, "") + " ";
						if (ia) return h;
						ia = 0;
						for (var xa;
						(xa = x[ia]) != null; ia++) if (xa) if (ea ^ (xa.className && (" " + xa.className + " ").replace(/[\t\n\r]/g, " ").indexOf(h) >= 0)) O || V.push(xa);
						else if (O) x[ia] = false;
						return false
					},
					ID: function(h) {
						return h[1].replace(C, "")
					},
					TAG: function(h) {
						return h[1].replace(C, "").toLowerCase()
					},
					CHILD: function(h) {
						if (h[1] === "nth") {
							h[2] || W.error(h[0]);
							h[2] = h[2].replace(/^\+|\s*/g, "");
							var x = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(h[2] === "even" && "2n" || h[2] === "odd" && "2n+1" || !/\D/.test(h[2]) && "0n+" + h[2] || h[2]);
							h[2] = x[1] + (x[2] || 1) - 0;
							h[3] = x[3] - 0
						} else h[2] && W.error(h[0]);
						h[0] = l++;
						return h
					},
					ATTR: function(h, x, O, V, ea, ia) {
						x = h[1] = h[1].replace(C, "");
						if (!ia && ca.attrMap[x]) h[1] = ca.attrMap[x];
						h[4] = (h[4] || h[5] || "").replace(C, "");
						if (h[2] === "~=") h[4] = " " + h[4] + " ";
						return h
					},
					PSEUDO: function(h, x, O, V, ea) {
						if (h[1] === "not") if ((d.exec(h[3]) || "").length > 1 || /^\w/.test(h[3])) h[3] = W(h[3], null, null, x);
						else {
							h = W.filter(h[3], x, O, true ^ ea);
							O || V.push.apply(V, h);
							return false
						} else if (ca.match.POS.test(h[0]) || ca.match.CHILD.test(h[0])) return true;
						return h
					},
					POS: function(h) {
						h.unshift(true);
						return h
					}
				},
				filters: {
					enabled: function(h) {
						return h.disabled === false && h.type !== "hidden"
					},
					disabled: function(h) {
						return h.disabled === true
					},
					checked: function(h) {
						return h.checked === true
					},
					selected: function(h) {
						return h.selected === true
					},
					parent: function(h) {
						return !!h.firstChild
					},
					empty: function(h) {
						return !h.firstChild
					},
					has: function(h, x, O) {
						return !!W(O[3], h).length
					},
					header: function(h) {
						return /h\d/i.test(h.nodeName)
					},
					text: function(h) {
						var x = h.getAttribute("type"),
							O = h.type;
						return h.nodeName.toLowerCase() === "input" && "text" === O && (x === O || x === null)
					},
					radio: function(h) {
						return h.nodeName.toLowerCase() === "input" && "radio" === h.type
					},
					checkbox: function(h) {
						return h.nodeName.toLowerCase() === "input" && "checkbox" === h.type
					},
					file: function(h) {
						return h.nodeName.toLowerCase() === "input" && "file" === h.type
					},
					password: function(h) {
						return h.nodeName.toLowerCase() === "input" && "password" === h.type
					},
					submit: function(h) {
						var x = h.nodeName.toLowerCase();
						return (x === "input" || x === "button") && "submit" === h.type
					},
					image: function(h) {
						return h.nodeName.toLowerCase() === "input" && "image" === h.type
					},
					reset: function(h) {
						var x = h.nodeName.toLowerCase();
						return (x === "input" || x === "button") && "reset" === h.type
					},
					button: function(h) {
						var x = h.nodeName.toLowerCase();
						return x === "input" && "button" === h.type || x === "button"
					},
					input: function(h) {
						return /input|select|textarea|button/i.test(h.nodeName)
					},
					focus: function(h) {
						return h === h.ownerDocument.activeElement
					}
				},
				setFilters: {
					first: function(h, x) {
						return x === 0
					},
					last: function(h, x, O, V) {
						return x === V.length - 1
					},
					even: function(h, x) {
						return x % 2 === 0
					},
					odd: function(h, x) {
						return x % 2 === 1
					},
					lt: function(h, x, O) {
						return x < O[3] - 0
					},
					gt: function(h, x, O) {
						return x > O[3] - 0
					},
					nth: function(h, x, O) {
						return O[3] - 0 === x
					},
					eq: function(h, x, O) {
						return O[3] - 0 === x
					}
				},
				filter: {
					PSEUDO: function(h, x, O, V) {
						var ea = x[1],
							ia = ca.filters[ea];
						if (ia) return ia(h, O, x, V);
						else if (ea === "contains") return (h.textContent || h.innerText || ga([h]) || "").indexOf(x[3]) >= 0;
						else if (ea === "not") {
							x = x[3];
							O = 0;
							for (V = x.length; O < V; O++) if (x[O] === h) return false;
							return true
						} else W.error(ea)
					},
					CHILD: function(h, x) {
						var O, V, ea, ia;
						O = x[1];
						var xa = h;
						switch (O) {
						case "only":
						case "first":
							for (; xa = xa.previousSibling;) if (xa.nodeType === 1) return false;
							if (O === "first") return true;
							xa = h;
						case "last":
							for (; xa = xa.nextSibling;) if (xa.nodeType === 1) return false;
							return true;
						case "nth":
							O = x[2];
							V = x[3];
							if (O === 1 && V === 0) return true;
							x = x[0];
							if ((ea = h.parentNode) && (ea[f] !== x || !h.nodeIndex)) {
								ia = 0;
								for (xa = ea.firstChild; xa; xa = xa.nextSibling) if (xa.nodeType === 1) xa.nodeIndex = ++ia;
								ea[f] = x
							}
							h = h.nodeIndex - V;
							return O === 0 ? h === 0 : h % O === 0 && h / O >= 0
						}
					},
					ID: function(h, x) {
						return h.nodeType === 1 && h.getAttribute("id") === x
					},
					TAG: function(h, x) {
						return x === "*" && h.nodeType === 1 || !! h.nodeName && h.nodeName.toLowerCase() === x
					},
					CLASS: function(h, x) {
						return (" " + (h.className || h.getAttribute("class")) + " ").indexOf(x) > -1
					},
					ATTR: function(h, x) {
						var O = x[1];
						h = W.attr ? W.attr(h, O) : ca.attrHandle[O] ? ca.attrHandle[O](h) : h[O] != null ? h[O] : h.getAttribute(O);
						O = h + "";
						var V = x[2];
						x = x[4];
						return h == null ? V === "!=" : !V && W.attr ? h != null : V === "=" ? O === x : V === "*=" ? O.indexOf(x) >= 0 : V === "~=" ? (" " + O + " ").indexOf(x) >= 0 : !x ? O && h !== false : V === "!=" ? O !== x : V === "^=" ? O.indexOf(x) === 0 : V === "$=" ? O.substr(O.length - x.length) === x : V === "|=" ? O === x || O.substr(0, x.length + 1) === x + "-" : false
					},
					POS: function(h, x, O, V) {
						var ea = ca.setFilters[x[2]];
						if (ea) return ea(h, O, x, V)
					}
				}
			},
			Pa = ca.match.POS,
			Qa = function(h, x) {
				return "\\" + (x - 0 + 1)
			};
		for (var bb in ca.match) {
			ca.match[bb] = new RegExp(ca.match[bb].source + /(?![^\[]*\])(?![^\(]*\))/.source);
			ca.leftMatch[bb] = new RegExp(/(^(?:.|\r|\n)*?)/.source + ca.match[bb].source.replace(/\\(\d+)/g, Qa))
		}
		var fb = function(h, x) {
				h = Array.prototype.slice.call(h, 0);
				if (x) {
					x.push.apply(x, h);
					return x
				}
				return h
			};
		try {
			Array.prototype.slice.call(Aa.documentElement.childNodes, 0)
		} catch (Rb) {
			fb = function(h, x) {
				var O = 0;
				x = x || [];
				if (p.call(h) === "[object Array]") Array.prototype.push.apply(x, h);
				else if (typeof h.length === "number") for (var V = h.length; O < V; O++) x.push(h[O]);
				else for (; h[O]; O++) x.push(h[O]);
				return x
			}
		}
		var Ta, nb;
		if (Aa.documentElement.compareDocumentPosition) Ta = function(h, x) {
			if (h === x) {
				i = true;
				return 0
			}
			if (!h.compareDocumentPosition || !x.compareDocumentPosition) return h.compareDocumentPosition ? -1 : 1;
			return h.compareDocumentPosition(x) & 4 ? -1 : 1
		};
		else {
			Ta = function(h, x) {
				if (h === x) {
					i = true;
					return 0
				} else if (h.sourceIndex && x.sourceIndex) return h.sourceIndex - x.sourceIndex;
				var O, V, ea = [],
					ia = [];
				O = h.parentNode;
				V = x.parentNode;
				var xa = O;
				if (O === V) return nb(h, x);
				else if (O) {
					if (!V) return 1
				} else return -1;
				for (; xa;) {
					ea.unshift(xa);
					xa = xa.parentNode
				}
				for (xa = V; xa;) {
					ia.unshift(xa);
					xa = xa.parentNode
				}
				O = ea.length;
				V = ia.length;
				for (xa = 0; xa < O && xa < V; xa++) if (ea[xa] !== ia[xa]) return nb(ea[xa], ia[xa]);
				return xa === O ? nb(h, ia[xa], -1) : nb(ea[xa], x, 1)
			};
			nb = function(h, x, O) {
				if (h === x) return O;
				for (h = h.nextSibling; h;) {
					if (h === x) return -1;
					h = h.nextSibling
				}
				return 1
			}
		}(function() {
			var h = Aa.createElement("div"),
				x = "script" + (new Date).getTime(),
				O = Aa.documentElement;
			h.innerHTML = "<a name='" + x + "'/>";
			O.insertBefore(h, O.firstChild);
			if (Aa.getElementById(x)) {
				ca.find.ID = function(V, ea, ia) {
					if (typeof ea.getElementById !== "undefined" && !ia) return (ea = ea.getElementById(V[1])) ? ea.id === V[1] || typeof ea.getAttributeNode !== "undefined" && ea.getAttributeNode("id").nodeValue === V[1] ? [ea] : S : []
				};
				ca.filter.ID = function(V, ea) {
					var ia = typeof V.getAttributeNode !== "undefined" && V.getAttributeNode("id");
					return V.nodeType === 1 && ia && ia.nodeValue === ea
				}
			}
			O.removeChild(h);
			O = h = null
		})();
		(function() {
			var h = Aa.createElement("div");
			h.appendChild(Aa.createComment(""));
			if (h.getElementsByTagName("*").length > 0) ca.find.TAG = function(x, O) {
				O = O.getElementsByTagName(x[1]);
				if (x[1] === "*") {
					x = [];
					for (var V = 0; O[V]; V++) O[V].nodeType === 1 && x.push(O[V]);
					O = x
				}
				return O
			};
			h.innerHTML = "<a href='#'></a>";
			if (h.firstChild && typeof h.firstChild.getAttribute !== "undefined" && h.firstChild.getAttribute("href") !== "#") ca.attrHandle.href = function(x) {
				return x.getAttribute("href", 2)
			};
			h = null
		})();
		Aa.querySelectorAll &&
		function() {
			var h = W,
				x = Aa.createElement("div");
			x.innerHTML = "<p class='TEST'></p>";
			if (!(x.querySelectorAll && x.querySelectorAll(".TEST").length === 0)) {
				W = function(V, ea, ia, xa) {
					ea = ea || Aa;
					if (!xa && !W.isXML(ea)) {
						var Da = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(V);
						if (Da && (ea.nodeType === 1 || ea.nodeType === 9)) if (Da[1]) return fb(ea.getElementsByTagName(V), ia);
						else if (Da[2] && ca.find.CLASS && ea.getElementsByClassName) return fb(ea.getElementsByClassName(Da[2]), ia);
						if (ea.nodeType === 9) {
							if (V === "body" && ea.body) return fb([ea.body], ia);
							else if (Da && Da[3]) {
								var Xa = ea.getElementById(Da[3]);
								if (Xa && Xa.parentNode) {
									if (Xa.id === Da[3]) return fb([Xa], ia)
								} else return fb([], ia)
							}
							try {
								return fb(ea.querySelectorAll(V), ia)
							} catch (D) {}
						} else if (ea.nodeType === 1 && ea.nodeName.toLowerCase() !== "object") {
							Da = ea;
							var ha = (Xa = ea.getAttribute("id")) || "__sizzle__",
								wa = ea.parentNode,
								ja = /^\s*[+~]/.test(V);
							if (Xa) ha = ha.replace(/'/g, "\\$&");
							else ea.setAttribute("id", ha);
							if (ja && wa) ea = ea.parentNode;
							try {
								if (!ja || wa) return fb(ea.querySelectorAll("[id='" + ha + "'] " + V), ia)
							} catch (db) {} finally {
								Xa || Da.removeAttribute("id")
							}
						}
					}
					return h(V, ea, ia, xa)
				};
				for (var O in h) W[O] = h[O];
				x = null
			}
		}();
		(function() {
			var h = Aa.documentElement,
				x = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.msMatchesSelector;
			if (x) {
				var O = !x.call(Aa.createElement("div"), "div"),
					V = false;
				try {
					x.call(Aa.documentElement, "[test!='']:sizzle")
				} catch (ea) {
					V = true
				}
				W.matchesSelector = function(ia, xa) {
					xa = xa.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!W.isXML(ia)) try {
						if (V || !ca.match.PSEUDO.test(xa) && !/!=/.test(xa)) {
							var Da = x.call(ia, xa);
							if (Da || !O || ia.document && ia.document.nodeType !== 11) return Da
						}
					} catch (Xa) {}
					return W(xa, null, null, [ia]).length > 0
				}
			}
		})();
		(function() {
			var h = Aa.createElement("div");
			h.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if (!(!h.getElementsByClassName || h.getElementsByClassName("e").length === 0)) {
				h.lastChild.className = "e";
				if (h.getElementsByClassName("e").length !== 1) {
					ca.order.splice(1, 0, "CLASS");
					ca.find.CLASS = function(x, O, V) {
						if (typeof O.getElementsByClassName !== "undefined" && !V) return O.getElementsByClassName(x[1])
					};
					h = null
				}
			}
		})();
		W.contains = Aa.documentElement.contains ?
		function(h, x) {
			return h !== x && (h.contains ? h.contains(x) : true)
		} : Aa.documentElement.compareDocumentPosition ?
		function(h, x) {
			return !!(h.compareDocumentPosition(x) & 16)
		} : function() {
			return false
		};
		W.isXML = function(h) {
			return (h = (h ? h.ownerDocument || h : 0).documentElement) ? h.nodeName !== "HTML" : false
		};
		var Hb = function(h, x, O) {
				var V, ea = [],
					ia = "";
				for (x = x.nodeType ? [x] : x; V = ca.match.PSEUDO.exec(h);) {
					ia += V[0];
					h = h.replace(ca.match.PSEUDO, "")
				}
				h = ca.relative[h] ? h + "*" : h;
				V = 0;
				for (var xa = x.length; V < xa; V++) W(h, x[V], ea, O);
				return W.filter(ia, ea)
			};
		W.attr = c.attr;
		W.selectors.attrMap = {};
		c.find = W;
		c.expr = W.selectors;
		c.expr[":"] = c.expr.filters;
		c.unique = W.uniqueSort;
		c.text = W.getText;
		c.isXMLDoc = W.isXML;
		c.contains = W.contains
	})();
	var Ac = /Until$/,
		pd = /^(?:parents|prevUntil|prevAll)/,
		qd = /,/,
		o = /^.[^:#\[\.,]*$/,
		u = Array.prototype.slice,
		M = c.expr.match.POS,
		X = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	c.fn.extend({
		find: function(a) {
			var b = this,
				d, f;
			if (typeof a !== "string") return c(a).filter(function() {
				d = 0;
				for (f = b.length; d < f; d++) if (c.contains(b[d], this)) return true
			});
			var l = this.pushStack("", "find", a),
				p, i, B;
			d = 0;
			for (f = this.length; d < f; d++) {
				p = l.length;
				c.find(a, this[d], l);
				if (d > 0) for (i = p; i < l.length; i++) for (B = 0; B < p; B++) if (l[B] === l[i]) {
					l.splice(i--, 1);
					break
				}
			}
			return l
		},
		has: function(a) {
			var b = c(a);
			return this.filter(function() {
				for (var d = 0, f = b.length; d < f; d++) if (c.contains(this, b[d])) return true
			})
		},
		not: function(a) {
			return this.pushStack(ub(this, a, false), "not", a)
		},
		filter: function(a) {
			return this.pushStack(ub(this, a, true), "filter", a)
		},
		is: function(a) {
			return !!a && (typeof a === "string" ? M.test(a) ? c(a, this.context).index(this[0]) >= 0 : c.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			var d = [],
				f, l, p = this[0];
			if (c.isArray(a)) {
				for (l = 1; p && p.ownerDocument && p !== b;) {
					for (f = 0; f < a.length; f++) c(p).is(a[f]) && d.push({
						selector: a[f],
						elem: p,
						level: l
					});
					p = p.parentNode;
					l++
				}
				return d
			}
			var i = M.test(a) || typeof a !== "string" ? c(a, b || this.context) : 0;
			f = 0;
			for (l = this.length; f < l; f++) for (p = this[f]; p;) if (i ? i.index(p) > -1 : c.find.matchesSelector(p, a)) {
				d.push(p);
				break
			} else {
				p = p.parentNode;
				if (!p || !p.ownerDocument || p === b || p.nodeType === 11) break
			}
			d = d.length > 1 ? c.unique(d) : d;
			return this.pushStack(d, "closest", a)
		},
		index: function(a) {
			if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
			if (typeof a === "string") return c.inArray(this[0], c(a));
			return c.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(a, b) {
			a = typeof a === "string" ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a);
			b = c.merge(this.get(), a);
			return this.pushStack(Za(a[0]) || Za(b[0]) ? b : c.unique(b))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	});
	c.each({
		parent: function(a) {
			return (a = a.parentNode) && a.nodeType !== 11 ? a : null
		},
		parents: function(a) {
			return c.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, d) {
			return c.dir(a, "parentNode", d)
		},
		next: function(a) {
			return c.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return c.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return c.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return c.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, d) {
			return c.dir(a, "nextSibling", d)
		},
		prevUntil: function(a, b, d) {
			return c.dir(a, "previousSibling", d)
		},
		siblings: function(a) {
			return c.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return c.sibling(a.firstChild)
		},
		contents: function(a) {
			return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
		}
	}, function(a, b) {
		c.fn[a] = function(d, f) {
			var l = c.map(this, b, d);
			Ac.test(a) || (f = d);
			if (f && typeof f === "string") l = c.filter(f, l);
			l = this.length > 1 && !X[a] ? c.unique(l) : l;
			if ((this.length > 1 || qd.test(f)) && pd.test(a)) l = l.reverse();
			return this.pushStack(l, a, u.call(arguments).join(","))
		}
	});
	c.extend({
		filter: function(a, b, d) {
			if (d) a = ":not(" + a + ")";
			return b.length === 1 ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
		},
		dir: function(a, b, d) {
			var f = [];
			for (a = a[b]; a && a.nodeType !== 9 && (d === S || a.nodeType !== 1 || !c(a).is(d));) {
				a.nodeType === 1 && f.push(a);
				a = a[b]
			}
			return f
		},
		nth: function(a, b, d) {
			b = b || 1;
			for (var f = 0; a; a = a[d]) if (a.nodeType === 1 && ++f === b) break;
			return a
		},
		sibling: function(a, b) {
			for (var d = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && d.push(a);
			return d
		}
	});
	var ra = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		E = / jQuery\d+="(?:\d+|null)"/g,
		sa = /^\s+/,
		pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		ba = /<([\w:]+)/,
		j = /<tbody/i,
		m = /<|&#?\w+;/,
		s = /<(?:script|style)/i,
		n = /<(?:script|object|embed|option|style)/i,
		y = new RegExp("<(?:" + ra + ")", "i"),
		A = /checked\s*(?:[^=]|=\s*.checked.)/i,
		G = /\/(java|ecma)script/i,
		L = /^\s*<!(?:\[CDATA\[|\-\-)/,
		P = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		aa = Bb(Aa);
	P.optgroup = P.option;
	P.tbody = P.tfoot = P.colgroup = P.caption = P.thead;
	P.th = P.td;
	if (!c.support.htmlSerialize) P._default = [1, "div<div>", "</div>"];
	c.fn.extend({
		text: function(a) {
			if (c.isFunction(a)) return this.each(function(b) {
				var d = c(this);
				d.text(a.call(this, b, d.text()))
			});
			if (typeof a !== "object" && a !== S) return this.empty().append((this[0] && this[0].ownerDocument || Aa).createTextNode(a));
			return c.text(this)
		},
		wrapAll: function(a) {
			if (c.isFunction(a)) return this.each(function(d) {
				c(this).wrapAll(a.call(this, d))
			});
			if (this[0]) {
				var b = c(a, this[0].ownerDocument).eq(0).clone(true);
				this[0].parentNode && b.insertBefore(this[0]);
				b.map(function() {
					for (var d = this; d.firstChild && d.firstChild.nodeType === 1;) d = d.firstChild;
					return d
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			if (c.isFunction(a)) return this.each(function(b) {
				c(this).wrapInner(a.call(this, b))
			});
			return this.each(function() {
				var b = c(this),
					d = b.contents();
				d.length ? d.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = c.isFunction(a);
			return this.each(function(d) {
				c(this).wrapAll(b ? a.call(this, d) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, true, function(a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, true, function(a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(b) {
				this.parentNode.insertBefore(b, this)
			});
			else if (arguments.length) {
				var a = c.clean(arguments);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(b) {
				this.parentNode.insertBefore(b, this.nextSibling)
			});
			else if (arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, c.clean(arguments));
				return a
			}
		},
		remove: function(a, b) {
			for (var d = 0, f;
			(f = this[d]) != null; d++) if (!a || c.filter(a, [f]).length) {
				if (!b && f.nodeType === 1) {
					c.cleanData(f.getElementsByTagName("*"));
					c.cleanData([f])
				}
				f.parentNode && f.parentNode.removeChild(f)
			}
			return this
		},
		empty: function() {
			for (var a = 0, b;
			(b = this[a]) != null; a++) for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
			return this
		},
		clone: function(a, b) {
			a = a == null ? false : a;
			b = b == null ? a : b;
			return this.map(function() {
				return c.clone(this, a, b)
			})
		},
		html: function(a) {
			if (a === S) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(E, "") : null;
			else if (typeof a === "string" && !s.test(a) && (c.support.leadingWhitespace || !sa.test(a)) && !P[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
				a = a.replace(pa, "<$1></$2>");
				try {
					for (var b = 0, d = this.length; b < d; b++) if (this[b].nodeType === 1) {
						c.cleanData(this[b].getElementsByTagName("*"));
						this[b].innerHTML = a
					}
				} catch (f) {
					this.empty().append(a)
				}
			} else c.isFunction(a) ? this.each(function(l) {
				var p = c(this);
				p.html(a.call(this, l, p.html()))
			}) : this.empty().append(a);
			return this
		},
		replaceWith: function(a) {
			if (this[0] && this[0].parentNode) {
				if (c.isFunction(a)) return this.each(function(b) {
					var d = c(this),
						f = d.html();
					d.replaceWith(a.call(this, b, f))
				});
				if (typeof a !== "string") a = c(a).detach();
				return this.each(function() {
					var b = this.nextSibling,
						d = this.parentNode;
					c(this).remove();
					b ? c(b).before(a) : c(d).append(a)
				})
			} else return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this
		},
		detach: function(a) {
			return this.remove(a, true)
		},
		domManip: function(a, b, d) {
			var f, l, p, i = a[0],
				B = [];
			if (!c.support.checkClone && arguments.length === 3 && typeof i === "string" && A.test(i)) return this.each(function() {
				c(this).domManip(a, b, d, true)
			});
			if (c.isFunction(i)) return this.each(function(W) {
				var ga = c(this);
				a[0] = i.call(this, W, b ? ga.html() : S);
				ga.domManip(a, b, d)
			});
			if (this[0]) {
				f = i && i.parentNode;
				f = c.support.parentNode && f && f.nodeType === 11 && f.childNodes.length === this.length ? {
					fragment: f
				} : c.buildFragment(a, this, B);
				p = f.fragment;
				if (l = p.childNodes.length === 1 ? (p = p.firstChild) : p.firstChild) {
					b = b && c.nodeName(l, "tr");
					for (var C = 0, t = this.length, da = t - 1; C < t; C++) d.call(b ? xc(this[C], l) : this[C], f.cacheable || t > 1 && C < da ? c.clone(p, true, true) : p)
				}
				B.length && c.each(B, Gc)
			}
			return this
		}
	});
	c.buildFragment = function(a, b, d) {
		var f, l, p, i, B = a[0];
		if (b && b[0]) i = b[0].ownerDocument || b[0];
		i.createDocumentFragment || (i = Aa);
		if (a.length === 1 && typeof B === "string" && B.length < 512 && i === Aa && B.charAt(0) === "<" && !n.test(B) && (c.support.checkClone || !A.test(B)) && (c.support.html5Clone || !y.test(B))) {
			l = true;
			if ((p = c.fragments[B]) && p !== 1) f = p
		}
		if (!f) {
			f = i.createDocumentFragment();
			c.clean(a, i, f, d)
		}
		if (l) c.fragments[B] = p ? f : 1;
		return {
			fragment: f,
			cacheable: l
		}
	};
	c.fragments = {};
	c.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		c.fn[a] = function(d) {
			var f = [];
			d = c(d);
			var l = this.length === 1 && this[0].parentNode;
			if (l && l.nodeType === 11 && l.childNodes.length === 1 && d.length === 1) {
				d[b](this[0]);
				return this
			} else {
				l = 0;
				for (var p = d.length; l < p; l++) {
					var i = (l > 0 ? this.clone(true) : this).get();
					c(d[l])[b](i);
					f = f.concat(i)
				}
				return this.pushStack(f, a, d.selector)
			}
		}
	});
	c.extend({
		clone: function(a, b, d) {
			var f, l, p, i = c.support.html5Clone || !y.test("<" + a.nodeName) ? a.cloneNode(true) : Fc(a);
			if ((!c.support.noCloneEvent || !c.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !c.isXMLDoc(a)) {
				Qb(a, i);
				f = lc(a);
				l = lc(i);
				for (p = 0; f[p]; ++p) l[p] && Qb(f[p], l[p])
			}
			if (b) {
				pc(a, i);
				if (d) {
					f = lc(a);
					l = lc(i);
					for (p = 0; f[p]; ++p) pc(f[p], l[p])
				}
			}
			return i
		},
		clean: function(a, b, d, f) {
			b = b || Aa;
			if (typeof b.createElement === "undefined") b = b.ownerDocument || b[0] && b[0].ownerDocument || Aa;
			for (var l = [], p, i = 0, B;
			(B = a[i]) != null; i++) {
				if (typeof B === "number") B += "";
				if (B) {
					if (typeof B === "string") if (m.test(B)) {
						B = B.replace(pa, "<$1></$2>");
						p = (ba.exec(B) || ["", ""])[1].toLowerCase();
						var C = P[p] || P._default,
							t = C[0],
							da = b.createElement("div");
						b === Aa ? aa.appendChild(da) : Bb(b).appendChild(da);
						for (da.innerHTML = C[1] + B + C[2]; t--;) da = da.lastChild;
						if (!c.support.tbody) {
							t = j.test(B);
							C = p === "table" && !t ? da.firstChild && da.firstChild.childNodes : C[1] === "<table>" && !t ? da.childNodes : [];
							for (p = C.length - 1; p >= 0; --p) c.nodeName(C[p], "tbody") && !C[p].childNodes.length && C[p].parentNode.removeChild(C[p])
						}!c.support.leadingWhitespace && sa.test(B) && da.insertBefore(b.createTextNode(sa.exec(B)[0]), da.firstChild);
						B = da.childNodes
					} else B = b.createTextNode(B);
					var W;
					if (!c.support.appendChecked) if (B[0] && typeof(W = B.length) === "number") for (p = 0; p < W; p++) Vc(B[p]);
					else Vc(B);
					if (B.nodeType) l.push(B);
					else l = c.merge(l, B)
				}
			}
			if (d) {
				a = function(ga) {
					return !ga.type || G.test(ga.type)
				};
				for (i = 0; l[i]; i++) if (f && c.nodeName(l[i], "script") && (!l[i].type || l[i].type.toLowerCase() === "text/javascript")) f.push(l[i].parentNode ? l[i].parentNode.removeChild(l[i]) : l[i]);
				else {
					if (l[i].nodeType === 1) {
						b = c.grep(l[i].getElementsByTagName("script"), a);
						l.splice.apply(l, [i + 1, 0].concat(b))
					}
					d.appendChild(l[i])
				}
			}
			return l
		},
		cleanData: function(a) {
			for (var b, d, f = c.cache, l = c.event.special, p = c.support.deleteExpando, i = 0, B;
			(B = a[i]) != null; i++) if (!(B.nodeName && c.noData[B.nodeName.toLowerCase()])) if (d = B[c.expando]) {
				if ((b = f[d]) && b.events) {
					for (var C in b.events) l[C] ? c.event.remove(B, C) : c.removeEvent(B, C, b.handle);
					if (b.handle) b.handle.elem = null
				}
				if (p) delete B[c.expando];
				else B.removeAttribute && B.removeAttribute(c.expando);
				delete f[d]
			}
		}
	});
	var ta = /alpha\([^)]*\)/i,
		ya = /opacity=([^)]*)/,
		Ra = /([A-Z]|^ms)/g,
		va = /^-?\d+(?:px)?$/i,
		Q = /^-?\d/,
		ka = /^([\-+])=([\-+.\de]+)/,
		Ba = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ca = ["Left", "Right"],
		Ma = ["Top", "Bottom"],
		rb, eb, Eb;
	c.fn.css = function(a, b) {
		if (arguments.length === 2 && b === S) return this;
		return c.access(this, a, b, true, function(d, f, l) {
			return l !== S ? c.style(d, f, l) : c.css(d, f)
		})
	};
	c.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						a = rb(a, "opacity", "opacity");
						return a === "" ? "1" : a
					} else return a.style.opacity
				}
			}
		},
		cssNumber: {
			fillOpacity: true,
			fontWeight: true,
			lineHeight: true,
			opacity: true,
			orphans: true,
			widows: true,
			zIndex: true,
			zoom: true
		},
		cssProps: {
			"float": c.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, b, d, f) {
			if (!(!a || a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
				var l, p = c.camelCase(b),
					i = a.style,
					B = c.cssHooks[p];
				b = c.cssProps[p] || p;
				if (d !== S) {
					f = typeof d;
					if (f === "string" && (l = ka.exec(d))) {
						d = +(l[1] + 1) * +l[2] + parseFloat(c.css(a, b));
						f = "number"
					}
					if (!(d == null || f === "number" && isNaN(d))) {
						if (f === "number" && !c.cssNumber[p]) d += "px";
						if (!B || !("set" in B) || (d = B.set(a, d)) !== S) try {
							i[b] = d
						} catch (C) {}
					}
				} else {
					if (B && "get" in B && (l = B.get(a, false, f)) !== S) return l;
					return i[b]
				}
			}
		},
		css: function(a, b, d) {
			var f, l;
			b = c.camelCase(b);
			l = c.cssHooks[b];
			b = c.cssProps[b] || b;
			if (b === "cssFloat") b = "float";
			if (l && "get" in l && (f = l.get(a, true, d)) !== S) return f;
			else if (rb) return rb(a, b)
		},
		swap: function(a, b, d) {
			var f = {};
			for (var l in b) {
				f[l] = a.style[l];
				a.style[l] = b[l]
			}
			d.call(a);
			for (l in b) a.style[l] = f[l]
		}
	});
	c.curCSS = c.css;
	c.each(["height", "width"], function(a, b) {
		c.cssHooks[b] = {
			get: function(d, f, l) {
				var p;
				if (f) {
					if (d.offsetWidth !== 0) return Hc(d, b, l);
					else c.swap(d, Ba, function() {
						p = Hc(d, b, l)
					});
					return p
				}
			},
			set: function(d, f) {
				if (va.test(f)) {
					f = parseFloat(f);
					if (f >= 0) return f + "px"
				} else return f
			}
		}
	});
	if (!c.support.opacity) c.cssHooks.opacity = {
		get: function(a, b) {
			return ya.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var d = a.style;
			a = a.currentStyle;
			var f = c.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
				l = a && a.filter || d.filter || "";
			d.zoom = 1;
			if (b >= 1 && c.trim(l.replace(ta, "")) === "") {
				d.removeAttribute("filter");
				if (a && !a.filter) return
			}
			d.filter = ta.test(l) ? l.replace(ta, f) : l + " " + f
		}
	};
	c(function() {
		if (!c.support.reliableMarginRight) c.cssHooks.marginRight = {
			get: function(a, b) {
				var d;
				c.swap(a, {
					display: "inline-block"
				}, function() {
					d = b ? rb(a, "margin-right", "marginRight") : a.style.marginRight
				});
				return d
			}
		}
	});
	if (Aa.defaultView && Aa.defaultView.getComputedStyle) eb = function(a, b) {
		var d, f, l;
		b = b.replace(Ra, "-$1").toLowerCase();
		if ((f = a.ownerDocument.defaultView) && (l = f.getComputedStyle(a, null))) {
			d = l.getPropertyValue(b);
			if (d === "" && !c.contains(a.ownerDocument.documentElement, a)) d = c.style(a, b)
		}
		return d
	};
	if (Aa.documentElement.currentStyle) Eb = function(a, b) {
		var d, f, l = a.currentStyle && a.currentStyle[b],
			p = a.style;
		if (l === null && p && (d = p[b])) l = d;
		if (!va.test(l) && Q.test(l)) {
			d = p.left;
			if (f = a.runtimeStyle && a.runtimeStyle.left) a.runtimeStyle.left = a.currentStyle.left;
			p.left = b === "fontSize" ? "1em" : l || 0;
			l = p.pixelLeft + "px";
			p.left = d;
			if (f) a.runtimeStyle.left = f
		}
		return l === "" ? "auto" : l
	};
	rb = eb || Eb;
	if (c.expr && c.expr.filters) {
		c.expr.filters.hidden = function(a) {
			var b = a.offsetHeight;
			return a.offsetWidth === 0 && b === 0 || !c.support.reliableHiddenOffsets && (a.style && a.style.display || c.css(a, "display")) === "none"
		};
		c.expr.filters.visible = function(a) {
			return !c.expr.filters.hidden(a)
		}
	}
	var Cb = /%20/g,
		Nb = /\[\]$/,
		lb = /\r?\n/g,
		Db = /#.*$/,
		hc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		wb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Kc = /^(?:GET|HEAD)$/,
		Xb = /^\/\//,
		Ub = /\?/,
		Ob = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		mc = /^(?:select|textarea)/i,
		dc = /\s+/,
		hb = /([?&])_=[^&]*/,
		Ib = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		N = c.fn.load,
		Fa = {},
		Ka = {},
		Wa, kb, tb = ["*/"] + ["*"];
	try {
		Wa = Dd.href
	} catch (Yb) {
		Wa = Aa.createElement("a");
		Wa.href = "";
		Wa = Wa.href
	}
	kb = Ib.exec(Wa.toLowerCase()) || [];
	c.fn.extend({
		load: function(a, b, d) {
			if (typeof a !== "string" && N) return N.apply(this, arguments);
			else if (!this.length) return this;
			var f = a.indexOf(" ");
			if (f >= 0) {
				var l = a.slice(f, a.length);
				a = a.slice(0, f)
			}
			f = "GET";
			if (b) if (c.isFunction(b)) {
				d = b;
				b = S
			} else if (typeof b === "object") {
				b = c.param(b, c.ajaxSettings.traditional);
				f = "POST"
			}
			var p = this;
			c.ajax({
				url: a,
				type: f,
				dataType: "html",
				data: b,
				complete: function(i, B, C) {
					C = i.responseText;
					if (i.isResolved()) {
						i.done(function(t) {
							C = t
						});
						p.html(l ? c("<div>").append(C.replace(Ob, "")).find(l) : C)
					}
					d && p.each(d, [C, B, i])
				}
			});
			return this
		},
		serialize: function() {
			return c.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? c.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || mc.test(this.nodeName) || wb.test(this.type))
			}).map(function(a, b) {
				a = c(this).val();
				return a == null ? null : c.isArray(a) ? c.map(a, function(d) {
					return {
						name: b.name,
						value: d.replace(lb, "\r\n")
					}
				}) : {
					name: b.name,
					value: a.replace(lb, "\r\n")
				}
			}).get()
		}
	});
	c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		c.fn[b] = function(d) {
			return this.on(b, d)
		}
	});
	c.each(["get", "post"], function(a, b) {
		c[b] = function(d, f, l, p) {
			if (c.isFunction(f)) {
				p = p || l;
				l = f;
				f = S
			}
			return c.ajax({
				type: b,
				url: d,
				data: f,
				success: l,
				dataType: p
			})
		}
	});
	c.extend({
		getScript: function(a, b) {
			return c.get(a, S, b, "script")
		},
		getJSON: function(a, b, d) {
			return c.get(a, b, d, "json")
		},
		ajaxSetup: function(a, b) {
			if (b) ad(a, c.ajaxSettings);
			else {
				b = a;
				a = c.ajaxSettings
			}
			ad(a, b);
			return a
		},
		ajaxSettings: {
			url: Wa,
			isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(kb[1]),
			global: true,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: true,
			async: true,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": tb
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": R.String,
				"text html": true,
				"text json": c.parseJSON,
				"text xml": c.parseXML
			},
			flatOptions: {
				context: true,
				url: true
			}
		},
		ajaxPrefilter: Ic(Fa),
		ajaxTransport: Ic(Ka),
		ajax: function(a, b) {
			function d(h, x, O, V) {
				if (bb !== 2) {
					bb = 2;
					Qa && clearTimeout(Qa);
					Pa = S;
					ga = V || "";
					Ta.readyState = h > 0 ? 4 : 0;
					var ea, ia, xa;
					V = x;
					O = O ? Jc(f, Ta, O) : S;
					var Da;
					if (h >= 200 && h < 300 || h === 304) {
						if (f.ifModified) {
							if (Da = Ta.getResponseHeader("Last-Modified")) c.lastModified[t] = Da;
							if (Da = Ta.getResponseHeader("Etag")) c.etag[t] = Da
						}
						if (h === 304) {
							V = "notmodified";
							ea = true
						} else try {
							ia = cd(f, O);
							V = "success";
							ea = true
						} catch (Xa) {
							V = "parsererror";
							xa = Xa
						}
					} else {
						xa = V;
						if (!V || h) {
							V = "error";
							if (h < 0) h = 0
						}
					}
					Ta.status = h;
					Ta.statusText = "" + (x || V);
					ea ? i.resolveWith(l, [ia, V, Ta]) : i.rejectWith(l, [Ta, V, xa]);
					Ta.statusCode(C);
					C = S;
					if (fb) p.trigger("ajax" + (ea ? "Success" : "Error"), [Ta, f, ea ? ia : xa]);
					B.fireWith(l, [Ta, V]);
					if (fb) {
						p.trigger("ajaxComplete", [Ta, f]);
						--c.active || c.event.trigger("ajaxStop")
					}
				}
			}
			if (typeof a === "object") {
				b = a;
				a = S
			}
			b = b || {};
			var f = c.ajaxSetup({}, b),
				l = f.context || f,
				p = l !== f && (l.nodeType || l instanceof c) ? c(l) : c.event,
				i = c.Deferred(),
				B = c.Callbacks("once memory"),
				C = f.statusCode || {},
				t, da = {},
				W = {},
				ga, ca, Pa, Qa, bb = 0,
				fb, Rb, Ta = {
					readyState: 0,
					setRequestHeader: function(h, x) {
						if (!bb) {
							var O = h.toLowerCase();
							h = W[O] = W[O] || h;
							da[h] = x
						}
						return this
					},
					getAllResponseHeaders: function() {
						return bb === 2 ? ga : null
					},
					getResponseHeader: function(h) {
						var x;
						if (bb === 2) {
							if (!ca) for (ca = {}; x = hc.exec(ga);) ca[x[1].toLowerCase()] = x[2];
							x = ca[h.toLowerCase()]
						}
						return x === S ? null : x
					},
					overrideMimeType: function(h) {
						if (!bb) f.mimeType = h;
						return this
					},
					abort: function(h) {
						h = h || "abort";
						Pa && Pa.abort(h);
						d(0, h);
						return this
					}
				};
			i.promise(Ta);
			Ta.success = Ta.done;
			Ta.error = Ta.fail;
			Ta.complete = B.add;
			Ta.statusCode = function(h) {
				if (h) {
					var x;
					if (bb < 2) for (x in h) C[x] = [C[x], h[x]];
					else {
						x = h[Ta.status];
						Ta.then(x, x)
					}
				}
				return this
			};
			f.url = ((a || f.url) + "").replace(Db, "").replace(Xb, kb[1] + "//");
			f.dataTypes = c.trim(f.dataType || "*").toLowerCase().split(dc);
			if (f.crossDomain == null) {
				a = Ib.exec(f.url.toLowerCase());
				f.crossDomain = !! (a && (a[1] != kb[1] || a[2] != kb[2] || (a[3] || (a[1] === "http:" ? 80 : 443)) != (kb[3] || (kb[1] === "http:" ? 80 : 443))))
			}
			if (f.data && f.processData && typeof f.data !== "string") f.data = c.param(f.data, f.traditional);
			yc(Fa, f, b, Ta);
			if (bb === 2) return false;
			fb = f.global;
			f.type = f.type.toUpperCase();
			f.hasContent = !Kc.test(f.type);
			fb && c.active++ === 0 && c.event.trigger("ajaxStart");
			if (!f.hasContent) {
				if (f.data) {
					f.url += (Ub.test(f.url) ? "&" : "?") + f.data;
					delete f.data
				}
				t = f.url;
				if (f.cache === false) {
					a = c.now();
					var nb = f.url.replace(hb, "$1_=" + a);
					f.url = nb + (nb === f.url ? (Ub.test(f.url) ? "&" : "?") + "_=" + a : "")
				}
			}
			if (f.data && f.hasContent && f.contentType !== false || b.contentType) Ta.setRequestHeader("Content-Type", f.contentType);
			if (f.ifModified) {
				t = t || f.url;
				c.lastModified[t] && Ta.setRequestHeader("If-Modified-Since", c.lastModified[t]);
				c.etag[t] && Ta.setRequestHeader("If-None-Match", c.etag[t])
			}
			Ta.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + tb + "; q=0.01" : "") : f.accepts["*"]);
			for (Rb in f.headers) Ta.setRequestHeader(Rb, f.headers[Rb]);
			if (f.beforeSend && (f.beforeSend.call(l, Ta, f) === false || bb === 2)) {
				Ta.abort();
				return false
			}
			for (Rb in {
				success: 1,
				error: 1,
				complete: 1
			}) Ta[Rb](f[Rb]);
			if (Pa = yc(Ka, f, b, Ta)) {
				Ta.readyState = 1;
				fb && p.trigger("ajaxSend", [Ta, f]);
				if (f.async && f.timeout > 0) Qa = setTimeout(function() {
					Ta.abort("timeout")
				}, f.timeout);
				try {
					bb = 1;
					Pa.send(da, d)
				} catch (Hb) {
					if (bb < 2) d(-1, Hb);
					else throw Hb;
				}
			} else d(-1, "No Transport");
			return Ta
		},
		param: function(a, b) {
			var d = [],
				f = function(p, i) {
					i = c.isFunction(i) ? i() : i;
					d[d.length] = encodeURIComponent(p) + "=" + encodeURIComponent(i)
				};
			if (b === S) b = c.ajaxSettings.traditional;
			if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function() {
				f(this.name, this.value)
			});
			else for (var l in a) bd(l, a[l], b, f);
			return d.join("&").replace(Cb, "+")
		}
	});
	c.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var rd = c.now(),
		Lc = /(\=)\?(&|$)|\?\?/i;
	c.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return c.expando + "_" + rd++
		}
	});
	c.ajaxPrefilter("json jsonp", function(a, b, d) {
		b = a.contentType === "application/x-www-form-urlencoded" && typeof a.data === "string";
		if (a.dataTypes[0] === "jsonp" || a.jsonp !== false && (Lc.test(a.url) || b && Lc.test(a.data))) {
			var f, l = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
				p = R[l],
				i = a.url,
				B = a.data,
				C = "$1" + l + "$2";
			if (a.jsonp !== false) {
				i = i.replace(Lc, C);
				if (a.url === i) {
					if (b) B = B.replace(Lc, C);
					if (a.data === B) i += (/\?/.test(i) ? "&" : "?") + a.jsonp + "=" + l
				}
			}
			a.url = i;
			a.data = B;
			R[l] = function(t) {
				f = [t]
			};
			d.always(function() {
				R[l] = p;
				f && c.isFunction(p) && R[l](f[0])
			});
			a.converters["script json"] = function() {
				f || c.error(l + " was not called");
				return f[0]
			};
			a.dataTypes[0] = "json";
			return "script"
		}
	});
	c.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				c.globalEval(a);
				return a
			}
		}
	});
	c.ajaxPrefilter("script", function(a) {
		if (a.cache === S) a.cache = false;
		if (a.crossDomain) {
			a.type = "GET";
			a.global = false
		}
	});
	c.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var b, d = Aa.head || Aa.getElementsByTagName("head")[0] || Aa.documentElement;
			return {
				send: function(f, l) {
					b = Aa.createElement("script");
					b.async = "async";
					if (a.scriptCharset) b.charset = a.scriptCharset;
					b.src = a.url;
					b.onload = b.onreadystatechange = function(p, i) {
						if (i || !b.readyState || /loaded|complete/.test(b.readyState)) {
							b.onload = b.onreadystatechange = null;
							d && b.parentNode && d.removeChild(b);
							b = S;
							i || l(200, "success")
						}
					};
					d.insertBefore(b, d.firstChild)
				},
				abort: function() {
					b && b.onload(0, 1)
				}
			}
		}
	});
	var Zc = R.ActiveXObject ?
	function() {
		for (var a in Zb) Zb[a](0, 1)
	} : false, sc = 0, Zb;
	c.ajaxSettings.xhr = R.ActiveXObject ?
	function() {
		return !this.isLocal && dd() || mb()
	} : dd;
	(function(a) {
		c.extend(c.support, {
			ajax: !! a,
			cors: !! a && "withCredentials" in a
		})
	})(c.ajaxSettings.xhr());
	c.support.ajax && c.ajaxTransport(function(a) {
		if (!a.crossDomain || c.support.cors) {
			var b;
			return {
				send: function(d, f) {
					var l = a.xhr(),
						p, i;
					a.username ? l.open(a.type, a.url, a.async, a.username, a.password) : l.open(a.type, a.url, a.async);
					if (a.xhrFields) for (i in a.xhrFields) l[i] = a.xhrFields[i];
					a.mimeType && l.overrideMimeType && l.overrideMimeType(a.mimeType);
					if (!a.crossDomain && !d["X-Requested-With"]) d["X-Requested-With"] = "XMLHttpRequest";
					try {
						for (i in d) l.setRequestHeader(i, d[i])
					} catch (B) {}
					l.send(a.hasContent && a.data || null);
					b = function(C, t) {
						var da, W, ga, ca, Pa;
						try {
							if (b && (t || l.readyState === 4)) {
								b = S;
								if (p) {
									l.onreadystatechange = c.noop;
									Zc && delete Zb[p]
								}
								if (t) l.readyState !== 4 && l.abort();
								else {
									da = l.status;
									ga = l.getAllResponseHeaders();
									ca = {};
									if ((Pa = l.responseXML) && Pa.documentElement) ca.xml = Pa;
									ca.text = l.responseText;
									try {
										W = l.statusText
									} catch (Qa) {
										W = ""
									}
									if (!da && a.isLocal && !a.crossDomain) da = ca.text ? 200 : 404;
									else if (da === 1223) da = 204
								}
							}
						} catch (bb) {
							t || f(-1, bb)
						}
						ca && f(da, W, ca, ga)
					};
					if (!a.async || l.readyState === 4) b();
					else {
						p = ++sc;
						if (Zc) {
							if (!Zb) {
								Zb = {};
								c(R).unload(Zc)
							}
							Zb[p] = b
						}
						l.onreadystatechange = b
					}
				},
				abort: function() {
					b && b(0, 1)
				}
			}
		}
	});
	var Wc = {},
		Gb, e, w = /^(?:toggle|show|hide)$/,
		H = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		F, Y = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		fa;
	c.fn.extend({
		show: function(a, b, d) {
			if (a || a === 0) return this.animate(sb("show", 3), a, b, d);
			else {
				d = 0;
				for (var f = this.length; d < f; d++) {
					a = this[d];
					if (a.style) {
						b = a.style.display;
						if (!c._data(a, "olddisplay") && b === "none") b = a.style.display = "";
						b === "" && c.css(a, "display") === "none" && c._data(a, "olddisplay", ed(a.nodeName))
					}
				}
				for (d = 0; d < f; d++) {
					a = this[d];
					if (a.style) {
						b = a.style.display;
						if (b === "" || b === "none") a.style.display = c._data(a, "olddisplay") || ""
					}
				}
				return this
			}
		},
		hide: function(a, b, d) {
			if (a || a === 0) return this.animate(sb("hide", 3), a, b, d);
			else {
				d = 0;
				for (var f = this.length; d < f; d++) {
					a = this[d];
					if (a.style) {
						b = c.css(a, "display");
						b !== "none" && !c._data(a, "olddisplay") && c._data(a, "olddisplay", b)
					}
				}
				for (d = 0; d < f; d++) if (this[d].style) this[d].style.display = "none";
				return this
			}
		},
		_toggle: c.fn.toggle,
		toggle: function(a, b, d) {
			var f = typeof a === "boolean";
			if (c.isFunction(a) && c.isFunction(b)) this._toggle.apply(this, arguments);
			else a == null || f ? this.each(function() {
				var l = f ? a : c(this).is(":hidden");
				c(this)[l ? "show" : "hide"]()
			}) : this.animate(sb("toggle", 3), a, b, d);
			return this
		},
		fadeTo: function(a, b, d, f) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			}, a, d, f)
		},
		animate: function(a, b, d, f) {
			function l() {
				p.queue === false && c._mark(this);
				var i = c.extend({}, p),
					B = this.nodeType === 1,
					C = B && c(this).is(":hidden"),
					t, da, W, ga, ca;
				i.animatedProperties = {};
				for (W in a) {
					t = c.camelCase(W);
					if (W !== t) {
						a[t] = a[W];
						delete a[W]
					}
					da = a[t];
					if (c.isArray(da)) {
						i.animatedProperties[t] = da[1];
						da = a[t] = da[0]
					} else i.animatedProperties[t] = i.specialEasing && i.specialEasing[t] || i.easing || "swing";
					if (da === "hide" && C || da === "show" && !C) return i.complete.call(this);
					if (B && (t === "height" || t === "width")) {
						i.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
						if (c.css(this, "display") === "inline" && c.css(this, "float") === "none") if (!c.support.inlineBlockNeedsLayout || ed(this.nodeName) === "inline") this.style.display = "inline-block";
						else this.style.zoom = 1
					}
				}
				if (i.overflow != null) this.style.overflow = "hidden";
				for (W in a) {
					B = new c.fx(this, i, W);
					da = a[W];
					if (w.test(da)) if (t = c._data(this, "toggle" + W) || (da === "toggle" ? C ? "show" : "hide" : 0)) {
						c._data(this, "toggle" + W, t === "show" ? "hide" : "show");
						B[t]()
					} else B[da]();
					else {
						t = H.exec(da);
						ga = B.cur();
						if (t) {
							da = parseFloat(t[2]);
							ca = t[3] || (c.cssNumber[W] ? "" : "px");
							if (ca !== "px") {
								c.style(this, W, (da || 1) + ca);
								ga = (da || 1) / B.cur() * ga;
								c.style(this, W, ga + ca)
							}
							if (t[1]) da = (t[1] === "-=" ? -1 : 1) * da + ga;
							B.custom(ga, da, ca)
						} else B.custom(ga, da, "")
					}
				}
				return true
			}
			var p = c.speed(b, d, f);
			if (c.isEmptyObject(a)) return this.each(p.complete, [false]);
			a = c.extend({}, a);
			return p.queue === false ? this.each(l) : this.queue(p.queue, l)
		},
		stop: function(a, b, d) {
			if (typeof a !== "string") {
				d = b;
				b = a;
				a = S
			}
			if (b && a !== false) this.queue(a || "fx", []);
			return this.each(function() {
				function f(C, t, da) {
					t = t[da];
					c.removeData(C, da, true);
					t.stop(d)
				}
				var l, p = false,
					i = c.timers,
					B = c._data(this);
				d || c._unmark(true, this);
				if (a == null) for (l in B) B[l] && B[l].stop && l.indexOf(".run") === l.length - 4 && f(this, B, l);
				else if (B[l = a + ".run"] && B[l].stop) f(this, B, l);
				for (l = i.length; l--;) if (i[l].elem === this && (a == null || i[l].queue === a)) {
					d ? i[l](true) : i[l].saveState();
					p = true;
					i.splice(l, 1)
				}
				d && p || c.dequeue(this, a)
			})
		}
	});
	c.each({
		slideDown: sb("show", 1),
		slideUp: sb("hide", 1),
		slideToggle: sb("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		c.fn[a] = function(d, f, l) {
			return this.animate(b, d, f, l)
		}
	});
	c.extend({
		speed: function(a, b, d) {
			var f = a && typeof a === "object" ? c.extend({}, a) : {
				complete: d || !d && b || c.isFunction(a) && a,
				duration: a,
				easing: d && b || b && !c.isFunction(b) && b
			};
			f.duration = c.fx.off ? 0 : typeof f.duration === "number" ? f.duration : f.duration in c.fx.speeds ? c.fx.speeds[f.duration] : c.fx.speeds._default;
			if (f.queue == null || f.queue === true) f.queue = "fx";
			f.old = f.complete;
			f.complete = function(l) {
				c.isFunction(f.old) && f.old.call(this);
				if (f.queue) c.dequeue(this, f.queue);
				else l !== false && c._unmark(this)
			};
			return f
		},
		easing: {
			linear: function(a, b, d, f) {
				return d + f * a
			},
			swing: function(a, b, d, f) {
				return (-Math.cos(a * Math.PI) / 2 + 0.5) * f + d
			}
		},
		timers: [],
		fx: function(a, b, d) {
			this.options = b;
			this.elem = a;
			this.prop = d;
			b.orig = b.orig || {}
		}
	});
	c.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this);
			(c.fx.step[this.prop] || c.fx.step._default)(this)
		},
		cur: function() {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
			var a, b = c.css(this.elem, this.prop);
			return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
		},
		custom: function(a, b, d) {
			function f(i) {
				return l.step(i)
			}
			var l = this,
				p = c.fx;
			this.startTime = fa || ib();
			this.end = b;
			this.now = this.start = a;
			this.pos = this.state = 0;
			this.unit = d || this.unit || (c.cssNumber[this.prop] ? "" : "px");
			f.queue = this.options.queue;
			f.elem = this.elem;
			f.saveState = function() {
				l.options.hide && c._data(l.elem, "fxshow" + l.prop) === S && c._data(l.elem, "fxshow" + l.prop, l.start)
			};
			if (f() && c.timers.push(f) && !F) F = setInterval(p.tick, p.interval)
		},
		show: function() {
			var a = c._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = a || c.style(this.elem, this.prop);
			this.options.show = true;
			a !== S ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
			c(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = c._data(this.elem, "fxshow" + this.prop) || c.style(this.elem, this.prop);
			this.options.hide = true;
			this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b, d = fa || ib(),
				f = true,
				l = this.elem,
				p = this.options;
			if (a || d >= p.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				p.animatedProperties[this.prop] = true;
				for (b in p.animatedProperties) if (p.animatedProperties[b] !== true) f = false;
				if (f) {
					p.overflow != null && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"], function(i, B) {
						l.style["overflow" + B] = p.overflow[i]
					});
					p.hide && c(l).hide();
					if (p.hide || p.show) for (b in p.animatedProperties) {
						c.style(l, b, p.orig[b]);
						c.removeData(l, "fxshow" + b, true);
						c.removeData(l, "toggle" + b, true)
					}
					if (a = p.complete) {
						p.complete = false;
						a.call(l)
					}
				}
				return false
			} else {
				if (p.duration == Infinity) this.now = d;
				else {
					a = d - this.startTime;
					this.state = a / p.duration;
					this.pos = c.easing[p.animatedProperties[this.prop]](this.state, a, 0, 1, p.duration);
					this.now = this.start + (this.end - this.start) * this.pos
				}
				this.update()
			}
			return true
		}
	};
	c.extend(c.fx, {
		tick: function() {
			for (var a, b = c.timers, d = 0; d < b.length; d++) {
				a = b[d];
				!a() && b[d] === a && b.splice(d--, 1)
			}
			b.length || c.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(F);
			F = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				c.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				if (a.elem.style && a.elem.style[a.prop] != null) a.elem.style[a.prop] = a.now + a.unit;
				else a.elem[a.prop] = a.now
			}
		}
	});
	c.each(["width", "height"], function(a, b) {
		c.fx.step[b] = function(d) {
			c.style(d.elem, b, Math.max(0, d.now) + d.unit)
		}
	});
	if (c.expr && c.expr.filters) c.expr.filters.animated = function(a) {
		return c.grep(c.timers, function(b) {
			return a === b.elem
		}).length
	};
	var qa = /^t(?:able|d|h)$/i,
		gb = /^(?:body|html)$/i;
	c.fn.offset = "getBoundingClientRect" in Aa.documentElement ?
	function(a) {
		var b = this[0],
			d;
		if (a) return this.each(function(i) {
			c.offset.setOffset(this, a, i)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
		try {
			d = b.getBoundingClientRect()
		} catch (f) {}
		var l = b.ownerDocument,
			p = l.documentElement;
		if (!d || !c.contains(p, b)) return d ? {
			top: d.top,
			left: d.left
		} : {
			top: 0,
			left: 0
		};
		b = l.body;
		l = zc(l);
		return {
			top: d.top + (l.pageYOffset || c.support.boxModel && p.scrollTop || b.scrollTop) - (p.clientTop || b.clientTop || 0),
			left: d.left + (l.pageXOffset || c.support.boxModel && p.scrollLeft || b.scrollLeft) - (p.clientLeft || b.clientLeft || 0)
		}
	} : function(a) {
		var b = this[0];
		if (a) return this.each(function(da) {
			c.offset.setOffset(this, a, da)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
		var d, f = b.offsetParent,
			l = b,
			p = b.ownerDocument,
			i = p.documentElement,
			B = p.body;
		d = (p = p.defaultView) ? p.getComputedStyle(b, null) : b.currentStyle;
		for (var C = b.offsetTop, t = b.offsetLeft;
		(b = b.parentNode) && b !== B && b !== i;) {
			if (c.support.fixedPosition && d.position === "fixed") break;
			d = p ? p.getComputedStyle(b, null) : b.currentStyle;
			C -= b.scrollTop;
			t -= b.scrollLeft;
			if (b === f) {
				C += b.offsetTop;
				t += b.offsetLeft;
				if (c.support.doesNotAddBorder && !(c.support.doesAddBorderForTableAndCells && qa.test(b.nodeName))) {
					C += parseFloat(d.borderTopWidth) || 0;
					t += parseFloat(d.borderLeftWidth) || 0
				}
				l = f;
				f = b.offsetParent
			}
			if (c.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible") {
				C += parseFloat(d.borderTopWidth) || 0;
				t += parseFloat(d.borderLeftWidth) || 0
			}
			d = d
		}
		if (d.position === "relative" || d.position === "static") {
			C += B.offsetTop;
			t += B.offsetLeft
		}
		if (c.support.fixedPosition && d.position === "fixed") {
			C += Math.max(i.scrollTop, B.scrollTop);
			t += Math.max(i.scrollLeft, B.scrollLeft)
		}
		return {
			top: C,
			left: t
		}
	};
	c.offset = {
		bodyOffset: function(a) {
			var b = a.offsetTop,
				d = a.offsetLeft;
			if (c.support.doesNotIncludeMarginInBodyOffset) {
				b += parseFloat(c.css(a, "marginTop")) || 0;
				d += parseFloat(c.css(a, "marginLeft")) || 0
			}
			return {
				top: b,
				left: d
			}
		},
		setOffset: function(a, b, d) {
			var f = c.css(a, "position");
			if (f === "static") a.style.position = "relative";
			var l = c(a),
				p = l.offset(),
				i = c.css(a, "top"),
				B = c.css(a, "left"),
				C = {},
				t = {};
			if ((f === "absolute" || f === "fixed") && c.inArray("auto", [i, B]) > -1) {
				t = l.position();
				f = t.top;
				B = t.left
			} else {
				f = parseFloat(i) || 0;
				B = parseFloat(B) || 0
			}
			if (c.isFunction(b)) b = b.call(a, d, p);
			if (b.top != null) C.top = b.top - p.top + f;
			if (b.left != null) C.left = b.left - p.left + B;
			"using" in b ? b.using.call(a, C) : l.css(C)
		}
	};
	c.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var a = this[0],
				b = this.offsetParent(),
				d = this.offset(),
				f = gb.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			d.top -= parseFloat(c.css(a, "marginTop")) || 0;
			d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
			f.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
			f.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
			return {
				top: d.top - f.top,
				left: d.left - f.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || Aa.body; a && !gb.test(a.nodeName) && c.css(a, "position") === "static";) a = a.offsetParent;
				return a
			})
		}
	});
	c.each(["Left", "Top"], function(a, b) {
		var d = "scroll" + b;
		c.fn[d] = function(f) {
			var l, p;
			if (f === S) {
				l = this[0];
				if (!l) return null;
				return (p = zc(l)) ? "pageXOffset" in p ? p[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && p.document.documentElement[d] || p.document.body[d] : l[d]
			}
			return this.each(function() {
				if (p = zc(this)) p.scrollTo(!a ? f : c(p).scrollLeft(), a ? f : c(p).scrollTop());
				else this[d] = f
			})
		}
	});
	c.each(["Height", "Width"], function(a, b) {
		var d = b.toLowerCase();
		c.fn["inner" + b] = function() {
			var f = this[0];
			return f ? f.style ? parseFloat(c.css(f, d, "padding")) : this[d]() : null
		};
		c.fn["outer" + b] = function(f) {
			var l = this[0];
			return l ? l.style ? parseFloat(c.css(l, d, f ? "margin" : "border")) : this[d]() : null
		};
		c.fn[d] = function(f) {
			var l = this[0];
			if (!l) return f == null ? null : this;
			if (c.isFunction(f)) return this.each(function(B) {
				var C = c(this);
				C[d](f.call(this, B, C[d]()))
			});
			if (c.isWindow(l)) {
				var p = l.document.documentElement["client" + b],
					i = l.document.body;
				return l.document.compatMode === "CSS1Compat" && p || i && i["client" + b] || p
			} else if (l.nodeType === 9) return Math.max(l.documentElement["client" + b], l.body["scroll" + b], l.documentElement["scroll" + b], l.body["offset" + b], l.documentElement["offset" + b]);
			else if (f === S) {
				l = c.css(l, d);
				p = parseFloat(l);
				return c.isNumeric(p) ? p : l
			} else return this.css(d, typeof f === "string" ? f : f + "px")
		}
	});
	R.jQuery = R.$ = c;
	typeof define === "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return c
	})
})(window);
(function() {
	var R, S, cb, Ab, jb = function(Ia, J) {
			return function() {
				return Ia.apply(J, arguments)
			}
		};
	Ab = this;
	R = jQuery;
	R.fn.extend({
		chosen: function(Ia) {
			return R.browser !== "msie" || R.browser.version !== "6.0" && R.browser.version !== "7.0" ? R(this).each(function() {
				if (!R(this).hasClass("chzn-done")) return new S(this, Ia)
			}) : this
		}
	});
	S = function() {
		function Ia(J, la) {
			la == null && (la = {});
			this.options = la;
			this.set_default_values();
			this.form_field = J;
			this.form_field_jq = R(this.form_field);
			this.is_multiple = this.form_field.multiple;
			this.is_rtl = this.form_field_jq.hasClass("chzn-rtl");
			this.default_text_default = this.form_field.multiple ? "Select Some Options" : "Select an Option";
			this.set_up_html();
			this.register_observers();
			this.form_field_jq.addClass("chzn-done")
		}
		Ia.prototype.set_default_values = function() {
			this.click_test_action = jb(function(J) {
				return this.test_active_click(J)
			}, this);
			this.results_showing = this.mouse_on_container = this.active_field = false;
			this.result_single_selected = this.result_highlighted = null;
			this.choices = 0;
			return this.results_none_found = this.options.no_results_text || "No results match"
		};
		Ia.prototype.set_up_html = function() {
			var J, la, Za;
			this.container_id = this.form_field.id.length ? this.form_field.id.replace(/(:|\.)/g, "_") : this.generate_field_id();
			this.container_id += "_chzn";
			this.f_width = this.form_field_jq.outerWidth();
			this.default_text = this.form_field_jq.data("placeholder") ? this.form_field_jq.data("placeholder") : this.default_text_default;
			J = R("<div />", {
				id: this.container_id,
				"class": "chzn-container " + (this.is_rtl ? "chzn-rtl" : ""),
				style: "width: " + this.f_width + "px;"
			});
			this.is_multiple ? J.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>') : J.html('<a href="javascript:void(0)" class="chzn-single"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>');
			this.form_field_jq.hide().after(J);
			this.container = R("#" + this.container_id);
			this.container.addClass("chzn-container-" + (this.is_multiple ? "multi" : "single"));
			this.dropdown = this.container.find("div.chzn-drop").first();
			J = this.container.height();
			la = this.f_width - cb(this.dropdown);
			this.dropdown.css({
				width: la + "px",
				top: J + "px"
			});
			this.search_field = this.container.find("input").first();
			this.search_results = this.container.find("ul.chzn-results").first();
			this.search_field_scale();
			this.search_no_results = this.container.find("li.no-results").first();
			this.is_multiple ? (this.search_choices = this.container.find("ul.chzn-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chzn-search").first(), this.selected_item = this.container.find(".chzn-single").first(), Za = la - cb(this.search_container) - cb(this.search_field), this.search_field.css({
				width: Za + "px"
			}));
			this.results_build();
			return this.set_tab_index()
		};
		Ia.prototype.register_observers = function() {
			this.container.mousedown(jb(function(J) {
				return this.container_mousedown(J)
			}, this));
			this.container.mouseenter(jb(function(J) {
				return this.mouse_enter(J)
			}, this));
			this.container.mouseleave(jb(function(J) {
				return this.mouse_leave(J)
			}, this));
			this.search_results.mouseup(jb(function(J) {
				return this.search_results_mouseup(J)
			}, this));
			this.search_results.mouseover(jb(function(J) {
				return this.search_results_mouseover(J)
			}, this));
			this.search_results.mouseout(jb(function(J) {
				return this.search_results_mouseout(J)
			}, this));
			this.form_field_jq.bind("liszt:updated", jb(function(J) {
				return this.results_update_field(J)
			}, this));
			this.search_field.blur(jb(function(J) {
				return this.input_blur(J)
			}, this));
			this.search_field.keyup(jb(function(J) {
				return this.keyup_checker(J)
			}, this));
			this.search_field.keydown(jb(function(J) {
				return this.keydown_checker(J)
			}, this));
			if (this.is_multiple) {
				this.search_choices.click(jb(function(J) {
					return this.choices_click(J)
				}, this));
				return this.search_field.focus(jb(function(J) {
					return this.input_focus(J)
				}, this))
			}
			return this.selected_item.focus(jb(function(J) {
				return this.activate_field(J)
			}, this))
		};
		Ia.prototype.container_mousedown = function(J) {
			J && J.type === "mousedown" && J.stopPropagation();
			if (!this.pending_destroy_click) {
				this.active_field ? !this.is_multiple && J && (R(J.target) === this.selected_item || R(J.target).parents("a.chzn-single").length) && (J.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), R(document).click(this.click_test_action), this.results_show());
				return this.activate_field()
			}
			return this.pending_destroy_click = false
		};
		Ia.prototype.mouse_enter = function() {
			return this.mouse_on_container = true
		};
		Ia.prototype.mouse_leave = function() {
			return this.mouse_on_container = false
		};
		Ia.prototype.input_focus = function() {
			if (!this.active_field) return setTimeout(jb(function() {
				return this.container_mousedown()
			}, this), 50)
		};
		Ia.prototype.input_blur = function() {
			if (!this.mouse_on_container) {
				this.active_field = false;
				return setTimeout(jb(function() {
					return this.blur_test()
				}, this), 100)
			}
		};
		Ia.prototype.blur_test = function() {
			if (!this.active_field && this.container.hasClass("chzn-container-active")) return this.close_field()
		};
		Ia.prototype.close_field = function() {
			R(document).unbind("click", this.click_test_action);
			this.is_multiple || (this.selected_item.attr("tabindex", this.search_field.attr("tabindex")), this.search_field.attr("tabindex", -1));
			this.active_field = false;
			this.results_hide();
			this.container.removeClass("chzn-container-active");
			this.winnow_results_clear();
			this.clear_backstroke();
			this.show_search_field_default();
			return this.search_field_scale()
		};
		Ia.prototype.activate_field = function() {
			!this.is_multiple && !this.active_field && (this.search_field.attr("tabindex", this.selected_item.attr("tabindex")), this.selected_item.attr("tabindex", -1));
			this.container.addClass("chzn-container-active");
			this.active_field = true;
			this.search_field.val(this.search_field.val());
			return this.search_field.focus()
		};
		Ia.prototype.test_active_click = function(J) {
			return R(J.target).parents("#" + this.container_id).length ? (this.active_field = true) : this.close_field()
		};
		Ia.prototype.results_build = function() {
			var J, la, Za, ub, Bb;
			this.parsing = true;
			this.results_data = Ab.SelectParser.select_to_array(this.form_field);
			this.is_multiple && this.choices > 0 ? (this.search_choices.find("li.search-choice").remove(), this.choices = 0) : this.is_multiple || this.selected_item.find("span").text(this.default_text);
			J = "";
			Bb = this.results_data;
			Za = 0;
			for (ub = Bb.length; Za < ub; Za++) {
				la = Bb[Za];
				la.group ? (J += this.result_add_group(la)) : la.empty || (J += this.result_add_option(la), la.selected && this.is_multiple ? this.choice_build(la) : la.selected && !this.is_multiple && this.selected_item.find("span").text(la.text))
			}
			this.show_search_field_default();
			this.search_field_scale();
			this.search_results.html(J);
			return this.parsing = false
		};
		Ia.prototype.result_add_group = function(J) {
			if (!J.disabled) {
				J.dom_id = this.container_id + "_g_" + J.array_index;
				return '<li id="' + J.dom_id + '" class="group-result">' + R("<div />").text(J.label).html() + "</li>"
			}
			return ""
		};
		Ia.prototype.result_add_option = function(J) {
			var la;
			if (!J.disabled) {
				J.dom_id = this.container_id + "_o_" + J.array_index;
				la = J.selected && this.is_multiple ? [] : ["active-result"];
				J.selected && la.push("result-selected");
				J.group_array_index != null && la.push("group-option");
				return '<li id="' + J.dom_id + '" class="' + la.join(" ") + '">' + J.html + "</li>"
			}
			return ""
		};
		Ia.prototype.results_update_field = function() {
			this.result_clear_highlight();
			this.result_single_selected = null;
			return this.results_build()
		};
		Ia.prototype.result_do_highlight = function(J) {
			var la, Za, ub, Bb;
			if (J.length) {
				this.result_clear_highlight();
				this.result_highlight = J;
				this.result_highlight.addClass("highlighted");
				Za = parseInt(this.search_results.css("maxHeight"), 10);
				Bb = this.search_results.scrollTop();
				ub = Za + Bb;
				la = this.result_highlight.position().top + this.search_results.scrollTop();
				J = la + this.result_highlight.outerHeight();
				if (J >= ub) return this.search_results.scrollTop(J - Za > 0 ? J - Za : 0);
				if (la < Bb) return this.search_results.scrollTop(la)
			}
		};
		Ia.prototype.result_clear_highlight = function() {
			this.result_highlight && this.result_highlight.removeClass("highlighted");
			return this.result_highlight = null
		};
		Ia.prototype.results_toggle = function() {
			return this.results_showing ? this.results_hide() : this.results_show()
		};
		Ia.prototype.results_show = function() {
			this.is_multiple || (this.selected_item.addClass("chzn-single-with-drop"), this.result_single_selected && this.result_do_highlight(this.result_single_selected));
			this.dropdown.css({
				top: (this.is_multiple ? this.container.height() : this.container.height() - 1) + "px",
				left: 0
			});
			this.results_showing = true;
			this.search_field.focus();
			this.search_field.val(this.search_field.val());
			return this.winnow_results()
		};
		Ia.prototype.results_hide = function() {
			this.is_multiple || this.selected_item.removeClass("chzn-single-with-drop");
			this.result_clear_highlight();
			this.dropdown.css({
				left: "-9000px"
			});
			return this.results_showing = false
		};
		Ia.prototype.set_tab_index = function() {
			var J;
			if (this.form_field_jq.attr("tabindex")) {
				J = this.form_field_jq.attr("tabindex");
				this.form_field_jq.attr("tabindex", -1);
				if (this.is_multiple) return this.search_field.attr("tabindex", J);
				this.selected_item.attr("tabindex", J);
				return this.search_field.attr("tabindex", -1)
			}
		};
		Ia.prototype.show_search_field_default = function() {
			if (this.is_multiple && this.choices < 1 && !this.active_field) {
				this.search_field.val(this.default_text);
				return this.search_field.addClass("default")
			}
			this.search_field.val("");
			return this.search_field.removeClass("default")
		};
		Ia.prototype.search_results_mouseup = function(J) {
			var la;
			la = R(J.target).hasClass("active-result") ? R(J.target) : R(J.target).parents(".active-result").first();
			if (la.length) {
				this.result_highlight = la;
				return this.result_select(J)
			}
		};
		Ia.prototype.search_results_mouseover = function(J) {
			if (J = R(J.target).hasClass("active-result") ? R(J.target) : R(J.target).parents(".active-result").first()) return this.result_do_highlight(J)
		};
		Ia.prototype.search_results_mouseout = function(J) {
			if (R(J.target).hasClass("active-result")) return this.result_clear_highlight()
		};
		Ia.prototype.choices_click = function(J) {
			J.preventDefault();
			if (this.active_field && !R(J.target).hasClass("search-choice") && !this.results_showing) return this.results_show()
		};
		Ia.prototype.choice_build = function(J) {
			var la;
			la = this.container_id + "_c_" + J.array_index;
			this.choices += 1;
			this.search_container.before('<li class="search-choice" id="' + la + '"><span>' + J.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + J.array_index + '"></a></li>');
			return R("#" + la).find("a").first().click(jb(function(Za) {
				return this.choice_destroy_link_click(Za)
			}, this))
		};
		Ia.prototype.choice_destroy_link_click = function(J) {
			J.preventDefault();
			this.pending_destroy_click = true;
			return this.choice_destroy(R(J.target))
		};
		Ia.prototype.choice_destroy = function(J) {
			this.choices -= 1;
			this.show_search_field_default();
			this.is_multiple && this.choices > 0 && this.search_field.val().length < 1 && this.results_hide();
			this.result_deselect(J.attr("rel"));
			return J.parents("li").first().remove()
		};
		Ia.prototype.result_select = function(J) {
			var la, Za;
			if (this.result_highlight) {
				la = this.result_highlight;
				Za = la.attr("id");
				this.result_clear_highlight();
				la.addClass("result-selected");
				this.is_multiple ? this.result_deactivate(la) : (this.result_single_selected = la);
				la = Za.substr(Za.lastIndexOf("_") + 1);
				la = this.results_data[la];
				la.selected = true;
				this.form_field.options[la.options_index].selected = true;
				this.is_multiple ? this.choice_build(la) : this.selected_item.find("span").first().text(la.text);
				(!J.metaKey || !this.is_multiple) && this.results_hide();
				this.search_field.val("");
				this.form_field_jq.trigger("change");
				return this.search_field_scale()
			}
		};
		Ia.prototype.result_activate = function(J) {
			return J.addClass("active-result").show()
		};
		Ia.prototype.result_deactivate = function(J) {
			return J.removeClass("active-result").hide()
		};
		Ia.prototype.result_deselect = function(J) {
			var la;
			la = this.results_data[J];
			la.selected = false;
			this.form_field.options[la.options_index].selected = false;
			R("#" + this.container_id + "_o_" + J).removeClass("result-selected").addClass("active-result").show();
			this.result_clear_highlight();
			this.winnow_results();
			this.form_field_jq.trigger("change");
			return this.search_field_scale()
		};
		Ia.prototype.results_search = function() {
			return this.results_showing ? this.winnow_results() : this.results_show()
		};
		Ia.prototype.winnow_results = function() {
			var J, la, Za, ub, Bb, xc, pc, Qb, lc, cc, Vc, Fc, Gc, Hc, Ic, yc;
			this.no_results_clear();
			pc = 0;
			Qb = this.search_field.val() === this.default_text ? "" : R("<div/>").text(R.trim(this.search_field.val())).html();
			Bb = new RegExp("^" + Qb.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
			Vc = new RegExp(Qb.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
			yc = this.results_data;
			Fc = 0;
			for (Hc = yc.length; Fc < Hc; Fc++) {
				la = yc[Fc];
				if (!la.disabled && !la.empty) if (la.group) R("#" + la.dom_id).hide();
				else if (!this.is_multiple || !la.selected) {
					J = false;
					xc = la.dom_id;
					if (Bb.test(la.html)) {
						J = true;
						pc += 1
					} else if (la.html.indexOf(" ") >= 0 || la.html.indexOf("[") === 0) {
						ub = la.html.replace(/\[|\]/g, "").split(" ");
						if (ub.length) {
							Gc = 0;
							for (Ic = ub.length; Gc < Ic; Gc++) {
								Za = ub[Gc];
								Bb.test(Za) && (J = true, pc += 1)
							}
						}
					}
					J ? (Qb.length ? (lc = la.html.search(Vc), cc = la.html.substr(0, lc + Qb.length) + "</em>" + la.html.substr(lc + Qb.length), cc = cc.substr(0, lc) + "<em>" + cc.substr(lc)) : (cc = la.html), R("#" + xc).html !== cc && R("#" + xc).html(cc), this.result_activate(R("#" + xc)), la.group_array_index != null && R("#" + this.results_data[la.group_array_index].dom_id).show()) : (this.result_highlight && xc === this.result_highlight.attr("id") && this.result_clear_highlight(), this.result_deactivate(R("#" + xc)))
				}
			}
			return pc < 1 && Qb.length ? this.no_results(Qb) : this.winnow_results_set_highlight()
		};
		Ia.prototype.winnow_results_clear = function() {
			var J, la, Za, ub, Bb;
			this.search_field.val("");
			la = this.search_results.find("li");
			Bb = [];
			Za = 0;
			for (ub = la.length; Za < ub; Za++) {
				J = la[Za];
				J = R(J);
				Bb.push(J.hasClass("group-result") ? J.show() : !this.is_multiple || !J.hasClass("result-selected") ? this.result_activate(J) : void 0)
			}
			return Bb
		};
		Ia.prototype.winnow_results_set_highlight = function() {
			var J;
			if (!this.result_highlight) {
				J = this.is_multiple ? [] : this.search_results.find(".result-selected");
				J = J.length ? J.first() : this.search_results.find(".active-result").first();
				if (J != null) return this.result_do_highlight(J)
			}
		};
		Ia.prototype.no_results = function(J) {
			var la;
			la = R('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
			la.find("span").first().html(J);
			return this.search_results.append(la)
		};
		Ia.prototype.no_results_clear = function() {
			return this.search_results.find(".no-results").remove()
		};
		Ia.prototype.keydown_arrow = function() {
			var J, la;
			this.result_highlight ? this.results_showing && (la = this.result_highlight.nextAll("li.active-result").first(), la && this.result_do_highlight(la)) : (J = this.search_results.find("li.active-result").first(), J && this.result_do_highlight(R(J)));
			if (!this.results_showing) return this.results_show()
		};
		Ia.prototype.keyup_arrow = function() {
			var J;
			if (!this.results_showing && !this.is_multiple) return this.results_show();
			if (this.result_highlight) {
				J = this.result_highlight.prevAll("li.active-result");
				if (J.length) return this.result_do_highlight(J.first());
				this.choices > 0 && this.results_hide();
				return this.result_clear_highlight()
			}
		};
		Ia.prototype.keydown_backstroke = function() {
			if (this.pending_backstroke) {
				this.choice_destroy(this.pending_backstroke.find("a").first());
				return this.clear_backstroke()
			}
			this.pending_backstroke = this.search_container.siblings("li.search-choice").last();
			return this.pending_backstroke.addClass("search-choice-focus")
		};
		Ia.prototype.clear_backstroke = function() {
			this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus");
			return this.pending_backstroke = null
		};
		Ia.prototype.keyup_checker = function(J) {
			var la, Za;
			la = (Za = J.which) != null ? Za : J.keyCode;
			this.search_field_scale();
			switch (la) {
			case 8:
				if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) return this.keydown_backstroke();
				if (!this.pending_backstroke) {
					this.result_clear_highlight();
					return this.results_search()
				}
				break;
			case 13:
				J.preventDefault();
				if (this.results_showing) return this.result_select(J);
				break;
			case 27:
				if (this.results_showing) return this.results_hide();
				break;
			case 9:
			case 38:
			case 40:
			case 16:
			case 91:
			case 17:
				break;
			default:
				return this.results_search()
			}
		};
		Ia.prototype.keydown_checker = function(J) {
			var la, Za;
			la = (Za = J.which) != null ? Za : J.keyCode;
			this.search_field_scale();
			la !== 8 && this.pending_backstroke && this.clear_backstroke();
			switch (la) {
			case 8:
				this.backstroke_length = this.search_field.val().length;
				break;
			case 9:
				this.mouse_on_container = false;
				break;
			case 13:
				J.preventDefault();
				break;
			case 38:
				J.preventDefault();
				this.keyup_arrow();
				break;
			case 40:
				this.keydown_arrow()
			}
		};
		Ia.prototype.search_field_scale = function() {
			var J, la, Za, ub, Bb;
			if (this.is_multiple) {
				la = "position:absolute; left: -1000px; top: -1000px; display:none;";
				Za = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
				ub = 0;
				for (Bb = Za.length; ub < Bb; ub++) {
					J = Za[ub];
					la += J + ":" + this.search_field.css(J) + ";"
				}
				J = R("<div />", {
					style: la
				});
				J.text(this.search_field.val());
				R("body").append(J);
				la = J.width() + 25;
				J.remove();
				la > this.f_width - 10 && (la = this.f_width - 10);
				this.search_field.css({
					width: la + "px"
				});
				J = this.container.height();
				return this.dropdown.css({
					top: J + "px"
				})
			}
		};
		Ia.prototype.generate_field_id = function() {
			var J;
			J = this.generate_random_id();
			return this.form_field.id = J
		};
		Ia.prototype.generate_random_id = function() {
			var J;
			for (J = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char(); R("#" + J).length > 0;) J += this.generate_random_char();
			return J
		};
		Ia.prototype.generate_random_char = function() {
			var J;
			J = Math.floor(Math.random() * 36);
			return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ".substring(J, J + 1)
		};
		return Ia
	}();
	cb = function(Ia) {
		return Ia.outerWidth() - Ia.width()
	};
	Ab.get_side_border_padding = cb
}).call(this);
(function() {
	var R;
	R = function() {
		function S() {
			this.options_index = 0;
			this.parsed = []
		}
		S.prototype.add_node = function(cb) {
			return cb.nodeName === "OPTGROUP" ? this.add_group(cb) : this.add_option(cb)
		};
		S.prototype.add_group = function(cb) {
			var Ab, jb, Ia, J, la, Za;
			Ab = this.parsed.length;
			this.parsed.push({
				array_index: Ab,
				group: true,
				label: cb.label,
				children: 0,
				disabled: cb.disabled
			});
			la = cb.childNodes;
			Za = [];
			Ia = 0;
			for (J = la.length; Ia < J; Ia++) {
				jb = la[Ia];
				Za.push(this.add_option(jb, Ab, cb.disabled))
			}
			return Za
		};
		S.prototype.add_option = function(cb, Ab, jb) {
			if (cb.nodeName === "OPTION") {
				cb.text !== "" ? (Ab != null && (this.parsed[Ab].children += 1), this.parsed.push({
					array_index: this.parsed.length,
					options_index: this.options_index,
					value: cb.value,
					text: cb.text,
					html: cb.innerHTML,
					selected: cb.selected,
					disabled: jb === true ? jb : cb.disabled,
					group_array_index: Ab
				})) : this.parsed.push({
					array_index: this.parsed.length,
					options_index: this.options_index,
					empty: true
				});
				return this.options_index += 1
			}
		};
		return S
	}();
	R.select_to_array = function(S) {
		var cb, Ab, jb, Ia;
		cb = new R;
		Ia = S.childNodes;
		Ab = 0;
		for (jb = Ia.length; Ab < jb; Ab++) {
			S = Ia[Ab];
			cb.add_node(S)
		}
		return cb.parsed
	};
	this.SelectParser = R
}).call(this);
window.console === undefined &&
function() {
	window.console = {
		log: function() {}
	}
}();
jQuery.expr[":"].host = function(R, S, cb) {
	return R.host == cb[3]
};
(function(R, S, cb) {
	function Ab(o, u) {
		var M = null;
		return function() {
			var X = this,
				ra = arguments;
			clearTimeout(M);
			M = setTimeout(function() {
				o.apply(X, ra)
			}, u)
		}
	}
	function jb(o, u) {
		var M = !Yc ? "JS Bin" : Yc;
		if (jsbin.settings.home) M = jsbin.settings.home + "@" + M;
		if (c.html.ready && c.javascript.ready) if (o) S.title = M;
		else {
			S.title = M + " [unsaved]";
			if (Xc.addClass("enable").is(":hidden")) Xc[u ? "show" : "fadeIn"]().next().removeClass("left")
		}
	}
	function Ia(o) {
		Dd = o.id
	}
	function J() {
		return Dd
	}
	function la(o) {
		var u = c[o],
			M = ib.getItem("panel");
		u.setCode = function(ra) {
			u.setValue(ra)
		};
		u.getCode = function() {
			return u.getValue()
		};
		u.currentLine = function() {
			return u.getCursor().line
		};
		u.setOption("onChange", ub);
		u.setOption("onKeyEvent", Fc);
		u.setOption("onFocus", Ia);
		u.id = o;
		u.win = u.getWrapperElement();
		u.scroller = $(u.getScrollerElement());
		$(u.win).click(function() {
			u.focus()
		});
		var X = $(".code." + o + " > .label");
		S.body.className.indexOf("ie6") === -1 && u.scroller.scroll(function() {
			this.scrollTop > 10 ? X.stop().animate({
				opacity: 0
			}, 50, function() {
				$(this).hide()
			}) : X.show().stop().animate({
				opacity: 1
			}, 250)
		});
		Za(o);
		u.ready = true;
		if (M == o || M == null && o == "javascript") {
			u.focus();
			u.setCursor({
				line: (ib.getItem("line") || 0) * 1,
				ch: (ib.getItem("character") || 0) * 1
			})
		}
	}
	function Za(o) {
		var u = ib.getItem(o),
			M = vb.getItem("saved-" + o),
			X = ib.getItem("url"),
			ra = false;
		if (u == template[o]) c[o].setCode(u);
		else if (u && X == template.url) {
			c[o].setCode(u);
			ra = u != M
		} else M !== null && !/edit/.test(R.location) && !R.location.search ? c[o].setCode(M) : c[o].setCode(template[o]);
		ra && $(S).trigger("codeChange", [false, true])
	}
	function ub() {
		$(S).trigger("codeChange");
		return true
	}
	function Bb() {
		if (this.preventDefault) {
			this.preventDefault();
			this.stopPropagation()
		} else {
			this.returnValue = false;
			this.cancelBubble = true
		}
	}
	function xc(o) {
		if (!o.stop) o.stop = Bb;
		return o
	}
	function pc(o, u, M) {
		function X(ra) {
			M(xc(ra || R.event))
		}
		typeof o.addEventListener == "function" ? o.addEventListener(u, X, false) : o.attachEvent("on" + u, X)
	}
	function Qb(o, u) {
		for (var M = 0, X = o.length; M < X; ++M) u(o[M])
	}
	function lc(o) {
		function u(sa) {
			o.replaceRange(sa, {
				line: M.line,
				ch: X.start
			}, {
				line: M.line,
				ch: X.end
			})
		}
		if (!o.somethingSelected()) {
			var M = o.getCursor(false),
				X = o.getTokenAt(M),
				ra = X;
			for (/^[\w$_]*$/.test(X.string) || (X = ra = {
				start: M.ch,
				end: M.ch,
				string: "",
				state: X.state,
				className: X.string == "." ? "js-property" : null
			}); ra.className == "js-property";) {
				ra = o.getTokenAt({
					line: M.line,
					ch: ra.start
				});
				if (ra.string != ".") return;
				ra = o.getTokenAt({
					line: M.line,
					ch: ra.start
				});
				if (!E) var E = [];
				E.push(ra)
			}
			u("<></>");
			o.focus();
			o.setCursor({
				line: M.line,
				ch: X.end
			});
			return true
		}
	}
	function cc(o) {
		function u(s) {
			o.replaceRange(s, {
				line: ra.line,
				ch: E.start
			}, {
				line: ra.line,
				ch: E.end
			})
		}
		function M() {
			if (!m) {
				m = true;
				ba.parentNode.removeChild(ba)
			}
		}
		function X() {
			u(j.options[j.selectedIndex].value);
			M();
			setTimeout(function() {
				o.focus()
			}, 50)
		}
		if (!o.somethingSelected()) {
			var ra = o.getCursor(false),
				E = o.getTokenAt(ra),
				sa = E;
			if (E.string != "") {
				for (/^[\w$_]*$/.test(E.string) || (E = sa = {
					start: ra.ch,
					end: ra.ch,
					string: "",
					state: E.state,
					className: E.string == "." ? "js-property" : null
				}); sa.className == "js-property";) {
					sa = o.getTokenAt({
						line: ra.line,
						ch: sa.start
					});
					if (sa.string != ".") return;
					sa = o.getTokenAt({
						line: ra.line,
						ch: sa.start
					});
					if (!pa) var pa = [];
					pa.push(sa)
				}
				if (!(E.string == "" && pa === cb)) {
					sa = Vc(E, pa, o);
					if (sa.length) {
						if (sa.length == 1) {
							u(sa[0]);
							return true
						}
						var ba = S.createElement("div");
						ba.className = "completions";
						var j = ba.appendChild(S.createElement("select"));
						j.multiple = true;
						for (pa = 0; pa < sa.length; ++pa) j.appendChild(S.createElement("option")).appendChild(S.createTextNode(sa[pa]));
						j.firstChild.selected = true;
						j.size = Math.min(10, sa.length);
						pa = o.cursorCoords();
						ba.style.left = pa.x + "px";
						ba.style.top = pa.yBot + "px";
						ba.style.position = "absolute";
						ba.style.outline = "none";
						ba.className = "autocomplete";
						S.body.appendChild(ba);
						if (sa.length <= 10) ba.style.width = j.clientWidth - 1 + "px";
						var m = false;
						pc(j, "blur", M);
						pc(j, "keydown", function(s) {
							var n = s.keyCode;
							if (n == 13 || n == 32) {
								s.stop();
								X()
							} else if (n == 27) {
								s.stop();
								M();
								o.focus()
							} else if (n != 38 && n != 40) {
								M();
								o.focus();
								setTimeout(function() {
									cc(o)
								}, 50)
							}
						});
						pc(j, "dblclick", X);
						j.focus();
						R.opera && setTimeout(function() {
							m || j.focus()
						}, 100);
						return true
					}
				}
			}
		}
	}
	function Vc(o, u, M) {
		function X(ba) {
			ba && ba != sa && ba.indexOf(sa) == 0 && E.indexOf(ba) === -1 && E.push(ba)
		}
		function ra(ba) {
			if (typeof ba == "string") Qb(ld, X);
			else if (ba instanceof Array) Qb(Xd, X);
			else ba instanceof Function && Qb(Wd, X);
			for (var j in ba) X(j)
		}
		var E = [],
			sa = o.string;
		if (u) {
			o = u.pop();
			var pa;
			if (o.className == "js-variable") pa = R[o.string];
			else if (o.className == "js-string") pa = "";
			else if (o.className == "js-atom") pa = 1;
			for (; pa != null && u.length;) pa = pa[u.pop().string];
			pa != null && ra(pa)
		} else {
			for (u = o.state.localVars; u; u = u.next) X(u.name);
			ra(R);
			Qb(Ed, X)
		}
		M = M.getValue().split(/\W/);
		Qb(M, X);
		return E
	}
	function Fc(o, u) {
		u = Gc(u);
		if (u.type == "keydown") 
		if (u.shiftKey == false && u.ctrlKey && u.which == 39 && o.id == "javascript") {
			c.html.focus();
			u.stop()
		} else if (u.shiftKey == false && u.ctrlKey && u.which == 37 && o.id == "html") {
			c.javascript.focus();
			u.stop()
		} else if (u.shiftKey == false && u.metaKey && u.which == 49) {
			$("#control a.source").click();
			u.stop()
		} else if (u.metaKey && u.which == 50) {
			$("#control a.preview").click();
			u.stop()
		//changhwa
		} else if (u.metaKey && u.which == 51){
			$("#login").click();
			u.stop();
		} else if (u.metaKey && u.which == 76){
			location.href='http://'+document.domain+'/list';
			u.stop();
		} else if (u.which == 191 && u.shiftKey && u.metaKey) {
			fc.toggleClass("keyboardHelp");
			qc = fc.is(".keyboardHelp");
			u.stop()
		} else if (u.which == 27 && qc) {
			fc.removeClass("keyboardHelp");
			qc = false;
			u.stop()
		} else if (u.which == 27) {
			u.stop();
			return cc(o)
		} else if (u.which == 190 && u.altKey && u.metaKey && o.id == "html") {
			if (o.somethingSelected()) return;
			var M = o.getCursor(false),
				X = o.getTokenAt(M);
			/^[\w$_]*$/.test(X.string) || (X = {
				start: M.ch,
				end: M.ch,
				string: "",
				state: X.state,
				className: X.string == "." ? "js-property" : null
			});
			o.replaceRange("</" + X.state.htmlState.context.tagName + ">", {
				line: M.line,
				ch: X.end
			}, {
				line: M.line,
				ch: X.end
			});
			u.stop()
		} else if (u.which == 188 && u.ctrlKey && u.shiftKey) {
			u.stop();
			return lc(o)
		} else if (u.which == 191 && u.metaKey) {
			if (o.somethingSelected()) return;
			M = o.getCursor(false);
			var ra = (X = o.getTokenAt(M)) && X.state && X.state.htmlState && X.state.htmlState.context && X.state.htmlState.context.tagName ? X.state.htmlState.context.tagName : "script",
				E = o.getLine(M.line);
			if (X && X.state && X.state.htmlState && X.state.htmlState.context == null) ra = "html";
			if (ra == "style") E.match(/\s*\/\*/) !== null ? o.setLine(M.line, E.replace(/\/\*\s?/, "").replace(/\s?\*\//, "")) : o.setLine(M.line, "/* " + E + " */");
			else if (ra == "script") E.match(/\s*\/\//) !== null ? o.setLine(M.line, E.replace(/(\s*)\/\/\s?/, "$1")) : o.setLine(M.line, "// " + E);
			else E.match(/\s*<!--/) !== null ? o.setLine(M.line, E.replace(/<!--\s?/, "").replace(/\s?--\>/, "")) : o.setLine(M.line, "<!-- " + E + " --\>");
			u.stop()
			//changhwa
		} 
		if (u.stopping) return false
	}
	function Gc(o) {
		var u = {
			type: o.type,
			which: o.which,
			metaKey: o.metaKey,
			shiftKey: o.shiftKey,
			ctrlKey: o.ctrlKey,
			altKey: o.altKey,
			orig: o
		};
		if (o.which == null && (o.charCode != null || o.keyCode != null)) u.which = o.charCode != null ? o.charCode : o.keyCode;
		if (o.which === 47 && o.type == "keypress") {
			u.type = "keydown";
			u.which = o.which == 47 ? 191 : 0
		}
		if (!o.metaKey && o.ctrlKey) u.metaKey = o.ctrlKey;
		var M = o.stop;
		u.stop = function() {
			u.stopping = true;
			M && M.call(o)
		};
		return u
	}
	function Hc() {
		var o = [],
			u = "",
			M = "";
		try {
			u = c.html.getCode()
		} catch (X) {}
		try {
			M = c.javascript.getCode()
		} catch (ra) {}
		if (Yd.test(M)) M = md ? M.replace(Dc.console, "_console.") : M.replace(Dc.console, "window.top.console.");
		M = M.replace(Dc.script, "<\\/script");
		if ($.trim(u)) if (Dc.code.test(u)) {
			o = u.split("%code%");
			u = o[0] + M + o[1]
		} else {
			if (M) {
				var E = "";
				if (u.indexOf("</body>") !== -1) {
					o.push(u.substring(0, u.lastIndexOf("</body>")));
					o.push(u.substring(u.lastIndexOf("</body>")));
					u = o[0];
					E = o.length == 2 && o[1] ? o[1] : ""
				}
				if (md) u += '<script src="http://jsbin.com/js/render/console.js"><\/script>\n<script>\n';
				u += "<script>\n" + M + "\n<\/script>\n" + E
			}
		} else u = "<pre>\n" + M + "</pre>";
		if (Dc.docReady.test(u)) u = u.replace(Dc.docReady, "window.onload = ");
		o = u.match(Dc.title);
		if (o !== null && o[1] !== Yc) {
			Yc = o[1];
			jb(!/ \[unsaved\]/.test(S.title))
		}
		return u
	}

	function Ic() {
		var o = $("#preview iframe")[0],
			u = o.contentDocument || o.contentWindow.document,
			M = Hc();
		o = function() {
			u.open();
			Hd ? u.write("<pre>" + M.replace(/[<>&]/g, function(X) {
				if (X == "<") return "&lt;";
				if (X == ">") return "&gt;";
				if (X == '"') return "&quot;"
			}) + "</pre>") : u.write(M);
			u.close()
		};
		Fd.active ? setTimeout(o, 10) : o()
	}
	function yc(o) {
		this.context = o;
		this.executable = typeof o == "function";
		this.active = false;
		this.original = R.top.console;
		this.supported = /chrome/i.test(navigator.userAgent)
	}
	function ad(o) {
		return (o + "").length < 2 ? "0" + o : o
	}
	function bd() {
		var o = Hc();
		rc.find("iframe").remove();
		var u = rc.append('<iframe class="stretch" frameBorder="0"></iframe>').find("iframe")[0],
			M = u.contentDocument || u.contentWindow.document,
			X = M.defaultView || M.parentWindow;
		u = new Date;
		md || console.log("--- refreshing live preview @ " + [ad(u.getHours()), ad(u.getMinutes()), ad(u.getSeconds())].join(":") + " ---");
		o = o.replace(/(<.*?\s)(autofocus)/g, "$1");
		u = function() {
			M.open();
			if (Hd) M.write("<pre>" + o.replace(/[<>&]/g, function(ra) {
				if (ra == "<") return "&lt;";
				if (ra == ">") return "&gt;";
				if (ra == '"') return "&quot;"
			}) + "</pre>");
			else {
				M.write("<script>window.print=function(){};window.alert=function(){};window.prompt=function(){};window.confirm=function(){};<\/script>");
				M.write(o)
			}
			X.onfocus = function() {
				return false
			};
			M.close()
		};
		Fd.active ? setTimeout(u, 10) : u()
	}
	function Jc(o, u, M) {
		jsbin.settings.show[o] = u;
		Ac = Ac || $(".code.html").data().splitter;
		if (o == "live") $("#live").trigger(u ? "show" : "hide");
		else {
			fd.find(".code." + o)[u ? "show" : "hide"]();
			if (u) Ac && Ac.show();
			else Ac && Ac.hide();
			var X = o == "html" ? fd.find(".code.javascript") : fd.find(".code.html"),
				ra = pd.filter(':not([data-panel="live"]):checked').length,
				E = pd.filter("[data-panel=" + (o == "html" ? "javascript" : "html") + "]");
			if (ra === 1 && u == false) {
				E.attr("disabled", "disabled");
				if (o == "html") {
					X.data("style", {
						right: X.css("right")
					});
					X.css("right", "0")
				} else if (o == "javascript") {
					X.data("style", {
						left: X.css("left")
					});
					X.css("left", "0")
				}
			} else {
				E.removeAttr("disabled");
				X.attr("style", X.data("style"))
			}
			u && c[o].refresh()
		}
		M || Ac && Ac.trigger("init");
		o = pd.filter(":checked").map(function() {
			return this.getAttribute("data-panel")
		}).get().join(",");
		if (history.replaceState) history.replaceState(null, null, "#" + o);
		else location.hash = "#" + o
	}
	function cd(o, u, M) {

		//changhwa	
		var commitLog = prompt("commit log","");

		var X = $("form").append('<input type="hidden" name="javascript" />')
						 .append('<input type="hidden" name="html" />')		
						 .append('<input type="hidden" name="commitLog" />');
		X.find("input[name=javascript]").val(c.javascript.getCode());
		X.find("input[name=html]").val(c.html.getCode());
		X.find("input[name=commitLog]").val(commitLog);
		X.find("input[name=method]").val(o);
		alert('X.serialize: '+X.serialize());
		u ? $.ajax({
			url: X.attr("action"),
			data: X.serialize(),
			dataType: "json",
			type: "post",
			success: function(ra) {
				$("form").attr("action", ra.url + "/save");
				M && M();
				if (R.history && R.history.pushState) {
					R.history.pushState(null, ra.edit, ra.edit);
					$("#jsbinurl").attr("href", ra.url).text(ra.url.replace(/http:\/\//, ""));
					jb(true)
				} else R.location = ra.edit
			},
			error: function() {}
		}) : X.submit()
	}
	function dd(o) {
		o.ondragover = function() {
			return false
		};
		o.ondragend = function() {
			return false
		};
		o.ondrop = function(u) {
			u.preventDefault();
			var M = u.dataTransfer.files[0];
			u = new FileReader;
			u.onload = function(X) {
				c[M.type.indexOf("javascript") > 0 ? "javascript" : "html"].setCode(X.target.result)
			};
			u.readAsText(M);
			return false
		}
	}
	if (!this.JSON) this.JSON = {};
	(function() {
		function o(j) {
			return j < 10 ? "0" + j : j
		}
		function u(j) {
			ra.lastIndex = 0;
			return ra.test(j) ? '"' + j.replace(ra, function(m) {
				var s = pa[m];
				return typeof s === "string" ? s : "\\u" + ("0000" + m.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + j + '"'
		}
		function M(j, m) {
			var s, n, y = E,
				A, G = m[j];
			if (G && typeof G === "object" && typeof G.toJSON === "function") G = G.toJSON(j);
			if (typeof ba === "function") G = ba.call(m, j, G);
			switch (typeof G) {
			case "string":
				return u(G);
			case "number":
				return isFinite(G) ? String(G) : "null";
			case "boolean":
			case "null":
				return String(G);
			case "object":
				if (!G) return "null";
				E += sa;
				A = [];
				if (Object.prototype.toString.apply(G) === "[object Array]") {
					n = G.length;
					for (j = 0; j < n; j += 1) A[j] = M(j, G) || "null";
					m = A.length === 0 ? "[]" : E ? "[\n" + E + A.join(",\n" + E) + "\n" + y + "]" : "[" + A.join(",") + "]";
					E = y;
					return m
				}
				if (ba && typeof ba === "object") {
					n = ba.length;
					for (j = 0; j < n; j += 1) {
						s = ba[j];
						if (typeof s === "string") if (m = M(s, G)) A.push(u(s) + (E ? ": " : ":") + m)
					}
				} else for (s in G) if (Object.hasOwnProperty.call(G, s)) if (m = M(s, G)) A.push(u(s) + (E ? ": " : ":") + m);
				m = A.length === 0 ? "{}" : E ? "{\n" + E + A.join(",\n" + E) + "\n" + y + "}" : "{" + A.join(",") + "}";
				E = y;
				return m
			}
		}
		if (typeof Date.prototype.toJSON !== "function") {
			Date.prototype.toJSON = function() {
				return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + o(this.getUTCMonth() + 1) + "-" + o(this.getUTCDate()) + "T" + o(this.getUTCHours()) + ":" + o(this.getUTCMinutes()) + ":" + o(this.getUTCSeconds()) + "Z" : null
			};
			String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
				return this.valueOf()
			}
		}
		var X = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			ra = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			E, sa, pa = {
				"\u0008": "\\b",
				"\t": "\\t",
				"\n": "\\n",
				"\u000c": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			},
			ba;
		if (typeof JSON.stringify !== "function") JSON.stringify = function(j, m, s) {
			var n;
			sa = E = "";
			if (typeof s === "number") for (n = 0; n < s; n += 1) sa += " ";
			else if (typeof s === "string") sa = s;
			if ((ba = m) && typeof m !== "function" && (typeof m !== "object" || typeof m.length !== "number")) throw new Error("JSON.stringify");
			return M("", {
				"": j
			})
		};
		if (typeof JSON.parse !== "function") JSON.parse = function(j, m) {
			function s(n, y) {
				var A, G, L = n[y];
				if (L && typeof L === "object") for (A in L) if (Object.hasOwnProperty.call(L, A)) {
					G = s(L, A);
					if (G !== cb) L[A] = G;
					else delete L[A]
				}
				return m.call(n, y, L)
			}
			X.lastIndex = 0;
			if (X.test(j)) j = j.replace(X, function(n) {
				return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
			});
			if (/^[\],:{}\s]*$/.test(j.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
				j = eval("(" + j + ")");
				return typeof m === "function" ? s({
					"": j
				}, "") : j
			}
			throw new SyntaxError("JSON.parse");
		}
	})();
	var mb = function() {
			var o = navigator.userAgent.toLowerCase(),
				u = null;
			if (/mozilla/.test(o) && !/compatible/.test(o)) {
				u = (new Date).getTime();
				S.cookie = "__cprobe=" + u + ";path=/";
				if (S.cookie.indexOf(u, 0) === -1) return true
			}
			return false
		}(),
		ib = R.sessionStorage,
		vb = R.localStorage;
	if (!mb && R.sessionStorage) ib = R.sessionStorage;
	ib || (ib = function() {
		var o = R.top.name ? JSON.parse(R.top.name) : {};
		return {
			clear: function() {
				o = {};
				R.top.name = ""
			},
			getItem: function(u) {
				return o[u] || null
			},
			removeItem: function(u) {
				delete o[u];
				R.top.name = JSON.stringify(o)
			},
			setItem: function(u, M) {
				o[u] = M;
				R.top.name = JSON.stringify(o)
			}
		}
	}());
	if (!mb && !R.localStorage || mb) vb = ib;
	else if (mb) vb || (vb = ib);
	else vb = R.localStorage;
	$.fn.splitter = function() {
		var o = $(S),
			u = $('<div class="block"></div>'),
			M = JSON.parse(vb.getItem("splitterSettings") || "[]");
		return this.each(function() {
			function X(A) {
				var G = 100 / m * (A - s);
				if (G > 10 && G < 90) {
					ra.css("left", G + "%");
					pa.css("right", 100 - G + "%");
					ba.css({
						left: G + "%"
					});
					y.x = A;
					M[E] = y;
					vb.setItem("splitterSettings", JSON.stringify(M));
					clearTimeout(n);
					n = setTimeout(function() {
						c.javascript.refresh();
						c.html.refresh()
					}, 100)
				}
			}
			var ra = $(this),
				E = $.fn.splitter.guid++,
				sa = ra.parent(),
				pa = ra.prev(),
				ba = $('<div class="resize"></div>'),
				j = false,
				m = sa.width(),
				s = sa.offset().left,
				n = null,
				y = M[E] || {};
			o.bind("mouseup touchend", function() {
				j = false;
				u.remove();
				ba.css("opacity", "0")
			}).bind("mousemove touchmove", function(A) {
				if (j) X(A.pageX || A.originalEvent.touches[0].pageX)
			});
			u.bind("mousemove touchmove", function(A) {
				if (j) X(A.pageX || A.originalEvent.touches[0].pageX)
			});
			ba.bind("mousedown touchstart", function(A) {
				j = true;
				$("body").append(u);
				m = sa.width();
				s = sa.offset().left;
				A.preventDefault()
			}).hover(function() {
				ba.css("opacity", "1")
			}, function() {
				j || ba.css("opacity", "0")
			});
			ba.bind("init", function(A, G) {
				ba.css({
					top: 0,
					bottom: 0,
					width: 4,
					opacity: 0,
					position: "absolute",
					"border-left": "1px solid rgba(218, 218, 218, 0.5)",
					"z-index": 99999
				});
				ra.is(":hidden") ? ba.hide() : X(G || ra.offset().left)
			});
			pa.css("width", "auto");
			ra.data("splitter", ba);
			ra.before(ba)
		})
	};
	$.fn.splitter.guid = 0;
	R.jsbin.settings = JSON.parse(vb.getItem("settings") || '{ "show": { "html": true, "javascript": true }, "theme": "jsbin" }');
	var sb = function() {
			function o(e, w) {
				function H(g) {
					return g >= 0 && g < La.size
				}
				function F(g) {
					return y(La, g)
				}
				function Y(g, q) {
					Bc = true;
					q = q - g.height;
					for (g = g; g; g = g.parent) g.height += q
				}
				function fa(g) {
					var q = {
						line: 0,
						ch: 0
					};
					W(q, {
						line: La.size - 1,
						ch: F(La.size - 1).text.length
					}, Zb(g), q, q);
					Mc = true
				}
				function qa() {
					var g = [];
					La.iter(0, La.size, function(q) {
						g.push(q.text)
					});
					return g.join("\n")
				}
				function gb(g) {
					function q(Ga) {
						var Sa = gd(Ga, true);
						if (Sa && !lb(Sa, Z)) {
							tc || t();
							Z = Sa;
							Oa(K, Sa);
							Mc = false;
							var Ua = Da();
							if (Sa.line >= Ua.to || Sa.line < Ua.from) na = setTimeout($a(function() {
								q(Ga)
							}), 150)
						}
					}
					function v(Ga) {
						clearTimeout(na);
						var Sa = gd(Ga);
						Sa && Oa(K, Sa);
						ya(Ga);
						V();
						Mc = true;
						Ja();
						za()
					}
					db(Ba(g, "shiftKey"));
					for (var I = Q(g); I != Kb; I = I.parentNode) if (I.parentNode == $b && I != Kd) return;
					for (I = Q(g); I != Kb; I = I.parentNode) if (I.parentNode == sd) {
						ua.onGutterClick && ua.onGutterClick(Fb, Xb(sd.childNodes, I) + Pb, g);
						return ya(g)
					}
					var K = gd(g);
					switch (ka(g)) {
					case 3:
						Wa && !mc && re(g);
						return;
					case 2:
						K && z(K.line, K.ch, true);
						return
					}
					if (K) {
						tc || t();
						I = +new Date;
						if (td && td.time > I - 400 && lb(td.pos, K)) {
							ya(g);
							setTimeout(V, 20);
							return ob(K.line)
						} else if (Ld && Ld.time > I - 400 && lb(Ld.pos, K)) {
							td = {
								time: I,
								pos: K
							};
							ya(g);
							return Na(K)
						} else Ld = {
							time: I,
							pos: K
						};
						var Z = K,
							na;
						if (Lc && !ua.readOnly && !lb(oa.from, oa.to) && !Db(K, oa.from) && !Db(oa.to, K)) {
							if (Yb) xb.draggable = true;
							var za = Ca(S, "mouseup", $a(function(Ga) {
								if (Yb) xb.draggable = false;
								$d = false;
								za();
								if (Math.abs(g.clientX - Ga.clientX) + Math.abs(g.clientY - Ga.clientY) < 10) {
									ya(Ga);
									z(K.line, K.ch, true);
									V()
								}
							}), true);
							$d = true;
							xb.dragDrop && xb.dragDrop()
						} else {
							ya(g);
							z(K.line, K.ch, true);
							var Ja = Ca(S, "mousemove", $a(function(Ga) {
								clearTimeout(na);
								ya(Ga);
								!kb && !ka(Ga) ? v(Ga) : q(Ga)
							}), true);
							za = Ca(S, "mouseup", $a(v), true)
						}
					} else Q(g) == Va && ya(g)
				}
				function a(g) {
					for (var q = Q(g); q != Kb; q = q.parentNode) if (q.parentNode == sd) return ya(g);
					if (q = gd(g)) {
						td = {
							time: +new Date,
							pos: q
						};
						ya(g);
						Na(q)
					}
				}
				function b(g) {
					g.preventDefault();
					var q = gd(g, true),
						v = g.dataTransfer.files;
					if (!(!q || ua.readOnly)) if (v && v.length && R.FileReader && R.File) {
						function I(Sa, Ua) {
							var Ya = new FileReader;
							Ya.onload = function() {
								Z[Ua] = Ya.result;
								if (++na == K) {
									q = T(q);
									$a(function() {
										var Vb = bb(Z.join(""), q, q);
										Oa(q, Vb)
									})()
								}
							};
							Ya.readAsText(Sa)
						}
						var K = v.length,
							Z = Array(K),
							na = 0;
						for (g = 0; g < K; ++g) I(v[g], g)
					} else try {
						if (Z = g.dataTransfer.getData("Text")) {
							var za = oa.from,
								Ja = oa.to;
							Oa(q, q);
							$d && bb("", za, Ja);
							fb(Z);
							V()
						}
					} catch (Ga) {}
				}
				function d(g) {
					var q = nb();
					g.dataTransfer.setData("Text", q);
					if (Wa || rd) {
						q = S.createElement("img");
						q.scr = "data:image/gif;base64,R0lGODdhAgACAIAAAAAAAP///ywAAAAAAgACAAACAoRRADs=";
						g.dataTransfer.setDragImage(q, 0, 0)
					}
				}
				function f(g, q) {
					if (typeof g == "string") {
						g = N[g];
						if (!g) return false
					}
					var v = uc;
					try {
						if (ua.readOnly) Md = true;
						if (q) uc = null;
						g(Fb)
					} catch (I) {
						if (I != Ka) throw I;
						return false
					} finally {
						uc = v;
						Md = false
					}
					return true
				}
				function l(g) {
					var q = u(ua.keyMap),
						v = q.auto;
					clearTimeout(se);
					if (v && !X(g)) se = setTimeout(function() {
						if (u(ua.keyMap) == q) ua.keyMap = v.call ? v.call(null, Fb) : v
					}, 50);
					var I = Gb[Ba(g, "keyCode")],
						K = false;
					if (I == null || g.altGraphKey) return false;
					if (Ba(g, "altKey")) I = "Alt-" + I;
					if (Ba(g, "ctrlKey")) I = "Ctrl-" + I;
					if (Ba(g, "metaKey")) I = "Cmd-" + I;
					if (K = Ba(g, "shiftKey") ? M("Shift-" + I, ua.extraKeys, ua.keyMap, function(Z) {
						return f(Z, true)
					}) || M(I, ua.extraKeys, ua.keyMap, function(Z) {
						if (typeof Z == "string" && /^go/.test(Z)) return f(Z)
					}) : M(I, ua.extraKeys, ua.keyMap, f)) {
						ya(g);
						if (kb) {
							g.oldKeyCode = g.keyCode;
							g.keyCode = 0
						}
					}
					return K
				}
				function p(g, q) {
					(q = M("'" + q + "'", ua.extraKeys, ua.keyMap, f)) && ya(g);
					return q
				}
				function i(g) {
					tc || t();
					if (kb && g.keyCode == 27) g.returnValue = false;
					if (hd) if (x()) hd = false;
					if (!(ua.onKeyEvent && ua.onKeyEvent(Fb, ta(g)))) {
						var q = Ba(g, "keyCode");
						db(q == 16 || Ba(g, "shiftKey"));
						var v = l(g);
						if (R.opera) {
							ae = v ? q : null;
							if (!v && q == 88 && Ba(g, mc ? "metaKey" : "ctrlKey")) fb("")
						}
					}
				}
				function B(g) {
					hd && x();
					if (!(ua.onKeyEvent && ua.onKeyEvent(Fb, ta(g)))) {
						var q = Ba(g, "keyCode"),
							v = Ba(g, "charCode");
						if (R.opera && q == ae) {
							ae = null;
							ya(g)
						} else if (!(R.opera && !g.which && l(g))) {
							q = String.fromCharCode(v == null ? q : v);
							ua.electricChars && Jb.electricChars && ua.smartIndent && !ua.readOnly && Jb.electricChars.indexOf(q) > -1 && setTimeout($a(function() {
								Ha(oa.to.line, "smart")
							}), 75);
							p(g, q) || h()
						}
					}
				}
				function C(g) {
					if (!(ua.onKeyEvent && ua.onKeyEvent(Fb, ta(g)))) if (Ba(g, "keyCode") == 16) uc = null
				}
				function t() {
					if (ua.readOnly != "nocursor") {
						if (!tc) {
							ua.onFocus && ua.onFocus(Fb);
							tc = true;
							if (Kb.className.search(/\bCodeMirror-focused\b/) == -1) Kb.className += " CodeMirror-focused";
							ud || O(true)
						}
						Hb();
						te()
					}
				}
				function da() {
					if (tc) {
						ua.onBlur && ua.onBlur(Fb);
						tc = false;
						Nc && $a(function() {
							if (Nc) {
								Nc();
								Nc = null
							}
						})();
						Kb.className = Kb.className.replace(" CodeMirror-focused", "")
					}
					clearInterval(be);
					setTimeout(function() {
						tc || (uc = null)
					}, 150)
				}
				function W(g, q, v, I, K) {
					if (!Md) {
						if (vc) {
							var Z = [];
							La.iter(g.line, q.line + 1, function(na) {
								Z.push(na.text)
							});
							for (vc.addChange(g.line, v.length, Z); vc.done.length > ua.undoDepth;) vc.done.shift()
						}
						Qa(g, q, v, I, K)
					}
				}
				function ga(g, q) {
					if (g.length) {
						g = g.pop();
						for (var v = [], I = g.length - 1; I >= 0; I -= 1) {
							var K = g[I],
								Z = [],
								na = K.start + K.added;
							La.iter(K.start, na, function(Ja) {
								Z.push(Ja.text)
							});
							v.push({
								start: K.start,
								added: K.old.length,
								old: Z
							});
							var za = T({
								line: K.start + K.old.length - 1,
								ch: Kc(Z[Z.length - 1], K.old[K.old.length - 1])
							});
							Qa({
								line: K.start,
								ch: 0
							}, {
								line: na - 1,
								ch: F(na - 1).text.length
							}, K.old, za, za)
						}
						Mc = true;
						q.push(v)
					}
				}
				function ca() {
					ga(vc.done, vc.undone)
				}
				function Pa() {
					ga(vc.undone, vc.done)
				}
				function Qa(g, q, v, I, K) {
					function Z(yb) {
						return yb <= Math.min(q.line, q.line + id) ? yb : yb + id
					}
					if (!Md) {
						var na = false,
							za = Oc.length;
						ua.lineWrapping || La.iter(g.line, q.line, function(yb) {
							if (yb.text.length == za) return na = true
						});
						if (g.line != q.line || v.length > 1) Bc = true;
						var Ja = q.line - g.line,
							Ga = F(g.line),
							Sa = F(q.line);
						if (g.ch == 0 && q.ch == 0 && v[v.length - 1] == "") {
							var Ua = [];
							Ga = null;
							if (g.line) {
								Ga = F(g.line - 1);
								Ga.fixMarkEnds(Sa)
							} else Sa.fixMarkStarts();
							for (var Ya = 0, Vb = v.length - 1; Ya < Vb; ++Ya) Ua.push(j.inheritMarks(v[Ya], Ga));
							Ja && La.remove(g.line, Ja, vd);
							Ua.length && La.insert(g.line, Ua)
						} else if (Ga == Sa) if (v.length == 1) Ga.replace(g.ch, q.ch, v[0]);
						else {
							Sa = Ga.split(q.ch, v[v.length - 1]);
							Ga.replace(g.ch, null, v[0]);
							Ga.fixMarkEnds(Sa);
							Ua = [];
							Ya = 1;
							for (Vb = v.length - 1; Ya < Vb; ++Ya) Ua.push(j.inheritMarks(v[Ya], Ga));
							Ua.push(Sa);
							La.insert(g.line + 1, Ua)
						} else if (v.length == 1) {
							Ga.replace(g.ch, null, v[0]);
							Sa.replace(null, q.ch, "");
							Ga.append(Sa);
							La.remove(g.line + 1, Ja, vd)
						} else {
							Ua = [];
							Ga.replace(g.ch, null, v[0]);
							Sa.replace(null, q.ch, v[v.length - 1]);
							Ga.fixMarkEnds(Sa);
							Ya = 1;
							for (Vb = v.length - 1; Ya < Vb; ++Ya) Ua.push(j.inheritMarks(v[Ya], Ga));
							Ja > 1 && La.remove(g.line + 1, Ja - 1, vd);
							La.insert(g.line + 1, Ua)
						}
						if (ua.lineWrapping) {
							var ic = Va.clientWidth / ce() - 3;
							La.iter(g.line, g.line + v.length, function(yb) {
								if (!yb.hidden) {
									var jc = Math.ceil(yb.text.length / ic) || 1;
									jc != yb.height && Y(yb, jc)
								}
							})
						} else {
							La.iter(g.line, Ya + v.length, function(yb) {
								yb = yb.text;
								if (yb.length > za) {
									Oc = yb;
									za = yb.length;
									Pc = null;
									na = false
								}
							});
							if (na) {
								za = 0;
								Oc = "";
								Pc = null;
								La.iter(0, La.size, function(yb) {
									yb = yb.text;
									if (yb.length > za) {
										za = yb.length;
										Oc = yb
									}
								})
							}
						}
						Sa = [];
						var id = v.length - Ja - 1;
						Ya = 0;
						for (Ja = Cc.length; Ya < Ja; ++Ya) {
							Ua = Cc[Ya];
							if (Ua < g.line) Sa.push(Ua);
							else Ua > q.line && Sa.push(Ua + id)
						}
						Ya = g.line + Math.min(v.length, 500);
						Ie(g.line, Ya);
						Sa.push(Ya);
						Cc = Sa;
						de(100);
						wc.push({
							from: g.line,
							to: q.line + 1,
							diff: id
						});
						g = {
							from: g,
							to: q,
							text: v
						};
						if (wd) {
							for (v = wd; v.next; v = v.next);
							v.next = g
						} else wd = g;
						k(I, K, Z(oa.from.line), Z(oa.to.line));
						if (Va.clientHeight) $b.style.height = La.height * Ec() + 2 * jd() + "px"
					}
				}
				function bb(g, q, v) {
					function I(Z) {
						if (Db(Z, q)) return Z;
						if (!Db(v, Z)) return K;
						var na = Z.line + g.length - (v.line - q.line) - 1,
							za = Z.ch;
						if (Z.line == v.line) za += g[g.length - 1].length - (v.ch - (v.line == q.line ? q.ch : 0));
						return {
							line: na,
							ch: za
						}
					}
					q = T(q);
					v = v ? T(v) : q;
					g = Zb(g);
					var K;
					Rb(g, q, v, function(Z) {
						K = Z;
						return {
							from: I(oa.from),
							to: I(oa.to)
						}
					});
					return K
				}
				function fb(g, q) {
					Rb(Zb(g), oa.from, oa.to, function(v) {
						return q == "end" ? {
							from: v,
							to: v
						} : q == "start" ? {
							from: oa.from,
							to: oa.from
						} : {
							from: oa.from,
							to: v
						}
					})
				}
				function Rb(g, q, v, I) {
					I = I({
						line: q.line + g.length - 1,
						ch: g.length == 1 ? g[0].length + q.ch : g[g.length - 1].length
					});
					W(q, v, g, I.from, I.to)
				}
				function Ta(g, q) {
					var v = g.line,
						I = q.line;
					if (v == I) return F(v).text.slice(g.ch, q.ch);
					var K = [F(v).text.slice(g.ch)];
					La.iter(v + 1, I, function(Z) {
						K.push(Z.text)
					});
					K.push(F(I).text.slice(0, q.ch));
					return K.join("\n")
				}
				function nb() {
					return Ta(oa.from, oa.to)
				}
				function Hb() {
					hd || ee.set(ua.pollInterval, function() {
						fe();
						x();
						tc && Hb();
						ge()
					})
				}
				function h() {
					function g() {
						fe();
						if (!x() && !q) {
							q = true;
							ee.set(60, g)
						} else {
							hd = false;
							Hb()
						}
						ge()
					}
					var q = false;
					hd = true;
					ee.set(20, g)
				}
				function x() {
					if (ud || !tc || Wc(zb) || ua.readOnly) return false;
					var g = zb.value;
					if (g == Qc) return false;
					uc = null;
					for (var q = 0, v = Math.min(Qc.length, g.length); q < v && Qc[q] == g[q];)++q;
					if (q < Qc.length) oa.from = {
						line: oa.from.line,
						ch: oa.from.ch - (Qc.length - q)
					};
					else if (Nd && lb(oa.from, oa.to)) oa.to = {
						line: oa.to.line,
						ch: Math.min(F(oa.to.line).text.length, oa.to.ch + (g.length - q))
					};
					fb(g.slice(q), "end");
					Qc = g;
					return true
				}
				function O(g) {
					if (lb(oa.from, oa.to)) {
						if (g) Qc = zb.value = ""
					} else {
						Qc = "";
						zb.value = nb();
						Nb(zb)
					}
				}
				function V() {
					ua.readOnly != "nocursor" && zb.focus()
				}
				function ea() {
					if (kc.getBoundingClientRect) {
						var g = kc.getBoundingClientRect();
						if (!(kb && g.top == g.bottom)) {
							var q = R.innerHeight || Math.max(S.body.offsetHeight, S.documentElement.offsetHeight);
							if (g.top < 0 || g.bottom > q) kc.scrollIntoView()
						}
					}
				}
				function ia() {
					var g = Rc(oa.inverted ? oa.from : oa.to),
						q = ua.lineWrapping ? Math.min(g.x, xb.offsetWidth) : g.x;
					return xa(q, g.y, q, g.yBot)
				}
				function xa(g, q, v, I) {
					var K = he(),
						Z = jd(),
						na = Ec();
					q += Z;
					I += Z;
					g += K;
					v += K;
					var za = Va.clientHeight,
						Ja = Va.scrollTop;
					K = false;
					Z = true;
					if (q < Ja) {
						Va.scrollTop = Math.max(0, q - 2 * na);
						K = true
					} else if (I > Ja + za) {
						Va.scrollTop = I + na - za;
						K = true
					}
					q = Va.clientWidth;
					I = Va.scrollLeft;
					na = ua.fixedGutter ? ac.clientWidth : 0;
					if (g < I + na) {
						if (g < 50) g = 0;
						Va.scrollLeft = Math.max(0, g - 10 - na);
						K = true
					} else if (v > q + I - 3) {
						Va.scrollLeft = v + 10 - q;
						K = true;
						if (v > $b.clientWidth) Z = false
					}
					K && ua.onScroll && ua.onScroll(Fb);
					return Z
				}

				function Da() {
					var g = Ec(),
						q = Va.scrollTop - jd(),
						v = Math.max(0, Math.floor(q / g));
					g = Math.ceil((q + Va.clientHeight) / g);
					return {
						from: G(La, v),
						to: G(La, g)
					}
				}
				function Xa(g, q) {
					if (Va.clientWidth) {
						var v = Da();
						if (!(g !== true && g.length == 0 && v.from > Pb && v.to < nc)) {
							var I = Math.max(v.from - 100, 0);
							v = Math.min(La.size, v.to + 100);
							if (Pb < I && I - Pb < 20) I = Pb;
							if (nc > v && nc - v < 20) v = Math.min(La.size, nc);
							g = g === true ? [] : D([{
								from: Pb,
								to: nc,
								domStart: 0
							}], g);
							for (var K = 0, Z = 0; Z < g.length; ++Z) {
								var na = g[Z];
								if (na.from < I) {
									na.domStart += I - na.from;
									na.from = I
								}
								if (na.to > v) na.to = v;
								if (na.from >= na.to) g.splice(Z--, 1);
								else K += na.to - na.from
							}
							if (K != v - I) {
								g.sort(function(Sa, Ua) {
									return Sa.domStart - Ua.domStart
								});
								var za = Ec();
								K = ac.style.display;
								oc.style.display = "none";
								ha(I, v, g);
								oc.style.display = ac.style.display = "";
								if (Z = I != Pb || v != nc || ue != Va.clientHeight + za) ue = Va.clientHeight + za;
								Pb = I;
								nc = v;
								xd = L(La, I);
								Kd.style.top = xd * za + "px";
								if (Va.clientHeight) $b.style.height = La.height * za + 2 * jd() + "px";
								if (oc.childNodes.length != nc - Pb) throw new Error("BAD PATCH! " + JSON.stringify(g) + " size=" + (nc - Pb) + " nodes=" + oc.childNodes.length);
								if (ua.lineWrapping) {
									Pc = Va.clientWidth;
									var Ja = oc.firstChild,
										Ga = false;
									La.iter(Pb, nc, function(Sa) {
										if (!Sa.hidden) {
											var Ua = Math.round(Ja.offsetHeight / za) || 1;
											if (Sa.height != Ua) {
												Y(Sa, Ua);
												Bc = Ga = true
											}
										}
										Ja = Ja.nextSibling
									});
									if (Ga) $b.style.height = La.height * za + 2 * jd() + "px"
								} else {
									if (Pc == null) Pc = ie(Oc);
									if (Pc > Va.clientWidth) {
										xb.style.width = Pc + "px";
										$b.style.width = "";
										$b.style.width = Va.scrollWidth + "px"
									} else xb.style.width = $b.style.width = ""
								}
								ac.style.display = K;
								if (Z || Bc) wa();
								ja();
								!q && ua.onUpdate && ua.onUpdate(Fb);
								return true
							}
						}
					} else Pb = nc = xd = 0
				}
				function D(g, q) {
					for (var v = 0, I = q.length || 0; v < I; ++v) {
						for (var K = q[v], Z = [], na = K.diff || 0, za = 0, Ja = g.length; za < Ja; ++za) {
							var Ga = g[za];
							if (K.to <= Ga.from && K.diff) Z.push({
								from: Ga.from + na,
								to: Ga.to + na,
								domStart: Ga.domStart
							});
							else if (K.to <= Ga.from || K.from >= Ga.to) Z.push(Ga);
							else {
								K.from > Ga.from && Z.push({
									from: Ga.from,
									to: K.from,
									domStart: Ga.domStart
								});
								K.to < Ga.to && Z.push({
									from: K.to + na,
									to: Ga.to + na,
									domStart: Ga.domStart + (K.to - Ga.from)
								})
							}
						}
						g = Z
					}
					return g
				}
				function ha(g, q, v) {
					if (v.length) {
						function I(Ua) {
							var Ya = Ua.nextSibling;
							Ua.parentNode.removeChild(Ua);
							return Ya
						}
						for (var K = 0, Z = oc.firstChild, na = 0; na < v.length; ++na) {
							for (var za = v[na]; za.domStart > K;) {
								Z = I(Z);
								K++
							}
							var Ja = 0;
							for (za = za.to - za.from; Ja < za; ++Ja) {
								Z = Z.nextSibling;
								K++
							}
						}
						for (; Z;) Z = I(Z)
					} else oc.innerHTML = "";
					var Ga = v.shift();
					Z = oc.firstChild;
					Ja = g;
					var Sa = S.createElement("div");
					La.iter(g, q, function(Ua) {
						if (Ga && Ga.to == Ja) Ga = v.shift();
						if (!Ga || Ga.from > Ja) {
							if (Ua.hidden) var Ya = Sa.innerHTML = "<pre></pre>";
							else {
								Ya = "<pre" + (Ua.className ? ' class="' + Ua.className + '"' : "") + ">" + Ua.getHTML(Lb) + "</pre>";
								if (Ua.bgClassName) Ya = '<div style="position: relative"><pre class="' + Ua.bgClassName + '" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: -2">&#160;</pre>' + Ya + "</div>"
							}
							Sa.innerHTML = Ya;
							oc.insertBefore(Sa.firstChild, Z)
						} else Z = Z.nextSibling;
						++Ja
					})
				}
				function wa() {
					if (ua.gutter || ua.lineNumbers) {
						var g = Kd.offsetHeight,
							q = Va.clientHeight;
						ac.style.height = (g - q < 2 ? q : g) + "px";
						var v = [],
							I = Pb,
							K;
						La.iter(Pb, Math.max(nc, Pb + 1), function(za) {
							if (za.hidden) v.push("<pre></pre>");
							else {
								var Ja = za.gutterMarker,
									Ga = ua.lineNumbers ? I + ua.firstLineNumber : null;
								if (Ja && Ja.text) Ga = Ja.text.replace("%N%", Ga != null ? Ga : "");
								else if (Ga == null) Ga = "\u00a0";
								v.push(Ja && Ja.style ? '<pre class="' + Ja.style + '">' : "<pre>", Ga);
								for (Ga = 1; Ga < za.height; ++Ga) v.push("<br/>&#160;");
								v.push("</pre>");
								Ja || (K = I)
							}++I
						});
						ac.style.display = "none";
						sd.innerHTML = v.join("");
						if (K != null) {
							g = sd.childNodes[K - Pb];
							q = String(La.size).length;
							for (var Z = Cb(g), na = ""; Z.length + na.length < q;) na += "\u00a0";
							na && g.insertBefore(S.createTextNode(na), g.firstChild)
						}
						ac.style.display = "";
						xb.style.marginLeft = ac.offsetWidth + "px";
						Bc = false
					}
				}
				function ja() {
					var g = lb(oa.from, oa.to),
						q = Rc(oa.from, true),
						v = g ? q : Rc(oa.to, true),
						I = oa.inverted ? q : v,
						K = Ec(),
						Z = Eb(Kb),
						na = Eb(oc);
					yd.style.top = Math.max(0, Math.min(Va.offsetHeight, I.y + na.top - Z.top)) + "px";
					yd.style.left = Math.max(0, Math.min(Va.offsetWidth, I.x + na.left - Z.left)) + "px";
					if (g) {
						kc.style.top = I.y + "px";
						kc.style.left = (ua.lineWrapping ? Math.min(I.x, xb.offsetWidth) : I.x) + "px";
						kc.style.display = "";
						Od.style.display = "none"
					} else {
						g = q.y == v.y;
						var za = "";

						function Ja(Ga, Sa, Ua, Ya) {
							za += '<div class="CodeMirror-selected" style="position: absolute; left: ' + Ga + "px; top: " + Sa + "px; right: " + Ua + "px; height: " + Ya + 'px"></div>'
						}
						if (oa.from.ch && q.y >= 0) Ja(q.x, q.y, g ? xb.clientWidth - v.x : 0, K);
						q = Math.max(0, q.y + (oa.from.ch ? K : 0));
						I = Math.min(v.y, xb.clientHeight) - q;
						I > 0.2 * K && Ja(0, q, 0, I);
						if ((!g || !oa.from.ch) && v.y < xb.clientHeight - 0.5 * K) Ja(0, v.y, xb.clientWidth - v.x, K);
						Od.innerHTML = za;
						kc.style.display = "none";
						Od.style.display = ""
					}
				}
				function db(g) {
					uc = g ? uc || (oa.inverted ? oa.to : oa.from) : null
				}
				function Oa(g, q) {
					var v = uc && T(uc);
					if (v) if (Db(v, g)) g = v;
					else if (Db(q, v)) q = v;
					k(g, q);
					Pd = true
				}
				function k(g, q, v, I) {
					Qd = null;
					if (v == null) {
						v = oa.from.line;
						I = oa.to.line
					}
					if (!(lb(oa.from, g) && lb(oa.to, q))) {
						if (Db(q, g)) {
							var K = q;
							q = g;
							g = K
						}
						if (g.line != v) g = r(g, v, oa.from.ch);
						if (q.line != I) q = r(q, I, oa.to.ch);
						if (lb(g, q)) oa.inverted = false;
						else if (lb(g, oa.to)) oa.inverted = false;
						else if (lb(q, oa.from)) oa.inverted = true;
						if (ua.autoClearEmptyLines && lb(oa.from, oa.to)) if ((oa.inverted ? g : q).line != oa.from.line) {
							var Z = F(oa.from.line);
							/^\s+$/.test(Z.text) && setTimeout($a(function() {
								if (Z.parent && /^\s+$/.test(Z.text)) {
									var na = A(Z);
									bb("", {
										line: na,
										ch: 0
									}, {
										line: na,
										ch: Z.text.length
									})
								}
							}, 10))
						}
						oa.from = g;
						oa.to = q;
						Sc = true
					}
				}
				function r(g, q, v) {
					function I(K) {
						for (var Z = g.line + K, na = K == 1 ? La.size : -1; Z != na;) {
							var za = F(Z);
							if (!za.hidden) {
								K = g.ch;
								if (K > v || K > za.text.length) K = za.text.length;
								return {
									line: Z,
									ch: K
								}
							}
							Z += K
						}
					}
					if (!F(g.line).hidden) return g;
					return g.line >= q ? I(1) || I(-1) : I(-1) || I(1)
				}
				function z(g, q, v) {
					g = T({
						line: g,
						ch: q || 0
					});
					(v ? Oa : k)(g, g)
				}
				function U(g) {
					return Math.max(0, Math.min(g, La.size - 1))
				}
				function T(g) {
					if (g.line < 0) return {
						line: 0,
						ch: 0
					};
					if (g.line >= La.size) return {
						line: La.size - 1,
						ch: F(La.size - 1).text.length
					};
					var q = g.ch,
						v = F(g.line).text.length;
					return q == null || q > v ? {
						line: g.line,
						ch: v
					} : q < 0 ? {
						line: g.line,
						ch: 0
					} : g
				}
				function ma(g, q) {
					function v() {
						for (var Ja = Z + g, Ga = g < 0 ? -1 : La.size; Ja != Ga; Ja += g) {
							var Sa = F(Ja);
							if (!Sa.hidden) {
								Z = Ja;
								za = Sa;
								return true
							}
						}
					}
					function I(Ja) {
						if (na == (g < 0 ? 0 : za.text.length)) if (!Ja && v()) na = g < 0 ? za.text.length : 0;
						else return false;
						else na += g;
						return true
					}
					var K = oa.inverted ? oa.from : oa.to,
						Z = K.line,
						na = K.ch,
						za = F(Z);
					if (q == "char") I();
					else if (q == "column") I(true);
					else if (q == "word") for (q = false;;) {
						if (g < 0) if (!I()) break;
						if (Ub(za.text.charAt(na))) q = true;
						else if (q) {
							if (g < 0) {
								g = 1;
								I()
							}
							break
						}
						if (g > 0) if (!I()) break
					}
					return {
						line: Z,
						ch: na
					}
				}
				function Ea(g, q) {
					var v = g < 0 ? oa.from : oa.to;
					if (uc || lb(oa.from, oa.to)) v = ma(g, q);
					z(v.line, v.ch, true)
				}
				function qb(g, q) {
					if (lb(oa.from, oa.to)) g < 0 ? bb("", ma(g, q), oa.to) : bb("", oa.from, ma(g, q));
					else bb("", oa.from, oa.to);
					Pd = true
				}
				function ab(g, q) {
					var v = 0,
						I = Rc(oa.inverted ? oa.from : oa.to, true);
					if (Qd != null) I.x = Qd;
					if (q == "page") v = Math.min(Va.clientHeight, R.innerHeight || S.documentElement.clientHeight);
					else if (q == "line") v = Ec();
					g = je(I.x, I.y + v * g + 2);
					z(g.line, g.ch, true);
					Qd = I.x
				}
				function Na(g) {
					for (var q = F(g.line).text, v = g.ch, I = g.ch; v > 0 && Ub(q.charAt(v - 1));)--v;
					for (; I < q.length && Ub(q.charAt(I));)++I;
					Oa({
						line: g.line,
						ch: v
					}, {
						line: g.line,
						ch: I
					})
				}
				function ob(g) {
					Oa({
						line: g,
						ch: 0
					}, T({
						line: g + 1,
						ch: 0
					}))
				}
				function Mb(g) {
					if (lb(oa.from, oa.to)) return Ha(oa.from.line, g);
					for (var q = oa.to.line - (oa.to.ch ? 0 : 1), v = oa.from.line; v <= q; ++v) Ha(v, g)
				}
				function Ha(g, q) {
					q || (q = "add");
					if (q == "smart") if (Jb.indent) var v = Rd(g);
					else q = "prev";
					var I = F(g),
						K = I.indentation(ua.tabSize),
						Z = I.text.match(/^\s*/)[0],
						na;
					if (q == "prev") na = g ? F(g - 1).indentation(ua.tabSize) : 0;
					else if (q == "smart") na = Jb.indent(v, I.text.slice(Z.length), I.text);
					else if (q == "add") na = K + ua.indentUnit;
					else if (q == "subtract") na = K - ua.indentUnit;
					na = Math.max(0, na);
					if (na - K) {
						I = "";
						q = 0;
						if (ua.indentWithTabs) for (v = Math.floor(na / ua.tabSize); v; --v) {
							q += ua.tabSize;
							I += "\t"
						}
						for (; q < na;) {
							++q;
							I += " "
						}
					} else {
						if (oa.from.line != g && oa.to.line != g) return;
						I = Z
					}
					bb(I, {
						line: g,
						ch: 0
					}, {
						line: g,
						ch: Z.length
					})
				}
				function pb() {
					Jb = o.getMode(ua, ua.mode);
					La.iter(0, La.size, function(g) {
						g.stateAfter = null
					});
					Cc = [0];
					de()
				}
				function bc() {
					var g = ua.gutter || ua.lineNumbers;
					ac.style.display = g ? "" : "none";
					if (g) Bc = true;
					else oc.parentNode.style.marginLeft = 0
				}
				function Sd() {
					if (ua.lineWrapping) {
						Kb.className += " CodeMirror-wrap";
						var g = Va.clientWidth / ce() - 3;
						La.iter(0, La.size, function(q) {
							if (!q.hidden) {
								var v = Math.ceil(q.text.length / g) || 1;
								v != 1 && Y(q, v)
							}
						});
						xb.style.width = $b.style.width = ""
					} else {
						Kb.className = Kb.className.replace(" CodeMirror-wrap", "");
						Pc = null;
						Oc = "";
						La.iter(0, La.size, function(q) {
							q.height != 1 && !q.hidden && Y(q, 1);
							if (q.text.length > Oc.length) Oc = q.text
						})
					}
					wc.push({
						from: 0,
						to: La.size
					})
				}
				function Lb(g) {
					g = ua.tabSize - g % ua.tabSize;
					var q = ve[g];
					if (q) return q;
					q = '<span class="cm-tab">';
					for (var v = 0; v < g; ++v) q += " ";
					return ve[g] = {
						html: q + "</span>",
						width: g
					}
				}
				function Wb() {
					Va.className = Va.className.replace(/\s*cm-s-\w+/g, "") + ua.theme.replace(/(^|\s)\s*/g, " cm-s-")
				}
				function kd() {
					this.set = []
				}
				function $c(g, q, v) {
					function I(za, Ja, Ga, Sa) {
						F(za).addMark(new pa(Ja, Ga, Sa, K.set))
					}
					g = T(g);
					q = T(q);
					var K = new kd;
					if (!Db(g, q)) return K;
					if (g.line == q.line) I(g.line, g.ch, q.ch, v);
					else {
						I(g.line, g.ch, null, v);
						for (var Z = g.line + 1, na = q.line; Z < na; ++Z) I(Z, null, null, v);
						I(q.line, null, q.ch, v)
					}
					wc.push({
						from: g.line,
						to: q.line + 1
					});
					return K
				}
				function Tc(g) {
					g = T(g);
					var q = new ba(g.ch);
					F(g.line).addMark(q);
					return q
				}
				function Je(g, q, v) {
					if (typeof g == "number") g = F(U(g));
					g.gutterMarker = {
						text: q,
						style: v
					};
					Bc = true;
					return g
				}
				function Ke(g) {
					if (typeof g == "number") g = F(U(g));
					g.gutterMarker = null;
					Bc = true
				}
				function we(g, q) {
					var v = g,
						I = g;
					if (typeof g == "number") I = F(U(g));
					else v = A(g);
					if (v == null) return null;
					if (q(I, v)) wc.push({
						from: v,
						to: v + 1
					});
					else return null;
					return I
				}
				function Le(g, q, v) {
					return we(g, function(I) {
						if (I.className != q || I.bgClassName != v) {
							I.className = q;
							I.bgClassName = v;
							return true
						}
					})
				}
				function xe(g, q) {
					return we(g, function(v, I) {
						if (v.hidden != q) {
							v.hidden = q;
							Y(v, q ? 0 : 1);
							var K = oa.from.line;
							v = oa.to.line;
							if (q && (K == I || v == I)) {
								K = K == I ? r({
									line: K,
									ch: 0
								}, K, 0) : oa.from;
								I = v == I ? r({
									line: v,
									ch: 0
								}, v, 0) : oa.to;
								k(K, I)
							}
							return Bc = true
						}
					})
				}
				function Me(g) {
					if (typeof g == "number") {
						if (!H(g)) return null;
						var q = g;
						g = F(g);
						if (!g) return null
					} else {
						q = A(g);
						if (q == null) return null
					}
					var v = g.gutterMarker;
					return {
						line: q,
						handle: g,
						text: g.text,
						markerText: v && v.text,
						markerClass: v && v.style,
						lineClass: g.className,
						bgClass: g.bgClassName
					}
				}
				function ie(g) {
					Uc.innerHTML = "<pre><span>x</span></pre>";
					Uc.firstChild.firstChild.firstChild.nodeValue = g;
					return Uc.firstChild.firstChild.offsetWidth || 10
				}
				function ye(g, q) {
					if (q == 0) return {
						top: 0,
						left: 0
					};
					var v = "";
					if (ua.lineWrapping) {
						v = g.text.indexOf(" ", q + 6);
						v = wb(g.text.slice(q + 1, v < 0 ? g.text.length : v + (kb ? 5 : 0)))
					}
					Uc.innerHTML = "<pre>" + g.getHTML(Lb, q) + '<span id="CodeMirror-temp-' + ze + '">' + wb(g.text.charAt(q) || " ") + "</span>" + v + "</pre>";
					g = S.getElementById("CodeMirror-temp-" + ze);
					v = g.offsetTop;
					q = g.offsetLeft;
					if (kb && v == 0 && q == 0) {
						v = S.createElement("span");
						v.innerHTML = "x";
						g.parentNode.insertBefore(v, g.nextSibling);
						v = v.offsetTop
					}
					return {
						top: v,
						left: q
					}
				}
				function Rc(g, q) {
					var v = Ec();
					q = v * (L(La, g.line) - (q ? xd : 0));
					if (g.ch == 0) g = 0;
					else {
						var I = ye(F(g.line), g.ch);
						g = I.left;
						if (ua.lineWrapping) q += Math.max(0, I.top)
					}
					return {
						x: g,
						y: q,
						yBot: q + v
					}
				}
				function je(g, q) {
					function v(Vb) {
						Vb = ye(na, Vb);
						if (Ja) {
							var ic = Math.round(Vb.top / I);
							return Math.max(0, Vb.left + (ic - Ga) * Va.clientWidth)
						}
						return Vb.left
					}
					if (q < 0) q = 0;
					var I = Ec(),
						K = ce(),
						Z = xd + Math.floor(q / I);
					q = G(La, Z);
					if (q >= La.size) return {
						line: La.size - 1,
						ch: F(La.size - 1).text.length
					};
					var na = F(q),
						za = na.text,
						Ja = ua.lineWrapping,
						Ga = Ja ? Z - L(La, q) : 0;
					if (g <= 0 && Ga == 0) return {
						line: q,
						ch: 0
					};
					var Sa = Z = 0;
					za = za.length;
					var Ua;
					for (K = Math.min(za, Math.ceil((g + Ga * Va.clientWidth * 0.9) / K));;) {
						var Ya = v(K);
						if (Ya <= g && K < za) K = Math.min(za, Math.ceil(K * 1.2));
						else {
							Ua = Ya;
							za = K;
							break
						}
					}
					if (g > Ua) return {
						line: q,
						ch: za
					};
					K = Math.floor(za * 0.8);
					Ya = v(K);
					if (Ya < g) {
						Z = K;
						Sa = Ya
					}
					for (;;) {
						if (za - Z <= 1) return {
							line: q,
							ch: Ua - g > g - Sa ? Z : za
						};
						K = Math.ceil((Z + za) / 2);
						Ya = v(K);
						if (Ya > g) {
							za = K;
							Ua = Ya
						} else {
							Z = K;
							Sa = Ya
						}
					}
				}
				function Ne(g) {
					g = Rc(g, true);
					var q = Eb(xb);
					return {
						x: q.left + g.x,
						y: q.top + g.y,
						yBot: q.top + g.yBot
					}
				}
				function Ec() {
					if (zd == null) {
						zd = "<pre>";
						for (var g = 0; g < 49; ++g) zd += "x<br/>";
						zd += "x</pre>"
					}
					g = oc.clientHeight;
					if (g == Ae) return ke;
					Ae = g;
					Uc.innerHTML = zd;
					ke = Uc.firstChild.offsetHeight / 50 || 1;
					Uc.innerHTML = "";
					return ke
				}
				function ce() {
					if (Va.clientWidth == Be) return Ce;
					Be = Va.clientWidth;
					return Ce = ie("x")
				}
				function jd() {
					return xb.offsetTop
				}
				function he() {
					return xb.offsetLeft
				}
				function gd(g, q) {
					var v = Eb(Va, true),
						I, K;
					try {
						I = g.clientX;
						K = g.clientY
					} catch (Z) {
						return null
					}
					if (!q && (I - v.left > Va.clientWidth || K - v.top > Va.clientHeight)) return null;
					g = Eb(xb, true);
					return je(I - g.left, K - g.top)
				}
				function re(g) {
					function q() {
						var za = Zb(zb.value).join("\n");
						za != Z && $a(fb)(za, "end");
						yd.style.position = "relative";
						zb.style.cssText = K;
						if (tb) Va.scrollTop = I;
						ud = false;
						O(true);
						Hb()
					}
					var v = gd(g),
						I = Va.scrollTop;
					if (!(!v || R.opera)) {
						if (lb(oa.from, oa.to) || Db(v, oa.from) || !Db(v, oa.to)) $a(z)(v.line, v.ch);
						var K = zb.style.cssText;
						yd.style.position = "absolute";
						zb.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (g.clientY - 5) + "px; left: " + (g.clientX - 5) + "px; z-index: 1000; background: white; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
						ud = true;
						var Z = zb.value = nb();
						V();
						Nb(zb);
						if (Wa) {
							va(g);
							var na = Ca(R, "mouseup", function() {
								na();
								setTimeout(q, 20)
							}, true)
						} else setTimeout(q, 50)
					}
				}
				function te() {
					clearInterval(be);
					var g = true;
					kc.style.visibility = "";
					be = setInterval(function() {
						kc.style.visibility = (g = !g) ? "" : "hidden"
					}, 650)
				}
				function De(g) {
					function q(jc, Oe, Pe) {
						if (jc.text) {
							var Ad = jc.styles;
							jc = na ? 0 : jc.text.length - 1;
							for (var le, Bd = na ? 0 : Ad.length - 2, Qe = na ? Ad.length : -2; Bd != Qe; Bd += 2 * za) {
								var Td = Ad[Bd];
								if (Ad[Bd + 1] != null && Ad[Bd + 1] != Ua) jc += za * Td.length;
								else for (var me = na ? 0 : Td.length - 1, Re = na ? Td.length : -1; me != Re; me += za, jc += za) if (jc >= Oe && jc < Pe && Vb.test(le = Td.charAt(me))) {
									var Ee = ne[le];
									if (Ee.charAt(1) == ">" == na) Ya.push(le);
									else if (Ya.pop() != Ee.charAt(0)) return {
										pos: jc,
										match: false
									};
									else if (!Ya.length) return {
										pos: jc,
										match: true
									}
								}
							}
						}
					}
					var v = oa.inverted ? oa.from : oa.to,
						I = F(v.line),
						K = v.ch - 1,
						Z = K >= 0 && ne[I.text.charAt(K)] || ne[I.text.charAt(++K)];
					if (Z) {
						Z.charAt(0);
						var na = Z.charAt(1) == ">",
							za = na ? 1 : -1,
							Ja = I.styles,
							Ga = K + 1;
						Z = 0;
						for (var Sa = Ja.length; Z < Sa; Z += 2) if ((Ga -= Ja[Z].length) <= 0) {
							var Ua = Ja[Z + 1];
							break
						}
						var Ya = [I.text.charAt(K)],
							Vb = /[(){}[\]]/;
						Z = v.line;
						for (Sa = na ? Math.min(Z + 100, La.size) : Math.max(-1, Z - 100); Z != Sa; Z += za) {
							I = F(Z);
							var ic = Z == v.line;
							if (ic = q(I, ic && na ? K + 1 : 0, ic && !na ? K : I.text.length)) break
						}
						ic || (ic = {
							pos: null,
							match: false
						});
						Ua = ic.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
						var id = $c({
							line: v.line,
							ch: K
						}, {
							line: v.line,
							ch: K + 1
						}, Ua),
							yb = ic.pos != null && $c({
								line: Z,
								ch: ic.pos
							}, {
								line: Z,
								ch: ic.pos + 1
							}, Ua);
						v = $a(function() {
							id.clear();
							yb && yb.clear()
						});
						if (g) setTimeout(v, 800);
						else Nc = v
					}
				}
				function Fe(g) {
					var q, v, I = g;
					for (g = g - 40; I > g; --I) {
						if (I == 0) return 0;
						var K = F(I - 1);
						if (K.stateAfter) return I;
						K = K.indentation(ua.tabSize);
						if (v == null || q > K) {
							v = I - 1;
							q = K
						}
					}
					return v
				}
				function Rd(g) {
					var q = Fe(g),
						v = q && F(q - 1).stateAfter;
					v = v ? ra(Jb, v) : E(Jb);
					La.iter(q, g, function(I) {
						I.highlight(Jb, v, ua.tabSize);
						I.stateAfter = ra(Jb, v)
					});
					q < g && wc.push({
						from: q,
						to: g
					});
					g < La.size && !F(g).stateAfter && Cc.push(g);
					return v
				}
				function Ie(g, q) {
					var v = Rd(g);
					La.iter(g, q, function(I) {
						I.highlight(Jb, v, ua.tabSize);
						I.stateAfter = ra(Jb, v)
					})
				}
				function Se() {
					for (var g = +new Date + ua.workTime, q = Cc.length; Cc.length;) {
						var v = F(Pb).stateAfter ? Cc.pop() : Pb;
						if (!(v >= La.size)) {
							var I = Fe(v),
								K = I && F(I - 1).stateAfter;
							K = K ? ra(Jb, K) : E(Jb);
							var Z = 0,
								na = Jb.compareStates,
								za = false,
								Ja = I,
								Ga = false;
							La.iter(Ja, La.size, function(Sa) {
								var Ua = Sa.stateAfter;
								if (+new Date > g) {
									Cc.push(Ja);
									de(ua.workDelay);
									za && wc.push({
										from: v,
										to: Ja + 1
									});
									return Ga = true
								}
								var Ya = Sa.highlight(Jb, K, ua.tabSize);
								if (Ya) za = true;
								Sa.stateAfter = ra(Jb, K);
								if (na) {
									if (Ua && na(Ua, K)) return true
								} else if (Ya !== false || !Ua) Z = 0;
								else if (++Z > 3 && (!Jb.indent || Jb.indent(Ua, "") == Jb.indent(K, ""))) return true;
								++Ja
							});
							if (Ga) return;
							za && wc.push({
								from: v,
								to: Ja + 1
							})
						}
					}
					q && ua.onHighlightComplete && ua.onHighlightComplete(Fb)
				}
				function de(g) {
					Cc.length && Te.set(g, $a(Se))
				}
				function fe() {
					Mc = Pd = wd = null;
					wc = [];
					Sc = false;
					vd = []
				}
				function ge() {
					var g = false,
						q;
					if (Sc) g = !ia();
					if (wc.length) q = Xa(wc, true);
					else {
						Sc && ja();
						Bc && wa()
					}
					g && ia();
					if (Sc) {
						ea();
						te()
					}
					if (tc && !ud && (Mc === true || Mc !== false && Sc)) O(Pd);
					Sc && ua.matchBrackets && setTimeout($a(function() {
						if (Nc) {
							Nc();
							Nc = null
						}
						lb(oa.from, oa.to) && De(false)
					}), 20);
					var v = wd;
					g = vd;
					Sc && ua.onCursorActivity && ua.onCursorActivity(Fb);
					v && ua.onChange && Fb && ua.onChange(Fb, v);
					for (v = 0; v < g.length; ++v) g[v](Fb);
					q && ua.onUpdate && ua.onUpdate(Fb)
				}
				function $a(g) {
					return function() {
						Ge++ || fe();
						try {
							var q = g.apply(this, arguments)
						} finally {
							--Ge || ge()
						}
						return q
					}
				}
				var ua = {},
					oe = o.defaults;
				for (var Ud in oe) if (oe.hasOwnProperty(Ud)) ua[Ud] = (w && w.hasOwnProperty(Ud) ? w : oe)[Ud];
				var Kb = S.createElement("div");
				Kb.className = "CodeMirror" + (ua.lineWrapping ? " CodeMirror-wrap" : "");
				Kb.innerHTML = '<div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea style="position: absolute; padding: 0; width: 1px; height: 1em" wrap="off" autocorrect="off" autocapitalize="off"></textarea></div><div class="CodeMirror-scroll" tabindex="-1"><div style="position: relative"><div style="position: relative"><div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div><div class="CodeMirror-lines"><div style="position: relative; z-index: 0"><div style="position: absolute; width: 100%; height: 0; overflow: hidden; visibility: hidden;"></div><pre class="CodeMirror-cursor">&#160;</pre><div style="position: relative; z-index: -1"></div><div></div></div></div></div></div></div>';
				e.appendChild ? e.appendChild(Kb) : e(Kb);
				var yd = Kb.firstChild,
					zb = yd.firstChild,
					Va = Kb.lastChild,
					$b = Va.firstChild,
					Kd = $b.firstChild,
					ac = Kd.firstChild,
					sd = ac.firstChild,
					xb = ac.nextSibling.firstChild,
					Uc = xb.firstChild,
					kc = Uc.nextSibling,
					Od = kc.nextSibling,
					oc = Od.nextSibling;
				Wb();
				if (Ob) zb.style.width = "0px";
				if (!Yb) xb.draggable = true;
				xb.style.outline = "none";
				if (ua.tabindex != null) zb.tabIndex = ua.tabindex;
				if (!ua.gutter && !ua.lineNumbers) ac.style.display = "none";
				try {
					ie("x")
				} catch (pe) {
					if (pe.message.match(/runtime/i)) pe = new Error("A CodeMirror inside a P-style element does not work in Internet Explorer. (innerHTML bug)");
					throw pe;
				}
				var ee = new Ma,
					Te = new Ma,
					be, Jb, La = new n([new s([new j("")])]),
					Cc, tc;
				pb();
				var oa = {
					from: {
						line: 0,
						ch: 0
					},
					to: {
						line: 0,
						ch: 0
					},
					inverted: false
				},
					uc, Ld, td, qe = 0,
					$d, Nd = false,
					Md = false,
					Mc, Pd, wc, wd, Sc, ud, Bc, vd, xd = 0,
					Pb = 0,
					nc = 0,
					ue = 0,
					Nc, Oc = "",
					Pc, ve = {};
				$a(function() {
					fa(ua.value || "");
					Mc = false
				})();
				var vc = new P;
				Ca(Va, "mousedown", $a(gb));
				Ca(Va, "dblclick", $a(a));
				Ca(xb, "dragstart", d);
				Ca(xb, "selectstart", ya);
				Wa || Ca(Va, "contextmenu", re);
				Ca(Va, "scroll", function() {
					qe = Va.scrollTop;
					Xa([]);
					if (ua.fixedGutter) ac.style.left = Va.scrollLeft + "px";
					ua.onScroll && ua.onScroll(Fb)
				});
				Ca(R, "resize", function() {
					Xa(true)
				});
				Ca(zb, "keyup", $a(C));
				Ca(zb, "input", h);
				Ca(zb, "keydown", $a(i));
				Ca(zb, "keypress", $a(B));
				Ca(zb, "focus", t);
				Ca(zb, "blur", da);
				Ca(Va, "dragenter", va);
				Ca(Va, "dragover", va);
				Ca(Va, "drop", $a(b));
				Ca(Va, "paste", function() {
					V();
					h()
				});
				Ca(zb, "paste", h);
				Ca(zb, "cut", $a(function() {
					ua.readOnly || fb("")
				}));
				var He;
				try {
					He = S.activeElement == zb
				} catch (Ue) {}
				He ? setTimeout(t, 20) : da();
				var Fb = Kb.CodeMirror = {
					getValue: qa,
					setValue: $a(fa),
					getSelection: nb,
					replaceSelection: $a(fb),
					focus: function() {
						R.focus();
						V();
						t();
						h()
					},
					setOption: function(g, q) {
						var v = ua[g];
						ua[g] = q;
						if (g == "mode" || g == "indentUnit") pb();
						else if (g == "readOnly" && q == "nocursor") {
							da();
							zb.blur()
						} else if (g == "readOnly" && !q) O(true);
						else if (g == "theme") Wb();
						else if (g == "lineWrapping" && v != q) $a(Sd)();
						else g == "tabSize" && Xa(true);
						if (g == "lineNumbers" || g == "gutter" || g == "firstLineNumber" || g == "theme") {
							bc();
							Xa(true)
						}
					},
					getOption: function(g) {
						return ua[g]
					},
					undo: $a(ca),
					redo: $a(Pa),
					indentLine: $a(function(g, q) {
						if (typeof q != "string") q = q == null ? ua.smartIndent ? "smart" : "prev" : q ? "add" : "subtract";
						H(g) && Ha(g, q)
					}),
					indentSelection: $a(Mb),
					historySize: function() {
						return {
							undo: vc.done.length,
							redo: vc.undone.length
						}
					},
					clearHistory: function() {
						vc = new P
					},
					matchBrackets: $a(function() {
						De(true)
					}),
					getTokenAt: $a(function(g) {
						g = T(g);
						return F(g.line).getTokenAt(Jb, Rd(g.line), g.ch)
					}),
					getStateAfter: function(g) {
						g = U(g == null ? La.size - 1 : g);
						return Rd(g + 1)
					},
					cursorCoords: function(g, q) {
						if (g == null) g = oa.inverted;
						return this.charCoords(g ? oa.from : oa.to, q)
					},
					charCoords: function(g, q) {
						g = T(g);
						if (q == "local") return Rc(g, false);
						if (q == "div") return Rc(g, true);
						return Ne(g)
					},
					coordsChar: function(g) {
						var q = Eb(xb);
						return je(g.x - q.left, g.y - q.top)
					},
					markText: $a($c),
					setBookmark: Tc,
					setMarker: $a(Je),
					clearMarker: $a(Ke),
					setLineClass: $a(Le),
					hideLine: $a(function(g) {
						return xe(g, true)
					}),
					showLine: $a(function(g) {
						return xe(g, false)
					}),
					onDeleteLine: function(g, q) {
						if (typeof g == "number") {
							if (!H(g)) return null;
							g = F(g)
						}(g.handlers || (g.handlers = [])).push(q);
						return g
					},
					lineInfo: Me,
					addWidget: function(g, q, v, I, K) {
						g = Rc(T(g));
						var Z = g.yBot,
							na = g.x;
						q.style.position = "absolute";
						$b.appendChild(q);
						if (I == "over") Z = g.y;
						else if (I == "near") {
							I = Math.max(Va.offsetHeight, La.height * Ec());
							var za = Math.max($b.clientWidth, xb.clientWidth) - he();
							if (g.yBot + q.offsetHeight > I && g.y > q.offsetHeight) Z = g.y - q.offsetHeight;
							if (na + q.offsetWidth > za) na = za - q.offsetWidth
						}
						q.style.top = Z + jd() + "px";
						q.style.left = q.style.right = "";
						if (K == "right") {
							na = $b.clientWidth - q.offsetWidth;
							q.style.right = "0px"
						} else {
							if (K == "left") na = 0;
							else if (K == "middle") na = ($b.clientWidth - q.offsetWidth) / 2;
							q.style.left = na + he() + "px"
						}
						v && xa(na, Z, na + q.offsetWidth, Z + q.offsetHeight)
					},
					lineCount: function() {
						return La.size
					},
					clipPos: T,
					getCursor: function(g) {
						if (g == null) g = oa.inverted;
						return hc(g ? oa.from : oa.to)
					},
					somethingSelected: function() {
						return !lb(oa.from, oa.to)
					},
					setCursor: $a(function(g, q, v) {
						q == null && typeof g.line == "number" ? z(g.line, g.ch, v) : z(g, q, v)
					}),
					setSelection: $a(function(g, q, v) {
						(v ? Oa : k)(T(g), T(q || g))
					}),
					getLine: function(g) {
						if (H(g)) return F(g).text
					},
					getLineHandle: function(g) {
						if (H(g)) return F(g)
					},
					setLine: $a(function(g, q) {
						H(g) && bb(q, {
							line: g,
							ch: 0
						}, {
							line: g,
							ch: F(g).text.length
						})
					}),
					removeLine: $a(function(g) {
						H(g) && bb("", {
							line: g,
							ch: 0
						}, T({
							line: g + 1,
							ch: 0
						}))
					}),
					replaceRange: $a(bb),
					getRange: function(g, q) {
						return Ta(T(g), T(q))
					},
					triggerOnKeyDown: $a(i),
					execCommand: function(g) {
						return N[g](Fb)
					},
					moveH: $a(Ea),
					deleteH: $a(qb),
					moveV: $a(ab),
					toggleOverwrite: function() {
						if (Nd) {
							Nd = false;
							kc.className = kc.className.replace(" CodeMirror-overwrite", "")
						} else {
							Nd = true;
							kc.className += " CodeMirror-overwrite"
						}
					},
					posFromIndex: function(g) {
						var q = 0,
							v;
						La.iter(0, La.size, function(I) {
							I = I.text.length + 1;
							if (I > g) {
								v = g;
								return true
							}
							g -= I;
							++q
						});
						return T({
							line: q,
							ch: v
						})
					},
					indexFromPos: function(g) {
						if (g.line < 0 || g.ch < 0) return 0;
						var q = g.ch;
						La.iter(0, g.line, function(v) {
							q += v.text.length + 1
						});
						return q
					},
					scrollTo: function(g, q) {
						if (g != null) Va.scrollLeft = g;
						if (q != null) Va.scrollTop = q;
						Xa([])
					},
					operation: function(g) {
						return $a(g)()
					},
					refresh: function() {
						Xa(true);
						if (Va.scrollHeight > qe) Va.scrollTop = qe
					},
					getInputField: function() {
						return zb
					},
					getWrapperElement: function() {
						return Kb
					},
					getScrollerElement: function() {
						return Va
					},
					getGutterElement: function() {
						return ac
					}
				},
					ae = null,
					se, hd = false,
					Qc = "",
					Qd = null;
				kd.prototype.clear = $a(function() {
					for (var g = Infinity, q = -Infinity, v = 0, I = this.set.length; v < I; ++v) {
						var K = this.set[v],
							Z = K.marked;
						if (Z && K.parent) {
							K = A(K);
							g = Math.min(g, K);
							q = Math.max(q, K);
							for (K = 0; K < Z.length; ++K) Z[K].set == this.set && Z.splice(K--, 1)
						}
					}
					g != Infinity && wc.push({
						from: g,
						to: q + 1
					})
				});
				kd.prototype.find = function() {
					for (var g, q, v = 0, I = this.set.length; v < I; ++v) for (var K = this.set[v], Z = K.marked, na = 0; na < Z.length; ++na) {
						var za = Z[na];
						if (za.set == this.set) if (za.from != null || za.to != null) {
							var Ja = A(K);
							if (Ja != null) {
								if (za.from != null) g = {
									line: Ja,
									ch: za.from
								};
								if (za.to != null) q = {
									line: Ja,
									ch: za.to
								}
							}
						}
					}
					return {
						from: g,
						to: q
					}
				};
				var ze = Math.floor(Math.random() * 16777215).toString(16),
					ke, Ae, zd, Ce, Be = 0,
					ne = {
						"(": ")>",
						")": "(<",
						"[": "]>",
						"]": "[<",
						"{": "}>",
						"}": "{<"
					},
					Ge = 0;
				for (var Vd in Ib) if (Ib.propertyIsEnumerable(Vd) && !Fb.propertyIsEnumerable(Vd)) Fb[Vd] = Ib[Vd];
				return Fb
			}
			function u(e) {
				return typeof e == "string" ? Fa[e] : e
			}
			function M(e, w, H, F) {
				function Y(fa) {
					fa = u(fa);
					var qa = fa[e];
					if (qa != null && F(qa)) return true;
					if (fa.catchall) return F(fa.catchall);
					fa = fa.fallthrough;
					if (fa == null) return false;
					if (Object.prototype.toString.call(fa) != "[object Array]") return Y(fa);
					qa = 0;
					for (var gb = fa.length; qa < gb; ++qa) if (Y(fa[qa])) return true;
					return false
				}
				if (w && Y(w)) return true;
				return Y(H)
			}
			function X(e) {
				e = Gb[Ba(e, "keyCode")];
				return e == "Ctrl" || e == "Alt" || e == "Shift" || e == "Mod"
			}
			function ra(e, w) {
				if (w === true) return w;
				if (e.copyState) return e.copyState(w);
				e = {};
				for (var H in w) {
					var F = w[H];
					if (F instanceof Array) F = F.concat([]);
					e[H] = F
				}
				return e
			}
			function E(e, w, H) {
				return e.startState ? e.startState(w, H) : true
			}
			function sa(e, w) {
				this.pos = this.start = 0;
				this.string = e;
				this.tabSize = w || 8
			}
			function pa(e, w, H, F) {
				this.from = e;
				this.to = w;
				this.style = H;
				this.set = F
			}
			function ba(e) {
				this.to = this.from = e;
				this.line = null
			}
			function j(e, w) {
				this.styles = w || [e, null];
				this.text = e;
				this.height = 1;
				this.stateAfter = this.parent = this.hidden = this.marked = this.gutterMarker = this.className = this.bgClassName = this.handlers = null
			}
			function m(e, w, H, F) {
				for (var Y = 0, fa = 0, qa = 0; fa < w; Y += 2) {
					var gb = H[Y],
						a = fa + gb.length;
					if (qa == 0) {
						a > e && F.push(gb.slice(e - fa, Math.min(gb.length, w - fa)), H[Y + 1]);
						if (a >= e) qa = 1
					} else if (qa == 1) a > w ? F.push(gb.slice(0, w - fa), H[Y + 1]) : F.push(gb, H[Y + 1]);
					fa = a
				}
			}
			function s(e) {
				this.lines = e;
				this.parent = null;
				for (var w = 0, H = e.length, F = 0; w < H; ++w) {
					e[w].parent = this;
					F += e[w].height
				}
				this.height = F
			}
			function n(e) {
				this.children = e;
				for (var w = 0, H = 0, F = 0, Y = e.length; F < Y; ++F) {
					var fa = e[F];
					w += fa.chunkSize();
					H += fa.height;
					fa.parent = this
				}
				this.size = w;
				this.height = H;
				this.parent = null
			}
			function y(e, w) {
				for (; !e.lines;) for (var H = 0;; ++H) {
					var F = e.children[H],
						Y = F.chunkSize();
					if (w < Y) {
						e = F;
						break
					}
					w -= Y
				}
				return e.lines[w]
			}
			function A(e) {
				if (e.parent == null) return null;
				var w = e.parent;
				e = Xb(w.lines, e);
				for (var H = w.parent; H; w = H, H = H.parent) for (var F = 0;; ++F) {
					if (H.children[F] == w) break;
					e += H.children[F].chunkSize()
				}
				return e
			}
			function G(e, w) {
				var H = 0;
				a: do {
					for (var F = 0, Y = e.children.length; F < Y; ++F) {
						var fa = e.children[F],
							qa = fa.height;
						if (w < qa) {
							e = fa;
							continue a
						}
						w -= qa;
						H += fa.chunkSize()
					}
					return H
				} while (!e.lines);
				F = 0;
				for (Y = e.lines.length; F < Y; ++F) {
					fa = e.lines[F].height;
					if (w < fa) break;
					w -= fa
				}
				return H + F
			}
			function L(e, w) {
				var H = 0;
				a: do {
					for (var F = 0, Y = e.children.length; F < Y; ++F) {
						var fa = e.children[F],
							qa = fa.chunkSize();
						if (w < qa) {
							e = fa;
							continue a
						}
						w -= qa;
						H += fa.height
					}
					return H
				} while (!e.lines);
				for (F = 0; F < w; ++F) H += e.lines[F].height;
				return H
			}
			function P() {
				this.time = 0;
				this.done = [];
				this.undone = []
			}
			function aa() {
				va(this)
			}
			function ta(e) {
				if (!e.stop) e.stop = aa;
				return e
			}
			function ya(e) {
				if (e.preventDefault) e.preventDefault();
				else e.returnValue = false
			}
			function Ra(e) {
				if (e.stopPropagation) e.stopPropagation();
				else e.cancelBubble = true
			}
			function va(e) {
				ya(e);
				Ra(e)
			}
			function Q(e) {
				return e.target || e.srcElement
			}
			function ka(e) {
				if (e.which) return e.which;
				else if (e.button & 1) return 1;
				else if (e.button & 2) return 3;
				else if (e.button & 4) return 2
			}
			function Ba(e, w) {
				return e.override && e.override.hasOwnProperty(w) ? e.override[w] : e[w]
			}
			function Ca(e, w, H, F) {
				if (typeof e.addEventListener == "function") {
					e.addEventListener(w, H, false);
					if (F) return function() {
						e.removeEventListener(w, H, false)
					}
				} else {
					var Y = function(fa) {
							H(fa || R.event)
						};
					e.attachEvent("on" + w, Y);
					if (F) return function() {
						e.detachEvent("on" + w, Y)
					}
				}
			}
			function Ma() {
				this.id = null
			}
			function rb(e, w, H) {
				if (w == null) {
					w = e.search(/[^\s\u00a0]/);
					if (w == -1) w = e.length
				}
				for (var F = 0, Y = 0; F < w; ++F) if (e.charAt(F) == "\t") Y += H - Y % H;
				else ++Y;
				return Y
			}
			function eb(e) {
				if (e.currentStyle) return e.currentStyle;
				return R.getComputedStyle(e, null)
			}
			function Eb(e, w) {
				for (var H = e.ownerDocument.body, F = 0, Y = 0, fa = false, qa = e; qa; qa = qa.offsetParent) {
					var gb = qa.offsetLeft,
						a = qa.offsetTop;
					if (qa == H) {
						F += Math.abs(gb);
						Y += Math.abs(a)
					} else {
						F += gb;
						Y += a
					}
					if (w && eb(qa).position == "fixed") fa = true
				}
				w = w && !fa ? null : H;
				for (qa = e.parentNode; qa != w; qa = qa.parentNode) if (qa.scrollLeft != null) {
					F -= qa.scrollLeft;
					Y -= qa.scrollTop
				}
				return {
					left: F,
					top: Y
				}
			}
			function Cb(e) {
				return e.textContent || e.innerText || e.nodeValue || ""
			}
			function Nb(e) {
				if (Ob) {
					e.selectionStart = 0;
					e.selectionEnd = e.value.length
				} else e.select()
			}
			function lb(e, w) {
				return e.line == w.line && e.ch == w.ch
			}
			function Db(e, w) {
				return e.line < w.line || e.line == w.line && e.ch < w.ch
			}
			function hc(e) {
				return {
					line: e.line,
					ch: e.ch
				}
			}
			function wb(e) {
				sc.textContent = e;
				return sc.innerHTML
			}
			function Kc(e, w) {
				if (!w) return 0;
				if (!e) return w.length;
				for (var H = e.length, F = w.length; H >= 0 && F >= 0; --H, --F) if (e.charAt(H) != w.charAt(F)) break;
				return F + 1
			}
			function Xb(e, w) {
				if (e.indexOf) return e.indexOf(w);
				for (var H = 0, F = e.length; H < F; ++H) if (e[H] == w) return H;
				return -1
			}
			function Ub(e) {
				return /\w/.test(e) || e.toUpperCase() != e.toLowerCase()
			}
			o.defaults = {
				value: "",
				mode: null,
				theme: "default",
				indentUnit: 2,
				indentWithTabs: false,
				smartIndent: true,
				tabSize: 4,
				keyMap: "default",
				extraKeys: null,
				electricChars: true,
				autoClearEmptyLines: false,
				onKeyEvent: null,
				lineWrapping: false,
				lineNumbers: false,
				gutter: false,
				fixedGutter: false,
				firstLineNumber: 1,
				readOnly: false,
				onChange: null,
				onCursorActivity: null,
				onGutterClick: null,
				onHighlightComplete: null,
				onUpdate: null,
				onFocus: null,
				onBlur: null,
				onScroll: null,
				matchBrackets: false,
				workTime: 100,
				workDelay: 200,
				pollInterval: 100,
				undoDepth: 40,
				tabindex: null
			};
			var Ob = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent),
				mc = Ob || /Mac/.test(navigator.platform);
			/Win/.test(navigator.platform);
			var dc = {},
				hb = {};
			o.defineMode = function(e, w) {
				if (!o.defaults.mode && e != "null") o.defaults.mode = e;
				dc[e] = w
			};
			o.defineMIME = function(e, w) {
				hb[e] = w
			};
			o.resolveMode = function(e) {
				if (typeof e == "string" && hb.hasOwnProperty(e)) e = hb[e];
				else if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return o.resolveMode("application/xml");
				return typeof e == "string" ? {
					name: e
				} : e || {
					name: "null"
				}
			};
			o.getMode = function(e, w) {
				w = o.resolveMode(w);
				var H = dc[w.name];
				if (!H) {
					R.console && console.warn("No mode " + w.name + " found, falling back to plain text.");
					return o.getMode(e, "text/plain")
				}
				return H(e, w)
			};
			o.listModes = function() {
				var e = [];
				for (var w in dc) dc.propertyIsEnumerable(w) && e.push(w);
				return e
			};
			o.listMIMEs = function() {
				var e = [];
				for (var w in hb) hb.propertyIsEnumerable(w) && e.push({
					mime: w,
					mode: hb[w]
				});
				return e
			};
			var Ib = o.extensions = {};
			o.defineExtension = function(e, w) {
				Ib[e] = w
			};
			var N = o.commands = {
				selectAll: function(e) {
					e.setSelection({
						line: 0,
						ch: 0
					}, {
						line: e.lineCount() - 1
					})
				},
				killLine: function(e) {
					var w = e.getCursor(true),
						H = e.getCursor(false),
						F = !lb(w, H);
					!F && e.getLine(w.line).length == w.ch ? e.replaceRange("", w, {
						line: w.line + 1,
						ch: 0
					}) : e.replaceRange("", w, F ? H : {
						line: w.line
					})
				},
				deleteLine: function(e) {
					var w = e.getCursor().line;
					e.replaceRange("", {
						line: w,
						ch: 0
					}, {
						line: w
					})
				},
				undo: function(e) {
					e.undo()
				},
				redo: function(e) {
					e.redo()
				},
				goDocStart: function(e) {
					e.setCursor(0, 0, true)
				},
				goDocEnd: function(e) {
					e.setSelection({
						line: e.lineCount() - 1
					}, null, true)
				},
				goLineStart: function(e) {
					e.setCursor(e.getCursor().line, 0, true)
				},
				goLineStartSmart: function(e) {
					var w = e.getCursor(),
						H = e.getLine(w.line);
					H = Math.max(0, H.search(/\S/));
					e.setCursor(w.line, w.ch <= H && w.ch ? 0 : H, true)
				},
				goLineEnd: function(e) {
					e.setSelection({
						line: e.getCursor().line
					}, null, true)
				},
				goLineUp: function(e) {
					e.moveV(-1, "line")
				},
				goLineDown: function(e) {
					e.moveV(1, "line")
				},
				goPageUp: function(e) {
					e.moveV(-1, "page")
				},
				goPageDown: function(e) {
					e.moveV(1, "page")
				},
				goCharLeft: function(e) {
					e.moveH(-1, "char")
				},
				goCharRight: function(e) {
					e.moveH(1, "char")
				},
				goColumnLeft: function(e) {
					e.moveH(-1, "column")
				},
				goColumnRight: function(e) {
					e.moveH(1, "column")
				},
				goWordLeft: function(e) {
					e.moveH(-1, "word")
				},
				goWordRight: function(e) {
					e.moveH(1, "word")
				},
				delCharLeft: function(e) {
					e.deleteH(-1, "char")
				},
				delCharRight: function(e) {
					e.deleteH(1, "char")
				},
				delWordLeft: function(e) {
					e.deleteH(-1, "word")
				},
				delWordRight: function(e) {
					e.deleteH(1, "word")
				},
				indentAuto: function(e) {
					e.indentSelection("smart")
				},
				indentMore: function(e) {
					e.indentSelection("add")
				},
				indentLess: function(e) {
					e.indentSelection("subtract")
				},
				insertTab: function(e) {
					e.replaceSelection("\t", "end")
				},
				transposeChars: function(e) {
					var w = e.getCursor(),
						H = e.getLine(w.line);
					w.ch > 0 && w.ch < H.length - 1 && e.replaceRange(H.charAt(w.ch) + H.charAt(w.ch - 1), {
						line: w.line,
						ch: w.ch - 1
					}, {
						line: w.line,
						ch: w.ch + 1
					})
				},
				newlineAndIndent: function(e) {
					e.replaceSelection("\n", "end");
					e.indentLine(e.getCursor().line)
				},
				toggleOverwrite: function(e) {
					e.toggleOverwrite()
				}
			},
				Fa = o.keyMap = {};
			Fa.basic = {
				Left: "goCharLeft",
				Right: "goCharRight",
				Up: "goLineUp",
				Down: "goLineDown",
				End: "goLineEnd",
				Home: "goLineStartSmart",
				PageUp: "goPageUp",
				PageDown: "goPageDown",
				Delete: "delCharRight",
				Backspace: "delCharLeft",
				Tab: "indentMore",
				"Shift-Tab": "indentLess",
				Enter: "newlineAndIndent",
				Insert: "toggleOverwrite"
			};
			Fa.pcDefault = {
				"Ctrl-A": "selectAll",
				"Ctrl-D": "deleteLine",
				"Ctrl-Z": "undo",
				"Shift-Ctrl-Z": "redo",
				"Ctrl-Y": "redo",
				"Ctrl-Home": "goDocStart",
				"Alt-Up": "goDocStart",
				"Ctrl-End": "goDocEnd",
				"Ctrl-Down": "goDocEnd",
				"Ctrl-Left": "goWordLeft",
				"Ctrl-Right": "goWordRight",
				"Alt-Left": "goLineStart",
				"Alt-Right": "goLineEnd",
				"Ctrl-Backspace": "delWordLeft",
				"Ctrl-Delete": "delWordRight",
				"Ctrl-S": "save",
				"Ctrl-F": "find",
				"Ctrl-G": "findNext",
				"Shift-Ctrl-G": "findPrev",
				"Shift-Ctrl-F": "replace",
				"Shift-Ctrl-R": "replaceAll",
				fallthrough: "basic"
			};
			Fa.macDefault = {
				"Cmd-A": "selectAll",
				"Cmd-D": "deleteLine",
				"Cmd-Z": "undo",
				"Shift-Cmd-Z": "redo",
				"Cmd-Y": "redo",
				"Cmd-Up": "goDocStart",
				"Cmd-End": "goDocEnd",
				"Cmd-Down": "goDocEnd",
				"Alt-Left": "goWordLeft",
				"Alt-Right": "goWordRight",
				"Cmd-Left": "goLineStart",
				"Cmd-Right": "goLineEnd",
				"Alt-Backspace": "delWordLeft",
				"Ctrl-Alt-Backspace": "delWordRight",
				"Alt-Delete": "delWordRight",
				"Cmd-S": "save",
				"Cmd-F": "find",
				"Cmd-G": "findNext",
				"Shift-Cmd-G": "findPrev",
				"Cmd-Alt-F": "replace",
				"Shift-Cmd-Alt-F": "replaceAll",
				fallthrough: ["basic", "emacsy"]
			};
			Fa["default"] = mc ? Fa.macDefault : Fa.pcDefault;
			Fa.emacsy = {
				"Ctrl-F": "goCharRight",
				"Ctrl-B": "goCharLeft",
				"Ctrl-P": "goLineUp",
				"Ctrl-N": "goLineDown",
				"Alt-F": "goWordRight",
				"Alt-B": "goWordLeft",
				"Ctrl-A": "goLineStart",
				"Ctrl-E": "goLineEnd",
				"Ctrl-V": "goPageUp",
				"Shift-Ctrl-V": "goPageDown",
				"Ctrl-D": "delCharRight",
				"Ctrl-H": "delCharLeft",
				"Alt-D": "delWordRight",
				"Alt-Backspace": "delWordLeft",
				"Ctrl-K": "killLine",
				"Ctrl-T": "transposeChars"
			};
			o.fromTextArea = function(e, w) {
				function H() {
					e.value = qa.getValue()
				}
				w || (w = {});
				w.value = e.value;
				if (!w.tabindex && e.tabindex) w.tabindex = e.tabindex;
				if (e.form) {
					var F = Ca(e.form, "submit", H, true);
					if (typeof e.form.submit == "function") {
						var Y = e.form.submit;

						function fa() {
							H();
							e.form.submit = Y;
							e.form.submit();
							e.form.submit = fa
						}
						e.form.submit = fa
					}
				}
				e.style.display = "none";
				var qa = o(function(gb) {
					e.parentNode.insertBefore(gb, e.nextSibling)
				}, w);
				qa.save = H;
				qa.getTextArea = function() {
					return e
				};
				qa.toTextArea = function() {
					H();
					e.parentNode.removeChild(qa.getWrapperElement());
					e.style.display = "";
					if (e.form) {
						F();
						if (typeof e.form.submit == "function") e.form.submit = Y
					}
				};
				return qa
			};
			o.copyState = ra;
			o.startState = E;
			sa.prototype = {
				eol: function() {
					return this.pos >= this.string.length
				},
				sol: function() {
					return this.pos == 0
				},
				peek: function() {
					return this.string.charAt(this.pos)
				},
				next: function() {
					if (this.pos < this.string.length) return this.string.charAt(this.pos++)
				},
				eat: function(e) {
					var w = this.string.charAt(this.pos);
					if (typeof e == "string" ? w == e : w && (e.test ? e.test(w) : e(w))) {
						++this.pos;
						return w
					}
				},
				eatWhile: function(e) {
					for (var w = this.pos; this.eat(e););
					return this.pos > w
				},
				eatSpace: function() {
					for (var e = this.pos;
					/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
					return this.pos > e
				},
				skipToEnd: function() {
					this.pos = this.string.length
				},
				skipTo: function(e) {
					e = this.string.indexOf(e, this.pos);
					if (e > -1) {
						this.pos = e;
						return true
					}
				},
				backUp: function(e) {
					this.pos -= e
				},
				column: function() {
					return rb(this.string, this.start, this.tabSize)
				},
				indentation: function() {
					return rb(this.string, null, this.tabSize)
				},
				match: function(e, w, H) {
					if (typeof e == "string") {
						function F(Y) {
							return H ? Y.toLowerCase() : Y
						}
						if (F(this.string).indexOf(F(e), this.pos) == this.pos) {
							if (w !== false) this.pos += e.length;
							return true
						}
					} else {
						if ((e = this.string.slice(this.pos).match(e)) && w !== false) this.pos += e[0].length;
						return e
					}
				},
				current: function() {
					return this.string.slice(this.start, this.pos)
				}
			};
			o.StringStream = sa;
			pa.prototype = {
				attach: function(e) {
					this.set.push(e)
				},
				detach: function(e) {
					e = Xb(this.set, e);
					e > -1 && this.set.splice(e, 1)
				},
				split: function(e, w) {
					if (this.to <= e && this.to != null) return null;
					return new pa(this.from < e || this.from == null ? null : this.from - e + w, this.to == null ? null : this.to - e + w, this.style, this.set)
				},
				dup: function() {
					return new pa(null, null, this.style, this.set)
				},
				clipTo: function(e, w, H, F, Y) {
					if (e && F > this.from && (F < this.to || this.to == null)) this.from = null;
					else if (this.from != null && this.from >= w) this.from = Math.max(F, this.from) + Y;
					if (H && (w < this.to || this.to == null) && (w > this.from || this.from == null)) this.to = null;
					else if (this.to != null && this.to > w) this.to = F < this.to ? this.to + Y : w
				},
				isDead: function() {
					return this.from != null && this.to != null && this.from >= this.to
				},
				sameSet: function(e) {
					return this.set == e.set
				}
			};
			ba.prototype = {
				attach: function(e) {
					this.line = e
				},
				detach: function(e) {
					if (this.line == e) this.line = null
				},
				split: function(e, w) {
					if (e < this.from) {
						this.from = this.to = this.from - e + w;
						return this
					}
				},
				isDead: function() {
					return this.from > this.to
				},
				clipTo: function(e, w, H, F, Y) {
					if ((e || w < this.from) && (H || F > this.to)) {
						this.from = 0;
						this.to = -1
					} else if (this.from > w) this.from = this.to = Math.max(F, this.from) + Y
				},
				sameSet: function() {
					return false
				},
				find: function() {
					if (!this.line || !this.line.parent) return null;
					return {
						line: A(this.line),
						ch: this.from
					}
				},
				clear: function() {
					if (this.line) {
						var e = Xb(this.line.marked, this);
						e != -1 && this.line.marked.splice(e, 1);
						this.line = null
					}
				}
			};
			j.inheritMarks = function(e, w) {
				e = new j(e);
				if (w = w && w.marked) for (var H = 0; H < w.length; ++H) if (w[H].to == null && w[H].style) {
					var F = e.marked || (e.marked = []),
						Y = w[H].dup();
					F.push(Y);
					Y.attach(e)
				}
				return e
			};
			j.prototype = {
				replace: function(e, w, H) {
					var F = [],
						Y = this.marked,
						fa = w == null ? this.text.length : w;
					m(0, e, this.styles, F);
					H && F.push(H, null);
					m(fa, this.text.length, this.styles, F);
					this.styles = F;
					this.text = this.text.slice(0, e) + H + this.text.slice(fa);
					this.stateAfter = null;
					if (Y) {
						H = H.length - (fa - e);
						for (F = 0; F < Y.length; ++F) {
							var qa = Y[F];
							qa.clipTo(e == null, e || 0, w == null, fa, H);
							if (qa.isDead()) {
								qa.detach(this);
								Y.splice(F--, 1)
							}
						}
					}
				},
				split: function(e, w) {
					var H = [w, null],
						F = this.marked;
					m(e, this.text.length, this.styles, H);
					H = new j(w + this.text.slice(e), H);
					if (F) for (var Y = 0; Y < F.length; ++Y) {
						var fa = F[Y],
							qa = fa.split(e, w.length);
						if (qa) {
							if (!H.marked) H.marked = [];
							H.marked.push(qa);
							qa.attach(H);
							qa == fa && F.splice(Y--, 1)
						}
					}
					return H
				},
				append: function(e) {
					var w = this.text.length,
						H = e.marked,
						F = this.marked;
					this.text += e.text;
					m(0, e.text.length, e.styles, this.styles);
					if (F) for (e = 0; e < F.length; ++e) if (F[e].to == null) F[e].to = w;
					if (H && H.length) {
						if (!F) this.marked = F = [];
						e = 0;
						a: for (; e < H.length; ++e) {
							var Y = H[e];
							if (!Y.from) for (var fa = 0; fa < F.length; ++fa) {
								var qa = F[fa];
								if (qa.to == w && qa.sameSet(Y)) {
									qa.to = Y.to == null ? null : Y.to + w;
									if (qa.isDead()) {
										qa.detach(this);
										H.splice(e--, 1)
									}
									continue a
								}
							}
							F.push(Y);
							Y.attach(this);
							Y.from += w;
							if (Y.to != null) Y.to += w
						}
					}
				},
				fixMarkEnds: function(e) {
					var w = this.marked;
					e = e.marked;
					if (w) for (var H = 0; H < w.length; ++H) {
						var F = w[H],
							Y = F.to == null;
						if (Y && e) for (var fa = 0; fa < e.length; ++fa) if (e[fa].sameSet(F)) {
							Y = false;
							break
						}
						if (Y) F.to = this.text.length
					}
				},
				fixMarkStarts: function() {
					var e = this.marked;
					if (e) for (var w = 0; w < e.length; ++w) if (e[w].from == null) e[w].from = 0
				},
				addMark: function(e) {
					e.attach(this);
					if (this.marked == null) this.marked = [];
					this.marked.push(e);
					this.marked.sort(function(w, H) {
						return (w.from || 0) - (H.from || 0)
					})
				},
				highlight: function(e, w, H) {
					H = new sa(this.text, H);
					var F = this.styles,
						Y = 0,
						fa = false,
						qa = F[0],
						gb;
					for (this.text == "" && e.blankLine && e.blankLine(w); !H.eol();) {
						var a = e.token(H, w),
							b = this.text.slice(H.start, H.pos);
						H.start = H.pos;
						if (Y && F[Y - 1] == a) F[Y - 2] += b;
						else if (b) {
							if (!fa && (F[Y + 1] != a || Y && F[Y - 2] != gb)) fa = true;
							F[Y++] = b;
							F[Y++] = a;
							gb = qa;
							qa = F[Y]
						}
						if (H.pos > 5E3) {
							F[Y++] = this.text.slice(H.pos);
							F[Y++] = null;
							break
						}
					}
					if (F.length != Y) {
						F.length = Y;
						fa = true
					}
					if (Y && F[Y - 2] != gb) fa = true;
					return fa || (F.length < 5 && this.text.length < 10 ? null : false)
				},
				getTokenAt: function(e, w, H) {
					for (var F = new sa(this.text); F.pos < H && !F.eol();) {
						F.start = F.pos;
						var Y = e.token(F, w)
					}
					return {
						start: F.start,
						end: F.pos,
						string: F.current(),
						className: Y || null,
						state: w
					}
				},
				indentation: function(e) {
					return rb(this.text, null, e)
				},
				getHTML: function(e, w) {
					function H(ca, Pa) {
						if (ca) {
							if (fa && kb && ca.charAt(0) == " ") ca = "\u00a0" + ca.slice(1);
							fa = false;
							if (ca.indexOf("\t") == -1) {
								qa += ca.length;
								var Qa = wb(ca)
							} else {
								Qa = "";
								for (var bb = 0;;) {
									var fb = ca.indexOf("\t", bb);
									if (fb == -1) {
										Qa += wb(ca.slice(bb));
										qa += ca.length - bb;
										break
									} else {
										qa += fb - bb;
										var Rb = e(qa);
										Qa += wb(ca.slice(bb, fb)) + Rb.html;
										qa += Rb.width;
										bb = fb + 1
									}
								}
							}
							Pa ? Y.push('<span class="', Pa, '">', Qa, "</span>") : Y.push(Qa)
						}
					}
					function F(ca) {
						if (!ca) return null;
						return "cm-" + ca.replace(/ +/g, " cm-")
					}
					var Y = [],
						fa = true,
						qa = 0,
						gb = this.styles,
						a = this.text,
						b = this.marked,
						d = a.length;
					if (w != null) d = Math.min(w, d);
					if (!a && w == null) H(" ");
					else if (!b || !b.length) for (a = w = 0; a < d; w += 2) {
						var f = gb[w],
							l = gb[w + 1],
							p = f.length;
						if (a + p > d) f = f.slice(0, d - a);
						a += p;
						H(f, F(l))
					} else {
						var i = 0;
						w = 0;
						a = "";
						var B = b[0].from || 0,
							C = [],
							t = 0;

						function da() {
							for (var ca; t < b.length && ((ca = b[t]).from == i || ca.from == null);) {
								ca.style != null && C.push(ca);
								++t
							}
							B = t < b.length ? b[t].from : Infinity;
							for (ca = 0; ca < C.length; ++ca) {
								var Pa = C[ca].to || Infinity;
								if (Pa == i) C.splice(ca--, 1);
								else B = Math.min(Pa, B)
							}
						}
						for (; i < d;) {
							B == i && da();
							for (f = Math.min(d, B);;) {
								if (a) {
									p = i + a.length;
									for (var W = l, ga = 0; ga < C.length; ++ga) W = (W ? W + " " : "") + C[ga].style;
									H(p > f ? a.slice(0, f - i) : a, W);
									if (p >= f) {
										a = a.slice(f - i);
										i = f;
										break
									}
									i = p
								}
								a = gb[w++];
								l = F(gb[w++])
							}
						}
					}
					return Y.join("")
				},
				cleanUp: function() {
					this.parent = null;
					if (this.marked) for (var e = 0, w = this.marked.length; e < w; ++e) this.marked[e].detach(this)
				}
			};
			s.prototype = {
				chunkSize: function() {
					return this.lines.length
				},
				remove: function(e, w, H) {
					for (var F = e, Y = e + w; F < Y; ++F) {
						var fa = this.lines[F];
						this.height -= fa.height;
						fa.cleanUp();
						if (fa.handlers) for (var qa = 0; qa < fa.handlers.length; ++qa) H.push(fa.handlers[qa])
					}
					this.lines.splice(e, w)
				},
				collapse: function(e) {
					e.splice.apply(e, [e.length, 0].concat(this.lines))
				},
				insertHeight: function(e, w, H) {
					this.height += H;
					this.lines.splice.apply(this.lines, [e, 0].concat(w));
					e = 0;
					for (H = w.length; e < H; ++e) w[e].parent = this
				},
				iterN: function(e, w, H) {
					for (w = e + w; e < w; ++e) if (H(this.lines[e])) return true
				}
			};
			n.prototype = {
				chunkSize: function() {
					return this.size
				},
				remove: function(e, w, H) {
					this.size -= w;
					for (var F = 0; F < this.children.length; ++F) {
						var Y = this.children[F],
							fa = Y.chunkSize();
						if (e < fa) {
							var qa = Math.min(w, fa - e),
								gb = Y.height;
							Y.remove(e, qa, H);
							this.height -= gb - Y.height;
							if (fa == qa) {
								this.children.splice(F--, 1);
								Y.parent = null
							}
							if ((w -= qa) == 0) break;
							e = 0
						} else e -= fa
					}
					if (this.size - w < 25) {
						e = [];
						this.collapse(e);
						this.children = [new s(e)];
						this.children[0].parent = this
					}
				},
				collapse: function(e) {
					for (var w = 0, H = this.children.length; w < H; ++w) this.children[w].collapse(e)
				},
				insert: function(e, w) {
					for (var H = 0, F = 0, Y = w.length; F < Y; ++F) H += w[F].height;
					this.insertHeight(e, w, H)
				},
				insertHeight: function(e, w, H) {
					this.size += w.length;
					this.height += H;
					for (var F = 0, Y = this.children.length; F < Y; ++F) {
						var fa = this.children[F],
							qa = fa.chunkSize();
						if (e <= qa) {
							fa.insertHeight(e, w, H);
							if (fa.lines && fa.lines.length > 50) {
								for (; fa.lines.length > 50;) {
									e = fa.lines.splice(fa.lines.length - 25, 25);
									e = new s(e);
									fa.height -= e.height;
									this.children.splice(F + 1, 0, e);
									e.parent = this
								}
								this.maybeSpill()
							}
							break
						}
						e -= qa
					}
				},
				maybeSpill: function() {
					if (!(this.children.length <= 10)) {
						var e = this;
						do {
							var w = e.children.splice(e.children.length - 5, 5);
							w = new n(w);
							if (e.parent) {
								e.size -= w.size;
								e.height -= w.height;
								var H = Xb(e.parent.children, e);
								e.parent.children.splice(H + 1, 0, w)
							} else {
								H = new n(e.children);
								H.parent = e;
								e.children = [H, w];
								e = H
							}
							w.parent = e.parent
						} while (e.children.length > 10);
						e.parent.maybeSpill()
					}
				},
				iter: function(e, w, H) {
					this.iterN(e, w - e, H)
				},
				iterN: function(e, w, H) {
					for (var F = 0, Y = this.children.length; F < Y; ++F) {
						var fa = this.children[F],
							qa = fa.chunkSize();
						if (e < qa) {
							qa = Math.min(w, qa - e);
							if (fa.iterN(e, qa, H)) return true;
							if ((w -= qa) == 0) break;
							e = 0
						} else e -= qa
					}
				}
			};
			P.prototype = {
				addChange: function(e, w, H) {
					this.undone.length = 0;
					var F = +new Date,
						Y = this.done[this.done.length - 1],
						fa = Y && Y[Y.length - 1];
					if (F - this.time > 400 || !fa) this.done.push([{
						start: e,
						added: w,
						old: H
					}]);
					else if (fa.start > e + H.length || fa.start + fa.added < e - fa.added + fa.old.length) Y.push({
						start: e,
						added: w,
						old: H
					});
					else {
						Y = 0;
						if (e < fa.start) {
							for (Y = fa.start - e - 1; Y >= 0; --Y) fa.old.unshift(H[Y]);
							Y = Math.min(0, w - H.length);
							fa.added += fa.start - e + Y;
							fa.start = e
						} else if (fa.start < e) {
							Y = e - fa.start;
							w += Y
						}
						Y = fa.added - Y;
						for (e = H.length; Y < e; ++Y) fa.old.push(H[Y]);
						if (fa.added < w) fa.added = w
					}
					this.time = F
				}
			};
			o.e_stop = va;
			o.e_preventDefault = ya;
			o.e_stopPropagation = Ra;
			o.connect = Ca;
			Ma.prototype = {
				set: function(e, w) {
					clearTimeout(this.id);
					this.id = setTimeout(w, e)
				}
			};
			var Ka = o.Pass = {
				toString: function() {
					return "CodeMirror.Pass"
				}
			},
				Wa = /gecko\/\d{7}/i.test(navigator.userAgent),
				kb = /MSIE \d/.test(navigator.userAgent),
				tb = /MSIE [1-8]\b/.test(navigator.userAgent),
				Yb = /WebKit\//.test(navigator.userAgent),
				rd = /Chrome\//.test(navigator.userAgent),
				Lc = function() {
					if (tb) return false;
					var e = S.createElement("div");
					return "draggable" in e || "dragDrop" in e
				}(),
				Zc = "\n";
			(function() {
				var e = S.createElement("textarea");
				e.value = "foo\nbar";
				if (e.value.indexOf("\r") > -1) Zc = "\r\n"
			})();
			if (S.documentElement.getBoundingClientRect != null) Eb = function(e, w) {
				try {
					var H = e.getBoundingClientRect();
					H = {
						top: H.top,
						left: H.left
					}
				} catch (F) {
					H = {
						top: 0,
						left: 0
					}
				}
				if (!w) if (R.pageYOffset == null) {
					e = S.documentElement || S.body.parentNode;
					if (e.scrollTop == null) e = S.body;
					H.top += e.scrollTop;
					H.left += e.scrollLeft
				} else {
					H.top += R.pageYOffset;
					H.left += R.pageXOffset
				}
				return H
			};
			var sc = S.createElement("pre");
			if (wb("a") == "\na") wb = function(e) {
				sc.textContent = e;
				return sc.innerHTML.slice(1)
			};
			else if (wb("\t") != "\t") wb = function(e) {
				sc.innerHTML = "";
				sc.appendChild(S.createTextNode(e));
				return sc.innerHTML
			};
			o.htmlEscape = wb;
			var Zb = "\n\nb".split(/\n/).length != 3 ?
			function(e) {
				for (var w = 0, H, F = [];
				(H = e.indexOf("\n", w)) > -1;) {
					F.push(e.slice(w, e.charAt(H - 1) == "\r" ? H - 1 : H));
					w = H + 1
				}
				F.push(e.slice(w));
				return F
			} : function(e) {
				return e.split(/\r?\n/)
			};
			o.splitLines = Zb;
			var Wc = R.getSelection ?
			function(e) {
				try {
					return e.selectionStart != e.selectionEnd
				} catch (w) {
					return false
				}
			} : function(e) {
				try {
					var w = e.ownerDocument.selection.createRange()
				} catch (H) {}
				if (!w || w.parentElement() != e) return false;
				return w.compareEndPoints("StartToEnd", w) != 0
			};
			o.defineMode("null", function() {
				return {
					token: function(e) {
						e.skipToEnd()
					}
				}
			});
			o.defineMIME("text/plain", "null");
			var Gb = {
				3: "Enter",
				8: "Backspace",
				9: "Tab",
				13: "Enter",
				16: "Shift",
				17: "Ctrl",
				18: "Alt",
				19: "Pause",
				20: "CapsLock",
				27: "Esc",
				32: "Space",
				33: "PageUp",
				34: "PageDown",
				35: "End",
				36: "Home",
				37: "Left",
				38: "Up",
				39: "Right",
				40: "Down",
				44: "PrintScrn",
				45: "Insert",
				46: "Delete",
				59: ";",
				91: "Mod",
				92: "Mod",
				93: "Mod",
				186: ";",
				187: "=",
				188: ",",
				189: "-",
				190: ".",
				191: "/",
				192: "`",
				219: "[",
				220: "\\",
				221: "]",
				222: "'",
				63276: "PageUp",
				63277: "PageDown",
				63275: "End",
				63273: "Home",
				63234: "Left",
				63232: "Up",
				63235: "Right",
				63233: "Down",
				63302: "Insert",
				63272: "Delete"
			};
			o.keyNames = Gb;
			(function() {
				for (var e = 0; e < 10; e++) Gb[e + 48] = String(e);
				for (e = 65; e <= 90; e++) Gb[e] = String.fromCharCode(e);
				for (e = 1; e <= 12; e++) Gb[e + 111] = Gb[e + 63235] = "F" + e
			})();
			return o
		}();
	sb.defineMode("xml", function(o, u) {
		function M(Q, ka) {
			function Ba(Ma) {
				ka.tokenize = Ma;
				return Ma(Q, ka)
			}
			var Ca = Q.next();
			if (Ca == "<") if (Q.eat("!")) if (Q.eat("[")) return Q.match("CDATA[") ? Ba(E("atom", "]]\>")) : null;
			else if (Q.match("--")) return Ba(E("comment", "--\>"));
			else if (Q.match("DOCTYPE", true, true)) {
				Q.eatWhile(/[\w\._\-]/);
				return Ba(E("meta", ">"))
			} else return null;
			else if (Q.eat("?")) {
				Q.eatWhile(/[\w\._\-]/);
				ka.tokenize = E("meta", "?>");
				return "meta"
			} else {
				ya = Q.eat("/") ? "closeTag" : "openTag";
				Q.eatSpace();
				for (ta = ""; Ca = Q.eat(/[^\s\u00a0=<>\"\'\/?]/);) ta += Ca;
				ka.tokenize = X;
				return "tag"
			} else if (Ca == "&") {
				Q.eatWhile(/[^;]/);
				Q.eat(";");
				return "atom"
			} else {
				Q.eatWhile(/[^&<]/);
				return null
			}
		}
		function X(Q, ka) {
			var Ba = Q.next();
			if (Ba == ">" || Ba == "/" && Q.eat(">")) {
				ka.tokenize = M;
				ya = Ba == ">" ? "endTag" : "selfcloseTag";
				return "tag"
			} else if (Ba == "=") {
				ya = "equals";
				return null
			} else if (/[\'\"]/.test(Ba)) {
				ka.tokenize = ra(Ba);
				return ka.tokenize(Q, ka)
			} else {
				Q.eatWhile(/[^\s\u00a0=<>\"\'\/?]/);
				return "word"
			}
		}
		function ra(Q) {
			return function(ka, Ba) {
				for (; !ka.eol();) if (ka.next() == Q) {
					Ba.tokenize = X;
					break
				}
				return "string"
			}
		}
		function E(Q, ka) {
			return function(Ba, Ca) {
				for (; !Ba.eol();) {
					if (Ba.match(ka)) {
						Ca.tokenize = M;
						break
					}
					Ba.next()
				}
				return Q
			}
		}
		function sa() {
			for (var Q = arguments.length - 1; Q >= 0; Q--) Ra.cc.push(arguments[Q])
		}

		function pa() {
			sa.apply(null, arguments);
			return true
		}
		function ba(Q, ka) {
			var Ba = P.doNotIndent.hasOwnProperty(Q) || Ra.context && Ra.context.noIndent;
			Ra.context = {
				prev: Ra.context,
				tagName: Q,
				indent: Ra.indented,
				startOfLine: ka,
				noIndent: Ba
			}
		}
		function j() {
			if (Ra.context) Ra.context = Ra.context.prev
		}
		function m(Q) {
			if (Q == "openTag") {
				Ra.tagName = ta;
				return pa(y, s(Ra.startOfLine))
			} else if (Q == "closeTag") {
				Q = false;
				if (Q = Ra.context ? Ra.context.tagName != ta : true) va = "error";
				return pa(n(Q))
			} else {
				if (Q == "string") {
					if (!Ra.context || Ra.context.name != "!cdata") ba("!cdata");
					Ra.tokenize == M && j()
				}
				return pa()
			}
		}
		function s(Q) {
			return function(ka) {
				if (ka == "selfcloseTag" || ka == "endTag" && P.autoSelfClosers.hasOwnProperty(Ra.tagName.toLowerCase())) return pa();
				if (ka == "endTag") {
					ba(Ra.tagName, Q);
					return pa()
				}
				return pa()
			}
		}
		function n(Q) {
			return function(ka) {
				if (Q) va = "error";
				if (ka == "endTag") {
					j();
					return pa()
				}
				va = "error";
				return pa(arguments.callee)
			}
		}
		function y(Q) {
			if (Q == "word") {
				va = "attribute";
				return pa(y)
			}
			if (Q == "equals") return pa(A, y);
			if (Q == "string") {
				va = "error";
				return pa(y)
			}
			return sa()
		}

		function A(Q) {
			if (Q == "word" && P.allowUnquoted) {
				va = "string";
				return pa()
			}
			if (Q == "string") return pa(G);
			return sa()
		}
		function G(Q) {
			return Q == "string" ? pa(G) : sa()
		}
		var L = o.indentUnit,
			P = u.htmlMode ? {
				autoSelfClosers: {
					br: true,
					img: true,
					hr: true,
					link: true,
					input: true,
					meta: true,
					col: true,
					frame: true,
					base: true,
					area: true
				},
				doNotIndent: {
					pre: true,
					"!cdata": true
				},
				allowUnquoted: true
			} : {
				autoSelfClosers: {},
				doNotIndent: {
					"!cdata": true
				},
				allowUnquoted: false
			},
			aa = u.alignCDATA,
			ta, ya, Ra, va;
		return {
			startState: function() {
				return {
					tokenize: M,
					cc: [],
					indented: 0,
					startOfLine: true,
					tagName: null,
					context: null
				}
			},
			token: function(Q, ka) {
				if (Q.sol()) {
					ka.startOfLine = true;
					ka.indented = Q.indentation()
				}
				if (Q.eatSpace()) return null;
				va = ya = ta = null;
				Q = ka.tokenize(Q, ka);
				ka.type = ya;
				if ((Q || ya) && Q != "comment") for (Ra = ka;;) if ((ka.cc.pop() || m)(ya || Q)) break;
				ka.startOfLine = false;
				return va || Q
			},
			indent: function(Q, ka) {
				if ((Q = Q.context) && Q.noIndent) return 0;
				if (aa && /<!\[CDATA\[/.test(ka)) return 0;
				if (Q && /^<\//.test(ka)) Q = Q.prev;
				for (; Q && !Q.startOfLine;) Q = Q.prev;
				return Q ? Q.indent + L : 0
			},
			compareStates: function(Q, ka) {
				if (Q.indented != ka.indented || Q.tokenize != ka.tokenize) return false;
				Q = Q.context;
				for (ka = ka.context;; Q = Q.prev, ka = ka.prev) {
					if (!Q || !ka) return Q == ka;
					if (Q.tagName != ka.tagName) return false
				}
			},
			electricChars: "/"
		}
	});
	sb.defineMIME("application/xml", "xml");
	sb.defineMIME("text/html", {
		name: "xml",
		htmlMode: true
	});
	sb.defineMode("css", function(o) {
		function u(ba, j) {
			pa = j;
			return ba
		}
		function M(ba, j) {
			var m = ba.next();
			if (m == "@") {
				ba.eatWhile(/[\w\\\-]/);
				return u("meta", ba.current())
			} else if (m == "/" && ba.eat("*")) {
				j.tokenize = X;
				return X(ba, j)
			} else if (m == "<" && ba.eat("!")) {
				j.tokenize = ra;
				return ra(ba, j)
			} else if (m == "=") u(null, "compare");
			else if ((m == "~" || m == "|") && ba.eat("=")) return u(null, "compare");
			else if (m == '"' || m == "'") {
				j.tokenize = E(m);
				return j.tokenize(ba, j)
			} else if (m == "#") {
				ba.eatWhile(/[\w\\\-]/);
				return u("atom", "hash")
			} else if (m == "!") {
				ba.match(/^\s*\w*/);
				return u("keyword", "important")
			} else if (/\d/.test(m)) {
				ba.eatWhile(/[\w.%]/);
				return u("number", "unit")
			} else if (/[,.+>*\/]/.test(m)) return u(null, "select-op");
			else if (/[;{}:\[\]]/.test(m)) return u(null, m);
			else {
				ba.eatWhile(/[\w\\\-]/);
				return u("variable", "variable")
			}
		}
		function X(ba, j) {
			for (var m = false, s;
			(s = ba.next()) != null;) {
				if (m && s == "/") {
					j.tokenize = M;
					break
				}
				m = s == "*"
			}
			return u("comment", "comment")
		}
		function ra(ba, j) {
			for (var m = 0, s;
			(s = ba.next()) != null;) {
				if (m >= 2 && s == ">") {
					j.tokenize = M;
					break
				}
				m = s == "-" ? m + 1 : 0
			}
			return u("comment", "comment")
		}
		function E(ba) {
			return function(j, m) {
				for (var s = false, n;
				(n = j.next()) != null;) {
					if (n == ba && !s) break;
					s = !s && n == "\\"
				}
				if (!s) m.tokenize = M;
				return u("string", "string")
			}
		}
		var sa = o.indentUnit,
			pa;
		return {
			startState: function(ba) {
				return {
					tokenize: M,
					baseIndent: ba || 0,
					stack: []
				}
			},
			token: function(ba, j) {
				if (ba.eatSpace()) return null;
				ba = j.tokenize(ba, j);
				var m = j.stack[j.stack.length - 1];
				if (pa == "hash" && m == "rule") ba = "atom";
				else if (ba == "variable") if (m == "rule") ba = "number";
				else if (!m || m == "@media{") ba = "tag";
				m == "rule" && /^[\{\};]$/.test(pa) && j.stack.pop();
				if (pa == "{") if (m == "@media") j.stack[j.stack.length - 1] = "@media{";
				else j.stack.push("{");
				else if (pa == "}") j.stack.pop();
				else if (pa == "@media") j.stack.push("@media");
				else m == "{" && pa != "comment" && j.stack.push("rule");
				return ba
			},
			indent: function(ba, j) {
				var m = ba.stack.length;
				if (/^\}/.test(j)) m -= ba.stack[ba.stack.length - 1] == "rule" ? 2 : 1;
				return ba.baseIndent + m * sa
			},
			electricChars: "}"
		}
	});
	sb.defineMIME("text/css", "css");
	sb.defineMode("javascript", function(o, u) {
		function M(N, Fa, Ka) {
			Fa.tokenize = Ka;
			return Ka(N, Fa)
		}
		function X(N, Fa) {
			for (var Ka = false, Wa;
			(Wa = N.next()) != null;) {
				if (Wa == Fa && !Ka) return false;
				Ka = !Ka && Wa == "\\"
			}
			return Ka
		}
		function ra(N, Fa, Ka) {
			Ob = N;
			mc = Ka;
			return Fa
		}
		function E(N, Fa) {
			var Ka = N.next();
			if (Ka == '"' || Ka == "'") return M(N, Fa, sa(Ka));
			else if (/[\[\]{}\(\),;\:\.]/.test(Ka)) return ra(Ka);
			else if (Ka == "0" && N.eat(/x/i)) {
				N.eatWhile(/[\da-f]/i);
				return ra("number", "number")
			} else if (/\d/.test(Ka)) {
				N.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
				return ra("number", "number")
			} else if (Ka == "/") if (N.eat("*")) return M(N, Fa, pa);
			else if (N.eat("/")) {
				N.skipToEnd();
				return ra("comment", "comment")
			} else if (Fa.reAllowed) {
				X(N, "/");
				N.eatWhile(/[gimy]/);
				return ra("regexp", "string-2")
			} else {
				N.eatWhile(Ub);
				return ra("operator", null, N.current())
			} else if (Ka == "#") {
				N.skipToEnd();
				return ra("error", "error")
			} else if (Ub.test(Ka)) {
				N.eatWhile(Ub);
				return ra("operator", null, N.current())
			} else {
				N.eatWhile(/[\w\$_]/);
				N = N.current();
				return (Ka = Xb.propertyIsEnumerable(N) && Xb[N]) && Fa.kwAllowed ? ra(Ka.type, Ka.style, N) : ra("variable", "variable", N)
			}
		}
		function sa(N) {
			return function(Fa, Ka) {
				if (!X(Fa, N)) Ka.tokenize = E;
				return ra("string", "string")
			}
		}
		function pa(N, Fa) {
			for (var Ka = false, Wa; Wa = N.next();) {
				if (Wa == "/" && Ka) {
					Fa.tokenize = E;
					break
				}
				Ka = Wa == "*"
			}
			return ra("comment", "comment")
		}
		function ba(N, Fa, Ka, Wa, kb, tb) {
			this.indented = N;
			this.column = Fa;
			this.type = Ka;
			this.prev = kb;
			this.info = tb;
			if (Wa != null) this.align = Wa
		}
		function j(N, Fa) {
			for (N = N.localVars; N; N = N.next) if (N.name == Fa) return true
		}
		function m(N, Fa, Ka, Wa, kb) {
			var tb = N.cc;
			hb.state = N;
			hb.stream = kb;
			hb.marked = null;
			hb.cc = tb;
			if (!N.lexical.hasOwnProperty("align")) N.lexical.align = true;
			for (;;) if ((tb.length ? tb.pop() : Kc ? ya : ta)(Ka, Wa)) {
				for (; tb.length && tb[tb.length - 1].lex;) tb.pop()();
				if (hb.marked) return hb.marked;
				if (Ka == "variable" && j(N, Wa)) return "variable-2";
				return Fa
			}
		}
		function s() {
			for (var N = arguments.length - 1; N >= 0; N--) hb.cc.push(arguments[N])
		}
		function n() {
			s.apply(null, arguments);
			return true
		}
		function y(N) {
			var Fa = hb.state;
			if (Fa.context) {
				hb.marked = "def";
				for (var Ka = Fa.localVars; Ka; Ka = Ka.next) if (Ka.name == N) return;
				Fa.localVars = {
					name: N,
					next: Fa.localVars
				}
			}
		}
		function A() {
			if (!hb.state.context) hb.state.localVars = Ib;
			hb.state.context = {
				prev: hb.state.context,
				vars: hb.state.localVars
			}
		}
		function G() {
			hb.state.localVars = hb.state.context.vars;
			hb.state.context = hb.state.context.prev
		}
		function L(N, Fa) {
			var Ka = function() {
					var Wa = hb.state;
					Wa.lexical = new ba(Wa.indented, hb.stream.column(), N, null, Wa.lexical, Fa)
				};
			Ka.lex = true;
			return Ka
		}
		function P() {
			var N = hb.state;
			if (N.lexical.prev) {
				if (N.lexical.type == ")") N.indented = N.lexical.indented;
				N.lexical = N.lexical.prev
			}
		}
		function aa(N) {
			return function(Fa) {
				return Fa == N ? n() : N == ";" ? s() : n(arguments.callee)
			}
		}
		function ta(N) {
			if (N == "var") return n(L("vardef"), rb, aa(";"), P);
			if (N == "keyword a") return n(L("form"), ya, ta, P);
			if (N == "keyword b") return n(L("form"), ta, P);
			if (N == "{") return n(L("}"), Ma, P);
			if (N == ";") return n();
			if (N == "function") return n(Db);
			if (N == "for") return n(L("form"), aa("("), L(")"), Eb, aa(")"), P, ta, P);
			if (N == "variable") return n(L("stat"), Q);
			if (N == "switch") return n(L("form"), ya, L("}", "switch"), aa("{"), Ma, P, P);
			if (N == "case") return n(ya, aa(":"));
			if (N == "default") return n(aa(":"));
			if (N == "catch") return n(L("form"), A, aa("("), hc, aa(")"), ta, P, G);
			return s(L("stat"), ya, aa(";"), P)
		}
		function ya(N) {
			if (dc.hasOwnProperty(N)) return n(va);
			if (N == "function") return n(Db);
			if (N == "keyword c") return n(Ra);
			if (N == "(") return n(L(")"), Ra, aa(")"), P, va);
			if (N == "operator") return n(ya);
			if (N == "[") return n(L("]"), Ca(ya, "]"), P, va);
			if (N == "{") return n(L("}"), Ca(Ba, "}"), P, va);
			return n()
		}
		function Ra(N) {
			if (N.match(/[;\}\)\],]/)) return s();
			return s(ya)
		}
		function va(N, Fa) {
			if (N == "operator" && /\+\+|--/.test(Fa)) return n(va);
			if (N == "operator") return n(ya);
			if (N != ";") {
				if (N == "(") return n(L(")"), Ca(ya, ")"), P, va);
				if (N == ".") return n(ka, va);
				if (N == "[") return n(L("]"), ya, aa("]"), P, va)
			}
		}
		function Q(N) {
			if (N == ":") return n(P, ta);
			return s(va, aa(";"), P)
		}
		function ka(N) {
			if (N == "variable") {
				hb.marked = "property";
				return n()
			}
		}
		function Ba(N) {
			if (N == "variable") hb.marked = "property";
			if (dc.hasOwnProperty(N)) return n(aa(":"), ya)
		}
		function Ca(N, Fa) {
			function Ka(Wa) {
				if (Wa == ",") return n(N, Ka);
				if (Wa == Fa) return n();
				return n(aa(Fa))
			}
			return function(Wa) {
				return Wa == Fa ? n() : s(N, Ka)
			}
		}
		function Ma(N) {
			if (N == "}") return n();
			return s(ta, Ma)
		}
		function rb(N, Fa) {
			if (N == "variable") {
				y(Fa);
				return n(eb)
			}
			return n()
		}

		function eb(N, Fa) {
			if (Fa == "=") return n(ya, eb);
			if (N == ",") return n(rb)
		}
		function Eb(N) {
			if (N == "var") return n(rb, Nb);
			if (N == ";") return s(Nb);
			if (N == "variable") return n(Cb);
			return s(Nb)
		}
		function Cb(N, Fa) {
			if (Fa == "in") return n(ya);
			return n(va, Nb)
		}
		function Nb(N, Fa) {
			if (N == ";") return n(lb);
			if (Fa == "in") return n(ya);
			return n(ya, aa(";"), lb)
		}
		function lb(N) {
			N != ")" && n(ya)
		}
		function Db(N, Fa) {
			if (N == "variable") {
				y(Fa);
				return n(Db)
			}
			if (N == "(") return n(L(")"), A, Ca(hc, ")"), P, ta, G)
		}
		function hc(N, Fa) {
			if (N == "variable") {
				y(Fa);
				return n()
			}
		}
		var wb = o.indentUnit,
			Kc = u.json,
			Xb = function() {
				function N(Yb) {
					return {
						type: Yb,
						style: "keyword"
					}
				}
				var Fa = N("keyword a"),
					Ka = N("keyword b"),
					Wa = N("keyword c"),
					kb = N("operator"),
					tb = {
						type: "atom",
						style: "atom"
					};
				return {
					"if": Fa,
					"while": Fa,
					"with": Fa,
					"else": Ka,
					"do": Ka,
					"try": Ka,
					"finally": Ka,
					"return": Wa,
					"break": Wa,
					"continue": Wa,
					"new": Wa,
					"delete": Wa,
					"throw": Wa,
					"var": N("var"),
					"const": N("var"),
					let: N("var"),
					"function": N("function"),
					"catch": N("catch"),
					"for": N("for"),
					"switch": N("switch"),
					"case": N("case"),
					"default": N("default"),
					"in": kb,
					"typeof": kb,
					"instanceof": kb,
					"true": tb,
					"false": tb,
					"null": tb,
					undefined: tb,
					NaN: tb,
					Infinity: tb
				}
			}(),
			Ub = /[+\-*&%=<>!?|]/,
			Ob, mc, dc = {
				atom: true,
				number: true,
				variable: true,
				string: true,
				regexp: true
			},
			hb = {
				state: null,
				column: null,
				marked: null,
				cc: null
			},
			Ib = {
				name: "this",
				next: {
					name: "arguments"
				}
			};
		P.lex = true;
		return {
			startState: function(N) {
				return {
					tokenize: E,
					reAllowed: true,
					kwAllowed: true,
					cc: [],
					lexical: new ba((N || 0) - wb, 0, "block", false),
					localVars: null,
					context: null,
					indented: 0
				}
			},
			token: function(N, Fa) {
				if (N.sol()) {
					if (!Fa.lexical.hasOwnProperty("align")) Fa.lexical.align = false;
					Fa.indented = N.indentation()
				}
				if (N.eatSpace()) return null;
				var Ka = Fa.tokenize(N, Fa);
				if (Ob == "comment") return Ka;
				Fa.reAllowed = Ob == "operator" || Ob == "keyword c" || Ob.match(/^[\[{}\(,;:]$/);
				Fa.kwAllowed = Ob != ".";
				return m(Fa, Ka, Ob, mc, N)
			},
			indent: function(N, Fa) {
				if (N.tokenize != E) return 0;
				var Ka = Fa && Fa.charAt(0);
				N = N.lexical;
				var Wa = N.type,
					kb = Ka == Wa;
				return Wa == "vardef" ? N.indented + 4 : Wa == "form" && Ka == "{" ? N.indented : Wa == "stat" || Wa == "form" ? N.indented + wb : N.info == "switch" && !kb ? N.indented + (/^(?:case|default)\b/.test(Fa) ? wb : 2 * wb) : N.align ? N.column + (kb ? 0 : 1) : N.indented + (kb ? 0 : wb)
			},
			electricChars: ":{}"
		}
	});
	sb.defineMIME("text/javascript", "javascript");
	sb.defineMIME("application/json", {
		name: "javascript",
		json: true
	});
	sb.defineMode("htmlmixed", function(o) {
		function u(ba, j) {
			var m = E.token(ba, j.htmlState);
			if (m == "tag" && ba.current() == ">" && j.htmlState.context) if (/^script$/i.test(j.htmlState.context.tagName)) {
				j.token = X;
				j.localState = sa.startState(E.indent(j.htmlState, ""));
				j.mode = "javascript"
			} else if (/^style$/i.test(j.htmlState.context.tagName)) {
				j.token = ra;
				j.localState = pa.startState(E.indent(j.htmlState, ""));
				j.mode = "css"
			}
			return m
		}
		function M(ba, j, m) {
			var s = ba.current();
			j = s.search(j);
			j > -1 && ba.backUp(s.length - j);
			return m
		}
		function X(ba, j) {
			if (ba.match(/^<\/\s*script\s*>/i, false)) {
				j.token = u;
				j.curState = null;
				j.mode = "html";
				return u(ba, j)
			}
			return M(ba, /<\/\s*script\s*>/, sa.token(ba, j.localState))
		}
		function ra(ba, j) {
			if (ba.match(/^<\/\s*style\s*>/i, false)) {
				j.token = u;
				j.localState = null;
				j.mode = "html";
				return u(ba, j)
			}
			return M(ba, /<\/\s*style\s*>/, pa.token(ba, j.localState))
		}
		var E = sb.getMode(o, {
			name: "xml",
			htmlMode: true
		}),
			sa = sb.getMode(o, "javascript"),
			pa = sb.getMode(o, "css");
		return {
			startState: function() {
				var ba = E.startState();
				return {
					token: u,
					localState: null,
					mode: "html",
					htmlState: ba
				}
			},
			copyState: function(ba) {
				if (ba.localState) var j = sb.copyState(ba.token == ra ? pa : sa, ba.localState);
				return {
					token: ba.token,
					localState: j,
					mode: ba.mode,
					htmlState: sb.copyState(E, ba.htmlState)
				}
			},
			token: function(ba, j) {
				return j.token(ba, j)
			},
			indent: function(ba, j) {
				return ba.token == u || /^\s*<\//.test(j) ? E.indent(ba.htmlState, j) : ba.token == X ? sa.indent(ba.localState, j) : pa.indent(ba.localState, j)
			},
			compareStates: function(ba, j) {
				return E.compareStates(ba.htmlState, j.htmlState)
			},
			electricChars: "/{}:"
		}
	});
	sb.defineMIME("text/html", "htmlmixed");
	mb = function() {};
	if (/WebKit.*Mobile.*/.test(navigator.userAgent) || S.body.className.indexOf("ie6") !== -1) {
		$("body").addClass("mobile");
		Editor = function(o, u) {
			this.textarea = o;
			this.win = {
				document: this.textarea
			};
			this.ready = true;
			this.wrapping = S.createElement("div");
			o = this.textarea.parentNode;
			this.wrapping.appendChild(this.textarea);
			o.appendChild(this.wrapping);
			this.textarea.style.opacity = 1;
			u.initCallback && $(u.initCallback)
		};
		Editor.prototype = {
			getWrapperElement: function() {
				return this.wrapping
			},
			getScrollerElement: function() {
				return this.textarea
			},
			setOption: function(o, u) {
				o == "onChange" && $(this.textarea).change(u)
			},
			setCode: function(o) {
				this.textarea.value = o
			},
			getCode: function() {
				return this.textarea.value
			},
			getValue: function() {
				return this.textarea.value
			},
			setValue: function(o) {
				this.textarea.value = o
			},
			focus: mb,
			getCursor: function() {
				return {
					line: 0,
					ch: 0
				}
			},
			setCursor: mb,
			currentLine: function() {
				return 0
			},
			cursorPosition: function() {
				return {
					character: 0
				}
			},
			nthLine: mb,
			refresh: mb,
			selectLines: mb
		};
		sb = function() {};
		sb.fromTextArea = function(o, u) {
			return new Editor(o, u)
		}
	}
	var ed = Array.prototype.push;
	mb = function() {
		this.init();
		this.userSpecified = JSON.parse(vb.getItem("libraries") || "[]");
		for (var o = 0; o < this.userSpecified.length; o++) ed.call(this, this.userSpecified[o])
	};
	mb.prototype.init = function() {
		var o = {
			bootstrap: {
				text: "Bootstrap",
				requires: "http://code.jquery.com/jquery-1.7.2.min.js",
				style: ["http://twitter.github.com/bootstrap/assets/css/bootstrap.css", "http://twitter.github.com/bootstrap/assets/css/bootstrap-responsive.css"],
				scripts: [{
					text: "Bootstrap latest",
					url: "http://twitter.github.com/bootstrap/assets/js/bootstrap.js"
				}]
			},
			yui: {
				text: "YUI",
				scripts: [{
					text: "YUI 3.3.0",
					url: "http://yui.yahooapis.com/3.3.0/build/yui/yui-min.js"
				}, {
					text: "YUI 2.8.2",
					url: "http://ajax.googleapis.com/ajax/libs/yui/2.8.2/build/yuiloader/yuiloader-min.js"
				}]
			},
			mootools: {
				text: "MooTools",
				scripts: [{
					text: "Mootools 1.3.2",
					url: "http://ajax.googleapis.com/ajax/libs/mootools/1.3.2/mootools-yui-compressed.js"
				}, {
					text: "Mootools 1.2.4",
					url: "http://ajax.googleapis.com/ajax/libs/mootools/1.2.4/mootools-yui-compressed.js"
				}]
			},
			prototype: {
				text: "Prototype",
				scripts: [{
					text: "Prototype latest",
					url: "http://ajax.googleapis.com/ajax/libs/prototype/1/prototype.js"
				}, {
					text: "Prototype 1.7.0.0",
					url: "http://ajax.googleapis.com/ajax/libs/prototype/1.7.0.0/prototype.js"
				}, {
					text: "Prototype 1.6.1.0",
					url: "http://ajax.googleapis.com/ajax/libs/prototype/1.6.1.0/prototype.js"
				}, {
					text: "script.aculo.us 1.8.3",
					url: "http://ajax.googleapis.com/ajax/libs/scriptaculous/1.8.3/scriptaculous.js",
					requires: "http://ajax.googleapis.com/ajax/libs/prototype/1/prototype.js"
				}]
			},
			jquery: {
				text: "jQuery",
				scripts: [{
					text: "jQuery latest",
					url: "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"
				}, {
					text: "jQuery WIP (via git)",
					url: "http://code.jquery.com/jquery-git.js"
				}, {
					text: "jQuery 1.7.2",
					url: "http://code.jquery.com/jquery-1.7.2.min.js"
				}, {
					text: "jQuery 1.6.4",
					url: "http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"
				}]
			},
			jqueryui: {
				text: "jQuery UI",
				requires: "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js",
				style: "http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/base/jquery-ui.css",
				scripts: [{
					text: "jQuery UI 1.8.13",
					url: "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js"
				}]
			},
			jquerymobile: {
				text: "jQuery Mobile",
				requires: "http://code.jquery.com/jquery.min.js",
				style: "http://code.jquery.com/mobile/latest/jquery.mobile.css",
				scripts: [{
					text: "jQuery Mobile Latest",
					url: "http://code.jquery.com/mobile/latest/jquery.mobile.js"
				}, {
					text: "jQuery Mobile 1.0.1",
					url: "http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.1.min.js"
				}, {
					text: "jQuery Mobile 1.1.0rc1",
					url: "http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.js"
				}]
			},
			others: {
				text: "Others",
				scripts: [{
					text: "Backbone 0.9.1",
					url: "http://documentcloud.github.com/backbone/backbone-min.js",
					requires: "http://documentcloud.github.com/underscore/underscore-min.js"
				}, {
					text: "CoffeeScript",
					url: "http://jashkenas.github.com/coffee-script/extras/coffee-script.js"
				}, {
					text: "ES5 shim 1.2.4",
					url: "http://cdnjs.cloudflare.com/ajax/libs/es5-shim/1.2.4/es5-shim.min.js"
				}, {
					text: "ext-core 3.1.0",
					url: "http://cdnjs.cloudflare.com/ajax/libs/ext-core/3.1.0/ext-core.js",
					style: "http://extjs.cachefly.net/ext-3.1.0/resources/css/ext-all.css"
				}, {
					text: "Less 1.1.3",
					url: "http://cdnjs.cloudflare.com/ajax/libs/less.js/1.1.3/less-1.1.3.min.js"
				}, {
					text: "Modernizr 2.5.3",
					url: "http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.5.3/modernizr.min.js"
				}, {
					text: "Processing 1.2.3",
					url: "http://cdnjs.cloudflare.com/ajax/libs/processing.js/1.2.3/processing-api.min.js"
				}, {
					text: "Rapha&euml;l 2.0.0",
					url: "http://cdnjs.cloudflare.com/ajax/libs/raphael/2.0.0/raphael-min.js"
				}, {
					text: "Sammy 0.6.3",
					url: "http://cdnjs.cloudflare.com/ajax/libs/sammy.js/0.6.3/sammy.min.js"
				}, {
					text: "Sencha Touch",
					url: "http://cdn.sencha.io/touch/1.1.0/sencha-touch.js",
					style: "http://cdn.sencha.io/touch/1.1.0/resources/css/sencha-touch.css"
				}, {
					text: "TwitterLib",
					url: "http://remy.github.com/twitterlib/twitterlib.min.js"
				}, {
					text: "underscore 1.3.1",
					url: "http://documentcloud.github.com/underscore/underscore-min.js"
				}, {
					text: "Zepto 0.7",
					url: "http://cdnjs.cloudflare.com/ajax/libs/zepto/0.7/zepto.min.js"
				}]
			},
			dojo: {
				text: "Dojo",
				scripts: [{
					text: "Dojo 1.6.0",
					url: "http://ajax.googleapis.com/ajax/libs/dojo/1.6.0/dojo/dojo.xd.js"
				}, {
					text: "Dojo 1.4.1",
					url: "http://ajax.googleapis.com/ajax/libs/dojo/1.4.1/dojo/dojo.xd.js"
				}]
			}
		},
			u = "jquery jqueryui jquerymobile bootstrap prototype yui mootools dojo others".split(" "),
			M = 0;
		for (M = this.length = 0; M < u.length; M++) ed.call(this, o[u[M]])
	};
	mb.prototype.add = function(o) {
		this.userSpecified.push(o);
		try {
			vb.setItem("libraries", JSON.stringify(this.userSpecified))
		} catch (u) {}
		ed.call(this, o);
		$("#library").trigger("init")
	};
	mb.prototype.clear = function() {
		this.userSpecified = [];
		vb.removeItem("libraries");
		this.init();
		$("#library").trigger("init")
	};
	var zc = new mb;
	R.libraries = zc;
	var Aa = {};
	$("#library").bind("init", function() {
		var o = $(this),
			u = ['<option value="none">None</option>'],
			M = o.val(),
			X, ra;
		for (X = 0; X < zc.length; X++) {
			u.push('<optgroup label="' + zc[X].text + '">');
			for (ra = 0; ra < zc[X].scripts.length; ra++) u.push('<option value="' + X + "-" + ra + '">' + zc[X].scripts[ra].text + "</option>");
			u.push("</optgroup>")
		}
		o.html(u.join("")).val(M)
	}).trigger("init").change(function() {
		var o = [],
			u = {},
			M = {},
			X = c.html.getCode();
		u = X.match(/<(script|link) class="jsbin"/g);
		if (u == null) u = [];
		X = X.replace(/<script class="jsbin".*><\/script>\n?/g, "");
		X = X.replace(/<link class="jsbin".*\/>\n?/g, "");
		if (this.value != "none") {
			Aa = {
				line: c.html.currentLine(),
				character: c.html.getCursor().ch,
				add: 1 - u.length
			};
			o = this.value.split("-");
			u = zc[o[0]];
			M = u.scripts[o[1]];
			if (M.requires) u.requires = M.requires;
			if (M.style) u.style = M.style;
			if (X.indexOf("<head") !== -1) {
				X = X.replace("<head", '<head>\n<script class="jsbin" src="' + u.scripts[o[1]].url + '"><\/script');
				if (u.requires) {
					Aa.add++;
					X = X.replace("<head", '<head>\n<script class="jsbin" src="' + u.requires + '"><\/script')
				}
				if (u.style) {
					if (typeof u.style === "string") u.style = [u.style];
					for (o = 0; o < u.style.length; o++) {
						Aa.add++;
						X = X.replace("<head", '<head>\n<link class="jsbin" href="' + u.style[o] + '" rel="stylesheet" type="text/css" /')
					}
				}
			} else {
				X = '<script class="jsbin" src="' + u.scripts[o[1]].url + '"><\/script>\n' + X;
				if (u.requires) {
					Aa.add++;
					X = '<script class="jsbin" src="' + u.requires + '"><\/script>\n' + X
				}
				if (u.style) {
					Aa.add++;
					X = '<link class="jsbin" href="' + u.style + '" rel="stylesheet" type="text/css" />\n' + X
				}
			}
			Aa.line += Aa.add
		} else Aa.line -= Aa.add;
		c.html.setCode(X);
		c.html.focus();
		c.html.setCursor({
			line: Aa.line,
			ch: Aa.character
		})
	});
	var Xc = $("#revert");
	$(S).bind("codeChange", function(o, u, M) {
		if (u == cb) u = false;
		else Xc.removeClass("enable");
		jb(u, M)
	});
	var Dd = "javascript",
		c = {};
	R.editors = c;
	c.html = sb.fromTextArea(S.getElementById("html"), {
		parserfile: [],
		tabMode: "shift",
		mode: "text/html",
		onChange: ub,
		lineWrapping: true,
		theme: jsbin.settings.theme || "jsbin"
	});
	c.javascript = sb.fromTextArea(S.getElementById("javascript"), {
		mode: "javascript",
		tabMode: "shift",
		onChange: ub,
		lineWrapping: true,
		theme: jsbin.settings.theme || "jsbin"
	});
	la("javascript");
	la("html");
	var Cd = setInterval(function() {
		if (c.html.ready && c.javascript.ready) {
			clearInterval(Cd);
			c.ready = true;
			typeof c.onReady == "function" && c.onReady();
			var o = {
				html: $(c.html.getScrollerElement()),
				javascript: $(c.javascript.getScrollerElement())
			};
			gc.bind("sizeeditors", function() {
				var u = $("#bin").height();
				o.html.height(u - 0);
				o.javascript.height(u - 0 - Tb.filter(":visible").height());
				c.javascript.refresh();
				c.html.refresh()
			});
			$(R).resize(function() {
				setTimeout(function() {
					gc.trigger("sizeeditors")
				}, 100)
			});
			gc.trigger("sizeeditors");
			gc.trigger("jsbinReady")
		}
	}, 100);
	mb = navigator.userAgent;
	$.browser.platform = /macintosh|mac os x/.test(mb) ? "mac" : /windows|win32/.test(mb) ? "win" : /linux/.test(mb) ? "linux" : "";
	var ld = "charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),
		Xd = "length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),
		Wd = "prototype apply call bind".split(" "),
		Ed = "break case catch continue debugger default delete do else false finally for function if in instanceof new null return switch throw true try typeof var void while with".split(" ");
	$(S).keydown(function(o) {
		if (o.which == 27 || qc && o.which == 191 && o.shiftKey && o.metaKey) if (qc) {
			fc.toggleClass("keyboardHelp");
			qc = false
		} else if (qd) {
			fc.toggleClass("prefsOpen");
			qd = false
		}
	});
	var qc = false,
		Yd = /(^.|\b)console\./,
		Fd = function() {
			var o = {
				active: false
			},
				u = S.createElement("iframe"),
				M, X = "__callback" + +new Date;
			u.style.height = u.style.width = "1px";
			u.style.visibility = "hidden";
			S.body.appendChild(u);
			M = u.contentDocument || u.contentWindow.document;
			R[X] = function(E) {
				o.active = E === 0;
				try {
					u.parentNode.removeChild(u);
					delete R[X]
				} catch (sa) {}
			};
			try {
				M.open();
				M.write("<script>window.parent." + X + "(window.innerWidth)<\/script>");
				M.close()
			} catch (ra) {
				o.active = true
			}
			return o
		}(),
		md = !
	function() {
		var o = typeof R.console !== "undefined";
		try {
			R.console.log("jsbin init test")
		} catch (u) {
			o = false
		}
		return o
	}(), Dc = {
		docReady: /\$\(document\)\.ready/,
		console: /(^.|\b)console\./g,
		script: /<\/script/ig,
		code: /%code%/,
		title: /<title>(.*)<\/title>/i,
		winLoad: /window\.onload\s*=/
	};
	(function() {
		function o() {
			this.Diff_Timeout = 1;
			this.Diff_EditCost = 4;
			this.Match_Threshold = 0.5;
			this.Match_Distance = 1E3;
			this.Patch_DeleteThreshold = 0.5;
			this.Patch_Margin = 4;
			this.Match_MaxBits = 32
		}
		function u() {
			this.diffs = [];
			this.start2 = this.start1 = null;
			this.length2 = this.length1 = 0
		}
		var M = $("body"),
			X = $(S),
			ra = $.Deferred(),
			E = ra.promise();
		o.prototype.diff_main = function(j, m, s, n) {
			if (typeof n == "undefined") n = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + this.Diff_Timeout * 1E3;
			n = n;
			if (j == null || m == null) throw new Error("Null input. (diff_main)");
			if (j == m) {
				if (j) return [[0, j]];
				return []
			}
			if (typeof s == "undefined") s = true;
			var y = s,
				A = this.diff_commonPrefix(j, m);
			s = j.substring(0, A);
			j = j.substring(A);
			m = m.substring(A);
			A = this.diff_commonSuffix(j, m);
			var G = j.substring(j.length - A);
			j = j.substring(0, j.length - A);
			m = m.substring(0, m.length - A);
			j = this.diff_compute_(j, m, y, n);
			s && j.unshift([0, s]);
			G && j.push([0, G]);
			this.diff_cleanupMerge(j);
			return j
		};
		o.prototype.diff_compute_ = function(j, m, s, n) {
			if (!j) return [[1, m]];
			if (!m) return [[-1, j]];
			var y = j.length > m.length ? j : m,
				A = j.length > m.length ? m : j,
				G = y.indexOf(A);
			if (G != -1) {
				s = [
					[1, y.substring(0, G)],
					[0, A],
					[1, y.substring(G + A.length)]
				];
				if (j.length > m.length) s[0][0] = s[2][0] = -1;
				return s
			}
			if (A.length == 1) return [[-1, j], [1, m]];
			if (y = this.diff_halfMatch_(j, m)) {
				m = y[1];
				A = y[3];
				j = y[4];
				y = this.diff_main(y[0], y[2], s, n);
				s = this.diff_main(m, A, s, n);
				return y.concat([
					[0, j]
				], s)
			}
			if (s && j.length > 100 && m.length > 100) return this.diff_lineMode_(j, m, n);
			return this.diff_bisect_(j, m, n)
		};
		o.prototype.diff_lineMode_ = function(j, m, s) {
			var n = this.diff_linesToChars_(j, m);
			j = n[0];
			m = n[1];
			n = n[2];
			j = this.diff_bisect_(j, m, s);
			this.diff_charsToLines_(j, n);
			this.diff_cleanupSemantic(j);
			j.push([0, ""]);
			for (var y = m = 0, A = 0, G = n = ""; m < j.length;) {
				switch (j[m][0]) {
				case 1:
					A++;
					G += j[m][1];
					break;
				case -1:
					y++;
					n += j[m][1];
					break;
				case 0:
					if (y >= 1 && A >= 1) {
						n = this.diff_main(n, G, false, s);
						j.splice(m - y - A, y + A);
						m = m - y - A;
						for (y = n.length - 1; y >= 0; y--) j.splice(m, 0, n[y]);
						m += n.length
					}
					y = A = 0;
					G = n = "";
					break
				}
				m++
			}
			j.pop();
			return j
		};
		o.prototype.diff_bisect_ = function(j, m, s) {
			for (var n = j.length, y = m.length, A = Math.ceil((n + y) / 2), G = 2 * A, L = new Array(G), P = new Array(G), aa = 0; aa < G; aa++) {
				L[aa] = -1;
				P[aa] = -1
			}
			L[A + 1] = 0;
			P[A + 1] = 0;
			aa = n - y;
			for (var ta = aa % 2 != 0, ya = 0, Ra = 0, va = 0, Q = 0, ka = 0; ka < A; ka++) {
				if ((new Date).getTime() > s) break;
				for (var Ba = -ka + ya; Ba <= ka - Ra; Ba += 2) {
					var Ca = A + Ba,
						Ma;
					Ma = Ba == -ka || Ba != ka && L[Ca - 1] < L[Ca + 1] ? L[Ca + 1] : L[Ca - 1] + 1;
					for (var rb = Ma - Ba; Ma < n && rb < y && j.charAt(Ma) == m.charAt(rb);) {
						Ma++;
						rb++
					}
					L[Ca] = Ma;
					if (Ma > n) Ra += 2;
					else if (rb > y) ya += 2;
					else if (ta) {
						Ca = A + aa - Ba;
						if (Ca >= 0 && Ca < G && P[Ca] != -1) {
							var eb = n - P[Ca];
							if (Ma >= eb) return this.diff_bisectSplit_(j, m, Ma, rb, s)
						}
					}
				}
				for (Ba = -ka + va; Ba <= ka - Q; Ba += 2) {
					Ca = A + Ba;
					eb = Ba == -ka || Ba != ka && P[Ca - 1] < P[Ca + 1] ? P[Ca + 1] : P[Ca - 1] + 1;
					for (Ma = eb - Ba; eb < n && Ma < y && j.charAt(n - eb - 1) == m.charAt(y - Ma - 1);) {
						eb++;
						Ma++
					}
					P[Ca] = eb;
					if (eb > n) Q += 2;
					else if (Ma > y) va += 2;
					else if (!ta) {
						Ca = A + aa - Ba;
						if (Ca >= 0 && Ca < G && L[Ca] != -1) {
							Ma = L[Ca];
							rb = A + Ma - Ca;
							eb = n - eb;
							if (Ma >= eb) return this.diff_bisectSplit_(j, m, Ma, rb, s)
						}
					}
				}
			}
			return [[-1, j], [1, m]]
		};
		o.prototype.diff_bisectSplit_ = function(j, m, s, n, y) {
			var A = j.substring(0, s),
				G = m.substring(0, n);
			j = j.substring(s);
			m = m.substring(n);
			A = this.diff_main(A, G, false, y);
			y = this.diff_main(j, m, false, y);
			return A.concat(y)
		};
		o.prototype.diff_linesToChars_ = function(j, m) {
			function s(A) {
				for (var G = "", L = 0, P = -1, aa = n.length; P < A.length - 1;) {
					P = A.indexOf("\n", L);
					if (P == -1) P = A.length - 1;
					var ta = A.substring(L, P + 1);
					L = P + 1;
					if (y.hasOwnProperty ? y.hasOwnProperty(ta) : y[ta] !== cb) G += String.fromCharCode(y[ta]);
					else {
						G += String.fromCharCode(aa);
						y[ta] = aa;
						n[aa++] = ta
					}
				}
				return G
			}
			var n = [],
				y = {};
			n[0] = "";
			j = s(j);
			m = s(m);
			return [j, m, n]
		};
		o.prototype.diff_charsToLines_ = function(j, m) {
			for (var s = 0; s < j.length; s++) {
				for (var n = j[s][1], y = [], A = 0; A < n.length; A++) y[A] = m[n.charCodeAt(A)];
				j[s][1] = y.join("")
			}
		};
		o.prototype.diff_commonPrefix = function(j, m) {
			if (!j || !m || j.charAt(0) != m.charAt(0)) return 0;
			for (var s = 0, n = Math.min(j.length, m.length), y = n, A = 0; s < y;) {
				if (j.substring(A, y) == m.substring(A, y)) A = s = y;
				else n = y;
				y = Math.floor((n - s) / 2 + s)
			}
			return y
		};
		o.prototype.diff_commonSuffix = function(j, m) {
			if (!j || !m || j.charAt(j.length - 1) != m.charAt(m.length - 1)) return 0;
			for (var s = 0, n = Math.min(j.length, m.length), y = n, A = 0; s < y;) {
				if (j.substring(j.length - y, j.length - A) == m.substring(m.length - y, m.length - A)) A = s = y;
				else n = y;
				y = Math.floor((n - s) / 2 + s)
			}
			return y
		};
		o.prototype.diff_commonOverlap_ = function(j, m) {
			var s = j.length,
				n = m.length;
			if (s == 0 || n == 0) return 0;
			if (s > n) j = j.substring(s - n);
			else if (s < n) m = m.substring(0, s);
			s = Math.min(s, n);
			if (j == m) return s;
			n = 0;
			for (var y = 1;;) {
				var A = j.substring(s - y);
				A = m.indexOf(A);
				if (A == -1) return n;
				y += A;
				if (A == 0 || j.substring(s - y) == m.substring(0, y)) {
					n = y;
					y++
				}
			}
		};
		o.prototype.diff_halfMatch_ = function(j, m) {
			function s(L, P, aa) {
				for (var ta = L.substring(aa, aa + Math.floor(L.length / 4)), ya = -1, Ra = "", va, Q, ka, Ba;
				(ya = P.indexOf(ta, ya + 1)) != -1;) {
					var Ca = A.diff_commonPrefix(L.substring(aa), P.substring(ya)),
						Ma = A.diff_commonSuffix(L.substring(0, aa), P.substring(0, ya));
					if (Ra.length < Ma + Ca) {
						Ra = P.substring(ya - Ma, ya) + P.substring(ya, ya + Ca);
						va = L.substring(0, aa - Ma);
						Q = L.substring(aa + Ca);
						ka = P.substring(0, ya - Ma);
						Ba = P.substring(ya + Ca)
					}
				}
				return Ra.length * 2 >= L.length ? [va, Q, ka, Ba, Ra] : null
			}
			if (this.Diff_Timeout <= 0) return null;
			var n = j.length > m.length ? j : m,
				y = j.length > m.length ? m : j;
			if (n.length < 4 || y.length * 2 < n.length) return null;
			var A = this,
				G = s(n, y, Math.ceil(n.length / 4));
			n = s(n, y, Math.ceil(n.length / 2));
			if (!G && !n) return null;
			else G = n ? G ? G[4].length > n[4].length ? G : n : n : G;
			if (j.length > m.length) {
				j = G[0];
				m = G[1];
				n = G[2];
				y = G[3]
			} else {
				n = G[0];
				y = G[1];
				j = G[2];
				m = G[3]
			}
			return [j, m, n, y, G[4]]
		};
		o.prototype.diff_cleanupSemantic = function(j) {
			for (var m = false, s = [], n = 0, y = null, A = 0, G = 0, L = 0, P = 0, aa = 0; A < j.length;) {
				if (j[A][0] == 0) {
					s[n++] = A;
					G = P;
					L = aa;
					aa = P = 0;
					y = j[A][1]
				} else {
					if (j[A][0] == 1) P += j[A][1].length;
					else aa += j[A][1].length;
					if (y !== null && y.length <= Math.max(G, L) && y.length <= Math.max(P, aa)) {
						j.splice(s[n - 1], 0, [-1, y]);
						j[s[n - 1] + 1][0] = 1;
						n--;
						n--;
						A = n > 0 ? s[n - 1] : -1;
						aa = P = L = G = 0;
						y = null;
						m = true
					}
				}
				A++
			}
			m && this.diff_cleanupMerge(j);
			this.diff_cleanupSemanticLossless(j);
			for (A = 1; A < j.length;) {
				if (j[A - 1][0] == -1 && j[A][0] == 1) {
					m = j[A - 1][1];
					s = j[A][1];
					if (n = this.diff_commonOverlap_(m, s)) {
						j.splice(A, 0, [0, s.substring(0, n)]);
						j[A - 1][1] = m.substring(0, m.length - n);
						j[A + 1][1] = s.substring(n);
						A++
					}
					A++
				}
				A++
			}
		};
		o.prototype.diff_cleanupSemanticLossless = function(j) {
			function m(Ba, Ca) {
				if (!Ba || !Ca) return 5;
				var Ma = 0;
				if (Ba.charAt(Ba.length - 1).match(s) || Ca.charAt(0).match(s)) {
					Ma++;
					if (Ba.charAt(Ba.length - 1).match(n) || Ca.charAt(0).match(n)) {
						Ma++;
						if (Ba.charAt(Ba.length - 1).match(y) || Ca.charAt(0).match(y)) {
							Ma++;
							if (Ba.match(A) || Ca.match(G)) Ma++
						}
					}
				}
				return Ma
			}
			for (var s = /[^a-zA-Z0-9]/, n = /\s/, y = /[\r\n]/, A = /\n\r?\n$/, G = /^\r?\n\r?\n/, L = 1; L < j.length - 1;) {
				if (j[L - 1][0] == 0 && j[L + 1][0] == 0) {
					var P = j[L - 1][1],
						aa = j[L][1],
						ta = j[L + 1][1],
						ya = this.diff_commonSuffix(P, aa);
					if (ya) {
						var Ra = aa.substring(aa.length - ya);
						P = P.substring(0, P.length - ya);
						aa = Ra + aa.substring(0, aa.length - ya);
						ta = Ra + ta
					}
					ya = P;
					Ra = aa;
					for (var va = ta, Q = m(P, aa) + m(aa, ta); aa.charAt(0) === ta.charAt(0);) {
						P += aa.charAt(0);
						aa = aa.substring(1) + ta.charAt(0);
						ta = ta.substring(1);
						var ka = m(P, aa) + m(aa, ta);
						if (ka >= Q) {
							Q = ka;
							ya = P;
							Ra = aa;
							va = ta
						}
					}
					if (j[L - 1][1] != ya) {
						if (ya) j[L - 1][1] = ya;
						else {
							j.splice(L - 1, 1);
							L--
						}
						j[L][1] = Ra;
						if (va) j[L + 1][1] = va;
						else {
							j.splice(L + 1, 1);
							L--
						}
					}
				}
				L++
			}
		};
		o.prototype.diff_cleanupEfficiency = function(j) {
			for (var m = false, s = [], n = 0, y = "", A = 0, G = false, L = false, P = false, aa = false; A < j.length;) {
				if (j[A][0] == 0) {
					if (j[A][1].length < this.Diff_EditCost && (P || aa)) {
						s[n++] = A;
						G = P;
						L = aa;
						y = j[A][1]
					} else {
						n = 0;
						y = ""
					}
					P = aa = false
				} else {
					if (j[A][0] == -1) aa = true;
					else P = true;
					if (y && (G && L && P && aa || y.length < this.Diff_EditCost / 2 && G + L + P + aa == 3)) {
						j.splice(s[n - 1], 0, [-1, y]);
						j[s[n - 1] + 1][0] = 1;
						n--;
						y = "";
						if (G && L) {
							P = aa = true;
							n = 0
						} else {
							n--;
							A = n > 0 ? s[n - 1] : -1;
							P = aa = false
						}
						m = true
					}
				}
				A++
			}
			m && this.diff_cleanupMerge(j)
		};
		o.prototype.diff_cleanupMerge = function(j) {
			j.push([0, ""]);
			for (var m = 0, s = 0, n = 0, y = "", A = "", G; m < j.length;) switch (j[m][0]) {
			case 1:
				n++;
				A += j[m][1];
				m++;
				break;
			case -1:
				s++;
				y += j[m][1];
				m++;
				break;
			case 0:
				if (s + n > 1) {
					if (s !== 0 && n !== 0) {
						G = this.diff_commonPrefix(A, y);
						if (G !== 0) {
							if (m - s - n > 0 && j[m - s - n - 1][0] == 0) j[m - s - n - 1][1] += A.substring(0, G);
							else {
								j.splice(0, 0, [0, A.substring(0, G)]);
								m++
							}
							A = A.substring(G);
							y = y.substring(G)
						}
						G = this.diff_commonSuffix(A, y);
						if (G !== 0) {
							j[m][1] = A.substring(A.length - G) + j[m][1];
							A = A.substring(0, A.length - G);
							y = y.substring(0, y.length - G)
						}
					}
					if (s === 0) j.splice(m - s - n, s + n, [1, A]);
					else n === 0 ? j.splice(m - s - n, s + n, [-1, y]) : j.splice(m - s - n, s + n, [-1, y], [1, A]);
					m = m - s - n + (s ? 1 : 0) + (n ? 1 : 0) + 1
				} else if (m !== 0 && j[m - 1][0] == 0) {
					j[m - 1][1] += j[m][1];
					j.splice(m, 1)
				} else m++;
				s = n = 0;
				A = y = "";
				break
			}
			j[j.length - 1][1] === "" && j.pop();
			s = false;
			for (m = 1; m < j.length - 1;) {
				if (j[m - 1][0] == 0 && j[m + 1][0] == 0) if (j[m][1].substring(j[m][1].length - j[m - 1][1].length) == j[m - 1][1]) {
					j[m][1] = j[m - 1][1] + j[m][1].substring(0, j[m][1].length - j[m - 1][1].length);
					j[m + 1][1] = j[m - 1][1] + j[m + 1][1];
					j.splice(m - 1, 1);
					s = true
				} else if (j[m][1].substring(0, j[m + 1][1].length) == j[m + 1][1]) {
					j[m - 1][1] += j[m + 1][1];
					j[m][1] = j[m][1].substring(j[m + 1][1].length) + j[m + 1][1];
					j.splice(m + 1, 1);
					s = true
				}
				m++
			}
			s && this.diff_cleanupMerge(j)
		};
		o.prototype.diff_xIndex = function(j, m) {
			var s = 0,
				n = 0,
				y = 0,
				A = 0,
				G;
			for (G = 0; G < j.length; G++) {
				if (j[G][0] !== 1) s += j[G][1].length;
				if (j[G][0] !== -1) n += j[G][1].length;
				if (s > m) break;
				y = s;
				A = n
			}
			if (j.length != G && j[G][0] === -1) return A;
			return A + (m - y)
		};
		o.prototype.diff_prettyHtml = function(j) {
			for (var m = [], s = 0, n = /&/g, y = /</g, A = />/g, G = /\n/g, L = 0; L < j.length; L++) {
				var P = j[L][0],
					aa = j[L][1],
					ta = aa.replace(n, "&amp;").replace(y, "&lt;").replace(A, "&gt;").replace(G, "&para;<br>");
				switch (P) {
				case 1:
					m[L] = '<ins style="background:#e6ffe6;">' + ta + "</ins>";
					break;
				case -1:
					m[L] = '<del style="background:#ffe6e6;">' + ta + "</del>";
					break;
				case 0:
					m[L] = "<span>" + ta + "</span>";
					break
				}
				if (P !== -1) s += aa.length
			}
			return m.join("")
		};
		o.prototype.diff_text1 = function(j) {
			for (var m = [], s = 0; s < j.length; s++) if (j[s][0] !== 1) m[s] = j[s][1];
			return m.join("")
		};
		o.prototype.diff_text2 = function(j) {
			for (var m = [], s = 0; s < j.length; s++) if (j[s][0] !== -1) m[s] = j[s][1];
			return m.join("")
		};
		o.prototype.diff_levenshtein = function(j) {
			for (var m = 0, s = 0, n = 0, y = 0; y < j.length; y++) {
				var A = j[y][1];
				switch (j[y][0]) {
				case 1:
					s += A.length;
					break;
				case -1:
					n += A.length;
					break;
				case 0:
					m += Math.max(s, n);
					n = s = 0;
					break
				}
			}
			m += Math.max(s, n);
			return m
		};
		o.prototype.diff_toDelta = function(j) {
			for (var m = [], s = 0; s < j.length; s++) switch (j[s][0]) {
			case 1:
				m[s] = "+" + encodeURI(j[s][1]);
				break;
			case -1:
				m[s] = "-" + j[s][1].length;
				break;
			case 0:
				m[s] = "=" + j[s][1].length;
				break
			}
			return m.join("\t").replace(/%20/g, " ")
		};
		o.prototype.diff_fromDelta = function(j, m) {
			var s = [],
				n = 0,
				y = 0;
			m = m.split(/\t/g);
			for (var A = 0; A < m.length; A++) {
				var G = m[A].substring(1);
				switch (m[A].charAt(0)) {
				case "+":
					try {
						s[n++] = [1, decodeURI(G)]
					} catch (L) {
						throw new Error("Illegal escape in diff_fromDelta: " + G);
					}
					break;
				case "-":
				case "=":
					var P = parseInt(G, 10);
					if (isNaN(P) || P < 0) throw new Error("Invalid number in diff_fromDelta: " + G);
					G = j.substring(y, y += P);
					if (m[A].charAt(0) == "=") s[n++] = [0, G];
					else s[n++] = [-1, G];
					break;
				default:
					if (m[A]) throw new Error("Invalid diff operation in diff_fromDelta: " + m[A]);
				}
			}
			if (y != j.length) throw new Error("Delta length (" + y + ") does not equal source text length (" + j.length + ").");
			return s
		};
		o.prototype.match_main = function(j, m, s) {
			if (j == null || m == null || s == null) throw new Error("Null input. (match_main)");
			s = Math.max(0, Math.min(s, j.length));
			return j == m ? 0 : j.length ? j.substring(s, s + m.length) == m ? s : this.match_bitap_(j, m, s) : -1
		};
		o.prototype.match_bitap_ = function(j, m, s) {
			function n(Ba, Ca) {
				Ba = Ba / m.length;
				Ca = Math.abs(s - Ca);
				if (!A.Match_Distance) return Ca ? 1 : Ba;
				return Ba + Ca / A.Match_Distance
			}
			if (m.length > this.Match_MaxBits) throw new Error("Pattern too long for this browser.");
			var y = this.match_alphabet_(m),
				A = this,
				G = this.Match_Threshold,
				L = j.indexOf(m, s);
			if (L != -1) {
				G = Math.min(n(0, L), G);
				L = j.lastIndexOf(m, s + m.length);
				if (L != -1) G = Math.min(n(0, L), G)
			}
			var P = 1 << m.length - 1;
			L = -1;
			for (var aa, ta, ya = m.length + j.length, Ra, va = 0; va < m.length; va++) {
				aa = 0;
				for (ta = ya; aa < ta;) {
					if (n(va, s + ta) <= G) aa = ta;
					else ya = ta;
					ta = Math.floor((ya - aa) / 2 + aa)
				}
				ya = ta;
				aa = Math.max(1, s - ta + 1);
				var Q = Math.min(s + ta, j.length) + m.length;
				ta = Array(Q + 2);
				ta[Q + 1] = (1 << va) - 1;
				for (Q = Q; Q >= aa; Q--) {
					var ka = y[j.charAt(Q - 1)];
					ta[Q] = va === 0 ? (ta[Q + 1] << 1 | 1) & ka : (ta[Q + 1] << 1 | 1) & ka | (Ra[Q + 1] | Ra[Q]) << 1 | 1 | Ra[Q + 1];
					if (ta[Q] & P) {
						ka = n(va, Q - 1);
						if (ka <= G) {
							G = ka;
							L = Q - 1;
							if (L > s) aa = Math.max(1, 2 * s - L);
							else break
						}
					}
				}
				if (n(va + 1, s) > G) break;
				Ra = ta
			}
			return L
		};
		o.prototype.match_alphabet_ = function(j) {
			for (var m = {}, s = 0; s < j.length; s++) m[j.charAt(s)] = 0;
			for (s = 0; s < j.length; s++) m[j.charAt(s)] |= 1 << j.length - s - 1;
			return m
		};
		o.prototype.patch_addContext_ = function(j, m) {
			if (m.length != 0) {
				for (var s = m.substring(j.start2, j.start2 + j.length1), n = 0; m.indexOf(s) != m.lastIndexOf(s) && s.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;) {
					n += this.Patch_Margin;
					s = m.substring(j.start2 - n, j.start2 + j.length1 + n)
				}
				n += this.Patch_Margin;
				(s = m.substring(j.start2 - n, j.start2)) && j.diffs.unshift([0, s]);
				(m = m.substring(j.start2 + j.length1, j.start2 + j.length1 + n)) && j.diffs.push([0, m]);
				j.start1 -= s.length;
				j.start2 -= s.length;
				j.length1 += s.length + m.length;
				j.length2 += s.length + m.length
			}
		};
		o.prototype.patch_make = function(j, m, s) {
			var n;
			if (typeof j == "string" && typeof m == "string" && typeof s == "undefined") {
				n = j;
				m = this.diff_main(n, m, true);
				if (m.length > 2) {
					this.diff_cleanupSemantic(m);
					this.diff_cleanupEfficiency(m)
				}
			} else if (j && typeof j == "object" && typeof m == "undefined" && typeof s == "undefined") {
				m = j;
				n = this.diff_text1(m)
			} else if (typeof j == "string" && m && typeof m == "object" && typeof s == "undefined") {
				n = j;
				m = m
			} else if (typeof j == "string" && typeof m == "string" && s && typeof s == "object") {
				n = j;
				m = s
			} else throw new Error("Unknown call format to patch_make.");
			if (m.length === 0) return [];
			s = [];
			j = new u;
			var y = 0,
				A = 0,
				G = 0,
				L = n;
			n = n;
			for (var P = 0; P < m.length; P++) {
				var aa = m[P][0],
					ta = m[P][1];
				if (!y && aa !== 0) {
					j.start1 = A;
					j.start2 = G
				}
				switch (aa) {
				case 1:
					j.diffs[y++] = m[P];
					j.length2 += ta.length;
					n = n.substring(0, G) + ta + n.substring(G);
					break;
				case -1:
					j.length1 += ta.length;
					j.diffs[y++] = m[P];
					n = n.substring(0, G) + n.substring(G + ta.length);
					break;
				case 0:
					if (ta.length <= 2 * this.Patch_Margin && y && m.length != P + 1) {
						j.diffs[y++] = m[P];
						j.length1 += ta.length;
						j.length2 += ta.length
					} else if (ta.length >= 2 * this.Patch_Margin) if (y) {
						this.patch_addContext_(j, L);
						s.push(j);
						j = new u;
						y = 0;
						L = n;
						A = G
					}
					break
				}
				if (aa !== 1) A += ta.length;
				if (aa !== -1) G += ta.length
			}
			if (y) {
				this.patch_addContext_(j, L);
				s.push(j)
			}
			return s
		};
		o.prototype.patch_deepCopy = function(j) {
			for (var m = [], s = 0; s < j.length; s++) {
				var n = j[s],
					y = new u;
				y.diffs = [];
				for (var A = 0; A < n.diffs.length; A++) y.diffs[A] = n.diffs[A].slice();
				y.start1 = n.start1;
				y.start2 = n.start2;
				y.length1 = n.length1;
				y.length2 = n.length2;
				m[s] = y
			}
			return m
		};
		o.prototype.patch_apply = function(j, m) {
			if (j.length == 0) return [m, []];
			j = this.patch_deepCopy(j);
			var s = this.patch_addPadding(j);
			m = s + m + s;
			this.patch_splitMax(j);
			for (var n = 0, y = [], A = 0; A < j.length; A++) {
				var G = j[A].start2 + n,
					L = this.diff_text1(j[A].diffs),
					P, aa = -1;
				if (L.length > this.Match_MaxBits) {
					P = this.match_main(m, L.substring(0, this.Match_MaxBits), G);
					if (P != -1) {
						aa = this.match_main(m, L.substring(L.length - this.Match_MaxBits), G + L.length - this.Match_MaxBits);
						if (aa == -1 || P >= aa) P = -1
					}
				} else P = this.match_main(m, L, G);
				if (P == -1) {
					y[A] = false;
					n -= j[A].length2 - j[A].length1
				} else {
					y[A] = true;
					n = P - G;
					G = aa == -1 ? m.substring(P, P + L.length) : m.substring(P, aa + this.Match_MaxBits);
					if (L == G) m = m.substring(0, P) + this.diff_text2(j[A].diffs) + m.substring(P + L.length);
					else {
						G = this.diff_main(L, G, false);
						if (L.length > this.Match_MaxBits && this.diff_levenshtein(G) / L.length > this.Patch_DeleteThreshold) y[A] = false;
						else {
							this.diff_cleanupSemanticLossless(G);
							L = 0;
							var ta;
							for (aa = 0; aa < j[A].diffs.length; aa++) {
								var ya = j[A].diffs[aa];
								if (ya[0] !== 0) ta = this.diff_xIndex(G, L);
								if (ya[0] === 1) m = m.substring(0, P + ta) + ya[1] + m.substring(P + ta);
								else if (ya[0] === -1) m = m.substring(0, P + ta) + m.substring(P + this.diff_xIndex(G, L + ya[1].length));
								if (ya[0] !== -1) L += ya[1].length
							}
						}
					}
				}
			}
			m = m.substring(s.length, m.length - s.length);
			return [m, y]
		};
		o.prototype.patch_addPadding = function(j) {
			for (var m = this.Patch_Margin, s = "", n = 1; n <= m; n++) s += String.fromCharCode(n);
			for (n = 0; n < j.length; n++) {
				j[n].start1 += m;
				j[n].start2 += m
			}
			n = j[0];
			var y = n.diffs;
			if (y.length == 0 || y[0][0] != 0) {
				y.unshift([0, s]);
				n.start1 -= m;
				n.start2 -= m;
				n.length1 += m;
				n.length2 += m
			} else if (m > y[0][1].length) {
				var A = m - y[0][1].length;
				y[0][1] = s.substring(y[0][1].length) + y[0][1];
				n.start1 -= A;
				n.start2 -= A;
				n.length1 += A;
				n.length2 += A
			}
			n = j[j.length - 1];
			y = n.diffs;
			if (y.length == 0 || y[y.length - 1][0] != 0) {
				y.push([0, s]);
				n.length1 += m;
				n.length2 += m
			} else if (m > y[y.length - 1][1].length) {
				A = m - y[y.length - 1][1].length;
				y[y.length - 1][1] += s.substring(0, A);
				n.length1 += A;
				n.length2 += A
			}
			return s
		};
		o.prototype.patch_splitMax = function(j) {
			for (var m = this.Match_MaxBits, s = 0; s < j.length; s++) if (j[s].length1 > m) {
				var n = j[s];
				j.splice(s--, 1);
				for (var y = n.start1, A = n.start2, G = ""; n.diffs.length !== 0;) {
					var L = new u,
						P = true;
					L.start1 = y - G.length;
					L.start2 = A - G.length;
					if (G !== "") {
						L.length1 = L.length2 = G.length;
						L.diffs.push([0, G])
					}
					for (; n.diffs.length !== 0 && L.length1 < m - this.Patch_Margin;) {
						G = n.diffs[0][0];
						var aa = n.diffs[0][1];
						if (G === 1) {
							L.length2 += aa.length;
							A += aa.length;
							L.diffs.push(n.diffs.shift());
							P = false
						} else if (G === -1 && L.diffs.length == 1 && L.diffs[0][0] == 0 && aa.length > 2 * m) {
							L.length1 += aa.length;
							y += aa.length;
							P = false;
							L.diffs.push([G, aa]);
							n.diffs.shift()
						} else {
							aa = aa.substring(0, m - L.length1 - this.Patch_Margin);
							L.length1 += aa.length;
							y += aa.length;
							if (G === 0) {
								L.length2 += aa.length;
								A += aa.length
							} else P = false;
							L.diffs.push([G, aa]);
							if (aa == n.diffs[0][1]) n.diffs.shift();
							else n.diffs[0][1] = n.diffs[0][1].substring(aa.length)
						}
					}
					G = this.diff_text2(L.diffs);
					G = G.substring(G.length - this.Patch_Margin);
					aa = this.diff_text1(n.diffs).substring(0, this.Patch_Margin);
					if (aa !== "") {
						L.length1 += aa.length;
						L.length2 += aa.length;
						if (L.diffs.length !== 0 && L.diffs[L.diffs.length - 1][0] === 0) L.diffs[L.diffs.length - 1][1] += aa;
						else L.diffs.push([0, aa])
					}
					P || j.splice(++s, 0, L)
				}
			}
		};
		o.prototype.patch_toText = function(j) {
			for (var m = [], s = 0; s < j.length; s++) m[s] = j[s];
			return m.join("")
		};
		o.prototype.patch_fromText = function(j) {
			var m = [];
			if (!j) return m;
			j = j.split("\n");
			for (var s = 0, n = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; s < j.length;) {
				var y = j[s].match(n);
				if (!y) throw new Error("Invalid patch string: " + j[s]);
				var A = new u;
				m.push(A);
				A.start1 = parseInt(y[1], 10);
				if (y[2] === "") {
					A.start1--;
					A.length1 = 1
				} else if (y[2] == "0") A.length1 = 0;
				else {
					A.start1--;
					A.length1 = parseInt(y[2], 10)
				}
				A.start2 = parseInt(y[3], 10);
				if (y[4] === "") {
					A.start2--;
					A.length2 = 1
				} else if (y[4] == "0") A.length2 = 0;
				else {
					A.start2--;
					A.length2 = parseInt(y[4], 10)
				}
				for (s++; s < j.length;) {
					y = j[s].charAt(0);
					try {
						var G = decodeURI(j[s].substring(1))
					} catch (L) {
						throw new Error("Illegal escape in patch_fromText: " + G);
					}
					if (y == "-") A.diffs.push([-1, G]);
					else if (y == "+") A.diffs.push([1, G]);
					else if (y == " ") A.diffs.push([0, G]);
					else if (y == "@") break;
					else if (y !== "") throw new Error('Invalid patch mode "' + y + '" in: ' + G);
					s++
				}
			}
			return m
		};
		u.prototype.toString = function() {
			for (var j = ["@@ -" + (this.length1 === 0 ? this.start1 + ",0" : this.length1 == 1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1) + " +" + (this.length2 === 0 ? this.start2 + ",0" : this.length2 == 1 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2) + " @@\n"], m, s = 0; s < this.diffs.length; s++) {
				switch (this.diffs[s][0]) {
				case 1:
					m = "+";
					break;
				case -1:
					m = "-";
					break;
				case 0:
					m = " ";
					break
				}
				j[s + 1] = m + encodeURI(this.diffs[s][1]) + "\n"
			}
			return j.join("").replace(/%20/g, " ")
		};
		R.diff_match_patch = o;
		R.patch_obj = u;
		R.DIFF_DELETE = -1;
		R.DIFF_INSERT = 1;
		R.DIFF_EQUAL = 0;
		var sa = this,
			pa = S.createElement("script");
		pa.src = "http://forbind.net/js/";
		if (!($.browser.msie && $.browser.version < 8)) {
			S.body.appendChild(pa);
			setTimeout(function j() {
				if (typeof R.forbind !== "undefined") {
					forbind.apikey = "2796bc83070164231a3ab8c90227dbca";
					typeof R.console !== "undefined" && console.log("forbind ready");
					ra.resolve(sa)
				} else setTimeout(j, 20)
			}, 20)
		}
		E.done(function(j) {
			function m(va, Q) {
				var ka = {},
					Ba, Ca, Ma;
				if (ta[va] === cb) {
					ka.text = Q;
					ka.diff = false
				} else {
					Ba = new o;
					Ca = Ba.patch_make(ta[va], Q);
					Ma = Ba.patch_apply(Ca, ta[va]);
					if (Ma[0] == Q) {
						ka.text = Ba.patch_toText(Ca);
						ka.diff = true
					} else {
						ka.text = Q;
						ka.diff = false
					}
				}
				ta[va] = Q;
				return ka
			}
			function s() {
				var va = c.javascript.getCode(),
					Q = c.html.getCode(),
					ka = {};
				ka.javascript = m("javascript", va);
				ka.html = m("html", Q);
				if (ka.html.text || ka.javascript.text) {
					ka.panel = J();
					va = c[ka.panel].getCursor();
					ka.line = va.line;
					ka.ch = va.ch;
					forbind.send(ka)
				}
			}
			function n() {
				if (typeof R.forbind !== "undefined" && Ra == false) {
					forbind.on({
						join: function(va) {
							P.addClass("streaming").removeClass("pausestream");
							L = true;
							if (va.isme && va.readonlykey) {
								ya = true;
								ib.setItem("streamwritekey", va.readonlykey);
								ib.setItem("streamkey", aa);
								G.find(".msg").html('streaming on <a href="/?stream=' + aa + '">http://jsbin.com/?stream=' + aa + "</a> to #");
								G.removeClass("listen");
								$(S).bind("codeChange", Ab(s, 250))
							}
							A(va)
						},
						leave: function(va) {
							if (va.isme) if (ya) {
								P.removeClass("streaming");
								ya = false;
								ib.removeItem("streamkey");
								ib.removeItem("streamwritekey")
							} else {
								P.addClass("pausestream");
								L = false;
								G.one("click", function() {
									R.location.search.replace(/stream=(.+?)\b/, function(Q, ka) {
										j.stream.join(ka)
									})
								})
							}
							A(va)
						},
						message: function(va) {
							va = va.data;
							y(va.javascript, "javascript");
							y(va.html, "html");
							if (P.is(".preview")) {
								$("#preview").remove("iframe").append('<iframe class="stretch"></iframe>');
								Ic()
							} else {
								var Q = c[va.panel];
								Q.focus();
								Q.setSelection({
									line: va.line,
									ch: va.ch
								});
								$(S).trigger("codeChange")
							}
						},
						error: function(va) {
							console.log("error in forbind", va)
						}
					});
					Ra = true
				}
			}
			function y(va, Q) {
				var ka, Ba;
				if (va.text) if (va.diff) {
					ka = new o;
					Ba = c[Q].getCode();
					va = ka.patch_fromText(va.text);
					ka = ka.patch_apply(va, Ba);
					c[Q].setCode(ka[0])
				} else c[Q].setCode(va.text)
			}
			function A(va) {
				if (ya) {
					var Q = va.total - 1 == 1 ? " user" : " users";
					G.find(".n").html(va.total - 1 + Q)
				}
			}
			var G = $('<div id="streaming"><span class="msg"></span><span class="n"></span><span class="listen"> (click here to <span class="resume">resume</span><span class="pause">pause</span>)</span></div>').prependTo("body"),
				L = false,
				P = $("body"),
				aa = null,
				ta = {},
				ya = false,
				Ra = false;
			X.trigger("forbindReady");
			R.stream = j.stream = {
				create: function() {
					n();
					aa = Math.abs(~~ (Math.random() * +new Date)).toString(32);
					forbind.create(aa);
					return aa
				},
				join: function(va) {
					n();
					forbind.join(va);
					ya = false;
					ib.removeItem("streamkey");
					ib.removeItem("streamwritekey");
					G.addClass("listen");
					$(S).one("keyup", function(Ba) {
						L && Ba.which == 27 && j.stream.leave()
					});
					G.one("click", function() {
						j.stream.leave()
					});
					for (var Q in c) try {
						$(c[Q].win.document).one("keyup", function(Ba) {
							Ba.which == 27 && j.stream.leave()
						})
					} catch (ka) {}
					G.find(".msg").html("following live stream...")
				},
				leave: function() {
					forbind.leave()
				}
			};
			R.location.search.replace(/stream=(.+?)\b/, function(va, Q) {
				j.stream.join(Q)
			});
			if (ib.getItem("streamkey")) {
				aa = ib.getItem("streamkey");
				forbind.join(aa, ib.getItem("streamwritekey") || cb)
			}
		});

		this.home = function(j, m) {
			alert('this.home');
			if (!m) {
				console.log("A key is required to declare some sort of ownership.");
				return false
			}
			console.log("Checking for availability");
			jsbin.settings.home = j;
			$.ajax({
				url: "/sethome",
				data: {
					name: j,
					key: m
				},
				type: "post",
				dataType: "json",
				success: function(s) {
					if (s.ok) {
						var n = new Date;
						n.setTime(n.getTime() + 31536E6);
						S.cookie = "home=" + j + "; expires=" + n.toGMTString() + "; path=/";
						S.cookie = "key=" + s.key + "; expires=" + n.toGMTString() + "; path=/";
						console.log('Successfully tied this browser to "' + j + '".')
					} else console.log('"' + j + '" has already been taken. Please either double check the key, or choose another home.')
				}
			});
			return "..."
		};
		this.nojumpkeys = function() {};
		this.list = function() {
			location.href = "list"
		};
		this.enableAPI = function() {
			navigator.registerProtocolHandler("web+jsbin", jsbin.root + "?api=%s", "JS Bin API")
		};
		this.popout = function() {
			var j = {};
			E.done(function() {
				function m(y, A) {
					var G = {},
						L, P, aa;
					if (j[y] === cb) {
						G.text = A;
						G.diff = false
					} else {
						L = new o;
						P = L.patch_make(j[y], A);
						aa = L.patch_apply(P, j[y]);
						if (aa[0] == A) {
							G.text = L.patch_toText(P);
							G.diff = true
						} else {
							G.text = A;
							G.diff = false
						}
					}
					j[y] = A;
					return G
				}
				function s() {
					var y = c.javascript.getCode(),
						A = c.html.getCode(),
						G = {};
					G.javascript = m("javascript", y);
					G.html = m("html", A);
					if (G.html.text || G.javascript.text) {
						G.panel = J();
						y = c[G.panel].getCursor();
						G.line = y.line;
						G.ch = y.ch;
						forbind.send(G)
					}
				}
				var n = ib.remotekey || Math.abs(~~ (Math.random() * +new Date)).toString(32);
				typeof R.forbind !== "undefined" && $("a.popout").click(function() {
					if (!this.search) {
						$("#showlive").removeAttr("checked")[0].checked = false;
						Jc("live", false);
						forbind.on({
							join: function(y) {
								if (y.isme) {
									console.log("forbind ready");
									s()
								} else console.log("New remote view: ", y.user);
								X.bind("codeChange", Ab(s, 250))
							}
						});
						this.search = "?" + n;
						forbind.debug = false;
						forbind.create(n)
					}
				})
			}).fail(function() {
				console.log("F\u00f6rbind is not available, therefore we can't start the popout. Sorry :(")
			})
		};
		this.diff = function(j) {
			var m = R.location.pathname;
			m = m.split("/");
			var s = m.pop();
			if (s == "edit") s = m.pop();
			if (j) j *= 1;
			else {
				j = s;
				j--
			}!isNaN(j) && j > 0 ? $.ajax({
				url: m.join("/") + "/" + j + "/source",
				dataType: "json",
				success: function(n) {
					var y = new o,
						A = y.patch_make(n.javascript, c.javascript.getCode());
					if (y = y.patch_toText(A)) {
						console.log("--- javascript diff ---");
						console.log(decodeURIComponent(y))
					}
					y = new o;
					A = y.patch_make(n.html, c.html.getCode());
					if (y = y.patch_toText(A)) {
						console.log("--- html diff ---");
						console.log(decodeURIComponent(y))
					}
				}
			}) : console.log("requires a revision number to test against")
		};
		this.on = function() {
			vb.setItem("beta", "true");
			M.addClass("beta");
			this.popout()
		};
		this.off = function() {
			vb.removeItem("beta");
			M.removeClass("beta")
		};
		(this.active = vb.getItem("beta") == "true" || false) && this.on();
		try {
			jsbin.settings.home = S.cookie.split("home=")[1].split(";")[0];
			S.title = jsbin.settings.home + "@" + S.title
		} catch (ba) {}
	}).call(jsbin);
	var Sb = function() {
			function o() {}
			function u(k, r) {
				return Object.prototype.hasOwnProperty.call(k, r)
			}
			function M(k, r) {
				var z;
				for (z in r) if (u(r, z)) k[z] = r[z]
			}
			function X() {
				t.couch && M(da, sc);
				t.rhino && M(da, Pa);
				t.prototypejs && M(da, ca);
				t.node && M(da, B);
				t.devel && M(da, Zb);
				t.dojo && M(da, Wc);
				t.browser && M(da, Zc);
				t.nonstandard && M(da, Rb);
				t.jquery && M(da, a);
				t.mootools && M(da, p);
				t.wsh && M(da, V);
				if (t.globalstrict && t.strict !== false) t.strict = true
			}
			function ra(k, r, z) {
				var U = Math.floor(r / b.length * 100);
				throw {
					name: "JSHintError",
					line: r,
					character: z,
					message: k + " (" + U + "% scanned)."
				};
			}
			function E(k, r, z, U, T, ma) {
				var Ea;
				r = r || i;
				if (r.id === "(end)") r = h;
				Ea = r.line || 0;
				r = r.from || 0;
				z = {
					id: "(error)",
					raw: k,
					evidence: b[Ea - 1] || "",
					line: Ea,
					character: r,
					a: z,
					b: U,
					c: T,
					d: ma
				};
				z.reason = k.supplant(z);
				Sb.errors.push(z);
				t.passfail && ra("Stopping. ", Ea, r);
				O += 1;
				O >= t.maxerr && ra("Too many errors.", Ea, r);
				return z
			}
			function sa(k, r, z, U, T, ma, Ea) {
				return E(k, {
					line: r,
					from: z
				}, U, T, ma, Ea)
			}
			function pa(k, r, z, U, T, ma) {
				E(k, r, z, U, T, ma)
			}
			function ba(k, r, z, U, T, ma, Ea) {
				return pa(k, {
					line: r,
					from: z
				}, U, T, ma, Ea)
			}
			function j(k, r) {
				k === "hasOwnProperty" && E("'hasOwnProperty' is a really bad name.");
				if (u(e, k) && !e["(global)"]) if (e[k] === true) t.latedef && E("'{a}' was used before it was defined.", i, k);
				else t.shadow || E("'{a}' is already defined.", i, k);
				e[k] = r;
				if (e["(global)"]) {
					F[k] = e;
					if (u(Y, k)) {
						t.latedef && E("'{a}' was used before it was defined.", i, k);
						delete Y[k]
					}
				} else Qa[k] = e
			}
			function m() {
				var k, r, z, U = i.value,
					T;
				switch (U) {
				case "*/":
					pa("Unbegun comment.");
					break;
				case "/*members":
				case "/*member":
					U = "/*members";
					l || (l = {});
					r = l;
					break;
				case "/*jshint":
				case "/*jslint":
					r = t;
					z = Lc;
					break;
				case "/*global":
					r = da;
					break;
				default:
					pa("What?")
				}
				k = ja.token();
				a: for (;;) {
					for (;;) {
						if (k.type === "special" && k.value === "*/") break a;
						if (k.id !== "(endline)" && k.id !== ",") break;
						k = ja.token()
					}
					k.type !== "(string)" && k.type !== "(identifier)" && U !== "/*members" && pa("Bad option.", k);
					T = ja.token();
					if (T.id === ":") {
						T = ja.token();
						r === l && pa("Expected '{a}' and instead saw '{b}'.", k, "*/", ":");
						if (k.value === "indent" && (U === "/*jshint" || U === "/*jslint")) {
							k = +T.value;
							if (typeof k !== "number" || !isFinite(k) || k <= 0 || Math.floor(k) !== k) pa("Expected a small integer and instead saw '{a}'.", T, T.value);
							r.white = true;
							r.indent = k
						} else if (k.value === "maxerr" && (U === "/*jshint" || U === "/*jslint")) {
							k = +T.value;
							if (typeof k !== "number" || !isFinite(k) || k <= 0 || Math.floor(k) !== k) pa("Expected a small integer and instead saw '{a}'.", T, T.value);
							r.maxerr = k
						} else if (k.value === "maxlen" && (U === "/*jshint" || U === "/*jslint")) {
							k = +T.value;
							if (typeof k !== "number" || !isFinite(k) || k <= 0 || Math.floor(k) !== k) pa("Expected a small integer and instead saw '{a}'.", T, T.value);
							r.maxlen = k
						} else if (k.value == "validthis") if (e["(global)"]) pa("Option 'validthis' can't be used in a global scope.");
						else if (T.value === "true" || T.value === "false") r[k.value] = T.value === "true";
						else pa("Bad option value.", T);
						else if (T.value === "true") r[k.value] = true;
						else if (T.value === "false") r[k.value] = false;
						else pa("Bad option value.", T);
						k = ja.token()
					} else {
						if (U === "/*jshint" || U === "/*jslint") pa("Missing option value.", k);
						r[k.value] = false;
						k = T
					}
				}
				z && X()
			}
			function s(k) {
				k = k || 0;
				for (var r = 0, z; r <= k;) {
					(z = d[r]) || (z = d[r] = ja.token());
					r += 1
				}
				return z
			}
			function n(k, r) {
				switch (h.id) {
				case "(number)":
					i.id === "." && E("A dot following a number can be confused with a decimal point.", h);
					break;
				case "-":
					if (i.id === "-" || i.id === "--") E("Confusing minusses.");
					break;
				case "+":
					if (i.id === "+" || i.id === "++") E("Confusing plusses.");
					break
				}
				if (h.type === "(string)" || h.identifier) Yb = h.value;
				if (k && i.id !== k) if (r) i.id === "(end)" ? E("Unmatched '{a}'.", r, r.id) : E("Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'.", i, k, r.id, r.line, i.value);
				else if (i.type !== "(identifier)" || i.value !== k) E("Expected '{a}' and instead saw '{b}'.", i, k, i.value);
				ga = h;
				for (h = i;;) {
					i = d.shift() || ja.token();
					if (i.id === "(end)" || i.id === "(error)") return;
					if (i.type === "special") m();
					else if (i.id !== "(endline)") break
				}
			}
			function y(k, r) {
				var z, U = false;
				i.id === "(end)" && pa("Unexpected early end of program.", h);
				n();
				if (r) {
					Yb = "anonymous";
					e["(verb)"] = h.value
				}
				if (r === true && h.fud) z = h.fud();
				else {
					if (h.nud) z = h.nud();
					else if (i.type === "(number)" && h.id === ".") {
						E("A leading decimal point can be confused with a dot: '.{a}'.", h, i.value);
						n();
						return h
					} else pa("Expected an identifier and instead saw '{a}'.", h, h.id);
					for (; k < i.lbp;) {
						U = h.value == "Array";
						n();
						U && h.id == "(" && i.id == ")" && E("Use the array literal notation [].", h);
						if (h.led) z = h.led(z);
						else pa("Expected an operator and instead saw '{a}'.", h, h.id)
					}
				}
				return z
			}
			function A(k, r) {
				k = k || h;
				r = r || i;
				t.white && k.character !== r.from && k.line === r.line && E("Unexpected space after '{a}'.", r, k.value)
			}
			function G(k, r) {
				k = k || h;
				r = r || i;
				if (t.white && (k.character !== r.from || k.line !== r.line)) E("Unexpected space before '{a}'.", r, r.value)
			}
			function L(k, r) {
				k = k || h;
				r = r || i;
				t.white && !k.comment && k.line === r.line && A(k, r)
			}
			function P(k, r) {
				if (t.white) {
					k = k || h;
					r = r || i;
					k.line === r.line && k.character === r.from && E("Missing space after '{a}'.", i, k.value)
				}
			}
			function aa(k, r) {
				k = k || h;
				r = r || i;
				if (!t.laxbreak && k.line !== r.line) E("Bad line breaking before '{a}'.", r, r.id);
				else if (t.white) {
					k = k || h;
					r = r || i;
					k.character === r.from && E("Missing space after '{a}'.", i, k.value)
				}
			}
			function ta(k) {
				if (t.white && i.id !== "(end)") {
					k = qa + (k || 0);
					i.from !== k && E("Expected '{a}' to have an indentation at {b} instead at {c}.", i, i.value, k, i.from)
				}
			}
			function ya(k) {
				k = k || h;
				k.line !== i.line && E("Line breaking error '{a}'.", k, k.value)
			}
			function Ra() {
				if (h.line !== i.line) t.laxbreak || E("Bad line breaking before '{a}'.", h, i.id);
				else h.character !== i.from && t.white && E("Unexpected space after '{a}'.", i, h.value);
				n(",");
				P(h, i)
			}
			function va(k, r) {
				var z = nb[k];
				if (!z || typeof z !== "object") nb[k] = z = {
					id: k,
					lbp: r,
					value: k
				};
				return z
			}
			function Q(k) {
				return va(k, 0)
			}
			function ka(k, r) {
				k = Q(k);
				k.identifier = k.reserved = true;
				k.fud = r;
				return k
			}
			function Ba(k, r) {
				k = ka(k, r);
				k.block = true;
				return k
			}
			function Ca(k) {
				var r = k.id.charAt(0);
				if (r >= "a" && r <= "z" || r >= "A" && r <= "Z") k.identifier = k.reserved = true;
				return k
			}
			function Ma(k, r) {
				k = va(k, 150);
				Ca(k);
				k.nud = typeof r === "function" ? r : function() {
					this.right = y(150);
					this.arity = "unary";
					if (this.id === "++" || this.id === "--") if (t.plusplus) E("Unexpected use of '{a}'.", this, this.id);
					else if ((!this.right.identifier || this.right.reserved) && this.right.id !== "." && this.right.id !== "[") E("Bad operand.", this);
					return this
				};
				return k
			}
			function rb(k, r) {
				var z = Q(k);
				z.type = k;
				z.nud = r;
				return z
			}
			function eb(k, r) {
				k = rb(k, r);
				k.identifier = k.reserved = true;
				return k
			}
			function Eb(k, r) {
				return eb(k, function() {
					typeof r === "function" && r(this);
					return this
				})
			}
			function Cb(k, r, z, U) {
				k = va(k, z);
				Ca(k);
				k.led = function(T) {
					if (!U) {
						aa(ga, h);
						P(h, i)
					}
					if (typeof r === "function") return r(T, this);
					else {
						this.left = T;
						this.right = y(z);
						return this
					}
				};
				return k
			}
			function Nb(k, r) {
				k = va(k, 100);
				k.led = function(z) {
					aa(ga, h);
					P(h, i);
					var U = y(100);
					if (z && z.id === "NaN" || U && U.id === "NaN") E("Use the isNaN function to compare with NaN.", this);
					else r && r.apply(this, [z, U]);
					z.id === "!" && E("Confusing use of '{a}'.", z, "!");
					U.id === "!" && E("Confusing use of '{a}'.", z, "!");
					this.left = z;
					this.right = U;
					return this
				};
				return k
			}
			function lb(k) {
				return k && (k.type === "(number)" && +k.value === 0 || k.type === "(string)" && k.value === "" || k.type === "null" && !t.eqnull || k.type === "true" || k.type === "false" || k.type === "undefined")
			}
			function Db(k) {
				va(k, 20).exps = true;
				return Cb(k, function(r, z) {
					z.left = r;
					if (da[r.value] === false && Qa[r.value]["(global)"] === true) E("Read only.", r);
					else r["function"] && E("'{a}' is a function.", r, r.value);
					if (r) {
						if (r.id === "." || r.id === "[") {
							if (!r.left || r.left.value === "arguments") E("Bad assignment.", z);
							z.right = y(19);
							return z
						} else if (r.identifier && !r.reserved) {
							e[r.value] === "exception" && E("Do not assign to the exception parameter.", r);
							z.right = y(19);
							return z
						}
						r === nb["function"] && E("Expected an identifier in an assignment and instead saw a function invocation.", h)
					}
					pa("Bad assignment.", z)
				}, 20)
			}
			function hc(k, r, z) {
				k = va(k, z);
				Ca(k);
				k.led = typeof r === "function" ? r : function(U) {
					t.bitwise && E("Unexpected use of '{a}'.", this, this.id);
					this.left = U;
					this.right = y(z);
					return this
				};
				return k
			}
			function wb(k) {
				va(k, 20).exps = true;
				return Cb(k, function(r, z) {
					t.bitwise && E("Unexpected use of '{a}'.", z, z.id);
					P(ga, h);
					P(h, i);
					if (r) {
						if (r.id === "." || r.id === "[" || r.identifier && !r.reserved) {
							y(19);
							return z
						}
						r === nb["function"] && E("Expected an identifier in an assignment, and instead saw a function invocation.", h);
						return z
					}
					pa("Bad assignment.", z)
				}, 20)
			}
			function Kc(k) {
				k = va(k, 150);
				k.led = function(r) {
					if (t.plusplus) E("Unexpected use of '{a}'.", this, this.id);
					else if ((!r.identifier || r.reserved) && r.id !== "." && r.id !== "[") E("Bad operand.", this);
					this.left = r;
					return this
				};
				return k
			}
			function Xb(k) {
				if (i.identifier) {
					n();
					if (h.reserved && !t.es5) if (!k || h.value != "undefined") E("Expected an identifier and instead saw '{a}' (a reserved word).", h, h.id);
					return h.value
				}
			}
			function Ub(k) {
				if (k = Xb(k)) return k;
				h.id === "function" && i.id === "(" ? E("Missing name in function declaration.") : pa("Expected an identifier and instead saw '{a}'.", i, i.value)
			}
			function Ob(k) {
				var r = 0,
					z;
				if (!(i.id !== ";" || C)) for (;;) {
					z = s(r);
					if (z.reach) return;
					if (z.id !== "(endline)") {
						if (z.id === "function") {
							E("Inner functions should be listed at the top of the outer function.", z);
							break
						}
						E("Unreachable '{a}' after '{b}'.", z, z.value, k);
						break
					}
					r += 1
				}
			}
			function mc(k) {
				var r = qa,
					z = Qa,
					U = i;
				if (U.id === ";") {
					E("Unnecessary semicolon.", U);
					n(";")
				} else {
					if (U.identifier && !U.reserved && s().id === ":") {
						n();
						n(":");
						Qa = Object.create(z);
						j(U.value, "label");
						i.labelled || E("Label '{a}' on {b} statement.", i, U.value, i.value);
						ha.test(U.value + ":") && E("Label '{a}' looks like a javascript url.", U, U.value);
						i.label = U.value;
						U = i
					}
					k || ta();
					k = y(0, true);
					if (!U.block) {
						if (!t.expr && (!k || !k.exps)) E("Expected an assignment or function call and instead saw an expression.", h);
						else t.nonew && k.id === "(" && k.left.id === "new" && E("Do not use 'new' for side effects.");
						if (i.id !== ";") {
							if (!t.asi) if (!t.lastsemic || i.id != "}" || i.line != h.line) sa("Missing semicolon.", h.line, h.from + h.value.length)
						} else {
							A(h, i);
							n(";");
							P(h, i)
						}
					}
					qa = r;
					Qa = z;
					return k
				}
			}
			function dc() {
				if (i.value === "use strict") {
					Ta && E('Unnecessary "use strict".');
					n();
					n(";");
					Ta = true;
					t.newcap = true;
					return t.undef = true
				} else return false
			}
			function hb() {
				for (var k = []; !i.reach && i.id !== "(end)";) if (i.id === ";") {
					E("Unnecessary semicolon.");
					n(";")
				} else k.push(mc());
				return k
			}
			function Ib(k, r) {
				var z, U = fa,
					T = qa,
					ma = Ta,
					Ea = Qa,
					qb;
				fa = k;
				Qa = Object.create(Qa);
				P(h, i);
				qb = i;
				if (i.id === "{") {
					n("{");
					if (i.id !== "}" || h.line !== i.line) {
						for (qa += t.indent; !k && i.from > qa;) qa += t.indent;
						!k && !dc() && !ma && t.strict && e["(context)"]["(global)"] && E('Missing "use strict" statement.');
						z = hb();
						Ta = ma;
						qa -= t.indent;
						ta()
					}
					n("}", qb);
					qa = T
				} else if (k) {
					if (!r || t.curly) E("Expected '{a}' and instead saw '{b}'.", i, "{", i.value);
					C = true;
					z = [mc()];
					C = false
				} else pa("Expected '{a}' and instead saw '{b}'.", i, "{", i.value);
				e["(verb)"] = null;
				Qa = Ea;
				fa = U;
				if (k && t.noempty && (!z || z.length === 0)) E("Empty block.");
				return z
			}
			function N(k) {
				l && typeof l[k] !== "boolean" && E("Unexpected /*member '{a}'.", h, k);
				if (typeof f[k] === "number") f[k] += 1;
				else f[k] = 1
			}
			function Fa(k) {
				var r = k.value;
				k = k.line;
				var z = Y[r];
				if (typeof z === "function") z = false;
				if (z) z[z.length - 1] !== k && z.push(k);
				else {
					z = [k];
					Y[r] = z
				}
			}
			function Ka() {
				var k = Xb(true);
				if (!k) if (i.id === "(string)") {
					k = i.value;
					n()
				} else if (i.id === "(number)") {
					k = i.value.toString();
					n()
				}
				return k
			}
			function Wa() {
				var k, r = i,
					z = [];
				n("(");
				L();
				if (i.id === ")") {
					n(")");
					L(ga, h)
				} else for (;;) {
					k = Ub(true);
					z.push(k);
					j(k, "parameter");
					if (i.id === ",") Ra();
					else {
						n(")", r);
						L(ga, h);
						return z
					}
				}
			}
			function kb(k, r) {
				var z = t,
					U = Qa;
				t = Object.create(t);
				Qa = Object.create(Qa);
				r = e = {
					"(name)": k || '"' + Yb + '"',
					"(line)": i.line,
					"(context)": e,
					"(breakage)": 0,
					"(loopage)": 0,
					"(scope)": Qa,
					"(statement)": r
				};
				h.funct = e;
				H.push(e);
				k && j(k, "function");
				e["(params)"] = Wa();
				Ib(false);
				Qa = U;
				t = z;
				e["(last)"] = h.line;
				e = e["(context)"];
				return r
			}
			function tb() {
				function k() {
					var z = {},
						U = i;
					n("{");
					if (i.id !== "}") for (;;) {
						if (i.id === "(end)") pa("Missing '}' to match '{' from line {a}.", i, U.line);
						else if (i.id === "}") {
							E("Unexpected comma.", h);
							break
						} else if (i.id === ",") pa("Unexpected comma.", i);
						else i.id !== "(string)" && E("Expected a string and instead saw {a}.", i, i.value);
						if (z[i.value] === true) E("Duplicate key '{a}'.", i, i.value);
						else if (i.value === "__proto__" && !t.proto || i.value === "__iterator__" && !t.iterator) E("The '{a}' key may produce unexpected results.", i, i.value);
						else z[i.value] = true;
						n();
						n(":");
						tb();
						if (i.id !== ",") break;
						n(",")
					}
					n("}")
				}
				function r() {
					var z = i;
					n("[");
					if (i.id !== "]") for (;;) {
						if (i.id === "(end)") pa("Missing ']' to match '[' from line {a}.", i, z.line);
						else if (i.id === "]") {
							E("Unexpected comma.", h);
							break
						} else i.id === "," && pa("Unexpected comma.", i);
						tb();
						if (i.id !== ",") break;
						n(",")
					}
					n("]")
				}
				switch (i.id) {
				case "{":
					k();
					break;
				case "[":
					r();
					break;
				case "true":
				case "false":
				case "null":
				case "(number)":
				case "(string)":
					n();
					break;
				case "-":
					n("-");
					h.character !== i.from && E("Unexpected space after '-'.", h);
					A(h, i);
					n("(number)");
					break;
				default:
					pa("Expected a JSON value.", i)
				}
			}
			var Yb, rd = {
				"<": true,
				"<=": true,
				"==": true,
				"===": true,
				"!==": true,
				"!=": true,
				">": true,
				">=": true,
				"+": true,
				"-": true,
				"*": true,
				"/": true,
				"%": true
			},
				Lc = {
					asi: true,
					bitwise: true,
					boss: true,
					browser: true,
					couch: true,
					curly: true,
					debug: true,
					devel: true,
					dojo: true,
					eqeqeq: true,
					eqnull: true,
					es5: true,
					evil: true,
					expr: true,
					forin: true,
					globalstrict: true,
					immed: true,
					iterator: true,
					jquery: true,
					lastsemic: true,
					latedef: true,
					laxbreak: true,
					loopfunc: true,
					mootools: true,
					newcap: true,
					noarg: true,
					node: true,
					noempty: true,
					nonew: true,
					nonstandard: true,
					nomen: true,
					onevar: true,
					onecase: true,
					passfail: true,
					plusplus: true,
					proto: true,
					prototypejs: true,
					regexdash: true,
					regexp: true,
					rhino: true,
					undef: true,
					scripturl: true,
					shadow: true,
					strict: true,
					sub: true,
					supernew: true,
					trailing: true,
					validthis: true,
					white: true,
					wsh: true
				},
				Zc = {
					ArrayBuffer: false,
					ArrayBufferView: false,
					Audio: false,
					addEventListener: false,
					applicationCache: false,
					blur: false,
					clearInterval: false,
					clearTimeout: false,
					close: false,
					closed: false,
					DataView: false,
					defaultStatus: false,
					document: false,
					event: false,
					FileReader: false,
					Float32Array: false,
					Float64Array: false,
					FormData: false,
					focus: false,
					frames: false,
					getComputedStyle: false,
					HTMLElement: false,
					history: false,
					Int16Array: false,
					Int32Array: false,
					Int8Array: false,
					Image: false,
					length: false,
					localStorage: false,
					location: false,
					moveBy: false,
					moveTo: false,
					name: false,
					navigator: false,
					onbeforeunload: true,
					onblur: true,
					onerror: true,
					onfocus: true,
					onload: true,
					onresize: true,
					onunload: true,
					open: false,
					openDatabase: false,
					opener: false,
					Option: false,
					parent: false,
					print: false,
					removeEventListener: false,
					resizeBy: false,
					resizeTo: false,
					screen: false,
					scroll: false,
					scrollBy: false,
					scrollTo: false,
					sessionStorage: false,
					setInterval: false,
					setTimeout: false,
					SharedWorker: false,
					status: false,
					top: false,
					Uint16Array: false,
					Uint32Array: false,
					Uint8Array: false,
					WebSocket: false,
					window: false,
					Worker: false,
					XMLHttpRequest: false,
					XPathEvaluator: false,
					XPathException: false,
					XPathExpression: false,
					XPathNamespace: false,
					XPathNSResolver: false,
					XPathResult: false
				},
				sc = {
					require: false,
					respond: false,
					getRow: false,
					emit: false,
					send: false,
					start: false,
					sum: false,
					log: false,
					exports: false,
					module: false
				},
				Zb = {
					alert: false,
					confirm: false,
					console: false,
					Debug: false,
					opera: false,
					prompt: false
				},
				Wc = {
					dojo: false,
					dijit: false,
					dojox: false,
					define: false,
					require: false
				},
				Gb = {
					"\u0008": "\\b",
					"\t": "\\t",
					"\n": "\\n",
					"\u000c": "\\f",
					"\r": "\\r",
					'"': '\\"',
					"/": "\\/",
					"\\": "\\\\"
				},
				e, w = ["closure", "exception", "global", "label", "outer", "unused", "var"],
				H, F, Y, fa, qa, gb, a = {
					$: false,
					jQuery: false
				},
				b, d, f, l, p = {
					$: false,
					$$: false,
					Assets: false,
					Browser: false,
					Chain: false,
					Class: false,
					Color: false,
					Cookie: false,
					Core: false,
					Document: false,
					DomReady: false,
					DOMReady: false,
					Drag: false,
					Element: false,
					Elements: false,
					Event: false,
					Events: false,
					Fx: false,
					Group: false,
					Hash: false,
					HtmlTable: false,
					Iframe: false,
					IframeShim: false,
					InputValidator: false,
					instanceOf: false,
					Keyboard: false,
					Locale: false,
					Mask: false,
					MooTools: false,
					Native: false,
					Options: false,
					OverText: false,
					Request: false,
					Scroller: false,
					Slick: false,
					Slider: false,
					Sortables: false,
					Spinner: false,
					Swiff: false,
					Tips: false,
					Type: false,
					typeOf: false,
					URI: false,
					Window: false
				},
				i, B = {
					__filename: false,
					__dirname: false,
					exports: false,
					Buffer: false,
					GLOBAL: false,
					global: false,
					module: false,
					process: false,
					require: false
				},
				C, t, da, W, ga, ca = {
					$: false,
					$$: false,
					$A: false,
					$F: false,
					$H: false,
					$R: false,
					$break: false,
					$continue: false,
					$w: false,
					Abstract: false,
					Ajax: false,
					Class: false,
					Enumerable: false,
					Element: false,
					Event: false,
					Field: false,
					Form: false,
					Hash: false,
					Insertion: false,
					ObjectRange: false,
					PeriodicalExecuter: false,
					Position: false,
					Prototype: false,
					Selector: false,
					Template: false,
					Toggle: false,
					Try: false,
					Autocompleter: false,
					Builder: false,
					Control: false,
					Draggable: false,
					Draggables: false,
					Droppables: false,
					Effect: false,
					Sortable: false,
					SortableObserver: false,
					Sound: false,
					Scriptaculous: false
				},
				Pa = {
					defineClass: false,
					deserialize: false,
					gc: false,
					help: false,
					load: false,
					loadClass: false,
					print: false,
					quit: false,
					readFile: false,
					readUrl: false,
					runCommand: false,
					seal: false,
					serialize: false,
					spawn: false,
					sync: false,
					toint32: false,
					version: false
				},
				Qa, bb, fb = {
					Array: false,
					Boolean: false,
					Date: false,
					decodeURI: false,
					decodeURIComponent: false,
					encodeURI: false,
					encodeURIComponent: false,
					Error: false,
					eval: false,
					EvalError: false,
					Function: false,
					hasOwnProperty: false,
					isFinite: false,
					isNaN: false,
					JSON: false,
					Math: false,
					Number: false,
					Object: false,
					parseInt: false,
					parseFloat: false,
					RangeError: false,
					ReferenceError: false,
					RegExp: false,
					String: false,
					SyntaxError: false,
					TypeError: false,
					URIError: false
				},
				Rb = {
					escape: false,
					unescape: false
				},
				Ta, nb = {},
				Hb, h, x, O, V = {
					ActiveXObject: true,
					Enumerator: true,
					GetObject: true,
					ScriptEngine: true,
					ScriptEngineBuildVersion: true,
					ScriptEngineMajorVersion: true,
					ScriptEngineMinorVersion: true,
					VBArray: true,
					WSH: true,
					WScript: true
				},
				ea, ia, xa, Da, Xa, D, ha, wa;
			(function() {
				ea = /[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/;
				ia = /^\s*([(){}\[.,:;'"~\?\]#@]|==?=?|\/(\*(jshint|jslint|members?|global)?|=|\/)?|\*[\/=]?|\+(?:=|\++)?|-(?:=|-+)?|%=?|&[&=]?|\|[|=]?|>>?>?=?|<([\/=!]|\!(\[|--)?|<=?)?|\^=?|\!=?=?|[a-zA-Z_$][a-zA-Z0-9_$]*|[0-9]+([xX][0-9a-fA-F]+|\.[0-9]*)?([eE][+\-]?[0-9]+)?)/;
				xa = /[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/;
				Da = /[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
				Xa = /\*\/|\/\*/;
				D = /^([a-zA-Z_$][a-zA-Z0-9_$]*)$/;
				ha = /^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i;
				wa = /^\s*\/\*\s*falls\sthrough\s*\*\/\s*$/
			})();
			if (typeof Array.isArray !== "function") Array.isArray = function(k) {
				return Object.prototype.toString.apply(k) === "[object Array]"
			};
			if (typeof Object.create !== "function") Object.create = function(k) {
				o.prototype = k;
				return new o
			};
			if (typeof Object.keys !== "function") Object.keys = function(k) {
				var r = [],
					z;
				for (z in k) u(k, z) && r.push(z);
				return r
			};
			if (typeof String.prototype.entityify !== "function") String.prototype.entityify = function() {
				return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
			};
			if (typeof String.prototype.isAlpha !== "function") String.prototype.isAlpha = function() {
				return this >= "a" && this <= "z\uffff" || this >= "A" && this <= "Z\uffff"
			};
			if (typeof String.prototype.isDigit !== "function") String.prototype.isDigit = function() {
				return this >= "0" && this <= "9"
			};
			if (typeof String.prototype.supplant !== "function") String.prototype.supplant = function(k) {
				return this.replace(/\{([^{}]*)\}/g, function(r, z) {
					z = k[z];
					return typeof z === "string" || typeof z === "number" ? z : r
				})
			};
			if (typeof String.prototype.name !== "function") String.prototype.name = function() {
				if (D.test(this)) return this;
				if (xa.test(this)) return '"' + this.replace(Da, function(k) {
					var r = Gb[k];
					if (r) return r;
					return "\\u" + ("0000" + k.charCodeAt().toString(16)).slice(-4)
				}) + '"';
				return '"' + this + '"'
			};
			var ja = function() {
					function k() {
						var Ea;
						if (T >= b.length) return false;
						z = 1;
						ma = b[T];
						T += 1;
						Ea = ma.search(/ \t/);
						Ea >= 0 && sa("Mixed spaces and tabs.", T, Ea + 1);
						ma = ma.replace(/\t/g, Hb);
						Ea = ma.search(ea);
						Ea >= 0 && sa("Unsafe character.", T, Ea);
						t.maxlen && t.maxlen < ma.length && sa("Line too long.", T, ma.length);
						Ea = ma.search(/\s+$/);
						t.trailing && ~Ea && !~ma.search(/^\s+$/) && sa("Trailing whitespace.", T, Ea);
						return true
					}
					function r(Ea, qb) {
						var ab;
						ab = Ea === "(color)" || Ea === "(range)" ? {
							type: Ea
						} : Ea === "(punctuator)" || Ea === "(identifier)" && u(nb, qb) ? nb[qb] || nb["(error)"] : nb[Ea];
						ab = Object.create(ab);
						if (Ea === "(string)" || Ea === "(range)")!t.scripturl && ha.test(qb) && sa("Script URL.", T, U);
						if (Ea === "(identifier)") {
							ab.identifier = true;
							if (qb === "__proto__" && !t.proto) sa("The '{a}' property is deprecated.", T, U, qb);
							else if (qb === "__iterator__" && !t.iterator) sa("'{a}' is only available in JavaScript 1.7.", T, U, qb);
							else if (t.nomen && (qb.charAt(0) === "_" || qb.charAt(qb.length - 1) === "_")) sa("Unexpected {a} in '{b}'.", T, U, "dangling '_'", qb)
						}
						ab.value = qb;
						ab.line = T;
						ab.character = z;
						ab.from = U;
						Ea = ab.id;
						if (Ea !== "(endline)") W = Ea && ("(,=:[!&|?{};".indexOf(Ea.charAt(Ea.length - 1)) >= 0 || Ea === "return");
						return ab
					}
					var z, U, T, ma;
					return {
						init: function(Ea) {
							b = typeof Ea === "string" ? Ea.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n") : Ea;
							if (b[0] && b[0].substr(0, 2) == "#!") b[0] = "";
							T = 0;
							k();
							U = 1
						},
						range: function(Ea, qb) {
							var ab = "";
							U = z;
							for (ma.charAt(0) !== Ea && ba("Expected '{a}' and instead saw '{b}'.", T, z, Ea, ma.charAt(0));;) {
								ma = ma.slice(1);
								z += 1;
								Ea = ma.charAt(0);
								switch (Ea) {
								case "":
									ba("Missing '{a}'.", T, z, Ea);
									break;
								case qb:
									ma = ma.slice(1);
									z += 1;
									return r("(range)", ab);
								case "\\":
									sa("Unexpected '{a}'.", T, z, Ea)
								}
								ab += Ea
							}
						},
						token: function() {
							function Ea(bc) {
								if (bc = bc.exec(ma)) {
									Ha = bc[0].length;
									bc = bc[1];
									Na = bc.charAt(0);
									ma = ma.substr(Ha);
									U = z + Ha - bc.length;
									z += Ha;
									return bc
								}
							}
							function qb(bc) {
								function Sd($c) {
									var Tc = parseInt(ma.substr(Wb + 1, $c), 16);
									Wb += $c;
									Tc >= 32 && Tc <= 126 && Tc !== 34 && Tc !== 92 && Tc !== 39 && sa("Unnecessary escapement.", T, z);
									z += $c;
									Lb = String.fromCharCode(Tc)
								}
								var Lb, Wb, kd = "";
								gb && bc !== '"' && sa("Strings must use doublequote.", T, z);
								for (Wb = 0;;) {
									for (; Wb >= ma.length;) {
										Wb = 0;
										k() || ba("Unclosed string.", T, U)
									}
									Lb = ma.charAt(Wb);
									if (Lb === bc) {
										z += 1;
										ma = ma.substr(Wb + 1);
										return r("(string)", kd, bc)
									}
									if (Lb < " ") {
										if (Lb === "\n" || Lb === "\r") break;
										sa("Control character in string: {a}.", T, z + Wb, ma.slice(0, Wb))
									} else if (Lb === "\\") {
										Wb += 1;
										z += 1;
										Lb = ma.charAt(Wb);
										switch (Lb) {
										case "\\":
										case '"':
										case "/":
											break;
										case "'":
											gb && sa("Avoid \\'.", T, z);
											break;
										case "b":
											Lb = "\u0008";
											break;
										case "f":
											Lb = "\u000c";
											break;
										case "n":
											Lb = "\n";
											break;
										case "r":
											Lb = "\r";
											break;
										case "t":
											Lb = "\t";
											break;
										case "u":
											Sd(4);
											break;
										case "v":
											gb && sa("Avoid \\v.", T, z);
											Lb = "\u000b";
											break;
										case "x":
											gb && sa("Avoid \\x-.", T, z);
											Sd(2);
											break;
										default:
											sa("Bad escapement.", T, z)
										}
									}
									kd += Lb;
									z += 1;
									Wb += 1
								}
							}
							for (var ab, Na, ob, Mb, Ha, pb;;) {
								if (!ma) return r(k() ? "(endline)" : "(end)", "");
								if (ob = Ea(ia)) {
									if (Na.isAlpha() || Na === "_" || Na === "$") return r("(identifier)", ob);
									if (Na.isDigit()) {
										isFinite(Number(ob)) || sa("Bad number '{a}'.", T, z, ob);
										ma.substr(0, 1).isAlpha() && sa("Missing space after '{a}'.", T, z, ob);
										if (Na === "0") {
											Mb = ob.substr(1, 1);
											if (Mb.isDigit()) h.id !== "." && sa("Don't use extra leading zeros '{a}'.", T, z, ob);
											else if (gb && (Mb === "x" || Mb === "X")) sa("Avoid 0x-. '{a}'.", T, z, ob)
										}
										ob.substr(ob.length - 1) === "." && sa("A trailing decimal point can be confused with a dot '{a}'.", T, z, ob);
										return r("(number)", ob)
									}
									switch (ob) {
									case '"':
									case "'":
										return qb(ob);
									case "//":
										bb && sa("Unexpected comment.", T, z);
										ma = "";
										h.comment = true;
										break;
									case "/*":
										for (bb && sa("Unexpected comment.", T, z);;) {
											Mb = ma.search(Xa);
											if (Mb >= 0) break;
											k() || ba("Unclosed comment.", T, z)
										}
										z += Mb + 2;
										ma.substr(Mb, 1) === "/" && ba("Nested comment.", T, z);
										ma = ma.substr(Mb + 2);
										h.comment = true;
										break;
									case "/*members":
									case "/*member":
									case "/*jshint":
									case "/*jslint":
									case "/*global":
									case "*/":
										return {
											value: ob,
											type: "special",
											line: T,
											character: z,
											from: U
										};
									case "":
										break;
									case "/":
										h.id === "/=" && ba("A regular expression literal can be confused with '/='.", T, U);
										if (W) {
											for (Ha = ob = Mb = 0;;) {
												ab = true;
												Na = ma.charAt(Ha);
												Ha += 1;
												switch (Na) {
												case "":
													ba("Unclosed regular expression.", T, U);
													return;
												case "/":
													Mb > 0 && sa("Unescaped '{a}'.", T, U + Ha, "/");
													Na = ma.substr(0, Ha - 1);
													for (pb = {
														g: true,
														i: true,
														m: true
													}; pb[ma.charAt(Ha)] === true;) {
														pb[ma.charAt(Ha)] = false;
														Ha += 1
													}
													z += Ha;
													ma = ma.substr(Ha);
													pb = ma.charAt(0);
													if (pb === "/" || pb === "*") ba("Confusing regular expression.", T, U);
													return r("(regexp)", Na);
												case "\\":
													Na = ma.charAt(Ha);
													if (Na < " ") sa("Unexpected control character in regular expression.", T, U + Ha);
													else Na === "<" && sa("Unexpected escaped character '{a}' in regular expression.", T, U + Ha, Na);
													Ha += 1;
													break;
												case "(":
													Mb += 1;
													ab = false;
													if (ma.charAt(Ha) === "?") {
														Ha += 1;
														switch (ma.charAt(Ha)) {
														case ":":
														case "=":
														case "!":
															Ha += 1;
															break;
														default:
															sa("Expected '{a}' and instead saw '{b}'.", T, U + Ha, ":", ma.charAt(Ha))
														}
													} else ob += 1;
													break;
												case "|":
													ab = false;
													break;
												case ")":
													if (Mb === 0) sa("Unescaped '{a}'.", T, U + Ha, ")");
													else Mb -= 1;
													break;
												case " ":
													for (pb = 1; ma.charAt(Ha) === " ";) {
														Ha += 1;
														pb += 1
													}
													pb > 1 && sa("Spaces are hard to count. Use {{a}}.", T, U + Ha, pb);
													break;
												case "[":
													Na = ma.charAt(Ha);
													if (Na === "^") {
														Ha += 1;
														if (t.regexp) sa("Insecure '{a}'.", T, U + Ha, Na);
														else ma.charAt(Ha) === "]" && ba("Unescaped '{a}'.", T, U + Ha, "^")
													}
													pb = false;
													if (Na === "]") {
														sa("Empty class.", T, U + Ha - 1);
														pb = true
													}
													a: do {
														Na = ma.charAt(Ha);
														Ha += 1;
														switch (Na) {
														case "[":
														case "^":
															sa("Unescaped '{a}'.", T, U + Ha, Na);
															pb = true;
															break;
														case "-":
															if (pb) pb = false;
															else {
																sa("Unescaped '{a}'.", T, U + Ha, "-");
																pb = true
															}
															break;
														case "]":
															!pb && !t.regexdash && sa("Unescaped '{a}'.", T, U + Ha - 1, "-");
															break a;
														case "\\":
															Na = ma.charAt(Ha);
															if (Na < " ") sa("Unexpected control character in regular expression.", T, U + Ha);
															else Na === "<" && sa("Unexpected escaped character '{a}' in regular expression.", T, U + Ha, Na);
															Ha += 1;
															pb = true;
															break;
														case "/":
															sa("Unescaped '{a}'.", T, U + Ha - 1, "/");
															pb = true;
															break;
														case "<":
															pb = true;
															break;
														default:
															pb = true
														}
													} while (Na);
													break;
												case ".":
													t.regexp && sa("Insecure '{a}'.", T, U + Ha, Na);
													break;
												case "]":
												case "?":
												case "{":
												case "}":
												case "+":
												case "*":
													sa("Unescaped '{a}'.", T, U + Ha, Na)
												}
												if (ab) switch (ma.charAt(Ha)) {
												case "?":
												case "+":
												case "*":
													Ha += 1;
													if (ma.charAt(Ha) === "?") Ha += 1;
													break;
												case "{":
													Ha += 1;
													Na = ma.charAt(Ha);
													if (Na < "0" || Na > "9") sa("Expected a number and instead saw '{a}'.", T, U + Ha, Na);
													Ha += 1;
													for (pb = +Na;;) {
														Na = ma.charAt(Ha);
														if (Na < "0" || Na > "9") break;
														Ha += 1;
														pb = +Na + pb * 10
													}
													ab = pb;
													if (Na === ",") {
														Ha += 1;
														ab = Infinity;
														Na = ma.charAt(Ha);
														if (Na >= "0" && Na <= "9") {
															Ha += 1;
															for (ab = +Na;;) {
																Na = ma.charAt(Ha);
																if (Na < "0" || Na > "9") break;
																Ha += 1;
																ab = +Na + ab * 10
															}
														}
													}
													if (ma.charAt(Ha) !== "}") sa("Expected '{a}' and instead saw '{b}'.", T, U + Ha, "}", Na);
													else Ha += 1;
													if (ma.charAt(Ha) === "?") Ha += 1;
													pb > ab && sa("'{a}' should not be greater than '{b}'.", T, U + Ha, pb, ab)
												}
											}
											Na = ma.substr(0, Ha - 1);
											z += Ha;
											ma = ma.substr(Ha);
											return r("(regexp)", Na)
										}
										return r("(punctuator)", ob);
									case "#":
										return r("(punctuator)", ob);
									default:
										return r("(punctuator)", ob)
									}
								} else {
									for (Na = ob = ""; ma && ma < "!";) ma = ma.substr(1);
									ma && ba("Unexpected '{a}'.", T, z, ma.substr(0, 1))
								}
							}
						}
					}
				}();
			rb("(number)", function() {
				return this
			});
			rb("(string)", function() {
				return this
			});
			nb["(identifier)"] = {
				type: "(identifier)",
				lbp: 0,
				identifier: true,
				nud: function() {
					var k = this.value,
						r = Qa[k],
						z;
					if (typeof r === "function") r = cb;
					else if (typeof r === "boolean") {
						z = e;
						e = H[0];
						j(k, "var");
						r = e;
						e = z
					}
					if (e === r) switch (e[k]) {
					case "unused":
						e[k] = "var";
						break;
					case "unction":
						e[k] = "function";
						this["function"] = true;
						break;
					case "function":
						this["function"] = true;
						break;
					case "label":
						E("'{a}' is a statement label.", h, k);
						break
					} else if (e["(global)"]) {
						Yb != "typeof" && Yb != "delete" && t.undef && typeof da[k] !== "boolean" && E("'{a}' is not defined.", h, k);
						Fa(h)
					} else switch (e[k]) {
					case "closure":
					case "function":
					case "var":
					case "unused":
						E("'{a}' used out of scope.", h, k);
						break;
					case "label":
						E("'{a}' is a statement label.", h, k);
						break;
					case "outer":
					case "global":
						break;
					default:
						if (r === true) e[k] = true;
						else if (r === null) {
							E("'{a}' is not allowed.", h, k);
							Fa(h)
						} else if (typeof r !== "object") {
							if (Yb != "typeof" && Yb != "delete" && t.undef) E("'{a}' is not defined.", h, k);
							else e[k] = true;
							Fa(h)
						} else switch (r[k]) {
						case "function":
						case "unction":
							this["function"] = true;
							r[k] = "closure";
							e[k] = r["(global)"] ? "global" : "outer";
							break;
						case "var":
						case "unused":
							r[k] = "closure";
							e[k] = r["(global)"] ? "global" : "outer";
							break;
						case "closure":
						case "parameter":
							e[k] = r["(global)"] ? "global" : "outer";
							break;
						case "label":
							E("'{a}' is a statement label.", h, k)
						}
					}
					return this
				},
				led: function() {
					pa("Expected an operator and instead saw '{a}'.", i, i.value)
				}
			};
			rb("(regexp)", function() {
				return this
			});
			Q("(endline)");
			Q("(begin)");
			Q("(end)").reach = true;
			Q("</").reach = true;
			Q("<!");
			Q("<!--");
			Q("--\>");
			Q("(error)").reach = true;
			Q("}").reach = true;
			Q(")");
			Q("]");
			Q('"').reach = true;
			Q("'").reach = true;
			Q(";");
			Q(":").reach = true;
			Q(",");
			Q("#");
			Q("@");
			eb("else");
			eb("case").reach = true;
			eb("catch");
			eb("default").reach = true;
			eb("finally");
			Eb("arguments", function(k) {
				Ta && e["(global)"] && E("Strict violation.", k)
			});
			Eb("eval");
			Eb("false");
			Eb("Infinity");
			Eb("NaN");
			Eb("null");
			Eb("this", function(k) {
				if (Ta && !t.validthis && (e["(statement)"] && e["(name)"].charAt(0) > "Z" || e["(global)"])) E("Possible strict violation.", k)
			});
			Eb("true");
			Eb("undefined");
			Db("=", "assign", 20);
			Db("+=", "assignadd", 20);
			Db("-=", "assignsub", 20);
			Db("*=", "assignmult", 20);
			Db("/=", "assigndiv", 20).nud = function() {
				pa("A regular expression literal can be confused with '/='.")
			};
			Db("%=", "assignmod", 20);
			wb("&=", "assignbitand", 20);
			wb("|=", "assignbitor", 20);
			wb("^=", "assignbitxor", 20);
			wb("<<=", "assignshiftleft", 20);
			wb(">>=", "assignshiftright", 20);
			wb(">>>=", "assignshiftrightunsigned", 20);
			Cb("?", function(k, r) {
				r.left = k;
				r.right = y(10);
				n(":");
				r["else"] = y(10);
				return r
			}, 30);
			Cb("||", "or", 40);
			Cb("&&", "and", 50);
			hc("|", "bitor", 70);
			hc("^", "bitxor", 80);
			hc("&", "bitand", 90);
			Nb("==", function(k, r) {
				if (!(t.eqnull && (k.value == "null" || r.value == "null")) && t.eqeqeq) E("Expected '{a}' and instead saw '{b}'.", this, "===", "==");
				else if (lb(k)) E("Use '{a}' to compare with '{b}'.", this, "===", k.value);
				else lb(r) && E("Use '{a}' to compare with '{b}'.", this, "===", r.value);
				return this
			});
			Nb("===");
			Nb("!=", function(k, r) {
				if (!(t.eqnull && (k.value == "null" || r.value == "null")) && t.eqeqeq) E("Expected '{a}' and instead saw '{b}'.", this, "!==", "!=");
				else if (lb(k)) E("Use '{a}' to compare with '{b}'.", this, "!==", k.value);
				else lb(r) && E("Use '{a}' to compare with '{b}'.", this, "!==", r.value);
				return this
			});
			Nb("!==");
			Nb("<");
			Nb(">");
			Nb("<=");
			Nb(">=");
			hc("<<", "shiftleft", 120);
			hc(">>", "shiftright", 120);
			hc(">>>", "shiftrightunsigned", 120);
			Cb("in", "in", 120);
			Cb("instanceof", "instanceof", 120);
			Cb("+", function(k, r) {
				var z = y(130);
				if (k && z && k.id === "(string)" && z.id === "(string)") {
					k.value += z.value;
					k.character = z.character;
					!t.scripturl && ha.test(k.value) && E("JavaScript URL.", k);
					return k
				}
				r.left = k;
				r.right = z;
				return r
			}, 130);
			Ma("+", "num");
			Ma("+++", function() {
				E("Confusing pluses.");
				this.right = y(150);
				this.arity = "unary";
				return this
			});
			Cb("+++", function(k) {
				E("Confusing pluses.");
				this.left = k;
				this.right = y(130);
				return this
			}, 130);
			Cb("-", "sub", 130);
			Ma("-", "neg");
			Ma("---", function() {
				E("Confusing minuses.");
				this.right = y(150);
				this.arity = "unary";
				return this
			});
			Cb("---", function(k) {
				E("Confusing minuses.");
				this.left = k;
				this.right = y(130);
				return this
			}, 130);
			Cb("*", "mult", 140);
			Cb("/", "div", 140);
			Cb("%", "mod", 140);
			Kc("++", "postinc");
			Ma("++", "preinc");
			nb["++"].exps = true;
			Kc("--", "postdec");
			Ma("--", "predec");
			nb["--"].exps = true;
			Ma("delete", function() {
				var k = y(0);
				if (!k || k.id !== "." && k.id !== "[") E("Variables should not be deleted.");
				this.first = k;
				return this
			}).exps = true;
			Ma("~", function() {
				t.bitwise && E("Unexpected '{a}'.", this, "~");
				y(150);
				return this
			});
			Ma("!", function() {
				this.right = y(150);
				this.arity = "unary";
				rd[this.right.id] === true && E("Confusing use of '{a}'.", this, "!");
				return this
			});
			Ma("typeof", "typeof");
			Ma("new", function() {
				var k = y(155),
					r;
				if (k && k.id !== "function") if (k.identifier) {
					k["new"] = true;
					switch (k.value) {
					case "Object":
						E("Use the object literal notation {}.", h);
						break;
					case "Number":
					case "String":
					case "Boolean":
					case "Math":
					case "JSON":
						E("Do not use {a} as a constructor.", h, k.value);
						break;
					case "Function":
						t.evil || E("The Function constructor is eval.");
						break;
					case "Date":
					case "RegExp":
						break;
					default:
						if (k.id !== "function") {
							r = k.value.substr(0, 1);
							if (t.newcap && (r < "A" || r > "Z")) E("A constructor name should start with an uppercase letter.", h)
						}
					}
				} else k.id !== "." && k.id !== "[" && k.id !== "(" && E("Bad constructor.", h);
				else t.supernew || E("Weird construction. Delete 'new'.", this);
				A(h, i);
				i.id !== "(" && !t.supernew && E("Missing '()' invoking a constructor.");
				this.first = k;
				return this
			});
			nb["new"].exps = true;
			Ma("void").exps = true;
			Cb(".", function(k, r) {
				A(ga, h);
				G();
				var z = Ub();
				typeof z === "string" && N(z);
				r.left = k;
				r.right = z;
				if (t.noarg && k && k.value === "arguments" && (z === "callee" || z === "caller")) E("Avoid arguments.{a}.", k, z);
				else if (!t.evil && k && k.value === "document" && (z === "write" || z === "writeln")) E("document.write can be a form of eval.", k);
				if (!t.evil && (z === "eval" || z === "execScript")) E("eval is evil.");
				return r
			}, 160, true);
			Cb("(", function(k, r) {
				ga.id !== "}" && ga.id !== ")" && G(ga, h);
				L();
				t.immed && !k.immed && k.id === "function" && E("Wrap an immediate function invocation in parentheses to assist the reader in understanding that the expression is the result of a function, and not the function itself.");
				var z = 0,
					U = [];
				if (k) if (k.type === "(identifier)") if (k.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)) if (k.value !== "Number" && k.value !== "String" && k.value !== "Boolean" && k.value !== "Date") if (k.value === "Math") E("Math is not a function.", k);
				else t.newcap && E("Missing 'new' prefix when invoking a constructor.", k);
				if (i.id !== ")") for (;;) {
					U[U.length] = y(10);
					z += 1;
					if (i.id !== ",") break;
					Ra()
				}
				n(")");
				L(ga, h);
				if (typeof k === "object") {
					k.value === "parseInt" && z === 1 && E("Missing radix parameter.", k);
					if (!t.evil) if (k.value === "eval" || k.value === "Function" || k.value === "execScript") E("eval is evil.", k);
					else if (U[0] && U[0].id === "(string)" && (k.value === "setTimeout" || k.value === "setInterval")) E("Implied eval is evil. Pass a function instead of a string.", k);
					!k.identifier && k.id !== "." && k.id !== "[" && k.id !== "(" && k.id !== "&&" && k.id !== "||" && k.id !== "?" && E("Bad invocation.", k)
				}
				r.left = k;
				return r
			}, 155, true).exps = true;
			Ma("(", function() {
				L();
				if (i.id === "function") i.immed = true;
				var k = y(0);
				n(")", this);
				L(ga, h);
				if (t.immed && k.id === "function") i.id === "(" ? E("Move the invocation into the parens that contain the function.", i) : E("Do not wrap function literals in parens unless they are to be immediately invoked.", this);
				return k
			});
			Cb("[", function(k, r) {
				G(ga, h);
				L();
				var z = y(0),
					U;
				if (z && z.type === "(string)") {
					if (!t.evil && (z.value === "eval" || z.value === "execScript")) E("eval is evil.", r);
					N(z.value);
					if (!t.sub && D.test(z.value)) {
						U = nb[z.value];
						if (!U || !U.reserved) E("['{a}'] is better written in dot notation.", z, z.value)
					}
				}
				n("]", r);
				L(ga, h);
				r.left = k;
				r.right = z;
				return r
			}, 160, true);
			Ma("[", function() {
				var k = h.line !== i.line;
				this.first = [];
				if (k) {
					qa += t.indent;
					if (i.from === qa + t.indent) qa += t.indent
				}
				for (; i.id !== "(end)";) {
					for (; i.id === ",";) {
						E("Extra comma.");
						n(",")
					}
					if (i.id === "]") break;
					k && h.line !== i.line && ta();
					this.first.push(y(10));
					if (i.id === ",") {
						Ra();
						if (i.id === "]" && !t.es5) {
							E("Extra comma.", h);
							break
						}
					} else break
				}
				if (k) {
					qa -= t.indent;
					ta()
				}
				n("]", this);
				return this
			}, 160);
			(function(k) {
				k.nud = function() {
					var r, z, U, T, ma = {};
					if (r = h.line !== i.line) {
						qa += t.indent;
						if (i.from === qa + t.indent) qa += t.indent
					}
					for (;;) {
						if (i.id === "}") break;
						r && ta();
						if (i.value === "get" && s().id !== ":") {
							n("get");
							t.es5 || pa("get/set are ES5 features.");
							(U = Ka()) || pa("Missing property name.");
							T = i;
							A(h, i);
							z = kb();
							!t.loopfunc && e["(loopage)"] && E("Don't make functions within a loop.", T);
							(z = z["(params)"]) && E("Unexpected parameter '{a}' in get {b} function.", T, z[0], U);
							A(h, i);
							n(",");
							ta();
							n("set");
							T = Ka();
							U !== T && pa("Expected {a} and instead saw {b}.", h, U, T);
							T = i;
							A(h, i);
							z = kb();
							z = z["(params)"];
							if (!z || z.length !== 1 || z[0] !== "value") E("Expected (value) in set {a} function.", T, U)
						} else {
							U = Ka();
							if (typeof U !== "string") break;
							n(":");
							P(h, i);
							y(10)
						}
						ma[U] === true && E("Duplicate member '{a}'.", i, U);
						ma[U] = true;
						N(U);
						if (i.id === ",") {
							Ra();
							if (i.id === ",") E("Extra comma.", h);
							else i.id === "}" && !t.es5 && E("Extra comma.", h)
						} else break
					}
					if (r) {
						qa -= t.indent;
						ta()
					}
					n("}", this);
					return this
				};
				k.fud = function() {
					pa("Expected to see a statement and instead saw a block.", h)
				}
			})(Q("{"));
			var db = ka("var", function(k) {
				var r, z;
				if (e["(onevar)"] && t.onevar) E("Too many var statements.");
				else e["(global)"] || (e["(onevar)"] = true);
				for (this.first = [];;) {
					P(h, i);
					r = Ub();
					e["(global)"] && da[r] === false && E("Redefinition of '{a}'.", h, r);
					j(r, "unused");
					if (k) break;
					z = h;
					this.first.push(h);
					if (i.id === "=") {
						P(h, i);
						n("=");
						P(h, i);
						i.id === "undefined" && E("It is not necessary to initialize '{a}' to 'undefined'.", h, r);
						s(0).id === "=" && i.identifier && pa("Variable {a} was not declared correctly.", i, i.value);
						r = y(0);
						z.first = r
					}
					if (i.id !== ",") break;
					Ra()
				}
				return this
			});
			db.exps = true;
			Ba("function", function() {
				fa && E("Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.", h);
				var k = Ub();
				A(h, i);
				j(k, "unction");
				kb(k, true);
				i.id === "(" && i.line === h.line && pa("Function declarations are not invocable. Wrap the whole function invocation in parens.");
				return this
			});
			Ma("function", function() {
				var k = Xb();
				k ? A(h, i) : P(h, i);
				kb(k);
				!t.loopfunc && e["(loopage)"] && E("Don't make functions within a loop.");
				return this
			});
			Ba("if", function() {
				var k = i;
				n("(");
				P(this, k);
				L();
				y(20);
				if (i.id === "=") {
					t.boss || E("Expected a conditional expression and instead saw an assignment.");
					n("=");
					y(20)
				}
				n(")", k);
				L(ga, h);
				Ib(true, true);
				if (i.id === "else") {
					P(h, i);
					n("else");
					i.id === "if" || i.id === "switch" ? mc(true) : Ib(true, true)
				}
				return this
			});
			Ba("try", function() {
				var k, r;
				Ib(false);
				if (i.id === "catch") {
					n("catch");
					P(h, i);
					n("(");
					r = Qa;
					Qa = Object.create(r);
					k = i.value;
					i.type !== "(identifier)" ? E("Expected an identifier and instead saw '{a}'.", i, k) : j(k, "exception");
					n();
					n(")");
					Ib(false);
					k = true;
					Qa = r
				}
				if (i.id === "finally") {
					n("finally");
					Ib(false)
				} else {
					k || pa("Expected '{a}' and instead saw '{b}'.", i, "catch", i.value);
					return this
				}
			});
			Ba("while", function() {
				var k = i;
				e["(breakage)"] += 1;
				e["(loopage)"] += 1;
				n("(");
				P(this, k);
				L();
				y(20);
				if (i.id === "=") {
					t.boss || E("Expected a conditional expression and instead saw an assignment.");
					n("=");
					y(20)
				}
				n(")", k);
				L(ga, h);
				Ib(true, true);
				e["(breakage)"] -= 1;
				e["(loopage)"] -= 1;
				return this
			}).labelled = true;
			eb("with");
			Ba("switch", function() {
				var k = i,
					r = false;
				e["(breakage)"] += 1;
				n("(");
				P(this, k);
				L();
				this.condition = y(20);
				n(")", k);
				L(ga, h);
				P(h, i);
				k = i;
				n("{");
				P(h, i);
				qa += t.indent;
				for (this.cases = [];;) switch (i.id) {
				case "case":
					switch (e["(verb)"]) {
					case "break":
					case "case":
					case "continue":
					case "return":
					case "switch":
					case "throw":
						break;
					default:
						wa.test(b[i.line - 2]) || E("Expected a 'break' statement before 'case'.", h)
					}
					ta(-t.indent);
					n("case");
					this.cases.push(y(20));
					r = true;
					n(":");
					e["(verb)"] = "case";
					break;
				case "default":
					switch (e["(verb)"]) {
					case "break":
					case "continue":
					case "return":
					case "throw":
						break;
					default:
						wa.test(b[i.line - 2]) || E("Expected a 'break' statement before 'default'.", h)
					}
					ta(-t.indent);
					n("default");
					r = true;
					n(":");
					break;
				case "}":
					qa -= t.indent;
					ta();
					n("}", k);
					if (this.cases.length === 1 || this.condition.id === "true" || this.condition.id === "false") t.onecase || E("This 'switch' should be an 'if'.", this);
					e["(breakage)"] -= 1;
					e["(verb)"] = cb;
					return;
				case "(end)":
					pa("Missing '{a}'.", i, "}");
					return;
				default:
					if (r) switch (h.id) {
					case ",":
						pa("Each value should have its own case label.");
						return;
					case ":":
						hb();
						break;
					default:
						pa("Missing ':' on a case clause.", h)
					} else pa("Expected '{a}' and instead saw '{b}'.", i, "case", i.value)
				}
			}).labelled = true;
			ka("debugger", function() {
				t.debug || E("All 'debugger' statements should be removed.");
				return this
			}).exps = true;
			(function() {
				var k = ka("do", function() {
					e["(breakage)"] += 1;
					e["(loopage)"] += 1;
					this.first = Ib(true);
					n("while");
					var r = i;
					P(h, r);
					n("(");
					L();
					y(20);
					if (i.id === "=") {
						t.boss || E("Expected a conditional expression and instead saw an assignment.");
						n("=");
						y(20)
					}
					n(")", r);
					L(ga, h);
					e["(breakage)"] -= 1;
					e["(loopage)"] -= 1;
					return this
				});
				k.labelled = true;
				k.exps = true
			})();
			Ba("for", function() {
				var k;
				k = i;
				e["(breakage)"] += 1;
				e["(loopage)"] += 1;
				n("(");
				P(this, k);
				L();
				if (s(i.id === "var" ? 1 : 0).id === "in") {
					if (i.id === "var") {
						n("var");
						db.fud.call(db, true)
					} else {
						switch (e[i.value]) {
						case "unused":
							e[i.value] = "var";
							break;
						case "var":
							break;
						default:
							E("Bad for in variable '{a}'.", i, i.value)
						}
						n()
					}
					n("in");
					y(20);
					n(")", k);
					k = Ib(true, true);
					if (t.forin && (k.length > 1 || typeof k[0] !== "object" || k[0].value !== "if")) E("The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.", this)
				} else {
					if (i.id !== ";") if (i.id === "var") {
						n("var");
						db.fud.call(db)
					} else for (;;) {
						y(0, "for");
						if (i.id !== ",") break;
						Ra()
					}
					ya(h);
					n(";");
					if (i.id !== ";") {
						y(20);
						if (i.id === "=") {
							t.boss || E("Expected a conditional expression and instead saw an assignment.");
							n("=");
							y(20)
						}
					}
					ya(h);
					n(";");
					i.id === ";" && pa("Expected '{a}' and instead saw '{b}'.", i, ")", ";");
					if (i.id !== ")") for (;;) {
						y(0, "for");
						if (i.id !== ",") break;
						Ra()
					}
					n(")", k);
					L(ga, h);
					Ib(true, true)
				}
				e["(breakage)"] -= 1;
				e["(loopage)"] -= 1;
				return this
			}).labelled = true;
			ka("break", function() {
				var k = i.value;
				e["(breakage)"] === 0 && E("Unexpected '{a}'.", i, this.value);
				t.asi || ya(this);
				if (i.id !== ";") if (h.line === i.line) {
					if (e[k] !== "label") E("'{a}' is not a statement label.", i, k);
					else Qa[k] !== e && E("'{a}' is out of scope.", i, k);
					this.first = i;
					n()
				}
				Ob("break");
				return this
			}).exps = true;
			ka("continue", function() {
				var k = i.value;
				e["(breakage)"] === 0 && E("Unexpected '{a}'.", i, this.value);
				t.asi || ya(this);
				if (i.id !== ";") {
					if (h.line === i.line) {
						if (e[k] !== "label") E("'{a}' is not a statement label.", i, k);
						else Qa[k] !== e && E("'{a}' is out of scope.", i, k);
						this.first = i;
						n()
					}
				} else e["(loopage)"] || E("Unexpected '{a}'.", i, this.value);
				Ob("continue");
				return this
			}).exps = true;
			ka("return", function() {
				t.asi || ya(this);
				i.id === "(regexp)" && E("Wrap the /regexp/ literal in parens to disambiguate the slash operator.");
				if (this.line === i.line || !t.asi) if (i.id !== ";" && !i.reach) {
					P(h, i);
					this.first = y(20)
				}
				Ob("return");
				return this
			}).exps = true;
			ka("throw", function() {
				ya(this);
				P(h, i);
				this.first = y(20);
				Ob("throw");
				return this
			}).exps = true;
			eb("class");
			eb("const");
			eb("enum");
			eb("export");
			eb("extends");
			eb("import");
			eb("super");
			eb("let");
			eb("yield");
			eb("implements");
			eb("interface");
			eb("package");
			eb("private");
			eb("protected");
			eb("public");
			eb("static");
			var Oa = function(k, r, z) {
					var U, T;
					Sb.errors = [];
					da = Object.create(fb);
					M(da, z || {});
					if (r) {
						if (z = r.predef) if (Array.isArray(z)) for (U = 0; U < z.length; U += 1) da[z[U]] = true;
						else if (typeof z === "object") {
							T = Object.keys(z);
							for (U = 0; U < T.length; U += 1) da[T[U]] = !! z[T[U]]
						}
						t = r
					} else t = {};
					t.indent = t.indent || 4;
					t.maxerr = t.maxerr || 50;
					Hb = "";
					for (U = 0; U < t.indent; U += 1) Hb += " ";
					qa = 1;
					Qa = F = Object.create(da);
					e = {
						"(global)": true,
						"(name)": "(global)",
						"(scope)": Qa,
						"(breakage)": 0,
						"(loopage)": 0
					};
					H = [e];
					x = [];
					bb = false;
					f = {};
					l = null;
					Y = {};
					fa = false;
					d = [];
					gb = false;
					O = 0;
					ja.init(k);
					W = true;
					Ta = false;
					ga = h = i = nb["(begin)"];
					X();
					try {
						n();
						switch (i.id) {
						case "{":
						case "[":
							gb = t.laxbreak = true;
							tb();
							break;
						default:
							if (i.value === "use strict") {
								t.globalstrict || E('Use the function form of "use strict".');
								dc()
							}
							hb("lib")
						}
						n("(end)")
					} catch (ma) {
						if (ma) Sb.errors.push({
							reason: ma.message,
							line: ma.line || i.line,
							character: ma.character || i.from
						}, null)
					}
					return Sb.errors.length === 0
				};
			Oa.data = function() {
				var k = {
					functions: []
				},
					r;
				r = [];
				var z, U, T, ma, Ea = [];
				if (Oa.errors.length) k.errors = Oa.errors;
				if (gb) k.json = true;
				for (ma in Y) u(Y, ma) && r.push({
					name: ma,
					line: Y[ma]
				});
				if (r.length > 0) k.implieds = r;
				if (x.length > 0) k.urls = x;
				r = Object.keys(Qa);
				if (r.length > 0) k.globals = r;
				for (U = 1; U < H.length; U += 1) {
					z = H[U];
					r = {};
					for (T = 0; T < w.length; T += 1) r[w[T]] = [];
					for (ma in z) if (u(z, ma) && ma.charAt(0) !== "(") {
						T = z[ma];
						if (T === "unction") T = "unused";
						if (Array.isArray(r[T])) {
							r[T].push(ma);
							T === "unused" && Ea.push({
								name: ma,
								line: z["(line)"],
								"function": z["(name)"]
							})
						}
					}
					for (T = 0; T < w.length; T += 1) r[w[T]].length === 0 && delete r[w[T]];
					r.name = z["(name)"];
					r.param = z["(params)"];
					r.line = z["(line)"];
					r.last = z["(last)"];
					k.functions.push(r)
				}
				if (Ea.length > 0) k.unused = Ea;
				for (ma in f) if (typeof f[ma] === "number") {
					k.member = f;
					break
				}
				return k
			};
			Oa.report = function(k) {
				function r(Na, ob) {
					var Mb, Ha;
					if (ob) {
						ab.push("<div><i>" + Na + "</i> ");
						ob = ob.sort();
						for (Na = 0; Na < ob.length; Na += 1) if (ob[Na] !== Ha) {
							Ha = ob[Na];
							ab.push((Mb ? ", " : "") + Ha);
							Mb = true
						}
						ab.push("</div>")
					}
				}
				var z = Oa.data(),
					U = [],
					T, ma, Ea;
				T = "";
				var qb, ab = [];
				if (z.errors || z.implieds || z.unused) {
					ma = true;
					ab.push("<div id=errors><i>Error:</i>");
					if (z.errors) for (Ea = 0; Ea < z.errors.length; Ea += 1) if (U = z.errors[Ea]) {
						T = U.evidence || "";
						ab.push("<p>Problem" + (isFinite(U.line) ? " at line " + U.line + " character " + U.character : "") + ": " + U.reason.entityify() + "</p><p class=evidence>" + (T && (T.length > 80 ? T.slice(0, 77) + "..." : T).entityify()) + "</p>")
					}
					if (z.implieds) {
						U = [];
						for (Ea = 0; Ea < z.implieds.length; Ea += 1) U[Ea] = "<code>" + z.implieds[Ea].name + "</code>&nbsp;<i>" + z.implieds[Ea].line + "</i>";
						ab.push("<p><i>Implied global:</i> " + U.join(", ") + "</p>")
					}
					if (z.unused) {
						U = [];
						for (Ea = 0; Ea < z.unused.length; Ea += 1) U[Ea] = "<code><u>" + z.unused[Ea].name + "</u></code>&nbsp;<i>" + z.unused[Ea].line + "</i> <code>" + z.unused[Ea]["function"] + "</code>";
						ab.push("<p><i>Unused variable:</i> " + U.join(", ") + "</p>")
					}
					z.json && ab.push("<p>JSON: bad.</p>");
					ab.push("</div>")
				}
				if (!k) {
					ab.push("<br><div id=functions>");
					z.urls && r("URLs<br>", z.urls, "<br>");
					if (z.json && !ma) ab.push("<p>JSON: good.</p>");
					else z.globals ? ab.push("<div><i>Global</i> " + z.globals.sort().join(", ") + "</div>") : ab.push("<div><i>No new global variables introduced.</i></div>");
					for (Ea = 0; Ea < z.functions.length; Ea += 1) {
						k = z.functions[Ea];
						ab.push("<br><div class=function><i>" + k.line + "-" + k.last + "</i> " + (k.name || "") + "(" + (k.param ? k.param.join(", ") : "") + ")</div>");
						r("<big><b>Unused</b></big>", k.unused);
						r("Closure", k.closure);
						r("Variable", k["var"]);
						r("Exception", k.exception);
						r("Outer", k.outer);
						r("Global", k.global);
						r("Label", k.label)
					}
					if (z.member) {
						U = Object.keys(z.member);
						if (U.length) {
							U = U.sort();
							T = "<br><pre id=members>/*members ";
							ma = 10;
							for (Ea = 0; Ea < U.length; Ea += 1) {
								k = U[Ea];
								qb = k.name();
								if (ma + qb.length > 72) {
									ab.push(T + "<br>");
									T = "    ";
									ma = 1
								}
								ma += qb.length + 2;
								if (z.member[k] === 1) qb = "<i>" + qb + "</i>";
								if (Ea < U.length - 1) qb += ", ";
								T += qb
							}
							ab.push(T + "<br>*/</pre>")
						}
						ab.push("</div>")
					}
				}
				return ab.join("")
			};
			Oa.jshint = Oa;
			Oa.edition = "2011-04-16";
			return Oa
		}();
	if (typeof exports == "object" && exports) exports.JSHINT = Sb;
	var Gd = function() {
			var o = c.javascript.getCode();
			return Sb(o) ? true : Sb.data()
		},
		ec = "open" in S.createElement("details"),
		Tb = $($.browser.msie && $.browser.version < 9 ? '<div class="details"><div class="summary">warnings</div>' : '<details><summary class="summary">warnings</summary></details>').appendTo("#source .javascript").hide();
	Tb.find(".summary").click(function() {
		if (!ec) {
			$(this).nextAll().toggle();
			Tb[0].open = !Tb[0].open
		}
		setTimeout(function() {
			gc.trigger("sizeeditors")
		}, 10)
	});
	if (!ec) Tb[0].open = false;
	Sb._data = Sb.data;
	Sb.data = function(o) {
		var u = Sb._data(),
			M = [];
		if (o && u.errors) {
			for (o = 0; o < u.errors.length; o++) if (u.errors[o] !== null && u.errors[o].evidence) M.push(u.errors[o]);
			else u.errors[o] !== null && u.errors[o].reason.indexOf("Stopping") === 0 && M.push("Fatal errors, unable to continue");
			return {
				errors: M
			}
		} else {
			u.errors = [];
			return u
		}
	};
	Tb.delegate("li", "click", function() {
		var o = Sb.data(true).errors;
		if (o.length) {
			var u = Tb.find("li").index(this);
			if (o[u].reason) {
				c.javascript.setSelection({
					line: o[u].line - 1,
					ch: 0
				}, {
					line: o[u].line - 1
				});
				c.javascript.focus()
			}
			return false
		}
	});
	mb = function() {
		var o = Gd(),
			u = Sb.data(true),
			M = "";
		M = Tb.is(":visible");
		if (o === true && M) {
			Tb.hide();
			gc.trigger("sizeeditors")
		} else if (u.errors.length) {
			o = ["<ol>"];
			M = u.errors;
			for (var X = 0; X < M.length; X++) typeof M[X] == "string" ? o.push(M[X]) : o.push("Line " + M[X].line + ": " + M[X].evidence + " --- " + M[X].reason);
			o = o.join("<li>") + "</ol>";
			Tb.find(".summary").text(u.errors.length == 1 ? "1 warning" : u.errors.length + " warnings");
			Tb.find("ol").remove();
			if (!ec && Tb[0].open == false) o = $(o).hide();
			Tb.append(o).show();
			gc.trigger("sizeeditors")
		}
	};
	$(S).bind("codeChange", Ab(mb, 1E3));
	$(S).bind("jsbinReady", mb);
	(function() {
		var o = $("#revert");
		$("#download").click(function(u) {
			u.preventDefault();
			o.is(":not(.enable)") || o.is(":hidden") || R.location.pathname.indexOf("/edit") === -1 ? cd("download") : cd("save", true, function() {
				cd("download")
			})
		})
	})();
	var rc = $("#live"),
		fc = $("body"),
		nd = $("#showlive")[0],
		Zd = Ab(bd, 200);
	yc.prototype = {
		hijack: function(o, u) {
			var M = this.executable ? this.context() : this.context,
				X = new RegExp("console." + o + "\\((.*?)\\)");
			arguments.callee.caller.caller.arguments.length > 0 && !(arguments.callee.caller.caller.arguments[0] instanceof jQuery.Event) && M ? M.eval("console." + o + "(" + arguments.callee.caller.caller.arguments[0].toString().match(X)[1] + ")") : this.original[o].apply(this.original, u)
		},
		log: function() {
			this.hijack("log", [].slice.call(arguments))
		},
		debug: function() {
			this.hijack("debug", [].slice.call(arguments))
		},
		dir: function() {
			this.hijack("dir", [].slice.call(arguments))
		},
		warn: function() {
			this.hijack("warn", [].slice.call(arguments))
		},
		error: function() {
			this.hijack("error", [].slice.call(arguments))
		},
		activate: function() {
			if (this.supported) {
				R.top.console = this;
				console == this && this.original.log("--- console context switched to jsbin ---");
				this.active = true
			}
		},
		deactivate: function() {
			if (this.supported) {
				this.active = false;
				console == this && this.original.log("--- console context switched back to original ---");
				R.top.console = this.original
			}
		}
	};
	rc.bind("show", function() {
		fc.addClass("live");
		nd.checked = true;
		vb && vb.setItem("livepreview", true);
		var o = rc.data();
		o.splitter && o.splitter.show().trigger("init");
		$(S).bind("codeChange.live", Zd);
		bd()
	}).bind("hide", function() {
		$(S).unbind("codeChange.live");
		vb && vb.removeItem("livepreview");
		fc.removeClass("live");
		nd.checked = false;
		$("#source").css("right", 0);
		var o = rc.data();
		o.splitter && o.splitter.hide()
	}).bind("toggle", function() {
		rc.trigger(fc.is(".live") ? "hide" : "show")
	});
	rc.find(".close").click(function() {
		Jc("live", false)
	});
	var od = $(S.documentElement);
	$("#tip a.dismiss").click(function() {
		od.removeClass("showtip");
		$(R).resize();
		return false
	});
	R.showTip = function() {
		if (jsbin.settings.lastTip === cb) jsbin.settings.lastTip = -1;
		if (tips) for (var o = 0; o < tips.length; o++) if (o > jsbin.settings.lastTip) {
			$("#tip p").html(tips[o]);
			jsbin.settings.lastTip = o;
			od.addClass("showtip");
			break
		}
	};
	showTip();
	this.livePreview = function() {
		$("#live").trigger("toggle")
	};
	var Hd = jsbin.settings.debug === cb ? false : jsbin.settings.debug,
		Yc = null,
		fd = $("#bin"),
		gc = $(S),
		Id = JSON.parse(vb.getItem("splitterSettings") || '[ { "x" : null }, { "x" : null } ]');
	mb = function() {
		ib.setItem("javascript", c.javascript.getCode());
		ib.setItem("html", c.html.getCode());
		ib.setItem("url", template.url);
		vb.setItem("settings", JSON.stringify(jsbin.settings));
		var o = J();
		ib.setItem("panel", o);
		try {
			ib.setItem("line", c[o].getCursor().line);
			ib.setItem("character", c[o].getCursor().ch)
		} catch (u) {
			ib.setItem("line", 0);
			ib.setItem("character", 0)
		}
	};
	var Jd = $("#startingpoint").click(function(o) {
		o.preventDefault();
		if (vb) {
			vb.setItem("saved-javascript", c.javascript.getCode());
			vb.setItem("saved-html", c.html.getCode());
			Jd.addClass("saved");
			$("#tip p").html("Default starting point now changed to current code");
			od.addClass("showtip")
		}
		return false
	});
	$(".code.html");
	var Ac = null,
		pd = $("#panelsvisible input").click(function() {
			var o = this.checked,
				u = $(this).data("panel");
			Jc(u, o)
		});
	Xc = $("#revert").click(function() {
		if (Xc.is(":not(.enable)")) return false;
		ib.removeItem("javascript");
		ib.removeItem("html");
		Za("javascript");
		Za("html");
		c.javascript.focus();
		$("#library").val("none");
		R.gist != cb && gist.setCode();
		$(S).trigger("codeChange", [true]);
		return false
	});
	$("#control .tab").click(function() {
		$("body").removeClass("source preview").addClass(this.hash.substr(1));
		if ($(this).is(".preview")) {
			$("#preview iframe").remove();
			$("#preview").append('<iframe class="stretch" frameBorder="0"></iframe>');
			Ic()
		} else {
			$("#preview iframe").remove();
			c[J()].focus()
		}
	});
	var qd = false;
	$(".prefsButton a").click(function(o) {
		qd = true;
		o.preventDefault();
		fc.toggleClass("prefsOpen")
	});
	$("a.save").click(function(o) {
		//changhwa
		o.preventDefault();
		cd("save", R.location.pathname.indexOf("/edit") !== -1);
		return false
	});
	$("a.clone").click(function(o) {
		o.preventDefault();
		o = $("form").append('<input type="hidden" name="javascript" />').append('<input type="hidden" name="html" />');
		o.find("input[name=javascript]").val(c.javascript.getCode());
		o.find("input[name=html]").val(c.html.getCode());
		o.find("input[name=method]").val("save,new");
		o.submit();
		return false
	});
	$("#login").click(function(){

		$("#loginDiv").hide();
		
		var offset = $("#login").offset();
		var left = offset.left;
		var top = offset.top;
		$("#loginDiv").append('<div id="idForm">')
						.append('<input type="text" id="usrId" placeholder="Id" />')
						.append('</div>')
						.append('<div id="pwForm">')
						.append('<input type="password" id="passwd" placeholder="Password" />')
						.append('</div>')
						.append('<div id="btForm">')
						.append('<a id="btnLogin" onclick="login()"><button> submit </button></a>')
						.append('</div>');
		$("#loginDiv").css({
			"top": top+30,
			"left": left-40,
			"position": "absolute"
		}).show();

	});


	gc.keydown(function(o) {
		if (o.metaKey && o.which == 83) if (o.shiftKey == false) {
			$("#save").click();
			o.preventDefault()
		} else if (o.shiftKey == true) {
			$(".clone").click();
			o.preventDefault()
		}
	});
	gc.one("jsbinReady", function() {
		if (typeof R.FileReader !== "undefined") {
			dd(c.html.win);
			dd(c.javascript.win);
			dd(R)
		}
	});
	$(R).unload(mb);
	$.browser.opera && setInterval(mb, 500);
	if (location.hash && location.hash !== "#preview" && location.hash !== "#source") {
		jsbin.settings.show.html = false;
		jsbin.settings.show.javascript = false;
		jsbin.settings.show.live = false
	}
	if (location.hash.indexOf("html") !== -1) jsbin.settings.show.html = true;
	if (location.hash.indexOf("javascript") !== -1) jsbin.settings.show.javascript = true;
	if (location.hash.indexOf("live") !== -1) jsbin.settings.show.live = true;
	if (location.hash == "#preview") {
		$("body").removeClass("source").addClass("preview");
		R.scrollTo(0, 0);
		gc.bind("jsbinReady", function() {
			$("#control .preview").click()
		})
	}
	$("#library").chosen();
	gc.one("jsbinReady", function() {
		for (panel in jsbin.settings.show) if (jsbin.settings.show[panel]) $("#show" + panel).attr("checked", "checked")[0].checked = true;
		else $("#show" + panel).removeAttr("checked")[0].checked = false;
		var o = $(".code.html").splitter().data("splitter"),
			u = rc.splitter().data("splitter");
		Jc("html", jsbin.settings.show.html);
		Jc("javascript", jsbin.settings.show.javascript);
		Jc("live", jsbin.settings.show.live);
		o.filter(":visible").trigger("init", (Id[0] || {
			x: null
		}).x);
		u.filter(":visible").trigger("init", (Id[1] || {
			x: null
		}).x);
		fd.removeAttr("style").addClass("ready")
	});
	if (/gist\/\d+/.test(R.location.pathname) && !ib.getItem("javascript") && !ib.getItem("html")) {
		R.editors = c;
		mb = function() {
			$.getScript("/js/chrome/gist.js", function() {
				R.gist = new Gist(R.location.pathname.replace(/.*?(\d+).*/, "$1"))
			})
		};
		if (c.ready) mb();
		else c.onReady = mb
	}
	R.CodeMirror = sb
})(this, document);