export const runtime = 'edge';

export async function POST(request) {
  try {
    const data = await request.json();

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "noreply", email: "niculae.razvanwork@gmail.com" },
        to: [{ email: data.toEmail, name: data.toName }],
        subject: data.subject,
        htmlContent: data.htmlContent,
      }),
    });

    const result = await response.json();

    return Response.json(result, { status: response.ok ? 200 : response.status });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}