// src/sendEmail.js
export const sendEmail = async (formData) => {
  try {
    const response = await fetch("/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        toEmail: "niculae.razvanwork@gmail.com",
        toName: "noreply",
        subject: "Solicitare Ofertă",
        htmlContent: `
          <html><body>
          <h2>Solicitare Ofertă</h2>
          <p><strong>Nume Complect:</strong> ${formData.name}</p>
          <p><strong>Telefon:</strong> ${formData.phone}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Tip Proiect:</strong> ${formData.projectType}</p>
          <p><strong>Detalii Proiect:</strong> ${formData.details}</p>
          <hr>
          <p>Acest mesaj a fost trimis de pe formularul de pe site.</p>
          </body></html>
        `,
      }),
    });

    const result = await response.json(); // now always JSON

    if (!response.ok) {
      console.error("Brevo error:", result);
      throw new Error(result.message || "Failed to send email");
    }

    return result;
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};