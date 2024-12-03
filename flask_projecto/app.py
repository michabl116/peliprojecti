from flask import Flask, render_template, jsonify,request
from flask_mysqldb import MySQL
app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return render_template("home.html")
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'game_db'

mysql = MySQL(app)

 #suorita mariadb
@app.route('/api/players', methods=['POST'])
def save_player():
    data = request.json
    name = data.get('name')
    points = data.get('points')

    if not name or points is None:
        return jsonify({'error': 'Invalid data'}), 400

    try:
        cursor = mysql.connection.cursor()
        query = "INSERT INTO players (name, points) VALUES (%s, %s)"
        cursor.execute(query, (name, points))
        mysql.connection.commit()
        cursor.close()
        return jsonify({'message': 'Player saved successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500




if __name__ == '__main__':
    app.run(debug=True)
