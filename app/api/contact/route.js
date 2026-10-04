import nodemailer from 'nodemailer';

export async function POST(request) {
try {
const body = await request.json();


const {
  name,
  email,
  phone,
  service,
  budget,
  message,
  website,
} = body;

// Basic spam protection
if (website) {
  return Response.json(
    {
      success: true,
      message: 'Your enquiry has been received.',
    },
    { status: 200 }
  );
}

// Validation
if (!name || !email || !service || !message) {
  return Response.json(
    {
      success: false,
      message:
        'Please fill in all required fields.',
    },
    { status: 400 }
  );
}

if (name.length < 2) {
  return Response.json(
    {
      success: false,
      message: 'Please enter a valid name.',
    },
    { status: 400 }
  );
}

if (message.length < 10) {
  return Response.json(
    {
      success: false,
      message:
        'Please provide a little more information about your project.',
    },
    { status: 400 }
  );
}

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error(
    'Email environment variables are missing.'
  );

  return Response.json(
    {
      success: false,
      message:
        'Email service is not configured yet.',
    },
    { status: 500 }
  );
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const adminEmail =
  process.env.CONTACT_RECEIVER ||
  'rajmalpatidar2248@gmail.com';

const safePhone = phone || 'Not provided';
const safeBudget = budget || 'Not specified';

// Email sent to Parth Tech Solution
await transporter.sendMail({
  from: `"Parth Tech Solution Website" <${process.env.EMAIL_USER}>`,
  to: adminEmail,
  replyTo: email,
  subject: `New Project Enquiry — ${service}`,

  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>

    <body style="
      margin:0;
      padding:0;
      background:#f4f6f8;
      font-family:Arial,Helvetica,sans-serif;
      color:#101828;
    ">

      <div style="
        max-width:680px;
        margin:30px auto;
        background:#ffffff;
        border-radius:16px;
        overflow:hidden;
        border:1px solid #e5e7eb;
      ">

        <div style="
          padding:28px;
          background:linear-gradient(135deg,#2563eb,#4f46e5);
          color:#ffffff;
        ">
          <div style="
            font-size:12px;
            font-weight:bold;
            letter-spacing:1px;
            text-transform:uppercase;
            opacity:.85;
          ">
            New Website Enquiry
          </div>

          <h1 style="
            margin:8px 0 0;
            font-size:26px;
          ">
            New project request
          </h1>

          <p style="
            margin:8px 0 0;
            opacity:.9;
            font-size:14px;
          ">
            Someone has submitted the Parth Tech Solution contact form.
          </p>
        </div>

        <div style="padding:28px;">

          <h2 style="
            margin:0 0 18px;
            font-size:18px;
          ">
            Client Information
          </h2>

          <table style="
            width:100%;
            border-collapse:collapse;
            font-size:14px;
          ">

            <tr>
              <td style="
                padding:10px 0;
                color:#667085;
                width:35%;
              ">
                Name
              </td>

              <td style="
                padding:10px 0;
                font-weight:bold;
              ">
                ${escapeHtml(name)}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px 0;
                color:#667085;
              ">
                Email
              </td>

              <td style="padding:10px 0;">
                <a
                  href="mailto:${escapeHtml(email)}"
                  style="color:#2563eb;"
                >
                  ${escapeHtml(email)}
                </a>
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px 0;
                color:#667085;
              ">
                Phone
              </td>

              <td style="padding:10px 0;">
                ${escapeHtml(safePhone)}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px 0;
                color:#667085;
              ">
                Service
              </td>

              <td style="
                padding:10px 0;
                font-weight:bold;
              ">
                ${escapeHtml(service)}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px 0;
                color:#667085;
              ">
                Budget
              </td>

              <td style="padding:10px 0;">
                ${escapeHtml(safeBudget)}
              </td>
            </tr>

          </table>

          <div style="
            margin-top:25px;
            padding:20px;
            border-radius:12px;
            background:#f8fafc;
            border:1px solid #e5e7eb;
          ">

            <h3 style="
              margin:0 0 10px;
              font-size:15px;
            ">
              Project Details
            </h3>

            <p style="
              margin:0;
              color:#475467;
              font-size:14px;
              line-height:1.7;
              white-space:pre-wrap;
            ">
              ${escapeHtml(message)}
            </p>

          </div>

          <div style="
            margin-top:25px;
            padding-top:20px;
            border-top:1px solid #eaecf0;
            color:#98a2b3;
            font-size:12px;
          ">
            Sent from the Parth Tech Solution website contact form.
          </div>

        </div>
      </div>

    </body>
    </html>
  `,
});

// Optional confirmation email to client
await transporter.sendMail({
  from: `"Parth Tech Solution" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: 'We received your project enquiry — Parth Tech Solution',

  html: `
    <!DOCTYPE html>
    <html>
    <body style="
      margin:0;
      padding:30px 15px;
      background:#f4f6f8;
      font-family:Arial,Helvetica,sans-serif;
    ">

      <div style="
        max-width:600px;
        margin:auto;
        background:#ffffff;
        padding:30px;
        border-radius:16px;
        border:1px solid #e5e7eb;
      ">

        <h2 style="color:#101828;">
          Thank you, ${escapeHtml(name)}!
        </h2>

        <p style="
          color:#475467;
          line-height:1.7;
        ">
          We have received your project enquiry.
          Our team will review your requirements and
          get back to you soon.
        </p>

        <div style="
          margin:20px 0;
          padding:16px;
          background:#f8fafc;
          border-radius:10px;
        ">
          <strong>Service:</strong>
          ${escapeHtml(service)}
        </div>

        <p style="
          color:#667085;
          line-height:1.6;
          font-size:13px;
        ">
          If your requirement is urgent, you can contact
          us directly at +91 93400 04380.
        </p>

        <p style="
          margin-top:25px;
          color:#667085;
          font-size:13px;
        ">
          Parth Tech Solution<br />
          Neemuch, Madhya Pradesh, India
        </p>

      </div>

    </body>
    </html>
  `,
});

return Response.json({
  success: true,
  message:
    'Thank you! Your enquiry has been sent successfully. We will contact you soon.',
});


} catch (error) {
console.error('CONTACT_FORM_ERROR:', error);


return Response.json(
  {
    success: false,
    message:
      'Unable to send your enquiry right now. Please call or WhatsApp us directly.',
  },
  { status: 500 }
);


}
}

function escapeHtml(value) {
return String(value || '')
.replace(/&/g, '&')
.replace(/</g, '<')
.replace(/>/g, '>')
.replace(/"/g, '"')
.replace(/'/g, "'");
}
