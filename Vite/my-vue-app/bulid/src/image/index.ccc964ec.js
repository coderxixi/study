import { d as l, r as u, c as i, a, b as d, e as f, o as p, f as m } from './vendor.6e12f1c5.js'
const v = function () {
  const n = document.createElement('link').relList
  if (n && n.supports && n.supports('modulepreload')) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e)
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const c of t.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && r(c)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(e) {
    const t = {}
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (t.credentials = 'omit')
        : (t.credentials = 'same-origin'),
      t
    )
  }
  function r(e) {
    if (e.ep) return
    e.ep = !0
    const t = s(e)
    fetch(e.href, t)
  }
}
v()
var g = l({
    props: { name: { type: String, default: '\u5218\u563B\u563B' }, age: { type: String, default: '18' } },
    setup(o, { emit: n, attrs: s }) {
      const r = u(0)
      console.log(r)
      const e = () => {
        r.value++
      }
      return () =>
        i('div', null, [
          i('div', { onClick: e }, [a('Test:'), r.value]),
          i('div', null, [a('\u59D3\u540D:'), o.name, a('-'), o.age])
        ])
    }
  }),
  y = (o, n) => {
    const s = o.__vccOpts || o
    for (const [r, e] of n) s[r] = e
    return s
  }
const _ = {
  components: { Index: g },
  setup() {
    return {}
  }
}
function h(o, n, s, r, e, t) {
  const c = f('Index')
  return p(), d('div', null, [i(c)])
}
var x = y(_, [['render', h]])
m(x).mount('#app')
