import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./mailTemplate.js";
import { mailtrapClient, sender } from "./mail.config.js";

export const sendVerificationEmail = async (email, verificationCode) => {
  const recepient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationCode
      ),
      category: "Email Verification",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification`, error);

    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recepient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      template_uuid: "d16b2ce1-a93e-4fd0-a559-c36face3efcd",
      template_variables: {
        name,
        company_info_name: "Nguyen Quang Huy Company",
      },
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendResetPasswordEmail = async (email, resetURL) => {
  const recepient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });
    console.log("Email reset password sent successfully", response);
  } catch (error) {
    console.error(`Error sending reset password email`, error);
    throw new Error(`Error sending reset password email: ${error}`);
  }
};

export const sendEmailResetPasswordSuccess = async (email) => {
  const recepient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset Successful",
    });
    console.log("Email reset password sent successfully", response);
  } catch (error) {
    console.error(`Error sending reset password email`, error);
    throw new Error(`Error sending reset password email: ${error}`);
  }
};
