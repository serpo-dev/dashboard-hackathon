import pandas as pd
from flask import Flask

def heatmap(data, parametr=[]):
    cm1 = data[parametr].corr()
    json = cm1.to_json(orient='split')
    return json

data = pd.read_excel('general_data.xlsx')
paramet = ["budget_mo", "budget_srf", 'grant_budget', 'number_grant', 'number_public_associations']


app = Flask(__name__)

@app.route("/")
def hello_world():
    print('started')
    return heatmap(data, paramet)





