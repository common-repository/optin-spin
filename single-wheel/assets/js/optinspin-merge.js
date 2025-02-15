function Spin2WinWheel() {
    var t, e, i, n, s, r, o, a, l, h, u, c, p, f, d, _, g, m, y, v, x, w, T, b, S, k, P, A, C, O, R, M, D, N, X, j, E, Y, L, I, F, B, Q, W, z = "http://www.w3.org/2000/svg",
        V = function(t) {
            return document.querySelector(t)
        },
        G = this,
        q = V(".wheelSVG"),
        H = V(".wheel"),
        U = V(".wheelOutline"),
        Z = V(".wheelContainer"),
        $ = V(".peg"),
        J = V(".pegContainer"),
        K = V(".mainContainer"),
        tt = V(".valueContainer"),
        et = V(".centerCircle"),
        it = V(".toast"),
        nt = V(".toast p"),
        st = 0,
        rt = 0,
        ot = 2,
        at = 0,
        lt = 0,
        ht = lt,
        ut = [],
        ct = null,
        pt = [],
        ft = new Audio(optinspin_wheel_spin.plugin_url + "/assets/media/wheel_tick.mp3"),
        dt = !0,
        _t = null,
        gt = !1,
        mt = function() {
            n = t.wheelStrokeColor, r = t.wheelSize, o = r / 2, a = t.wheelTextColor, n = t.wheelStrokeColor, s = t.wheelStrokeWidth, l = t.wheelTextOffsetY, h = t.wheelImageOffsetY, c = t.wheelImageSize, u = t.wheelTextSize, d = t.centerCircleStrokeColor, _ = t.centerCircleStrokeWidth, g = t.centerCircleFillColor, m = t.centerCircleSize, y = m / 2, v = t.segmentStrokeColor, x = t.segmentStrokeWidth, w = t.segmentValuesArray, T = w.length, b = -1 == t.numSpins ? 1e16 : parseInt(t.numSpins), R = t.minSpinDuration, M = t.gameOverText, D = t.invalidSpinText, N = t.introText, j = t.hasSound, X = t.gameId, Y = t.clickToSpin, k = (S = 360 / T) / 2, A = t.centerX, C = t.centerY, O = t.colorArray, E = t.hasShadows, Q = t.spinDestinationArray, E && (U.setAttributeNS(null, "filter", "url(#shadow)"), tt.setAttributeNS(null, "filter", "url(#shadow)"), et.setAttributeNS(null, "filter", "url(#shadow)"), J.setAttributeNS(null, "filter", "url(#shadow)"), it.style.boxShadow = "0px 0px 20px rgba(21,21,21,0.5)")
        },
        yt = function() {
            TweenMax.set(".woo-wheel-roll svg", {
                visibility: "visible"
            }), TweenMax.set(H, {
                svgOrigin: A + " " + C,
                x: 0,
                y: 0
            }), TweenMax.set($, {
                x: A - $.getBBox().width / 2,
                y: C - o - $.getBBox().height / 2,
                transformOrigin: "50% 25%",
                visibility: "visible"
            }), TweenMax.set(J, {
                transformOrigin: "50% 100%",
                scale: r / 600
            }), TweenMax.set(K, {
                svgOrigin: A + " " + C,
                rotation: -90,
                x: 0,
                y: 0
            }), TweenMax.set([it], {
                xPercent: -50,
                left: "50%"
            }), TweenMax.set(".woo-wheel-roll svg", {
                xPercent: -50,
                left: "50%"
            })
        },
        vt = function() {
            if (0 != b) {
                if (!gt) {
                    if (Q.length > 0) {
                        dt = !1, b = Q.length;
                        for (var t = 0; t < Q.length; t++) {
                            if (Q[t] > T || 0 === Q[t]) return showInitError("Invalid destination set - please ensure the destination in spinDestinationArray is greater than 0 and less than or equal to the number of segments"), void(it.style.backgroundColor = "red");
                            Q[t] = Q[t] - 1, Q[t] = -1 * Q[t] * S - 1080 * ot, ot += 2
                        }
                    }
                    Y ? createClickToSpin() : Et(), showIntroText()
                }
            } else showInitError("numSpins MUST BE GREATER THAN 0")
        },
        xt = function(t, e) {
            return Math.floor(Math.random() * (e - t + 1) + t)
        },
        wt = function() {
            for (var t, e, i, n, s, r, a, l, h = 0; h < T; h++) ht = (lt = -k) + S, t = A + o * Math.cos(Math.PI * lt / 180), i = C + o * Math.sin(Math.PI * lt / 180), e = A + o * Math.cos(Math.PI * ht / 180), n = C + o * Math.sin(Math.PI * ht / 180), s = "M" + A + "," + C + "  L" + t + "," + i + "  A" + o + "," + o + " 0 0,1 " + e + "," + n + "z", a = document.createElementNS(z, "g"), r = document.createElementNS(z, "path"), a.appendChild(r), H.appendChild(a), TweenMax.set(r, {
                rotation: h * S,
                svgOrigin: A + " " + C
            }), r.setAttributeNS(null, "d", s), O[h] ? l = O[h] : (l = O[at], ++at == O.length && (at = 0)), r.setAttributeNS(null, "fill", l), r.setAttributeNS(null, "stroke", 0), ut.push({
                path: r,
                x1: t,
                x2: e,
                y1: i,
                y2: n
            });
            x > 0 && Tt(), bt()
        },
        Tt = function() {
            for (var t = 0; t < T; t++) {
                var e = document.createElementNS(z, "line");
                e.setAttributeNS(null, "x1", A), e.setAttributeNS(null, "x2", ut[t].x2), e.setAttributeNS(null, "y1", C), e.setAttributeNS(null, "y2", ut[t].y2), e.setAttributeNS(null, "stroke", v), e.setAttributeNS(null, "stroke-width", x), H.appendChild(e), TweenMax.set(e, {
                    svgOrigin: A + " " + C,
                    rotation: t * S
                })
            }
        },
        bt = function() {
            for (var t = 0; t < T; t++) {
                var e = document.createElementNS(z, "g");
                if ("image" == w[t].type) {
                    var i = document.createElementNS(z, "image");
                    e.appendChild(i), i.setAttribute("class", "wheelImage"), i.setAttributeNS(null, "x", A - c / 2), i.setAttributeNS(null, "y", C - o + h), i.setAttributeNS(null, "width", c), i.setAttributeNS(null, "height", c), i.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", w[t].value)
                } else if ("string" == w[t].type) {
                    var n, s, r = document.createElementNS(z, "text");
                    w[t].value.split("^").forEach(function(t, e) {
                        n = document.createTextNode(t), (s = document.createElementNS(z, "tspan")).setAttributeNS(null, "dy", e ? "1.2em" : 0), s.setAttributeNS(null, "x", A), s.setAttributeNS(null, "text-anchor", "middle"), s.appendChild(n), r.appendChild(s)
                    }), e.appendChild(r), r.setAttribute("class", "wheelText"), r.setAttributeNS(null, "fill", a), r.setAttributeNS(null, "x", A), r.setAttributeNS(null, "y", C - o + l), r.style.fontSize = u
                }
                tt.appendChild(e), TweenMax.set(e, {
                    svgOrigin: A + " " + C,
                    rotation: t * S
                })
            }
            TweenMax.set(tt, {
                svgOrigin: A + " " + C
            })
        },
        St = function() {
            var t = document.createElementNS(z, "g"),
                e = document.createElementNS(z, "circle");
            return U.appendChild(t), e.setAttributeNS(null, "fill", "transparent"), e.setAttributeNS(null, "stroke", n), e.setAttributeNS(null, "stroke-width", s), e.setAttributeNS(null, "cx", A), e.setAttributeNS(null, "cy", C), e.setAttributeNS(null, "r", o), t.appendChild(e), t
        },
        kt = function() {
            var t = document.createElementNS(z, "circle");
            return t.setAttributeNS(null, "fill", g), t.setAttributeNS(null, "stroke", d), t.setAttributeNS(null, "stroke-width", _), t.setAttributeNS(null, "cx", A), t.setAttributeNS(null, "cy", C), t.setAttributeNS(null, "r", y), t
        },
        Pt = function() {
            ft.play()
        },
        At = function() {
            it.style.visibility = "hidden"
        },
        Ct = function() {
            it.style.visibility = "hidden", ct.onclick = null, ot += 2
        },
        Ot = function() {
            disableWheel(), dt && (B = VelocityTracker.track(H, "rotation"))
        },
        Rt = function(t) {
            if (P = st, (st = Math.round(H._gsTransform.rotation / S)) != P) {
                var e = st > P ? -35 : 35;
                TweenMax.fromTo($, .2, {
                    rotation: e
                }, {
                    onStart: j ? Pt : null,
                    rotation: 0,
                    ease: Back.easeOut
                })
            }
            TweenMax.set(tt, {
                rotation: H._gsTransform.rotation
            })
        },
        Mt = function() {
            f = H._gsTransform.rotation;
            var t = Math.round(f % 360);
            if (t = t > 0 ? 360 - t : t, t = t < 0 ? t *= -1 : t, B && B.getVelocity("rotation") <= .5) return enableWheel(), void showResult("invalidSpin");
            var e = Math.round(t / S);
            ut[e].path;
            if (showResult(Math.abs(e)), dt) {
                if (!(b > -1)) return;
                rt++
            } else rt++, p[0].vars.snap = [Q[rt]];
            VelocityTracker.untrack(H), rt >= b ? endGame() : enableWheel()
        },
        Dt = function() {
            Y || p[0].applyBounds({
                minRotation: -1e16,
                maxRotation: f
            })
        },
        Nt = function(t) {
            return function(e) {
                return Math.round(e / S) * S - t
            }
        },
        Xt = function() {
            return -S * xt(0, T) - 1080 * ot
        },
        jt = function() {
            var t = Math.floor(Math.random() * _t.length),
                e = _t[t];
            return -S * e - 1080 * ot
        },
        Et = function() {
            p = Draggable.create(H, {
                type: "rotation",
                bounds: {
                    minRotation: -1e16,
                    maxRotation: 0
                },
                throwProps: !0,
                ease: Back.easeOut.config(.2),
                snap: dt ? Nt(0) : [Q[rt]],
                throwResistance: 0,
                minDuration: R,
                onThrowComplete: Mt,
                onPress: At,
                onDrag: Rt,
                onThrowUpdate: Rt,
                overshootTolerance: 1,
                onDragEnd: Ot
            })
        },
        Yt = function() {
            gt = !0, w.forEach(function(t, e) {
                isNaN(t.probability) && (gt = !1)
            }), gt && (Q = [], b = -1 == t.numSpins ? 1e16 : parseInt(t.numSpins), Lt())
        },
        Lt = function() {
            var t = 0;
            w.forEach(function(e, i) {
                t += e.probability
            }), W = t, Math.ceil(t) == W || Math.floor(t) == W ? createProbabilityArray() : 1 == confirm("Total probability: " + t + " - If you have set JSON probability values they must add up to 100") && (TweenMax.set(Z, {
                autoAlpha: 0
            }), TweenMax.set(Z, {
                autoAlpha: 0
            }))
        };
    createProbabilityArray = function() {
        _t = [], w.forEach(function(t, e) {
            for (var i = 0; i < t.probability; i++) _t.push(e)
        })
    }, showProbabilityError = function() {}, createClickToSpin = function() {
        Yt() && createProbabilityArray(), ct ? ct.onclick = getTrigger() : (ct = H, H.onclick = getTrigger())
    }, getTrigger = function() {
        return function() {
            if (gt) ThrowPropsPlugin.to(H, {
                throwProps: {
                    rotation: {
                        velocity: xt(-700, -500),
                        end: jt()
                    }
                },
                onStart: Ct,
                onUpdate: Rt,
                ease: Back.easeOut.config(.2),
                overshootTolerance: 0,
                onComplete: spinComplete
            });
            else {
                ThrowPropsPlugin.to(H, {
                    throwProps: {
                        rotation: {
                            velocity: xt(-700, -500),
                            end: dt ? Xt() : [Q[rt]]
                        }
                    },
                    onStart: Ct,
                    onUpdate: Rt,
                    ease: Back.easeOut.config(.2),
                    overshootTolerance: 0,
                    onComplete: spinComplete
                })
            }
        }
    }, spinComplete = function() {
        f = H._gsTransform.rotation;
        var t = Math.round(f % 360);
        t = (t = t > 0 ? 360 - t : t) < 0 ? t *= -1 : t;
        var e = Math.round(t / S);
        ut[e].path;
        if (showResult(Math.abs(e)), dt) {
            if (!(b > -1)) return;
            rt++
        } else rt++;
        rt >= b ? endGame() : ct.onclick = getTrigger()
    }, endGame = function() {
        disableWheel(), TweenMax.set(q, {
            alpha: .3
        }), TweenMax.to(nt, 1, {
            text: M,
            ease: Linear.easeNone,
            delay: 2
        }), I({
            gameId: X,
            target: G,
            results: pt
        })
    }, disableWheel = function() {
        Y || p[0].disable()
    }, enableWheel = function() {
        Y || p[0].enable()
    }, showResult = function(t) {
        Dt();
        var e;
        if ("invalidSpin" == t) return TweenMax.set(H, {
            rotation: Q[rt]
        }), showToast(D), e = {
            target: G,
            type: "error",
            spinCount: rt,
            win: null,
            msg: D,
            gameId: X
        }, F(e), void pt.push(e);
        if (!isNaN(t)) {
            var i = w[t].resultText;
            showToast(i), e = {
                target: G,
                type: "result",
                spinCount: rt,
                win: w[t].win,
                msg: w[t].resultText,
                gameId: X,
                userData: w[t].userData,
                coupon: w[t].couponCode,
                generated_coupon: w[t].generated_coupon,
                generated_discount_coupon: w[t].generated_discount_coupon,
                coupon_expiry_day: w[t].coupon_expiry_day,
                segmentValue: w[t].value,
                coupon_type: w[t].coupon_type,
                coupon_link_label: w[t].coupon_link_label,
                coupon_label: w[t].coupon_label,
                coupon_link_url: w[t].coupon_link_url,
                duration_type: w[t].duration_type,
                user_ip: w[t].user_ip
            }, L(e), console.log("spin_complete"), pt.push(e)
        }
    }, showIntroText = function(t) {
        showToast(N)
    }, showInitError = function(t) {
        TweenMax.set([q, $], {
            visibility: "hidden"
        }), alert(t)
    }, showToast = function(t) {
        it.style.visibility = "visible", it.style.backgroundColor = "#E81D62", nt.innerHTML = t, TweenMax.fromTo(it, .6, {
            y: 20,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            delay: .2,
            onStart: onresize,
            ease: Elastic.easeOut.config(.7, .7)
        })
    }, checkNumSegments = function() {
        T <= 1 && (TweenMax.set(q, {
            visibility: "hidden"
        }), it.style.backgroundColor = "red")
    }, setSpinTrigger = function() {
        ct && (Y = !0), Y && (ct ? ct.onclick = getTrigger() : H.onclick = getTrigger())
    }, L = function(t) {
        G.onResult(t)
    }, F = function(t) {
        G.onError(t)
    }, I = function(t) {
        G.onGameEnd(t)
    }, this.onResult = L, this.onError = F, this.onGameEnd = I, this.getGameProgress = function() {
        return pt
    }, this.init = function(n) {
        if (!n) return yt(), void showInitError("PLEASE INCLUDE THE INIT OBJECT");
        e = n.data.svgWidth, i = n.data.svgHeight, q.setAttribute("viewBox", "0 0 " + e + " " + n.data.svgHeight), t = n.data, I = n.onGameEnd ? n.onGameEnd : function() {}, L = n.onResult ? n.onResult : function() {}, F = n.onError ? n.onError : function() {}, ct = n.spinTrigger ? n.spinTrigger : null, setSpinTrigger(), mt(), yt(), wt(), U.appendChild(St()), et.appendChild(kt()), vt(), checkNumSegments()
    }, window.onresize = function() {
        parseFloat(getComputedStyle(q).width), parseFloat(getComputedStyle(q).height), parseFloat(getComputedStyle(it).width), parseFloat(getComputedStyle(it).height)
    }, this.restart = function() {
        Y || (p[0].kill(), st = P = null, TweenMax.to([H, tt], .3, {
            rotation: "0_short",
            onComplete: Et
        })), TweenMax.set(q, {
            alpha: 1
        }), TweenMax.to([H, tt], .3, {
            rotation: "0_short"
        }), it.style.visibility = "hidden", rt = 0, ot = 2, pt = [], showIntroText()
    }
}

function wtw_apply_coupon(t) {
    if (" - " != t) {
        var e = wtw_wheel.ajaxurl,
            i = {
                action: "wtw_coupon_request",
                request_to: "apply_coupon",
                coupon: t
            };
        jQuery.post(e, i, function(t) {})
    }
}

function spin_wheel() {
    jQuery(".woo-the-wheel").animate({
        marginLeft: "30%"
    }), theWheel.animation.spins = wtw_wheel.wheel_speed, startSpin()
}

function Winwheel(t, e) {
    defaultOptions = {
        canvasId: "canvas",
        centerX: null,
        centerY: null,
        outerRadius: null,
        innerRadius: 0,
        numSegments: 1,
        drawMode: "code",
        rotationAngle: 0,
        textFontFamily: "Arial",
        textFontSize: 20,
        textFontWeight: "bold",
        textOrientation: "horizontal",
        textAlignment: "center",
        textDirection: "normal",
        textMargin: null,
        textFillStyle: "black",
        textStrokeStyle: null,
        textLineWidth: 1,
        fillStyle: "silver",
        strokeStyle: "#FFF",
        lineWidth: 0,
        clearTheCanvas: !0,
        imageOverlay: !1,
        drawText: !0,
        pointerAngle: 0,
        wheelImage: null,
        imageDirection: "N"
    };
    for (var i in defaultOptions) null != t && void 0 !== t[i] ? this[i] = t[i] : this[i] = defaultOptions[i];
    if (null != t)
        for (var i in t) void 0 === this[i] && (this[i] = t[i]);
    for (this.canvasId ? (this.canvas = document.getElementById(this.canvasId), this.canvas ? (null == this.centerX && (this.centerX = this.canvas.width / 2), null == this.centerY && (this.centerY = this.canvas.height / 2), null == this.outerRadius && (this.canvas.width < this.canvas.height ? this.outerRadius = this.canvas.width / 2 - this.lineWidth : this.outerRadius = this.canvas.height / 2 - this.lineWidth), this.ctx = this.canvas.getContext("2d")) : (this.canvas = null, this.ctx = null)) : (this.cavnas = null, this.ctx = null), this.segments = new Array(null), x = 1; x <= this.numSegments; x++) null != t && t.segments && void 0 !== t.segments[x - 1] ? this.segments[x] = new Segment(t.segments[x - 1]) : this.segments[x] = new Segment;
    if (this.updateSegmentSizes(), null === this.textMargin && (this.textMargin = this.textFontSize / 1.7), null != t && t.animation && void 0 !== t.animation ? this.animation = new Animation(t.animation) : this.animation = new Animation, null != t && t.pins && void 0 !== t.pins && (this.pins = new Pin(t.pins)), "image" == this.drawMode || "segmentImage" == this.drawMode ? (void 0 === t.fillStyle && (this.fillStyle = null), void 0 === t.strokeStyle && (this.strokeStyle = "red"), void 0 === t.drawText && (this.drawText = !1), void 0 === t.lineWidth && (this.lineWidth = 1), void 0 === e && (e = !1)) : void 0 === e && (e = !0), null != t && t.pointerGuide && void 0 !== t.pointerGuide ? this.pointerGuide = new PointerGuide(t.pointerGuide) : this.pointerGuide = new PointerGuide, 1 == e) this.draw(this.clearTheCanvas);
    else if ("segmentImage" == this.drawMode)
        for (winwheelToDrawDuringAnimation = this, winhweelAlreadyDrawn = !1, y = 1; y <= this.numSegments; y++) null !== this.segments[y].image && (this.segments[y].imgData = new Image, this.segments[y].imgData.onload = winwheelLoadedImage, this.segments[y].imgData.src = this.segments[y].image)
}

function Pin(t) {
    defaultOptions = {
        visible: !0,
        number: 36,
        outerRadius: 3,
        fillStyle: "grey",
        strokeStyle: "red",
        lineWidth: 1,
        margin: 3
    };
    for (var e in defaultOptions) null != t && void 0 !== t[e] ? this[e] = t[e] : this[e] = defaultOptions[e];
    if (null != t)
        for (var e in t) void 0 === this[e] && (this[e] = t[e])
}

function Animation(t) {
    defaultOptions = {
        type: "spinOngoing",
        direction: "clockwise",
        propertyName: null,
        propertyValue: null,
        duration: 10,
        yoyo: !1,
        repeat: 0,
        easing: "power3.easeOut",
        stopAngle: null,
        spins: null,
        clearTheCanvas: null,
        callbackFinished: null,
        callbackBefore: null,
        callbackAfter: null
    };
    for (var e in defaultOptions) null != t && void 0 !== t[e] ? this[e] = t[e] : this[e] = defaultOptions[e];
    if (null != t)
        for (var e in t) void 0 === this[e] && (this[e] = t[e])
}

function Segment(t) {
    defaultOptions = {
        size: null,
        text: "",
        fillStyle: null,
        strokeStyle: null,
        lineWidth: null,
        textFontFamily: null,
        textFontSize: null,
        textFontWeight: null,
        textOrientation: null,
        textAlignment: null,
        textDirection: null,
        textMargin: null,
        textFillStyle: null,
        textStrokeStyle: null,
        textLineWidth: null,
        image: null,
        imageDirection: null,
        imgData: null
    };
    for (var e in defaultOptions) null != t && void 0 !== t[e] ? this[e] = t[e] : this[e] = defaultOptions[e];
    if (null != t)
        for (var e in t) void 0 === this[e] && (this[e] = t[e]);
    this.startAngle = 0, this.endAngle = 0
}

function PointerGuide(t) {
    defaultOptions = {
        display: !1,
        strokeStyle: "red",
        lineWidth: 3
    };
    for (var e in defaultOptions) null != t && void 0 !== t[e] ? this[e] = t[e] : this[e] = defaultOptions[e]
}

function winwheelPercentToDegrees(t) {
    var e = 0;
    return t > 0 && t <= 100 && (e = 360 * (t / 100)), e
}

function winwheelAnimationLoop() {
    winwheelToDrawDuringAnimation && (0 != winwheelToDrawDuringAnimation.animation.clearTheCanvas && winwheelToDrawDuringAnimation.ctx.clearRect(0, 0, winwheelToDrawDuringAnimation.canvas.width, winwheelToDrawDuringAnimation.canvas.height), null != winwheelToDrawDuringAnimation.animation.callbackBefore && eval(winwheelToDrawDuringAnimation.animation.callbackBefore), winwheelToDrawDuringAnimation.draw(!1), null != winwheelToDrawDuringAnimation.animation.callbackAfter && eval(winwheelToDrawDuringAnimation.animation.callbackAfter))
}

function winwheelStopAnimation(canCallback) {
    0 != canCallback && null != winwheelToDrawDuringAnimation.animation.callbackFinished && eval(winwheelToDrawDuringAnimation.animation.callbackFinished)
}

function winwheelLoadedImage() {
    if (0 == winhweelAlreadyDrawn) {
        var t = 0;
        for (i = 1; i <= winwheelToDrawDuringAnimation.numSegments; i++) null != winwheelToDrawDuringAnimation.segments[i].imgData && winwheelToDrawDuringAnimation.segments[i].imgData.height && t++;
        t == winwheelToDrawDuringAnimation.numSegments && (winhweelAlreadyDrawn = !0, winwheelToDrawDuringAnimation.draw())
    }
}

function show_optin_bar(t) {
    if ("off" != optinspin_wheel_spin.disable_optinbar) {
        var e = optinspin_wheel_spin.coupon_msg;
        "" != e && (e = e.replace("{coupon}", t), jQuery(".optinspin-optin-bar").html('<span class="optinspin-congo">' + e + '</span><span id="coupon-expire-date" class="coupon-expire-date"></span><span class="cancel">X</span>'), jQuery(".optinspin-optin-bar").show())
    }
}

function close_fortune_wheel() {
    setCookie("optinspin_wheel_open", 0, 1), jQuery("body").css("position", "initial"), jQuery(".woo-wheel-roll-bg").fadeOut();
    var t = jQuery(window).width() + 30;
    jQuery(".woo-wheel-roll").animate({
        marginLeft: "-" + t + "px"
    }), jQuery(".woo-try_btn").animate({
        marginLeft: "0%"
    }), jQuery(".wheelContainer").animate({
        left: "0%"
    }), jQuery(".optinspin-try-luck-btn.myButton").animate({
        "margin-top": "0%"
    }, 1e3)
}

function setCookie(t, e, i) {
    var n = new Date;
    n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
    var s = "expires=" + n.toUTCString();
    document.cookie = t + "=" + e + ";" + s + ";path=/"
}

function getCookie(t) {
    for (var e = t + "=", i = decodeURIComponent(document.cookie).split(";"), n = 0; n < i.length; n++) {
        for (var s = i[n];
             " " == s.charAt(0);) s = s.substring(1);
        if (0 == s.indexOf(e)) return s.substring(e.length, s.length)
    }
    return ""
}

function deleteCookie(t) {
    document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}

function close_win_loss_block() {
    jQuery("body").css("position", "initial"), jQuery("canvas#world").fadeOut(), jQuery(".winning_lossing").animate({
        opacity: 0,
        marginTop: "-200px"
    })
}

function call_ribbons() {
    (function() {
        var t, e, i, n, s, r, o, a, l, u, c;
        t = [
            [85, 71, 106],
            [174, 61, 99],
            [219, 56, 83],
            [244, 92, 68],
            [248, 182, 70]
        ], i = 2 * Math.PI, n = document.getElementById("world"), r = n.getContext("2d"), window.w = 0, window.h = 0, u = function() {
            return window.w = n.width = window.innerWidth, window.h = n.height = window.innerHeight
        }, window.addEventListener("resize", u, !1), window.onload = function() {
            return setTimeout(u, 0)
        }, l = function(t, e) {
            return (e - t) * Math.random() + t
        }, o = function(t, e, n, s) {
            return r.beginPath(), r.arc(t, e, n, 0, i, !1), r.fillStyle = s, r.fill()
        }, c = .5, document.onmousemove = function(t) {
            return c = t.pageX / w
        }, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60)
        }, e = function() {
            function e() {
                this.style = t[~~l(0, 5)], this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2], this.r = ~~l(2, 6), this.r2 = 2 * this.r, this.replace()
            }
            return e.prototype.replace = function() {
                return this.opacity = 0, this.dop = .03 * l(1, 4), this.x = l(-this.r2, w - this.r2), this.y = l(-20, h - this.r2), this.xmax = w - this.r, this.ymax = h - this.r, this.vx = l(0, 2) + 8 * c - 5, this.vy = .7 * this.r + l(-1, 1)
            }, e.prototype.draw = function() {
                var t;
                return this.x += this.vx, this.y += this.vy, this.opacity += this.dop, this.opacity > 1 && (this.opacity = 1, this.dop *= -1), (this.opacity < 0 || this.y > this.ymax) && this.replace(), 0 < (t = this.x) && t < this.xmax || (this.x = (this.x + this.xmax) % this.xmax), o(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")")
            }, e
        }(), s = function() {
            var t, i;
            for (i = [], a = t = 1, 350; t <= 350; a = ++t) i.push(new e);
            return i
        }(), window.step = function() {
            var t, e, i, n;
            for (requestAnimationFrame(step), r.clearRect(0, 0, w, h), n = [], e = 0, i = s.length; e < i; e++) t = s[e], n.push(t.draw());
            return n
        }, step()
    }).call(this)
}

function open_wheel_slide() {
    if ("" != getCookie("optinspin_use")) return !1;
    setCookie("optinspin_wheel_open", 1, 1), jQuery(".wheelContainer").css("visibility", "visible"), jQuery(".wheelContainer").css("opacity", "1"), jQuery("body").css("position", "fixed");
    var t = jQuery(window).width();
    if (t <= 480) {
        var e = jQuery(window).height() + 200;
        jQuery(".woo-wheel-bg-img").css("cssText", "height:" + e + "px;position:absolute;width:100%;z-index:-1")
    } else t > 480 && jQuery(".woo-wheel-roll").css("margin-left", "-" + t + "px");
    if (jQuery(".woo-wheel-roll").height(jQuery(window).height()), jQuery.browser.mozilla ? jQuery(".optinspin-right").height(jQuery(window).height() - 80) : t < 800 && jQuery(".woo-wheel-roll").css("overflow-y", "scroll"), jQuery(".woo-wheel-bg-img:before").height(jQuery(window).height()), jQuery(".woo-wheel-roll-bg").fadeIn(), jQuery(".woo-wheel-roll-bg").height(jQuery(window).height()), jQuery(".woo-wheel-roll").css("visibility", "visible"), (t = jQuery(window).width()) > 481 && (jQuery(".woo-wheel-roll").animate({
            marginLeft: "-15%"
        }), jQuery(".wheelContainer").css("top", "60px")), t < 480) {
        var i = jQuery(".optinspin-right").height() + 60;
        jQuery(".wheelContainer").css("top", "0px"), jQuery(".optinspin-right").height("0px"), jQuery(".optinspin-right").css("opacity", "0"), jQuery(".woo-wheel-roll").animate({
            marginLeft: "0%"
        }), jQuery(".optinspin-right").animate({
            opacity: 1,
            height: i + "px"
        }, 2e3, function() {
            jQuery(".optinspin-right").show()
        })
    }
    jQuery(".woo-try_btn").animate({
        marginLeft: "65%"
    }), t >= 568 && setTimeout(function() {
        jQuery(".wheelContainer").animate({
            left: "48%"
        })
    }, 200), jQuery(".optinspin-try-luck-btn.myButton").animate({
        "margin-top": "60%"
    }, 1e3)
}

