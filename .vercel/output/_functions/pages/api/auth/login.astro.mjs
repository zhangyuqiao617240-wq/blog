export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
  try {
    const data = await request.json();
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: "登录成功！",
      user: {
        id: 1,
        username: data.username
      },
      token: "demo-token-" + Date.now()
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      message: "登录失败"
    }), {
      status: 401
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
