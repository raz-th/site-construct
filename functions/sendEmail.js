export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": context.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "noreply", email: "niculae.razvanwork@gmail.com" },
        to: [{ email: data.toEmail, name: data.toName }],
        subject: data.subject,
        htmlContent: data.htmlContent,
      }),
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: response.ok ? 200 : response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}