from flask import Flask, jsonify, render_template, request
import smtplib
application = Flask(__name__)

@application.route('/')
def index():
    return render_template('index.html')

@application.route('/echo/', methods=['GET'])
def echo():
    ret_data = {
        "name": request.args.get('fullname'),
        "mail": request.args.get('email'),
        "phone": request.args.get('subject'),
        "message": request.args.get('message')
    }

    msg_header = 'From: Bri-Tech: <Bri-Tech>\n' \
	     'To: Receiver Name <Bri-Tech>\n' \
	     'MIME-Version: 1.0\n' \
	     'Content-type: text/html\n' \
	     'Subject: '+ret_data["name"]+'\n'
    title = 'My title'
    msg_content = "Сообщение от клиента: <br> " + ret_data["message"] + " <br> Почта клиента: " + ret_data["mail"] + " <br> Телефон клиента: " + ret_data["phone"]
    msg_full = (''.join([msg_header, msg_content])).encode()
    try:
       server = smtplib.SMTP("mail.bri-tech.kr.ua")
       server.starttls()
       server.login('info@bri-tech.kr.ua', 'Vfkbyrf98')
       server.sendmail('info@bri-tech.kr.ua',
	        ['buravchenkok@yandex.ru','info@bri-tech.kr.ua','montefik@mail.ru','britechkirovograd@gmail.com'],
	        msg_full)
       server.quit()
    except:
    	return "Ошибка, почтовый сервер временно не доступен"
    return "Ваше сообщение отправленно! В ближайшее время мы свяжемся с вами"

if __name__ == "__main__":
    application.run()