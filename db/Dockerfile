FROM mongo
COPY init.json /init.json
CMD mongoimport --host mongodb --db snipfeed --collection news --type json --file /init.json 