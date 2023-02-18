import pandas as pd
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin


def heatmap(data, parametr=[]):
    cm1 = data[parametr].corr()
    json = cm1.to_json(orient='split')
    return json


data = pd.read_excel('general_data.xlsx')
paramet = ["budget_mo", "budget_srf", 'grant_budget',
           'number_grant', 'number_public_associations']


app = Flask(__name__)

CORS(app, supports_credentials=True)

@app.route("/", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def main():
    print('started')
    if request.method == "POST":
        # paramet = request.body.params_list
        print(paramet)
        print('started')
        return heatmap(data, paramet)
