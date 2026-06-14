module.exports = ({ fullName, jobTitle }) => `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; color: #333;">
  <h2>Application Update</h2>

  <p>Dear ${fullName},</p>

  <p>
    Thank you for your interest in the position of
    <strong>${jobTitle}</strong>.
  </p>

  <p>
    After careful review, we have decided not to proceed
    with your application at this time.
  </p>

  <p>
    We appreciate your interest and encourage you to apply
    for future opportunities at InSyllabus Software.
  </p>

  <br />

  <p>Best Regards,</p>
  <strong>InSyllabus Software</strong>
</body>
</html>
`;