module.exports = ({ fullName, jobTitle }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>

<body
  style="
    margin:0;
    padding:40px 0;
    background:#f4f7fb;
    font-family:Arial, Helvetica, sans-serif;
  "
>
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">

        <table
          width="650"
          cellpadding="0"
          cellspacing="0"
          style="
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
            box-shadow:0 4px 15px rgba(0,0,0,0.08);
          "
        >

          <!-- Header -->
          <tr>
            <td
                align="center"
                style="
                background:#ffffff;
                padding:30px;
                border-bottom:1px solid #e5e7eb;
                "
            >
                <img
                src="https://insyllabussoftware.com/assets/Logo-Yimo9pqY.png"
                alt="InSyllabus Software"
                width="220"
                style="display:block;"
                />
            </td>
        </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">

            <h2
                style="
                    margin-top:0;
                    margin-bottom:20px;
                    color:#111827;
                    font-size:30px;
                    font-weight:700;
                "
                >
                Thank You for Applying
            </h2>

              <p>Dear <strong>${fullName}</strong>,</p>

            <div
                style="
                    background:#f8fafc;
                    border:1px solid #e5e7eb;
                    border-radius:10px;
                    padding:20px;
                    margin:25px 0;
                "
            >
                    <p style="margin:0;">
                        <strong>Candidate:</strong> ${fullName}
                    </p>

                    <p style="margin:10px 0 0 0;">
                        <strong>Position:</strong> ${jobTitle}
                    </p>
            </div>

              <p>
                Thank you for applying for the position of
                <strong>${jobTitle}</strong>
                at InSyllabus Software.
              </p>

              <p>
                We have successfully received your application.
                Our recruitment team will carefully review your profile.
              </p>

              <p>
                If your qualifications align with our requirements,
                we will contact you regarding the next stages of the
                recruitment process.
              </p>

              <div style="text-align:center;margin:35px 0;">
                <a
                    href="https://insyllabussoftware.com"
                    style="
                        background:#ff8c32;
                        color:#ffffff;
                        text-decoration:none;
                        padding:14px 30px;
                        border-radius:8px;
                        display:inline-block;
                        font-weight:600;
                    "
                    >
                    Visit Our Website
                </a>
              </div>

              <p>
                Best Regards,<br/>
                <strong>InSyllabus Software</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              align="center"
              style="
                background:#f8fafc;
                color:#64748b;
                font-size:13px;
                padding:25px;
              "
            >
            © ${new Date().getFullYear()} InSyllabus Software
              
            <br /><br />

            <a
                href="https://insyllabussoftware.com"
                style="
                    color:#2563eb;
                    text-decoration:none;"
            >
                https://insyllabussoftware.com
            </a>

            <br /><br />
                This is an automated email. Please do not reply.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;
