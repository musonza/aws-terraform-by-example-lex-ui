bucket_name=s3-website-terraform-example-lex-ui
upload:
	aws s3 cp dist/ s3://$(bucket_name)/ --recursive