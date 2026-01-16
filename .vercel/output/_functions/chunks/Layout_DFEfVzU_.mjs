import { e as createComponent, f as createAstro, l as renderHead, n as renderSlot, r as renderTemplate } from './astro/server_BoIs0pHp.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="zh-CN" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | 个人博客</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <nav data-astro-cid-sckkx6r4> <div class="container" data-astro-cid-sckkx6r4> <a href="/" data-astro-cid-sckkx6r4>首页</a> <a href="/login" data-astro-cid-sckkx6r4>登录</a> <a href="/register" data-astro-cid-sckkx6r4>注册</a> </div> </nav> <div class="container" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/zhangyuqiao/my-astro-site/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
