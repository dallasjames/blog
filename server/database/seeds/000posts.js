exports.seed = function(knex) {
  return knex('posts').truncate()
    .then(function () {
      return knex('posts').insert([
        {title: 'TestSeed', 
        description: 'Testing the seed', 
        body: 'this is a long blog post about stuff and things',
        date: 'Thu Dec 10 2020 12:10:08 GMT'
      }
      ]);
    });
};
