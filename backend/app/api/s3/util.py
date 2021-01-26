import os
import boto3
from flask import Flask, render_template, request, Blueprint
from werkzeug.utils import secure_filename

upload_routes = Blueprint('upload', __name__)

s3 = boto3.client('s3',
                  aws_access_key_id = os.environ.get('AWS_ACCESS_KEY_ID'),
                  aws_secret_access_key = os.environ.get('AWS_SECRET_ACCESS_KEY'))

BUCKET_NAME = 'colour.ly'

@upload_routes.route('')
def upload():
    return render_template('upload_to_s3.html')

@upload_routes.route('', methods=["POST"])
def img_upload():
    img = request.files['file']
    if img:
        filename = secure_filename(img.filename)
        s3.put_object(
            Bucket = BUCKET_NAME,
            Body = img,
            Key = filename
        )
        msg = "Upload Done!"
        return render_template('upload_to_s3.html', msg = msg)
        