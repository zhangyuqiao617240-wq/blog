import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BoIs0pHp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DFEfVzU_.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      alert(result.message);
      if (result.success) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        window.location.href = "/";
      }
    } catch (error) {
      alert("\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u7528\u6237\u767B\u5F55" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-container"> <h1>用户登录</h1> <form${addAttribute(handleSubmit, "onsubmit")}> <div class="form-group"> <label for="username">用户名：</label> <input type="text" id="username" name="username" required placeholder="请输入用户名"> </div> <div class="form-group"> <label for="password">密码：</label> <input type="password" id="password" name="password" required placeholder="请输入密码"> </div> <button type="submit" class="btn">登录</button> </form> <p style="margin-top: 20px;">
还没有账号？ <a href="/register">立即注册</a> </p> </div> ` })}`;
}, "/Users/zhangyuqiao/my-astro-site/src/pages/login.astro", void 0);

const $$file = "/Users/zhangyuqiao/my-astro-site/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
