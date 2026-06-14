module.exports = ({ fullName, jobTitle }) => `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; color: #333;">
  <h2>Congratulations!</h2>

  <p>Dear ${fullName},</p>

  <p>
    We are pleased to inform you that you have been selected
    for the position of
    <strong>${jobTitle}</strong>.
  </p>

  <p>
    Our HR team will contact you shortly with the next steps.
  </p>

  <br />

  <p>Best Regards,</p>
  <strong>InSyllabus Software</strong>
</body>
</html>
`;