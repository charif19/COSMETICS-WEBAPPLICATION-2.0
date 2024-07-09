from flask import Flask, render_template, url_for
from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
import sqlite3

app = Flask(__name__, template_folder='templates')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../db.db'

db = SQLAlchemy(app)


# with app.app_context():
#   db.create_all()  # Call db.create_all() within the context

print(db.metadata.tables)

from sqlalchemy import Column, Integer, String

class Product(db.Model):
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True)
    name = Column(String(80), unique=True, nullable=False)
    description = Column(String(255))  # Increased description length
    price = Column(db.Float, nullable=False)  # Use Float for price
    image = Column(String(120))  # Increased path length for image


app.secret_key = "super secret key"


@app.route("/")
def home():
    return render_template("file.html")

@app.route("/PRODUCTS")
def about():
    return "hellooooo simaneee"

@app.route("/products")
def products():
  products = Product.query.all()
  return render_template("shop.html", products=products)


if __name__ == "__main__":
    # db.create_all
    app.run(debug=True)


