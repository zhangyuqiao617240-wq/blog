import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BoIs0pHp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DFEfVzU_.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u6211\u7684\u7F51\u7AD9", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>欢迎来到我的网站！</h1> <p data-astro-cid-j7pv25f6>这是我的第一个Astro页面</p> </main> ` })} `;
}, "/Users/zhangyuqiao/my-astro-site/src/pages/index.astro", void 0);

const $$file = "/Users/zhangyuqiao/my-astro-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
