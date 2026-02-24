// netlify/functions/sendEmail.js

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {  // native fetch, no import needed
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

    return {
      statusCode: response.ok ? 200 : response.status,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}