from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        form_url = request.form['form_url']
        return redirect(url_for('form', form_url=form_url))
    return render_template('home.html')

@app.route('/form')
def form():
    form_url = request.args.get('form_url')
    return render_template('form.html', form_url=form_url)

@app.route('/results', methods=['GET'])
def get_results():
    form_url = request.args.get('form_url')
    endpoint_url = request.args.get('endpoint_url')
    return render_template('results.html', form_url=form_url, endpoint_url=endpoint_url)


if __name__ == '__main__':
    app.run()
