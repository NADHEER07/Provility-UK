from flask import Blueprint, request
import smtplib
from email.mime.text import MIMEText

main_bp = Blueprint('main', __name__)

# 👇 ADD THIS
ADMIN_EMAIL = "lord2k41@gmail.com"

def send_contact_email(name, email, message):

    msg = MIMEText(f"""
New Contact Form Submission 🚀

Name: {name}
Email: {email}

Message:
{message}
""")

    msg["Subject"] = "New Contact Message"
    msg["From"] = ADMIN_EMAIL
    msg["To"] = ADMIN_EMAIL

    try:
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
       

        server.send_message(msg)
        server.quit()

    except Exception as e:
        print("Mail failed:", e)


# 👇 route also add pannunga
@main_bp.route('/contact', methods=["POST"])
def contact():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    send_contact_email(name, email, message)

    return {"status": "success"}