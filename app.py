from flask import(
    Flask,render_template
)
import os


app = Flask(__name__,static_url_path="")
app.config["SEND_FILE_MAX_AGE_DEFAULT"]=0
app.secret_key="msaya1269"

APP_ROOT=os.path.dirname(os.path.abspath(__file__))

@app.route("/")
def home():
    return render_template("index.html")


if __name__=="__main__":
    app.run(port=5001,debug=True,host='0.0.0.0')