function spin_480_start() {
    jQuery(".optinspin-right").animate({
        height: "100px"
    }, 2e3)
}

function spin_480_end() {
    jQuery(".wheelContainer").fadeOut()
}

function coupon_count_down(t) {
    var e = new Date(t).getTime(),
        i = setInterval(function() {
            var t = (new Date).getTime(),
                n = e - t,
                s = Math.floor(n / 864e5),
                r = Math.floor(n % 864e5 / 36e5),
                o = Math.floor(n % 36e5 / 6e4),
                a = Math.floor(n % 6e4 / 1e3);
            document.getElementById("coupon-expire-date").innerHTML = optinspin_wheel_spin.coupon_expire_label + '<span class="exp-time">' + s + 'd </span><span class="exp-time">' + r + 'h </span><span class="exp-time">' + o + 'm </span><span class="exp-time">' + a + "s </span>", n < 0 && (clearInterval(i), document.getElementById("coupon-expire-date").innerHTML = "COUPON EXPIRED")
        }, 1e3)
}

function loadJSON(t) {
    var e = new XMLHttpRequest;
    e.overrideMimeType("application/json"), e.open("GET", optinspin_wheel_spin.wheel_data, !0), e.onreadystatechange = function() {
        4 == e.readyState && "200" == e.status && t(e.responseText)
    }, e.send(null)
}

function myResult(t) {
    var e = t.coupon_label,
        i = jQuery(window).width(),
        n = jQuery(window).height();
    if (jQuery(".optinspin-right").height(n), i <= 480 && spin_480_end(), jQuery("#bottom_spin_icon").hide(), setCookie("optinspin_use", 1, optinspin_wheel_spin.cookie_expiry), 1 == t.win)
        if (setCookie("coupon-type", t.coupon_type, optinspin_wheel_spin.cookie_expiry), "wocoommerce" != t.coupon_type && jQuery(".winning_lossing .optinspin-add-to-cart").hide(), "" != t.generated_coupon) optinspin_generate_coupon(t.generated_discount_coupon, t.coupon_expiry_day), (l = t.msg).indexOf("{coupon}") >= 0 && (l = l.replace("{coupon}", "*****")), jQuery(".winning_lossing").prepend("<h3>" + l + "</h3>"), show_cross_after_spin();
        else {
            var s = "-";
            "coupon_text" == t.coupon_type ? (setCookie("optinspin_coupon_code", e, optinspin_wheel_spin.cookie_expiry), s = e) : "coupon_link" == t.coupon_type ? (setCookie("optinspin_coupon_code", t.coupon_link_label, optinspin_wheel_spin.cookie_expiry), setCookie("optinspin_coupon_link", t.coupon_link_url, optinspin_wheel_spin.cookie_expiry), s = t.coupon_link_label) : "edd_coupon" == t.coupon_type && setCookie("optinspin_coupon_code", t.coupon, optinspin_wheel_spin.cookie_expiry), show_cross_after_spin(), optinspin_add_stats("no_of_wins", t.coupon), 1 == optinspin_wheel_spin.sparkle_enable && jQuery("canvas#world").show(), jQuery(".optinspin-add-to-cart").fadeIn(), jQuery(".optinspin-decline-coupon").fadeIn(), setTimeout(function() {
                jQuery("canvas#world").fadeOut(1e3)
            }, 2e3), setCookie("optin_win_coupon_id", t.coupon, optinspin_wheel_spin.cookie_expiry), get_coupon_code(t.coupon);
            var r = getCookie("optin_win_coupon_id");
            if ("" != r) {
                var o = optinspin_wheel_spin.ajax_url,
                    a = {
                        action: "optinspin_coupon_request",
                        request_to: "get_coupon_expiry",
                        coupon_id: r
                    };
                jQuery.post(o, a, function(t) {
                    "" != t && coupon_count_down(t)
                })
            }
            var l = t.msg;
            if (l.indexOf("{coupon}") >= 0 && (l = l.replace("{coupon}", "*****")), jQuery(".winning_lossing").prepend("<h3>" + l + "</h3>"), jQuery(".win-coupon").html(t.coupon), " - " != t.coupon) {
                var o = optinspin_wheel_spin.ajax_url,
                    a = {
                        action: "optinspin_coupon_request",
                        request_to: "send_email",
                        coupon: s,
                        email_temp: "win"
                    };
                jQuery.post(o, a, function(t) {})
            } else {
                var o = optinspin_wheel_spin.ajax_url,
                    a = {
                        action: "optinspin_coupon_request",
                        request_to: "send_email",
                        coupon: s,
                        email_temp: "loss"
                    };
                jQuery.post(o, a, function(t) {})
            }
        }
    else 0 == t.win && (jQuery(".optinspin-win-info").hide(), optinspin_add_stats("no_of_loss", ""), jQuery(".winning_lossing").prepend("<h3>" + t.msg + "</h3>"), jQuery(".win-coupon").html(t.coupon), show_cross_after_spin());
    t.userData, jQuery(".wheelContainer").animate({
        marginLeft: "0%"
    }, 300), jQuery(".winning_lossing").show()
}

function show_cross_after_spin() {
    jQuery(".optinspin-cross-wrapper").show(), jQuery(".optinspin-cross-label").hide()
}

function myError(t) {}

function myGameEnd(t) {
    TweenMax.delayedCall(5, function() {})
}

function init() {
    loadJSON(function(t) {
        var e = JSON.parse(t);
        console.log(e);
        var i = document.querySelector(".spinBtn");
        (new Spin2WinWheel).init({
            data: e,
            onResult: myResult,
            onGameEnd: myGameEnd,
            onError: myError,
            spinTrigger: i
        })
    })
}

function optinspin_add_stats(t, e) {
    var i = optinspin_wheel_spin.ajax_url,
        n = {
            action: "optinspin_statistics",
            request_to: t,
            coupon: e,
            email: getCookie("optinspin_email"),
            username: getCookie("optinspin_user")
        };
    jQuery.post(i, n, function(t) {})
}

function optinspin_generate_coupon(t, e) {
    var i = optinspin_wheel_spin.ajax_url,
        n = {
            action: "optinspin_coupon_request",
            request_to: "generate_coupon",
            coupon_discount: t,
            coupon_expire: e
        };
    jQuery.post(i, n, function(t) {
        var e = t.split("_");
        setTimeout(function() {
            jQuery("canvas#world").fadeOut(1e3)
        }, 2e3), jQuery(".win-coupon").html(e[0]), setCookie("optinspin_use", 1, optinspin_wheel_spin.cookie_expiry), setCookie("optin_win_coupon_id", e[0], optinspin_wheel_spin.cookie_expiry), setCookie("optinspin_coupon_code", e[1], optinspin_wheel_spin.cookie_expiry), optinspin_add_stats("no_of_wins", e[0]), 1 == optinspin_wheel_spin.sparkle_enable && jQuery("canvas#world").show(), jQuery(".optinspin-add-to-cart").fadeIn(), jQuery(".optinspin-decline-coupon").fadeIn(), setTimeout(function() {
            jQuery("canvas#world").fadeOut(1e3)
        }, 2e3), get_coupon_code(e[0]);
        var i = optinspin_wheel_spin.ajax_url,
            n = {
                action: "optinspin_coupon_request",
                request_to: "send_email",
                coupon: e[0],
                email_temp: "win"
            };
        jQuery.post(i, n, function(t) {})
    })
}

