mongoimport --uri mongodb://mongo:27017/grooming --collection blogs --type json --file /SeedCollections/blogs.json --jsonArray ;
mongoimport --uri mongodb://mongo:27017/grooming --collection categories --type json --file /SeedCollections/categories.json --jsonArray ;
mongoimport --uri mongodb://mongo:27017/grooming --collection courses --type json --file /SeedCollections/courses.json --jsonArray ;
mongoimport --uri mongodb://mongo:27017/grooming --collection denounces --type json --file /SeedCollections/denounces.json --jsonArray ;
mongoimport --uri mongodb://mongo:27017/grooming --collection news --type json --file /SeedCollections/news.json --jsonArray ;
mongoimport --uri mongodb://mongo:27017/grooming --collection newsletters --type json --file /SeedCollections/newsletters.json --jsonArray ;
mongoimport --uri mongodb://mongo:27017/grooming --collection userstatuses --type json --file /SeedCollections/userstatuses.json --jsonArray ;
mongoimport --uri mongodb://mongo:27017/grooming --collection users --type json --file /SeedCollections/users.json --jsonArray ;