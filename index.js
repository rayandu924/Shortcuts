const __MYWALLPAPER_WIDGET_RUNTIME_CONTRACT__ = "1";
if (!__canvasRuntime) {
      throw new Error('Canvas runtime globals are unavailable');
    }
if (!__canvasRuntime.react || !__canvasRuntime.reactJsxRuntime || !__canvasRuntime.sdkReact || !__canvasRuntime.sdkContracts || !__canvasRuntime.sdkPermissions) {
      throw new Error('Canvas runtime globals are unavailable');
    }
const __canvasRuntimeReact = __canvasRuntime.react;
const __canvasRuntimeJsxRuntime = __canvasRuntime.reactJsxRuntime;
const __canvasRuntimeSdk = __canvasRuntime.sdkReact;
const __canvasRuntimeSdkContracts = __canvasRuntime.sdkContracts;
const __canvasRuntimeSdkPermissions = __canvasRuntime.sdkPermissions;
const t = __canvasRuntimeJsxRuntime.jsx;
const p = __canvasRuntimeJsxRuntime.jsxs;
const S = __canvasRuntimeReact.useState;
const F = __canvasRuntimeReact.useRef;
const X = __canvasRuntimeReact.useEffect;
const Y = __canvasRuntimeReact.useCallback;
const se = __canvasRuntimeSdk.useSettings;
const de = __canvasRuntimeSdk.useSettingsActions;
const pe = __canvasRuntimeSdk.useSystemActions;
const he = __canvasRuntimeSdk.useViewport;
const Q = [
  "#e06c75",
  "#e5c07b",
  "#98c379",
  "#56b6c2",
  "#61afef",
  "#c678dd",
  "#d19a66",
  "#be5046",
  "#7ec8e3",
  "#f5a623",
  "#a3be8c",
  "#b48ead",
  "#88c0d0",
  "#bf616a",
  "#d08770",
  "#ebcb8b"
], ue = {
  "google.com": "Google",
  "youtube.com": "YouTube",
  "github.com": "GitHub",
  "gmail.com": "Gmail",
  "reddit.com": "Reddit",
  "twitter.com": "Twitter",
  "x.com": "X",
  "facebook.com": "Facebook",
  "instagram.com": "Instagram",
  "linkedin.com": "LinkedIn",
  "stackoverflow.com": "Stack Overflow",
  "wikipedia.org": "Wikipedia",
  "amazon.com": "Amazon",
  "netflix.com": "Netflix",
  "spotify.com": "Spotify",
  "discord.com": "Discord",
  "twitch.tv": "Twitch",
  "chatgpt.com": "ChatGPT",
  "openai.com": "OpenAI",
  "claude.ai": "Claude"
}, ge = ["gnome-", "xfce4-", "mate-", "kde-", "org.gnome.", "org.kde."];
function me(n) {
  let r = 0;
  for (let a = 0; a < n.length; a++)
    r = (r << 5) - r + n.charCodeAt(a), r |= 0;
  return Math.abs(r);
}
function z(n, r) {
  const a = (n || "?").charAt(0).toUpperCase(), i = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="${r || Q[me(n) % Q.length]}"/>
    <text x="32" y="32" text-anchor="middle" dominant-baseline="central"
      font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="700"
      fill="white">${a}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(i)}`;
}
function Z(n) {
  const r = n.trim();
  if (!r) return "";
  if (/^https?:\/\//i.test(r))
    try {
      const v = new URL(r).hostname.replace(/^www\./, ""), P = ue[v];
      if (P) return P;
      const s = v.split(".")[0];
      return s.charAt(0).toUpperCase() + s.slice(1);
    } catch {
      return r;
    }
  const c = r.replace(/^~/, "/home/user").replace(/\/+$/, "").split("/");
  let i = c[c.length - 1] || r;
  i = i.replace(/\.\w+$/, "");
  for (const f of ge)
    if (i.toLowerCase().startsWith(f)) {
      i = i.slice(f.length);
      break;
    }
  return i.charAt(0).toUpperCase() + i.slice(1);
}
function _(n) {
  try {
    const r = JSON.parse(n);
    return Array.isArray(r) ? r : [];
  } catch {
    return [];
  }
}
function fe(n) {
  return JSON.stringify(n);
}
function re(n, r) {
  if (r <= 0) return { col: 0, row: 0 };
  const a = new Set(n.map((c) => `${c.col},${c.row}`));
  for (let c = 0; ; c++)
    for (let i = 0; i < r; i++)
      if (!a.has(`${c},${i}`))
        return { col: c, row: i };
}
function xe(n, r, a) {
  const c = [...n], i = [];
  for (const f of r) {
    const { col: v, row: P } = re(c, a), s = { ...f, col: v, row: P };
    c.push(s), i.push(s);
  }
  return i;
}
const ye = [
  {
    label: "Apps",
    items: [
      { name: "Firefox", execPath: "firefox", color: "#e06c75" },
      { name: "Chrome", execPath: "google-chrome", color: "#61afef" },
      { name: "Terminal", execPath: "gnome-terminal", color: "#313244" },
      { name: "Files", execPath: "nautilus", color: "#e5c07b" },
      { name: "VS Code", execPath: "code", color: "#56b6c2" },
      { name: "Spotify", execPath: "spotify", color: "#98c379" },
      { name: "Discord", execPath: "discord", color: "#7289da" },
      { name: "Steam", execPath: "steam", color: "#1b2838" }
    ]
  },
  {
    label: "Websites",
    items: [
      { name: "Google", execPath: "https://google.com", color: "#e5c07b" },
      { name: "YouTube", execPath: "https://youtube.com", color: "#be5046" },
      { name: "GitHub", execPath: "https://github.com", color: "#6e7681" },
      { name: "Gmail", execPath: "https://gmail.com", color: "#e06c75" },
      { name: "Reddit", execPath: "https://reddit.com", color: "#d19a66" },
      { name: "ChatGPT", execPath: "https://chatgpt.com", color: "#98c379" }
    ]
  },
  {
    label: "Folders",
    items: [
      { name: "Home", execPath: "~", color: "#61afef" },
      { name: "Documents", execPath: "~/Documents", color: "#e5c07b" },
      { name: "Downloads", execPath: "~/Downloads", color: "#98c379" },
      { name: "Pictures", execPath: "~/Pictures", color: "#c678dd" }
    ]
  }
];
function be({ onSave: n, onCancel: r }) {
  const [a, c] = S(""), [i, f] = S(""), [v, P] = S(!1), [s, V] = S("auto"), [I, x] = S(null), [k, B] = S(""), j = F(null), y = F(null), W = F(null);
  X(() => {
    j.current?.focus();
  }, []);
  const E = (e) => {
    c(e), v || f(Z(e));
  }, A = (e) => {
    f(e), P(!0);
  }, U = () => {
    y.current?.click();
  }, H = (e) => {
    const l = e.target.files?.[0];
    if (!l) return;
    const u = l.path || l.name;
    c(u), v || f(Z(u)), e.target.value = "";
  }, L = () => {
    W.current?.click();
  }, M = (e) => {
    const l = e.target.files?.[0];
    if (!l) return;
    const u = new FileReader();
    u.onloadend = () => {
      x(u.result);
    }, u.readAsDataURL(l), e.target.value = "";
  }, N = () => {
    if (s === "local" && I) return I;
    if (s === "url" && k.trim()) return k.trim();
  }, G = () => {
    const e = i.trim(), l = a.trim();
    if (!e || !l) return;
    const u = N() || z(e);
    n(e, l, u);
  }, b = (e) => {
    const l = N() || z(e.name, e.color);
    n(e.name, e.execPath, l);
  }, R = s === "local" && I ? I : s === "url" && k.trim() ? k.trim() : i.trim() ? z(i.trim()) : null, O = i.trim() && a.trim();
  return /* @__PURE__ */ t("div", { style: we, onClick: r, children: /* @__PURE__ */ p("div", { style: Se, onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ p("div", { style: ve, children: [
      /* @__PURE__ */ t("h3", { style: Ie, children: "Add Shortcut" }),
      /* @__PURE__ */ t("button", { onClick: r, style: ee, children: "✕" })
    ] }),
    /* @__PURE__ */ p("div", { style: ke, children: [
      ye.map((e) => /* @__PURE__ */ p("div", { style: { marginBottom: 16 }, children: [
        /* @__PURE__ */ t("div", { style: Ce, children: e.label }),
        /* @__PURE__ */ t("div", { style: Pe, children: e.items.map((l) => /* @__PURE__ */ p(
          "button",
          {
            onClick: () => b(l),
            style: De,
            title: l.execPath,
            onMouseEnter: (u) => {
              u.currentTarget.style.transform = "scale(1.08)", u.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
            },
            onMouseLeave: (u) => {
              u.currentTarget.style.transform = "scale(1)", u.currentTarget.style.boxShadow = "none";
            },
            children: [
              /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: l.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0
                  },
                  children: l.name.charAt(0)
                }
              ),
              /* @__PURE__ */ t("span", { style: Re, children: l.name })
            ]
          },
          l.name
        )) })
      ] }, e.label)),
      /* @__PURE__ */ p("div", { style: Ae, children: [
        /* @__PURE__ */ t("span", { style: te }),
        /* @__PURE__ */ t("span", { style: Te, children: "or add custom" }),
        /* @__PURE__ */ t("span", { style: te })
      ] }),
      /* @__PURE__ */ t("label", { style: J, children: "Path / URL" }),
      /* @__PURE__ */ p("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ t(
          "input",
          {
            ref: j,
            type: "text",
            value: a,
            onChange: (e) => E(e.target.value),
            placeholder: "e.g. /usr/bin/app or https://...",
            style: { ...q, flex: 1 }
          }
        ),
        /* @__PURE__ */ t("button", { onClick: U, style: oe, children: "Browse..." })
      ] }),
      /* @__PURE__ */ t(
        "input",
        {
          ref: y,
          type: "file",
          style: { display: "none" },
          onChange: H
        }
      ),
      /* @__PURE__ */ t("label", { style: J, children: "Name (auto-filled from path)" }),
      /* @__PURE__ */ t(
        "input",
        {
          type: "text",
          value: i,
          onChange: (e) => A(e.target.value),
          placeholder: "e.g. Firefox",
          style: q,
          onKeyDown: (e) => e.key === "Enter" && G()
        }
      ),
      /* @__PURE__ */ t("label", { style: { ...J, marginTop: 16 }, children: "Icon" }),
      /* @__PURE__ */ t("div", { style: ze, children: ["auto", "local", "url"].map((e) => /* @__PURE__ */ t(
        "button",
        {
          onClick: () => V(e),
          style: {
            ...Ee,
            backgroundColor: s === e ? "#89b4fa" : "#313244",
            color: s === e ? "#1e1e2e" : "#a6adc8",
            fontWeight: s === e ? 600 : 400
          },
          children: e === "auto" ? "Auto" : e === "local" ? "Local File" : "Online URL"
        },
        e
      )) }),
      s === "local" && /* @__PURE__ */ p("div", { style: { marginTop: 10 }, children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ t("button", { onClick: L, style: oe, children: "Choose Image..." }),
          I && /* @__PURE__ */ t(
            "img",
            {
              src: I,
              alt: "",
              style: { width: 32, height: 32, borderRadius: 6, objectFit: "cover" }
            }
          ),
          I && /* @__PURE__ */ t(
            "button",
            {
              onClick: () => x(null),
              style: { ...ee, fontSize: 12, padding: "2px 6px" },
              children: "✕"
            }
          )
        ] }),
        /* @__PURE__ */ t(
          "input",
          {
            ref: W,
            type: "file",
            accept: "image/*",
            style: { display: "none" },
            onChange: M
          }
        )
      ] }),
      s === "url" && /* @__PURE__ */ p("div", { style: { marginTop: 10 }, children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            value: k,
            onChange: (e) => B(e.target.value),
            placeholder: "https://example.com/icon.png",
            style: q
          }
        ),
        k.trim() && /* @__PURE__ */ t(
          "img",
          {
            src: k.trim(),
            alt: "",
            style: {
              width: 32,
              height: 32,
              borderRadius: 6,
              objectFit: "cover",
              marginTop: 8
            },
            onError: (e) => {
              e.target.style.display = "none";
            },
            onLoad: (e) => {
              e.target.style.display = "block";
            }
          }
        )
      ] }),
      R && /* @__PURE__ */ p("div", { style: Le, children: [
        /* @__PURE__ */ t("span", { style: { color: "#6c7086", fontSize: 12 }, children: "Preview:" }),
        /* @__PURE__ */ p("div", { style: Me, children: [
          /* @__PURE__ */ t(
            "img",
            {
              src: R,
              alt: "",
              style: { width: 32, height: 32, borderRadius: 8, objectFit: "cover" }
            }
          ),
          /* @__PURE__ */ t("span", { style: { color: "#cdd6f4", fontSize: 13 }, children: i.trim() || "Shortcut" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p("div", { style: Fe, children: [
      /* @__PURE__ */ t("button", { onClick: r, style: Be, children: "Cancel" }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: G,
          disabled: !O,
          style: { ...je, opacity: O ? 1 : 0.5 },
          children: "Save"
        }
      )
    ] })
  ] }) });
}
const we = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 100
}, Se = {
  backgroundColor: "#1e1e2e",
  borderRadius: 14,
  minWidth: 340,
  maxWidth: 420,
  maxHeight: "90%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  overflow: "hidden"
}, ve = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 20px 0"
}, Ie = {
  margin: 0,
  color: "#cdd6f4",
  fontSize: 16,
  fontWeight: 600
}, ee = {
  background: "none",
  border: "none",
  color: "#6c7086",
  fontSize: 16,
  cursor: "pointer",
  padding: "4px 8px",
  borderRadius: 6,
  lineHeight: 1
}, ke = {
  padding: "16px 20px",
  overflowY: "auto",
  flex: 1
}, Ce = {
  color: "#6c7086",
  fontSize: 11,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: 8
}, Pe = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6
}, De = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  padding: "8px 6px 6px",
  width: 60,
  backgroundColor: "#313244",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: 10,
  cursor: "pointer",
  transition: "transform 0.15s, box-shadow 0.15s"
}, Re = {
  color: "#a6adc8",
  fontSize: 10,
  textAlign: "center",
  lineHeight: "12px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: 54
}, Ae = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  margin: "8px 0 16px"
}, te = {
  flex: 1,
  height: 1,
  backgroundColor: "rgba(255,255,255,0.08)"
}, Te = {
  color: "#6c7086",
  fontSize: 11,
  whiteSpace: "nowrap"
}, J = {
  display: "block",
  color: "#a6adc8",
  fontSize: 12,
  marginBottom: 4,
  marginTop: 12
}, q = {
  width: "100%",
  padding: "8px 12px",
  backgroundColor: "#313244",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: 8,
  color: "#cdd6f4",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box"
}, oe = {
  padding: "8px 14px",
  backgroundColor: "#313244",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: 8,
  color: "#cdd6f4",
  fontSize: 13,
  cursor: "pointer",
  whiteSpace: "nowrap",
  flexShrink: 0
}, ze = {
  display: "flex",
  gap: 4,
  marginTop: 4
}, Ee = {
  flex: 1,
  padding: "6px 0",
  border: "none",
  borderRadius: 6,
  fontSize: 12,
  cursor: "pointer",
  transition: "background-color 0.15s"
}, Le = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  marginTop: 14,
  padding: "10px 12px",
  backgroundColor: "rgba(255,255,255,0.04)",
  borderRadius: 8
}, Me = {
  display: "flex",
  alignItems: "center",
  gap: 10
}, Fe = {
  display: "flex",
  gap: 8,
  justifyContent: "flex-end",
  padding: "12px 20px 16px",
  borderTop: "1px solid rgba(255,255,255,0.06)"
}, Be = {
  padding: "8px 16px",
  backgroundColor: "transparent",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: 8,
  color: "#a6adc8",
  fontSize: 13,
  cursor: "pointer"
}, je = {
  padding: "8px 16px",
  backgroundColor: "#89b4fa",
  border: "none",
  borderRadius: 8,
  color: "#1e1e2e",
  fontSize: 13,
  fontWeight: 600,
  cursor: "pointer"
}, ne = 5;
function Oe() {
  const n = se(), { setValue: r, onButtonClick: a } = de(), { openPath: c, getDesktopIcons: i } = pe(), { width: f, height: v } = he(), [P, s] = S(!1), [V, I] = S(null), [x, k] = S(null), [B, j] = S(null), [y, W] = S(null), E = F(null), A = F(!1), U = F(null), H = _(n.iconsData), { iconSize: L, gridSpacing: M, showLabels: N, labelColor: G } = n, b = M, D = M, R = Math.max(1, Math.floor(v / M)), O = Math.max(1, Math.floor(f / M)), e = Y(
    (o) => {
      r("iconsData", fe(o));
    },
    [r]
  );
  X(() => {
    a("addShortcut", () => {
      s(!0);
    });
  }, [a]), X(() => {
    a("scanDesktop", async () => {
      try {
        const o = await i();
        if (!o.length) return;
        const h = _(n.iconsData), m = o.map((d) => ({
          id: crypto.randomUUID(),
          name: d.name,
          execPath: d.exec_path,
          iconData: d.icon_base64 ? `data:image/png;base64,${d.icon_base64}` : z(d.name)
        })), g = xe(h, m, R);
        e([...h, ...g]);
      } catch (o) {
        console.error("[DesktopShortcuts] Failed to scan desktop icons:", o);
      }
    });
  }, [a, i, n.iconsData, R, e]), X(() => {
    a("clearAll", () => {
      e([]);
    });
  }, [a, e]);
  const l = Y(
    (o, h, m) => {
      const g = _(n.iconsData), { col: d, row: C } = re(g, R), w = {
        id: crypto.randomUUID(),
        name: o,
        execPath: h,
        iconData: m || z(o),
        col: d,
        row: C
      };
      e([...g, w]), s(!1);
    },
    [n.iconsData, R, e]
  ), u = Y(
    (o) => {
      const h = _(n.iconsData);
      e(h.filter((m) => m.id !== o));
    },
    [n.iconsData, e]
  ), ie = Y(
    (o) => {
      A.current || c(o.execPath).catch((h) => {
        console.error("[DesktopShortcuts] Failed to open path:", o.execPath, h);
      });
    },
    [c]
  ), ae = Y(
    (o, h) => {
      h.target.closest("[data-delete-btn]") || (h.preventDefault(), U.current?.getBoundingClientRect(), E.current = {
        x: h.clientX,
        y: h.clientY,
        iconId: o
      }, A.current = !1);
    },
    []
  );
  X(() => {
    const o = (m) => {
      const g = E.current;
      if (!g) return;
      const d = m.clientX - g.x, C = m.clientY - g.y;
      if (!A.current) {
        if (Math.abs(d) < ne && Math.abs(C) < ne) return;
        A.current = !0, k(g.iconId);
      }
      const w = U.current?.getBoundingClientRect();
      if (!w) return;
      const T = m.clientX - w.left, K = m.clientY - w.top;
      j({ x: T, y: K });
      const le = Math.max(0, Math.min(O - 1, Math.floor(T / b))), ce = Math.max(0, Math.min(R - 1, Math.floor(K / D)));
      W({ col: le, row: ce });
    }, h = () => {
      if (E.current) {
        if (A.current && y && x) {
          const g = _(n.iconsData), d = g.find((w) => w.id === x), C = g.find(
            (w) => w.col === y.col && w.row === y.row
          );
          if (d) {
            const w = g.map((T) => T.id === d.id ? { ...T, col: y.col, row: y.row } : C && T.id === C.id ? { ...T, col: d.col, row: d.row } : T);
            e(w);
          }
        }
        E.current = null, k(null), j(null), W(null), requestAnimationFrame(() => {
          A.current = !1;
        });
      }
    };
    return window.addEventListener("pointermove", o), window.addEventListener("pointerup", h), () => {
      window.removeEventListener("pointermove", o), window.removeEventListener("pointerup", h);
    };
  }, [x, y, n.iconsData, e, b, D, O, R]);
  const $ = x ? H.find((o) => o.id === x) : null;
  return /* @__PURE__ */ p("div", { ref: U, style: { position: "relative", width: f, height: v, overflow: "hidden" }, children: [
    H.length === 0 && !P && /* @__PURE__ */ p("div", { style: We, children: [
      /* @__PURE__ */ p(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "rgba(205,214,244,0.25)",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: { width: 40, height: 40, marginBottom: 12 },
          children: [
            /* @__PURE__ */ t("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }),
            /* @__PURE__ */ t("path", { d: "M12 8v8M8 12h8" })
          ]
        }
      ),
      /* @__PURE__ */ p("span", { style: { color: "rgba(205,214,244,0.4)", fontSize: 13, textAlign: "center" }, children: [
        "No shortcuts yet — click ",
        /* @__PURE__ */ t("strong", { children: "Add Shortcut" }),
        " in the sidebar to get started"
      ] })
    ] }),
    y && x && /* @__PURE__ */ t(
      "div",
      {
        style: {
          position: "absolute",
          left: y.col * b,
          top: y.row * D,
          width: b,
          height: D,
          borderRadius: 8,
          border: "2px dashed rgba(137, 180, 250, 0.6)",
          backgroundColor: "rgba(137, 180, 250, 0.1)",
          pointerEvents: "none",
          zIndex: 5
        }
      }
    ),
    H.map((o) => {
      const h = o.col * b, m = o.row * D, g = V === o.id, d = o.id === x;
      return /* @__PURE__ */ p(
        "div",
        {
          onClick: () => ie(o),
          onPointerDown: (C) => ae(o.id, C),
          title: o.execPath,
          style: {
            position: "absolute",
            left: h,
            top: m,
            width: b,
            height: D,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: d ? "grabbing" : "pointer",
            borderRadius: 8,
            transition: d ? "none" : "background-color 0.15s",
            userSelect: "none",
            backgroundColor: g && !d ? "rgba(255,255,255,0.08)" : "transparent",
            opacity: d ? 0.3 : 1,
            touchAction: "none"
          },
          onMouseEnter: () => !x && I(o.id),
          onMouseLeave: () => I(null),
          children: [
            g && !x && /* @__PURE__ */ t(
              "button",
              {
                "data-delete-btn": !0,
                onClick: (C) => {
                  C.stopPropagation(), u(o.id);
                },
                style: Ue,
                title: "Remove shortcut",
                children: "✕"
              }
            ),
            /* @__PURE__ */ t(
              "img",
              {
                src: o.iconData || z(o.name),
                alt: o.name,
                draggable: !1,
                style: {
                  width: L,
                  height: L,
                  objectFit: "contain",
                  flexShrink: 0,
                  pointerEvents: "none"
                }
              }
            ),
            N && /* @__PURE__ */ t(
              "span",
              {
                style: {
                  marginTop: 4,
                  fontSize: 11,
                  color: G,
                  textAlign: "center",
                  lineHeight: "14px",
                  maxWidth: b - 8,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                  pointerEvents: "none"
                },
                children: o.name
              }
            )
          ]
        },
        o.id
      );
    }),
    $ && B && /* @__PURE__ */ p(
      "div",
      {
        style: {
          position: "absolute",
          left: B.x - b / 2,
          top: B.y - D / 2,
          width: b,
          height: D,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 50,
          opacity: 0.85,
          transform: "scale(1.08)",
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))"
        },
        children: [
          /* @__PURE__ */ t(
            "img",
            {
              src: $.iconData || z($.name),
              alt: $.name,
              draggable: !1,
              style: {
                width: L,
                height: L,
                objectFit: "contain"
              }
            }
          ),
          N && /* @__PURE__ */ t(
            "span",
            {
              style: {
                marginTop: 4,
                fontSize: 11,
                color: G,
                textAlign: "center",
                lineHeight: "14px",
                maxWidth: b - 8,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                textShadow: "0 1px 3px rgba(0,0,0,0.8)"
              },
              children: $.name
            }
          )
        ]
      }
    ),
    P && /* @__PURE__ */ t(
      be,
      {
        onSave: l,
        onCancel: () => s(!1)
      }
    )
  ] });
}
const We = {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 0,
  pointerEvents: "none"
}, Ue = {
  position: "absolute",
  top: 4,
  right: 4,
  width: 18,
  height: 18,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,0.6)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "50%",
  color: "#cdd6f4",
  fontSize: 10,
  cursor: "pointer",
  padding: 0,
  lineHeight: 1,
  zIndex: 10
};
export {
  Oe as default
};