function get_coupon_code(t) {
    if ("coupon_text" == getCookie("coupon-type")) show_optin_bar(getCookie("optinspin_coupon_code"));
    else if ("coupon_link" == getCookie("coupon-type")) {
        var e = getCookie("optinspin_coupon_code");
        show_optin_bar('<a href="' + getCookie("optinspin_coupon_link") + '">' + e + "</a>")
    } else if ("edd_coupon" == getCookie("coupon-type")) show_optin_bar(getCookie("optinspin_coupon_code"));
    else {
        var i = optinspin_wheel_spin.ajax_url,
            n = {
                action: "optinspin_coupon_request",
                request_to: "get_coupon",
                coupon: t
            };
        jQuery.post(i, n, function(e) {
            var i = jQuery(".winning_lossing h3").html();
            i = i.replace("*****", e), jQuery(".winning_lossing h3").html(i);
            var n = jQuery(".optinspin-win-info").html();
            n = n.replace("*****", e), jQuery(".optinspin-win-info").html(n), show_optin_bar(e), jQuery(".optinspin-optin-bar span.cancel").on("click", function() {
                jQuery(".optinspin-optin-bar").hide()
            });
            var s = optinspin_wheel_spin.ajax_url,
                r = {
                    action: "optinspin_coupon_request",
                    request_to: "get_coupon_expiry",
                    coupon_id: t
                };
            jQuery.post(s, r, function(t) {
                "" != t && coupon_count_down(t)
            })
        })
    }
}
jQuery(document).ready(function() {
    jQuery("input[name=_optinspin_mailchimp_get_list]").attr("value", "Get Mailchimp Email List"), jQuery("input[name=_optinspin_mailchimp_api_key]").addClass("mailchimp_api_key"), jQuery("input[name=_optinspin_mailchimp_get_list]").click(function() {
        if (jQuery("#errorkey").remove(), jQuery("input[name=_optinspin_mailchimp_api_key]").val()) {
            var t = php_data.ajaxurl,
                e = {
                    action: "optinspin_mailchimp_get_list",
                    _optinspin_mailchimp_api_key: jQuery("input[name='_optinspin_mailchimp_api_key']").val()
                };
            jQuery.post(t, e, function(t) {
                var e = JSON.parse(t);
                e.statuss && null != e.response ? (jQuery("select[name=_crb_show_socials]").html(e.response), jQuery("select[name=_crb_show_socials]").openSelect()) : jQuery("input[name=_optinspin_mailchimp_api_key]").after('<div id="errorkey" style="color:red;">' + e.error + "</div>")
            })
        } else jQuery("input[name=_optinspin_mailchimp_api_key]").attr("placeholder", "Please API KEY!")
    }),
        function(t) {
            "use strict";
            jQuery.fn.openSelect = function() {
                return this.each(function(t, e) {
                    if (document.createEvent) {
                        var i = document.createEvent("MouseEvents");
                        i.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(i)
                    } else element.fireEvent && e.fireEvent("onmousedown")
                })
            }
        }()
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(t, e, i) {
        var n, s, r, o, a, l, h, u, c, p = {
                css: {}
            },
            f = {
                css: {}
            },
            d = {
                css: {}
            },
            _ = {
                css: {}
            },
            g = _gsScope._gsDefine.globals,
            m = {},
            y = {
                style: {}
            },
            v = _gsScope.document || {
                createElement: function() {
                    return y
                }
            },
            x = v.documentElement || {},
            w = function(t) {
                return v.createElementNS ? v.createElementNS("http://www.w3.org/1999/xhtml", t) : v.createElement(t)
            },
            T = w("div"),
            b = [],
            S = function() {
                return !1
            },
            k = 180 / Math.PI,
            P = 999999999999999,
            A = Date.now || function() {
                return (new Date).getTime()
            },
            C = !(v.addEventListener || !v.all),
            O = v.createElement("div"),
            R = [],
            M = {},
            D = 0,
            N = /^(?:a|input|textarea|button|select)$/i,
            X = 0,
            j = _gsScope.navigator && -1 !== _gsScope.navigator.userAgent.toLowerCase().indexOf("android"),
            E = 0,
            Y = {},
            L = {},
            I = function(t) {
                if ("string" == typeof t && (t = e.selector(t)), !t || t.nodeType) return [t];
                var i, n = [],
                    s = t.length;
                for (i = 0; i !== s; n.push(t[i++]));
                return n
            },
            F = function(t, e) {
                var i, n = {};
                if (e)
                    for (i in t) n[i] = t[i] * e;
                else
                    for (i in t) n[i] = t[i];
                return n
            },
            B = function() {
                for (var t = R.length; --t > -1;) R[t]()
            },
            Q = function(t) {
                R.push(t), 1 === R.length && e.ticker.addEventListener("tick", B, this, !1, 1)
            },
            W = function(t) {
                for (var i = R.length; --i > -1;) R[i] === t && R.splice(i, 1);
                e.to(z, 0, {
                    overwrite: "all",
                    delay: 15,
                    onComplete: z
                })
            },
            z = function() {
                R.length || e.ticker.removeEventListener("tick", B)
            },
            V = function(t, e) {
                var i;
                for (i in e) void 0 === t[i] && (t[i] = e[i]);
                return t
            },
            G = function() {
                return null != window.pageYOffset ? window.pageYOffset : null != v.scrollTop ? v.scrollTop : x.scrollTop || v.body.scrollTop || 0
            },
            q = function() {
                return null != window.pageXOffset ? window.pageXOffset : null != v.scrollLeft ? v.scrollLeft : x.scrollLeft || v.body.scrollLeft || 0
            },
            H = function(t, e) {
                jt(t, "scroll", e), Z(t.parentNode) || H(t.parentNode, e)
            },
            U = function(t, e) {
                Et(t, "scroll", e), Z(t.parentNode) || U(t.parentNode, e)
            },
            Z = function(t) {
                return !(t && t !== x && t !== v && t !== v.body && t !== window && t.nodeType && t.parentNode)
            },
            $ = function(t, e) {
                var i = "x" === e ? "Width" : "Height",
                    n = "scroll" + i,
                    s = "client" + i,
                    r = v.body;
                return Math.max(0, Z(t) ? Math.max(x[n], r[n]) - (window["inner" + i] || x[s] || r[s]) : t[n] - t[s])
            },
            J = function(t) {
                var e = Z(t),
                    i = $(t, "x"),
                    n = $(t, "y");
                e ? t = L : J(t.parentNode), t._gsMaxScrollX = i, t._gsMaxScrollY = n, t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0
            },
            K = function(t, e) {
                return t = t || window.event, m.pageX = t.clientX + v.body.scrollLeft + x.scrollLeft, m.pageY = t.clientY + v.body.scrollTop + x.scrollTop, e && (t.returnValue = !1), m
            },
            tt = function(t) {
                return t ? ("string" == typeof t && (t = e.selector(t)), t.length && t !== window && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === window || t.nodeType && t.style ? t : null) : t
            },
            et = function(t, e) {
                var i, s, r, o = t.style;
                if (void 0 === o[e]) {
                    for (r = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5, i = e.charAt(0).toUpperCase() + e.substr(1); --s > -1 && void 0 === o[r[s] + i];);
                    if (0 > s) return "";
                    e = (n = 3 === s ? "ms" : r[s]) + i
                }
                return e
            },
            it = function(t, e, i) {
                var n = t.style;
                n && (void 0 === n[e] && (e = et(t, e)), null == i ? n.removeProperty ? n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : n.removeAttribute(e) : void 0 !== n[e] && (n[e] = i))
            },
            nt = v.defaultView ? v.defaultView.getComputedStyle : S,
            st = /(?:Left|Right|Width)/i,
            rt = /(?:\d|\-|\+|=|#|\.)*/g,
            ot = function(t, e, i, n, s) {
                if ("px" === n || !n) return i;
                if ("auto" === n || !i) return 0;
                var r, o = st.test(e),
                    a = t,
                    l = T.style,
                    h = 0 > i;
                return h && (i = -i), "%" === n && -1 !== e.indexOf("border") ? r = i / 100 * (o ? t.clientWidth : t.clientHeight) : (l.cssText = "border:0 solid red;position:" + lt(t, "position", !0) + ";line-height:0;", "%" !== n && a.appendChild ? l[o ? "borderLeftWidth" : "borderTopWidth"] = i + n : (a = t.parentNode || v.body, l[o ? "width" : "height"] = i + n), a.appendChild(T), r = parseFloat(T[o ? "offsetWidth" : "offsetHeight"]), a.removeChild(T), 0 !== r || s || (r = ot(t, e, i, n, !0))), h ? -r : r
            },
            at = function(t, e) {
                if ("absolute" !== lt(t, "position", !0)) return 0;
                var i = "left" === e ? "Left" : "Top",
                    n = lt(t, "margin" + i, !0);
                return t["offset" + i] - (ot(t, e, parseFloat(n), (n + "").replace(rt, "")) || 0)
            },
            lt = function(t, e, i) {
                var n, s = (t._gsTransform || {})[e];
                return s || 0 === s ? s : (t.style[e] ? s = t.style[e] : (n = nt(t)) ? (s = n.getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase()), s = s || n.length ? s : n[e]) : t.currentStyle && (s = t.currentStyle[e]), "auto" !== s || "top" !== e && "left" !== e || (s = at(t, e)), i ? s : parseFloat(s) || 0)
            },
            ht = function(t, e, i) {
                var n = t.vars,
                    s = n[i],
                    r = t._listeners[e];
                "function" == typeof s && s.apply(n[i + "Scope"] || n.callbackScope || t, n[i + "Params"] || [t.pointerEvent]), r && t.dispatchEvent(e)
            },
            ut = function(t, e) {
                var i, n, s, r = tt(t);
                return r ? Rt(r, e) : void 0 !== t.left ? (s = St(e), {
                    left: t.left - s.x,
                    top: t.top - s.y,
                    width: t.width,
                    height: t.height
                }) : (n = t.min || t.minX || t.minRotation || 0, i = t.min || t.minY || 0, {
                    left: n,
                    top: i,
                    width: (t.max || t.maxX || t.maxRotation || 0) - n,
                    height: (t.max || t.maxY || 0) - i
                })
            },
            ct = function() {
                if (!v.createElementNS) return o = 0, void(a = !1);
                var t, e, i, n, s = w("div"),
                    r = v.createElementNS("http://www.w3.org/2000/svg", "svg"),
                    c = w("div"),
                    p = s.style,
                    f = v.body || x,
                    d = "flex" === lt(f, "display", !0);
                v.body && dt && (p.position = "absolute", f.appendChild(c), c.appendChild(s), n = s.offsetParent, c.style[dt] = "rotate(1deg)", u = s.offsetParent === n, c.style.position = "absolute", p.height = "10px", n = s.offsetTop, c.style.border = "5px solid red", h = n !== s.offsetTop, f.removeChild(c)), p = r.style, r.setAttributeNS(null, "width", "400px"), r.setAttributeNS(null, "height", "400px"), r.setAttributeNS(null, "viewBox", "0 0 400 400"), p.display = "block", p.boxSizing = "border-box", p.border = "0px solid red", p.transform = "none", s.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", f.appendChild(s), s.appendChild(r), e = (i = r.createSVGPoint().matrixTransform(r.getScreenCTM())).y, s.scrollTop = 100, i.x = i.y = 0, i = i.matrixTransform(r.getScreenCTM()), l = e - i.y < 100.1 ? 0 : e - i.y - 150, s.removeChild(r), f.removeChild(s), f.appendChild(r), d && (f.style.display = "block"), e = (t = r.getScreenCTM()).e, p.border = "50px solid red", t = r.getScreenCTM(), 0 === e && 0 === t.e && 0 === t.f && 1 === t.a ? (o = 1, a = !0) : (o = e !== t.e ? 1 : 0, a = 1 !== t.a), d && (f.style.display = "flex"), f.removeChild(r)
            },
            pt = "" !== et(T, "perspective"),
            ft = et(T, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
            dt = et(T, "transform"),
            _t = dt.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
            gt = {},
            mt = {},
            yt = _gsScope.SVGElement,
            vt = function(t) {
                return !!(yt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
            },
            xt = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
            wt = [],
            Tt = [],
            bt = function(t) {
                if (!t.getBoundingClientRect || !t.parentNode || !dt) return {
                    offsetTop: 0,
                    offsetLeft: 0,
                    scaleX: 1,
                    scaleY: 1,
                    offsetParent: x
                };
                if (!1 !== Vt.cacheSVGData && t._dCache && t._dCache.lastUpdate === e.ticker.frame) return t._dCache;
                var i, n, s, r, h, u, c, p, f, d, _, g, m = t,
                    y = kt(t);
                if (y.lastUpdate = e.ticker.frame, t.getBBox && !y.isSVGRoot) {
                    for (m = t.parentNode, i = t.getBBox(); m && "svg" !== (m.nodeName + "").toLowerCase();) m = m.parentNode;
                    return r = bt(m), y.offsetTop = i.y * r.scaleY, y.offsetLeft = i.x * r.scaleX, y.scaleX = r.scaleX, y.scaleY = r.scaleY, y.offsetParent = m || x, y
                }
                for ((s = y.offsetParent) === v.body && (s = x), Tt.length = wt.length = 0; m && ("matrix(1, 0, 0, 1, 0, 0)" !== (h = lt(m, dt, !0)) && "none" !== h && "translate3d(0px, 0px, 0px)" !== h && (Tt.push(m), wt.push(m.style[dt]), m.style[dt] = "none"), m !== s);) m = m.parentNode;
                for (n = s.getBoundingClientRect(), h = t.getScreenCTM(), c = (p = t.createSVGPoint()).matrixTransform(h), p.x = p.y = 10, p = p.matrixTransform(h), y.scaleX = (p.x - c.x) / 10, y.scaleY = (p.y - c.y) / 10, void 0 === o && ct(), y.borderBox && !a && t.getAttribute("width") && (r = nt(t) || {}, f = parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth) || 0, d = parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth) || 0, _ = parseFloat(r.width) || 0, g = parseFloat(r.height) || 0, y.scaleX *= (_ - f) / _, y.scaleY *= (g - d) / g), l ? (i = t.getBoundingClientRect(), y.offsetLeft = i.left - n.left, y.offsetTop = i.top - n.top) : (y.offsetLeft = c.x - n.left, y.offsetTop = c.y - n.top), y.offsetParent = s, u = Tt.length; --u > -1;) Tt[u].style[dt] = wt[u];
                return y
            },
            St = function(t, i) {
                if (i = i || {}, !t || t === x || !t.parentNode || t === window) return {
                    x: 0,
                    y: 0
                };
                var n = nt(t),
                    s = ft && n ? n.getPropertyValue(ft) : "50% 50%",
                    r = s.split(" "),
                    o = -1 !== s.indexOf("left") ? "0%" : -1 !== s.indexOf("right") ? "100%" : r[0],
                    a = -1 !== s.indexOf("top") ? "0%" : -1 !== s.indexOf("bottom") ? "100%" : r[1];
                return ("center" === a || null == a) && (a = "50%"), ("center" === o || isNaN(parseFloat(o))) && (o = "50%"), t.getBBox && vt(t) ? (t._gsTransform || (e.set(t, {
                    x: "+=0",
                    overwrite: !1
                }), void 0 === t._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), s = t.getBBox(), i.x = t._gsTransform.xOrigin - s.x, i.y = t._gsTransform.yOrigin - s.y) : (t.getBBox && -1 !== (o + a).indexOf("%") && (t = t.getBBox(), t = {
                    offsetWidth: t.width,
                    offsetHeight: t.height
                }), i.x = -1 !== o.indexOf("%") ? t.offsetWidth * parseFloat(o) / 100 : parseFloat(o), i.y = -1 !== a.indexOf("%") ? t.offsetHeight * parseFloat(a) / 100 : parseFloat(a)), i
            },
            kt = function(t) {
                if (!1 !== Vt.cacheSVGData && t._dCache && t._dCache.lastUpdate === e.ticker.frame) return t._dCache;
                var i, n = t._dCache = t._dCache || {},
                    s = nt(t),
                    r = t.getBBox && vt(t),
                    o = "svg" === (t.nodeName + "").toLowerCase();
                if (n.isSVG = r, n.isSVGRoot = o, n.borderBox = "border-box" === s.boxSizing, n.computedStyle = s, o)(i = t.parentNode || x).insertBefore(T, t), n.offsetParent = T.offsetParent || x, i.removeChild(T);
                else if (r) {
                    for (i = t.parentNode; i && "svg" !== (i.nodeName + "").toLowerCase();) i = i.parentNode;
                    n.offsetParent = i
                } else n.offsetParent = t.offsetParent;
                return n
            },
            Pt = function(t, e, i, n, s) {
                if (t === window || !t || !t.style || !t.parentNode) return [1, 0, 0, 1, 0, 0];
                var r, a, l, c, p, f, d, _, g, m, y, w, T, b, S = t._dCache || kt(t),
                    k = t.parentNode,
                    P = k._dCache || kt(k),
                    A = S.computedStyle,
                    C = S.isSVG ? P.offsetParent : k.offsetParent;
                return r = S.isSVG && -1 !== (t.style[dt] + "").indexOf("matrix") ? t.style[dt] : A ? A.getPropertyValue(_t) : t.currentStyle ? t.currentStyle[dt] : "1,0,0,1,0,0", t.getBBox && -1 !== (t.getAttribute("transform") + "").indexOf("matrix") && (r = t.getAttribute("transform")), (r = (r + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0]).length > 6 && (r = [r[0], r[1], r[4], r[5], r[12], r[13]]), n ? r[4] = r[5] = 0 : S.isSVG && (p = t._gsTransform) && (p.xOrigin || p.yOrigin) && (r[0] = parseFloat(r[0]), r[1] = parseFloat(r[1]), r[2] = parseFloat(r[2]), r[3] = parseFloat(r[3]), r[4] = parseFloat(r[4]) - (p.xOrigin - (p.xOrigin * r[0] + p.yOrigin * r[2])), r[5] = parseFloat(r[5]) - (p.yOrigin - (p.xOrigin * r[1] + p.yOrigin * r[3]))), e && (void 0 === o && ct(), l = S.isSVG || S.isSVGRoot ? bt(t) : t, S.isSVG ? (c = t.getBBox(), m = P.isSVGRoot ? {
                    x: 0,
                    y: 0
                } : k.getBBox(), l = {
                    offsetLeft: c.x - m.x,
                    offsetTop: c.y - m.y,
                    offsetParent: S.offsetParent
                }) : S.isSVGRoot ? (y = parseInt(A.borderTopWidth, 10) || 0, w = parseInt(A.borderLeftWidth, 10) || 0, T = (r[0] - o) * w + r[2] * y, b = r[1] * w + (r[3] - o) * y, f = e.x, d = e.y, _ = f - (f * r[0] + d * r[2]), g = d - (f * r[1] + d * r[3]), r[4] = parseFloat(r[4]) + _, r[5] = parseFloat(r[5]) + g, e.x -= _, e.y -= g, f = l.scaleX, d = l.scaleY, s || (e.x *= f, e.y *= d), r[0] *= f, r[1] *= d, r[2] *= f, r[3] *= d, xt || (e.x += T, e.y += b), C === v.body && l.offsetParent === x && (C = x)) : !h && t.offsetParent && (e.x += parseInt(lt(t.offsetParent, "borderLeftWidth"), 10) || 0, e.y += parseInt(lt(t.offsetParent, "borderTopWidth"), 10) || 0), a = k === x || k === v.body, r[4] = Number(r[4]) + e.x + (l.offsetLeft || 0) - i.x - (a ? 0 : k.scrollLeft || 0), r[5] = Number(r[5]) + e.y + (l.offsetTop || 0) - i.y - (a ? 0 : k.scrollTop || 0), k && "fixed" === lt(t, "position", A) && (r[4] += q(), r[5] += G()), !k || k === x || C !== l.offsetParent || P.isSVG || u && "100100" !== Pt(k).join("") || (l = P.isSVGRoot ? bt(k) : k, r[4] -= l.offsetLeft || 0, r[5] -= l.offsetTop || 0, h || !P.offsetParent || S.isSVG || S.isSVGRoot || (r[4] -= parseInt(lt(P.offsetParent, "borderLeftWidth"), 10) || 0, r[5] -= parseInt(lt(P.offsetParent, "borderTopWidth"), 10) || 0))), r
            },
            At = function(t, e) {
                if (!t || t === window || !t.parentNode) return [1, 0, 0, 1, 0, 0];
                for (var i, n, s, r, o, a, l, h, u = St(t, gt), c = St(t.parentNode, mt), p = Pt(t, u, c, !1, !0);
                     (t = t.parentNode) && t.parentNode && t !== x;) u = c, c = St(t.parentNode, u === gt ? mt : gt), l = Pt(t, u, c), i = p[0], n = p[1], s = p[2], r = p[3], o = p[4], a = p[5], p[0] = i * l[0] + n * l[2], p[1] = i * l[1] + n * l[3], p[2] = s * l[0] + r * l[2], p[3] = s * l[1] + r * l[3], p[4] = o * l[0] + a * l[2] + l[4], p[5] = o * l[1] + a * l[3] + l[5];
                return e && (i = p[0], n = p[1], s = p[2], r = p[3], o = p[4], a = p[5], h = i * r - n * s, p[0] = r / h, p[1] = -n / h, p[2] = -s / h, p[3] = i / h, p[4] = (s * a - r * o) / h, p[5] = -(i * a - n * o) / h), p
            },
            Ct = function(t, e, i, n, s) {
                t = tt(t);
                var r = At(t, !1),
                    o = e.x,
                    a = e.y;
                return i && (St(t, e), o -= e.x, a -= e.y), n = !0 === n ? e : n || {}, n.x = o * r[0] + a * r[2] + r[4], n.y = o * r[1] + a * r[3] + r[5], n
            },
            Ot = function(t, e, i) {
                var n = t.x * e[0] + t.y * e[2] + e[4],
                    s = t.x * e[1] + t.y * e[3] + e[5];
                return t.x = n * i[0] + s * i[2] + i[4], t.y = n * i[1] + s * i[3] + i[5], t
            },
            Rt = function(t, e, i) {
                if (!(t = tt(t))) return null;
                e = tt(e);
                var n, s, r, o, a, l, h, u, c, p, f, d, _, g, m, y, w, T, b, S, k, P, A = t.getBBox && vt(t);
                if (t === window) o = G(), s = q(), r = s + (x.clientWidth || t.innerWidth || v.body.clientWidth || 0), a = o + ((t.innerHeight || 0) - 20 < x.clientHeight ? x.clientHeight : t.innerHeight || v.body.clientHeight || 0);
                else {
                    if (void 0 === e || e === window) return t.getBoundingClientRect();
                    s = -(n = St(t)).x, o = -n.y, A ? (d = t.getBBox(), _ = d.width, g = d.height) : "svg" !== (t.nodeName + "").toLowerCase() && t.offsetWidth ? (_ = t.offsetWidth, g = t.offsetHeight) : (k = nt(t), _ = parseFloat(k.width), g = parseFloat(k.height)), r = s + _, a = o + g, "svg" !== t.nodeName.toLowerCase() || C || (m = bt(t), P = m.computedStyle || {}, T = (t.getAttribute("viewBox") || "0 0").split(" "), b = parseFloat(T[0]), S = parseFloat(T[1]), y = parseFloat(P.borderLeftWidth) || 0, w = parseFloat(P.borderTopWidth) || 0, r -= _ - (_ - y) / m.scaleX - b, a -= g - (g - w) / m.scaleY - S, s -= y / m.scaleX - b, o -= w / m.scaleY - S, k && (r += (parseFloat(P.borderRightWidth) + y) / m.scaleX, a += (w + parseFloat(P.borderBottomWidth)) / m.scaleY))
                }
                return t === e ? {
                    left: s,
                    top: o,
                    width: r - s,
                    height: a - o
                } : (l = At(t), h = At(e, !0), u = Ot({
                    x: s,
                    y: o
                }, l, h), c = Ot({
                    x: r,
                    y: o
                }, l, h), p = Ot({
                    x: r,
                    y: a
                }, l, h), f = Ot({
                    x: s,
                    y: a
                }, l, h), s = Math.min(u.x, c.x, p.x, f.x), o = Math.min(u.y, c.y, p.y, f.y), Y.x = Y.y = 0, i && St(e, Y), {
                    left: s + Y.x,
                    top: o + Y.y,
                    width: Math.max(u.x, c.x, p.x, f.x) - s,
                    height: Math.max(u.y, c.y, p.y, f.y) - o
                })
            },
            Mt = function(t) {
                return !!(t && t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
            },
            Dt = function(t) {
                var e, i, n, s = [],
                    r = t.length;
                for (e = 0; r > e; e++)
                    if (i = t[e], Mt(i))
                        for (n = i.length, n = 0; n < i.length; n++) s.push(i[n]);
                    else i && 0 !== i.length && s.push(i);
                return s
            },
            Nt = "ontouchstart" in x && "orientation" in window,
            Xt = function(t) {
                for (var e = t.split(","), i = (void 0 !== T.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== T.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), n = {}, s = 8; --s > -1;) n[e[s]] = i[s], n[i[s]] = e[s];
                return n
            }("touchstart,touchmove,touchend,touchcancel"),
            jt = function(t, e, i, n) {
                t.addEventListener ? t.addEventListener(Xt[e] || e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
            },
            Et = function(t, e, i) {
                t.removeEventListener ? t.removeEventListener(Xt[e] || e, i) : t.detachEvent && t.detachEvent("on" + e, i)
            },
            Yt = function(t, e) {
                for (var i = t.length; --i > -1;)
                    if (t[i].identifier === e) return !0;
                return !1
            },
            Lt = function(t) {
                s = t.touches && X < t.touches.length, Et(t.target, "touchend", Lt)
            },
            It = function(t) {
                s = t.touches && X < t.touches.length, jt(t.target, "touchend", Lt)
            },
            Ft = function(t, e, i, n, s, r) {
                var o, a, l, h = {};
                if (e)
                    if (1 !== s && e instanceof Array) {
                        if (h.end = o = [], l = e.length, "object" == typeof e[0])
                            for (a = 0; l > a; a++) o[a] = F(e[a], s);
                        else
                            for (a = 0; l > a; a++) o[a] = e[a] * s;
                        i += 1.1, n -= 1.1
                    } else h.end = "function" == typeof e ? function(i) {
                        var n, r, o = e.call(t, i);
                        if (1 !== s && "object" == typeof o) {
                            n = {};
                            for (r in o) n[r] = o[r] * s;
                            o = n
                        }
                        return o
                    } : e;
                return (i || 0 === i) && (h.max = i), (n || 0 === n) && (h.min = n), r && (h.velocity = 0), h
            },
            Bt = function(t) {
                var e;
                return !(!t || !t.getAttribute || "BODY" === t.nodeName) && (!("true" !== (e = t.getAttribute("data-clickable")) && ("false" === e || !t.onclick && !N.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || Bt(t.parentNode))
            },
            Qt = function(t, e) {
                for (var i, n = t.length; --n > -1;) i = t[n], i.ondragstart = i.onselectstart = e ? null : S, it(i, "userSelect", e ? "text" : "none")
            },
            Wt = function() {
                var t, e = v.createElement("div"),
                    i = v.createElement("div"),
                    n = i.style,
                    s = v.body || T;
                return n.display = "inline-block", n.position = "relative", e.style.cssText = i.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", e.appendChild(i), s.appendChild(e), c = i.offsetHeight + 18 > e.scrollHeight, n.width = "100%", dt || (n.paddingRight = "500px", t = e.scrollLeft = e.scrollWidth - e.clientWidth, n.left = "-90px", t = t !== e.scrollLeft), s.removeChild(e), t
            }(),
            zt = function(t, i) {
                t = tt(t), i = i || {};
                var n, s, r, o, a, l, h = v.createElement("div"),
                    u = h.style,
                    p = t.firstChild,
                    f = 0,
                    d = 0,
                    _ = t.scrollTop,
                    g = t.scrollLeft,
                    m = t.scrollWidth,
                    y = t.scrollHeight,
                    x = 0,
                    w = 0,
                    T = 0;
                pt && !1 !== i.force3D ? (a = "translate3d(", l = "px,0px)") : dt && (a = "translate(", l = "px)"), this.scrollTop = function(t, e) {
                    return arguments.length ? void this.top(-t, e) : -this.top()
                }, this.scrollLeft = function(t, e) {
                    return arguments.length ? void this.left(-t, e) : -this.left()
                }, this.left = function(n, s) {
                    if (!arguments.length) return -(t.scrollLeft + d);
                    var r = t.scrollLeft - g,
                        o = d;
                    return (r > 2 || -2 > r) && !s ? (g = t.scrollLeft, e.killTweensOf(this, !0, {
                        left: 1,
                        scrollLeft: 1
                    }), this.left(-g), void(i.onKill && i.onKill())) : (0 > (n = -n) ? (d = n - .5 | 0, n = 0) : n > w ? (d = n - w | 0, n = w) : d = 0, (d || o) && (a ? this._suspendTransforms || (u[dt] = a + -d + "px," + -f + l) : u.left = -d + "px", Wt && d + x >= 0 && (u.paddingRight = d + x + "px")), t.scrollLeft = 0 | n, void(g = t.scrollLeft))
                }, this.top = function(n, s) {
                    if (!arguments.length) return -(t.scrollTop + f);
                    var r = t.scrollTop - _,
                        o = f;
                    return (r > 2 || -2 > r) && !s ? (_ = t.scrollTop, e.killTweensOf(this, !0, {
                        top: 1,
                        scrollTop: 1
                    }), this.top(-_), void(i.onKill && i.onKill())) : (0 > (n = -n) ? (f = n - .5 | 0, n = 0) : n > T ? (f = n - T | 0, n = T) : f = 0, (f || o) && (a ? this._suspendTransforms || (u[dt] = a + -d + "px," + -f + l) : u.top = -f + "px"), t.scrollTop = 0 | n, void(_ = t.scrollTop))
                }, this.maxScrollTop = function() {
                    return T
                }, this.maxScrollLeft = function() {
                    return w
                }, this.disable = function() {
                    for (p = h.firstChild; p;) o = p.nextSibling, t.appendChild(p), p = o;
                    t === h.parentNode && t.removeChild(h)
                }, this.enable = function() {
                    if ((p = t.firstChild) !== h) {
                        for (; p;) o = p.nextSibling, h.appendChild(p), p = o;
                        t.appendChild(h), this.calibrate()
                    }
                }, this.calibrate = function(e) {
                    var i, o, a = t.clientWidth === n;
                    _ = t.scrollTop, g = t.scrollLeft, (!a || t.clientHeight !== s || h.offsetHeight !== r || m !== t.scrollWidth || y !== t.scrollHeight || e) && ((f || d) && (i = this.left(), o = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), (!a || e) && (u.display = "block", u.width = "auto", u.paddingRight = "0px", (x = Math.max(0, t.scrollWidth - t.clientWidth)) && (x += lt(t, "paddingLeft") + (c ? lt(t, "paddingRight") : 0))), u.display = "inline-block", u.position = "relative", u.overflow = "visible", u.verticalAlign = "top", u.width = "100%", u.paddingRight = x + "px", c && (u.paddingBottom = lt(t, "paddingBottom", !0)), C && (u.zoom = "1"), n = t.clientWidth, s = t.clientHeight, m = t.scrollWidth, y = t.scrollHeight, w = t.scrollWidth - n, T = t.scrollHeight - s, r = h.offsetHeight, u.display = "block", (i || o) && (this.left(i), this.top(o)))
                }, this.content = h, this.element = t, this._suspendTransforms = !1, this.enable()
            },
            Vt = function(n, o) {
                t.call(this, n), n = tt(n), r || (r = g.com.greensock.plugins.ThrowPropsPlugin), this.vars = o = F(o || {}), this.target = n, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(o.dragResistance) || 0, this.edgeResistance = isNaN(o.edgeResistance) ? 1 : parseFloat(o.edgeResistance) || 0, this.lockAxis = o.lockAxis, this.autoScroll = o.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!o.allowEventDefault;
                var a, l, h, u, c, m, y, w, T, S, R, N, B, z, G, q, $, et, nt, st, rt, ot, at, ct, pt, ft, dt, _t, gt, mt, yt, xt, wt, Tt, bt = (o.type || (C ? "top,left" : "x,y")).toLowerCase(),
                    St = -1 !== bt.indexOf("x") || -1 !== bt.indexOf("y"),
                    kt = -1 !== bt.indexOf("rotation"),
                    Pt = kt ? "rotation" : St ? "x" : "left",
                    Ot = St ? "y" : "top",
                    Rt = -1 !== bt.indexOf("x") || -1 !== bt.indexOf("left") || "scroll" === bt,
                    Mt = -1 !== bt.indexOf("y") || -1 !== bt.indexOf("top") || "scroll" === bt,
                    Dt = o.minimumMovement || 2,
                    Lt = this,
                    Wt = I(o.trigger || o.handle || n),
                    Gt = {},
                    qt = 0,
                    Ht = !1,
                    Zt = o.clickableTest || Bt,
                    $t = 0,
                    Jt = function(t) {
                        return Lt.isPressed && t.which < 2 ? void Lt.endDrag() : (t.preventDefault(), t.stopPropagation(), !1)
                    },
                    Kt = function(t) {
                        if (Lt.autoScroll && Lt.isDragging && (Ht || et)) {
                            var e, i, s, r, o, a, h, u, c = n,
                                p = 15 * Lt.autoScroll;
                            for (Ht = !1, L.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != x.scrollTop ? x.scrollTop : v.body.scrollTop, L.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != x.scrollLeft ? x.scrollLeft : v.body.scrollLeft, r = Lt.pointerX - L.scrollLeft, o = Lt.pointerY - L.scrollTop; c && !i;) i = Z(c.parentNode), e = i ? L : c.parentNode, s = i ? {
                                bottom: Math.max(x.clientHeight, window.innerHeight || 0),
                                right: Math.max(x.clientWidth, window.innerWidth || 0),
                                left: 0,
                                top: 0
                            } : e.getBoundingClientRect(), a = h = 0, Mt && (0 > (u = e._gsMaxScrollY - e.scrollTop) ? h = u : o > s.bottom - 40 && u ? (Ht = !0, h = Math.min(u, p * (1 - Math.max(0, s.bottom - o) / 40) | 0)) : o < s.top + 40 && e.scrollTop && (Ht = !0, h = -Math.min(e.scrollTop, p * (1 - Math.max(0, o - s.top) / 40) | 0)), h && (e.scrollTop += h)), Rt && (0 > (u = e._gsMaxScrollX - e.scrollLeft) ? a = u : r > s.right - 40 && u ? (Ht = !0, a = Math.min(u, p * (1 - Math.max(0, s.right - r) / 40) | 0)) : r < s.left + 40 && e.scrollLeft && (Ht = !0, a = -Math.min(e.scrollLeft, p * (1 - Math.max(0, r - s.left) / 40) | 0)), a && (e.scrollLeft += a)), i && (a || h) && (window.scrollTo(e.scrollLeft, e.scrollTop), fe(Lt.pointerX + a, Lt.pointerY + h)), c = e
                        }
                        if (et) {
                            var f = Lt.x,
                                d = Lt.y,
                                _ = 1e-6;
                            _ > f && f > -_ && (f = 0), _ > d && d > -_ && (d = 0), kt ? (Lt.deltaX = f - gt.data.rotation, gt.data.rotation = Lt.rotation = f, gt.setRatio(1)) : l ? (Mt && (Lt.deltaY = d - l.top(), l.top(d)), Rt && (Lt.deltaX = f - l.left(), l.left(f))) : St ? (Mt && (Lt.deltaY = d - gt.data.y, gt.data.y = d), Rt && (Lt.deltaX = f - gt.data.x, gt.data.x = f), gt.setRatio(1)) : (Mt && (Lt.deltaY = d - parseFloat(n.style.top || 0), n.style.top = d + "px"), Rt && (Lt.deltaY = f - parseFloat(n.style.left || 0), n.style.left = f + "px")), !w || t || xt || (xt = !0, ht(Lt, "drag", "onDrag"), xt = !1)
                        }
                        et = !1
                    },
                    te = function(t, i) {
                        var s, r = Lt.x,
                            o = Lt.y;
                        n._gsTransform || !St && !kt || e.set(n, {
                            x: "+=0",
                            overwrite: !1
                        }), St ? (Lt.y = n._gsTransform.y, Lt.x = n._gsTransform.x) : kt ? Lt.x = Lt.rotation = n._gsTransform.rotation : l ? (Lt.y = l.top(), Lt.x = l.left()) : (Lt.y = parseInt(n.style.top, 10) || 0, Lt.x = parseInt(n.style.left, 10) || 0), (st || rt || ot) && !i && (Lt.isDragging || Lt.isThrowing) && (ot && (Y.x = Lt.x, Y.y = Lt.y, (s = ot(Y)).x !== Lt.x && (Lt.x = s.x, et = !0), s.y !== Lt.y && (Lt.y = s.y, et = !0)), st && (s = st(Lt.x)) !== Lt.x && (Lt.x = s, kt && (Lt.rotation = s), et = !0), rt && ((s = rt(Lt.y)) !== Lt.y && (Lt.y = s), et = !0)), et && Kt(!0), t || (Lt.deltaX = Lt.x - r, Lt.deltaY = Lt.y - o, ht(Lt, "throwupdate", "onThrowUpdate"))
                    },
                    ee = function() {
                        var t, e, i, s;
                        y = !1, l ? (l.calibrate(), Lt.minX = S = -l.maxScrollLeft(), Lt.minY = N = -l.maxScrollTop(), Lt.maxX = T = Lt.maxY = R = 0, y = !0) : o.bounds && (t = ut(o.bounds, n.parentNode), kt ? (Lt.minX = S = t.left, Lt.maxX = T = t.left + t.width, Lt.minY = N = Lt.maxY = R = 0) : void 0 !== o.bounds.maxX || void 0 !== o.bounds.maxY ? (t = o.bounds, Lt.minX = S = t.minX, Lt.minY = N = t.minY, Lt.maxX = T = t.maxX, Lt.maxY = R = t.maxY) : (e = ut(n, n.parentNode), Lt.minX = S = lt(n, Pt) + t.left - e.left, Lt.minY = N = lt(n, Ot) + t.top - e.top, Lt.maxX = T = S + (t.width - e.width), Lt.maxY = R = N + (t.height - e.height)), S > T && (Lt.minX = T, Lt.maxX = T = S, S = Lt.minX), N > R && (Lt.minY = R, Lt.maxY = R = N, N = Lt.minY), kt && (Lt.minRotation = S, Lt.maxRotation = T), y = !0), o.liveSnap && (i = !0 === o.liveSnap ? o.snap || {} : o.liveSnap, s = i instanceof Array || "function" == typeof i, kt ? (st = he(s ? i : i.rotation, S, T, 1), rt = null) : i.points ? ot = ue(s ? i : i.points, S, T, N, R, i.radius, l ? -1 : 1) : (Rt && (st = he(s ? i : i.x || i.left || i.scrollLeft, S, T, l ? -1 : 1)), Mt && (rt = he(s ? i : i.y || i.top || i.scrollTop, N, R, l ? -1 : 1))))
                    },
                    ie = function() {
                        Lt.isThrowing = !1, ht(Lt, "throwcomplete", "onThrowComplete")
                    },
                    ne = function() {
                        Lt.isThrowing = !1
                    },
                    se = function(t, e) {
                        var i, s, a, h;
                        t && r ? (!0 === t && (i = o.snap || o.liveSnap || {}, s = i instanceof Array || "function" == typeof i, t = {
                            resistance: (o.throwResistance || o.resistance || 1e3) / (kt ? 10 : 1)
                        }, kt ? t.rotation = Ft(Lt, s ? i : i.rotation, T, S, 1, e) : (Rt && (t[Pt] = Ft(Lt, s ? i : i.points || i.x || i.left || i.scrollLeft, T, S, l ? -1 : 1, e || "x" === Lt.lockedAxis)), Mt && (t[Ot] = Ft(Lt, s ? i : i.points || i.y || i.top || i.scrollTop, R, N, l ? -1 : 1, e || "y" === Lt.lockedAxis)), (i.points || i instanceof Array && "object" == typeof i[0]) && (t.linkedProps = Pt + "," + Ot, t.radius = i.radius))), Lt.isThrowing = !0, h = isNaN(o.overshootTolerance) ? 1 === o.edgeResistance ? 0 : 1 - Lt.edgeResistance + .2 : o.overshootTolerance, Lt.tween = a = r.to(l || n, {
                            throwProps: t,
                            ease: o.ease || g.Power3.easeOut,
                            onComplete: ie,
                            onOverwrite: ne,
                            onUpdate: o.fastMode ? ht : te,
                            onUpdateParams: o.fastMode ? [Lt, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : b
                        }, isNaN(o.maxDuration) ? 2 : o.maxDuration, isNaN(o.minDuration) ? 0 === h || "object" == typeof t && t.resistance > 1e3 ? 0 : .5 : o.minDuration, h), o.fastMode || (l && (l._suspendTransforms = !0), a.render(a.duration(), !0, !0), te(!0, !0), Lt.endX = Lt.x, Lt.endY = Lt.y, kt && (Lt.endRotation = Lt.x), a.play(0), te(!0, !0), l && (l._suspendTransforms = !1))) : y && Lt.applyBounds()
                    },
                    re = function(t) {
                        var e, i, s, r, o, a, l, c, p, f = pt || [1, 0, 0, 1, 0, 0];
                        pt = At(n.parentNode, !0), t && Lt.isPressed && f.join(",") !== pt.join(",") && (e = f[0], i = f[1], s = f[2], r = f[3], o = f[4], a = f[5], l = e * r - i * s, c = h * (r / l) + u * (-s / l) + (s * a - r * o) / l, p = h * (-i / l) + u * (e / l) + -(e * a - i * o) / l, u = c * pt[1] + p * pt[3] + pt[5], h = c * pt[0] + p * pt[2] + pt[4]), pt[1] || pt[2] || 1 != pt[0] || 1 != pt[3] || 0 != pt[4] || 0 != pt[5] || (pt = null)
                    },
                    oe = function() {
                        var t = 1 - Lt.edgeResistance;
                        re(!1), pt && (h = Lt.pointerX * pt[0] + Lt.pointerY * pt[2] + pt[4], u = Lt.pointerX * pt[1] + Lt.pointerY * pt[3] + pt[5]), et && (fe(Lt.pointerX, Lt.pointerY), Kt(!0)), l ? (ee(), m = l.top(), c = l.left()) : (ae() ? (te(!0, !0), ee()) : Lt.applyBounds(), kt ? ($ = Lt.rotationOrigin = Ct(n, {
                            x: 0,
                            y: 0
                        }), te(!0, !0), c = Lt.x, m = Lt.y = Math.atan2($.y - Lt.pointerY, Lt.pointerX - $.x) * k) : (dt = n.parentNode ? n.parentNode.scrollTop || 0 : 0, _t = n.parentNode ? n.parentNode.scrollLeft || 0 : 0, m = lt(n, Ot), c = lt(n, Pt))), y && t && (c > T ? c = T + (c - T) / t : S > c && (c = S - (S - c) / t), kt || (m > R ? m = R + (m - R) / t : N > m && (m = N - (N - m) / t))), Lt.startX = c, Lt.startY = m
                    },
                    ae = function() {
                        return Lt.tween && Lt.tween.isActive()
                    },
                    le = function() {
                        !O.parentNode || ae() || Lt.isDragging || O.parentNode.removeChild(O)
                    },
                    he = function(t, e, i, n) {
                        return "function" == typeof t ? function(s) {
                            var r = Lt.isPressed ? 1 - Lt.edgeResistance : 1;
                            return t.call(Lt, s > i ? i + (s - i) * r : e > s ? e + (s - e) * r : s) * n
                        } : t instanceof Array ? function(n) {
                            for (var s, r, o = t.length, a = 0, l = P; --o > -1;) s = t[o], 0 > (r = s - n) && (r = -r), l > r && s >= e && i >= s && (a = o, l = r);
                            return t[a]
                        } : isNaN(t) ? function(t) {
                            return t
                        } : function() {
                            return t * n
                        }
                    },
                    ue = function(t, e, i, n, s, r, o) {
                        return r = r && P > r ? r * r : P, "function" == typeof t ? function(a) {
                            var l, h, u, c = Lt.isPressed ? 1 - Lt.edgeResistance : 1,
                                p = a.x,
                                f = a.y;
                            return a.x = p = p > i ? i + (p - i) * c : e > p ? e + (p - e) * c : p, a.y = f = f > s ? s + (f - s) * c : n > f ? n + (f - n) * c : f, (l = t.call(Lt, a)) !== a && (a.x = l.x, a.y = l.y), 1 !== o && (a.x *= o, a.y *= o), P > r && (h = a.x - p, u = a.y - f, h * h + u * u > r && (a.x = p, a.y = f)), a
                        } : t instanceof Array ? function(e) {
                            for (var i, n, s, o, a = t.length, l = 0, h = P; --a > -1;) s = t[a], i = s.x - e.x, n = s.y - e.y, o = i * i + n * n, h > o && (l = a, h = o);
                            return r >= h ? t[l] : e
                        } : function(t) {
                            return t
                        }
                    },
                    ce = function(t) {
                        var i;
                        if (!(!a || Lt.isPressed || !t || ("mousedown" === t.type || "pointerdown" === t.type) && A() - $t < 30 && Xt[Lt.pointerEvent.type])) {
                            if (ft = ae(), Lt.pointerEvent = t, Xt[t.type] ? (ct = -1 !== t.type.indexOf("touch") ? t.currentTarget || t.target : v, jt(ct, "touchend", de), jt(ct, "touchmove", pe), jt(ct, "touchcancel", de), jt(v, "touchstart", It)) : (ct = null, jt(v, "mousemove", pe)), yt = null, jt(v, "mouseup", de), t && t.target && jt(t.target, "mouseup", de), at = Zt.call(Lt, t.target) && !o.dragClickables) return jt(t.target, "change", de), ht(Lt, "press", "onPress"), void Qt(Wt, !0);
                            if (mt = !(!ct || Rt === Mt || !1 === Lt.vars.allowNativeTouchScrolling) && (Rt ? "y" : "x"), C ? t = K(t, !0) : mt || Lt.allowEventDefault || (t.preventDefault(), t.preventManipulation && t.preventManipulation()), t.changedTouches ? (t = G = t.changedTouches[0], q = t.identifier) : t.pointerId ? q = t.pointerId : G = q = null, X++, Q(Kt), u = Lt.pointerY = t.pageY, h = Lt.pointerX = t.pageX, (mt || Lt.autoScroll) && J(n.parentNode), n.parentNode && (l || Lt.autoScroll && !kt && n.parentNode._gsMaxScrollX && !O.parentNode) && !n.getBBox && (O.style.width = n.parentNode.scrollWidth + "px", n.parentNode.appendChild(O)), oe(), Lt.tween && Lt.tween.kill(), Lt.isThrowing = !1, e.killTweensOf(l || n, !0, Gt), l && e.killTweensOf(n, !0, {
                                    scrollTo: 1
                                }), Lt.tween = Lt.lockedAxis = null, (o.zIndexBoost || !kt && !l && !1 !== o.zIndexBoost) && (n.style.zIndex = Vt.zIndex++), Lt.isPressed = !0, w = !(!o.onDrag && !Lt._listeners.drag), !kt)
                                for (i = Wt.length; --i > -1;) it(Wt[i], "cursor", o.cursor || "move");
                            ht(Lt, "press", "onPress")
                        }
                    },
                    pe = function(t) {
                        var e, i, n, r, o, l, c = t;
                        if (a && !s && Lt.isPressed && t) {
                            if (Lt.pointerEvent = t, e = t.changedTouches) {
                                if ((t = e[0]) !== G && t.identifier !== q) {
                                    for (r = e.length; --r > -1 && (t = e[r]).identifier !== q;);
                                    if (0 > r) return
                                }
                            } else if (t.pointerId && q && t.pointerId !== q) return;
                            if (C) t = K(t, !0);
                            else {
                                if (ct && mt && !yt && (i = t.pageX, n = t.pageY, pt && (r = i * pt[0] + n * pt[2] + pt[4], n = i * pt[1] + n * pt[3] + pt[5], i = r), o = Math.abs(i - h), l = Math.abs(n - u), (o !== l && (o > Dt || l > Dt) || j && mt === yt) && (yt = o > l && Rt ? "x" : "y", !1 !== Lt.vars.lockAxisOnTouchScroll && (Lt.lockedAxis = "x" === yt ? "y" : "x", "function" == typeof Lt.vars.onLockAxis && Lt.vars.onLockAxis.call(Lt, c)), j && mt === yt))) return void de(c);
                                Lt.allowEventDefault || mt && (!yt || mt === yt) || !1 === c.cancelable || (c.preventDefault(), c.preventManipulation && c.preventManipulation())
                            }
                            Lt.autoScroll && (Ht = !0), fe(t.pageX, t.pageY)
                        }
                    },
                    fe = function(t, e) {
                        var i, n, s, r, o, a, l = 1 - Lt.dragResistance,
                            p = 1 - Lt.edgeResistance;
                        Lt.pointerX = t, Lt.pointerY = e, kt ? (r = Math.atan2($.y - e, t - $.x) * k, o = Lt.y - r, Lt.y = r, o > 180 ? m -= 360 : -180 > o && (m += 360), s = c + (m - r) * l) : (pt && (a = t * pt[0] + e * pt[2] + pt[4], e = t * pt[1] + e * pt[3] + pt[5], t = a), n = e - u, i = t - h, Dt > n && n > -Dt && (n = 0), Dt > i && i > -Dt && (i = 0), (Lt.lockAxis || Lt.lockedAxis) && (i || n) && ((a = Lt.lockedAxis) || (Lt.lockedAxis = a = Rt && Math.abs(i) > Math.abs(n) ? "y" : Mt ? "x" : null, a && "function" == typeof Lt.vars.onLockAxis && Lt.vars.onLockAxis.call(Lt, Lt.pointerEvent)), "y" === a ? n = 0 : "x" === a && (i = 0)), s = c + i * l, r = m + n * l), (st || rt || ot) && (Lt.x !== s || Lt.y !== r && !kt) ? (ot && (Y.x = s, Y.y = r, a = ot(Y), s = a.x, r = a.y), st && (s = st(s)), rt && (r = rt(r))) : y && (s > T ? s = T + (s - T) * p : S > s && (s = S + (s - S) * p), kt || (r > R ? r = R + (r - R) * p : N > r && (r = N + (r - N) * p))), kt || pt || (s = Math.round(s), r = Math.round(r)), (Lt.x !== s || Lt.y !== r && !kt) && (kt ? (Lt.endRotation = Lt.x = Lt.endX = s, et = !0) : (Mt && (Lt.y = Lt.endY = r, et = !0), Rt && (Lt.x = Lt.endX = s, et = !0)), !Lt.isDragging && Lt.isPressed && (Lt.isDragging = !0, ht(Lt, "dragstart", "onDragStart")))
                    },
                    de = function(t, i) {
                        if (a && Lt.isPressed && (!t || null == q || i || !(t.pointerId && t.pointerId !== q || t.changedTouches && !Yt(t.changedTouches, q)))) {
                            Lt.isPressed = !1;
                            var s, r, l, h, u, c = t,
                                p = Lt.isDragging,
                                f = e.delayedCall(.001, le);
                            if (ct ? (Et(ct, "touchend", de), Et(ct, "touchmove", pe), Et(ct, "touchcancel", de), Et(v, "touchstart", It)) : Et(v, "mousemove", pe), Et(v, "mouseup", de), t && t.target && Et(t.target, "mouseup", de), et = !1, at) return t && Et(t.target, "change", de), Qt(Wt, !1), ht(Lt, "release", "onRelease"), ht(Lt, "click", "onClick"), void(at = !1);
                            if (W(Kt), !kt)
                                for (r = Wt.length; --r > -1;) it(Wt[r], "cursor", o.cursor || "move");
                            if (p && (qt = E = A(), Lt.isDragging = !1), X--, t) {
                                if (C && (t = K(t, !1)), (s = t.changedTouches) && (t = s[0]) !== G && t.identifier !== q) {
                                    for (r = s.length; --r > -1 && (t = s[r]).identifier !== q;);
                                    if (0 > r) return
                                }
                                Lt.pointerEvent = c, Lt.pointerX = t.pageX, Lt.pointerY = t.pageY
                            }
                            return c && !p ? (ft && (o.snap || o.bounds) && se(o.throwProps), ht(Lt, "release", "onRelease"), j && "touchmove" === c.type || (ht(Lt, "click", "onClick"), h = c.target || c.srcElement || n, $t = A(), u = function() {
                                $t !== wt && Lt.enabled() && !Lt.isPressed && (h.click ? h.click() : v.createEvent && ((l = v.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, Lt.pointerEvent.screenX, Lt.pointerEvent.screenY, Lt.pointerX, Lt.pointerY, !1, !1, !1, !1, 0, null), h.dispatchEvent(l)))
                            }, j || c.defaultPrevented || e.delayedCall(1e-5, u))) : (se(o.throwProps), C || Lt.allowEventDefault || !c || !o.dragClickables && Zt.call(Lt, c.target) || !p || mt && (!yt || mt !== yt) || !1 === c.cancelable || (c.preventDefault(), c.preventManipulation && c.preventManipulation()), ht(Lt, "release", "onRelease")), ae() && f.duration(Lt.tween.duration()), p && ht(Lt, "dragend", "onDragEnd"), !0
                        }
                    },
                    _e = function(t) {
                        if (t && Lt.isDragging && !l) {
                            var e = t.target || t.srcElement || n.parentNode,
                                i = e.scrollLeft - e._gsScrollX,
                                s = e.scrollTop - e._gsScrollY;
                            (i || s) && (pt ? (h -= i * pt[0] + s * pt[2], u -= s * pt[3] + i * pt[1]) : (h -= i, u -= s), e._gsScrollX += i, e._gsScrollY += s, fe(Lt.pointerX, Lt.pointerY))
                        }
                    },
                    ge = function(t) {
                        var e = A(),
                            i = 40 > e - $t,
                            n = 40 > e - qt,
                            s = i && wt === $t,
                            r = !!t.preventDefault,
                            o = Lt.pointerEvent && Lt.pointerEvent.defaultPrevented,
                            a = i && Tt === $t,
                            l = t.isTrusted || null == t.isTrusted && i && s;
                        return r && (s || n && !1 !== Lt.vars.suppressClickOnDrag) && t.stopImmediatePropagation(), !i || Lt.pointerEvent && Lt.pointerEvent.defaultPrevented || s && l === a ? void((Lt.isPressed || n || i) && (r ? l && t.detail && i && !o || (t.preventDefault(), t.preventManipulation && t.preventManipulation()) : t.returnValue = !1)) : (l && s && (Tt = $t), void(wt = $t))
                    };
                (nt = Vt.get(this.target)) && nt.kill(), this.startDrag = function(t) {
                    ce(t), Lt.isDragging || (Lt.isDragging = !0, ht(Lt, "dragstart", "onDragStart"))
                }, this.drag = pe, this.endDrag = function(t) {
                    de(t, !0)
                }, this.timeSinceDrag = function() {
                    return Lt.isDragging ? 0 : (A() - qt) / 1e3
                }, this.hitTest = function(t, e) {
                    return Vt.hitTest(Lt.target, t, e)
                }, this.getDirection = function(t, e) {
                    var i, n, s, o, a, l, h = "velocity" === t && r ? t : "object" != typeof t || kt ? "start" : "element";
                    return "element" === h && (a = Ut(Lt.target), l = Ut(t)), i = "start" === h ? Lt.x - c : "velocity" === h ? r.getVelocity(this.target, Pt) : a.left + a.width / 2 - (l.left + l.width / 2), kt ? 0 > i ? "counter-clockwise" : "clockwise" : (e = e || 2, n = "start" === h ? Lt.y - m : "velocity" === h ? r.getVelocity(this.target, Ot) : a.top + a.height / 2 - (l.top + l.height / 2), s = Math.abs(i / n), o = 1 / e > s ? "" : 0 > i ? "left" : "right", e > s && ("" !== o && (o += "-"), o += 0 > n ? "up" : "down"), o)
                }, this.applyBounds = function(t) {
                    var e, i, s, r, a, l;
                    if (t && o.bounds !== t) return o.bounds = t, Lt.update(!0);
                    if (te(!0), ee(), y) {
                        if (e = Lt.x, i = Lt.y, e > T ? e = T : S > e && (e = S), i > R ? i = R : N > i && (i = N), (Lt.x !== e || Lt.y !== i) && (s = !0, Lt.x = Lt.endX = e, kt ? Lt.endRotation = e : Lt.y = Lt.endY = i, et = !0, Kt(!0), Lt.autoScroll && !Lt.isDragging))
                            for (J(n.parentNode), r = n, L.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != x.scrollTop ? x.scrollTop : v.body.scrollTop, L.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != x.scrollLeft ? x.scrollLeft : v.body.scrollLeft; r && !l;) l = Z(r.parentNode), a = l ? L : r.parentNode, Mt && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY), Rt && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX), r = a;
                        Lt.isThrowing && (s || Lt.endX > T || Lt.endX < S || Lt.endY > R || Lt.endY < N) && se(o.throwProps, s)
                    }
                    return Lt
                }, this.update = function(t, e, i) {
                    var s = Lt.x,
                        r = Lt.y;
                    return re(!e), t ? Lt.applyBounds() : (et && i && Kt(!0), te(!0)), e && (fe(Lt.pointerX, Lt.pointerY), et && Kt(!0)), Lt.isPressed && !e && (Rt && Math.abs(s - Lt.x) > .01 || Mt && Math.abs(r - Lt.y) > .01 && !kt) && oe(), Lt.autoScroll && (J(n.parentNode), Ht = Lt.isDragging, Kt(!0)), Lt.autoScroll && (U(n, _e), H(n, _e)), Lt
                }, this.enable = function(t) {
                    var s, h, u;
                    if ("soft" !== t) {
                        for (h = Wt.length; --h > -1;) u = Wt[h], jt(u, "mousedown", ce), jt(u, "touchstart", ce), jt(u, "click", ge, !0), kt || it(u, "cursor", o.cursor || "move"), it(u, "touchCallout", "none"), it(u, "touchAction", Rt === Mt ? "none" : Rt ? "pan-y" : "pan-x"), vt(u) && it(u.ownerSVGElement || u, "touchAction", Rt === Mt ? "none" : Rt ? "pan-y" : "pan-x"), this.vars.allowContextMenu || jt(u, "contextmenu", Jt);
                        Qt(Wt, !1)
                    }
                    return H(n, _e), a = !0, r && "soft" !== t && r.track(l || n, St ? "x,y" : kt ? "rotation" : "top,left"), l && l.enable(), n._gsDragID = s = "d" + D++, M[s] = this, l && (l.element._gsDragID = s), e.set(n, {
                        x: "+=0",
                        overwrite: !1
                    }), gt = {
                        t: n,
                        data: C ? z : n._gsTransform,
                        tween: {},
                        setRatio: C ? function() {
                            e.set(n, B)
                        } : i._internals.setTransformRatio || i._internals.set3DTransformRatio
                    }, oe(), Lt.update(!0), Lt
                }, this.disable = function(t) {
                    var e, i, s = Lt.isDragging;
                    if (!kt)
                        for (e = Wt.length; --e > -1;) it(Wt[e], "cursor", null);
                    if ("soft" !== t) {
                        for (e = Wt.length; --e > -1;) i = Wt[e], it(i, "touchCallout", null), it(i, "touchAction", null), Et(i, "mousedown", ce), Et(i, "touchstart", ce), Et(i, "click", ge), Et(i, "contextmenu", Jt);
                        Qt(Wt, !0), ct && (Et(ct, "touchcancel", de), Et(ct, "touchend", de), Et(ct, "touchmove", pe)), Et(v, "mouseup", de), Et(v, "mousemove", pe)
                    }
                    return U(n, _e), a = !1, r && "soft" !== t && r.untrack(l || n, St ? "x,y" : kt ? "rotation" : "top,left"), l && l.disable(), W(Kt), Lt.isDragging = Lt.isPressed = at = !1, s && ht(Lt, "dragend", "onDragEnd"), Lt
                }, this.enabled = function(t, e) {
                    return arguments.length ? t ? Lt.enable(e) : Lt.disable(e) : a
                }, this.kill = function() {
                    return Lt.isThrowing = !1, e.killTweensOf(l || n, !0, Gt), Lt.disable(), delete M[n._gsDragID], Lt
                }, -1 !== bt.indexOf("scroll") && (l = this.scrollProxy = new zt(n, V({
                    onKill: function() {
                        Lt.isPressed && de(null)
                    }
                }, o)), n.style.overflowY = Mt && !Nt ? "auto" : "hidden", n.style.overflowX = Rt && !Nt ? "auto" : "hidden", n = l.content), !1 !== o.force3D && e.set(n, {
                    force3D: !0
                }), kt ? Gt.rotation = 1 : (Rt && (Gt[Pt] = 1), Mt && (Gt[Ot] = 1)), kt ? (B = _, z = B.css, B.overwrite = !1) : St && (B = Rt && Mt ? p : Rt ? f : d, z = B.css, B.overwrite = !1), this.enable()
            },
            Gt = Vt.prototype = new t;
        Gt.constructor = Vt, Gt.pointerX = Gt.pointerY = Gt.startX = Gt.startY = Gt.deltaX = Gt.deltaY = 0, Gt.isDragging = Gt.isPressed = !1, Vt.version = "0.15.1", Vt.zIndex = 1e3, jt(v, "touchcancel", function() {}), jt(v, "contextmenu", function(t) {
            var e;
            for (e in M) M[e].isPressed && M[e].endDrag()
        }), Vt.create = function(t, i) {
            "string" == typeof t && (t = e.selector(t));
            for (var n = t && 0 !== t.length ? Mt(t) ? Dt(t) : [t] : [], s = n.length; --s > -1;) n[s] = new Vt(n[s], i);
            return n
        }, Vt.get = function(t) {
            return M[(tt(t) || {})._gsDragID]
        }, Vt.timeSinceDrag = function() {
            return (A() - E) / 1e3
        };
        var qt = {},
            Ht = function(t) {
                var e, i, n = 0,
                    s = 0;
                for (e = (t = tt(t)).offsetWidth, i = t.offsetHeight; t;) n += t.offsetTop, s += t.offsetLeft, t = t.offsetParent;
                return {
                    top: n,
                    left: s,
                    width: e,
                    height: i
                }
            },
            Ut = function(t, e) {
                if (t === window) return qt.left = qt.top = 0, qt.width = qt.right = x.clientWidth || t.innerWidth || v.body.clientWidth || 0, qt.height = qt.bottom = (t.innerHeight || 0) - 20 < x.clientHeight ? x.clientHeight : t.innerHeight || v.body.clientHeight || 0, qt;
                var i = t.pageX !== e ? {
                    left: t.pageX - q(),
                    top: t.pageY - G(),
                    right: t.pageX - q() + 1,
                    bottom: t.pageY - G() + 1
                } : t.nodeType || t.left === e || t.top === e ? C ? Ht(t) : tt(t).getBoundingClientRect() : t;
                return i.right === e && i.width !== e ? (i.right = i.left + i.width, i.bottom = i.top + i.height) : i.width === e && (i = {
                    width: i.right - i.left,
                    height: i.bottom - i.top,
                    right: i.right,
                    left: i.left,
                    bottom: i.bottom,
                    top: i.top
                }), i
            };
        return Vt.hitTest = function(t, e, i) {
            if (t === e) return !1;
            var n, s, r, o = Ut(t),
                a = Ut(e),
                l = a.left > o.right || a.right < o.left || a.top > o.bottom || a.bottom < o.top;
            return l || !i ? !l : (r = -1 !== (i + "").indexOf("%"), i = parseFloat(i) || 0, n = {
                left: Math.max(o.left, a.left),
                top: Math.max(o.top, a.top)
            }, n.width = Math.min(o.right, a.right) - n.left, n.height = Math.min(o.bottom, a.bottom) - n.top, !(n.width < 0 || n.height < 0) && (r ? (i *= .01, (s = n.width * n.height) >= o.width * o.height * i || s >= a.width * a.height * i) : n.width > i && n.height > i))
        }, O.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", Vt
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).Draggable
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), require("../plugins/CSSPlugin.min.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite", "CSSPlugin"], e)
    }();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = function(e) {
            var i = e.nodeType,
                n = "";
            if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += t(e)
            } else if (3 === i || 4 === i) return e.nodeValue;
            return n
        },
        e = _gsScope._gsDefine.plugin({
            propName: "text",
            API: 2,
            version: "0.5.1",
            init: function(e, i, n) {
                var s, r;
                if (!("innerHTML" in e)) return !1;
                if (this._target = e, "object" != typeof i && (i = {
                        value: i
                    }), void 0 === i.value) return this._text = this._original = [""], !0;
                for (this._delimiter = i.delimiter || "", this._original = t(e).replace(/\s+/g, " ").split(this._delimiter), this._text = i.value.replace(/\s+/g, " ").split(this._delimiter), this._runBackwards = !0 === n.vars.runBackwards, this._runBackwards && (s = this._original, this._original = this._text, this._text = s), "string" == typeof i.newClass && (this._newClass = i.newClass, this._hasClass = !0), "string" == typeof i.oldClass && (this._oldClass = i.oldClass, this._hasClass = !0), r = 0 > (s = this._original.length - this._text.length) ? this._original : this._text, this._fillChar = i.fillChar || (i.padSpace ? "&nbsp;" : ""), 0 > s && (s = -s); --s > -1;) r.push(this._fillChar);
                return !0
            },
            set: function(t) {
                t > 1 ? t = 1 : 0 > t && (t = 0), this._runBackwards && (t = 1 - t);
                var e, i, n, s = this._text.length,
                    r = 0 | t * s + .5;
                this._hasClass ? (e = this._newClass && 0 !== r, i = this._oldClass && r !== s, n = (e ? "<span class='" + this._newClass + "'>" : "") + this._text.slice(0, r).join(this._delimiter) + (e ? "</span>" : "") + (i ? "<span class='" + this._oldClass + "'>" : "") + this._delimiter + this._original.slice(r).join(this._delimiter) + (i ? "</span>" : "")) : n = this._text.slice(0, r).join(this._delimiter) + this._delimiter + this._original.slice(r).join(this._delimiter), this._target.innerHTML = "&nbsp;" === this._fillChar && -1 !== n.indexOf("  ") ? n.split("  ").join("&nbsp;&nbsp;") : n
            }
        }).prototype;
    e._newClass = e._oldClass = e._delimiter = ""
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(t, e, i, n) {
        var s, r, o, a, l = function() {
                t.call(this, "throwProps"), this._overwriteProps.length = 0
            },
            h = 999999999999999,
            u = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1
            },
            c = function(t, e, i, n) {
                for (var s, r, o = e.length, a = 0, l = h; --o > -1;) s = e[o], 0 > (r = s - t) && (r = -r), l > r && s >= n && i >= s && (a = o, l = r);
                return e[a]
            },
            p = function(t, e, i, n) {
                if ("auto" === t.end) return t;
                i = isNaN(i) ? h : i, n = isNaN(n) ? -h : n;
                var s = "function" == typeof t.end ? t.end(e) : t.end instanceof Array ? c(e, t.end, i, n) : Number(t.end);
                return s > i ? s = i : n > s && (s = n), {
                    max: s,
                    min: s
                }
            },
            f = l.calculateChange = function(t, n, s, r) {
                return null == r && (r = .05), s * r * t / (n instanceof i ? n : n ? new i(n) : e.defaultEase).getRatio(r)
            },
            d = l.calculateDuration = function(t, n, s, r, o) {
                o = o || .05;
                var a = r instanceof i ? r : r ? new i(r) : e.defaultEase;
                return Math.abs((n - t) * a.getRatio(o) / s / o)
            },
            _ = l.calculateTweenDuration = function(t, s, r, o, a) {
                if ("string" == typeof t && (t = e.selector(t)), !t) return 0;
                null == r && (r = 10), null == o && (o = .2), null == a && (a = 1), t.length && (t = t[0] || t);
                var h, u, c, _, g, m, y, v, x, w, T = 0,
                    b = 9999999999,
                    S = s.throwProps || s,
                    k = s.ease instanceof i ? s.ease : s.ease ? new i(s.ease) : e.defaultEase,
                    P = isNaN(S.checkpoint) ? .05 : Number(S.checkpoint),
                    A = isNaN(S.resistance) ? l.defaultResistance : Number(S.resistance);
                for (h in S) "resistance" !== h && "checkpoint" !== h && "preventOvershoot" !== h && ("object" != typeof(u = S[h]) && ((x = x || n.getByTarget(t)) && x.isTrackingProp(h) ? u = "number" == typeof u ? {
                    velocity: u
                } : {
                    velocity: x.getVelocity(h)
                } : (_ = Number(u) || 0, c = _ * A > 0 ? _ / A : _ / -A)), "object" == typeof u && (void 0 !== u.velocity && "number" == typeof u.velocity ? _ = Number(u.velocity) || 0 : (x = x || n.getByTarget(t), _ = x && x.isTrackingProp(h) ? x.getVelocity(h) : 0), g = isNaN(u.resistance) ? A : Number(u.resistance), c = _ * g > 0 ? _ / g : _ / -g, m = "function" == typeof t[h] ? t[h.indexOf("set") || "function" != typeof t["get" + h.substr(3)] ? h : "get" + h.substr(3)]() : t[h] || 0, y = m + f(_, k, c, P), void 0 !== u.end && (u = p(u, y, u.max, u.min)), void 0 !== u.max && y > Number(u.max) + 1e-10 ? (w = u.unitFactor || 1, v = m > u.max && u.min !== u.max || _ * w > -15 && 45 > _ * w ? o + .1 * (r - o) : d(m, u.max, _, k, P), b > v + a && (b = v + a)) : void 0 !== u.min && Number(u.min) - 1e-10 > y && (w = u.unitFactor || 1, v = u.min > m && u.min !== u.max || _ * w > -45 && 15 > _ * w ? o + .1 * (r - o) : d(m, u.min, _, k, P), b > v + a && (b = v + a)), v > T && (T = v)), c > T && (T = c));
                return T > b && (T = b), T > r ? r : o > T ? o : T
            },
            g = l.prototype = new t("throwProps");
        return g.constructor = l, l.version = "0.9.2", l.source = "gannon.codecanyon", l.API = 2, l._autoCSS = !0, l.defaultResistance = 100, l.track = function(t, e, i) {
            return n.track(t, e, i)
        }, l.untrack = function(t, e) {
            n.untrack(t, e)
        }, l.isTracking = function(t, e) {
            return n.isTracking(t, e)
        }, l.getVelocity = function(t, e) {
            var i = n.getByTarget(t);
            return i ? i.getVelocity(e) : NaN
        }, l._cssRegister = function() {
            var t = (window.GreenSockGlobals || window).com.greensock.plugins.CSSPlugin;
            if (t) {
                var e = t._internals,
                    i = e._parseToProxy,
                    o = e._setPluginRatio,
                    a = e.CSSPropTween;
                e._registerComplexSpecialProp("throwProps", {
                    parser: function(t, e, h, c, p, f) {
                        f = new l;
                        var d, _, g, m, y = {},
                            v = {},
                            x = {},
                            w = {},
                            T = {},
                            b = {};
                        r = {};
                        for (_ in e) "resistance" !== _ && "preventOvershoot" !== _ && ("object" == typeof(d = e[_]) ? (void 0 !== d.velocity && "number" == typeof d.velocity ? y[_] = Number(d.velocity) || 0 : (m = m || n.getByTarget(t), y[_] = m && m.isTrackingProp(_) ? m.getVelocity(_) : 0), void 0 !== d.end && (w[_] = d.end), void 0 !== d.min && (v[_] = d.min), void 0 !== d.max && (x[_] = d.max), d.preventOvershoot && (b[_] = !0), void 0 !== d.resistance && (!0, T[_] = d.resistance)) : "number" == typeof d ? y[_] = d : (m = m || n.getByTarget(t), y[_] = m && m.isTrackingProp(_) ? m.getVelocity(_) : d || 0), u[_] && c._enableTransforms(2 === u[_]));
                        g = i(t, y, c, p, f), s = g.proxy, y = g.end;
                        for (_ in s) r[_] = {
                            velocity: y[_],
                            min: v[_],
                            max: x[_],
                            end: w[_],
                            resistance: T[_],
                            preventOvershoot: b[_]
                        };
                        return null != e.resistance && (r.resistance = e.resistance), e.preventOvershoot && (r.preventOvershoot = !0), p = new a(t, "throwProps", 0, 0, g.pt, 2), p.plugin = f, p.setRatio = o, p.data = g, f._onInitTween(s, r, c._tween), p
                    }
                })
            }
        }, l.to = function(t, i, n, l, h) {
            i.throwProps || (i = {
                throwProps: i
            }), 0 === h && (i.throwProps.preventOvershoot = !0);
            var u = new e(t, 1, i);
            return u.render(0, !0, !0), u.vars.css ? (u.duration(_(s, {
                throwProps: r,
                ease: i.ease
            }, n, l, h)), u._delay && !u.vars.immediateRender ? u.invalidate() : o._onInitTween(s, a, u), u) : (u.kill(), new e(t, _(t, i, n, l, h), i))
        }, g._onInitTween = function(t, e, i) {
            this.target = t, this._props = [], o = this, a = e;
            var s, r, l, h, u, c, d, _, g, m = i._ease,
                y = isNaN(e.checkpoint) ? .05 : Number(e.checkpoint),
                v = i._duration,
                x = e.preventOvershoot,
                w = 0;
            for (s in e)
                if ("resistance" !== s && "checkpoint" !== s && "preventOvershoot" !== s) {
                    if ("number" == typeof(r = e[s])) u = Number(r) || 0;
                    else if ("object" != typeof r || isNaN(r.velocity)) {
                        if (!(g = g || n.getByTarget(t)) || !g.isTrackingProp(s)) throw "ERROR: No velocity was defined in the throwProps tween of " + t + " property: " + s;
                        u = g.getVelocity(s)
                    } else u = Number(r.velocity);
                    c = f(u, m, v, y), _ = 0, l = (h = "function" == typeof t[s]) ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : t[s], "object" == typeof r && (d = l + c, void 0 !== r.end && (r = p(r, d, r.max, r.min)), void 0 !== r.max && d > Number(r.max) ? x || r.preventOvershoot ? c = r.max - l : _ = r.max - l - c : void 0 !== r.min && Number(r.min) > d && (x || r.preventOvershoot ? c = r.min - l : _ = r.min - l - c)), this._props[w++] = {
                        p: s,
                        s: l,
                        c1: c,
                        c2: _,
                        f: h,
                        r: !1
                    }, this._overwriteProps[w] = s
                } return !0
        }, g._kill = function(e) {
            for (var i = this._props.length; --i > -1;) null != e[this._props[i].p] && this._props.splice(i, 1);
            return t.prototype._kill.call(this, e)
        }, g._roundProps = function(t, e) {
            for (var i = this._props, n = i.length; --n > -1;)(t[i[n]] || t.throwProps) && (i[n].r = e)
        }, g.setRatio = function(t) {
            for (var e, i, n = this._props.length; --n > -1;) e = this._props[n], i = e.s + e.c1 * t + e.c2 * t * t, e.r && (i = 0 | i + (i > 0 ? .5 : -.5)), e.f ? this.target[e.p](i) : this.target[e.p] = i
        }, t.activate([l]), l
    }, !0), window._gsDefine("utils.VelocityTracker", ["TweenLite"], function(t) {
        var e, i, n, s, r = /([A-Z])/g,
            o = {},
            a = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1
            },
            l = document.defaultView ? document.defaultView.getComputedStyle : function() {},
            h = function(t, e, i) {
                var n = (t._gsTransform || o)[e];
                return n || 0 === n ? n : (t.style[e] ? n = t.style[e] : (i = i || l(t, null)) ? (t = i.getPropertyValue(e.replace(r, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, n = i[e]), parseFloat(n) || 0)
            },
            u = t.ticker,
            c = function(t, e, i) {
                this.p = t, this.f = e, this.v1 = this.v2 = 0, this.t1 = this.t2 = u.time, this.css = !1, this.type = "", this._prev = null, i && (this._next = i, i._prev = this)
            },
            p = function() {
                var t, i, r = e,
                    o = u.time;
                if (o - n >= .03)
                    for (s = n, n = o; r;) {
                        for (i = r._firstVP; i;)((t = i.css ? h(r.target, i.p) : i.f ? r.target[i.p]() : r.target[i.p]) !== i.v1 || o - i.t1 > .15) && (i.v2 = i.v1, i.v1 = t, i.t2 = i.t1, i.t1 = o), i = i._next;
                        r = r._next
                    }
            },
            f = function(t) {
                this._lookup = {}, this.target = t, this.elem = !(!t.style || !t.nodeType), i || (u.addEventListener("tick", p, null, !1, -100), n = s = u.time, i = !0), e && (this._next = e, e._prev = this), e = this
            },
            d = f.getByTarget = function(t) {
                for (var i = e; i;) {
                    if (i.target === t) return i;
                    i = i._next
                }
            },
            _ = f.prototype;
        return _.addProp = function(e, i) {
            if (!this._lookup[e]) {
                var n = this.target,
                    s = "function" == typeof n[e],
                    r = s ? this._altProp(e) : e,
                    o = this._firstVP;
                this._firstVP = this._lookup[e] = this._lookup[r] = o = new c(r !== e && 0 === e.indexOf("set") ? r : e, s, o), o.css = this.elem && (void 0 !== this.target.style[o.p] || a[o.p]), o.css && a[o.p] && !n._gsTransform && t.set(n, {
                    x: "+=0"
                }), o.type = i || o.css && 0 === e.indexOf("rotation") ? "deg" : "", o.v1 = o.v2 = o.css ? h(n, o.p) : s ? n[o.p]() : n[o.p]
            }
        }, _.removeProp = function(t) {
            var e = this._lookup[t];
            e && (e._prev ? e._prev._next = e._next : e === this._firstVP && (this._firstVP = e._next), e._next && (e._next._prev = e._prev), this._lookup[t] = 0, e.f && (this._lookup[this._altProp(t)] = 0))
        }, _.isTrackingProp = function(t) {
            return this._lookup[t] instanceof c
        }, _.getVelocity = function(t) {
            var e, i, n, s = this._lookup[t],
                r = this.target;
            if (!s) throw "The velocity of " + t + " is not being tracked.";
            return e = s.css ? h(r, s.p) : s.f ? r[s.p]() : r[s.p], i = e - s.v2, ("rad" === s.type || "deg" === s.type) && (n = "rad" === s.type ? 2 * Math.PI : 360, (i %= n) !== i % (n / 2) && (i = 0 > i ? i + n : i - n)), i / (u.time - s.t2)
        }, _._altProp = function(t) {
            var e = t.substr(0, 3),
                i = ("get" === e ? "set" : "set" === e ? "get" : e) + t.substr(3);
            return "function" == typeof this.target[i] ? i : t
        }, f.getByTarget = function(i) {
            var n = e;
            for ("string" == typeof i && (i = t.selector(i)), i.length && i !== window && i[0] && i[0].style && !i.nodeType && (i = i[0]); n;) {
                if (n.target === i) return n;
                n = n._next
            }
        }, f.track = function(t, e, i) {
            var n = d(t),
                s = e.split(","),
                r = s.length;
            for (i = (i || "").split(","), n || (n = new f(t)); --r > -1;) n.addProp(s[r], i[r] || i[0]);
            return n
        }, f.untrack = function(t, i) {
            var n = d(t),
                s = (i || "").split(","),
                r = s.length;
            if (n) {
                for (; --r > -1;) n.removeProp(s[r]);
                n._firstVP && i || (n._prev ? n._prev._next = n._next : n === e && (e = n._next), n._next && (n._next._prev = n._prev))
            }
        }, f.isTracking = function(t, e) {
            var i = d(t);
            return !!i && (!(e || !i._firstVP) || i.isTrackingProp(e))
        }, f
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            s = function(t, e, i) {
                var n, s, r = t.cycle;
                for (n in r) s = r[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                delete t.cycle
            },
            r = function(t, e, n) {
                i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
            },
            o = 1e-10,
            a = i._internals,
            l = a.isSelector,
            h = a.isArray,
            u = r.prototype = i.to({}, .1, {}),
            c = [];
        r.version = "1.20.2", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
        }, u.updateTo = function(t, e) {
            var n, s = this.ratio,
                r = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t) this.vars[n] = t[n];
            if (this._initted || r)
                if (e) this._initted = !1, r && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var o = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                } else if (this._initted = !1, this._init(), this._time > 0 || r)
                    for (var a, l = 1 / (1 - s), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
            return this
        }, u.render = function(t, e, n) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var s, r, l, h, u, c, p, f, d, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                g = this._time,
                m = this._totalTime,
                y = this._cycle,
                v = this._duration,
                x = this._rawPrevTime;
            if (t >= _ - 1e-7 && t >= 0 ? (this._totalTime = _, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 > x || 0 >= t && t >= -1e-7 || x === o && "isPause" !== this.data) && x !== t && (n = !0, x > o && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || x === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && x > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || n) && (x >= 0 && (n = !0), this._rawPrevTime = f = !e || t || x === t ? t : o)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= m && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time, (d = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== d || this._initted ? this._yoyoEase = d = !0 === d ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease, this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d, this.vars.easeParams) : Ease.map[d] || i.defaultEase : i.defaultEase)), this.ratio = d ? 1 - d.getRatio((v - this._time) / v) : 0)), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType && !d ? (u = this._time / v, c = this._easeType, p = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / v < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : d || (this.ratio = this._ease.getRatio(this._time / v))), g !== this._time || n || y !== this._cycle) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = m, this._rawPrevTime = x, this._cycle = y, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                    !this._time || s || d ? s && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / v)
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, n), e || (this._totalTime !== m || r) && this._callback("onUpdate")), this._cycle !== y && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, n), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === v && this._rawPrevTime === o && f !== o && (this._rawPrevTime = 0))
            } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }, r.to = function(t, e, i) {
            return new r(t, e, i)
        }, r.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
        }, r.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
        }, r.staggerTo = r.allTo = function(t, e, o, a, u, p, f) {
            a = a || 0;
            var d, _, g, m, y = 0,
                v = [],
                x = o.cycle,
                w = o.startAt && o.startAt.cycle;
            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && ((t = n(t)).reverse(), a *= -1), d = t.length - 1, g = 0; d >= g; g++) {
                _ = {};
                for (m in o) _[m] = o[m];
                if (x && (s(_, t, g), null != _.duration && (e = _.duration, delete _.duration)), w) {
                    w = _.startAt = {};
                    for (m in o.startAt) w[m] = o.startAt[m];
                    s(_.startAt, t, g)
                }
                _.delay = y + (_.delay || 0), g === d && u && (_.onComplete = function() {
                    o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), u.apply(f || o.callbackScope || this, p || c)
                }), v[g] = new r(t[g], e, _), y += a
            }
            return v
        }, r.staggerFrom = r.allFrom = function(t, e, i, n, s, o, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, o, a)
        }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, o, a, l)
        }, r.delayedCall = function(t, e, i, n, s) {
            return new r(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }, r.set = function(t, e) {
            return new r(t, 0, e)
        }, r.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var p = function(t, e) {
                for (var n = [], s = 0, r = t._first; r;) r instanceof i ? n[s++] = r : (e && (n[s++] = r), n = n.concat(p(r, e)), s = n.length), r = r._next;
                return n
            },
            f = r.getAllTweens = function(e) {
                return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
            };
        r.killAll = function(t, i, n, s) {
            null == i && (i = !0), null == n && (n = !0);
            var r, o, a, l = f(0 != s),
                h = l.length,
                u = i && n && s;
            for (a = 0; h > a; a++) o = l[a], (u || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
        }, r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var s, o, u, c, p, f = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t))
                    for (c = t.length; --c > -1;) r.killChildTweensOf(t[c], e);
                else {
                    s = [];
                    for (u in f)
                        for (o = f[u].target.parentNode; o;) o === t && (s = s.concat(f[u].tweens)), o = o.parentNode;
                    for (p = s.length, c = 0; p > c; c++) e && s[c].totalTime(s[c].totalDuration()), s[c]._enabled(!1, !1)
                }
            }
        };
        var d = function(t, i, n, s) {
            i = !1 !== i, n = !1 !== n;
            for (var r, o, a = f(s = !1 !== s), l = i && n && s, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && o.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            d(!0, t, e, i)
        }, r.resumeAll = function(t, e, i) {
            d(!1, t, e, i)
        }, r.globalTimeScale = function(e) {
            var n = t._rootTimeline,
                s = i.ticker.time;
            return arguments.length ? (e = e || o, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
        }, u.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, u.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, u.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, u.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, u.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, u.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
                e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var i, n, s = this.vars;
                for (n in s) i = s[n], l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
            },
            s = 1e-10,
            r = i._internals,
            o = n._internals = {},
            a = r.isSelector,
            l = r.isArray,
            h = r.lazyTweens,
            u = r.lazyRender,
            c = _gsScope._gsDefine.globals,
            p = function(t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            },
            f = function(t, e, i) {
                var n, s, r = t.cycle;
                for (n in r) s = r[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                delete t.cycle
            },
            d = o.pauseCallback = function() {},
            _ = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            g = n.prototype = new e;
        return n.version = "1.20.2", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, s) {
            var r = n.repeat && c.TweenMax || i;
            return e ? this.add(new r(t, e, n), s) : this.set(t, n, s)
        }, g.from = function(t, e, n, s) {
            return this.add((n.repeat && c.TweenMax || i).from(t, e, n), s)
        }, g.fromTo = function(t, e, n, s, r) {
            var o = s.repeat && c.TweenMax || i;
            return e ? this.add(o.fromTo(t, e, n, s), r) : this.set(t, s, r)
        }, g.staggerTo = function(t, e, s, r, o, l, h, u) {
            var c, d, g = new n({
                    onComplete: l,
                    onCompleteParams: h,
                    callbackScope: u,
                    smoothChildTiming: this.smoothChildTiming
                }),
                m = s.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t), a(t = t || []) && (t = _(t)), 0 > (r = r || 0) && ((t = _(t)).reverse(), r *= -1), d = 0; d < t.length; d++)(c = p(s)).startAt && (c.startAt = p(c.startAt), c.startAt.cycle && f(c.startAt, t, d)), m && (f(c, t, d), null != c.duration && (e = c.duration, delete c.duration)), g.to(t[d], e, c, d * r);
            return this.add(g, o)
        }, g.staggerFrom = function(t, e, i, n, s, r, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, r, o, a)
        }, g.staggerFromTo = function(t, e, i, n, s, r, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, r, o, a, l)
        }, g.call = function(t, e, n, s) {
            return this.add(i.delayedCall(0, t, e, n), s)
        }, g.set = function(t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
        }, n.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var s, r, o = new n(t),
                a = o._timeline;
            for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, s = a._first; s;) r = s._next, e && s instanceof i && s.target === s.vars.onComplete || o.add(s, s._startTime - s._delay), s = r;
            return a.add(o, 0), o
        }, g.add = function(s, r, o, a) {
            var h, u, c, p, f, d;
            if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                if (s instanceof Array || s && s.push && l(s)) {
                    for (o = o || "normal", a = a || 0, h = r, u = s.length, c = 0; u > c; c++) l(p = s[c]) && (p = new n({
                        tweens: p
                    })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), h += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof s) return this.addLabel(s, r);
                if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                s = i.delayedCall(0, s)
            }
            if (e.prototype.add.call(this, s, r), s._time && s.render((this.rawTime() - s._startTime) * s._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (f = this, d = f.rawTime() > s._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
            return this
        }, g.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var n = e.length; --n > -1;) this.remove(e[n]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, g._remove = function(t, i) {
            return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, g.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, g.insert = g.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, g.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, g.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, g.addPause = function(t, e, n, s) {
            var r = i.delayedCall(0, d, n, s || this);
            return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
        }, g.removeLabel = function(t) {
            return delete this._labels[t], this
        }, g.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, g._parseTimeOrLabel = function(e, i, n, s) {
            var r, o;
            if (s instanceof t && s.timeline === this) this.remove(s);
            else if (s && (s instanceof Array || s.push && l(s)))
                for (o = s.length; --o > -1;) s[o] instanceof t && s[o].timeline === this && this.remove(s[o]);
            if (r = this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - r : 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
            else {
                if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = r + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : r
            }
            return Number(e) + i
        }, g.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }, g.stop = function() {
            return this.paused(!0)
        }, g.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }, g.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }, g.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, o, a, l, c, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                d = this._time,
                _ = this._startTime,
                g = this._timeScale,
                m = this._paused;
            if (t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = f + 1e-4;
            else if (1e-7 > t)
                if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                        for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                    t = 0, this._initted || (l = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= d)
                        for (n = this._first; n && n._startTime <= t && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !c;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n), n = n._prev;
                    c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== d && this._first || i || l || c) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (p = this._time) >= d)
                    for (n = this._first; n && (o = n._next, p === this._time && (!this._paused || m));)(n._active || n._startTime <= p && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                else
                    for (n = this._last; n && (o = n._prev, p === this._time && (!this._paused || m));) {
                        if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                            if (c === n) {
                                for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                c = null, this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = o
                    }
                this._onUpdate && (e || (h.length && u(), this._callback("onUpdate"))), a && (this._gc || (_ === this._startTime || g !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (r && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
            }
        }, g._hasPausedChild = function() {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, g.getChildren = function(t, e, n, s) {
            s = s || -9999999999;
            for (var r = [], o = this._first, a = 0; o;) o._startTime < s || (o instanceof i ? !1 !== e && (r[a++] = o) : (!1 !== n && (r[a++] = o), !1 !== t && (r = r.concat(o.getChildren(!0, e, n)), a = r.length))), o = o._next;
            return r
        }, g.getTweensOf = function(t, e) {
            var n, s, r = this._gc,
                o = [],
                a = 0;
            for (r && this._enabled(!0, !0), s = (n = i.getTweensOf(t)).length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (o[a++] = n[s]);
            return r && this._enabled(!1, !0), o
        }, g.recent = function() {
            return this._recent
        }, g._contains = function(t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, g.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
            if (e)
                for (n in r) r[n] >= i && (r[n] += t);
            return this._uncache(!0)
        }, g._kill = function(t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
            return s
        }, g.clear = function(t) {
            var e = this.getChildren(!1, !0, !0),
                i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0)
        }, g.invalidate = function() {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, g._enabled = function(t, i) {
            if (t === this._gc)
                for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }, g.totalTime = function(e, i, n) {
            this._forcingPlayhead = !0;
            var s = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, s
        }, g.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, g.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, s = this._last, r = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime, s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), (i = s._startTime + s._totalDuration / s._timeScale) > n && (n = i), s = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }, g.paused = function(e) {
            if (!e)
                for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }, g.usesFrames = function() {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        }, g.rawTime = function(t) {
            return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        }, n
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var n = function(e) {
                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
            },
            s = 1e-10,
            r = e._internals,
            o = r.lazyTweens,
            a = r.lazyRender,
            l = _gsScope._gsDefine.globals,
            h = new i(null, null, 1, 0),
            u = n.prototype = new t;
        return u.constructor = n, u.kill()._gc = !1, n.version = "1.20.2", u.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, u.addCallback = function(t, i, n, s) {
            return this.add(e.delayedCall(0, t, n, s), i)
        }, u.removeCallback = function(t, e) {
            if (t)
                if (null == e) this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
            return this
        }, u.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }, u.tweenTo = function(t, i) {
            i = i || {};
            var n, s, r, o = {
                    ease: h,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                },
                a = i.repeat && l.TweenMax || e;
            for (s in i) o[s] = i[s];
            return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, r = new a(this, n, o), o.onStart = function() {
                r.target.paused(!0), r.vars.time !== r.target.time() && n === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || [])
            }, r
        }, u.tweenFromTo = function(t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            }, i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, u.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, l, h, u, c, p, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                _ = this._duration,
                g = this._time,
                m = this._totalTime,
                y = this._startTime,
                v = this._timeScale,
                x = this._rawPrevTime,
                w = this._paused,
                T = this._cycle;
            if (t >= d - 1e-7 && t >= 0) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > x || x === s) && x !== t && this._first && (u = !0, x > s && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = _, t = _ + 1e-4);
            else if (1e-7 > t)
                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === _ && x !== s && (x > 0 || 0 > t && x >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = r = !0, h = "onReverseComplete") : x >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = _ || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                        for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                    t = 0, this._initted || (u = !0)
                }
            else if (0 === _ && 0 > x && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = _ + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && t >= m && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? (this._time = _, t = _ + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if ((t = this._time) >= g || this._repeat && T !== this._cycle)
                    for (n = this._first; n && n._startTime <= t && !p;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (p = n), n = n._next;
                else
                    for (n = this._last; n && n._startTime >= t && !p;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (p = n), n = n._prev;
                p && p._startTime < _ && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== T && !this._locked) {
                var b = this._yoyo && 0 != (1 & T),
                    S = b === (this._yoyo && 0 != (1 & this._cycle)),
                    k = this._totalTime,
                    P = this._cycle,
                    A = this._rawPrevTime,
                    C = this._time;
                if (this._totalTime = T * _, this._cycle < T ? b = !b : this._totalTime += _, this._time = g, this._rawPrevTime = 0 === _ ? x - 1e-4 : x, this._cycle = T, this._locked = !0, g = b ? 0 : _, this.render(g, e, 0 === _), e || this._gc || this.vars.onRepeat && (this._cycle = P, this._locked = !1, this._callback("onRepeat")), g !== this._time) return;
                if (S && (this._cycle = T, this._locked = !0, g = b ? _ + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !w) return;
                this._time = C, this._totalTime = k, this._cycle = P, this._rawPrevTime = A
            }
            if (this._time !== g && this._first || i || u || p) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (f = this._time) >= g)
                    for (n = this._first; n && (l = n._next, f === this._time && (!this._paused || w));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (p === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                else
                    for (n = this._last; n && (l = n._prev, f === this._time && (!this._paused || w));) {
                        if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                            if (p === n) {
                                for (p = n._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i), p = p._prev;
                                p = null, this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = l
                    }
                this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || (y === this._startTime || v !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (r && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
            } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }, u.getActive = function(t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, s, r = [],
                o = this.getChildren(t, e, i),
                a = 0,
                l = o.length;
            for (n = 0; l > n; n++)(s = o[n]).isActive() && (r[a++] = s);
            return r
        }, u.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
                n = i.length;
            for (e = 0; n > e; e++)
                if (i[e].time > t) return i[e].name;
            return null
        }, u.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                if (e[i].time < t) return e[i].name;
            return null
        }, u.getLabelsArray = function() {
            var t, e = [],
                i = 0;
            for (t in this._labels) e[i++] = {
                time: this._labels[t],
                name: t
            };
            return e.sort(function(t, e) {
                return t.time - e.time
            }), e
        }, u.invalidate = function() {
            return this._locked = !1, t.prototype.invalidate.call(this)
        }, u.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
        }, u.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
        }, u.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, u.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, u.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, u.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
    }, !0),
        function() {
            var t = 180 / Math.PI,
                e = [],
                i = [],
                n = [],
                s = {},
                r = _gsScope._gsDefine.globals,
                o = function(t, e, i, n) {
                    i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                },
                a = function(t, e, i, n) {
                    var s = {
                            a: t
                        },
                        r = {},
                        o = {},
                        a = {
                            c: n
                        },
                        l = (t + e) / 2,
                        h = (e + i) / 2,
                        u = (i + n) / 2,
                        c = (l + h) / 2,
                        p = (h + u) / 2,
                        f = (p - c) / 8;
                    return s.b = l + (t - l) / 4, r.b = c + f, s.c = r.a = (s.b + r.b) / 2, r.c = o.a = (c + p) / 2, o.b = p - f, a.b = u + (n - u) / 4, o.c = a.a = (o.b + a.b) / 2, [s, r, o, a]
                },
                l = function(t, s, r, o, l) {
                    var h, u, c, p, f, d, _, g, m, y, v, x, w, T = t.length - 1,
                        b = 0,
                        S = t[0].a;
                    for (h = 0; T > h; h++) f = t[b], u = f.a, c = f.d, p = t[b + 1].d, l ? (v = e[h], x = i[h], w = (x + v) * s * .25 / (o ? .5 : n[h] || .5), d = c - (c - u) * (o ? .5 * s : 0 !== v ? w / v : 0), _ = c + (p - c) * (o ? .5 * s : 0 !== x ? w / x : 0), g = c - (d + ((_ - d) * (3 * v / (v + x) + .5) / 4 || 0))) : (d = c - (c - u) * s * .5, _ = c + (p - c) * s * .5, g = c - (d + _) / 2), d += g, _ += g, f.c = m = d, f.b = 0 !== h ? S : S = f.a + .6 * (f.c - f.a), f.da = c - u, f.ca = m - u, f.ba = S - u, r ? (y = a(u, S, m, c), t.splice(b, 1, y[0], y[1], y[2], y[3]), b += 4) : b++, S = _;
                    (f = t[b]).b = S, f.c = S + .4 * (f.d - S), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = S - f.a, r && (y = a(f.a, S, f.c, f.d), t.splice(b, 1, y[0], y[1], y[2], y[3]))
                },
                h = function(t, n, s, r) {
                    var a, l, h, u, c, p, f = [];
                    if (r)
                        for (t = [r].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = r[n] + Number(p.charAt(0) + p.substr(2)));
                    if (0 > (a = t.length - 2)) return f[0] = new o(t[0][n], 0, 0, t[0][n]), f;
                    for (l = 0; a > l; l++) h = t[l][n], u = t[l + 1][n], f[l] = new o(h, 0, 0, u), s && (c = t[l + 2][n], e[l] = (e[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (c - u) * (c - u));
                    return f[l] = new o(t[l][n], 0, 0, t[l + 1][n]), f
                },
                u = function(t, r, o, a, u, c) {
                    var p, f, d, _, g, m, y, v, x = {},
                        w = [],
                        T = c || t[0];
                    u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == r && (r = 1);
                    for (f in t[0]) w.push(f);
                    if (t.length > 1) {
                        for (v = t[t.length - 1], y = !0, p = w.length; --p > -1;)
                            if (f = w[p], Math.abs(T[f] - v[f]) > .05) {
                                y = !1;
                                break
                            } y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                    }
                    for (e.length = i.length = n.length = 0, p = w.length; --p > -1;) f = w[p], s[f] = -1 !== u.indexOf("," + f + ","), x[f] = h(t, f, s[f], c);
                    for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                    if (!a) {
                        for (p = w.length; --p > -1;)
                            if (s[f])
                                for (d = x[w[p]], m = d.length - 1, _ = 0; m > _; _++) g = d[_ + 1].da / i[_] + d[_].da / e[_] || 0, n[_] = (n[_] || 0) + g * g;
                        for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                    }
                    for (p = w.length, _ = o ? 4 : 1; --p > -1;) f = w[p], d = x[f], l(d, r, o, a, s[f]), y && (d.splice(0, _), d.splice(d.length - _, _));
                    return x
                },
                c = function(t, e, i) {
                    var n, s, r, a, l, h, u, c, p, f, d, _ = {},
                        g = "cubic" === (e = e || "soft") ? 3 : 2,
                        m = "soft" === e,
                        y = [];
                    if (m && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                    for (p in t[0]) y.push(p);
                    for (h = y.length; --h > -1;) {
                        for (_[p = y[h]] = l = [], f = 0, c = t.length, u = 0; c > u; u++) n = null == i ? t[u][p] : "string" == typeof(d = t[u][p]) && "=" === d.charAt(1) ? i[p] + Number(d.charAt(0) + d.substr(2)) : Number(d), m && u > 1 && c - 1 > u && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                        for (c = f - g + 1, f = 0, u = 0; c > u; u += g) n = l[u], s = l[u + 1], r = l[u + 2], a = 2 === g ? 0 : l[u + 3], l[f++] = d = 3 === g ? new o(n, s, r, a) : new o(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                        l.length = f
                    }
                    return _
                },
                p = function(t, e, i) {
                    for (var n, s, r, o, a, l, h, u, c, p, f, d = 1 / i, _ = t.length; --_ > -1;)
                        for (p = t[_], r = p.a, o = p.d - r, a = p.c - r, l = p.b - r, n = s = 0, u = 1; i >= u; u++) h = d * u, c = 1 - h, n = s - (s = (h * h * o + 3 * c * (h * a + c * l)) * h), f = _ * i + u - 1, e[f] = (e[f] || 0) + n * n
                },
                f = function(t, e) {
                    var i, n, s, r, o = [],
                        a = [],
                        l = 0,
                        h = 0,
                        u = (e = e >> 0 || 6) - 1,
                        c = [],
                        f = [];
                    for (i in t) p(t[i], o, e);
                    for (s = o.length, n = 0; s > n; n++) l += Math.sqrt(o[n]), r = n % e, f[r] = l, r === u && (h += l, r = n / e >> 0, c[r] = f, a[r] = h, l = 0, f = []);
                    return {
                        length: h,
                        lengths: a,
                        segments: c
                    }
                },
                d = _gsScope._gsDefine.plugin({
                    propName: "bezier",
                    priority: -1,
                    version: "1.3.8",
                    API: 2,
                    global: !0,
                    init: function(t, e, i) {
                        this._target = t, e instanceof Array && (e = {
                            values: e
                        }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                        var n, s, r, o, a, l = e.values || [],
                            h = {},
                            p = l[0],
                            d = e.autoRotate || i.vars.orientToBezier;
                        this._autoRotate = d ? d instanceof Array ? d : [
                            ["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]
                        ] : null;
                        for (n in p) this._props.push(n);
                        for (r = this._props.length; --r > -1;) n = this._props[r], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
                        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : c(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                            var _ = f(this._beziers, this._timeRes);
                            this._length = _.length, this._lengths = _.lengths, this._segments = _.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                        }
                        if (d = this._autoRotate)
                            for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), r = d.length; --r > -1;) {
                                for (o = 0; 3 > o; o++) n = d[r][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                n = d[r][2], this._initialRotations[r] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                            }
                        return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                    },
                    set: function(e) {
                        var i, n, s, r, o, a, l, h, u, c, p = this._segCount,
                            f = this._func,
                            d = this._target,
                            _ = e !== this._startRatio;
                        if (this._timeRes) {
                            if (u = this._lengths, c = this._curSeg, e *= this._length, s = this._li, e > this._l2 && p - 1 > s) {
                                for (h = p - 1; h > s && (this._l2 = u[++s]) <= e;);
                                this._l1 = u[s - 1], this._li = s, this._curSeg = c = this._segments[s], this._s2 = c[this._s1 = this._si = 0]
                            } else if (e < this._l1 && s > 0) {
                                for (; s > 0 && (this._l1 = u[--s]) >= e;);
                                0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = u[s], this._li = s, this._curSeg = c = this._segments[s], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                            }
                            if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < c.length - 1) {
                                for (h = c.length - 1; h > s && (this._s2 = c[++s]) <= e;);
                                this._s1 = c[s - 1], this._si = s
                            } else if (e < this._s1 && s > 0) {
                                for (; s > 0 && (this._s1 = c[--s]) >= e;);
                                0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = c[s], this._si = s
                            }
                            a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                        } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
                        for (n = 1 - a, s = this._props.length; --s > -1;) r = this._props[s], o = this._beziers[r][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[r] && (l = this._mod[r](l, d)), f[r] ? d[r](l) : d[r] = l;
                        if (this._autoRotate) {
                            var g, m, y, v, x, w, T, b = this._autoRotate;
                            for (s = b.length; --s > -1;) r = b[s][2], w = b[s][3] || 0, T = !0 === b[s][4] ? 1 : t, o = this._beziers[b[s][0]], g = this._beziers[b[s][1]], o && g && (o = o[i], g = g[i], m = o.a + (o.b - o.a) * a, v = o.b + (o.c - o.b) * a, m += (v - m) * a, v += (o.c + (o.d - o.c) * a - v) * a, y = g.a + (g.b - g.a) * a, x = g.b + (g.c - g.b) * a, y += (x - y) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = _ ? Math.atan2(x - y, v - m) * T + w : this._initialRotations[s], this._mod[r] && (l = this._mod[r](l, d)), f[r] ? d[r](l) : d[r] = l)
                        }
                    }
                }),
                _ = d.prototype;
            d.bezierThrough = u, d.cubicToQuadratic = a, d._autoCSS = !0, d.quadraticToCubic = function(t, e, i) {
                return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
            }, d._cssRegister = function() {
                var t = r.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        n = e._setPluginRatio,
                        s = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function(t, e, r, o, a, l) {
                            e instanceof Array && (e = {
                                values: e
                            }), l = new d;
                            var h, u, c, p = e.values,
                                f = p.length - 1,
                                _ = [],
                                g = {};
                            if (0 > f) return a;
                            for (h = 0; f >= h; h++) c = i(t, p[h], o, a, l, f !== h), _[h] = c.end;
                            for (u in e) g[u] = e[u];
                            return g.values = _, a = new s(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (h = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != c.end.left ? [
                                ["left", "top", "rotation", h, !1]
                            ] : null != c.end.x && [
                                ["x", "y", "rotation", h, !1]
                            ]), g.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(c.proxy, g, o._tween), a
                        }
                    })
                }
            }, _._mod = function(t) {
                for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
            }, _._kill = function(t) {
                var e, i, n = this._props;
                for (e in this._beziers)
                    if (e in t)
                        for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                if (n = this._autoRotate)
                    for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                return this._super._kill.call(this, t)
            }
        }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, n, s, r, o = function() {
                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
            },
            a = _gsScope._gsDefine.globals,
            l = {},
            h = o.prototype = new t("css");
        h.constructor = o, o.version = "1.20.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: ""
        };
        var u, c, p, f, d, _, g, m, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            T = /(?:\d|\-|\+|=|#|\.)*/g,
            b = /opacity *= *([^)]*)/i,
            S = /opacity:([^;]*)/i,
            k = /alpha\(opacity *=.+?\)/i,
            P = /^(rgb|hsl)/,
            A = /([A-Z])/g,
            C = /-([a-z])/gi,
            O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            R = function(t, e) {
                return e.toUpperCase()
            },
            M = /(?:Left|Right|Width)/i,
            D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            X = /,(?=[^\)]*(?:\(|$))/gi,
            j = /[\s,\(]/i,
            E = Math.PI / 180,
            Y = 180 / Math.PI,
            L = {},
            I = {
                style: {}
            },
            F = _gsScope.document || {
                createElement: function() {
                    return I
                }
            },
            B = function(t, e) {
                return F.createElementNS ? F.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : F.createElement(t)
            },
            Q = B("div"),
            W = B("img"),
            z = o._internals = {
                _specialProps: l
            },
            V = (_gsScope.navigator || {}).userAgent || "",
            G = function() {
                var t = V.indexOf("Android"),
                    e = B("a");
                return p = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || parseFloat(V.substr(t + 8, 2)) > 3), d = p && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, f = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (_ = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
            }(),
            q = function(t) {
                return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            H = function(t) {
                _gsScope.console && console.log(t)
            },
            U = "",
            Z = "",
            $ = function(t, e) {
                var i, n, s = (e = e || Q).style;
                if (void 0 !== s[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
                return n >= 0 ? (Z = 3 === n ? "ms" : i[n], U = "-" + Z.toLowerCase() + "-", Z + t) : null
            },
            J = F.defaultView ? F.defaultView.getComputedStyle : function() {},
            K = o.getStyle = function(t, e, i, n, s) {
                var r;
                return G || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || J(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : q(t)
            },
            tt = z.convertToPixels = function(t, i, n, s, r) {
                if ("px" === s || !s && "lineHeight" !== i) return n;
                if ("auto" === s || !n) return 0;
                var a, l, h, u = M.test(i),
                    c = t,
                    p = Q.style,
                    f = 0 > n,
                    d = 1 === n;
                if (f && (n = -n), d && (n *= 100), "lineHeight" !== i || s)
                    if ("%" === s && -1 !== i.indexOf("border")) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                    else {
                        if (p.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s) p[u ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                        else {
                            if (c = t.parentNode || F.body, -1 !== K(c, "display").indexOf("flex") && (p.position = "absolute"), l = c._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * n / 100;
                            p[u ? "width" : "height"] = n + s
                        }
                        c.appendChild(Q), a = parseFloat(Q[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(Q), u && "%" === s && !1 !== o.cacheWidths && (l = c._gsCache = c._gsCache || {}, l.time = h, l.width = a / n * 100), 0 !== a || r || (a = tt(t, i, n, s, !0))
                    }
                else l = J(t).lineHeight, t.style.lineHeight = n, a = parseFloat(J(t).lineHeight), t.style.lineHeight = l;
                return d && (a /= 100), f ? -a : a
            },
            et = z.calculateOffset = function(t, e, i) {
                if ("absolute" !== K(t, "position", i)) return 0;
                var n = "left" === e ? "Left" : "Top",
                    s = K(t, "margin" + n, i);
                return t["offset" + n] - (tt(t, e, parseFloat(s), s.replace(T, "")) || 0)
            },
            it = function(t, e) {
                var i, n, s, r = {};
                if (e = e || J(t, null))
                    if (i = e.length)
                        for (; --i > -1;)(-1 === (s = e[i]).indexOf("-transform") || Ot === s) && (r[s.replace(C, R)] = e.getPropertyValue(s));
                    else
                        for (i in e)(-1 === i.indexOf("Transform") || Ct === i) && (r[i] = e[i]);
                else if (e = t.currentStyle || t.style)
                    for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(C, R)] = e[i]);
                return G || (r.opacity = q(t)), n = Wt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, Mt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
            },
            nt = function(t, e, i, n, s) {
                var r, o, a, l = {},
                    h = t.style;
                for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || s && s[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(w, "") ? r : 0 : et(t, o), void 0 !== h[o] && (a = new yt(h, o, h[o], a)));
                if (n)
                    for (o in n) "className" !== o && (l[o] = n[o]);
                return {
                    difs: l,
                    firstMPT: a
                }
            },
            st = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            ot = function(t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0;
                if (t.getCTM && Ft(t)) return t.getBBox()[e] || 0;
                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    s = st[e],
                    r = s.length;
                for (i = i || J(t, null); --r > -1;) n -= parseFloat(K(t, "padding" + s[r], i, !0)) || 0, n -= parseFloat(K(t, "border" + s[r] + "Width", i, !0)) || 0;
                return n
            },
            at = function(t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                (null == t || "" === t) && (t = "0 0");
                var i, n = t.split(" "),
                    s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                    r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                if (n.length > 3 && !e) {
                    for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(at(n[i]));
                    return t.join(",")
                }
                return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(w, "")), e.oy = parseFloat(r.replace(w, "")), e.v = t), e || t
            },
            lt = function(t, e) {
                return "function" == typeof t && (t = t(m, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            },
            ht = function(t, e) {
                return "function" == typeof t && (t = t(m, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            },
            ut = function(t, e, i, n) {
                var s, r, o, a, l;
                return "function" == typeof t && (t = t(m, g)), null == t ? a = e : "number" == typeof t ? a = t : (s = 360, r = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : Y) - (l ? 0 : e), r.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= s) != o % (s / 2) && (o = 0 > o ? o + s : o - s), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * s) % s - (o / s | 0) * s : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * s) % s - (o / s | 0) * s)), a = e + o), 1e-6 > a && a > -1e-6 && (a = 0), a
            },
            ct = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            pt = function(t, e, i) {
                return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            },
            ft = o.parseColor = function(t, e) {
                var i, n, s, r, o, a, l, h, u, c, p;
                if (t)
                    if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                    else {
                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) i = ct[t];
                        else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), s = t.charAt(2), r = t.charAt(3), t = "#" + n + n + s + s + r + r), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                        else if ("hsl" === t.substr(0, 3))
                            if (i = p = t.match(y), e) {
                                if (-1 !== t.indexOf("=")) return t.match(v)
                            } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, s = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - s, i.length > 3 && (i[3] = Number(t[3])), i[0] = pt(o + 1 / 3, n, s), i[1] = pt(o, n, s), i[2] = pt(o - 1 / 3, n, s);
                        else i = t.match(y) || ct.transparent;
                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                    }
                else i = ct.black;
                return e && !p && (n = i[0] / 255, s = i[1] / 255, r = i[2] / 255, h = Math.max(n, s, r), u = Math.min(n, s, r), l = (h + u) / 2, h === u ? o = a = 0 : (c = h - u, a = l > .5 ? c / (2 - h - u) : c / (h + u), o = h === n ? (s - r) / c + (r > s ? 6 : 0) : h === s ? (r - n) / c + 2 : (n - s) / c + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
            },
            dt = function(t, e) {
                var i, n, s, r = t.match(_t) || [],
                    o = 0,
                    a = "";
                if (!r.length) return t;
                for (i = 0; i < r.length; i++) n = r[i], s = t.substr(o, t.indexOf(n, o) - o), o += s.length + n.length, 3 === (n = ft(n, e)).length && n.push(1), a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                return a + t.substr(o)
            },
            _t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (h in ct) _t += "|" + h + "\\b";
        _t = new RegExp(_t + ")", "gi"), o.colorStringFilter = function(t) {
            var e, i = t[0] + " " + t[1];
            _t.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = dt(t[0], e), t[1] = dt(t[1], e)), _t.lastIndex = 0
        }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
        var gt = function(t, e, i, n) {
                if (null == t) return function(t) {
                    return t
                };
                var s, r = e ? (t.match(_t) || [""])[0] : "",
                    o = t.split(r).join("").match(x) || [],
                    a = t.substr(0, t.indexOf(o[0])),
                    l = ")" === t.charAt(t.length - 1) ? ")" : "",
                    h = -1 !== t.indexOf(" ") ? " " : ",",
                    u = o.length,
                    c = u > 0 ? o[0].replace(y, "") : "";
                return u ? s = e ? function(t) {
                    var e, p, f, d;
                    if ("number" == typeof t) t += c;
                    else if (n && X.test(t)) {
                        for (d = t.replace(X, "|").split("|"), f = 0; f < d.length; f++) d[f] = s(d[f]);
                        return d.join(",")
                    }
                    if (e = (t.match(_t) || [r])[0], p = t.split(e).join("").match(x) || [], f = p.length, u > f--)
                        for (; ++f < u;) p[f] = i ? p[(f - 1) / 2 | 0] : o[f];
                    return a + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function(t) {
                    var e, r, p;
                    if ("number" == typeof t) t += c;
                    else if (n && X.test(t)) {
                        for (r = t.replace(X, "|").split("|"), p = 0; p < r.length; p++) r[p] = s(r[p]);
                        return r.join(",")
                    }
                    if (e = t.match(x) || [], p = e.length, u > p--)
                        for (; ++p < u;) e[p] = i ? e[(p - 1) / 2 | 0] : o[p];
                    return a + e.join(h) + l
                } : function(t) {
                    return t
                }
            },
            mt = function(t) {
                return t = t.split(","),
                    function(e, i, n, s, r, o, a) {
                        var l, h = (i + "").split(" ");
                        for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                        return s.parse(e, a, r, o)
                    }
            },
            yt = (z._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, i, n, s, r, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                    for (l = o.firstMPT, r = 1 === t ? "e" : "b"; l;) {
                        if ((i = l.t).type) {
                            if (1 === i.type) {
                                for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                i[r] = s
                            }
                        } else i[r] = i.s + i.xs0;
                        l = l._next
                    }
            }, function(t, e, i, n, s) {
                this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
            }),
            vt = (z._parseToProxy = function(t, e, i, n, s, r) {
                var o, a, l, h, u, c = n,
                    p = {},
                    f = {},
                    d = i._transform,
                    _ = L;
                for (i._transform = null, L = e, n = u = i.parse(t, e, n, s), L = _, r && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                    if (n.type <= 1 && (a = n.p, f[a] = n.s + n.c, p[a] = n.s, r || (h = new yt(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                        for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, f[a] = n.data[l], p[a] = n[l], r || (h = new yt(n, l, a, h, n.rxp[l]));
                    n = n._next
                }
                return {
                    proxy: p,
                    end: f,
                    firstMPT: h,
                    pt: u
                }
            }, z.CSSPropTween = function(t, e, n, s, o, a, l, h, u, c, p) {
                this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof vt || r.push(this.n), this.r = h, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === p ? n + s : p, o && (this._next = o, o._prev = this)
            }),
            xt = function(t, e, i, n, s, r) {
                var o = new vt(t, e, i, n - i, s, -1, r);
                return o.b = i, o.e = o.xs0 = n, o
            },
            wt = o.parseComplex = function(t, e, i, n, s, r, a, l, h, c) {
                i = i || r || "", "function" == typeof n && (n = n(m, g)), a = new vt(t, e, 0, 0, a, c ? 2 : 1, null, !1, l, i, n), n += "", s && _t.test(n + i) && (n = [i, n], o.colorStringFilter(n), i = n[0], n = n[1]);
                var p, f, d, _, x, w, T, b, S, k, P, A, C, O = i.split(", ").join(",").split(" "),
                    R = n.split(", ").join(",").split(" "),
                    M = O.length,
                    D = !1 !== u;
                for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(X, ", ").split(" "), R = R.join(" ").replace(X, ", ").split(" "), M = O.length), M !== R.length && (O = (r || "").split(" "), M = O.length), a.plugin = h, a.setRatio = c, _t.lastIndex = 0, p = 0; M > p; p++)
                    if (_ = O[p], x = R[p], (b = parseFloat(_)) || 0 === b) a.appendXtra("", b, lt(x, b), x.replace(v, ""), D && -1 !== x.indexOf("px"), !0);
                    else if (s && _t.test(_)) A = x.indexOf(")") + 1, A = ")" + (A ? x.substr(A) : ""), C = -1 !== x.indexOf("hsl") && G, k = x, _ = ft(_, C), x = ft(x, C), (S = _.length + x.length > 6) && !G && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[p]).join("transparent")) : (G || (S = !1), C ? a.appendXtra(k.substr(0, k.indexOf("hsl")) + (S ? "hsla(" : "hsl("), _[0], lt(x[0], _[0]), ",", !1, !0).appendXtra("", _[1], lt(x[1], _[1]), "%,", !1).appendXtra("", _[2], lt(x[2], _[2]), S ? "%," : "%" + A, !1) : a.appendXtra(k.substr(0, k.indexOf("rgb")) + (S ? "rgba(" : "rgb("), _[0], x[0] - _[0], ",", !0, !0).appendXtra("", _[1], x[1] - _[1], ",", !0).appendXtra("", _[2], x[2] - _[2], S ? "," : A, !0), S && (_ = _.length < 4 ? 1 : _[3], a.appendXtra("", _, (x.length < 4 ? 1 : x[3]) - _, A, !1))), _t.lastIndex = 0;
                    else if (w = _.match(y)) {
                        if (!(T = x.match(v)) || T.length !== w.length) return a;
                        for (d = 0, f = 0; f < w.length; f++) P = w[f], k = _.indexOf(P, d), a.appendXtra(_.substr(d, k - d), Number(P), lt(T[f], P), "", D && "px" === _.substr(k + P.length, 2), 0 === f), d = k + P.length;
                        a["xs" + a.l] += _.substr(d)
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
                if (-1 !== n.indexOf("=") && a.data) {
                    for (A = a.xs0 + a.data.s, p = 1; p < a.l; p++) A += a["xs" + p] + a.data["xn" + p];
                    a.e = A + a["xs" + p]
                }
                return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
            },
            Tt = 9;
        for ((h = vt.prototype).l = h.pr = 0; --Tt > 0;) h["xn" + Tt] = 0, h["xs" + Tt] = "";
        h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, n, s, r) {
            var o = this,
                a = o.l;
            return o["xs" + a] += r && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = s, o["xn" + a] = e, o.plugin || (o.xfirst = new vt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, s, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                s: e + i
            }, o.rxp = {}, o.s = e, o.c = i, o.r = s, o)) : (o["xs" + a] += e + (n || ""), o)
        };
        var bt = function(t, e) {
                e = e || {}, this.p = e.prefix ? $(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
            },
            St = z._registerComplexSpecialProp = function(t, e, i) {
                "object" != typeof e && (e = {
                    parser: i
                });
                var n, s = t.split(","),
                    r = e.defaultValue;
                for (i = i || [r], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || r, new bt(s[n], e)
            },
            kt = z._registerPluginProp = function(t) {
                if (!l[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    St(t, {
                        parser: function(t, i, n, s, r, o, h) {
                            var u = a.com.greensock.plugins[e];
                            return u ? (u._cssRegister(), l[n].parse(t, i, n, s, r, o, h)) : (H("Error: " + e + " js file not loaded."), r)
                        }
                    })
                }
            };
        (h = bt.prototype).parseComplex = function(t, e, i, n, s, r) {
            var o, a, l, h, u, c, p = this.keyword;
            if (this.multi && (X.test(i) || X.test(e) ? (a = e.replace(X, "|").split("|"), l = i.replace(X, "|").split("|")) : p && (a = [e], l = [i])), l) {
                for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (u = e.indexOf(p), c = i.indexOf(p), u !== c && (-1 === c ? a[o] = a[o].split(p).join("") : -1 === u && (a[o] += " " + p)));
                e = a.join(", "), i = l.join(", ")
            }
            return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
        }, h.parse = function(t, e, i, n, r, o, a) {
            return this.parseComplex(t.style, this.format(K(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
        }, o.registerSpecialProp = function(t, e, i) {
            St(t, {
                parser: function(t, n, s, r, o, a, l) {
                    var h = new vt(t, s, 0, 0, o, 2, s, !1, i);
                    return h.plugin = a, h.setRatio = e(t, n, r._tween, s), h
                },
                priority: i
            })
        }, o.useSVGTransformAttr = !0;
        var Pt, At = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Ct = $("transform"),
            Ot = U + "transform",
            Rt = $("transformOrigin"),
            Mt = null !== $("perspective"),
            Dt = z.Transform = function() {
                this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !Mt) && (o.defaultForce3D || "auto")
            },
            Nt = _gsScope.SVGElement,
            Xt = function(t, e, i) {
                var n, s = F.createElementNS("http://www.w3.org/2000/svg", t),
                    r = /([a-z])([A-Z])/g;
                for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                return e.appendChild(s), s
            },
            jt = F.documentElement || {},
            Et = function() {
                var t, e, i, n = _ || /Android/i.test(V) && !_gsScope.chrome;
                return F.createElementNS && !n && (t = Xt("svg", jt), e = Xt("rect", t, {
                    width: 100,
                    height: 50,
                    x: 100
                }), i = e.getBoundingClientRect().width, e.style[Rt] = "50% 50%", e.style[Ct] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Mt), jt.removeChild(t)), n
            }(),
            Yt = function(t, e, i, n, s, r) {
                var a, l, h, u, c, p, f, d, _, g, m, y, v, x, w = t._gsTransform,
                    T = Qt(t, !0);
                w && (v = w.xOrigin, x = w.yOrigin), (!n || (a = n.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                    width: 0,
                    height: 0
                }), e = at(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = u = parseFloat(a[0]), i.yOrigin = c = parseFloat(a[1]), n && T !== Bt && (p = T[0], f = T[1], d = T[2], _ = T[3], g = T[4], m = T[5], (y = p * _ - f * d) && (l = u * (_ / y) + c * (-d / y) + (d * m - _ * g) / y, h = u * (-f / y) + c * (p / y) - (p * m - f * g) / y, u = i.xOrigin = a[0] = l, c = i.yOrigin = a[1] = h)), w && (r && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), s || !1 !== s && !1 !== o.defaultSmoothOrigin ? (l = u - v, h = c - x, w.xOffset += l * T[0] + h * T[2] - l, w.yOffset += l * T[1] + h * T[3] - h) : w.xOffset = w.yOffset = 0), r || t.setAttribute("data-svg-origin", a.join(" "))
            },
            Lt = function(t) {
                var e, i = B("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    n = this.parentNode,
                    s = this.nextSibling,
                    r = this.style.cssText;
                if (jt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                    e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Lt
                } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                return s ? n.insertBefore(this, s) : n.appendChild(this), jt.removeChild(i), this.style.cssText = r, e
            },
            It = function(t) {
                try {
                    return t.getBBox()
                } catch (e) {
                    return Lt.call(t, !0)
                }
            },
            Ft = function(t) {
                return !(!(Nt && t.getCTM && It(t)) || t.parentNode && !t.ownerSVGElement)
            },
            Bt = [1, 0, 0, 1, 0, 0],
            Qt = function(t, e) {
                var i, n, s, r, o, a, l = t._gsTransform || new Dt,
                    h = t.style;
                if (Ct ? n = K(t, Ot, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(D), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Ct || !(a = "none" === J(t).display) && t.parentNode || (a && (r = h.display, h.display = "block"), t.parentNode || (o = 1, jt.appendChild(t)), n = K(t, Ot, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, r ? h.display = r : a && qt(h, "display"), o && jt.removeChild(t)), (l.svg || t.getCTM && Ft(t)) && (i && -1 !== (h[Ct] + "").indexOf("matrix") && (n = h[Ct], i = 0), s = t.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (n = s, i = 0) : -1 !== s.indexOf("translate") && (n = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Bt;
                for (s = (n || "").match(y) || [], Tt = s.length; --Tt > -1;) r = Number(s[Tt]), s[Tt] = (o = r - (r |= 0)) ? (1e5 * o + (0 > o ? -.5 : .5) | 0) / 1e5 + r : r;
                return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
            },
            Wt = z.getTransform = function(t, i, n, s) {
                if (t._gsTransform && n && !s) return t._gsTransform;
                var r, a, l, h, u, c, p = n ? t._gsTransform || new Dt : new Dt,
                    f = p.scaleX < 0,
                    d = 2e-5,
                    _ = 1e5,
                    g = Mt ? parseFloat(K(t, Rt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                    m = parseFloat(o.defaultTransformPerspective) || 0;
                if (p.svg = !(!t.getCTM || !Ft(t)), p.svg && (Yt(t, K(t, Rt, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Pt = o.useSVGTransformAttr || Et), (r = Qt(t)) !== Bt) {
                    if (16 === r.length) {
                        var y, v, x, w, T, b = r[0],
                            S = r[1],
                            k = r[2],
                            P = r[3],
                            A = r[4],
                            C = r[5],
                            O = r[6],
                            R = r[7],
                            M = r[8],
                            D = r[9],
                            N = r[10],
                            X = r[12],
                            j = r[13],
                            E = r[14],
                            L = r[11],
                            I = Math.atan2(O, N);
                        p.zOrigin && (E = -p.zOrigin, X = M * E - r[12], j = D * E - r[13], E = N * E + p.zOrigin - r[14]), p.rotationX = I * Y, I && (w = Math.cos(-I), T = Math.sin(-I), y = A * w + M * T, v = C * w + D * T, x = O * w + N * T, M = A * -T + M * w, D = C * -T + D * w, N = O * -T + N * w, L = R * -T + L * w, A = y, C = v, O = x), I = Math.atan2(-k, N), p.rotationY = I * Y, I && (w = Math.cos(-I), T = Math.sin(-I), y = b * w - M * T, v = S * w - D * T, x = k * w - N * T, D = S * T + D * w, N = k * T + N * w, L = P * T + L * w, b = y, S = v, k = x), I = Math.atan2(S, b), p.rotation = I * Y, I && (w = Math.cos(I), T = Math.sin(I), y = b * w + S * T, v = A * w + C * T, x = M * w + D * T, S = S * w - b * T, C = C * w - A * T, D = D * w - M * T, b = y, A = v, M = x), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), I = Math.atan2(A, C), p.scaleX = (Math.sqrt(b * b + S * S + k * k) * _ + .5 | 0) / _, p.scaleY = (Math.sqrt(C * C + O * O) * _ + .5 | 0) / _, p.scaleZ = (Math.sqrt(M * M + D * D + N * N) * _ + .5 | 0) / _, b /= p.scaleX, A /= p.scaleY, S /= p.scaleX, C /= p.scaleY, Math.abs(I) > d ? (p.skewX = I * Y, A = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(I))) : p.skewX = 0, p.perspective = L ? 1 / (0 > L ? -L : L) : 0, p.x = X, p.y = j, p.z = E, p.svg && (p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * A), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * C))
                    } else if (!Mt || s || !r.length || p.x !== r[4] || p.y !== r[5] || !p.rotationX && !p.rotationY) {
                        var F = r.length >= 6,
                            B = F ? r[0] : 1,
                            Q = r[1] || 0,
                            W = r[2] || 0,
                            z = F ? r[3] : 1;
                        p.x = r[4] || 0, p.y = r[5] || 0, l = Math.sqrt(B * B + Q * Q), h = Math.sqrt(z * z + W * W), u = B || Q ? Math.atan2(Q, B) * Y : p.rotation || 0, c = W || z ? Math.atan2(W, z) * Y + u : p.skewX || 0, p.scaleX = l, p.scaleY = h, p.rotation = u, p.skewX = c, Mt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = m, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * B + p.yOrigin * W), p.y -= p.yOrigin - (p.xOrigin * Q + p.yOrigin * z))
                    }
                    Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (f ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180)), p.zOrigin = g;
                    for (a in p) p[a] < d && p[a] > -d && (p[a] = 0)
                }
                return n && (t._gsTransform = p, p.svg && (Pt && t.style[Ct] ? e.delayedCall(.001, function() {
                    qt(t.style, Ct)
                }) : !Pt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                    t.removeAttribute("transform")
                }))), p
            },
            zt = function(t) {
                var e, i, n = this.data,
                    s = -n.rotation * E,
                    r = s + n.skewX * E,
                    o = 1e5,
                    a = (Math.cos(s) * n.scaleX * o | 0) / o,
                    l = (Math.sin(s) * n.scaleX * o | 0) / o,
                    h = (Math.sin(r) * -n.scaleY * o | 0) / o,
                    u = (Math.cos(r) * n.scaleY * o | 0) / o,
                    c = this.t.style,
                    p = this.t.currentStyle;
                if (p) {
                    i = l, l = -h, h = -i, e = p.filter, c.filter = "";
                    var f, d, g = this.t.offsetWidth,
                        m = this.t.offsetHeight,
                        y = "absolute" !== p.position,
                        v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                        x = n.x + g * n.xPercent / 100,
                        w = n.y + m * n.yPercent / 100;
                    if (null != n.ox && (f = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, d = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2, x += f - (f * a + d * l), w += d - (f * h + d * u)), y ? (f = g / 2, d = m / 2, v += ", Dx=" + (f - (f * a + d * l) + x) + ", Dy=" + (d - (f * h + d * u) + w) + ")") : v += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(N, v) : c.filter = v + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === u && (y && -1 === v.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
                        var S, k, P, A = 8 > _ ? 1 : -1;
                        for (f = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * m)) / 2 + x), n.ieOffsetY = Math.round((m - ((0 > u ? -u : u) * m + (0 > h ? -h : h) * g)) / 2 + w), Tt = 0; 4 > Tt; Tt++) k = rt[Tt], S = p[k], i = -1 !== S.indexOf("px") ? parseFloat(S) : tt(this.t, k, parseFloat(S), S.replace(T, "")) || 0, P = i !== n[k] ? 2 > Tt ? -n.ieOffsetX : -n.ieOffsetY : 2 > Tt ? f - n.ieOffsetX : d - n.ieOffsetY, c[k] = (n[k] = Math.round(i - P * (0 === Tt || 2 === Tt ? 1 : A))) + "px"
                    }
                }
            },
            Vt = z.set3DTransformRatio = z.setTransformRatio = function(t) {
                var e, i, n, s, r, o, a, l, h, u, c, p, d, _, g, m, y, v, x, w, T, b, S, k = this.data,
                    P = this.t.style,
                    A = k.rotation,
                    C = k.rotationX,
                    O = k.rotationY,
                    R = k.scaleX,
                    M = k.scaleY,
                    D = k.scaleZ,
                    N = k.x,
                    X = k.y,
                    j = k.z,
                    Y = k.svg,
                    L = k.perspective,
                    I = k.force3D,
                    F = k.skewY,
                    B = k.skewX;
                if (F && (B += F, A += F), !((1 !== t && 0 !== t || "auto" !== I || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && I || j || L || O || C || 1 !== D) || Pt && Y || !Mt) A || B || Y ? (A *= E, b = B * E, S = 1e5, i = Math.cos(A) * R, r = Math.sin(A) * R, n = Math.sin(A - b) * -M, o = Math.cos(A - b) * M, b && "simple" === k.skewType && (e = Math.tan(b - F * E), e = Math.sqrt(1 + e * e), n *= e, o *= e, F && (e = Math.tan(F * E), e = Math.sqrt(1 + e * e), i *= e, r *= e)), Y && (N += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, X += k.yOrigin - (k.xOrigin * r + k.yOrigin * o) + k.yOffset, Pt && (k.xPercent || k.yPercent) && (g = this.t.getBBox(), N += .01 * k.xPercent * g.width, X += .01 * k.yPercent * g.height), (g = 1e-6) > N && N > -g && (N = 0), g > X && X > -g && (X = 0)), x = (i * S | 0) / S + "," + (r * S | 0) / S + "," + (n * S | 0) / S + "," + (o * S | 0) / S + "," + N + "," + X + ")", Y && Pt ? this.t.setAttribute("transform", "matrix(" + x) : P[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + x) : P[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + M + "," + N + "," + X + ")";
                else {
                    if (f && ((g = 1e-4) > R && R > -g && (R = D = 2e-5), g > M && M > -g && (M = D = 2e-5), !L || k.z || k.rotationX || k.rotationY || (L = 0)), A || B) A *= E, m = i = Math.cos(A), y = r = Math.sin(A), B && (A -= B * E, m = Math.cos(A), y = Math.sin(A), "simple" === k.skewType && (e = Math.tan((B - F) * E), e = Math.sqrt(1 + e * e), m *= e, y *= e, k.skewY && (e = Math.tan(F * E), e = Math.sqrt(1 + e * e), i *= e, r *= e))), n = -y, o = m;
                    else {
                        if (!(O || C || 1 !== D || L || Y)) return void(P[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + X + "px," + j + "px)" + (1 !== R || 1 !== M ? " scale(" + R + "," + M + ")" : ""));
                        i = o = 1, n = r = 0
                    }
                    u = 1, s = a = l = h = c = p = 0, d = L ? -1 / L : 0, _ = k.zOrigin, g = 1e-6, w = ",", T = "0", (A = O * E) && (m = Math.cos(A), y = Math.sin(A), l = -y, c = d * -y, s = i * y, a = r * y, u = m, d *= m, i *= m, r *= m), (A = C * E) && (m = Math.cos(A), y = Math.sin(A), e = n * m + s * y, v = o * m + a * y, h = u * y, p = d * y, s = n * -y + s * m, a = o * -y + a * m, u *= m, d *= m, n = e, o = v), 1 !== D && (s *= D, a *= D, u *= D, d *= D), 1 !== M && (n *= M, o *= M, h *= M, p *= M), 1 !== R && (i *= R, r *= R, l *= R, c *= R), (_ || Y) && (_ && (N += s * -_, X += a * -_, j += u * -_ + _), Y && (N += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, X += k.yOrigin - (k.xOrigin * r + k.yOrigin * o) + k.yOffset), g > N && N > -g && (N = T), g > X && X > -g && (X = T), g > j && j > -g && (j = 0)), x = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", x += (g > i && i > -g ? T : i) + w + (g > r && r > -g ? T : r) + w + (g > l && l > -g ? T : l), x += w + (g > c && c > -g ? T : c) + w + (g > n && n > -g ? T : n) + w + (g > o && o > -g ? T : o), C || O || 1 !== D ? (x += w + (g > h && h > -g ? T : h) + w + (g > p && p > -g ? T : p) + w + (g > s && s > -g ? T : s), x += w + (g > a && a > -g ? T : a) + w + (g > u && u > -g ? T : u) + w + (g > d && d > -g ? T : d) + w) : x += ",0,0,0,0,1,0,", x += N + w + X + w + j + w + (L ? 1 + -j / L : 1) + ")", P[Ct] = x
                }
            };
        (h = Dt.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, n, r, a, l) {
                if (n._lastParsedTransform === l) return r;
                n._lastParsedTransform = l;
                var h, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                "function" == typeof l[i] && (h = l[i], l[i] = e), u && (l.scale = u(m, t));
                var c, p, f, d, _, y, v, x, w, T = t._gsTransform,
                    b = t.style,
                    S = At.length,
                    k = l,
                    P = {},
                    A = "transformOrigin",
                    C = Wt(t, s, !0, k.parseTransform),
                    O = k.transform && ("function" == typeof k.transform ? k.transform(m, g) : k.transform);
                if (C.skewType = k.skewType || C.skewType || o.defaultSkewType, n._transform = C, O && "string" == typeof O && Ct) p = Q.style, p[Ct] = O, p.display = "block", p.position = "absolute", F.body.appendChild(Q), c = Wt(Q, null, !1), "simple" === C.skewType && (c.scaleY *= Math.cos(c.skewX * E)), C.svg && (y = C.xOrigin, v = C.yOrigin, c.x -= C.xOffset, c.y -= C.yOffset, (k.transformOrigin || k.svgOrigin) && (O = {}, Yt(t, at(k.transformOrigin), O, k.svgOrigin, k.smoothOrigin, !0), y = O.xOrigin, v = O.yOrigin, c.x -= O.xOffset - C.xOffset, c.y -= O.yOffset - C.yOffset), (y || v) && (x = Qt(Q, !0), c.x -= y - (y * x[0] + v * x[2]), c.y -= v - (y * x[1] + v * x[3]))), F.body.removeChild(Q), c.perspective || (c.perspective = C.perspective), null != k.xPercent && (c.xPercent = ht(k.xPercent, C.xPercent)), null != k.yPercent && (c.yPercent = ht(k.yPercent, C.yPercent));
                else if ("object" == typeof k) {
                    if (c = {
                            scaleX: ht(null != k.scaleX ? k.scaleX : k.scale, C.scaleX),
                            scaleY: ht(null != k.scaleY ? k.scaleY : k.scale, C.scaleY),
                            scaleZ: ht(k.scaleZ, C.scaleZ),
                            x: ht(k.x, C.x),
                            y: ht(k.y, C.y),
                            z: ht(k.z, C.z),
                            xPercent: ht(k.xPercent, C.xPercent),
                            yPercent: ht(k.yPercent, C.yPercent),
                            perspective: ht(k.transformPerspective, C.perspective)
                        }, null != (_ = k.directionalRotation))
                        if ("object" == typeof _)
                            for (p in _) k[p] = _[p];
                        else k.rotation = _;
                    "string" == typeof k.x && -1 !== k.x.indexOf("%") && (c.x = 0, c.xPercent = ht(k.x, C.xPercent)), "string" == typeof k.y && -1 !== k.y.indexOf("%") && (c.y = 0, c.yPercent = ht(k.y, C.yPercent)), c.rotation = ut("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : C.rotation, C.rotation, "rotation", P), Mt && (c.rotationX = ut("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", P), c.rotationY = ut("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", P)), c.skewX = ut(k.skewX, C.skewX), c.skewY = ut(k.skewY, C.skewY)
                }
                for (Mt && null != k.force3D && (C.force3D = k.force3D, d = !0), (f = C.force3D || C.z || C.rotationX || C.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == k.scale || (c.scaleZ = 1); --S > -1;) w = At[S], ((O = c[w] - C[w]) > 1e-6 || -1e-6 > O || null != k[w] || null != L[w]) && (d = !0, r = new vt(C, w, C[w], O, r), w in P && (r.e = P[w]), r.xs0 = 0, r.plugin = a, n._overwriteProps.push(r.n));
                return O = k.transformOrigin, C.svg && (O || k.svgOrigin) && (y = C.xOffset, v = C.yOffset, Yt(t, at(O), c, k.svgOrigin, k.smoothOrigin), r = xt(C, "xOrigin", (T ? C : c).xOrigin, c.xOrigin, r, A), r = xt(C, "yOrigin", (T ? C : c).yOrigin, c.yOrigin, r, A), (y !== C.xOffset || v !== C.yOffset) && (r = xt(C, "xOffset", T ? y : C.xOffset, C.xOffset, r, A), r = xt(C, "yOffset", T ? v : C.yOffset, C.yOffset, r, A)), O = "0px 0px"), (O || Mt && f && C.zOrigin) && (Ct ? (d = !0, w = Rt, O = (O || K(t, w, s, !1, "50% 50%")) + "", r = new vt(b, w, 0, 0, r, -1, A), r.b = b[w], r.plugin = a, Mt ? (p = C.zOrigin, O = O.split(" "), C.zOrigin = (O.length > 2 && (0 === p || "0px" !== O[2]) ? parseFloat(O[2]) : p) || 0, r.xs0 = r.e = O[0] + " " + (O[1] || "50%") + " 0px", r = new vt(C, "zOrigin", 0, 0, r, -1, r.n), r.b = p, r.xs0 = r.e = C.zOrigin) : r.xs0 = r.e = O) : at(O + "", C)), d && (n._transformType = C.svg && Pt || !f && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), u && (l.scale = u), r
            },
            prefix: !0
        }), St("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), St("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, r, o, a) {
                e = this.format(e);
                var l, h, u, c, p, f, d, _, g, m, y, v, x, w, T, b, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    k = t.style;
                for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = $(S[h])), -1 !== (p = c = K(t, S[h], s, !1, "0px")).indexOf(" ") && (c = p.split(" "), p = c[0], c = c[1]), f = u = l[h], d = parseFloat(p), v = p.substr((d + "").length), (x = "=" === f.charAt(1)) ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _ *= parseFloat(f), y = f.substr((_ + "").length - (0 > _ ? 1 : 0)) || "") : (_ = parseFloat(f), y = f.substr((_ + "").length)), "" === y && (y = n[i] || v), y !== v && (w = tt(t, "borderLeft", d, v), T = tt(t, "borderTop", d, v), "%" === y ? (p = w / g * 100 + "%", c = T / m * 100 + "%") : "em" === y ? (b = tt(t, "borderLeft", 1, "em"), p = w / b + "em", c = T / b + "em") : (p = w + "px", c = T + "px"), x && (f = parseFloat(p) + _ + y, u = parseFloat(c) + _ + y)), o = wt(k, S[h], p + " " + c, f + " " + u, !1, "0px", o);
                return o
            },
            prefix: !0,
            formatter: gt("0px 0px 0px 0px", !1, !0)
        }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, r, o) {
                return wt(t.style, i, this.format(K(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
            },
            prefix: !0,
            formatter: gt("0px 0px", !1, !0)
        }), St("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, r, o) {
                var a, l, h, u, c, p, f = "background-position",
                    d = s || J(t, null),
                    g = this.format((d ? _ ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    m = this.format(e);
                if (-1 !== g.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && (p = K(t, "backgroundImage").replace(O, "")) && "none" !== p) {
                    for (a = g.split(" "), l = m.split(" "), W.setAttribute("src", p), h = 2; --h > -1;) g = a[h], (u = -1 !== g.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (c = 0 === h ? t.offsetWidth - W.width : t.offsetHeight - W.height, a[h] = u ? parseFloat(g) / 100 * c + "px" : parseFloat(g) / c * 100 + "%");
                    g = a.join(" ")
                }
                return this.parseComplex(t.style, g, m, r, o)
            },
            formatter: at
        }), St("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return t += "", at(-1 === t.indexOf(" ") ? t + " " + t : t)
            }
        }), St("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), St("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), St("transformStyle", {
            prefix: !0
        }), St("backfaceVisibility", {
            prefix: !0
        }), St("userSelect", {
            prefix: !0
        }), St("margin", {
            parser: mt("marginTop,marginRight,marginBottom,marginLeft")
        }), St("padding", {
            parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), St("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, r, o) {
                var a, l, h;
                return 9 > _ ? (l = t.currentStyle, h = 8 > _ ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(K(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
            }
        }), St("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), St("autoRound,strictUnits", {
            parser: function(t, e, i, n, s) {
                return s
            }
        }), St("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, r, o) {
                var a = K(t, "borderTopWidth", s, !1, "0px"),
                    l = this.format(e).split(" "),
                    h = l[0].replace(T, "");
                return "px" !== h && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", s, !1, "solid") + " " + K(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, o)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(_t) || ["#000"])[0]
            }
        }), St("borderWidth", {
            parser: mt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), St("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, s, r) {
                var o = t.style,
                    a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new vt(o, a, 0, 0, s, -1, i, !1, 0, o[a], e)
            }
        });
        var Gt = function(t) {
            var e, i = this.t,
                n = i.filter || K(this.data, "filter") || "",
                s = this.s + this.c * t | 0;
            100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = n.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(b, "opacity=" + s))
        };
        St("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, r, o) {
                var a = parseFloat(K(t, "opacity", s, !1, "1")),
                    l = t.style,
                    h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === K(t, "visibility", s) && 0 !== e && (a = 0), G ? r = new vt(l, "opacity", a, e - a, r) : (r = new vt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Gt), h && (r = new vt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
            }
        });
        var qt = function(t, e) {
                e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e))
            },
            Ht = function(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : qt(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        St("className", {
            parser: function(t, e, n, r, o, a, l) {
                var h, u, c, p, f, d = t.getAttribute("class") || "",
                    _ = t.style.cssText;
                if (o = r._classNamePT = new vt(t, n, 0, 0, o, 2), o.setRatio = Ht, o.pr = -11, i = !0, o.b = d, u = it(t, s), c = t._gsClassPT) {
                    for (p = {}, f = c.data; f;) p[f.p] = 1, f = f._next;
                    c.setRatio(1)
                }
                return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = nt(t, u, it(t), l, p), t.setAttribute("class", d), o.data = h.firstMPT, t.style.cssText = _, o = o.xfirst = r.parse(t, h.difs, o, a)
            }
        });
        var Ut = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, s, r, o = this.t.style,
                    a = l.transform.parse;
                if ("all" === this.e) o.cssText = "", s = !0;
                else
                    for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Rt : l[i].p), qt(o, i);
                s && (qt(o, Ct), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (St("clearProps", {
            parser: function(t, e, n, s, r) {
                return r = new vt(t, n, 0, 0, r, 2), r.setRatio = Ut, r.e = e, r.pr = -10, r.data = s._tween, i = !0, r
            }
        }), h = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = h.length; Tt--;) kt(h[Tt]);
        (h = o.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a, h) {
            if (!t.nodeType) return !1;
            this._target = g = t, this._tween = a, this._vars = e, m = h, u = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, s = J(t, ""), r = this._overwriteProps;
            var f, _, y, v, x, w, T, b, k, P = t.style;
            if (c && "" === P.zIndex && ("auto" === (f = K(t, "zIndex", s)) || "" === f) && this._addLazySet(P, "zIndex", 0), "string" == typeof e && (v = P.cssText, f = it(t, s), P.cssText = v + ";" + e, f = nt(t, f, it(t)).difs, !G && S.test(e) && (f.opacity = parseFloat(RegExp.$1)), e = f, P.cssText = v), e.className ? this._firstPT = _ = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = _ = this.parse(t, e, null), this._transformType) {
                for (k = 3 === this._transformType, Ct ? p && (c = !0, "" === P.zIndex && ("auto" === (T = K(t, "zIndex", s)) || "" === T) && this._addLazySet(P, "zIndex", 0), d && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : P.zoom = 1, y = _; y && y._next;) y = y._next;
                b = new vt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, y), b.setRatio = Ct ? Vt : zt, b.data = this._transform || Wt(t, s, !0), b.tween = a, b.pr = -1, r.pop()
            }
            if (i) {
                for (; _;) {
                    for (w = _._next, y = v; y && y.pr > _.pr;) y = y._next;
                    (_._prev = y ? y._prev : x) ? _._prev._next = _: v = _, (_._next = y) ? y._prev = _ : x = _, _ = w
                }
                this._firstPT = v
            }
            return !0
        }, h.parse = function(t, e, i, r) {
            var o, a, h, c, p, f, d, _, y, v, x = t.style;
            for (o in e) {
                if ("function" == typeof(f = e[o]) && (f = f(m, g)), a = l[o]) i = a.parse(t, f, o, this, i, r, e);
                else {
                    if ("--" === o.substr(0, 2)) {
                        this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(o) + "", f + "", o, !1, o);
                        continue
                    }
                    p = K(t, o, s) + "", y = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || y && P.test(f) ? (y || (f = ft(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = wt(x, o, p, f, !0, "transparent", i, 0, r)) : y && j.test(f) ? i = wt(x, o, p, f, !0, null, i, 0, r) : (h = parseFloat(p), d = h || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (h = ot(t, o, s), d = "px") : "left" === o || "top" === o ? (h = et(t, o, s), d = "px") : (h = "opacity" !== o ? 0 : 1, d = "")), (v = y && "=" === f.charAt(1)) ? (c = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), c *= parseFloat(f), _ = f.replace(T, "")) : (c = parseFloat(f), _ = y ? f.replace(T, "") : ""), "" === _ && (_ = o in n ? n[o] : d), f = c || 0 === c ? (v ? c + h : c) + _ : e[o], d !== _ && ("" !== _ || "lineHeight" === o) && (c || 0 === c) && h && (h = tt(t, o, h, d), "%" === _ ? (h /= tt(t, o, 100, "%") / 100, !0 !== e.strictUnits && (p = h + "%")) : "em" === _ || "rem" === _ || "vw" === _ || "vh" === _ ? h /= tt(t, o, 1, _) : "px" !== _ && (c = tt(t, o, c, _), _ = "px"), v && (c || 0 === c) && (f = c + h + _)), v && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== x[o] && (f || f + "" != "NaN" && null != f) ? (i = new vt(x, o, c || h || 0, 0, i, -1, o, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : p) : H("invalid " + o + " tween value: " + e[o]) : (i = new vt(x, o, h, c - h, i, 0, o, !1 !== u && ("px" === _ || "zIndex" === o), 0, p, f), i.xs0 = _))
                }
                r && i && !i.plugin && (i.plugin = r)
            }
            return i
        }, h.setRatio = function(t) {
            var e, i, n, s = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; s;) {
                        if (e = s.c * t + s.s, s.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), s.type)
                            if (1 === s.type)
                                if (2 === (n = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                        else s.t[s.p] = e + s.xs0;
                        s = s._next
                    } else
                    for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
            else
                for (; s;) {
                    if (2 !== s.type)
                        if (s.r && -1 !== s.type)
                            if (e = Math.round(s.s + s.c), s.type) {
                                if (1 === s.type) {
                                    for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                }
                            } else s.t[s.p] = e + s.xs0;
                        else s.t[s.p] = s.e;
                    else s.setRatio(t);
                    s = s._next
                }
        }, h._enableTransforms = function(t) {
            this._transform = this._transform || Wt(this._target, s, !0), this._transformType = this._transform.svg && Pt || !t && 3 !== this._transformType ? 2 : 3
        };
        var Zt = function(t) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function(t, e, i) {
            var n = this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = Zt, n.data = this
        }, h._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, h._mod = function(t) {
            for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
        }, h._kill = function(e) {
            var i, n, s, r = e;
            if (e.autoAlpha || e.alpha) {
                r = {};
                for (n in e) r[n] = e[n];
                r.opacity = 1, r.autoAlpha && (r.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && ((s = i.xfirst) && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
            return t.prototype._kill.call(this, r)
        };
        var $t = function(t, e, i) {
            var n, s, r, o;
            if (t.slice)
                for (s = t.length; --s > -1;) $t(t[s], e, i);
            else
                for (n = t.childNodes, s = n.length; --s > -1;) r = n[s], o = r.type, r.style && (e.push(it(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || $t(r, e, i)
        };
        return o.cascadeTo = function(t, i, n) {
            var s, r, o, a, l = e.to(t, i, n),
                h = [l],
                u = [],
                c = [],
                p = [],
                f = e._internals.reservedProps;
            for (t = l._targets || l.target, $t(t, u, p), l.render(i, !0, !0), $t(t, c), l.render(0, !0, !0), l._enabled(!0), s = p.length; --s > -1;)
                if ((r = nt(p[s], u[s], c[s])).firstMPT) {
                    r = r.difs;
                    for (o in n) f[o] && (r[o] = n[o]);
                    a = {};
                    for (o in r) a[o] = u[s][o];
                    h.push(e.fromTo(p[s], i, a, r))
                } return h
        }, t.activate([o]), o
    }, !0),
        function() {
            var t = function(t) {
                    for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                },
                e = _gsScope._gsDefine.plugin({
                    propName: "roundProps",
                    version: "1.6.0",
                    priority: -1,
                    API: 2,
                    init: function(t, e, i) {
                        return this._tween = i, !0
                    }
                }).prototype;
            e._onInitAllProps = function() {
                for (var e, i, n, s = this._tween, r = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), o = r.length, a = {}, l = s._propLookup.roundProps; --o > -1;) a[r[o]] = Math.round;
                for (o = r.length; --o > -1;)
                    for (e = r[o], i = s._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : s._firstPT === i && (s._firstPT = n), i._next = i._prev = null, s._propLookup[e] = l)), i = n;
                return !1
            }, e._add = function(t, e, i, n) {
                this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
            }
        }(), _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function(t, e, i, n) {
            var s, r;
            if ("function" != typeof t.setAttribute) return !1;
            for (s in e) "function" == typeof(r = e[s]) && (r = r(n, t)), this._addTween(t, "setAttribute", t.getAttribute(s) + "", r + "", s, !1, s), this._overwriteProps.push(s);
            return !0
        }
    }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(t, e, i, n) {
            "object" != typeof e && (e = {
                rotation: e
            }), this.finals = {};
            var s, r, o, a, l, h, u = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (s in e) "useRadians" !== s && ("function" == typeof(a = e[s]) && (a = a(n, t)), h = (a + "").split("_"), r = h[0], o = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), a = this.finals[s] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, l = a - o, h.length && (-1 !== (r = h.join("_")).indexOf("short") && (l %= u) != l % (u / 2) && (l = 0 > l ? l + u : l - u), -1 !== r.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, s, o, o + l, s), this._overwriteProps.push(s)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, n, s = _gsScope.GreenSockGlobals || _gsScope,
            r = s.com.greensock,
            o = 2 * Math.PI,
            a = Math.PI / 2,
            l = r._class,
            h = function(e, i) {
                var n = l("easing." + e, function() {}, !0),
                    s = n.prototype = new t;
                return s.constructor = n, s.getRatio = i, n
            },
            u = t.register || function() {},
            c = function(t, e, i, n, s) {
                var r = l("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new n
                }, !0);
                return u(r, t), r
            },
            p = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            f = function(e, i) {
                var n = l("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    s = n.prototype = new t;
                return s.constructor = n, s.getRatio = i, s.config = function(t) {
                    return new n(t)
                }, n
            },
            d = c("Back", f("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), f("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), f("BackInOut", function(t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            _ = l("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
            }, !0),
            g = _.prototype = new t;
        return g.constructor = _, g.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, _.ease = new _(.7, .7), g.config = _.config = function(t, e, i) {
            return new _(t, e, i)
        }, e = l("easing.SteppedEase", function(t, e) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
        }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
        }, g.config = e.config = function(t, i) {
            return new e(t, i)
        }, i = l("easing.RoughEase", function(e) {
            for (var i, n, s, r, o, a, l = (e = e || {}).taper || "none", h = [], u = 0, c = 0 | (e.points || 20), f = c, d = !1 !== e.randomize, _ = !0 === e.clamp, g = e.template instanceof t ? e.template : null, m = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / c * f, n = g ? g.getRatio(i) : i, "none" === l ? s = m : "out" === l ? (r = 1 - i, s = r * r * m) : "in" === l ? s = i * i * m : .5 > i ? (r = 2 * i, s = r * r * .5 * m) : (r = 2 * (1 - i), s = r * r * .5 * m), d ? n += Math.random() * s - .5 * s : f % 2 ? n += .5 * s : n -= .5 * s, _ && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[u++] = {
                x: i,
                y: n
            };
            for (h.sort(function(t, e) {
                return t.x - e.x
            }), a = new p(1, 1, null), f = c; --f > -1;) o = h[f], a = new p(o.x, o.y, a);
            this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
        }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, g.config = function(t) {
            return new i(t)
        }, i.ease = new i, c("Bounce", h("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), h("BounceIn", function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), h("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), c("Circ", h("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), h("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), h("CircInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), n = function(e, i, n) {
            var s = l("easing." + e, function(t, e) {
                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                }, !0),
                r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, r.config = function(t, e) {
                return new s(t, e)
            }, s
        }, c("Elastic", n("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), n("ElasticIn", function(t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }, .3), n("ElasticInOut", function(t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)), c("Expo", h("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), h("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), h("ExpoInOut", function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), c("Sine", h("SineOut", function(t) {
            return Math.sin(t * a)
        }), h("SineIn", function(t) {
            return 1 - Math.cos(t * a)
        }), h("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), d
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            n = t.document,
            s = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!s.TweenLite) {
            var r, o, a, l, h, u = function(t) {
                    var e, i = t.split("."),
                        n = s;
                    for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                    return n
                },
                c = u("com.greensock"),
                p = 1e-10,
                f = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                d = function() {},
                _ = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                g = {},
                m = function(n, r, o, a) {
                    this.sc = g[n] ? g[n].sc : [], g[n] = this, this.gsClass = null, this.func = o;
                    var l = [];
                    this.check = function(h) {
                        for (var c, p, f, d, _ = r.length, y = _; --_ > -1;)(c = g[r[_]] || new m(r[_], [])).gsClass ? (l[_] = c.gsClass, y--) : h && c.sc.push(this);
                        if (0 === y && o) {
                            if (p = ("com.greensock." + n).split("."), f = p.pop(), d = u(p.join("."))[f] = this.gsClass = o.apply(o, l), a)
                                if (s[f] = i[f] = d, "undefined" != typeof module && module.exports)
                                    if (n === e) {
                                        module.exports = i[e] = d;
                                        for (_ in i) d[_] = i[_]
                                    } else i[e] && (i[e][f] = d);
                                else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return d
                                });
                            for (_ = 0; _ < this.sc.length; _++) this.sc[_].check()
                        }
                    }, this.check(!0)
                },
                y = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                v = c._class = function(t, e, i) {
                    return e = e || function() {}, y(t, [], function() {
                        return e
                    }, i), e
                };
            y.globals = s;
            var x = [0, 0, 1, 1],
                w = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? x.concat(e) : x
                }, !0),
                T = w.map = {},
                b = w.register = function(t, e, i, n) {
                    for (var s, r, o, a, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (r = l[h], s = n ? v("easing." + r, null, !0) : c.easing[r] || {}, o = u.length; --o > -1;) a = u[o], T[r + "." + a] = T[a + r] = s[a] = t.getRatio ? t : t[a] || new t
                };
            for ((a = w.prototype)._calcEnd = !1, a.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
            }, o = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1;) a = r[o] + ",Power" + o, b(new w(null, null, 1, o), a, "easeOut", !0), b(new w(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")), b(new w(null, null, 3, o), a, "easeInOut");
            T.linear = c.easing.Linear.easeIn, T.swing = c.easing.Quad.easeInOut;
            var S = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (a = S.prototype).addEventListener = function(t, e, i, n, s) {
                s = s || 0;
                var r, o, a = this._listeners[t],
                    u = 0;
                for (this !== l || h || l.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)(r = a[o]).c === e && r.s === i ? a.splice(o, 1) : 0 === u && r.pr < s && (u = o + 1);
                a.splice(u, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: s
                })
            }, a.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, a.dispatchEvent = function(t) {
                var e, i, n, s = this._listeners[t];
                if (s)
                    for ((e = s.length) > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)(n = s[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var k = t.requestAnimationFrame,
                P = t.cancelAnimationFrame,
                A = Date.now || function() {
                    return (new Date).getTime()
                },
                C = A();
            for (o = (r = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !k;) k = t[r[o] + "RequestAnimationFrame"], P = t[r[o] + "CancelAnimationFrame"] || t[r[o] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, s, r, o, a, u = this,
                    c = A(),
                    f = !(!1 === e || !k) && "auto",
                    _ = 500,
                    g = 33,
                    m = function(t) {
                        var e, n, l = A() - C;
                        l > _ && (c += l - g), C += l, u.time = (C - c) / 1e3, e = u.time - a, (!i || e > 0 || !0 === t) && (u.frame++, a += e + (e >= o ? .004 : o - e), n = !0), !0 !== t && (r = s(m)), n && u.dispatchEvent("tick")
                    };
                S.call(u), u.time = u.frame = 0, u.tick = function() {
                    m(!0)
                }, u.lagSmoothing = function(t, e) {
                    _ = t || 1 / p, g = Math.min(e, _, 0)
                }, u.sleep = function() {
                    null != r && (f && P ? P(r) : clearTimeout(r), s = d, r = null, u === l && (h = !1))
                }, u.wake = function(t) {
                    null !== r ? u.sleep() : t ? c += -C + (C = A()) : u.frame > 10 && (C = A() - _ + 5), s = 0 === i ? d : f && k ? k : function(t) {
                        return setTimeout(t, 1e3 * (a - u.time) + 1 | 0)
                    }, u === l && (h = !0), m(2)
                }, u.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), a = this.time + o, void u.wake()) : i
                }, u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(), f = t, void u.fps(i)) : f
                }, u.fps(t), setTimeout(function() {
                    "auto" === f && u.frame < 5 && "hidden" !== n.visibilityState && u.useRAF(!1)
                }, 1500)
            }), (a = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
            var O = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, U) {
                    h || l.wake();
                    var i = this.vars.useFrames ? H : U;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            l = O.ticker = new c.Ticker, (a = O.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
            var R = function() {
                h && A() - C > 2e3 && "hidden" !== n.visibilityState && l.wake();
                var t = setTimeout(R, 2e3);
                t.unref && t.unref()
            };
            R(), a.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, a.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, a.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, a.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, a.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, a.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, a.render = function(t, e, i) {}, a.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, a.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, a._enabled = function(t, e) {
                return h || l.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, a._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, a.kill = function(t, e) {
                return this._kill(t, e), this
            }, a._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, a._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, a._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    n = e[t + "Params"],
                    s = e[t + "Scope"] || e.callbackScope || this;
                switch (n ? n.length : 0) {
                    case 0:
                        i.call(s);
                        break;
                    case 1:
                        i.call(s, n[0]);
                        break;
                    case 2:
                        i.call(s, n[0], n[1]);
                        break;
                    default:
                        i.apply(s, n)
                }
            }, a.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[t];
                    null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = _(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, a.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, a.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, a.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, a.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, a.totalTime = function(t, e, i) {
                if (h || l.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            s = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (j.length && $(), this.render(t, e, !1), j.length && $())
                }
                return this
            }, a.progress = a.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, a.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, a.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, a.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || p, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, a.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, a.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (h || t || l.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var M = v("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (a = M.prototype = new O).constructor = M, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(t, e, i, n) {
                var s, r;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
                    for (r = t._startTime; s && s._startTime > r;) s = s._prev;
                return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
            }, a._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, a.render = function(t, e, i) {
                var n, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
            }, a.rawTime = function() {
                return h || l.wake(), this._totalTime
            };
            var D = v("TweenLite", function(e, i, n) {
                    if (O.call(this, i, n), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var s, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? q[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (a || e instanceof Array || e.push && _(e)) && "number" != typeof e[0])
                        for (this._targets = o = f(e), this._propLookup = [], this._siblings = [], s = 0; s < o.length; s++)(r = o[s]) ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(s--, 1), this._targets = o = o.concat(f(r))) : (this._siblings[s] = J(r, this, !1), 1 === l && this._siblings[s].length > 1 && tt(r, this, null, 1, this._siblings[s])) : "string" == typeof(r = o[s--] = D.selector(r)) && o.splice(s + 1, 1) : o.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -p, this.render(Math.min(0, -this._delay)))
                }, !0),
                N = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                X = function(t, e) {
                    var i, n = {};
                    for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            (a = D.prototype = new O).constructor = D, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, D.version = "1.20.2", D.defaultEase = a._ease = new w(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = l, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                l.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : void 0 === n ? e : n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var j = [],
                E = {},
                Y = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                L = /[\+-]=-?[\.\d]/,
                I = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                F = function(t, e, i, n) {
                    var s, r, o, a, l, h, u, c = [],
                        p = 0,
                        f = "",
                        d = 0;
                    for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, s = t.match(Y) || [], r = e.match(Y) || [], n && (n._next = null, n.blob = 1, c._firstPT = c._applyPT = n), l = r.length, a = 0; l > a; a++) u = r[a], h = e.substr(p, e.indexOf(u, p) - p), f += h || !a ? h : ",", p += h.length, d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), u === s[a] || s.length <= a ? f += u : (f && (c.push(f), f = ""), o = parseFloat(s[a]), c.push(o), c._firstPT = {
                        _next: c._firstPT,
                        t: c,
                        p: c.length - 1,
                        s: o,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0,
                        f: 0,
                        m: d && 4 > d ? Math.round : 0
                    }), p += u.length;
                    return (f += e.substr(p)) && c.push(f), c.setRatio = I, L.test(e) && (c.end = 0), c
                },
                B = function(t, e, i, n, s, r, o, a, l) {
                    "function" == typeof n && (n = n(l || 0, t));
                    var h, u = typeof t[e],
                        c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        p = "get" !== i ? i : c ? o ? t[c](o) : t[c]() : t[e],
                        f = "string" == typeof n && "=" === n.charAt(1),
                        d = {
                            t: t,
                            p: e,
                            s: p,
                            f: "function" === u,
                            pg: 0,
                            n: s || e,
                            m: r ? "function" == typeof r ? r : Math.round : 0,
                            pr: 0,
                            c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - p || 0
                        };
                    return ("number" != typeof p || "number" != typeof n && !f) && (o || isNaN(p) || !f && isNaN(n) || "boolean" == typeof p || "boolean" == typeof n ? (d.fp = o, h = F(p, f ? parseFloat(d.s) + d.c : n, a || D.defaultStringFilter, d), d = {
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: s || e,
                        pr: 0,
                        m: 0
                    }) : (d.s = parseFloat(p), f || (d.c = parseFloat(n) - d.s || 0))), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
                },
                Q = D._internals = {
                    isArray: _,
                    isSelector: N,
                    lazyTweens: j,
                    blobDif: F
                },
                W = D._plugins = {},
                z = Q.tweenLookup = {},
                V = 0,
                G = Q.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                H = O._rootFramesTimeline = new M,
                U = O._rootTimeline = new M,
                Z = 30,
                $ = Q.lazyRender = function() {
                    var t, e = j.length;
                    for (E = {}; --e > -1;)(t = j[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    j.length = 0
                };
            U._startTime = l.time, H._startTime = l.frame, U._active = H._active = !0, setTimeout($, 1), O._updateRoot = D.render = function() {
                var t, e, i;
                if (j.length && $(), U.render((l.time - U._startTime) * U._timeScale, !1, !1), H.render((l.frame - H._startTime) * H._timeScale, !1, !1), j.length && $(), l.frame >= Z) {
                    Z = l.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in z) {
                        for (t = (e = z[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete z[i]
                    }
                    if ((!(i = U._first) || i._paused) && D.autoSleep && !H._first && 1 === l._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || l.sleep()
                    }
                }
            }, l.addEventListener("tick", O._updateRoot);
            var J = function(t, e, i) {
                    var n, s, r = t._gsTweenID;
                    if (z[r || (t._gsTweenID = r = "t" + V++)] || (z[r] = {
                            target: t,
                            tweens: []
                        }), e && (n = z[r].tweens, n[s = n.length] = e, i))
                        for (; --s > -1;) n[s] === e && n.splice(s, 1);
                    return z[r].tweens
                },
                K = function(t, e, i, n) {
                    var s, r, o = t.vars.onOverwrite;
                    return o && (s = o(t, e, i, n)), (o = D.onOverwrite) && (r = o(t, e, i, n)), !1 !== s && !1 !== r
                },
                tt = function(t, e, i, n, s) {
                    var r, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = s.length, r = 0; l > r; r++)
                            if ((a = s[r]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var h, u = e._startTime + p,
                        c = [],
                        f = 0,
                        d = 0 === e._duration;
                    for (r = s.length; --r > -1;)(a = s[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || et(e, 0, d), 0 === et(a, h, d) && (c[f++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((d || !a._initted) && u - a._startTime <= 2e-10 || (c[f++] = a)));
                    for (r = f; --r > -1;)
                        if (a = c[r], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !K(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        } return o
                },
                et = function(t, e, i) {
                    for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) {
                        if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return (r /= s) > e ? r - e : i && r === e || !t._initted && 2 * p > r - e ? p : (r += t.totalDuration() / t._timeScale / s) > e + p ? 0 : r - e - p
                };
            a._init = function() {
                var t, e, i, n, s, r, o = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    h = !!o.immediateRender,
                    u = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                    for (n in o.startAt) s[n] = o.startAt[n];
                    if (s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== o.lazy, s.startAt = s.delay = null, s.onUpdate = o.onUpdate, s.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = D.to(this.target, 0, s), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (o.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (h = !1), i = {};
                        for (n in o) G[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = u = u ? u instanceof w ? u : "function" == typeof u ? new w(u, o.easeParams) : T[u] || D.defaultEase : D.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (r = this._targets.length, t = 0; r > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, a._initProps = function(e, i, n, s, r) {
                var o, a, l, h, u, c;
                if (null == e) return !1;
                E[e._gsTweenID] && $(), this.vars.css || e.style && e !== t && e.nodeType && W.css && !1 !== this.vars.autoCSS && X(this.vars, e);
                for (o in this.vars)
                    if (c = this.vars[o], G[o]) c && (c instanceof Array || c.push && _(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                    else if (W[o] && (h = new W[o])._onInitTween(e, this.vars[o], this, r)) {
                        for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: h._priority,
                            m: 0
                        }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                    } else i[o] = B.call(this, e, o, "get", c, o, 0, null, this.vars.stringFilter, r);
                return s && this._kill(s, e) ? this._initProps(e, i, n, s, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && tt(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (E[e._gsTweenID] = !0), l)
            }, a.render = function(t, e, i) {
                var n, s, r, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === p && "isPause" !== this.data) && h !== t && (i = !0, h > p && (s = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : p);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== p || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : p)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        c = this._easeType,
                        f = this._easePower;
                    (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, j.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === p && o !== p && (this._rawPrevTime = 0))
                }
            }, a._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var n, s, r, o, a, l, h, u, c, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((_(e) || N(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (h = t || a, u = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (r in h) a[r] && (c || (c = []), c.push(r));
                            if ((c || !t) && !K(this, i, e, c)) return !1
                        }
                        for (r in h)(o = a[r]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]), u && (s[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, a.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -p, this.render(Math.min(0, -this._delay))), this
            }, a._enabled = function(t, e) {
                if (h || l.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = J(n[i], this, !0);
                    else this._siblings = J(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
            }, D.delayedCall = function(t, e, i, n, s) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, n, s, r;
                if ((_(t) || N(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
                } else if (t._gsTweenID)
                    for (n = J(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n || []
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = D.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
            };
            var it = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype
            }, !0);
            if (a = it.prototype, it.version = "1.19.0", it.API = 2, a._firstPT = null, a._addTween = B, a.setRatio = I, a._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, a._mod = a._roundProps = function(t) {
                    for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, n, s, r, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = s; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : r) ? a._prev._next = a: s = a, (a._next = n) ? n._prev = a : r = a, a = o
                        }
                        a = e._firstPT = s
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, it.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === it.API && (W[(new t[e])._propName] = t[e]);
                    return !0
                }, y.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        s = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            it.call(this, i, n), this._overwriteProps = s || []
                        }, !0 === t.global),
                        a = o.prototype = new it(i);
                    a.constructor = o, o.API = t.API;
                    for (e in r) "function" == typeof t[e] && (a[r[e]] = t[e]);
                    return o.version = t.version, it.activate([o]), o
                }, r = t._gsQueue) {
                for (o = 0; o < r.length; o++) r[o]();
                for (a in g) g[a].func || t.console.log("GSAP encountered missing dependency: " + a)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), Winwheel.prototype.updateSegmentSizes = function() {
    if (this.segments) {
        var t = 0,
            e = 0;
        for (x = 1; x <= this.numSegments; x++) null !== this.segments[x].size && (t += this.segments[x].size, e++);
        var i = 360 - t,
            n = 0;
        i > 0 && (n = i / (this.numSegments - e));
        var s = 0;
        for (x = 1; x <= this.numSegments; x++) this.segments[x].startAngle = s, this.segments[x].size ? s += this.segments[x].size : s += n, this.segments[x].endAngle = s
    }
}, Winwheel.prototype.clearCanvas = function() {
    this.ctx && this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}, Winwheel.prototype.draw = function(t) {
    this.ctx && (void 0 !== t ? 1 == t && this.clearCanvas() : this.clearCanvas(), "image" == this.drawMode ? (this.drawWheelImage(), 1 == this.drawText && this.drawSegmentText(), 1 == this.imageOverlay && this.drawSegments()) : "segmentImage" == this.drawMode ? (this.drawSegmentImages(), 1 == this.drawText && this.drawSegmentText(), 1 == this.imageOverlay && this.drawSegments()) : (this.drawSegments(), 1 == this.drawText && this.drawSegmentText()), void 0 !== this.pins && 1 == this.pins.visible && this.drawPins(), 1 == this.pointerGuide.display && this.drawPointerGuide())
}, Winwheel.prototype.drawPins = function() {
    if (this.pins && this.pins.number) {
        var t = 360 / this.pins.number;
        for (i = 1; i <= this.pins.number; i++) this.ctx.save(), this.ctx.strokeStyle = this.pins.strokeStyle, this.ctx.lineWidth = this.pins.lineWidth, this.ctx.fillStyle = this.pins.fillStyle, this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(i * t + this.rotationAngle)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.beginPath(), this.ctx.arc(this.centerX, this.centerY - this.outerRadius + this.pins.outerRadius + this.pins.margin, this.pins.outerRadius, 0, 2 * Math.PI), this.pins.fillStyle && this.ctx.fill(), this.pins.strokeStyle && this.ctx.stroke(), this.ctx.restore()
    }
}, Winwheel.prototype.drawPointerGuide = function() {
    this.ctx && (this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(this.pointerAngle)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.strokeStyle = this.pointerGuide.strokeStyle, this.ctx.lineWidth = this.pointerGuide.lineWidth, this.ctx.beginPath(), this.ctx.moveTo(this.centerX, this.centerY), this.ctx.lineTo(this.centerX, -this.outerRadius / 4), this.ctx.stroke(), this.ctx.restore())
}, Winwheel.prototype.drawWheelImage = function() {
    if (null != this.wheelImage) {
        var t = this.centerX - this.wheelImage.height / 2,
            e = this.centerY - this.wheelImage.width / 2;
        this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(this.rotationAngle)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.drawImage(this.wheelImage, t, e), this.ctx.restore()
    }
}, Winwheel.prototype.drawSegmentImages = function() {
    if (this.ctx && this.segments)
        for (x = 1; x <= this.numSegments; x++)
            if (seg = this.segments[x], seg.imgData.height) {
                var t = 0,
                    e = 0,
                    i = 0,
                    n = "";
                "S" == (n = null !== seg.imageDirection ? seg.imageDirection : this.imageDirection) ? (t = this.centerX - seg.imgData.width / 2, e = this.centerY, i = seg.startAngle + 180 + (seg.endAngle - seg.startAngle) / 2) : "E" == n ? (t = this.centerX, e = this.centerY - seg.imgData.height / 2, i = seg.startAngle + 270 + (seg.endAngle - seg.startAngle) / 2) : "W" == n ? (t = this.centerX - seg.imgData.width, e = this.centerY - seg.imgData.height / 2, i = seg.startAngle + 90 + (seg.endAngle - seg.startAngle) / 2) : (t = this.centerX - seg.imgData.width / 2, e = this.centerY - seg.imgData.height, i = seg.startAngle + (seg.endAngle - seg.startAngle) / 2), this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(this.rotationAngle + i)), this.ctx.translate(-this.centerX, -this.centerY), this.ctx.drawImage(seg.imgData, t, e), this.ctx.restore()
            } else console.log("Segment " + x + " imgData is not loaded")
}, Winwheel.prototype.drawSegments = function() {
    if (this.ctx && this.segments)
        for (x = 1; x <= this.numSegments; x++) {
            seg = this.segments[x];
            var t, e, i;
            t = null !== seg.fillStyle ? seg.fillStyle : this.fillStyle, this.ctx.fillStyle = t, e = null !== seg.lineWidth ? seg.lineWidth : this.lineWidth, this.ctx.lineWidth = e, i = null !== seg.strokeStyle ? seg.strokeStyle : this.strokeStyle, this.ctx.strokeStyle = i, (i || t) && (this.ctx.beginPath(), this.innerRadius || this.ctx.moveTo(this.centerX, this.centerY), this.ctx.arc(this.centerX, this.centerY, this.outerRadius, this.degToRad(seg.startAngle + this.rotationAngle - 90), this.degToRad(seg.endAngle + this.rotationAngle - 90), !1), this.innerRadius ? this.ctx.arc(this.centerX, this.centerY, this.innerRadius, this.degToRad(seg.endAngle + this.rotationAngle - 90), this.degToRad(seg.startAngle + this.rotationAngle - 90), !0) : this.ctx.lineTo(this.centerX, this.centerY), t && this.ctx.fill())
        }
}, Winwheel.prototype.drawSegmentText = function() {
    if (this.ctx) {
        var t, e, n, s, r, o, a, l, h, u, c;
        for (x = 1; x <= this.numSegments; x++) {
            if (this.ctx.save(), seg = this.segments[x], seg.text) {
                t = null !== seg.textFontFamily ? seg.textFontFamily : this.textFontFamily, e = null !== seg.textFontSize ? seg.textFontSize : this.textFontSize, n = null !== seg.textFontWeight ? seg.textFontWeight : this.textFontWeight, s = null !== seg.textOrientation ? seg.textOrientation : this.textOrientation, r = null !== seg.textAlignment ? seg.textAlignment : this.textAlignment, o = null !== seg.textDirection ? seg.textDirection : this.textDirection, a = null !== seg.textMargin ? seg.textMargin : this.textMargin, l = null !== seg.textFillStyle ? seg.textFillStyle : this.textFillStyle, h = null !== seg.textStrokeStyle ? seg.textStrokeStyle : this.textStrokeStyle, u = null !== seg.textLineWidth ? seg.textLineWidth : this.textLineWidth, c = "", null != n && (c += n + " "), null != e && (c += e + "px "), null != t && (c += t), this.ctx.font = c, this.ctx.fillStyle = l, this.ctx.strokeStyle = h, this.ctx.lineWidth = u;
                var p = seg.text.split("\n"),
                    f = 0 - e * (p.length / 2) + e / 2;
                for ("curved" != s || "inner" != r && "outer" != r || (f = 0), i = 0; i < p.length; i++) {
                    if ("reversed" == o) {
                        if ("horizontal" == s) {
                            this.ctx.textAlign = "inner" == r ? "right" : "outer" == r ? "left" : "center", this.ctx.textBaseline = "middle";
                            y = this.degToRad(seg.endAngle - (seg.endAngle - seg.startAngle) / 2 + this.rotationAngle - 90 - 180);
                            this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(y), this.ctx.translate(-this.centerX, -this.centerY), "inner" == r ? (l && this.ctx.fillText(p[i], this.centerX - this.innerRadius - a, this.centerY + f), h && this.ctx.strokeText(p[i], this.centerX - this.innerRadius - a, this.centerY + f)) : "outer" == r ? (l && this.ctx.fillText(p[i], this.centerX - this.outerRadius + a, this.centerY + f), h && this.ctx.strokeText(p[i], this.centerX - this.outerRadius + a, this.centerY + f)) : (l && this.ctx.fillText(p[i], this.centerX - this.innerRadius - (this.outerRadius - this.innerRadius) / 2 - a, this.centerY + f), h && this.ctx.strokeText(p[i], this.centerX - this.innerRadius - (this.outerRadius - this.innerRadius) / 2 - a, this.centerY + f)), this.ctx.restore()
                        } else if ("vertical" == s) {
                            this.ctx.textAlign = "center", this.ctx.textBaseline = "inner" == r ? "top" : "outer" == r ? "bottom" : "middle";
                            y = seg.endAngle - (seg.endAngle - seg.startAngle) / 2 - 180;
                            if (y += this.rotationAngle, this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(y)), this.ctx.translate(-this.centerX, -this.centerY), "outer" == r) d = this.centerY + this.outerRadius - a;
                            else if ("inner" == r) d = this.centerY + this.innerRadius + a;
                            v = e - e / 9;
                            if ("outer" == r)
                                for (_ = p[i].length - 1; _ >= 0; _--) character = p[i].charAt(_), l && this.ctx.fillText(character, this.centerX + f, d), h && this.ctx.strokeText(character, this.centerX + f, d), d -= v;
                            else if ("inner" == r)
                                for (_ = 0; _ < p[i].length; _++) character = p[i].charAt(_), l && this.ctx.fillText(character, this.centerX + f, d), h && this.ctx.strokeText(character, this.centerX + f, d), d += v;
                            else if ("center" == r) {
                                w = 0;
                                p[i].length > 1 && (w = v * (p[i].length - 1) / 2);
                                for (var d = this.centerY + this.innerRadius + (this.outerRadius - this.innerRadius) / 2 + w + a, _ = p[i].length - 1; _ >= 0; _--) character = p[i].charAt(_), l && this.ctx.fillText(character, this.centerX + f, d), h && this.ctx.strokeText(character, this.centerX + f, d), d -= v
                            }
                            this.ctx.restore()
                        } else if ("curved" == s) {
                            T = 0;
                            "inner" == r ? (T = this.innerRadius + a, this.ctx.textBaseline = "top") : "outer" == r ? (T = this.outerRadius - a, this.ctx.textBaseline = "bottom", T -= e * (p.length - 1)) : "center" == r && (T = this.innerRadius + a + (this.outerRadius - this.innerRadius) / 2, this.ctx.textBaseline = "middle");
                            var g = 0,
                                m = 0;
                            for (p[i].length > 1 ? (this.ctx.textAlign = "left", g = e / 10 * 4, radiusPercent = 100 / T, g *= radiusPercent, totalArc = g * p[i].length, m = seg.startAngle + ((seg.endAngle - seg.startAngle) / 2 - totalArc / 2)) : (m = seg.startAngle + (seg.endAngle - seg.startAngle) / 2, this.ctx.textAlign = "center"), m += this.rotationAngle, m -= 180, _ = p[i].length; _ >= 0; _--) this.ctx.save(), character = p[i].charAt(_), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(m)), this.ctx.translate(-this.centerX, -this.centerY), h && this.ctx.strokeText(character, this.centerX, this.centerY + T + f), l && this.ctx.fillText(character, this.centerX, this.centerY + T + f), m += g, this.ctx.restore()
                        }
                    } else if ("horizontal" == s) {
                        this.ctx.textAlign = "inner" == r ? "left" : "outer" == r ? "right" : "center", this.ctx.textBaseline = "middle";
                        y = this.degToRad(seg.endAngle - (seg.endAngle - seg.startAngle) / 2 + this.rotationAngle - 90);
                        this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(y), this.ctx.translate(-this.centerX, -this.centerY), "inner" == r ? (l && this.ctx.fillText(p[i], this.centerX + this.innerRadius + a, this.centerY + f), h && this.ctx.strokeText(p[i], this.centerX + this.innerRadius + a, this.centerY + f)) : "outer" == r ? (l && this.ctx.fillText(p[i], this.centerX + this.outerRadius - a, this.centerY + f), h && this.ctx.strokeText(p[i], this.centerX + this.outerRadius - a, this.centerY + f)) : (l && this.ctx.fillText(p[i], this.centerX + this.innerRadius + (this.outerRadius - this.innerRadius) / 2 + a, this.centerY + f), h && this.ctx.strokeText(p[i], this.centerX + this.innerRadius + (this.outerRadius - this.innerRadius) / 2 + a, this.centerY + f)), this.ctx.restore()
                    } else if ("vertical" == s) {
                        this.ctx.textAlign = "center", this.ctx.textBaseline = "inner" == r ? "bottom" : "outer" == r ? "top" : "middle";
                        var y = seg.endAngle - (seg.endAngle - seg.startAngle) / 2;
                        if (y += this.rotationAngle, this.ctx.save(), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(y)), this.ctx.translate(-this.centerX, -this.centerY), "outer" == r) d = this.centerY - this.outerRadius + a;
                        else if ("inner" == r) d = this.centerY - this.innerRadius - a;
                        var v = e - e / 9;
                        if ("outer" == r)
                            for (_ = 0; _ < p[i].length; _++) character = p[i].charAt(_), l && this.ctx.fillText(character, this.centerX + f, d), h && this.ctx.strokeText(character, this.centerX + f, d), d += v;
                        else if ("inner" == r)
                            for (_ = p[i].length - 1; _ >= 0; _--) character = p[i].charAt(_), l && this.ctx.fillText(character, this.centerX + f, d), h && this.ctx.strokeText(character, this.centerX + f, d), d -= v;
                        else if ("center" == r) {
                            var w = 0;
                            p[i].length > 1 && (w = v * (p[i].length - 1) / 2);
                            for (var d = this.centerY - this.innerRadius - (this.outerRadius - this.innerRadius) / 2 - w - a, _ = 0; _ < p[i].length; _++) character = p[i].charAt(_), l && this.ctx.fillText(character, this.centerX + f, d), h && this.ctx.strokeText(character, this.centerX + f, d), d += v
                        }
                        this.ctx.restore()
                    } else if ("curved" == s) {
                        var T = 0;
                        "inner" == r ? (T = this.innerRadius + a, this.ctx.textBaseline = "bottom", T += e * (p.length - 1)) : "outer" == r ? (T = this.outerRadius - a, this.ctx.textBaseline = "top") : "center" == r && (T = this.innerRadius + a + (this.outerRadius - this.innerRadius) / 2, this.ctx.textBaseline = "middle");
                        var g = 0,
                            m = 0;
                        for (p[i].length > 1 ? (this.ctx.textAlign = "left", g = e / 10 * 4, radiusPercent = 100 / T, g *= radiusPercent, totalArc = g * p[i].length, m = seg.startAngle + ((seg.endAngle - seg.startAngle) / 2 - totalArc / 2)) : (m = seg.startAngle + (seg.endAngle - seg.startAngle) / 2, this.ctx.textAlign = "center"), m += this.rotationAngle, _ = 0; _ < p[i].length; _++) this.ctx.save(), character = p[i].charAt(_), this.ctx.translate(this.centerX, this.centerY), this.ctx.rotate(this.degToRad(m)), this.ctx.translate(-this.centerX, -this.centerY), h && this.ctx.strokeText(character, this.centerX, this.centerY - T + f), l && this.ctx.fillText(character, this.centerX, this.centerY - T + f), m += g, this.ctx.restore()
                    }
                    f += e
                }
            }
            this.ctx.restore()
        }
    }
}, Winwheel.prototype.degToRad = function(t) {
    return .017453292519943295 * t
}, Winwheel.prototype.setCenter = function(t, e) {
    this.centerX = t, this.centerY = e
}, Winwheel.prototype.addSegment = function(t, e) {
    newSegment = new Segment(t), this.numSegments++;
    var i;
    if (void 0 !== e) {
        for (var n = this.numSegments; n > e; n--) this.segments[n] = this.segments[n - 1];
        this.segments[e] = newSegment, i = e
    } else this.segments[this.numSegments] = newSegment, i = this.numSegments;
    return this.updateSegmentSizes(), this.segments[i]
}, Winwheel.prototype.setCanvasId = function(t) {
    t ? (this.canvasId = t, this.canvas = document.getElementById(this.canvasId), this.canvas && (this.ctx = this.canvas.getContext("2d"))) : (this.canvasId = null, this.ctx = null, this.canvas = null)
}, Winwheel.prototype.deleteSegment = function(t) {
    if (this.numSegments > 1) {
        if (void 0 !== t)
            for (var e = t; e < this.numSegments; e++) this.segments[e] = this.segments[e + 1];
        this.segments[this.numSegments] = void 0, this.numSegments--, this.updateSegmentSizes()
    }
}, Winwheel.prototype.windowToCanvas = function(t, e) {
    var i = this.canvas.getBoundingClientRect();
    return {
        x: Math.floor(t - i.left * (this.canvas.width / i.width)),
        y: Math.floor(e - i.top * (this.canvas.height / i.height))
    }
}, Winwheel.prototype.getSegmentAt = function(t, e) {
    var i = null,
        n = this.getSegmentNumberAt(t, e);
    return null !== n && (i = this.segments[n]), i
}, Winwheel.prototype.getSegmentNumberAt = function(t, e) {
    var i, n, s, r, o, a = this.windowToCanvas(t, e);
    a.x > this.centerX ? (s = a.x - this.centerX, n = "R") : (s = this.centerX - a.x, n = "L"), a.y > this.centerY ? (r = a.y - this.centerY, i = "B") : (r = this.centerY - a.y, i = "T");
    var l = r / s,
        h = 180 * Math.atan(l) / Math.PI,
        u = 0;
    o = Math.sqrt(r * r + s * s), "T" == i && "R" == n ? u = Math.round(90 - h) : "B" == i && "R" == n ? u = Math.round(h + 90) : "B" == i && "L" == n ? u = Math.round(90 - h + 180) : "T" == i && "L" == n && (u = Math.round(h + 270)), 0 != this.rotationAngle && (u -= this.getRotationPosition()) < 0 && (u = 360 - Math.abs(u));
    for (var c = null, t = 1; t <= this.numSegments; t++)
        if (u >= this.segments[t].startAngle && u <= this.segments[t].endAngle && o >= this.innerRadius && o <= this.outerRadius) {
            c = t;
            break
        } return c
}, Winwheel.prototype.getIndicatedSegment = function() {
    var t = this.getIndicatedSegmentNumber();
    return this.segments[t]
}, Winwheel.prototype.getIndicatedSegmentNumber = function() {
    var t = 0,
        e = this.getRotationPosition(),
        i = Math.floor(this.pointerAngle - e);
    for (i < 0 && (i = 360 - Math.abs(i)), x = 1; x < this.segments.length; x++)
        if (i >= this.segments[x].startAngle && i <= this.segments[x].endAngle) {
            t = x;
            break
        } return t
}, Winwheel.prototype.getRotationPosition = function() {
    var t = this.rotationAngle;
    if (t >= 0) t > 360 && (t -= 360 * (e = Math.floor(t / 360)));
    else {
        if (t < -360) {
            var e = Math.ceil(t / 360);
            t -= 360 * e
        }
        t = 360 + t
    }
    return t
}, Winwheel.prototype.startAnimation = function() {
    if (this.animation) {
        this.computeAnimation(), winwheelToDrawDuringAnimation = this;
        var t = new Array(null);
        t[this.animation.propertyName] = this.animation.propertyValue, t.yoyo = this.animation.yoyo, t.repeat = this.animation.repeat, t.ease = this.animation.easing, t.onUpdate = winwheelAnimationLoop, t.onComplete = winwheelStopAnimation, this.tween = TweenMax.to(this, this.animation.duration, t)
    }
}, Winwheel.prototype.stopAnimation = function(t) {
    winwheelToDrawDuringAnimation && (winwheelToDrawDuringAnimation.tween.kill(), winwheelStopAnimation(t)), winwheelToDrawDuringAnimation = this
}, Winwheel.prototype.pauseAnimation = function() {
    this.tween && this.tween.pause()
}, Winwheel.prototype.resumeAnimation = function() {
    this.tween && this.tween.play()
}, Winwheel.prototype.computeAnimation = function() {
    this.animation && ("spinOngoing" == this.animation.type ? (this.animation.propertyName = "rotationAngle", null == this.animation.spins && (this.animation.spins = 5), null == this.animation.repeat && (this.animation.repeat = -1), null == this.animation.easing && (this.animation.easing = "Linear.easeNone"), null == this.animation.yoyo && (this.animation.yoyo = !1), this.animation.propertyValue = 360 * this.animation.spins, "anti-clockwise" == this.animation.direction && (this.animation.propertyValue = 0 - this.animation.propertyValue)) : "spinToStop" == this.animation.type ? (this.animation.propertyName = "rotationAngle", null == this.animation.spins && (this.animation.spins = 5), null == this.animation.repeat && (this.animation.repeat = 0), null == this.animation.easing && (this.animation.easing = "Power4.easeOut"), null == this.animation.stopAngle ? this.animation._stopAngle = Math.floor(359 * Math.random()) : this.animation._stopAngle = 360 - this.animation.stopAngle + this.pointerAngle, null == this.animation.yoyo && (this.animation.yoyo = !1), this.animation.propertyValue = 360 * this.animation.spins, "anti-clockwise" == this.animation.direction ? (this.animation.propertyValue = 0 - this.animation.propertyValue, this.animation.propertyValue -= 360 - this.animation._stopAngle) : this.animation.propertyValue += this.animation._stopAngle) : "spinAndBack" == this.animation.type ? (this.animation.propertyName = "rotationAngle", null == this.animation.spins && (this.animation.spins = 5), null == this.animation.repeat && (this.animation.repeat = 1), null == this.animation.easing && (this.animation.easing = "Power2.easeInOut"), null == this.animation.yoyo && (this.animation.yoyo = !0), null == this.animation.stopAngle ? this.animation._stopAngle = 0 : this.animation._stopAngle = 360 - this.animation.stopAngle, this.animation.propertyValue = 360 * this.animation.spins, "anti-clockwise" == this.animation.direction ? (this.animation.propertyValue = 0 - this.animation.propertyValue, this.animation.propertyValue -= 360 - this.animation._stopAngle) : this.animation.propertyValue += this.animation._stopAngle) : this.animation.type)
}, Winwheel.prototype.getRandomForSegment = function(t) {
    var e = 0;
    if (t)
        if (void 0 !== this.segments[t]) {
            var i = this.segments[t].startAngle,
                n = this.segments[t].endAngle - i - 2;
            n > 0 ? e = i + 1 + Math.floor(Math.random() * n) : console.log("Segment size is too small to safely get random angle inside it")
        } else console.log("Segment " + t + " undefined");
    else console.log("Segment number not specified");
    return e
}, Segment.prototype.changeImage = function(t, e) {
    this.image = t, this.imgData = null, e && (this.imageDirection = e), winhweelAlreadyDrawn = !1, this.imgData = new Image, this.imgData.onload = winwheelLoadedImage, this.imgData.src = this.image
};
var winwheelToDrawDuringAnimation = null,
    winhweelAlreadyDrawn = !1,
    currentWidth = jQuery(window).width(),
    currentWidthSpin = jQuery(window).width();
jQuery(document).ready(function() {
    function t() {
        jQuery(".optinspin-open-fortune").animate({
            right: "3%"
        }, 500, function() {
            jQuery(".optinspin-open-fortune").animate({
                right: "2%"
            }, 200)
        })
    }
    if (jQuery(".woo-try_btn,.optinspin-custom-btn, #bottom_spin_icon").on("click", function() {
            open_wheel_slide()
        }), "1" == getCookie("optinspin_use") && getCookie("optinspin_coupon_code").length > 0 && "off" != optinspin_wheel_spin.disable_optinbar) {
        show_optin_bar(getCookie("optinspin_coupon_code"));
        var e = getCookie("optin_win_coupon_id");
        if ("" != e) {
            var i = optinspin_wheel_spin.ajax_url,
                n = {
                    action: "optinspin_coupon_request",
                    request_to: "get_coupon_expiry",
                    coupon_id: e
                };
            jQuery.post(i, n, function(t) {
                "" != t && coupon_count_down(t)
            })
        }
    }
    jQuery(".optinspin-try-luck-btn.myButton").click(function() {}), jQuery(".woo-wheel-roll-bg, .optinspin-cross-wrapper").on("click", function() {
        setCookie("optinspin_wheel_open", 0, 1), jQuery("body").css("position", "initial"), jQuery(".woo-wheel-roll-bg").fadeOut();
        var t = jQuery(window).width() + 30;
        jQuery(".woo-wheel-roll").animate({
            marginLeft: "-" + t + "px"
        }), jQuery(".woo-try_btn").animate({
            marginLeft: "0%"
        }), jQuery(".wheelContainer").animate({
            left: "0%"
        }), jQuery(".optinspin-try-luck-btn.myButton").animate({
            "margin-top": "0%"
        }, 1e3)
    }), jQuery(".optinspin-try-luck-btn").click(function() {
        jQuery(".optinspin-intro, .optinspin-try-luck-btn").fadeIn(500), jQuery(".optinspin-intro, .optinspin-try-luck-btn").animate({
            opacity: 0,
            marginTop: "90px"
        }, "slow", function() {
            jQuery(".optinspin-intro, .optinspin-try-luck-btn").remove(), jQuery(".optinspin-from").fadeIn()
        }), setCookie("optinspin_spin_start", 1, 1), currentWidthSpin = jQuery(window).width()
    }), jQuery("input.optinspin-form-btn").click(function() {}), jQuery(".optinspin-add-coupon").on("click", function() {
        console.log(optinspin_wheel_spin.ajax_url);
        var t = jQuery(".win-coupon").html();
        if (" - " != t) {
            var e = optinspin_wheel_spin.ajax_url,
                i = {
                    action: "optinspin_coupon_request",
                    request_to: "apply_coupon",
                    coupon: t
                };
            jQuery.post(e, i, function(t) {
                jQuery(".optinspin-add-to-cart").fadeOut(), setTimeout(function() {
                    jQuery(".optinspin-add-to-cart").html('<a href="javascript:void(0)">Your Coupon has been added to cart successfully :)</a>'), jQuery(".optinspin-add-to-cart").fadeIn(), 1 == optinspin_wheel_spin.enable_cart_redirect && window.open(optinspin_wheel_spin.cart_url, "_self")
                }, 2e3), setTimeout(function() {
                    close_win_loss_block(), jQuery(".optinspin-cross-wrapper").trigger("click"), setCookie("optinspin_spin_start", 0, 1)
                }, 4e3)
            })
        }
    }), jQuery(".optinspin-decline-coupon .optinspin-coupon-decline").on("click", function() {
        close_win_loss_block(), jQuery(".optinspin-cross-wrapper").trigger("click");
        jQuery(".win-coupon").html();
        setCookie("optinspin_spin_start", 0, 1)
    }), setTimeout(function() {
        t()
    }, 2e3), jQuery(".optinspin-canvas").click(function() {
        jQuery(".optinspin-notify-field").remove();
        var t = "",
            e = "";
        t = jQuery(".optinspin-name.optinspin-block").length > 0 ? jQuery(".optinspin-name.optinspin-block").val() : "1", e = jQuery(".optinspin-form-field.optinspin-email").val(), "" == t ? jQuery("<div class='optinspin-notify-field'>Please Enter this field</div>").insertBefore(".optinspin-form-field.optinspin-name") : "" == e && jQuery("<div class='optinspin-notify-field'>Please Enter this field</div>").insertBefore(".optinspin-form-field.optinspin-email")
    }), jQuery(".optinspin-optin-bar span.cancel").on("click", function() {
        jQuery(".optinspin-optin-bar").hide()
    }), call_ribbons(), close_fortune_wheel()
}), jQuery(window).resize(function() {
    var t = jQuery(window).width();
    currentWidth != t && (currentWidth = t, 0 == getCookie("optinspin_wheel_open") || "" == getCookie("optinspin_wheel_open") ? close_fortune_wheel() : 1 == getCookie("optinspin_wheel_open") && 1 == getCookie("optinspin_spin_start") ? getCookie("optinspin_spin_width") != jQuery(window).width() ? jQuery(".optinspin-rotate-mob").fadeIn() : (jQuery(".optinspin-rotate-mob").fadeOut(), open_wheel_slide()) : 1 == getCookie("optinspin_wheel_open") && 0 == getCookie("optinspin_spin_start") ? (close_fortune_wheel(), open_wheel_slide()) : 0 != getCookie("optinspin_spin_start") && "" != getCookie("optinspin_spin_start") || close_fortune_wheel())
}), init();