import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BoIs0pHp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DFEfVzU_.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      alert(result.message);
      if (result.success) {
        window.location.href = "/";
      }
    } catch (error) {
      alert("\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5");
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u7528\u6237\u6CE8\u518C", "data-astro-cid-qraosrxq": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-container" data-astro-cid-qraosrxq> <h1 data-astro-cid-qraosrxq>用户注册</h1> <form${addAttribute(handleSubmit, "onsubmit")} data-astro-cid-qraosrxq> <div class="form-group" data-astro-cid-qraosrxq> <label for="username" data-astro-cid-qraosrxq>用户名：</label> <input type="text" id="username" name="username" required placeholder="请输入用户名" data-astro-cid-qraosrxq> </div> <div class="form-group" data-astro-cid-qraosrxq> <label for="email" data-astro-cid-qraosrxq>邮箱：</label> <input type="email" id="email" name="email" required placeholder="请输入邮箱" data-astro-cid-qraosrxq> </div> <div class="form-group" data-astro-cid-qraosrxq> <label for="password" data-astro-cid-qraosrxq>密码：</label> <input type="password" id="password" name="password" required placeholder="请输入密码" data-astro-cid-qraosrxq> </div> <button type="submit" class="btn" data-astro-cid-qraosrxq>注册</button> </form> <p style="margin-top: 20px;" data-astro-cid-qraosrxq>
已有账号？ <a href="/login" data-astro-cid-qraosrxq>立即登录</a> </p> </div>  ` })}`;
}, "/Users/zhangyuqiao/my-astro-site/src/pages/register.astro", void 0);

const $$file = "/Users/zhangyuqiao/my-astro-site/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
