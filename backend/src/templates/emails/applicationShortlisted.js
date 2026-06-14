module.exports = ({ fullName, jobTitle }) => `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; color: #333;">
  <h2>Application Shortlisted</h2>

  <p>Dear ${fullName},</p>

  <p>
    Congratulations!
  </p>

  <p>
    Your application for
    <strong>${jobTitle}</strong>
    has been shortlisted.
  </p>

  <p>
    Our team will contact you shortly regarding the next stages
    of the recruitment process.
  </p>

  <br />

  <p>Best Regards,</p>
  <strong>InSyllabus Software</strong>
</body>
</html>
`;