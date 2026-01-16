export async function POST({ request }) {
  try {
    const data = await request.json();
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: "文章发布成功！",
      post: {
        id: Date.now(),
        title: data.title,
        content: data.content,
        author: data.author,
        date: new Date().toISOString()
      }
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      message: "发布失败"
    }), {
      status: 500
    });
  }
}
