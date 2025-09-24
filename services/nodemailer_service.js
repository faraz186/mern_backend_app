import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 465,
  service: "gmail",
  secure: true, // true for 465, false for other ports
  auth: {
    user: "farazmohammad1900@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const send_verification_email = async (email, otp_code, lastName) => {
  const info = await transporter.sendMail({
    from: "farazmohammad1900@gmail.com Muhammad faraz",
    to: email,
    subject: "OTP Verification Code",
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>OTP Confirmation</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      /* Minimal media query — some email clients support this */
      @media only screen and (max-width: 480px) {
        .container {
          width: 100% !important;
          padding: 16px !important;
        }
        .hero {
          padding: 18px !important;
        }
        .otp {
          font-size: 28px !important;
          letter-spacing: 6px !important;
        }
      }
    </style>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f4f6fb;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif;
    "
  >
    <!-- Hidden preheader text : appears in inbox preview -->
    <div
      style="display: none; max-height: 0px; overflow: hidden; mso-hide: all"
    >
      Use the code below to confirm your action. This code will expire in 10
      minutes.
    </div>

    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="background-color: #f4f6fb"
    >
      <tr>
        <td align="center" style="padding: 28px 16px">
          <!-- Email container -->
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            width="600"
            class="container"
            style="
              width: 600px;
              max-width: 600px;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 6px 18px rgba(22, 38, 84, 0.08);
            "
          >
            <!-- Header / brand -->
            <tr>
              <td
                align="center"
                style="
                  padding: 22px 24px;
                  background: linear-gradient(90deg, #5b8cff, #34d1bf);
                  color: #ffffff;
                "
              >
                <h1
                  style="
                    margin: 10px 0 0;
                    font-size: 25px;
                    font-weight: 600;
                    letter-spacing: 0.2px;
                  "
                >
                  OTP Confirmation Mail
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td
                class="hero"
                style="padding: 28px 36px; background-color: #ffffff"
              >
                <p
                  style="
                    margin: 0 0 12px;
                    color: #253352;
                    font-size: 16px;
                    line-height: 1.5;
                  "
                >
                  Hi <strong style="font-weight: 600">${lastName}</strong>,
                </p>

                <p
                  style="
                    margin: 0 0 20px;
                    color: #5b6b85;
                    font-size: 14px;
                    line-height: 1.6;
                  "
                >
                  We received a request to confirm your action. Use the one-time
                  code below to continue. The code is valid for
                  <strong>10 minutes</strong>.
                </p>

                <!-- OTP card -->
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="margin: 18px 0 22px"
                >
                  <tr>
                    <td align="center">
                      <div
                        style="
                          display: inline-block;
                          background: linear-gradient(180deg, #f7fbff, #eef6ff);
                          padding: 18px 22px;
                          border-radius: 12px;
                          border: 1px solid rgba(88, 102, 153, 0.06);
                          box-shadow: 0 4px 12px rgba(52, 81, 125, 0.06);
                        "
                      >
                        <p
                          style="
                            margin: 0 0 8px;
                            color: #25406a;
                            font-size: 13px;
                          "
                        >
                          Your verification code
                        </p>
                        <div
                          class="otp"
                          style="
                            font-family: 'Courier New', Courier, monospace;
                            font-size: 35px;
                            letter-spacing: 8px;
                            font-weight: 700;
                            color: #10203a;
                            margin: 6px 0;
                          "
                        >
                          ${otp_code}
                        </div>
                        <p
                          style="
                            margin: 8px 0 0;
                            color: #637594;
                            font-size: 12px;
                          "
                        >
                          Please do not share this code with anyone.
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- CTA button (bulletproof) -->
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  style="margin: 12px 0 0"
                >
                  <tr></tr>
                </table>

                <hr
                  style="
                    border: none;
                    border-top: 1px solid #eef2fb;
                    margin: 22px 0;
                  "
                />

                <p
                  style="
                    margin: 0;
                    color: #6f7a95;
                    font-size: 13px;
                    line-height: 1.5;
                  "
                >
                  If you didn't request this, you can safely ignore this email
                  or
                  <a
                    href="mailto:support@example.com"
                    style="color: #3366ff; text-decoration: none"
                    >contact support</a
                  >.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                align="center"
                style="padding: 18px 36px; background: #fbfdff"
              >
                <p
                  style="
                    margin: 0;
                    font-size: 12px;
                    color: #9aa3bf;
                    line-height: 1.5;
                  "
                >
                  Uplift Institute of Skills • 123 Learning Ave • City, Country
                  <br />
                  © <span id="year">2025</span> Uplift Institute — All rights
                  reserved.
                </p>
              </td>
            </tr>
          </table>
          <!-- end container -->
        </td>
      </tr>
    </table>
  </body>
</html>



    `,
  });
};
