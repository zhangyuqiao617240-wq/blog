export async function POST({ request }) {
  try {
    const data = await request.json();
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: "注册成功！",
      user: {
        id: Date.now(),
        username: data.username,
        email: data.email
      }
    }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      message: "注册失败"
    }), {
      status: 500
    });
  }
}
